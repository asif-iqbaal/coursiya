import React, { useEffect, useState, useContext } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import { AuthContext } from "../authentication/Authcontext";
import axios from './axios'
import RectCard from './rectCard2'
import Loading from "./loading";

export default function Profile() {
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const { logout } = useContext(AuthContext);
    const username = localStorage.getItem('uname');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetch = async () => {

            try {
                const res = await axios.get('/user/purchashedCourses', {
                    params: { username }
                })

                if (res) {
                    setCourses(res.data.courses);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

        fetch();
    }, [username, token])

    useEffect(() => {
        const fetch = async () => {

            try {

                const res = await axios.get("/admin/courses", {
                    params: { username }
                });

                if (res) {
                    setCourses(res.data.courses);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

        fetch();
    }, [username, token])

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        localStorage.removeItem('uname');
    }

    // if (loading) {
    //     return (
    //         <div className='h-screen w-screen flex  justify-center items-center'>
    //             <Loading />
    //         </div>
    //     );
    // }
    return (
        <>
            <Navigation />
            <div className="w-screen h-screen flex p-10 md:flex-row flex-col ">
                <div className="md:w-2/5 flex flex-col justify-evenly">
                    <h2 className="md:text-6xl font-extrabold tracking-tight"> Welcome {username || "Oops No User"}</h2>
                    <p className="md:text-xl font-semibold">Welcome to our COURSiya the Learning and Earning platform .
                        COURsiyA is powered by a team of passionate educators, developers, and support staff who are dedicated to creating a seamless learning experience. Our team is constantly innovating to meet the needs of our global student community.
                    </p>
                    <button onClick={handleLogout}
                        className="bg-red-500 m-3 md:p-3 p-1 md:w-1/3 rounded-lg text-lg font-semibold text-white">Logout</button>
                </div>
                <div className="md:w-3/5 h-full   overflow-y-scroll">
                    <h2 className="text-4xl font-extrabold h-1/4">My Courses</h2>
                    {loading ? (
                        <div className=' flex  justify-center items-center'>
                            <Loading />
                        </div>
                    ) : (<div className="flex  justify-center items-center flex-col w-full  font-bold ">
                        {courses.map((course, index) => (

                            <RectCard

                                key={index}
                                description={course.description}
                                tittle={course.tittle}
                                image={course.imageLink}
                            />
                        ))
                        }
                    </div>)}
                </div>
            </div>
            <Footer />
        </>
    );
}