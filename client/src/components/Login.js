import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINTS } from "../utils/constant.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice.js";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isLoading = useSelector(store => store.app.isLoading);

  const navigate = useNavigate();

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if (isLogin) {
      // login

      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINTS}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user)); 
        navigate("/browse");
        console.log(user)
      } catch (error) {
        console.log(error);
      }
      finally{
        dispatch(setLoading(false));
      }
    } else {
      // register
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINTS}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      finally{
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
          alt="bg"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col w-3/13 p-12 items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-black opacity-90 "
      >
        <h1 className="text-white text-3xl mb-5 font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col w-full">
          {!isLogin && (
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}

          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium">
          {`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span
              onClick={loginHandler}
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              {isLogin ? "SignUp" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
