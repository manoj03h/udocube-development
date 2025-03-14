import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-full w-full flex flex-col justify-start min-w-[480px]">
      <div className="relative block w-full">
          <Image
            className="object-contain z-10 w-full h-auto"
            src="/images/heroBg.jpg"
            alt="UFOCube Hero Image"
            width={6000}
            height={600}
            priority
          />

          {/* Hero Section ================================== */}
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
      <div className="flex flex-col row-start-2 justify-center items-center sm:items-start">
        <div className="flex h-full w-full flex-col md:flex-row justify-center items-center py-20 px-16">        
          
          {/* Intro Section ================================== */}
          <div className='relative overflow-hidden w-full h-[300px] md:w-[75%] md:h-[500px] mr-10 rounded-lg mb-10'>
            <Image 
              className="object-cover rounded-lg w-full h-full"
              src="/images/home/intro.jpg"
              alt="Intro Image"
              height={"900"}  // Increased height
              width={"1800"}   // Adjusted width to maintain aspect ratio
              priority
            />
          </div>

          {/* What We Do Section ================================== */}
          <div className='relative overflow-hidden w-full h-auto mr-10 rounded-lg pb-8'>
            {/* <p className='text-2xl font-bold text-black'>We</p> */}
            <p className='text-5xl font-bold text-black mb-8'>Grow your <span className='text-5xl font-black mb-4 text-yellow-400'>BUSINESS</span></p>
            <p className='text-sm font-thin mb-10 text-black text-justify'>Welcome to UFOCube, your trusted partner in driving business growth and innovation in Jamshedpur and beyond! Located in the heart of Jamshedpur, we are a dynamic team of creative minds, tech enthusiasts, and business strategists dedicated to helping businesses thrive in today&apos;s competitive landscape. At UFOCube, we believe in the power of innovation, technology, and tailored solutions to transform your vision into reality.
              Whether you&apos;re a startup looking to make your mark or an established business aiming to scale new heights, we specialize in crafting customized strategies that align with your goals. As a leading Web Development Company in Jamshedpur, we create stunning, user-friendly websites that captivate your audience. Our Digital Marketing Services in Jamshedpur ensure your brand reaches the right audience through SEO Services, Social Media Marketing, and Online Advertising.
              Looking to build a strong brand identity? Our Branding Agency in Jamshedpur offers Corporate Branding and Graphic Design Services that leave a lasting impression. For businesses seeking growth, we provide Business Consulting in Jamshedpur, including Startup Consulting, Business Strategy Consulting, and Local Business Growth Strategies. We also specialize in E-commerce Solutions, Mobile App Development, and Affordable Web Design to help you stay ahead in the digital age.
              At UFOCube, we go beyond just services—we deliver results. From Content Marketing Services and Lead Generation Services to Local SEO Services and Website Maintenance, we ensure your business is always at its best. Our Digital Transformation Services in Jamshedpur empower businesses to adapt, innovate, and succeed in a rapidly changing world.
              Our mission is simple: to empower businesses in Jamshedpur and beyond with the tools, strategies, and insights they need to succeed. Let us help you navigate the ever-evolving business landscape and unlock your full potential. Together, we&apos;ll build a future where your business doesn&apos;t just grow—it thrives.
            </p>
            <Link 
                className='px-10 py-3 rounded-[30px] text-white bg-green-700 hover:bg-black font-medium text-lg text-center'
                href="/"
            >Know More</Link>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between items-center py-20 px-40 bg-slate-100">
          <div className="flex flex-col items-center mb-20 w-full">
              <p className='text-2xl font-bold text-slate-600'>What We Do</p>
              <p className='text-6xl font-bold text-green-600 mb-4'>Our Services</p>
          </div>
          <div className='flex flex-col items-center flex-wrap gap-8 justify-center sm:flex-col md:flex-row'>
            <div className="flex flex-col justify-start items-center bg-white shadow-md rounded-sm py-12 px-12 w-[100%] md:w-[40%]">
              <p className='font-bold text-4xl text-green-600 mb-5'>Digital Marketing</p>
              <Image 
                className="object-cover mb-8 w-full h-[30%]"
                src="/images/home/intro.jpg"
                alt="UFOCube logo"
                width={"300"}
                height={38}
                priority
              />
              <p className='font-thin text-sm text-slate-700 mb-8 text-justify'>Welcome to UFOCube, your trusted partner in driving business growth and innovation in Jamshedpur and beyond! Located in the heart of Jamshedpur, we are a dynamic team of creative minds, tech enthusiasts, and business strategists
              </p>
              <Link href="services/digitalMarketing" className="px-16 py-3 rounded-md bg-green-600">Know More</Link>
            </div>
            <div className="flex flex-col justify-start items-center bg-white shadow-md rounded-sm py-12 px-12 w-[100%] md:w-[40%]">
              <p className='font-bold text-4xl text-green-600 mb-5'>Digital Marketing</p>
              <Image 
                className="object-cover mb-8 w-full h-[30%]"
                src="/images/home/intro.jpg"
                alt="UFOCube logo"
                width={"300"}
                height={38}
                priority
              />
              <p className='font-thin text-sm text-slate-700 mb-8 text-justify'>Welcome to UFOCube, your trusted partner in driving business growth and innovation in Jamshedpur and beyond! Located in the heart of Jamshedpur, we are a dynamic team of creative minds, tech enthusiasts, and business strategists
              </p>
              <Link href="services/digitalMarketing" className="px-16 py-3 rounded-md bg-green-600">Know More</Link>
            </div>
          </div>
        </div>
        </div>                    
    </main>
    
  );
}
