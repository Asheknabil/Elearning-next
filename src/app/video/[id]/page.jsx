import VideoPlayer from "@/components/Video";

export default function Page({ params }) {
  const { id } = params;

  return <VideoPlayer courseId={id} />;
}
