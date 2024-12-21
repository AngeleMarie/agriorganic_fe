import { useEffect, useState } from 'react';
import { Clock, Trash2, PlusCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Update() {
  const [newsItems, setNewsItems] = useState([]);
  const [editingNews, setEditingNews] = useState(null);
  const [editForm, setEditForm] = useState({ headline: '', description: '', category: '' });
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State to show/hide modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://agriorgainc-be.onrender.com/api/v1/news'); // Match backend endpoint
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://agriorgainc-be.onrender.com/api/v1/news/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete news');
      setNewsItems(newsItems.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingNews(item._id);
    setEditForm({ headline: item.headline, description: item.description, category: item.category });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://agriorgainc-be.onrender.com/api/v1/news/edit/${editingNews}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });
      if (!response.ok) throw new Error('Failed to update news');
      const updatedNews = await response.json();
      setNewsItems(newsItems.map(item => (item._id === editingNews ? updatedNews : item)));
      setEditingNews(null);
    } catch (error) {
      console.error('Error updating news:', error);
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

  return (
    <section className="bg-gray-50  ">
      {/* Admin Panel Header */}
      <div className="flex justify-between items-center bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/addNews')}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            Add News
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
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
        
        
        </div>
        <p className="text-4xl font-bold text-center mb-4 text-main-green">Latest News</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-8">
          {newsItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="relative h-48">
                <img
                  src={item.picture || '/default-image.jpg'}
                  alt={item.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-main-green/70 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-other-green my-3 line-clamp-2">{item.headline}</h3>
                <p className="text-gray-600 mb-4 text-justify line-clamp-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-main-green">
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                  <div className="flex space-x-4">
                    <button onClick={() => handleDelete(item._id)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {editingNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-2xl font-bold mb-4">Edit News</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Headline</label>
                  <input
                    type="text"
                    value={editForm.headline}
                    onChange={(e) => setEditForm({ ...editForm, headline: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Description</label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Category</label>
                  <input
                    type="text"
                    value={editForm.category}
                    onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setEditingNews(null)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-main-green text-white px-4 py-2 rounded-lg hover:bg-other-green">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
