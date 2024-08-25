import React, { useEffect, useState } from "react";
import axios from './axios.js'; // Assuming axios is correctly set up with base URL
import Card from "./card.jsx";
import course from './course.jpg'
import cer from './cer.png'
import compass from './compass.png'
import money from './money.png'
import study from './study.png'
import Navigation from "./navigation.jsx";
import Footer from "./footer.jsx";
import { useNavigate } from "react-router-dom";


function Home() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('/user/courses');
                setCourses(res.data.Course); // Assuming the
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);
    const navigate = useNavigate();
    const handleCardClick = (course) => {
        navigate(`/course/${course._id}`, { state: { ...course } });
      };


    return (
        <>
        <Navigation />
           <div className="bg-white">
           <div style={{ backgroundImage: `url(${course})` }} className=" md:h-[60vh] bg-cover  ">
                <div className="w-1/2 h-2/3 text-white flex flex-col justify-center items-center">
                    <h2 className="md:text-9xl text-4xl font-extrabold font-sans p-1 tracking-tight">
                        COURsiyA
                    </h2>
                    <p className="md:text-6xl  text-2xl p-1 font-semibold tracking-tight">
                        Learning & Earning platform 
                    </p>
                </div>

                </div>
            
            <div className="md:h-[80vh]  w-screen ">
                <div className="flex flex-col justify-center items-center h-1/3">
                    <p className="md:text-5xl text-2xl font-semibold tracking-wide pb-8">Invest your career with coursiya </p>
                    <p className="tracking-wide md:text-lg text-sm text-gray-700">Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top </p>
                    <p className="tracking-wide md:text-lg text-sm text-gray-700">   instructors from leading universities and companies.</p>
                </div>
                <div className="h-2/3 w-screen flex justify-evenly md:flex-row flex-col  items-center">
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={compass} alt="compass" className="h-1/3 w-1/3 p-2" />
                        <h3 className="p-2 md:text-lg text-sm">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={money} alt="compass" className="h-1/3 w-1/3 p-2" />
                        <h3 className="p-2 text-lg">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={cer} alt="compass" className="h-1/3 w-1/3 p-2" />
                        <h3 className="p-2 text-lg">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={study} alt="compass" className="h-1/3 w-1/3 p-2" />
                        <h3 className="p-2 text-lg">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                </div>
            </div>

            <div className=" flex  w-full h-auto justify-evenly flex-col flex-wrap pt-3 bg-orange-100 ">
              <div>
                <h2 className="md:text-6xl text-3xl font-bold text-black tracking-tight">Best selling courses</h2>
                </div>  
                <div className="flex  w-full h-auto justify-evenly md:flex-wrap pt-3 overflow-hidden overflow-x-scroll hide-scrollbar">
                {courses.slice(0, 4).map((course, index) => (
                <div onClick={()=>handleCardClick(course)}>
                    <Card
                        key={index}
                        tittle={course.tittle}
                        
                        image={course.imageLink}
                        price={course.price}
                    />
                </div>
                ))}
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
