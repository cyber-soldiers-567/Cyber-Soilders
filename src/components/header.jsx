"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-[1200px] mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <svg viewBox="0 0 180 180" className="h-6 w-6">
            <path d="M 90 0 L 180 180 L 0 180 Z" fill="currentColor"></path>
          </svg>
          <span className="font-bold">Cyber.Soldiers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/product" className="text-sm font-medium transition-colors hover:text-primary">
            Product
          </Link>
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link to="/training" className="text-sm font-medium transition-colors hover:text-primary">
            Training
          </Link>
          <Link to="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link to="/careers" className="text-sm font-medium transition-colors hover:text-primary">
            Careers
          </Link>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            <Link
              to="/product"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              to="/services"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/training"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
            <Link
              to="/resources"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

