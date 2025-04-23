import React ,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Loginpage() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const [isLogin, setIsLogin] = useState(true);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
      try {
        const res = await axios.post(`${baseURL}/user/signin`, {
          email,
          password
        });
  
        localStorage.setItem('token', res.data.token);
        // console.log(res.data.token)
        setSuccess('Login successful!');
        navigate("/")
      } catch (err) {
        setError(err.response?.data?.message || 'Login failed',err);
      }
    };

    const handleSignup= async (e) =>{
      e.preventDefault();
      setError('');
      setSuccess('');
      try{
        const res = await axios.post(`${baseURL}/user/signup`,
        {  email,password}); 
     
     setSuccess('Signup successful! Please log in.');
      setIsLogin(true); // Switch to login mode
      }
      catch(error){
        setError(error.response?.data?.message || 'signup failed');

      }
    }

    return (
      <section className='md:min-h-screen flex items-center justify-center md:justify-start bg-black font-serif'>
        <div className=' w-screen min-h-screen md:w-[50%] md:h-screen p-10 flex flex-col items-center text-center gap-8 bg-white rounded'>
          <h1 className="font-bold text-5xl">Welcome to HIGH</h1>
          <h2 className='font-extrabold text-blue-500 text-3xl' >{isLogin ? 'Log in' : 'Sign Up'}</h2>
  
          <form onSubmit={isLogin ? handleLogin : handleSignup}>
            <div className="flex flex-col w-80 text-2xl text-left gap-1">
              <span>Username</span>
              <input
                className='px-2 bg-slate-300 rounded-lg placeholder:text-white'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                required
              />
              <span>Password</span>
              <input
                className='px-2 bg-slate-300 rounded-lg placeholder:text-white'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </div>
  
            <button
              type="submit"
              className='h-10 w-40  text-slate-100 px-10 mt-4 mb-6 rounded-xl bg-sky-500 hover:bg-sky-700'
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
  
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </form>
  
          <p className='font-serif'>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              className='text-blue-400 hover:underline'
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setSuccess('');
              }}
            >
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </p>
        </div>
      </section>
    );
  };