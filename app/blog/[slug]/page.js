"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Client, Databases, ID, Query } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6489a8013256c7ddb799");

const BlogPage = ({ params }) => {
  const [blogPost, setBlogPost] = useState()
  const { slug } = params;
  useEffect(() => {
    document.title = "Home: Coder Blog"
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "6489ab13ad0f3f00500c","6489ab1eb8d455f755e0",
      [
        Query.equal('slug', slug)
      ]
    );

    promise.then(function (response) {
      console.log(response);
      setBlogPost(response.documents[0])
    }, function (error) {
      console.log(error);
    });
  }, [])

  

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{blogPost?.title}</h1>
        <div className="relative h-60 mb-4">
          <Image
            src={blogPost?.image}
            alt={blogPost?.title}
            layout="fill"
            className="rounded"
          />
        </div>
        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: blogPost?.content}}></p>
      </div>
    </>
  );
};

export default BlogPage;
