'use client'

// Example usage: <ContactsPage />
export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">GET IN TOUCH</h2>
          {/* Form Placeholder */}
          <form>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="border rounded-md px-4 py-2 flex-1"
                placeholder="Enter your name*"
                type="text"
                disabled
              />
              <input
                className="border rounded-md px-4 py-2 flex-1"
                placeholder="Enter your phone number*"
                type="text"
                disabled
              />
            </div>
            <input
              className="border rounded-md px-4 py-2 w-full mt-4"
              placeholder="Enter your email*"
              type="email"
              disabled
            />
            <textarea
              className="border rounded-md px-4 py-2 w-full mt-4"
              placeholder="Your message"
              rows={4}
              disabled
            />
            <button
              type="button"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold w-full py-2 rounded-md mt-6 transition-all"
              disabled
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        {/* Contact Info on Hospital Image */}
        <div className="relative rounded-xl shadow-lg h-96 flex items-end overflow-hidden">
          {/* Background Image (replace 'hospital.jpg' with real path) */}
          <img
            src="/hospital.jpg"
            alt="Hospital"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          {/* Overlayed Info Card */}
          <div className="relative z-10 bg-white/80 rounded-lg m-6 p-6 backdrop-blur-md shadow-lg flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
            <div className="flex items-center gap-2 text-cyan-700">
              {/* Phone icon */}
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M2.4 8.93a16 16 0 0 0 12.67 12.67l2.2-2.2a2 2 0 0 1 2.1-.47A14.05 14.05 0 0 0 21 6.27a2 2 0 0 1-.46-2.1l-2.19-2.2A2.09 2.09 0 0 0 16 2H8a2 2 0 0 0-2 2v5.34a2 2 0 0 1-.47 2.1z" />
              </svg>
              <span className="font-medium text-gray-900">+91 94426 50505</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-700">
              {/* Email icon */}
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M2 6l10 7L22 6M2 18V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12" />
              </svg>
              <span className="font-medium text-gray-900">info@tiruppurgastrocare.com</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-700">
              {/* Map Pin icon */}
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 21c-3-3.5-8-7-8-11A8 8 0 1 1 20 10c0 4-5 7.5-8 11z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-medium text-gray-900">154 Dharapuram Main Road, near Usha Theatre, Tiruppur</span>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section Placeholder */}
      <div className="mt-10 h-64 w-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-xl">
        Map Placeholder
      </div>
    </div>
  );
}
