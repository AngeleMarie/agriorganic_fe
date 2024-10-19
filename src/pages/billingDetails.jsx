import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';



const BillingDetails = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
  });
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate(); 

  const [paymentMethod, setPaymentMethod] = useState('cash');
  
  const [saveInfo, setSaveInfo] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true)

    console.log('Form submitted', { billingInfo, paymentMethod, saveInfo });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-6">Billing Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border  text-other-green text-sm rounded-lg outline-none focus:border-[#266937] block w-full p-2.5"
                  required
                  value={billingInfo.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className=" border  text-other-green text-sm rounded-lg outline-none focus:border-[#266937] block w-full p-2.5"
                  value={billingInfo.companyName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="streetAddress" className="block mb-2 text-sm font-medium text-gray-900">Street Address</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                className="border  text-other-green text-sm rounded-lg outline-none focus:border-[#266937] block w-full p-2.5"
                required
                value={billingInfo.streetAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="apartment" className="block mb-2 text-sm font-medium text-gray-900">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                className="border  text-other-green text-sm rounded-lg outline-none  focus:border-[#266937] block w-full p-2.5"
                value={billingInfo.apartment}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="townCity" className="block mb-2 text-sm font-medium text-gray-900">Town/City</label>
              <input
                type="text"
                id="townCity"
                name="townCity"
                className="border text-other-green text-sm rounded-lg outline-none focus:border-[#266937] block w-full p-2.5"
                required
                value={billingInfo.townCity}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="border  text-other-green text-sm rounded-lg outline-none focus:border-[#266937] block w-full p-2.5"
                required
                value={billingInfo.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="emailAddress" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                className="border text-other-green text-sm rounded-lg outline-none focus:border-[#266937] block w-full p-2.5"
                required
                value={billingInfo.emailAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                id="saveInfo"
                type="checkbox"
                className="w-4 h-4  bg-gray-100 border-gray-300 rounded "
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
              />
              <label htmlFor="saveInfo" className="ml-2 text-sm font-medium text-gray-900">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>
        <div className="md:w-1/3 my-auto">
          <div className="bg-gray-100/50 shadow-sm p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-main-green" >Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src="/prod.png?height=50&width=50" alt="LCD Monitor" className="w-12 h-12 object-cover rounded" />
                  <span>LCD Monitor</span>
                </div>
                <span>$650</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src="/prod.png?height=50&width=50" alt="H1 Gamepad" className="w-12 h-12 object-cover rounded" />
                  <span>H1 Gamepad</span>
                </div>
                <span>$1100</span>
              </div>
              <div className="flex justify-between pt-4 border-t">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="bank" className="text-sm font-medium text-gray-900">Bank</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="cash" className="text-sm font-medium text-gray-900">Cash on delivery</label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-green-700 font-semibold text-white px-4 py-2 rounded-lg hover:bg-main-green transition duration-300"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg text-center max-w-sm">
            <img src="tick.svg" alt="tick" className='mx-auto my-2' />
            <h2 className="text-xl font-bold mb-4 text-main-green ">Your Order Is Confirmed</h2>
            <p className="text-gray-600 text-sm mb-6">Your order has been confirmed.
            It has not been shipped yet we will email you soon.</p>
            <button
              onClick={() => navigate('/login')} 
              className="bg-[#266937] text-white py-3 w-full rounded-md font-medium hover:bg-green-700"
            >
              Back to Home
            </button>
            <button
              onClick={() => navigate('/login')} 
              className="border my-2 border-[#266937] text-[#266937]  py-3 w-full rounded-md   hover:underline hover:font-medium underline-offset-2"
            >
              View My Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingDetails;