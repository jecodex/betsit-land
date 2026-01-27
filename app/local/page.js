"use client"
import React, { useState } from 'react';
import { ShoppingCart, Star, Shield, CheckCircle, Phone, MapPin, Clock, Package, Check } from 'lucide-react';
import ImageGallery from './image/page';
import OrderForm from './OrderForm/page';
import Image from 'next/image';

export default function BeddingStore() {
  const [quantity, setQuantity] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(1250);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "ওয়াটারপ্রুফ বিছানার চাদর (সাইজ, ৭ ফুট x ৮ ফুট)",
    size: "৭ ফুট x ৮ ফুট"
  });

  const changeQuantity = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const updateTotal = () => {
    return selectedPrice * quantity;
  };

  const handleProductChange = (price, name, size) => {
    setSelectedPrice(price);
    setSelectedProduct({ name, size });
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+8801906916061"; // আপনার হোয়াটসঅ্যাপ নম্বর এখানে যোগ করুন
    const message = "আমি ওয়াটারপ্রুফ বিছানার চাদর সম্পর্কে জানতে আগ্রহী।";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleMessenger = () => {
    const pageId = "khalidofficial121"; // আপনার ফেসবুক পেজ আইডি এখানে যোগ করুন
    const url = `https://m.me/${pageId}`;
    window.open(url, '_blank');
  };

  const placeOrder = () => {
    const name = document.getElementById('customerName')?.value;
    const phone = document.getElementById('customerPhone')?.value;
    const address = document.getElementById('customerAddress')?.value;

    if (!name || !phone || !address) {
      alert('অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য পূরণ করুন!');
      return;
    }

    const total = updateTotal();
    alert(`অর্ডার সফল হয়েছে! ✅\n\nনাম: ${name}\nফোন: ${phone}\nঠিকানা: ${address}\nপ্রোডাক্ট: ${selectedProduct.name}\nপরিমাণ: ${quantity}\nমোট: ${total}৳\n\nআমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Contact Buttons - মোবাইল ভিউ */}
<div className="fixed bottom-6 right-4 flex flex-col gap-3 z-40 md:hidden">
  <button
    onClick={handleWhatsApp}
    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transform hover:scale-110 transition"
    title="WhatsApp"
  >
    <svg width="24" height="24" viewBox="0 0 175.216 175.552" fill="currentColor">
      <path d="M149.995 25.219C133.432 8.656 111.297 0 87.776 0 39.898 0 .904 38.99.904 86.868c0 15.297 3.988 30.233 11.587 43.41L0 175.552l46.637-12.24c12.715 6.933 27.017 10.588 41.556 10.588h.036c47.842 0 86.836-38.99 86.836-86.868 0-23.197-9.033-45.014-25.433-61.813zM87.776 159.096c-12.933 0-25.613-3.475-36.65-10.034l-2.629-1.56-27.27 7.152 7.279-26.586-1.711-2.725c-7.19-11.434-10.992-24.653-10.992-38.226 0-39.615 32.242-71.857 71.893-71.857 19.187 0 37.236 7.48 50.806 21.05 13.571 13.57 21.05 31.62 21.05 50.807.001 39.615-32.241 71.857-71.856 71.857zm39.435-53.841c-2.161-1.083-12.788-6.31-14.769-7.029-1.98-.72-3.422-1.081-4.862 1.08-1.441 2.161-5.586 7.029-6.848 8.47-1.261 1.44-2.521 1.621-4.682.54-2.161-1.083-9.128-3.363-17.385-10.727-6.424-5.731-10.764-12.81-12.025-14.971-1.261-2.162-.134-3.33.948-4.405.971-.97 2.16-2.521 3.241-3.782 1.08-1.261 1.44-2.161 2.161-3.601.72-1.441.36-2.701-.18-3.782-.54-1.08-4.862-11.707-6.661-16.038-1.751-4.216-3.53-3.644-4.862-3.71-.126-.006-.263-.009-.401-.012-1.261-.033-2.701-.54-4.142-.54s-3.781.54-5.761 2.701c-1.98 2.161-7.569 7.389-7.569 18.02 0 10.631 7.75 20.901 8.83 22.342 1.08 1.44 15.229 23.26 36.886 32.628 5.149 2.225 9.17 3.554 12.303 4.548 5.172 1.644 9.873 1.411 13.593.855 4.144-.618 12.788-5.227 14.587-10.273 1.799-5.046 1.799-9.377 1.259-10.278-.54-.9-1.98-1.44-4.141-2.521z"/>
    </svg>
  </button>
  
  <button
    onClick={handleMessenger}
    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transform hover:scale-110 transition"
    title="Messenger"
  >
    <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffffff" d="M256 93c-88.918 0-161 67.157-161 150 0 47.205 23.412 89.311 60 116.807V417l54.819-30.273C224.449 390.801 239.948 393 256 393c88.918 0 161-67.157 161-150S344.918 93 256 93zm16 202l-41-44-80 44 88-94 42 44 79-44-88 94z"/>
    </svg>
  </button>
</div>

{/* Floating Contact Buttons - ডেস্কটপ/পিসি ভিউ */}
<div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40 hidden md:flex">
  <button
    onClick={handleWhatsApp}
    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-lg flex items-center justify-center transform hover:scale-125 transition group relative"
    title="WhatsApp"
  >
    <svg width="28" height="28" viewBox="0 0 175.216 175.552" fill="currentColor">
      <path d="M149.995 25.219C133.432 8.656 111.297 0 87.776 0 39.898 0 .904 38.99.904 86.868c0 15.297 3.988 30.233 11.587 43.41L0 175.552l46.637-12.24c12.715 6.933 27.017 10.588 41.556 10.588h.036c47.842 0 86.836-38.99 86.836-86.868 0-23.197-9.033-45.014-25.433-61.813zM87.776 159.096c-12.933 0-25.613-3.475-36.65-10.034l-2.629-1.56-27.27 7.152 7.279-26.586-1.711-2.725c-7.19-11.434-10.992-24.653-10.992-38.226 0-39.615 32.242-71.857 71.893-71.857 19.187 0 37.236 7.48 50.806 21.05 13.571 13.57 21.05 31.62 21.05 50.807.001 39.615-32.241 71.857-71.856 71.857zm39.435-53.841c-2.161-1.083-12.788-6.31-14.769-7.029-1.98-.72-3.422-1.081-4.862 1.08-1.441 2.161-5.586 7.029-6.848 8.47-1.261 1.44-2.521 1.621-4.682.54-2.161-1.083-9.128-3.363-17.385-10.727-6.424-5.731-10.764-12.81-12.025-14.971-1.261-2.162-.134-3.33.948-4.405.971-.97 2.16-2.521 3.241-3.782 1.08-1.261 1.44-2.161 2.161-3.601.72-1.441.36-2.701-.18-3.782-.54-1.08-4.862-11.707-6.661-16.038-1.751-4.216-3.53-3.644-4.862-3.71-.126-.006-.263-.009-.401-.012-1.261-.033-2.701-.54-4.142-.54s-3.781.54-5.761 2.701c-1.98 2.161-7.569 7.389-7.569 18.02 0 10.631 7.75 20.901 8.83 22.342 1.08 1.44 15.229 23.26 36.886 32.628 5.149 2.225 9.17 3.554 12.303 4.548 5.172 1.644 9.873 1.411 13.593.855 4.144-.618 12.788-5.227 14.587-10.273 1.799-5.046 1.799-9.377 1.259-10.278-.54-.9-1.98-1.44-4.141-2.521z"/>
    </svg>
    <span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      WhatsApp
    </span>
  </button>
  
  <button
    onClick={handleMessenger}
    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-5 shadow-lg flex items-center justify-center transform hover:scale-125 transition group relative"
    title="Messenger"
  >
    <svg width="28" height="28" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffffff" d="M256 93c-88.918 0-161 67.157-161 150 0 47.205 23.412 89.311 60 116.807V417l54.819-30.273C224.449 390.801 239.948 393 256 393c88.918 0 161-67.157 161-150S344.918 93 256 93zm16 202l-41-44-80 44 88-94 42 44 79-44-88 94z"/>
    </svg>
    <span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      Messenger
    </span>
  </button>
</div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                khalidfashion.com
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Top Banner Section */}
      <section className="bg-white py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
              বাচ্চার প্রস্রাবের বিছানা ধোয়ার জ্বালা আর কতদিন😰
            </h2>
            <p className="text-lg text-gray-700 font-semibold">
              কিনুন অরিজিনাল ওয়াটারপ্রুফ বিছানার চাদর
            </p>
          </div>

          <div className="mb-6 rounded-lg overflow-hidden shadow-xl relative">
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-xl bg-white">
              {/* Blurred background (only for md and up) */}
              <div
                className="hidden md:block absolute inset-0 bg-center bg-cover blur-xl scale-110"
                style={{ backgroundImage: "url('/images/1.jpeg')" }}
              ></div>

              {/* Main Image */}
              <Image
                src="/images/30.jpeg"
                alt="W33 প্যাটার্ন"
                fill
                className="object-contain relative z-10"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white p-6 rounded-lg mb-6">
            <p className="text-2xl font-bold mb-2">১০০% ওয়াটারপ্রুফ হবে এবং</p>
            <p className="text-2xl font-bold">১০০% কালার গ্যারান্টি</p>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-lg">
            <p className="text-xl font-bold mb-4">
              ডেলিভারির ম্যানের সামনে পানি দিয়ে চেক করে নিতে পারবেন।
            </p>
            <button 
              onClick={() => {
                document.getElementById('orderForm')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                backgroundColor: '#ffffff',
                color: '#dc2626',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#dc2626';
                e.target.style.color = '#ffffff';
                e.target.style.boxShadow = '0 10px 25px rgba(220, 38, 38, 0.3)';
                e.target.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.color = '#dc2626';
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>অর্ডার করুন</span>
            </button>
            <p className="text-xl font-bold">
              অর্ডার করলেই ১ পিস বেবি ডায়াপার ফ্রি !!
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">প্রিমিয়াম কোয়ালিটি বেড শীট</h2>
            <p className="text-xl mb-8 text-emerald-100">
              সর্বোচ্চ মানের বেডশিট সরাসরি কারখানা থেকে আপনার দোরগোড়ায়
            </p>
            <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6" />
                <span>১০০% অরিজিনাল</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6" />
                <span>কোয়ালিটি গ্যারান্টি</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gradient-to-br from-cyan-50 to-blue-50">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        আমাদের ওয়াটারপ্রুফ চাদর ব্যবহারের{" "}
        <span className="text-red-600 relative inline-block">
          সুবিধাসমূহ
          <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></span>
        </span>
      </h2>
    </div>

    {/* Benefits */}
    <div className="space-y-3 mb-12">
      {[
        "সাধারণ চাদরের মতো সহজেই ভাঁজ করা ও ব্যবহার করা যায়।",
        "সহজেই ১০০% পরিষ্কার করা যায়।",
        "আপনার খাট সবসময় পরিষ্কার ও শুকনো থাকবে।",
        "বাচ্চারা বিছানায় প্রস্রাব করলেও গদি ভিজবে না।",
        "দাগ, দুর্গন্ধ বা জীবাণু জমবে না।",
        "শীতে ঠান্ডা বা অস্বস্তি অনুভব হবে না।"
      ].map((benefit, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="bg-emerald-500 rounded-full p-1 flex-shrink-0 mt-1">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
          <p className="text-gray-800 border-b border-dotted border-gray-400 pb-2 flex-1">
            {benefit}
          </p>
        </div>
      ))}
    </div>

    {/* Why Buy Section */}
    <div className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          কেন আমাদের থেকে{" "}
          <span className="text-red-600 relative inline-block">
            বেডশিট কিনবেন
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded"></span>
          </span>
          <span className="text-red-600">?</span>
        </h2>
      </div>

      <div className="space-y-3 mb-8">
        {[
          { text: "১০০% ওয়াটারপ্রুফ", bold: true },
          { text: "১০০% কালার গ্যারান্টি", bold: true },
          { text: "আগে টাকা দিতে হবে না। প্রোডাক্ট হাতে পেয়ে দেখে তারপর পেমেন্ট করুন।", bold: false },
          { text: "হোম ডেলিভারি (১–৩ দিনের মধ্যে)", bold: false },
          { text: "ক্যাশ অন ডেলিভারি সুবিধা", bold: false }
        ].map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="bg-emerald-500 rounded-full p-1 flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <p
              className={`text-gray-800 border-b border-dotted border-gray-400 pb-2 flex-1 ${
                item.bold ? "font-semibold" : ""
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Wave Background Notice */}
      <div className="relative mt-8 overflow-hidden rounded-xl">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#065f46"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#047857"
            fillOpacity="0.8"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        <div className="relative z-10 py-8 px-6 text-center">
          <div className="bg-white rounded-lg p-6 mb-6 inline-block">
            <p className="text-2xl md:text-3xl font-bold mb-2 text-emerald-700">
              কোয়ালিটি পছন্দ না হলে টাকা দেবেন না
            </p>
            <p className="text-xl md:text-2xl text-emerald-700 font-bold">
              ডেলিভারি ম্যানের কাছেই সাথে সাথে পণ্য রিটার্ন করুন
            </p>
          </div>

          <div>
            <button
              onClick={() => {
                document
                  .getElementById("orderForm")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 border-none cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>ক্যাশ অন ডেলিভারিতে অর্ডার করুন</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Pricing Section */}
      <section className="py-12 bg-white">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes drawLine1 {
          0% {
            stroke-dashoffset: 200;
          }
          40% {
            stroke-dashoffset: 0;
          }
          60%, 100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes drawLine2 {
          0%, 40% {
            stroke-dashoffset: 200;
          }
          70% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
        }
        
        .svg-cross {
          animation: none;
        }
        
        .cross-line-1 {
          stroke-dasharray: 200;
          animation: drawLine1 2.5s ease-in-out infinite;
        }
        
        .cross-line-2 {
          stroke-dasharray: 200;
          animation: drawLine2 2.5s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.3s; }

        .price-highlight {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 900;
          font-size: 1.5rem;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
          display: inline-block;
          border: 3px solid #d97706;
        }

        .price-highlight.price-1 {
          background: linear-gradient(135deg, #ec4899 0%, #f91880 100%);
          border: 3px solid #be185d;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
        }

        .price-highlight.price-2 {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: 3px solid #065f46;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .glow-container {
          animation: pulse-glow 2s infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-emerald-700">খুচরা মূল্য</span> <span className="text-red-600">(MRP)</span>
          </h2>
        </div>

        <div className="space-y-6">
          <div className="border-2 border-gray-300 rounded-lg p-8 bg-white hover:shadow-lg transition animate-slide-up delay-1">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-lg font-bold text-gray-800">৬ ফুট x ৭ ফুট</p>
              </div>
              <div className="text-center relative flex flex-col items-center gap-3">
                <div className="glow-container">
                  <span className="price-highlight price-1">
                    ১০৯০ টাকা
                  </span>
                </div>
                <div className="relative">
                  <p className="text-4xl font-bold text-red-600 relative z-10">
                    ১৪৫০
                  </p>
                  <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 svg-cross" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
                    <line x1="30" y1="30" x2="170" y2="120" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" className="cross-line-1" />
                    <line x1="170" y1="30" x2="30" y2="120" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" className="cross-line-2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-emerald-400 rounded-lg p-8 bg-emerald-50 shadow-lg animate-slide-up delay-2 hover:shadow-xl transition">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-lg font-bold text-gray-800">৭ ফুট x ৮ ফুট</p>
              </div>
              <div className="text-center relative flex flex-col items-center gap-3">
                <div className="glow-container">
                  <span className="price-highlight price-2">
                    ১২৫০ টাকা
                  </span>
                </div>
                <div className="relative">
                  <p className="text-4xl font-bold text-red-600 relative z-10">
                    ১৫৫০
                  </p>
                  <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-24 svg-cross" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet">
                    <line x1="30" y1="30" x2="170" y2="120" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" className="cross-line-1" />
                    <line x1="170" y1="30" x2="30" y2="120" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" className="cross-line-2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Image Gallery */}
      <ImageGallery/>

      {/* Trust & Rating */}
      <section className="py-16 bg-gradient-to-r from-cyan-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-16 h-16 text-amber-400 fill-amber-400 drop-shadow-lg ${i === 2 ? 'animate-pulse' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: '100%', subtitle: 'GUARANTEE', desc: 'মানের গ্যারান্টি', color: 'from-red-600 to-red-700' },
              { title: 'TRUSTED', subtitle: 'SELLER', desc: 'বিশ্বস্ত বিক্রেতা', color: 'from-amber-500 to-yellow-600', icon: true },
              { title: '100%', subtitle: 'PREMIUM QUALITY', desc: 'প্রিমিয়াম কোয়ালিটি', color: 'from-red-600 to-pink-600' }
            ].map((badge, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} rounded-full ${index === 2 ? 'animate-pulse' : ''}`}></div>
                  <div className={`absolute inset-2 bg-gradient-to-br ${index === 1 ? 'from-amber-600 to-yellow-700' : badge.color} rounded-full flex items-center justify-center shadow-2xl`}>
                    {badge.icon ? (
                      <Shield className="w-24 h-24 text-amber-200" />
                    ) : (
                      <div className="text-center text-white p-4">
                        <p className="text-3xl font-extrabold">{badge.title}</p>
                        <p className="text-lg font-bold mt-1">{badge.subtitle}</p>
                      </div>
                    )}
                  </div>
                  {index === 1 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-700 to-yellow-800 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">
                      TRUSTED SELLER
                    </div>
                  )}
                </div>
                <p className="text-gray-700 text-center font-semibold">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <OrderForm/>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© ২০২৬ প্রিমিয়াম বেডিং স্টোর। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
}