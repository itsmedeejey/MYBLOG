import NavBar from "../components/NavBar"
import axios from "axios"
import PostList from "../components/Postlist"
import { useEffect,useState } from "react"
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const usersPost = () =>{
    const navigate = useNavigate()

    const baseURL = import.meta.env.VITE_API_BASE_URL;

        const token = localStorage.getItem("token");
        const user = jwtDecode(token)
        const [posts, setPosts] = useState([]);

     
        useEffect(() => {
            const fetchPost = async()=>{
                try {
                    if (!token) {
                      console.log("You need to login first");
                      return;
                    }
                
              const res =  await axios.get(`${baseURL}/user/userposts`,{
                  headers: {
                      Authorization: `bearer ${token}`
                  }
              });
              setPosts(res.data)
            }catch(err){
            console.log(err)}


            }
                
            fetchPost()
        }, [posts]);

        const handleLogout = () => {
            localStorage.removeItem("token"); 
            navigate("/");
        };
        if (!posts) return <p>Loading...</p>;

    return(<div>

        <NavBar/>
        <div className="flex justify-between mx-16 my-4" >
        <h1 className="font-extralight text-[48px] uppercase font-serif">your posts,</h1>
        <h1 className="font-serif font-medium text-[36px] pt-3  "> @{user.user}</h1>
        </div>
        <div className="flex flex-col justify-end items-end mr-16">

        <button className="bg-red-600 p-1 px-2 rounded-xl"  onClick={handleLogout}>  logout</button>
        </div>
        
        <PostList posts={posts}></PostList>





    </div>);
};
export default usersPost;