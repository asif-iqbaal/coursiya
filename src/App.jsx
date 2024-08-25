import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navigation from './components/navigation';
import About from './components/about';
import Footer from './components/footer';
import Notification from './components/notification';
import SignUp from './components/signup';
import Login from './components/login';
import { AuthProvider } from './authentication/Authcontext'; // Import the AuthProvider
import Courses from './components/courses';
import AddCourse from './components/addCourses';
import Profile from './components/profile';
import Purchased from './components/purchase';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addcourse' element = {<AddCourse />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/course/:course_id' element={<Purchased />} />
        </Routes>
        <Notification />
        {/* <Footer /> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
