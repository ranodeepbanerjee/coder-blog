"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";
import Link from "next/link";
import { Client, Databases, ID, Query } from "appwrite";



const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6489a8013256c7ddb799")

export default function Home() {
  const [blogPosts, setblogPosts] = useState([])

  useEffect(() => {
    document.title = "Home: Coder Blog"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "6489ab13ad0f3f00500c","6489ab1eb8d455f755e0"
    );

    promise.then(function (response) {
      console.log(response);
      setblogPosts(response.documents)
    }, function (error) {
      console.log(error);
    });
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-white rounded shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.metadesc}...</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
