import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export interface Post {
  id?: string;
  title: string;
  content: string;
}

const collectionName = "posts";

// Create
export async function addPost(data: Omit<Post, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
}

// Read All
export async function getPosts(): Promise<Post[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Post));
}

// Read One
export async function getPost(id: string): Promise<Post | null> {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? ({ id: snapshot.id, ...snapshot.data() } as Post) : null;
}

// Update
export async function updatePost(id: string, data: Partial<Post>): Promise<void> {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data);
}

// Delete
export async function deletePost(id: string): Promise<void> {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
}
