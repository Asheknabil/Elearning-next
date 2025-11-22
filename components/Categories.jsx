"use client";

import { useEffect, useState } from "react";
import { FaUserCog, FaVideo, FaCube, FaBrain } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { SlChemistry } from "react-icons/sl";
import { MdCastForEducation } from "react-icons/md";
import { PiPiBold } from "react-icons/pi";

const iconMap = {
  FaUserCog: <FaUserCog size={40} className="text-[#0fb6e3]" />,
  FaVideo: <FaVideo size={40} className="text-[#0fb6e3]" />,
  FaCube: <FaCube size={40} className="text-[#0fb6e3]" />,
  SiBlockchaindotcom: <SiBlockchaindotcom size={40} className="text-[#0fb6e3]" />,
  MdCastForEducation: <MdCastForEducation size={40} className="text-[#0fb6e3]" />,
  PiPiBold: <PiPiBold size={40} className="text-[#0fb6e3]" />,
  SlChemistry: <SlChemistry size={40} className="text-[#0fb6e3]" />,
  FaBrain: <FaBrain size={40} className="text-[#0fb6e3]" />
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="text-center py-16 bg-gray-50">
      <h4 className="text-[#0fb6e3] text-xl font-semibold relative inline-block mb-3 before:absolute before:-left-6 before:top-1/2 before:w-4 before:h-1 before:bg-blue-500 before:rounded-full after:absolute after:-right-6 after:top-1/2 after:w-4 after:h-1 after:bg-blue-500 after:rounded-full">
        Expensive Categories
      </h4>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black/80 mb-4 leading-snug">Explore Online Courses</h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-10">
        {categories.map((course, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition">
            <div className="flex justify-center mb-3">
              {iconMap[course.icon]}
            </div>
            <h5 className="font-semibold text-black text-lg mt-4 mb-4">{course.title}</h5>
            <h6 className="text-gray-500 text-sm">{course.courses}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
