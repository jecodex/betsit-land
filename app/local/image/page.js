"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Gallery items with product images from public/images folder
  const allGalleryItems = [
    { image: '/images/30.jpeg' },
    { image: '/images/29.jpeg' },
    { image: '/images/28.jpeg' },
    { image: '/images/27.jpeg' },
    { image: '/images/26.jpeg' },
    { image: '/images/25.jpeg' },
    { image: '/images/24.jpeg' },
    { image: '/images/23.jpeg' },
    { image: '/images/22.jpeg' },
    { image: '/images/21.jpeg' },
    { image: '/images/20.jpeg' },
    { image: '/images/19.jpeg' },
    { image: '/images/18.jpeg' },
    { image: '/images/17.jpeg' },
    { image: '/images/16.jpeg' },
    { image: '/images/15.jpeg' },
    { image: '/images/14.jpeg' },
    { image: '/images/13.jpeg' },
    { image: '/images/12.jpeg' },
    { image: '/images/11.jpeg' },
    { image: '/images/10.jpeg' },
    { image: '/images/9.jpeg' },
    { image: '/images/8.jpeg' },
    { image: '/images/7.jpeg' },
    { image: '/images/6.jpeg' },
    { image: '/images/5.jpeg' },
    { image: '/images/4.jpeg' },
    { image: '/images/3.jpeg' },
    { image: '/images/2.jpeg' },
    { image: '/images/1.jpeg' }
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(allGalleryItems.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const galleryItems = allGalleryItems.slice(startIndex, startIndex + itemsPerPage);

  const nextImage = () => {
    setSelectedIndex((selectedIndex + 1) % allGalleryItems.length);
  };

  const prevImage = () => {
    setSelectedIndex((selectedIndex - 1 + allGalleryItems.length) % allGalleryItems.length);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
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
                key={startIndex + index}
                onClick={() => setSelectedIndex(startIndex + index)}
                className="relative group overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={`Product ${startIndex + index + 1}`}
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300`;
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="bg-white text-emerald-900 px-4 py-2 rounded-lg font-bold hover:bg-emerald-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← পূর্ববর্তী
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }).map((_, page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-2 rounded-lg font-bold transition duration-300 ${
                      currentPage === page
                        ? 'bg-white text-emerald-900'
                        : 'bg-emerald-800 text-white hover:bg-emerald-700'
                    }`}
                  >
                    {page + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="bg-white text-emerald-900 px-4 py-2 rounded-lg font-bold hover:bg-emerald-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                পরবর্তী →
              </button>
            </div>
          )}
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
              src={allGalleryItems[selectedIndex].image}
              alt={`Product ${selectedIndex + 1}`}
              className="w-full rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/600`;
              }}
            />

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
              {selectedIndex + 1} / {allGalleryItems.length}
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