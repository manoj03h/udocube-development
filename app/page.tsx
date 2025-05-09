import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  const shortServices = [
    {
      title: "Digital Marketing",
      description: "Expand your business reach with our result-driven digital marketing strategies.",
      buttonText: "Know More",
      image: "./images/services/dglmrkt.jpg",
      alt: "Digital Marketing",
      reverse: false,
      link: "/ourServices/digitalMarketing"
    },
    {
      title: "Web Designing",
      description: "We craft visually appealing and user-friendly website designs.",
      buttonText: "Know More",
      image: "./images/services/webdesigne.jpg",
      alt: "Web Designing",
      reverse: true,
      link: "/web-designing"
    },
    {
      title: "Web Development",
      description: "We offer full-stack web development using React, Node.js, and MongoDB.",
      buttonText: "Know More",
      image: "./images/services/webdevelopment.jpg",
      alt: "Web Development",
      reverse: false,
      link: "/web-development"
    },
    {
      title: "App Development",
      description: "We build high-performance Android and iOS apps using Flutter & React Native.",
      buttonText: "Know More",
      image: "./images/services/appdevlop.jpg",
      alt: "App Development",
      reverse: true,
      link: "/app-development"
    },
    {
      title: "Graphics Designing",
      description: "From logos to branding — creative and professional designs.",
      buttonText: "Know More",
      image: "./images/services/graphic-designer.jpg",
      alt: "Graphics Designing",
      reverse: false,
      link: "/graphics-designing"
    },
    {
      title: "Video Editing",
      description: "Sleek and professional video editing for YouTube and business.",
      buttonText: "Know More",
      image: "./images/services/videoedit.jpg",
      alt: "Video Editing",
      reverse: true,
      link: "/video-editing"
    },
  ];

  const clients = [
    { brandName: "ImDance Academy", logo: "./images/we_worked_for/1.png" },
    { brandName: "Dey's Academy", logo: "./images/we_worked_for/2.png" },
    { brandName: "Evelyn's Bridal Studio & Professional Salon", logo: "./images/we_worked_for/3.png" },
    { brandName: "Hoxbridge International", logo: "./images/we_worked_for/4.png" },
    { brandName: "Xavier Techker's", logo: "./images/we_worked_for/5.png" },
    { brandName: "", logo: "./images/we_worked_for/6.png" },
    { brandName: "Chakia Photography", logo: "./images/we_worked_for/7.png" },
    { brandName: "Yash Trust", logo: "./images/we_worked_for/8.png" },    
  ];

  return (
    <main className="relative min-h-full w-full flex flex-col justify-start min-w-[480px]">
      
      {/* Hero Section ================================== */}
      
      <div className="relative block w-full">
          <Image
            className="object-contain z-10 w-full h-auto"
            src="/images/heroBg.jpg"
            alt="UFOCube Hero Image"
            width={6000}
            height={600}
            priority
          />
          <div className="absolute top-0 left-0 z-10 w-full mt-[14%] px-14 xs:px-10 sm:px-20 lg:px-28">
            <div className="relative w-[50%] text-white">
                <p className='text-[clamp(1rem,2vw,3rem)]'>We Grow your</p>
                {/* <p className='text-2xl font-black mb-0 text-yellow-400 xs:text-2xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>BUSINESS </p> */}
                {/* <p className='text-[clamp(5rem, 70vw + 1rem, 9rem)] border-2 font-black mb-0 text-yellow-400'>BUSINESS </p> */}
                  <p className='text-[clamp(1rem,5vw,10rem)] font-black text-yellow-400'>
                    BUSINESS
                  </p>
                <p className='text-xs font-bold mb-4 xs:text-xs md:text-lg lg:text-3xl'>
                  by bringing your Business Online
                </p>
                <p className='text-[clamp(0.3rem,1vw,2rem)] font-[100] xs:mb-3 md:mb-10 lg:mb-20 xl:mb-20 md:mt-4 xs:pr-6 md:pr-20'>
                  Bringing your business online helps you reach more customers, increase visibility,
                  boost sales, and build stronger customer relationships. It’s a cost-effective way
                  to stay competitive, access valuable insights, and grow your business in today’s
                  digital world. Let us help you take your business to the next level!
                </p>
                <Link
                    className='text-[clamp(0.3rem,1vw,2rem)] px-10 py-2 rounded-[30px] w-48 bg-white text-black font-light text-center'
                    href="/"
                >
                  Know More
                </Link>
            </div>
          </div>
      </div>

      {/* Intro Section ================================== */}

      <section className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-[100px] lg:py-[150px]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="flex">
                        {/* Left Square Image - Centered Vertically */}
                        <img
                            src="./images/intro/about-comp.jpg"
                            alt="Main Preview"
                            className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-xl shadow-lg object-cover my-auto"
                        />

                        {/* Right Side: Two Square Images */}
                        <div className="flex flex-col justify-between ml-5 gap-5">
                            <img
                                src="./images/intro/serv-comp.jpg"
                                alt="Top Side Preview"
                                className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-xl shadow-lg object-cover"
                            />
                            <img
                                src="./images/intro/serv-comp.jpg"
                                alt="Bottom Side Preview"
                                className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-xl shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <h4 className="text-gray-700 font-medium">Design and Develop Websites</h4>

                    <h2 className="text-3xl md:text-4xl font-bold text-green-700 leading-tight mb-4">
                        HOW WE GROW <br /> YOUR BUSINESS
                    </h2>

                    <div className="max-h-[300px] overflow-y-auto pr-2 text-gray-600 text-sm md:text-base space-y-4 leading-relaxed">
                        <p>
                            Welcome to <strong>UFOCube</strong> – your trusted partner for business growth and digital innovation in Jamshedpur and beyond.
                        </p>
                        <p>
                            Located in the heart of Jamshedpur, UFOCube is a passionate team of tech experts, designers, and strategists committed to helping startups and businesses thrive. We turn your ideas into impactful digital solutions.
                        </p>
                        <p>
                            As a leading Web Development Company in Jamshedpur, we create stunning, user-friendly websites tailored to your brand. Our Digital Marketing Services – including SEO, Social Media Marketing, and Online Ads – ensure your brand reaches the right audience.
                        </p>
                        <p>
                            Want to build a strong identity? Our Branding & Graphic Design Services leave a lasting impression. We also provide Business Consulting, helping startups and local businesses grow with smart, scalable strategies.
                        </p>
                        <p>
                            From E-commerce Solutions and Mobile App Development to Content Marketing, Lead Generation, and Website Maintenance, UFOCube is your all-in-one digital partner.
                        </p>
                        <p>
                            We don’t just offer services—we deliver results. Let UFOCube help your business adapt, grow, and lead in the digital era.
                        </p>
                        <p className="font-semibold text-green-700">UFOCube – Where Innovation Meets Growth.</p>
                    </div>

                    <button className="mt-4 px-6 py-3 bg-white text-green-700  border-2 border-green-600 font-medium rounded-full transition-all shadow-md">
                        Know More
                    </button>
                </div>
            </div>
        </section>

        <div className="bg-slate-100 py-10">
          <div className="flex flex-col items-center text-center lg:m-9 lb:m-5">
            <p className="text-2xl font-bold text-green-600">What We Do</p>
            <p className="text-6xl font-bold text-black mb-4">Our Services</p>
          </div>
          <div className="py-10 px-5 md:px-10 lg:px-20 bg-slate-100">
            <div className="space-y-10">
              {shortServices.map((shservice, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    shservice.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center bg-white rounded-2xl shadow-md overflow-hidden gap-6 md:gap-12 p-6 md:p-10`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={shservice.image}
                      alt={shservice.alt}
                      className="rounded-xl w-full h-auto object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-3">
                      {shservice.title}
                    </h3>
                    <p className="text-slate-700 text-base md:text-lg mb-4">{shservice.description}</p>
                    <Link href={shservice.link}>
                      <button className="bg-white text-green-700 border border-green-700 px-6 py-2 rounded-full hover:bg-green-700 hover:text-white transition-all">
                        {shservice.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* We Worked For Section ======================================== */}

        <section
          className="w-full bg-cover bg-center"
          style={{ backgroundImage: "url('./images/we_worked_for/rest.jpg')" }}
        >
          <div className="bg-black bg-opacity-60 py-16 px-4 md:px-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
              We Worked For
            </h2>

            <div className="flex flex-wrap gap-8 justify-center py-4">
              {clients.map((client, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 text-white">
                  <div className="flex justify-center items-center gap-4 transition duration-300 hover:scale-110">
                    <img className="h-[60px] w-auto object-contain bg-white rounded-sm px-2 py-2" src={client.logo} alt={client.brandName}></img>
                  </div>
                  {/* <p className="text-sm font-medium">{client.brandName}</p> */}
                </div>
              ))}
            </div>

            {/* <div className="mt-10 text-center">
              <button className="px-6 py-2 bg-transparent text-white rounded-full border border-white hover:bg-white hover:text-black transition-all">
                Know More
              </button>
            </div> */}
          </div>
        </section>        
    </main>
    
  );
}
