"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import VideoList from "@/components/Video";

export default function VideoPage() {
  const params = useParams();
  const id = params.id;

  const searchParams = useSearchParams();
  const playVideoId = searchParams.get("video");


  const [courseVideos, setCourseVideos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/video.json");
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


      <VideoList videos={courseVideos} />
    </div>
  );
}
