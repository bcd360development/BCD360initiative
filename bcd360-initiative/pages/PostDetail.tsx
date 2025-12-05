import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { BlogPost, Comment } from '../types';
import { NEWS } from '../constants';
import { ArrowLeft, Calendar, Tag, Share2, Clock, User, MessageSquare, Send, Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  
  // Comment State
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState({ name: '', message: '' });
  const [isPostingComment, setIsPostingComment] = useState(false);
  const [commentError, setCommentError] = useState('');

  const navigate = useNavigate();

  // Fetch Post
  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        // First try to find in Firestore
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);
        } else {
          throw new Error("Document not found or access denied, checking static.");
        }
      } catch (error) {
        // Fallback to static data on error or not found
        const staticPost = NEWS.find(n => n.id.toString() === id);
        if (staticPost) {
          setPost({
            id: staticPost.id.toString(),
            title: staticPost.title,
            titleFr: staticPost.titleFr,
            description: staticPost.summary,
            descriptionFr: staticPost.summaryFr,
            // Use full content if available, otherwise fallback to summary + placeholder
            content: staticPost.content || (staticPost.summary + "\n\n(This is a placeholder for the full article content.)"),
            contentFr: staticPost.contentFr,
            category: staticPost.category || 'News',
            categoryFr: staticPost.categoryFr,
            tags: staticPost.tags || ['Update', 'Community'],
            tagsFr: staticPost.tagsFr,
            imageUrl: staticPost.image,
            date: staticPost.date,
            createdAt: Date.now()
          });
        } else {
           // If we can't find it in static either, redirect
           if (!post) navigate('/news');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  // Fetch Comments (Real-time)
  useEffect(() => {
    if (!id) return;

    const commentsRef = collection(db, 'posts', id, 'comments');
    const q = query(commentsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const loadedComments = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Comment[];
        setComments(loadedComments);
        setCommentError('');
      },
      (err) => {
        console.warn("Comments unavailable:", err);
        if (err.code === 'permission-denied') {
             setCommentError('Comments are currently disabled.');
        }
      }
    );

    return () => unsubscribe();
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!id) return;
      
      setIsPostingComment(true);
      try {
          await addDoc(collection(db, 'posts', id, 'comments'), {
              author: commentForm.name,
              content: commentForm.message,
              createdAt: serverTimestamp()
          });
          setCommentForm({ name: '', message: '' });
      } catch (err: any) {
          console.error(err);
          alert("Could not post comment. Please check your internet connection.");
      } finally {
          setIsPostingComment(false);
      }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) return null;

  const displayTitle = language === 'EN' ? post.title : (post.titleFr || post.title);
  const displayContent = language === 'EN' ? post.content : (post.contentFr || post.content);
  const displayDescription = language === 'EN' ? post.description : (post.descriptionFr || post.description);
  const displayCategory = language === 'EN' ? post.category : (post.categoryFr || post.category);
  const displayTags = language === 'EN' ? post.tags : (post.tagsFr || post.tags);

  return (
    <div className="min-h-screen bg-white pb-20 animate-fade-in">
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] relative">
        <img 
          src={post.imageUrl} 
          alt={displayTitle} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <div className="absolute top-8 left-4 md:left-8">
           <NavLink to="/news" className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur px-4 py-2 rounded-full transition text-sm font-medium">
             <ArrowLeft size={16} /> Back to News
           </NavLink>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 md:pb-16 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-semibold tracking-wide">
              <span className="bg-secondary text-white px-3 py-1 rounded-full uppercase text-xs shadow-sm">
                {displayCategory}
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <Calendar size={14} /> {post.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight shadow-sm">
              {displayTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-t-3xl p-6 md:p-12 shadow-xl border-t border-gray-100 min-h-[500px]">
          
          {/* Post Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-8 mb-8 text-sm text-gray-500">
             <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <User size={16} className="text-primary"/>
                 <span className="font-medium text-gray-700">BCD360 Admin</span>
               </div>
               <div className="flex items-center gap-2">
                 <Clock size={16} />
                 <span>3 min read</span>
               </div>
             </div>
             <button className="flex items-center gap-2 hover:text-primary transition">
               <Share2 size={16} /> Share
             </button>
          </div>

          {/* Body Content */}
          <article className="prose prose-lg prose-blue max-w-none prose-headings:font-serif prose-headings:font-bold prose-img:rounded-xl">
            <p className="lead text-xl text-gray-600 font-light mb-8 italic border-l-4 border-accent pl-4">
              {displayDescription}
            </p>
            {/* Render content with markdown image support */}
            <div className="text-gray-800 leading-relaxed font-serif space-y-6">
              {displayContent.split(/(!?\[.*?\]\(.*?\))/).map((part, idx) => {
                // Check if it's a markdown image
                const imageMatch = part.match(/!\[(.*?)\]\((.*?)\)/);
                if (imageMatch) {
                  return (
                    <div key={idx} className="my-8 flex justify-center">
                      <img 
                        src={imageMatch[2]} 
                        alt={imageMatch[1] || 'Post image'}
                        className="max-w-full h-auto rounded-xl shadow-lg border border-gray-200"
                      />
                    </div>
                  );
                }
                // Regular text content
                return part ? (
                  <div key={idx} className="whitespace-pre-wrap">
                    {part}
                  </div>
                ) : null;
              })}
            </div>
          </article>

          {/* Tags */}
          {displayTags && displayTags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Related Topics</h4>
              <div className="flex flex-wrap gap-2">
                {displayTags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm hover:bg-primary hover:text-white transition cursor-pointer">
                    <Tag size={14} /> {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Comments Section */}
        <div className="mt-8 bg-white rounded-3xl p-6 md:p-12 shadow-lg border border-gray-100 mb-20">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8 flex items-center gap-3">
              <MessageSquare className="text-secondary" /> 
              Comments <span className="text-gray-400 text-lg font-normal">({comments.length})</span>
            </h3>

            {/* Comment List */}
            <div className="space-y-6 mb-12">
               {comments.length === 0 ? (
                 <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                   {commentError ? commentError : "No comments yet. Be the first to share your thoughts!"}
                 </div>
               ) : (
                 comments.map((comment) => (
                   <div key={comment.id} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                        {comment.author.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <span className="font-bold text-dark">{comment.author}</span>
                          <span className="text-xs text-gray-400">
                            {comment.createdAt?.seconds ? new Date(comment.createdAt.seconds * 1000).toLocaleDateString(undefined, {
                              year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                            }) : 'Just now'}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{comment.content}</p>
                      </div>
                   </div>
                 ))
               )}
            </div>

            {/* Comment Form */}
            <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100">
              <h4 className="text-lg font-bold text-primary mb-6">Leave a Reply</h4>
              <form onSubmit={handleCommentSubmit} className="space-y-6">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      required
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white transition"
                      placeholder="Your Name"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                    <textarea 
                      required
                      rows={4}
                      value={commentForm.message}
                      onChange={(e) => setCommentForm({...commentForm, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none bg-white transition"
                      placeholder="Share your thoughts..."
                    />
                 </div>
                 <button 
                  type="submit" 
                  disabled={isPostingComment || !!commentError}
                  className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-900 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isPostingComment ? <Loader2 className="animate-spin" size={18}/> : <Send size={18} />}
                   Post Comment
                 </button>
              </form>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PostDetail;