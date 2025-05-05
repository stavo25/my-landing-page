'use client';
import pcImage from '/public/pc-picture.webp';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const phone = '255624692380'; // Replace with your number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      `Hello, my name is ${name}. ${message}`
    )}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-blue-600">KING TECHNOLOGY</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">
              Features
            </a>
            <a href="#price" className="text-gray-700 hover:text-blue-600 font-medium">
              Price
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center p-10 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">High-Performance PC for Sale</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Get the best deal on a powerful PC ideal for work, school, and entertainment.
        </p>
        <div className="flex justify-center">
          <Image
            src="/pc%20picture.webp"
            alt="PC Image"
            width={700}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto p-8">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6 text-lg">
          <li>Intel Core i7 Processor</li>
          <li>16GB DDR4 RAM</li>
          <li>512GB SSD Storage</li>
          <li>Windows 11 Pro Pre-installed</li>
          <li>Full HD 1080p Display</li>
          <li>Wi-Fi, Bluetooth, and HDMI Support</li>
        </ul>
      </section>

      {/* Price Section */}
      <section id="price" className="bg-blue-100 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Price</h3>
          <p className="text-3xl font-semibold text-green-600">TZS 450,000</p>
          <p className="text-gray-600 mt-2">Limited stock available — order now!</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-4xl mx-auto p-8">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Contact Seller</h3>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded text-lg"
          >
            Send to WhatsApp
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center p-4 shadow-inner mt-8">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} KING TECHNOLOGY. All rights reserved.</p>
      </footer>
    </main>
  );
}
