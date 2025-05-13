import React from 'react';

export default function DentalSmilePortHome() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor">
          <path d="M19.11..." />
        </svg>
      </a>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 px-4 text-center">
        <img src="/logo.png" alt="Dental SmilePort Logo" className="mx-auto mb-6 w-20" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Dental SmilePort
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Professional, Affordable Dental Care – Trusted by Patients Worldwide
        </p>
        <a href="#appointment" className="inline-block bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-100">
          Book Appointment
        </a>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://calendly.com/your-calendly-username/consultation"
            width="100%"
            height="600"
            frameBorder="0"
            title="Schedule Appointment"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Dental SmilePort. All rights reserved.</p>
      </footer>
    </main>
  );
}
