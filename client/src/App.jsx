import Loginpage from './pages/Loginpage.jsx'
import Homepage1 from './pages/Homepage1.jsx'
import Navbar from './components/NavBar.jsx'
import CreatePostPage from './pages/CreatPostPage.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import FullPost from './pages/FullPost.jsx';
import UsersPost from './pages/UsersPost.jsx';
function App() {
  return(
  <>
    <BrowserRouter>
      <Routes>
          <Route path='/signup' element={<Loginpage/>}></Route>
          <Route path='/posts/:id' element={<FullPost/>}></Route>
          <Route path='/home'element={<Homepage1/>} ></Route>
          <Route path='/create'element={<CreatePostPage/>} ></Route>
          <Route path='/yourposts'element={<UsersPost/>} ></Route>

      </Routes>
    
    </BrowserRouter>
  </>
  )
  
}

export default App
