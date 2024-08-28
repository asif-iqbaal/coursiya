import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import cer from './cer.png'
import compass from './compass.png'
import money from './money.png'
import study from './study.png'

export default function About ()  {
  return (
    <>
    <Navigation />
    <div className="bg-gray-100 py-16 pt-[7vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to COURsiyA
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empowering learners worldwide with top-quality courses.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={cer} alt="Our Team" className="rounded-lg shadow-lg"/>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-lg text-gray-500">
                At COURsiyA, our mission is to make high-quality education accessible to everyone, everywhere. 
                We believe in the power of knowledge and strive to provide courses that can transform lives and careers.
              </p>
            </div>
            <div>
              <img src={money} alt="Our Vision" className="rounded-lg shadow-lg"/>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-lg text-gray-500">
                Our vision is to become the world's leading online course platform, offering diverse and 
                comprehensive learning opportunities to students and professionals alike.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={study} alt="Our Team" className="rounded-lg shadow-lg"/>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">Our Team</h3>
              <p className="mt-2 text-lg text-gray-500">
                COURsiyA is powered by a team of passionate educators, developers, and support staff who are dedicated to creating a seamless learning experience. Our team is constantly innovating to meet the needs of our global student community.
              </p>
            </div>
            <div>
              <img src={compass} alt="Our Values" className="rounded-lg shadow-lg"/>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">Our Values</h3>
              <p className="mt-2 text-lg text-gray-500">
                We value integrity, quality, and continuous improvement. We are committed to offering courses that are not only informative but also engaging and practical, helping learners to achieve their goals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">Join Our Community</h3>
          <p className="mt-2 text-lg text-gray-500">
            Become part of the COURsiyA family today and start your journey towards knowledge and success!
          </p>
          <button className="mt-5 bg-indigo-600 text-white py-2 px-6 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

