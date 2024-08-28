import React, { useState, useEffect } from "react";
import axios from "./axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
    const [formData, setFormData] = useState({ tittle: "", description: "", imageLink: null, price: "" })
    const username = localStorage.getItem('uname');
    const { tittle, description, imageLink, price } = formData;
    const navigate = useNavigate();
    const onChange = (e) => {
        if (e.target.name === "image") {
            setFormData({ ...formData, imageLink: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("tittle", tittle);
        data.append("description", description);
        data.append("price", price);
        data.append("image", imageLink);
        data.append("username", username);


        console.log("image are", imageLink);

        try {
            const token = localStorage.getItem('token');
            console.log("hi there");
            const response = await axios.post("/admin/courses", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}` // Replace with your actual token
                }

            },
                {
                    params: { username }
                }
            );
            console.log("Course created successfully:", response.data);
            toast.success("course are uploaded")
            navigate("/courses")
        } catch (error) {
            console.error("There was an error creating the course:", error);
            toast.error(error.message);

        }
    };
    const handleBack = () => {
        navigate('/courses')
    }
    return (
        <>
            <div className="h-[100vh] bg-gray-200 overflow-hidden">

                <div className="md:text-6xl text-2xl font-bold text-blue-500 text-center md:h-1/5 bg-gray-200 ">
                    <div
                        onClick={handleBack} className=" md:h-[10vh] h-[5vh] cursor-pointer bg-black m-3 text-white w-[100px]  rounded-xl flex justify-center items-center md:text-2xl text-sm font-bold">back
                    </div>Add Courses </div>
                <div className=" h-4/5 w-screen  flex justify-center items-center bg-gray-200">
                    <form onSubmit={onSubmit}
                        className="flex flex-col w-4/5 ">
                        <label htmlFor="tittle"
                            className="md:text-2xl m-3">Title</label>
                        <input
                            className=" md:p-4 text-lg"
                            name="tittle"
                            type="text"
                            required
                            placeholder="title"
                            value={tittle}
                            onChange={onChange}
                        />


                        <label htmlFor="imageLink"
                            className="md:text-2xl m-3">Price</label>
                        <input
                            className=" md:p-4 text-lg"
                            name="price"
                            type="text"
                            required
                            placeholder="price"
                            value={price}
                            onChange={onChange}
                        />
                        <label htmlFor="description" className="md:text-2xl m-3">Description</label>
                        <textarea
                            className="h-28 p-4 md:text-lg resize-none overflow-y-auto"
                            name="description"
                            required
                            placeholder="description"
                            value={description}
                            onChange={onChange}
                        />
                        <label htmlFor="imageLink"
                            className="md:text-2xl m-1">Image</label>
                        <input
                            className=" md:p-4 md:text-lg"
                            name="image"
                            type="file"
                            required
                            placeholder="image"

                            onChange={onChange}
                        />
                        <button
                            className="bg-blue-500  md:w-1/3 md:p-4 p-1 m-2 rounded-lg text-2xl text-white font-semibold">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}