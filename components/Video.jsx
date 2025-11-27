"use client";
import React, { useEffect, useState } from "react";

export default function Video({ courseId }) {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    fetch("/video.json")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data[courseId] || []);
      });
  }, [courseId]);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-[#0fb6e3]">
        Course Videos
      </h2>

      {videos.length === 0 && (
        <p className="text-gray-500 text-lg">এই কোর্সে কোনো ভিডিও নেই।</p>
      )}

      <div className="space-y-6">
        {videos.map((v) => (
          <div
            key={v.id}
            className="bg-white p-4 shadow-md rounded-xl flex gap-4 items-center cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveVideo(v.id)}
          >
            <img
              src={v.thumbnail}
              alt={v.title}
              className="w-40 h-28 object-cover rounded-lg"
            />

            <div>
              <h3 className="text-xl font-semibold">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className="mt-10 bg-black p-4 rounded-xl">
          <iframe
            className="w-full h-[400px] rounded-lg"
            src={videos.find((v) => v.id === activeVideo).url}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
