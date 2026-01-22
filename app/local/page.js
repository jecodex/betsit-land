"use client"
import React, { useState } from 'react';
import { ShoppingCart, Star, Shield, CheckCircle, Phone, MapPin, Clock, Package, Check } from 'lucide-react';
import ImageGallery from './image/page';
import OrderForm from './OrderForm/page';

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

  const scrollToOrder = () => {
    document.getElementById('orderForm')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
         {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Package className="w-8 h-8 text-emerald-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Waterproof Bedding BD
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
              বাঁচার প্রয়োজনে বিছানা (প্রোয়ার জুলা আর কষ্টদিন)😭
            </h2>
            <p className="text-lg text-gray-700 font-semibold">
              কিনুন অরিজিনাল ওয়াটারপ্রুফ বিছানার চাদর
            </p>
          </div>

          <div className="mb-6 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://i.ibb.co.com/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg" 
              alt="W33 প্যাটার্ন"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-white drop-shadow-lg">W33</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white p-6 rounded-lg mb-6">
            <p className="text-2xl font-bold mb-2">১০০% ওয়াটারপ্রুফ হবে এবং</p>
            <p className="text-2xl font-bold">১০০% কালার গ্যারান্টি</p>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-lg">
            <p className="text-xl font-bold mb-4">
              ডেলিভারির মানের সামনে পানি দিয়ে চেক করে নিতে পারবেন।
            </p>
            <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-bold mb-4 inline-flex items-center space-x-2 hover:bg-gray-100 transition">
              <ShoppingCart className="w-5 h-5" />
              <span>অর্ডার করুন</span>
            </button>
            <p className="text-xl font-bold">
              অর্ডার করলেই ১ পিস বেরি উপহার পাবি !!
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
              আমাদের ওয়াটারপ্রুফ চাদর ব্যবহারের{' '}
              <span className="text-red-600 relative inline-block">
                সুবিধাসমূহ
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></span>
              </span>
            </h2>
          </div>

          <div className="space-y-3 mb-12">
            {[
              "সাধারণ স্যাম্পুটের মত ভাজ করা বা খোলা যায়।",
              "সহজেই কৌচ ১০০% শীঘর করিতে পারবে।",
              "আপনার খাট সোমসময়ে হিজ করিয়েস নিবদ্ধী তাগরে না।",
              "বিছানায় বাচ্চা গেলে একটাই/হাইদেবিচার হবে না।",
              "ধূরবে পরীক দায়িজ্ঞান বা সাইত্রোবিশ্ব হবে না।",
              "শীতকে অবিদ্বই ডাউন হবে না।"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-emerald-500 rounded-full p-1 flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-800 border-b border-dotted border-gray-400 pb-2 flex-1">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Why Buy Section */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                কেনো আমাদের থেকে{' '}
                <span className="text-red-600 relative inline-block">
                  বেডশিট কিনবেন
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded"></span>
                </span>
                <span className="text-red-600">?</span>
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {[
                { text: "১০০% ওয়াটারপ্রুফ", bold: true },
                { text: "২০০% কালার গ্যারান্টি", bold: true },
                { text: "অনিম ৭ দক্ষান পেলপিন করতে হবে না। প্রোডেক্ট হাতে নেয়ে দিতা পরীক্ষোর করার সুবিধা।", bold: false },
                { text: "হোম ডেলিভারি (১-৩ দিনের মধ্যে)", bold: false },
                { text: "ক্যাশঅনডেলিভারী পাবাতি গ্যারান্টি", bold: false }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-emerald-500 rounded-full p-1 flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className={`text-gray-800 border-b border-dotted border-gray-400 pb-2 flex-1 ${item.bold ? 'font-semibold' : ''}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Wave Background Notice */}
<div className="relative mt-12 overflow-hidden rounded-xl">
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
    <path fill="#065f46" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    <path fill="#047857" fillOpacity="0.8" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,170.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>

  <div className="relative z-10 py-12 px-6 text-center">
    <p className="text-2xl md:text-3xl font-bold mb-2 text-red-600">
      যদি ১% ও কোয়ালিটি ফুল কর মনে হয়
    </p>
    <p className="text-xl md:text-2xl mb-6 text-red-600 font-bold">
      (যেমনটা কৈশাবের এবং উদানা এম্পজিরে রিটার্ন করে দিতে পারবেন?
    </p>

    <button
      onClick={scrollToOrder}
      className="bg-white text-emerald-800 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition inline-flex items-center space-x-3"
    >
      <ShoppingCart className="w-6 h-6" />
      <span>🛒 ক্যাশ অন ডেলিভারিতে অর্ডার করুন</span>
    </button>
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
        
        .strike-container {
          position: relative;
          display: inline-block;
        }
        
        .strike-line-1 {
          position: absolute;
          left: -8px;
          top: 50%;
          width: calc(100% + 16px);
          height: 3px;
          background: #dc2626;
          transform: translateY(-50%) rotate(-18deg);
          animation: crossStrike 2s ease-in-out infinite;
        }
        
        .strike-line-2 {
          position: absolute;
          left: -8px;
          top: 50%;
          width: calc(100% + 16px);
          height: 3px;
          background: #dc2626;
          transform: translateY(-50%) rotate(18deg);
          animation: crossStrike2 2s ease-in-out infinite;
          animation-delay: 0.1s;
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-emerald-700">খুচরা মূল্য</span> <span className="text-red-600">(MRP)</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-6">
          {/* First Card */}
          <div className="border-2 border-gray-300 rounded-lg p-8 bg-white hover:shadow-lg transition animate-slide-up delay-1">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-lg font-bold text-gray-800">৬ ফুট x ৭ ফুট = ১০৯৯ টাকা</p>
              </div>
              <div className="text-center relative flex flex-col items-center">
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

          {/* Best Seller Card */}
          <div className="border-2 border-emerald-400 rounded-lg p-8 bg-emerald-50 shadow-lg animate-slide-up delay-2 hover:shadow-xl transition">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-lg font-bold text-gray-800">৭ ফুট x ৮ ফুট = ১২৫০ টাকা</p>
              </div>
              <div className="text-center relative flex flex-col items-center">
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