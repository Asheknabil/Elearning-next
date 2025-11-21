"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#031d24] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#0fb6e3] p-2 rounded-full font-bold text-2xl">
                E
              </div>
              <h2 className="font-bold text-2xl">School</h2>
            </div>


            <p className="text-gray-400 leading-relaxed mb-6">
              Far far away, behind the word mountains, far from the Consonantia,
              there live the blind texts.
            </p>

            <div className="flex items-center gap-3 mb-3">
              <FaPhoneAlt className="text-[#0fb6e3]" />
              <p>+23 (000) 68 603</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#0fb6e3]" />
              <p>66 Brooklyn Golden Street, New York, USA</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-5">Navigate</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Refund</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-5">Courses</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Business Coach</li>
              <li>Development Coach</li>
              <li>Testimonials</li>
              <li>Seo Optimization</li>
              <li>Web Design</li>
              <li>Life Coach</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-5">Subscribe Now</h2>

            <p className="text-gray-400 mb-6">
              Far far away, behind the word mountains, far from the Consonantia.
            </p>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-3 px-5 rounded-full bg-amber-50 text-black focus:outline-none"
              />
              <button className="absolute right-1 top-1 bottom-1 text-white px-5 bg-[#0fb6e3] hover:shadow-lg hover:scale-99 rounded-full">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-4 text-xl text-gray-300">
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>


        <div className="border-t text-center border-gray-700 mt-16 pt-6 flex flex-col lg:flex-row justify-center text-gray-400 text-sm">
          <p>Made by ©ESchool | Developer Ashek Elahi</p>

          {/* <p className="mt-3 lg:mt-0">
            Terms & Conditions / Privacy & Policy
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
