import React,{useContext, useEffect,useState} from "react";
import axios from "./axios";
import Card from "./card";
import { Link } from "react-router-dom";
import RectCard from "./rectcard";
import Navigation from "./navigation";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";
import { AuthContext } from "../authentication/Authcontext";

export default function Courses(){
    //const {isAdmin} = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading,setLoading] = useState(true);
    // const adminCheck = admin();
   const navigate = useNavigate();
   const isAdmin = localStorage.getItem('admin');
    
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('/user/courses');
                setCourses(res.data.Course);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching courses:", error);
                
            }
        };

        fetchCourses();
    }, []);

    const handleCardClick = (course) => {
        navigate(`/course/${course._id}`, { state: { ...course } });
      };
      //here i put the courses in random way
      const shuffledCourses = [...courses].sort(() => Math.random() - 0.5);

      if (loading) {
        return (
            <div className='h-screen w-screen flex  justify-center items-center'>
                <Loading />
            </div>
        );
    }
      
    return(
        <>
        
        <Navigation />
       { isAdmin && <div className="w-screen bg-blue-600 ">
          <Link to="/addcourse"><button className="md:w-1/5 m-2 p-2 md:h-20 rounded text-white md:text-4xl font-bold bg-blue-500">ADD YOURS</button></Link> 
       </div>}
              {!loading && <div className=" flex   w-screen h-auto justify-evenly flex-wrap pt-3 bg-blue-500">
                {shuffledCourses.map((course, index) => (
                <div className="p-5"
                onClick={()=>handleCardClick(course)}>
                    <RectCard
                   
                        key={index}
                        tittle={course.tittle}
                        description={course.description}
                        image={course.imageLink}
                        price={course.price}
                    />
                   </div>
                ))}
            </div>}
            <Footer />

        </>
    );
}