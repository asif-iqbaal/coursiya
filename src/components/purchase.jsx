import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "./axios";
import { toast } from "react-toastify";

export default function Purchased() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [bank, setBank] = useState("");
    const username = localStorage.getItem('uname');
    const location = useLocation();
    const { state } = location;
    console.log(state);
    const { tittle, imageLink, description, price } = location.state;
    const courseId = state._id
    console.log("id is ", courseId);
    const handleGet = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        try {
            const res = await axios.post(
                `/user/courses/${courseId}`,
                { username },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (res) {
                toast.success("Purchased complete. Kindly check your profile.");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }





    const handleBack = () => {
        navigate('/courses')
    }
    return (
        <>
            <div className="flex  flex-col w-screen h-[100vh]">
                <div
                    onClick={handleBack} className=" h-[10vh] cursor-pointer bg-black text-white w-[100px] m-2 rounded-xl flex justify-center items-center text-2xl font-bold">back</div>
                <div className="w-screen h-[90vh] flex ">
                    <div className="w-3/4 flex justify-evenly h-full ">
                        <img src={imageLink} alt="image" className="h-4/5 w-2/3 p-7 rounded-lg" />
                        <div ><h2 className="text-4xl font-bold tracking-tight my-2">{tittle}</h2>
                            <p className="text-lg  my-2">{description}</p>
                            <p className="w-1/2 p-3 m-3 text-center bg-blue-500 my-2 text-white font-semibold  rounded-lg">{price}</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h1 className="text-4xl font-bold text-blue-500 tracking-tight">Get Course</h1>
                        <form
                            onSubmit={handleGet}
                            className="flex flex-col w-4/5 h-5/6 border-2 rounded-lg p-10">
                            <label htmlFor="username "
                                className="text-2xl m-3 font-semibold tracking-wide">Username</label>
                            <input
                                className="h-12 p-4 text-lg border-2"
                                name="username"
                                type="text"
                                required
                                value={username}
                                placeholder="CCOURsiya"


                            />
                            <label htmlFor="username "
                                className="text-2xl m-3 font-semibold tracking-wide">Bank Name</label>
                            <input
                                className="h-12 p-4 text-lg border-2"
                                name="username"
                                type="text"
                                required
                                value={bank}
                                placeholder="CCOURsiya"
                                onChange={(e) => setBank(e.target.value)}


                            />
                            <label htmlFor="username"
                                className="text-2xl m-3 font-semibold tracking-wide">Price</label>
                            <input
                                className="h-12 p-4 text-lg border-2"
                                name="password"
                                type="text"
                                required="true"
                                placeholder="********"
                                value={price}
                            />
                            <button
                                className="bg-blue-500 h-14  p-4 my-3 rounded-lg text-white font-semibold">GET</button>
                            <p className=" text-center font-semibold text-gray-400 mt-3
                         ">you are sign in into COURsiya world best cousrse selling and purchased website have a great exprience.</p>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}