import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostWidget = ({ categories, slug, recentBlogs }) => {
  return (
    <div className="bg-white text-black shadow-lg rounded-lg p-8 pb-12 mb-8 mt-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {recentBlogs?.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link to={`/blog/${post.slug}`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
