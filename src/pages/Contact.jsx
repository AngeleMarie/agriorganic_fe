import { useState } from "react";
import axios from "axios"; 
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post('http://localhost:7654/api/v1/problems/addProblem', formData); 
      console.log("Response from server:", response.data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "General Inquiry",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.log("Error sending message:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-32">
          <div className="my-8">
          <p className="text-3xl font-bold text-center  text-main-green">Contact Us</p>
          <p className="text-center text-gray-600 ">
            Any question or remarks? Just write us a message!
          </p>
          </div>
       

          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl">
            <div className="bg-main-green text-white p-8 sm:p-12 m-4 md:w-1/3 rounded-lg relative">
              <img src="banju.svg" alt="banju" className="absolute top-0 left-0 opacity-10 " />

              <div className="absolute bottom-0 right-0 rounded-full -mr-10">
                <img src="cont.svg" alt="contacts" className="hidden md:block"/>
              </div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="mb-12 text-xl">Say something to start a live chat!</p>

              <div className="space-y-6">
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
                  <span>Gatagara, Musanze, Rwanda</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-12 sm:static sm:space-x-6">
                <div className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937] transition duration-300">
                  <LuLinkedin className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" onClick={() => window.open('https://www.linkedin.com/company/agriorganic-farm-ltd/posts/?feedView=all', '_blank')} />
                </div>
                <div className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937] transition duration-300">
                  <FaXTwitter className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" onClick={() => window.open('https://twitter.com/Agri_Rwanda/', '_blank')} />
                </div>
                <div className="bg-[#266937] rounded-full p-2 shadow-md hover:bg-white hover:text-[#266937] transition duration-300">
                  <Facebook className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" onClick={() => window.open('https://www.facebook.com/profile.php?id=61553567904876', '_blank')} />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:w-2/3 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="w-full">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="w-full">
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

              <div className="mb-6">
                <label className="text-other-green block font-semibold px-8">Select Subject</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-8">
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
                  required
                />
              </div>

              <button type="submit" className="bg-main-green text-white font-semibold py-2 px-4 rounded-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
