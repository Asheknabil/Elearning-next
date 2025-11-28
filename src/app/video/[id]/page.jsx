"use client";

import { useEffect, useState } from "react";
import VideoList from "@/components/Video";
import { useSearchParams } from "next/navigation";

export default function VideoPage({ params }) {
  const { id } = params;
  const searchParams = useSearchParams();
  const playVideoId = searchParams.get("video");

  const [courseVideos, setCourseVideos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/video.json"); // public/video.json
      const json = await res.json();

      if (json[id]) {
        setCourseVideos(json[id]);
      }
    };

    loadData();
  }, [id]);

  const currentVideo = courseVideos.find((v) => v.id === playVideoId);

  return (
    <div className="min-h-screen py-10">

      {/* Video Player */}
      {currentVideo && (
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-xl font-bold mb-3">{currentVideo.title}</h2>

          <iframe
            width="100%"
            height="450"
            src={currentVideo.url}
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Video List */}
      <VideoList videos={courseVideos} />
    </div>
  );
}
