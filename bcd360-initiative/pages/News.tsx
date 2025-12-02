import React, { useEffect, useState } from 'react';
import { NEWS } from '../constants';
import { BlogPost } from '../types';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const News: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          // If no dynamic posts, fallback to static news
          const staticPosts: BlogPost[] = NEWS.map(n => ({
            id: n.id.toString(),
            title: n.title,
            description: n.summary,
            content: n.summary,
            category: 'News',
            tags: [],
            imageUrl: n.image,
            date: n.date,
            createdAt: Date.now()
          }));
          setPosts(staticPosts);
        } else {
          const fetchedPosts: BlogPost[] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as BlogPost));
          setPosts(fetchedPosts);
        }
      } catch (error: any) {
        // Handle permission errors gracefully
        if (error.code === 'permission-denied') {
          console.warn("Firestore access denied. Displaying static content. Please check Firebase Security Rules.");
        } else {
          console.error("Error fetching posts:", error);
        }
        
        // Fallback to static data
         const staticPosts: BlogPost[] = NEWS.map(n => ({
            id: n.id.toString(),
            title: n.title,
            description: n.summary,
            content: n.summary,
            category: 'News',
            tags: [],
            imageUrl: n.image,
            date: n.date,
            createdAt: Date.now()
          }));
          setPosts(staticPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-dark mb-2">News & Updates</h1>
            <p className="text-gray-600">Latest stories, events, and opportunities from BCD360.</p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white h-96 rounded-xl shadow-sm animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col h-full border border-gray-100">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary flex items-center gap-1 shadow-sm">
                    <Calendar size={12} className="text-secondary" />
                    {post.date}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                   <div className="flex items-center gap-2 mb-3">
                     <span className="text-xs font-bold uppercase tracking-wider text-accent bg-green-50 px-2 py-0.5 rounded-full">
                       {post.category || 'News'}
                     </span>
                   </div>
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <NavLink 
                    to={`/news/${post.id}`}
                    className="flex items-center gap-2 text-secondary font-bold text-sm hover:gap-3 transition-all mt-auto group/btn"
                  >
                    Read Full Story <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;