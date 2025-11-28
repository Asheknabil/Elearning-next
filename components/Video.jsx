"use client";
import { useState, useEffect } from "react";

export default function VideoList({ videos }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(videos);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    let result = videos;

    // Search filter
    if (search.trim() !== "") {
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(search.toLowerCase()) ||
          v.desc.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Extra: Category filter (optional)
    if (category !== "all") {
      result = result.filter((v) => v.id.startsWith(category));
    }

    setFiltered(result);
  }, [search, category, videos]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="d">Design</option>
          <option value="c">Development</option>
          <option value="a">Academic</option>
          <option value="e">E-Learning</option>
          <option value="m">Machine Learning</option>
        </select>
      </div>

      {/* Video List */}
      <div className="flex flex-col gap-6">
        {filtered.map((v) => (
          <div
            key={v.id}
            className="flex gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer"
          >
            <img
              src={v.thumbnail}
              className="w-40 h-28 object-cover rounded-md"
            />

            <div>
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{v.desc}</p>

              <a
                href={`?video=${v.id}`}
                className="text-blue-600 underline text-sm"
              >
                Watch Now →
              </a>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center py-10 text-gray-500">
            No videos found.
          </p>
        )}
      </div>
    </div>
  );
}
