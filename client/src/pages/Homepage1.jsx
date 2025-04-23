// HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import PostList from '../components/Postlist';
const HomePage = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}/user/posts`) 
      .then(res => {
        setPosts(res.data.data);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching posts:', err));
  }, []);
  
  return (<div className='max-w-screen  overflow-x-hidden'>
    
        <NavBar ></NavBar>
   
       <PostList posts={posts} loading={loading}></PostList>
    </div> );
};

export default HomePage;
