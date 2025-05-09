import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
  ];

  const services = [
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Web Designing", path: "/web-designing" },
    { name: "Web Development", path: "/web-development" },
    { name: "App Development", path: "/app-development" },
    { name: "Graphics Designing", path: "/graphics-designing" },
    { name: "Video Editing", path: "/video-editing" },
  ];

  return (
    <>
      <footer className="bg-[#2d2d2d] text-white">
        <div className="px-4 md:px-10 pt-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Content */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 border-b-2 border-white pb-1">
                    Our Services
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {services.map((service, index) => (
                      <li key={index}>
                        <a
                          href={service.path}
                          className="hover:text-yellow-400 transition"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 border-b-2 border-white pb-1">
                    Links
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.path}
                          className="hover:text-yellow-400 transition"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 border-b-2 border-white pb-1">
                    Contact Details
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Address:</strong> UFOCube, Jamshedpur
                    </li>
                    <li>
                      <strong>Contact Us:</strong> +91 787 017 5908
                    </li>
                    <li>
                      <strong>Email:</strong> info@ufocube.com
                    </li>
                  </ul>
                </div>
              </div>

              {/* Border Below Text Content */}
              <div className="border-b-2 border-white my-4"></div>

              {/* Social Icons */}
              <div className="flex gap-4 mb-3 text-[22px]">
                <a
                  href="https://www.facebook.com/ufocube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="bg-slate-300 hover:bg-green-600 p-1 rounded-full text-black transition-all" />
                </a>
                <a
                  href="https://www.instagram.com/ufocube03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="bg-slate-300 hover:bg-green-600 p-1 rounded-full text-black transition-all" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ufocube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="bg-slate-300 hover:bg-green-600 p-1 rounded-full text-black transition-all" />
                </a>
                <a
                  href="https://www.youtube.com/@ufocube3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="bg-slate-300 hover:bg-green-600 p-1 rounded-full text-black transition-all" />
                </a>
                <a
                  href="https://x.com/ufocube03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="bg-slate-300 hover:bg-green-600 p-1 rounded-full text-black transition-all" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <iframe
                className="w-full min-h-[270px] rounded"
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.482798456835!2d86.19840327511165!3d22.804566423322675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3a84757ebdf%3A0x8f3a9adf89f3a7b7!2sJamshedpur%2C%20Jharkhand%20831009!5e0!3m2!1sen!2sin!4v1712567987855"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="bg-black py-4 text-center text-sm w-full mt-4">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            Copyright 2025 | All rights reserved
            <img
              src="./images/logo.png"
              alt="UFOcube Logo"
              className="w-[80px] md:w-[100px] inline-block"
            />
          </p>
        </div>

      </footer>


    </>
  );
};

export default Footer;

