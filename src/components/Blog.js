import React from "react";
import PostCard from "./PostCard";
import Categories from "./Categories";
import PostWidget from "./PostWidget";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {});

  return (
    <div className="container max-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))} */}
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
