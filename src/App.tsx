import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, ChevronDown } from 'lucide-react';

function App() {
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified age in this session
    const verified = sessionStorage.getItem('ageVerified');
    if (verified === 'true') {
      setShowAgeGate(false);
      setAgeVerified(true);
    }
  }, []);

  const handleAgeVerification = (isOfAge: boolean) => {
    if (isOfAge) {
      sessionStorage.setItem('ageVerified', 'true');
      setShowAgeGate(false);
      setAgeVerified(true);
    } else {
      alert("Sorry, you must be 21 or older to enter this site.");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Age Gate Modal
  if (showAgeGate) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-yellow-600 rounded-lg p-8 max-w-md w-full text-center shadow-2xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-yellow-500 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                The Ember Lounge
              </h1>
              <div className="w-16 h-0.5 bg-yellow-500 mx-auto"></div>
            </div>
            
            <h2 className="text-xl text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Age Verification Required
            </h2>
            
            <p className="text-gray-300 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              You must be 21 years or older to enter this website. Are you of legal smoking age?
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => handleAgeVerification(true)}
                className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Yes, I am 21+
              </button>
              <button
                onClick={() => handleAgeVerification(false)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                No, I am not
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              By entering, you agree that you are of legal smoking age in your jurisdiction.
            </p>
          </div>
        </div>
      </>
    );
  }

  if (!ageVerified) return null;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <div className="min-h-screen bg-zinc-950 text-white">
        {/* Header/Navigation */}
        <header className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 z-40">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-yellow-500" style={{ fontFamily: 'Playfair Display, serif' }}>
                  The Ember Lounge
                </h1>
              </div>
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('vapes')} className="text-gray-300 hover:text-yellow-500 transition duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Vapes</button>
                <button onClick={() => scrollToSection('cigars')} className="text-gray-300 hover:text-yellow-500 transition duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Cigars</button>
                <button onClick={() => scrollToSection('pipes')} className="text-gray-300 hover:text-yellow-500 transition duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Pipes</button>
                <button onClick={() => scrollToSection('accessories')} className="text-gray-300 hover:text-yellow-500 transition duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Accessories</button>
                <button onClick={() => scrollToSection('visit')} className="text-gray-300 hover:text-yellow-500 transition duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>Visit Us</button>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 pt-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url(https://placehold.co/1920x1080/1a1a1a/444444?text=Premium+Tobacco+Lounge)' }}
          ></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Curators of Fine
              <span className="text-yellow-500"> Smoke & Vapor</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Experience our premium selection of world-class cigars, artisanal vapes, and handcrafted pipes.
            </p>
            <button
              onClick={() => scrollToSection('products')}
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Shop Our Collection
            </button>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="text-yellow-500 w-8 h-8" />
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="products" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Premium Collections
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Discover our carefully curated selection of the finest smoking and vaping products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div id="vapes" className="group cursor-pointer">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 group-hover:scale-105">
                  <img 
                    src="pics/pic1.png"
                      
                    alt="Premium Vapes"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Premium Vapes
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Cutting-edge devices and premium e-liquids
                    </p>
                  </div>
                </div>
              </div>

              <div id="cigars" className="group cursor-pointer">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 group-hover:scale-105">
                  <img 
                    src="pics/pic2.png" 
                    alt="Premium Cigars"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Fine Cigars
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Hand-rolled masterpieces from renowned makers
                    </p>
                  </div>
                </div>
              </div>

              <div id="pipes" className="group cursor-pointer">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 group-hover:scale-105">
                  <img 
                    src="pics/pic3.png" 
                    alt="Glass Pipes"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Glass Pipes
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Artisan-crafted pieces and functional art
                    </p>
                  </div>
                </div>
              </div>

              <div id="accessories" className="group cursor-pointer">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 group-hover:scale-105">
                  <img 
                    src="pics/pic4.png" 
                    alt="Accessories"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Accessories
                    </h3>
                    <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Premium tools and smoking essentials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 px-4 bg-zinc-900/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Featured Products
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Handpicked selections from our most popular and newest arrivals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 hover:scale-105">
                <img 
                  src="pics/pic5.png" 
                  alt="Arturo Fuente Hemingway"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Arturo Fuente Hemingway
                  </h3>
                  <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    A rich, medium-bodied cigar with notes of cedar and spice.
                  </p>
                  <p className="text-yellow-500 font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    $24.99
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 hover:scale-105">
                <img 
                  src="pics/pic6.png" 
                  alt="Elite Vaporizer Pro"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Elite Vaporizer Pro
                  </h3>
                  <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    State-of-the-art temperature control with premium materials.
                  </p>
                  <p className="text-yellow-500 font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    $189.99
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 hover:scale-105">
                <img 
                  src="pics/pic7.png" 
                  alt="Artisan Glass Pipe"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Artisan Glass Pipe
                  </h3>
                  <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Hand-blown borosilicate glass with unique color patterns.
                  </p>
                  <p className="text-yellow-500 font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    $79.99
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-yellow-600 transition duration-300 hover:scale-105">
                <img 
                  src="pics/pic8.png" 
                  alt="Premium Humidor"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Premium Humidor
                  </h3>
                  <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Spanish cedar lined with digital hygrometer system.
                  </p>
                  <p className="text-yellow-500 font-bold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    $299.99
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us Section */}
        <section id="visit" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Visit Our Lounge
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                Experience our premium collection in person at our sophisticated retail location
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-yellow-500 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Location
                    </h3>
                    <p className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                      123 Premium Boulevard<br />
                      Luxury District, City 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-yellow-500 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Business Hours
                    </h3>
                    <div className="text-gray-300 space-y-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <p>Monday - Thursday: 10:00 AM - 9:00 PM</p>
                      <p>Friday - Saturday: 10:00 AM - 10:00 PM</p>
                      <p>Sunday: 12:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-yellow-500 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Contact
                    </h3>
                    <p className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Phone: (555) 123-4567<br />
                      Email: info@theemberlounge.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 text-center">
                <img 
                  src="pics/pic9.png" 
                  alt="Store Location Map"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Interactive map showing our convenient location
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                The Ember Lounge
              </h3>
              <div className="flex justify-center space-x-6 mb-6">
                <Facebook className="text-gray-400 hover:text-yellow-500 w-6 h-6 cursor-pointer transition duration-300" />
                <Instagram className="text-gray-400 hover:text-yellow-500 w-6 h-6 cursor-pointer transition duration-300" />
                <Twitter className="text-gray-400 hover:text-yellow-500 w-6 h-6 cursor-pointer transition duration-300" />
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8">
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  © 2024 The Ember Lounge. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <strong>WARNING:</strong> Products sold on this site are intended for adult smokers. You must be of legal smoking age in your jurisdiction to purchase. 
                  This product contains nicotine. Nicotine is an addictive chemical. Keep out of reach of children and pets.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;