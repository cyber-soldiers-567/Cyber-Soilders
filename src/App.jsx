import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Technology from "@/components/technology"
import InstantFeedback from "@/components/instant-feedback"
import Showcases from "@/components/showcases"
import Product from "@/components/product"
import Services from "@/components/services"
import Resources from "@/components/resources"
import Training from "@/components/training"
import About from "@/components/about"
import Contact from "@/components/contact"
import Careers from "@/components/careers"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Technology />
                <InstantFeedback />
                <Showcases />
              </>
            } />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

