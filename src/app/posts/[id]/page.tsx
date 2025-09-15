'use client';

import { useEffect, useState } from 'react';
import { getPost, deletePost, Post } from '@/lib/firestore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function loadPost() {
      try {
        if (id) {
          const postData = await getPost(id);
          setPost(postData);
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        setIsDeleting(true);
        await deletePost(id);
        router.push('/posts');
      } catch (error) {
        console.error('Error deleting post:', error);
        setIsDeleting(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <h2 className="text-red-700 text-lg font-medium">Post not found</h2>
          <p className="text-red-600 mt-1">The post you're looking for doesn't exist or has been deleted.</p>
          <Link href="/posts" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Back to posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href="/posts" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to posts
      </Link>
      
      <article className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <div className="prose max-w-none mt-6">
            <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
          </div>
        </div>
      </article>
      
      <div className="mt-6 flex space-x-3">
        <Link 
          href={`/posts/${id}/edit`} 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Edit Post
        </Link>
        <button 
          onClick={handleDelete} 
          disabled={isDeleting}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition disabled:opacity-70"
        >
          {isDeleting ? 'Deleting...' : 'Delete Post'}
        </button>
      </div>
    </div>
  );
}
