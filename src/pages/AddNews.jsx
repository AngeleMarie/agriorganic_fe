import React, { useState } from "react";
import axios from "axios";

function AddNews() {
  const [formData, setFormData] = useState({
    picture: "",
    headline: "",
    category: "",
    description: "",
    date: "",
  });
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State to show/hide modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        picture: reader.result, // Base64-encoded image
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://agriorgainc-be.onrender.com/api/v1/news/add", formData); // Replace with your backend URL
      console.log(response.data);
      alert("News added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add news");
    }
  };

  const handleLogout = () => {
    // Show the logout confirmation modal
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    alert("Logging out...");
    window.location.href = "/login"; // Redirect to the login page
  };

  const handleCancelLogout = () => {
    // Close the logout confirmation modal
    setShowLogoutModal(false);
  };

  const handleViewNews = () => {
    window.location.href = "/adminNews"; // Redirect to the news listing page
  };

  return (
    <div className="relative">
      {/* Top-Up Button */}
      <div className="flex justify-between items-center bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <div className="flex gap-4">
          <button
            onClick={handleViewNews}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            View News
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Are you sure you want to log out?</h3>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleConfirmLogout}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
              >
                Yes
              </button>
              <button
                onClick={handleCancelLogout}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 mt-4">
        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Add Updates</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Update Picture*
              </label>
              <input
                type="file"
                name="picture"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Update Headline*
              </label>
              <input
                type="text"
                name="headline"
                value={formData.headline}
                onChange={handleChange}
                placeholder="Enter headline"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Update Category*
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter category"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Update Description*
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                className="w-full border rounded-lg p-2 focus:ring focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Update Date*
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-700"
            >
              Add Post
            </button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="border rounded-lg shadow-md p-4">
            <div className="mb-4">
              {formData.picture ? (
                <img
                  src={formData.picture}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">No Image Selected</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                {formData.category || "Projects"}
              </span>
              <h3 className="text-lg font-semibold">
                {formData.headline || "New Project"}
              </h3>
              <p className="text-sm text-gray-700">
                {formData.description ||
                  "Add a description to see how it appears here."}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>{formData.date || "YYYY-MM-DD"}</span>
                <a href="#readMore" className="text-green-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNews;
