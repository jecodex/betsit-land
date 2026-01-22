"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Gallery items with product codes
  const galleryItems = [
    { code: 'T 28', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' },
    { code: 'R 33', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' },
    { code: 'D 50', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' },
    { code: 'A 21', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' },
    { code: 'W 70', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' },
    { code: 'Pattern', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' },
    { code: 'W 42', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' },
    { code: 'A 21', image: 'https://i.ibb.co/wNwC1gsK/Whats-App-Image-2026-01-22-at-12-01-44-AM.jpg' }
  ];

  const nextImage = () => {
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <>
      {/* Image Gallery */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">আমাদের সর্বশেষ কালেকশন</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="relative group overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.code}
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300?text=${item.code}`;
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
                {item.code !== 'Pattern' && (
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full font-bold text-gray-800 shadow-lg">
                    {item.code}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full image view */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[selectedIndex].image}
              alt={galleryItems[selectedIndex].code}
              className="w-full rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/600?text=${galleryItems[selectedIndex].code}`;
              }}
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg font-bold text-gray-800 text-lg">
              {galleryItems[selectedIndex].code}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm font-semibold">
              {selectedIndex + 1} / {galleryItems.length}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}