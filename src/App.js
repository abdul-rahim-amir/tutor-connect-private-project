import React from 'react';
import { Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import HowItWorks from './components/HowItWorks/HowItWorks';
import FeaturedSubjects from './components/FeaturedSubjects/FeaturedSubjects';
import Testimonials from './components/Testimonials/Testimonials';
import VideoCard from './components/VideoCard/VideoCard';
import SignUpPage from './components/SignUpPage/SignUpPage';
import TutorRegistrationForm from './components/TutorRegistrationForm/TutorRegistrationForm';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import SelectTutor from './components/SelectTutor/SelectTutor';
import TutorDetail from './components/SelectTutor/TutorDetail';
import ScheduleSessions from './components/HowItWorks/ScheduleSessions';
import Card from './components/Card/Card'; // Update import path if necessary
import ScrollToTop from './components/ScrollToTop';
import CourseDetail from './components/Card/CourseDetail'; // Update import path if necessary
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExamPreparation from './components/HowItWorks/ExamPreparation';
import BookSession from './components/SelectTutor/BookSession';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <ScrollToTop/>
            <MainSection />
            <HowItWorks />
            <FeaturedSubjects />
            <VideoCard />
            <Testimonials />
            <Carousel />
            <Card /> {/* Use CardGrid instead of Card */}
            <Footer />
          </>
        } />
        <Route path="/select-tutor" element={
          <>
            <Header />
            <SelectTutor />
            <Footer />
          </>
        } />
        <Route path="/tutor/:id" element={
          <>
            <Header />
            <ScrollToTop/>
            <TutorDetail />
            <Footer />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Header />
            <ScrollToTop />
            <SignUpPage />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Header />
            <ScrollToTop />
            <AboutUs />
            <Footer />
          </>
        } />
        <Route path="/blog" element={
          <>
            <Header />
            <ScrollToTop />
            <Blog />
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <Header />
            <ScrollToTop />
            <Services />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Header />
            <ScrollToTop />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/tutor-registration" element={
          <>
            <Header />
            <ScrollToTop />
            <TutorRegistrationForm />
            <Footer />
          </>
        } />
        {/* Additional route for course details, if needed */}
        <Route path="/course/:courseId" element={
          <>
            <Header />
            <ScrollToTop />
            {/* Component for displaying individual course details */}
            <CourseDetail />
            <Footer />
          </>
        } />
        <Route path="/scheduled-sessions" element={
          <>
            <Header />
            <ScrollToTop />
            {/* Component for displaying individual course details */}
            <ScheduleSessions />
            <Footer />
          </>
        } />
        <Route path="/courses" element={
          <>
            <Header />
            <ScrollToTop />
            {/* Component for displaying individual course details */}
            <Carousel />
            <Footer />
          </>
        } />
        <Route path="/exam-preparation" element={
          <>
            <Header />
            <ScrollToTop />
            {/* Component for displaying individual course details */}
            <ExamPreparation />
            <Footer />
          </>
        } />
        <Route path="/book-session" element={
          <>
            <Header />
            <BookSession/>
            {/* Component for displaying individual course details */}
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
