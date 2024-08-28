import React, { useEffect, useState } from "react";
import axios from './axios.js'; // Assuming axios is correctly set up with base URL
import Card from "./card.jsx";
import { Link } from "react-router-dom";
import course from './course.jpg'
import cer from './cer.png'
import business from './business.jpg'
import compass from './compass.png'
import money from './money.png'
import study from './study.png'
import Navigation from "./navigation.jsx";
import Footer from "./footer.jsx";
import { useNavigate } from "react-router-dom";


function Home() {
    const user = localStorage.getItem('uname');
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
           <div className="bg-white md:pt-[7vh]">
           <div style={{ backgroundImage: `url(${course})` }} className=" md:h-[75vh] md:bg-cover flex  ">
                <div className="md:w-1/2  text-white flex flex-col  md:justify-center md:items-center">
                <div className="w-full md:p-24 ">
                    <h2 className="md:text-7xl text-2xl font-bold font-sans p-1 tracking-tight">
                        COURsiyA Learn without limits
                    </h2>
                    <p className="md:text-xl  text-sm p-1   tracking-tight">
                    Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.
                    </p>
                  {!user && <Link to="/signup">  <button
                    className="bg-white p-1 m-1 md:w-1/3 h-1/4 text-blue-700 border-2 border-blue-500 rounded-lg text-lg
                    font-bold hover:bg-gray-100"
                    >Join With Us</button></Link>}
                    </div>
                </div>
               
                </div>
            
            <div className="md:h-[80vh]  w-screen ">
                <div className="flex flex-col justify-center items-center  h-1/3">
                    <p className="md:text-5xl text-2xl font-semibold tracking-wide pb-8">Invest your career with coursiya </p>
                    <p className="tracking-wide md:text-lg text-sm text-gray-700">Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top </p>
                    <p className="tracking-wide md:text-lg text-sm text-gray-700">   instructors from leading universities and companies.</p>
                </div>
                <div className="h-2/3 w-screen flex justify-evenly md:flex-row flex-col  items-center">
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={compass} alt="compass" className="md:h-1/3 md:w-1/3 p-2 h-1/5 w-1/5" />
                        <h3 className="p-2 md:text-lg text-sm">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={money} alt="compass" className="md:h-1/3 md:w-1/3 p-2 h-1/5 w-1/5" />
                        <h3 className="p-2 text-lg">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={cer} alt="compass" className="md:h-1/3 md:w-1/3 p-2 h-1/5 w-1/5" />
                        <h3 className="p-2 text-lg">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                    <div className="md:w-1/5 flex flex-col justify-center items-center text-gray-700">
                        <img src={study} alt="compass" className="md:h-1/3 md:w-1/3 p-2 h-1/5 w-1/5" />
                        <h3 className="p-2 text-lg">Learn anything</h3>
                        <p className="pt-2">Explore any interest or trending topic,</p>
                        <p>take prerequisites, and advance your skills</p>
                    </div>
                </div>
            </div>

            <div className=" flex  w-full h-auto justify-evenly flex-col flex-wrap pt-3 bg-white ">
              <div>
                <h2 className="md:text-6xl text-3xl font-semibold text-black tracking-tight pl-10">Best selling courses</h2>
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
            <div className="h-[80vh] w-screen flex md:flex-row flex-col md:px-40 bg-gray-100">
                <div className="md:w-1/2 h-full flex justify-center  ">
                    <img src={business} alt="img"  className=" w-3/4 md:h-2/3 py-20"/>
                </div>
                <div className="md:w-1/2 h-full flex flex-col justify-center items-center">
                        <p className=" w-2/3 md:text-5xl text-lg font-semibold tracking-wider">
                        Take the next step toward your personal and professional goals with Coursiya.
                        </p>
                        <p className="w-2/3 ">Join now to receive personalized recommendations from the full Coursera catalog.</p>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
