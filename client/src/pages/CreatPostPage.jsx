import { useState } from "react";
import NavBar from "../components/NavBar";
import Tiptap from "../components/Tiptap";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(""); // HTML content as string
    const navigate = useNavigate()
    const handleEditorChange = (htmlContent) => {
        setContent(htmlContent);
        console.log("Editor content updated:", htmlContent);
    };
   
    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            console.error("Title and content are required!");
            return;
        }

        try {
            const postData = {
                title,
                content,
            };
            const token = localStorage.getItem("token");
            console.log(token)
            if(!token){
                alert("please signin first!!")
                console.error("you are not authorize")
                navigate("/signup")
                return;  
                
            }  
            const response = await fetch("http://localhost:3000/user/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `bearer ${token}`
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                console.log("Post submitted successfully");
                navigate("/home")
                // optional: reset form or navigate
            } else {
                console.error("Failed to submit post");
            }
        } catch (error) {
            console.error("Error submitting post:", error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="flex">
                <section className="w-[90%] py-10 ml-3 md:w-[60%] md:ml-16">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        className="text-3xl font-serif outline-none w-full md:text-5xl" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="max-w-3xl">
                        <Tiptap onChange={handleEditorChange} />
                    </div>
                    
                    <button 
                        onClick={handleSubmit}
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Publish Post
                    </button>
                </section>
            </div>
        </div>
    );
};

export default PostPage;
