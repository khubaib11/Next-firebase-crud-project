import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <Image
            className="mx-auto mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Firestore CRUD</span>
            <span className="block text-blue-600">Next.js Application</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            A simple demonstration of Create, Read, Update, and Delete operations using Firebase Firestore and Next.js.
          </p>
          
          <div className="mt-10">
            <Link
              href="/posts"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition inline-flex items-center"
            >
              View Posts
            </Link>
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl font-bold mb-2">C</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Create</h3>
                <p className="text-gray-600">Add new posts with title and content</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl font-bold mb-2">R</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Read</h3>
                <p className="text-gray-600">View all posts or individual post details</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl font-bold mb-2">U</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Update</h3>
                <p className="text-gray-600">Edit existing posts to update content</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl font-bold mb-2">D</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Delete</h3>
                <p className="text-gray-600">Remove posts you no longer need</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Project Showcase for Wonder Craftz</span>
            </p>
            <p className="text-gray-600 mb-2">
              Developed by <span className="font-medium">Khubaib Khan</span>
            </p>
            <a 
              href="https://khubaib-khan-portfolio.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              View My Portfolio →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
