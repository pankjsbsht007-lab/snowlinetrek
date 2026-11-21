import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Treks from "./pages/Treks";
import TrekDetails from "./pages/TrekDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import RentalGear from "./pages/RentalGear";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
  

      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/treks/:slug" element={<TrekDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/rental-gear" element={<RentalGear />} />
        </Routes>
        <Whatsapp />
      </main>
      
      <Footer />
    </div>
  );
}
