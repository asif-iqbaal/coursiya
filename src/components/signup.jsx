import React, { useState, useContext } from "react";
import { toast } from 'react-toastify'
import signup from './signup.jpg'
import { useNavigate } from "react-router-dom";
import axios from "./axios";
import { AuthContext } from "../authentication/Authcontext";

export default function SignUp() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { username, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const [hide, setHide] = useState(true);
  const [hideAdmin, setHideAdmin] = useState(false);
  const [hideUser, setHideUser] = useState(false);
  const { login, admin } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleHide() {
    setHide((prev) => !prev);
    setHideAdmin((prev) => !prev);
  }

  const handleHide2 = () => {
    setHide((prev) => !prev)
    setHideUser((prev) => !prev);

  }
  const handleAdminSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/admin/signup", formData);
      console.log(res);
      const data = JSON.parse(res.config.data);
      const uname = data.username
      localStorage.setItem('uname', uname);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('admin', true);
      admin();
      login();
      toast.success("login success");
      navigate("/");

    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }

  }
  const handleUserSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/signup", formData);
      const data = JSON.parse(res.config.data);
      const uname = data.username
      localStorage.setItem('uname', uname);
      localStorage.setItem('token', res.data.token);
      login();
      toast.success("login success");
      navigate("/");

    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }

  }


  return (
    <>
      <div className="w-screen h-screen flex md:flex-row flex-col">
        <div className="md:w-2/3 h-full overflow-hidden ">
          <img src={signup} alt="signup" className="w-full h-full object-cover " />
        </div>
        <div className="md:w-1/3 h-full flex flex-col justify-center items-center shadow-lg">
          <div className=" text-center md:text-6xl text-4xl font-extrabold text-blue-500 tracking-tight p-3">COURSiya</div>
          <div className=" text-center md:text-4xl text-2xl font-extrabold text-black tracking-tight p-2">Create an account</div>
          {hide && <div
            onClick={handleHide}
            className="cursor-pointer w-2/3 md:w-3/4 md:h-20  h-12 rounded-lg bg-blue-500 text-white my-3 text-center content-center text-2xl md:text-4xl font-bold transition transform hover:scale-105">Admin</div>}
          {hideAdmin && <form
            onSubmit={handleAdminSignup} className="flex flex-col w-4/5 md:h-2/3 border-2 rounded-lg md:p-10">
            <label htmlFor="username" className="text-xl md:text-2xl m-2 font-semibold">
                Username
              </label>
              <input
                className="h-10 md:h-12 p-2 text-lg border-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="username"
                type="text"
                required
                placeholder="User Username"
                value={username}
                onChange={onChange}
              />
              <label htmlFor="password" className="text-xl md:text-2xl m-2 font-semibold">
                Password
              </label>
              <input
                className="h-10 md:h-12 p-2 text-lg border-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                type="password"
                required
                placeholder="********"
                value={password}
                onChange={onChange}
              />
              <button className="bg-blue-500 h-10 md:h-14 mt-4 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all">
                Submit
              </button>
              <p className="text-center text-gray-500 mt-4">
                You are signing into COURsiya, the world's best course selling and purchasing website. Have a great experience.
              </p>
          </form>}
          {hideUser && <form
            onSubmit={handleUserSignup}
            className="flex flex-col w-4/5 md:h-2/3 border-2 rounded-lg md:p-10">
            <label htmlFor="username" className="text-xl md:text-2xl m-2 font-semibold">
                Username
              </label>
              <input
                className="h-10 md:h-12 p-2 text-lg border-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="username"
                type="text"
                required
                placeholder="User Username"
                value={username}
                onChange={onChange}
              />
              <label htmlFor="password" className="text-xl md:text-2xl m-2 font-semibold">
                Password
              </label>
              <input
                className="h-10 md:h-12 p-2 text-lg border-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                type="password"
                required
                placeholder="********"
                value={password}
                onChange={onChange}
              />
              <button className="bg-blue-500 h-10 md:h-14 mt-4 rounded-lg text-white font-semibold hover:bg-blue-600 transition-all">
                Submit
              </button>
              <p className="text-center text-gray-500 mt-4">
                You are signing into COURsiya, the world's best course selling and purchasing website. Have a great experience.
              </p>
          </form>}
          {hide && <div
            onClick={handleHide2}
            className="cursor-pointer w-2/3 md:w-3/4 md:h-20 h-12 rounded-lg bg-blue-500 text-white md:m-5 content-center text-center md:text-4xl text-2xl font-bold transition transform hover:scale-105">User</div>}
        </div>
      </div>
    </>
  );
}