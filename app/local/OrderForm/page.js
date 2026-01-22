"use client"
import React, { useState } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

export default function OrderForm() {
  const [selectedPrice, setSelectedPrice] = useState(1250);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৭ ফুট x ৮ ফুট)",
    size: "৭ ফুট x ৮ ফুট"
  });
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerArea, setCustomerArea] = useState('');

  const handleProductChange = (price, name, size) => {
    setSelectedPrice(price);
    setSelectedProduct({ name, size });
  };

  const changeQuantity = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity > 0) setQuantity(newQuantity);
  };

  const placeOrder = () => {
    // Validation
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

    // Create message
    const total = selectedPrice * quantity;
    const message = `হালো, আমি অর্ডার করতে চাই\n\n*আপনার তথ্য:*\nনাম: ${customerName}\nমোবাইল: ${customerPhone}\nঠিকানা: ${customerAddress}\n${customerArea ? `এরিয়া কোড: ${customerArea}\n` : ''}\n*পণ্য:*\n${selectedProduct.name}\nপরিমাণ: ${quantity}\nমূল্য: ${selectedPrice}৳ x ${quantity} = ${total}৳\n\n*মোট টাকা: ${total}৳*\n\nধন্যবাদ`;

    // WhatsApp link
    const whatsappNumber = '8801910888872';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 mb-8 rounded">
          <h2 className="text-2xl font-bold text-emerald-800">অর্ডার করতে নিচের ফর্মটি পূরণ করুন</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Billing details</h3>

              <div id="orderForm">
                <div className="mb-5">
                  <label className="block text-gray-700 font-semibold mb-2">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Md Rakibul"
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
                    placeholder="+8801910888872"
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
                    placeholder="shurarghop, lakshmanpur, sharsha, jessore"
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
                    placeholder="Hasan"
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-600 focus:outline-none transition"
                  />
                </div>

                <div className="border-t-2 border-gray-200 pt-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">প্রোডাক্ট নির্বাচন করুন</h4>

                  <div className="space-y-4">
                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${selectedPrice === 1099 ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'}`}>
                      <input
                        type="radio"
                        name="product"
                        value="1099"
                        onChange={() => handleProductChange(1099, "ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৬ ফুট x ৭ ফুট)", "৬ ফুট x ৭ ফুট")}
                        className="w-5 h-5 text-emerald-600"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-800">ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৬ ফুট x ৭ ফুট)</p>
                            <p className="text-sm text-gray-600">সাইজ, ৬ফুট x ৭ ফুট</p>
                          </div>
                          <span className="text-xl font-bold text-emerald-600 ml-4">১,০৯৯৳</span>
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
                        onChange={() => handleProductChange(1250, "ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৭ ফুট x ৮ ফুট)", "৭ ফুট x ৮ ফুট")}
                        className="w-5 h-5 text-emerald-600"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-800">ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৭ ফুট x ৮ ফুট)</p>
                            <p className="text-sm text-gray-600">সাইজ, ৭ফুট x ৮ ফুট</p>
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
                  </div>
                  <span className="font-bold text-gray-800">
                    {(selectedPrice * quantity).toLocaleString('bn-BD')}৳
                  </span>
                </div>
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