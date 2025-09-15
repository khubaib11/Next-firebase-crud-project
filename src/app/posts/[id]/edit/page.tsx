'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPost, updatePost } from '@/lib/firestore';
import Link from 'next/link';

export default function EditPost({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function loadPost() {
      try {
        const post = await getPost(id);
        if (post) {
          setTitle(post.title);
          setContent(post.content);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('Error loading post');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }
    
    try {
      setIsSaving(true);
      await updatePost(id, { title, content });
      router.push(`/posts/${id}`);
    } catch (err) {
      setError('Error updating post');
      console.error(err);
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error === 'Post not found') {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <h2 className="text-red-700 text-lg font-medium">Post not found</h2>
          <p className="text-red-600 mt-1">The post you're trying to edit doesn't exist.</p>
          <Link href="/posts" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Back to posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href={`/posts/${id}`} className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to post
      </Link>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Post</h1>
          
          {error && error !== 'Post not found' && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Post title"
                required
              />
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                placeholder="Post content"
                required
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-70"
              >
                {isSaving ? 'Saving...' : 'Update Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
