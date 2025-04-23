import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts = [] }) => {
  if (!Array.isArray(posts)) {
    return <p className="text-center text-gray-500 mt-10">No posts to show.</p>;
  }
  const sortedPosts = [...posts].reverse()
  // sort(
  //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  // );
  return (
    <div className="max-w-xs md:max-w-3xl mx-auto overflow-x-hidden p-5 py-10 space-y-6">
      {sortedPosts.map(post => (
        <Link key={post._id} to={`/posts/${post._id}`}>
          <div className="hover:bg-slate-100 transition-colors duration-200 rounded-md p-4">
            <div className="border-b pb-6">
              <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>

              {/* Display Tiptap HTML content safely */}
              <div
                className="text-gray-600 mt-2 prose prose-sm"
                dangerouslySetInnerHTML={{
                  __html: post.content?.slice(0, 300) + '...',
                }}
              />

              <p className="text-sm text-gray-500 mt-2">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
