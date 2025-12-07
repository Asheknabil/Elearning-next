"use client";

import { useState } from "react";
import { User, Star } from "lucide-react";

export default function VideoList({ videos, playVideo }) {
  return (
    <div className="space-y-6">
      {videos.map((video, index) => (
        <VideoCard
          key={video.videoId || video.id || index}
          video={video}
          playVideo={playVideo}
        />
      ))}
    </div>
  );
}


function VideoCard({ video, playVideo }) {
  const [isHovered, setIsHovered] = useState(false);

  // Same star logic from Courses.jsx
  const StarRating = ({ rating }) => {
    const full = Math.floor(rating);
    return (
      <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 transition-colors duration-300 ${
              i < full ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="relative p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl cursor-pointer"
      onClick={() => playVideo(video.videoId)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 sm:flex-row flex-col">

        {/* Thumbnail Left */}
        <div
          className={`relative flex-shrink-0 w-full sm:w-1/3 aspect-video overflow-hidden rounded-xl p-2 transition-all duration-500 ${
            isHovered ? "border-4 border-[#0fb6e3]" : "border-4 border-transparent"
          }`}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
        </div>

        {/* Text Right */}
        <div className="flex flex-col justify-between w-full sm:w-2/3">
          <div className="space-y-2">

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
              {video.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-2">
              {video.description}
            </p>

            {/* Rating + Views */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <StarRating rating={video.rating || 4.8} />
                <span className="text-sm font-semibold text-gray-600">
                  {video.rating || 4.8}/5 rating
                </span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                <span>{video.instructor || "Instructor Unknown"}</span>
              </div>

              <button className="px-4 py-2 text-sm font-semibold border border-2 border-[#0fb6e3] text-black rounded-lg hover:bg-[#16748e] hover:text-white shadow-md transition-all duration-300 hover:shadow-lg">
                Watch Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
