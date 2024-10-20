import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2 text-main-green">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">
            Any question or remarks? Just write us a message!
          </p>

          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl">
            <div className="bg-main-green text-white p-12 m-2 md:w-1/3 rounded-lg relative">
              <img src="banju.svg" alt="banju" className="absolute top-0 left-0 opacity-10" />

              <div className="absolute bottom-0 right-0 rounded-full -mr-10">
                <img src="cont.svg" alt="contacts" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="mb-24 text-xl">Say something to start a live chat!</p>

              <div className="space-y-8 my-1/2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-4" />
                  <a href={`tel:+250787641599`} className="text-white">+250787641599</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-4" />
                  <a href={`mailto:agriorganicfarmltd5@gmail.com`} className="text-white">agriorganicfarmltd5@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-4" />
                  <span>
                    Gatagara, Musanze, Rwanda
                  </span>
                </div>
              </div>

              <div className="flex space-x-4 mt-12 absolute bottom-12">
                <div className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937]" onClick={() => window.open('https://www.linkedin.com/company/agriorganic-farm-ltd/posts/?feedView=all', '_blank')}>
                  <LuLinkedin className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937]" onClick={() => window.open('https://twitter.com/Agri_Rwanda/', '_blank')}>
                  <FaXTwitter className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937]" onClick={() => window.open('https://www.facebook.com/profile.php?id=61553567904876', '_blank')}>
                  <Facebook className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:w-2/3 relative">
              <div className="md:grid-cols-2 mb-6 p-8">
                <div className="flex">
                  <div className="w-full pr-4">
                    <label htmlFor="firstName" className="text-main-green block focus:font-semibold">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-b-2 border-gray-50/12 text-other-green w-full focus:py-2 outline-none"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="lastName" className="text-main-green block focus:font-semibold">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-b-2 border-gray-50/12 text-other-green w-full focus:py-2 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="w-full pr-4">
                    <label htmlFor="email" className="text-main-green block focus:font-semibold">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-b-2 border-gray-50/12 text-other-green w-full focus:py-2 outline-none"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phoneNumber" className="text-main-green block focus:font-semibold">Phone Number</label>
                    <input
                      name="phoneNumber"
                      type="text"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="border-b-2 border-gray-50/12 text-other-green w-full focus:py-2 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-other-green block font-semibold px-8">Select Subject?</label>
                <div className="grid grid-cols-3 p-8">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="subject"
                      value="General Inquiry"
                      onChange={handleInputChange}
                      className="flex space-x-4"
                    />
                    <label htmlFor="general">General Inquiry</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="subject"
                      value="Product Support"
                      onChange={handleInputChange}
                      className="flex space-x-4"
                    />
                    <label htmlFor="support">Product Support</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="subject"
                      value="Pricing Question"
                      onChange={handleInputChange}
                      className="flex space-x-4"
                    />
                    <label htmlFor="pricing">Pricing Question</label>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-8">
                <label htmlFor="message" className="block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  className="border-b-2 border-gray-50/12 text-other-green w-full focus:py-2 outline-none"
                  rows={4}
                  required
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#266937] font-semibold mb-32 pointer hover:bg-green-800 p-3 rounded-md shadow-md text-white"
                >
                  Send Message
                </button>
              </div>
              <img src="send.svg" className="absolute bottom-0 right-8" alt="send" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
