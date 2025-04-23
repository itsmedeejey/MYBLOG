// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import Search from "./Search";
export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div>
      <Search/>
      </div>
      <Link to="/" className="text-xl font-semibold hover:text-blue-600">
        Home
      </Link>

      <Link to="/create" className="text-xl font-semibold hover:text-blue-600">
        Write
      </Link>
      <Link to="/yourposts" className="text-xl font-semibold hover:text-blue-600">
        Your Posts
      </Link>
      <Link to="/signup" className="text-xl font-semibold hover:text-blue-600">
        Logout
      </Link>
    </div>
  );
}
