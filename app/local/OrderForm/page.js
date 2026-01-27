"use client"
import React, { useState } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

export default function OrderForm() {
  const [selectedPrice, setSelectedPrice] = useState(1250);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৭ ফুট x ৮ ফুট)",
    size: "৭ ফুট x ৮ ফুট",
    mrp: 1550
  });
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerArea, setCustomerArea] = useState('');

  const handleProductChange = (price, name, size, mrp) => {
    setSelectedPrice(price);
    setSelectedProduct({ name, size, mrp });
  };

  const changeQuantity = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity > 0) setQuantity(newQuantity);
  };

  const getOrderMessage = () => {
    const total = selectedPrice * quantity;
    const message = `হালো, আমি অর্ডার করতে চাই\n\n*আপনার তথ্য:*\nনাম: ${customerName}\nমোবাইল: ${customerPhone}\nঠিকানা: ${customerAddress}\n${customerArea ? `কালার কোড: ${customerArea}\n` : ''}\n*পণ্য:*\n${selectedProduct.name}\nসাইজ: ${selectedProduct.size}\nপরিমাণ: ${quantity}\nমূল্য: ${selectedPrice}৳ x ${quantity} = ${total}৳\n\n*মোট টাকা: ${total}৳*\n\nধন্যবাদ`;
    return message;
  };

  const handleWhatsApp = () => {
    if (!customerName.trim()) {
      alert('আপনার নাম দিন');
      return;
    }
    if (!customerPhone.trim()) {
      alert('মোবাইল নম্বর দিন');
      return;
    }
    if (!customerAddress.trim()) {
      alert('ডেলিভারি ঠিকানা দিন');
      return;
    }

    const message = getOrderMessage();
    const whatsappNumber = '8801906916061';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMessenger = () => {
    if (!customerName.trim()) {
      alert('আপনার নাম দিন');
      return;
    }
    if (!customerPhone.trim()) {
      alert('মোবাইল নম্বর দিন');
      return;
    }
    if (!customerAddress.trim()) {
      alert('ডেলিভারি ঠিকানা দিন');
      return;
    }

    const message = getOrderMessage();
    const facebookPageId = 'md.khaildhassn.khalid';
    const encodedMessage = encodeURIComponent(message);
    const messengerUrl = `https://m.me/${facebookPageId}?text=${encodedMessage}`;
    window.open(messengerUrl, '_blank');
  };

  const placeOrder = () => {
    handleWhatsApp();
  };

  const calculateDiscount = () => {
    return selectedProduct.mrp - selectedPrice;
  };

  const calculateDiscountPercentage = () => {
    return Math.round(((selectedProduct.mrp - selectedPrice) / selectedProduct.mrp) * 100);
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen" id="orderForm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 mb-8 rounded">
          <h2 className="text-2xl font-bold text-emerald-800">অর্ডার করতে নিচের ফর্মটি পূরণ করুন</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Billing details</h3>

              <div>
                <div className="mb-5">
                  <label className="block text-gray-700 font-semibold mb-2">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="আপনার নাম দিন"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:border-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-gray-700 font-semibold mb-2">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="মোবাইল নম্বর দিন"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:border-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-gray-700 font-semibold mb-2">
                    ডেলিভারি ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ডেলিভারি ঠিকানা দিন"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:border-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    কালার কোড (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="কালার কোড দিন"
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div className="border-t-2 border-gray-200 pt-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">প্রোডাক্ট নির্বাচন করুন</h4>

                  <div className="space-y-4">
                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition relative ${selectedPrice === 1099 ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'}`}>
                      <input
                        type="radio"
                        name="product"
                        value="1099"
                        onChange={() => handleProductChange(1099, "ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৬ ফুট x ৭ ফুট)", "৬ ফুট x ৭ ফুট", 1450)}
                        className="w-5 h-5 text-emerald-600"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-800">ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৬ ফুট x ৭ ফুট)</p>
                            <p className="text-sm text-gray-600">সাইজ, ৬ফুট x ৭ ফুট</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-sm text-red-600 line-through">MRP: ১,৪৫০৳</span>
                              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">২৫% ছাড়</span>
                            </div>
                          </div>
                          <span className="text-xl font-bold text-emerald-600 ml-4">১,০৯০৳</span>
                        </div>
                      </div>
                    </label>

                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer relative transition ${selectedPrice === 1250 ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'}`}>
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">বেস্ট সেলার</span>
                      <input
                        type="radio"
                        name="product"
                        value="1250"
                        defaultChecked
                        onChange={() => handleProductChange(1250, "ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৭ ফুট x ৮ ফুট)", "৭ ফুট x ৮ ফুট", 1550)}
                        className="w-5 h-5 text-emerald-600"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-800">ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৭ ফুট x ৮ ফুট)</p>
                            <p className="text-sm text-gray-600">সাইজ, ৭ফুট x ৮ ফুট</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-sm text-red-600 line-through">MRP: ১,৫৫০৳</span>
                              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">১৯% ছাড়</span>
                            </div>
                          </div>
                          <span className="text-xl font-bold text-emerald-600 ml-4">১,২৫০৳</span>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="mt-6">
                    <label className="block text-gray-700 font-semibold mb-3">পরিমাণ:</label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => changeQuantity(-1)}
                        className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                      >
                        -
                      </button>
                      <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                      <button
                        onClick={() => changeQuantity(1)}
                        className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your order</h3>

              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Product</span>
                  <span className="font-semibold">Subtotal</span>
                </div>
                <div className="flex items-start justify-between mt-3">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{selectedProduct.name}</p>
                    <p className="text-xs text-gray-600 mt-1">× {quantity}</p>
                    <p className="text-xs text-red-600 mt-1 line-through">MRP: {(selectedProduct.mrp).toLocaleString('bn-BD')}৳</p>
                  </div>
                  <span className="font-bold text-gray-800">
                    {(selectedPrice * quantity).toLocaleString('bn-BD')}৳
                  </span>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4 rounded">
                <p className="text-sm font-bold text-green-700">আপনি সাশ্রয় করছেন</p>
                <p className="text-lg font-bold text-green-600">{(calculateDiscount() * quantity).toLocaleString('bn-BD')}৳ ({calculateDiscountPercentage()}%)</p>
              </div>

              <div className="flex justify-between mb-3">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-bold text-gray-800">{(selectedPrice * quantity).toLocaleString('bn-BD')}৳</span>
              </div>

              <div className="flex justify-between border-t-2 pt-4 mb-6">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-emerald-600">{(selectedPrice * quantity).toLocaleString('bn-BD')}৳</span>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <p className="text-sm text-gray-700">প্রডাক্ট হাতে পেয়ে চেক করে টাকা পরিশোধ করবেন</p>
                </div>
              </div>

              {/* Social Contact Icons */}
              <div className="mb-6 flex gap-3">
                <button
                  onClick={handleWhatsApp}
                  style={{
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    flex: 1,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1ebc61';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#25D366';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 175.216 175.552" fill="currentColor">
                    <path d="M149.995 25.219C133.432 8.656 111.297 0 87.776 0 39.898 0 .904 38.99.904 86.868c0 15.297 3.988 30.233 11.587 43.41L0 175.552l46.637-12.24c12.715 6.933 27.017 10.588 41.556 10.588h.036c47.842 0 86.836-38.99 86.836-86.868 0-23.197-9.033-45.014-25.433-61.813zM87.776 159.096c-12.933 0-25.613-3.475-36.65-10.034l-2.629-1.56-27.27 7.152 7.279-26.586-1.711-2.725c-7.19-11.434-10.992-24.653-10.992-38.226 0-39.615 32.242-71.857 71.893-71.857 19.187 0 37.236 7.48 50.806 21.05 13.571 13.57 21.05 31.62 21.05 50.807.001 39.615-32.241 71.857-71.856 71.857zm39.435-53.841c-2.161-1.083-12.788-6.31-14.769-7.029-1.98-.72-3.422-1.081-4.862 1.08-1.441 2.161-5.586 7.029-6.848 8.47-1.261 1.44-2.521 1.621-4.682.54-2.161-1.083-9.128-3.363-17.385-10.727-6.424-5.731-10.764-12.81-12.025-14.971-1.261-2.162-.134-3.33.948-4.405.971-.97 2.16-2.521 3.241-3.782 1.08-1.261 1.44-2.161 2.161-3.601.72-1.441.36-2.701-.18-3.782-.54-1.08-4.862-11.707-6.661-16.038-1.751-4.216-3.53-3.644-4.862-3.71-.126-.006-.263-.009-.401-.012-1.261-.033-2.701-.54-4.142-.54s-3.781.54-5.761 2.701c-1.98 2.161-7.569 7.389-7.569 18.02 0 10.631 7.75 20.901 8.83 22.342 1.08 1.44 15.229 23.26 36.886 32.628 5.149 2.225 9.17 3.554 12.303 4.548 5.172 1.644 9.873 1.411 13.593.855 4.144-.618 12.788-5.227 14.587-10.273 1.799-5.046 1.799-9.377 1.259-10.278-.54-.9-1.98-1.44-4.141-2.521z"/>
                  </svg>
                  WhatsApp
                </button>

                <button
                  onClick={handleMessenger}
                  style={{
                    backgroundColor: '#0084FF',
                    color: '#ffffff',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    flex: 1,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#006ADB';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0084FF';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ffffff" d="M256 93c-88.918 0-161 67.157-161 150 0 47.205 23.412 89.311 60 116.807V417l54.819-30.273C224.449 390.801 239.948 393 256 393c88.918 0 161-67.157 161-150S344.918 93 256 93zm16 202l-41-44-80 44 88-94 42 44 79-44-88 94z"/>
                  </svg>
                  Messenger
                </button>
              </div>

              <button
                onClick={placeOrder}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition flex items-center justify-center space-x-2"
              >
                <Shield className="w-6 h-6" />
                <span>Place Order {(selectedPrice * quantity).toLocaleString('bn-BD')}৳</span>
              </button>

              <div className="mt-6 pt-6 border-t text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs text-gray-600">নিরাপদ পেমেন্ট</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs text-gray-600">১০০% অরিজিনাল</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}