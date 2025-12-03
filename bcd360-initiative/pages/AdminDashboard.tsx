import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { BlogPost, ContactMessage } from '../types';
import { 
  LayoutDashboard, FileText, MessageSquare, LogOut, Plus, Trash2, 
  Search, X, Save, Image as ImageIcon, Tag as TagIcon, Loader2, AlertTriangle 
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'messages'>('posts');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // New Post Form State
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    content: '',
    category: '',
    tags: '',
    imageUrl: '',
  });
  const [submittingPost, setSubmittingPost] = useState(false);

  // Check Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchData();
      } else {
        navigate('/adminlogin');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchData = async () => {
    setError(null);
    try {
      // Fetch Posts
      const postsQ = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const postsSnap = await getDocs(postsQ);
      setPosts(postsSnap.docs.map(d => ({ id: d.id, ...d.data() } as BlogPost)));

      // Fetch Messages
      const msgsQ = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const msgsSnap = await getDocs(msgsQ);
      setMessages(msgsSnap.docs.map(d => ({ id: d.id, ...d.data() } as ContactMessage)));
    } catch (error: any) {
      console.error("Error fetching data:", error);
      if (error.code === 'permission-denied') {
        setError("Permission Denied");
      } else {
        setError("Failed to load data. Please check your internet connection.");
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/adminlogin');
  };

  const handleDeletePost = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      try {
        await deleteDoc(doc(db, "posts", id));
        setPosts(posts.filter(p => p.id !== id));
      } catch (error: any) {
        console.error("Error deleting post:", error);
        alert(`Failed to delete post: ${error.message}`);
      }
    }
  };

  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingPost(true);

    try {
      const postData = {
        title: newPost.title,
        description: newPost.description,
        content: newPost.content,
        category: newPost.category || 'News',
        tags: newPost.tags.split(',').map(t => t.trim()).filter(t => t !== ''),
        imageUrl: newPost.imageUrl || 'https://picsum.photos/800/600',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, "posts"), postData);
      
      // Update local state (approximated, as serverTimestamp is async)
      setPosts([{ id: docRef.id, ...postData, createdAt: Date.now() } as BlogPost, ...posts]);
      
      // Reset form
      setIsAddingPost(false);
      setNewPost({ title: '', description: '', content: '', category: '', tags: '', imageUrl: '' });
      alert("Post published successfully!");
    } catch (error: any) {
      console.error("Error adding post:", error);
      alert(`Failed to publish post: ${error.message}. Check permissions.`);
    } finally {
      setSubmittingPost(false);
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary" size={40}/></div>;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-dark text-white hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-serif font-bold text-white">BCD360 <span className="text-secondary text-sm block font-sans">Admin Panel</span></h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => { setActiveTab('posts'); setIsAddingPost(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'posts' ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/10'}`}
          >
            <FileText size={20} /> Posts
          </button>
          <button 
            onClick={() => { setActiveTab('messages'); setIsAddingPost(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'messages' ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/10'}`}
          >
            <MessageSquare size={20} /> Messages
            <span className="bg-secondary text-white text-xs px-2 py-0.5 rounded-full ml-auto">{messages.length}</span>
          </button>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button onClick={handleLogout} className="flex items-center gap-2 text-gray-400 hover:text-white transition w-full px-4 py-2">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto">
        
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
           <span className="font-bold text-dark">Admin Panel</span>
           <button onClick={handleLogout} className="text-sm text-red-600 font-bold">Logout</button>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
             <div className="flex items-start gap-3">
               <AlertTriangle className="text-red-500 mt-0.5" size={20} />
               <div>
                 <p className="font-bold text-red-800">Connection Error</p>
                 <p className="text-sm text-red-700">
                   {error === "Permission Denied" ? "Database access denied. Please update your Firestore Security Rules." : error}
                 </p>
               </div>
             </div>
             {error === "Permission Denied" && (
                <div className="mt-4 p-4 bg-red-100 rounded-lg text-xs font-mono text-red-900 overflow-x-auto border border-red-200">
                  <p className="font-bold mb-2 uppercase text-red-800">Copy & Paste these rules into Firestore Console:</p>
                  <pre className="whitespace-pre-wrap">{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
      match /comments/{commentId} {
        allow read, create: if true;
        allow update, delete: if request.auth != null;
      }
    }
    match /messages/{messageId} {
      allow create: if true;
      allow read, delete: if request.auth != null;
    }
  }
}`}</pre>
                </div>
             )}
          </div>
        )}

        {/* Dynamic Content Area */}
        {activeTab === 'posts' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-dark">Blog Posts</h1>
              {!isAddingPost && (
                <button 
                  onClick={() => setIsAddingPost(true)}
                  className="bg-primary hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition font-medium shadow-sm"
                >
                  <Plus size={20} /> New Post
                </button>
              )}
            </div>

            {isAddingPost ? (
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in border border-gray-200">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <h2 className="text-xl font-bold text-dark">Create New Post</h2>
                  <button onClick={() => setIsAddingPost(false)} className="text-gray-400 hover:text-red-500"><X size={24} /></button>
                </div>
                
                <form onSubmit={handleAddPost} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
                        <input 
                          type="text" required
                          value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                          placeholder="Enter a catchy title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select 
                          value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                        >
                          <option value="">Select Category...</option>
                          <option value="News">News</option>
                          <option value="Event">Event</option>
                          <option value="Success Story">Success Story</option>
                          <option value="Research">Research</option>
                          <option value="Health">Health</option>
                        </select>
                      </div>
                       <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <div className="relative">
                           <ImageIcon size={18} className="absolute left-3 top-3.5 text-gray-400"/>
                           <input 
                            type="text"
                            value={newPost.imageUrl} onChange={e => setNewPost({...newPost, imageUrl: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Paste a direct link to an image.</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                       <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                        <textarea 
                          required rows={3}
                          value={newPost.description} onChange={e => setNewPost({...newPost, description: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                          placeholder="A brief summary for the preview card..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                         <div className="relative">
                           <TagIcon size={18} className="absolute left-3 top-3.5 text-gray-400"/>
                           <input 
                            type="text"
                            value={newPost.tags} onChange={e => setNewPost({...newPost, tags: e.target.value})}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Comma, separated, tags"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Content</label>
                    <textarea 
                      required rows={12}
                      value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none font-mono text-sm"
                      placeholder="Write your article here..."
                    />
                  </div>

                  <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                    <button type="button" onClick={() => setIsAddingPost(false)} className="px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium">Cancel</button>
                    <button 
                      type="submit" 
                      disabled={submittingPost}
                      className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 shadow-md flex items-center gap-2"
                    >
                      {submittingPost ? <Loader2 className="animate-spin" size={20}/> : <><Save size={20}/> Publish Post</>}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-sm font-bold text-gray-500 uppercase">Title</th>
                      <th className="p-4 text-sm font-bold text-gray-500 uppercase hidden md:table-cell">Category</th>
                      <th className="p-4 text-sm font-bold text-gray-500 uppercase hidden sm:table-cell">Date</th>
                      <th className="p-4 text-sm font-bold text-gray-500 uppercase text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.length === 0 ? (
                       <tr><td colSpan={4} className="p-8 text-center text-gray-500">
                         {error ? "Unable to load posts." : "No posts found. Create one to get started!"}
                       </td></tr>
                    ) : (
                      posts.map((post) => (
                        <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                          <td className="p-4">
                            <div className="font-bold text-dark">{post.title}</div>
                            <div className="text-xs text-gray-400 md:hidden">{post.category}</div>
                          </td>
                          <td className="p-4 hidden md:table-cell">
                             <span className="bg-blue-50 text-primary px-2 py-1 rounded-md text-xs font-bold">{post.category}</span>
                          </td>
                          <td className="p-4 text-sm text-gray-600 hidden sm:table-cell">{post.date}</td>
                          <td className="p-4 text-right">
                            <button 
                              onClick={() => handleDeletePost(post.id!)}
                              className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition"
                              title="Delete Post"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'messages' && (
           <div className="space-y-6">
            <h1 className="text-3xl font-bold text-dark">Form Submissions</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 text-sm font-bold text-gray-500 uppercase">Sender</th>
                      <th className="p-4 text-sm font-bold text-gray-500 uppercase">Contact</th>
                      <th className="p-4 text-sm font-bold text-gray-500 uppercase w-1/2">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.length === 0 ? (
                       <tr><td colSpan={3} className="p-8 text-center text-gray-500">
                          {error ? "Unable to load messages." : "No messages yet."}
                       </td></tr>
                    ) : (
                      messages.map((msg) => (
                        <tr key={msg.id} className="border-b border-gray-100 hover:bg-gray-50 transition align-top">
                          <td className="p-4">
                            <div className="font-bold text-dark">{msg.name}</div>
                            <div className="text-xs text-gray-400">
                               {msg.createdAt?.seconds ? new Date(msg.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                            </div>
                          </td>
                          <td className="p-4 text-sm">
                             <div className="text-primary">{msg.email}</div>
                             <div className="text-gray-500 text-xs mt-1">{msg.phone}</div>
                             <div className="text-gray-500 text-xs">{msg.address}</div>
                          </td>
                          <td className="p-4 text-sm text-gray-700 leading-relaxed">
                            {msg.message}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
           </div>
        )}

      </main>
    </div>
  );
};

export default AdminDashboard;