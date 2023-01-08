import React from "react";
import PostCard from "./PostCard";
import Categories from "./Categories";
import PostWidget from "./PostWidget";
import { useEffect, useState } from "react";
import blogService from "../services/blog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      setBlogs(blogs.allPosts);
      setRecentBlogs(blogs.recentPosts);
    });
  }, []);

  return (
    <div className="container max-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {blogs.map((post) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
