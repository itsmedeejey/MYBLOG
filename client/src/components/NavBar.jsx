
import { Link } from "react-router-dom"
import {jwtDecode} from "jwt-decode"
export default function NavBar(){
      const token = localStorage.getItem("token")
      let isloggedIn= false 
      if(token){
        isloggedIn = true;
      }
    const user = jwtDecode(token)
    return (
      <div className="flex justify-between  h-20 border-b-2 border-black  px-2 md:px-5 items-center">
        <div className="flex items-center justify-between md:px-10  font-serif font-semibold">
          <div className="flex justify-start items-start text-3xl font-extrabold md:text-5xl ">
            <Link to={"/home"}>HIGH</Link>
          </div>

          <div className="flex pl-3 pr-3  p-1 rounded-3xl ml-40 md:ml-4  bg-gray-200 ">
            <div className="flex   pt-1">

            <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_iconCarrier">
    <g clipPath="url(#clip0_15_152)">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" strokeLinejoin="round"></circle>
      <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"></path>
    </g>
    <defs>
      <clipPath id="clip0_15_152">
        <rect width="24" height="24"></rect>
      </clipPath>
    </defs>
  </g>
</svg>
            </div >
            <input
              placeholder="Search"
              type="search"
              className=" hidden   md:block placeholder:font-serif placeholder:font-thin bg-gray-200 text-lg  p-1 md:max-w-64 outline-none  font-sans font-thin  rounded-lg px-2 p "
            />
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5 ">
          <Link to={"/create"}>
            <div className="flex flex-row gap-2 opacity-[60%] p-2 hover:bg-slate-100 hover:opacity-[100%] cursor-pointer rounded-md ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="28"
              >
                <g data-name="75-Write">
                  <path d="M30 7v18a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h9V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7z" />
                  <path d="M22.38 24H11a3 3 0 0 1 0-6h4v-2h-4a5 5 0 0 0 0 10h13a1 1 0 0 0 .89-.55l2-4A1 1 0 0 0 27 21V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v20a1 1 0 0 0 .11.45zM23 2h2v1h-2zm0 3h2v15h-2z" />
                </g>
              </svg>{" "}
              write
            </div>
          </Link>

       {!isloggedIn &&  (

          <Link to={"/signup"} className="hover:bg-red-400 p-2 rounded-md ">
            Sign in
          </Link>
       )}
        

<Link to={"/yourposts"}>
          <div className="cursor-pointer rounded-full h-12 w-12 bg-slate-200 flex justify-center "> 
            <div className=" flex flex-col justify-center h-full font-smeibold uppercase">

          {user.user[0]}
              
            </div>
          </div>
</Link>



        </div>
      </div>
    );
}                                                                                                                  