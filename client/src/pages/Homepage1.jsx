// HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import PostList from '../components/Postlist';
const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user/posts') 
      .then(res => setPosts(res.data.data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  return (<div className='max-w-screen  overflow-x-hidden'>
    
        <NavBar ></NavBar>
   
       <PostList posts={posts}></PostList>
    </div> );
};

export default HomePage;
