# Firestore CRUD Application

A modern Next.js application demonstrating CRUD operations using Firebase Firestore.

![Next.js](https://img.shields.io/badge/Next.js-13+-000000?style=flat-square&logo=next.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

## 🚀 Project Showcase

This project was developed by **Khubaib Khan** as a skill showcase for **Wonder Craftz**.

🔗 [My Portfolio](https://khubaib-khan-portfolio.vercel.app/)

## ✨ Features

- **Complete CRUD Operations**: Create, Read, Update, and Delete posts
- **Dynamic Routing**: Next.js App Router with dynamic route segments
- **Real-time Database**: Firebase Firestore integration
- **Modern UI**: Responsive design with Tailwind CSS
- **TypeScript**: Type-safe code throughout the application

## 📂 Project Structure

```
src/
├── app/                   # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── components/        # Reusable UI components
│   │   └── Navbar.tsx     # Navigation component
│   └── posts/            # Posts feature
│       ├── page.tsx       # Posts list page
│       ├── [id]/          # Dynamic route for single post
│       │   ├── page.tsx   # Post detail page
│       │   └── edit/      # Nested dynamic route
│       │       └── page.tsx # Edit post page
│       └── new/           # Create new post
│           └── page.tsx   # New post form
├── lib/                   # Core utilities
│   └── firestore.ts       # Firebase Firestore CRUD functions
└── firebase.ts            # Firebase configuration
```

## 🔄 Dynamic Routing Explained

This project implements dynamic routing using Next.js App Router's file-based routing system:

### Route Structure

- `/posts` - List all posts
- `/posts/new` - Create a new post
- `/posts/[id]` - View a specific post by ID
- `/posts/[id]/edit` - Edit a specific post by ID

### How It Works

1. **Directory Structure**: The `[id]` syntax in the directory name tells Next.js this is a dynamic segment.

2. **Parameter Access**: Inside these components, the route parameter is accessed via the `params` prop:

```tsx
export default function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  // Use the ID to fetch post data
}
```

3. **Data Fetching**: Each route uses the ID parameter to fetch the appropriate data from Firestore.

4. **Navigation**: Links are dynamically generated with the post IDs:

```tsx
<Link href={`/posts/${post.id}`}>View Post</Link>
```

5. **Nested Routes**: The `/posts/[id]/edit` demonstrates nested dynamic routing, combining both the post ID parameter with a specific action.

## 💻 Technologies

- **Next.js**: React framework with App Router
- **Firebase Firestore**: NoSQL cloud database
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework

## 🛠️ Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/firestore-crud-kk.git
cd firestore-crud-kk
```

2. Install dependencies:
```bash
npm install
```

3. Set up your Firebase configuration:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Firestore database
   - Add your Firebase configuration to `src/firebase.ts`

4. Run the development server:
```bash
npm run dev
```

## 📱 Usage

- **View Posts**: Browse all posts on the home page
- **Create Post**: Click "New Post" to create a new entry
- **View Details**: Click on any post to view its details
- **Edit Post**: Use the edit button on a post's detail page
- **Delete Post**: Remove posts with the delete button

## 👨‍💻 About the Developer

I'm **Khubaib Khan**, a web developer passionate about creating modern, user-friendly applications with clean code and intuitive interfaces. This project showcases my skills in React, Next.js, and Firebase integration.

For more of my work, visit my [portfolio](https://khubaib-khan-portfolio.vercel.app/).

## 📄 License

This project is open-source and available under the MIT License.
