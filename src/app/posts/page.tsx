'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts, Post } from '@/lib/firestore';

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postData = await getPosts();
        setPosts(postData);
      } catch (err) {
        console.error('Error loading posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    
    loadPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white-900">All Posts</h1>
        <Link 
          href="/posts/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center"
        >
          <span className="mr-1 text-lg">+</span> New Post
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">
                  {post.content}
                </p>
                <div className="mt-4 text-blue-600 font-medium">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-1">No posts yet</h3>
          <p className="text-gray-500 mb-6">Create your first post to get started</p>
          <Link 
            href="/posts/new"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-flex items-center"
          >
            <span className="mr-1 text-lg">+</span> Create New Post
          </Link>
        </div>
      )}
    </div>
  );
}
