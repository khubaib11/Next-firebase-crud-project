import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Firestore CRUD
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <Link 
                href="/" 
                className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                Home
              </Link>
              <Link 
                href="/posts" 
                className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                Posts
              </Link>
              <Link 
                href="/posts/new" 
                className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                New Post
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
          >
            Home
          </Link>
          <Link 
            href="/posts" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
          >
            Posts
          </Link>
          <Link 
            href="/posts/new" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
          >
            New Post
          </Link>
        </div>
      </div>
    </nav>
  );
}
