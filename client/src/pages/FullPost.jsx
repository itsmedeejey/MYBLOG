import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
const FullPost = () => {
  const { id } = useParams(); // This gets the ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Replace this with your actual fetch logic
    fetch(`http://localhost:3000/user/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (<div>
    <NavBar></NavBar>
    <div className="max-w-3xl mx-auto p-5 py-10 font-serif">
      <h1 className="text-[56px] font-bold text-gray-800">{post.title}</h1>
      <div className="text-[24px] text-gray-600 mt-4 leading-relaxed" dangerouslySetInnerHTML={{
        __html: post.content,
      }}>
       </div>
      <p className="text-sm text-gray-500 mt-2 font-light ">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>
  </div>
  );
};

export default FullPost;
