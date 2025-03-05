import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-full w-full flex flex-col justify-start">
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
          <div className="absolute top-0 left-0 z-10 min-h-full w-full mt-[15%] px-14 xs:px-20 sm:px-28 border-2 border-blue-600">
            <div className="relative w-[50%] text-white border-2 border-red-600">
                <p className='text-sm font-bold xs:text-md md:text-xl'>We</p>
                <p className='text-2xl font-bold mb-0 xs:text-xl md:text-[96%] md:mt-1'>Grow your</p>
                {/* <p className='text-2xl font-black mb-0 text-yellow-400 xs:text-2xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>BUSINESS </p> */}
                {/* <p className='text-[clamp(5rem, 70vw + 1rem, 9rem)] border-2 font-black mb-0 text-yellow-400'>BUSINESS </p> */}
                {/* <div className="w-full"> */}
                  <p className='text-[clamp(0.5rem,9vw,20rem)] border-2 font-black mb-0 text-yellow-400'>
                    BUSINESS
                  </p>
                {/* </div> */}
                <p className='text-xs font-bold mb-4 xs:text-xs md:text-lg md:mt-4 lg:text-3xl'>
                  by bringing your Business Online
                </p>
                <p className='text-md font-[100] mb-4 xs:text-md md:text-md md:mt-4 lg:text-md'>
                  Bringing your business online helps you reach more customers, increase visibility,
                  boost sales, and build stronger customer relationships. It’s a cost-effective way
                  to stay competitive, access valuable insights, and grow your business in today’s
                  digital world. Let us help you take your business to the next level!
                </p>
                <Link
                    className='px-10 py-2 rounded-[30px] w-48 bg-white text-black font-light text-xl text-center'
                    href="/"
                >
                  Know More
                </Link>
            </div>
          </div>
      </div>
      <div className="flex flex-col row-start-2 justify-center items-center sm:items-start">
        <div className="h-full w-full flex justify-center items-center py-20 px-16 border-red-600 border-2">        
          
          {/* Intro Section ================================== */}
          <div className='relative overflow-hidden w-[50%] min-h-[400px] mr-10 rounded-lg border-2'>
            <Image 
              className="object-cover center rounded-lg absolute right-0"
              src="/images/home/intro.jpg"
              alt="Intro Image"
              height={"1200"}
              width={"600"}
              priority
            />
          </div>

          {/* What We Do Section ================================== */}
          <div className='relative overflow-hidden w-[50%] h-auto mr-10 rounded-lg'>
            <p className='text-2xl font-bold text-black'>We</p>
            <p className='text-5xl font-bold mb-2 text-black'>Grow your</p>
            <p className='text-5xl font-black mb-4 text-yellow-400'>BUSINESS </p>
            <p className='text-lg font-thin mb-10 text-black'>by bringing your Business<br />
            Online </p>
            <Link 
                      className='px-10 py-3 rounded-[30px] w-48 bg-black text-white font-medium text-lg text-center'
                      href="/"
                  >Know More</Link>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-between items-center py-20 px-40 bg-slate-100">
          <div className="flex flex-col items-center mb-20 w-full">
              <p className='text-2xl font-bold text-black'>What We Do</p>
              <p className='text-6xl font-bold text-black mb-4'>Our Services</p>
          </div>
          <div className='rounded-[30px] flex flex-wrap gap-10'>
              <Image 
                  className="object-contain rounded-[30px]"
                  src="/images/home/intro.jpg"
                  alt="UFOCube logo"
                  width={"500"}
                  height={38}
                  priority
              ></Image>
              <Image 
                  className="object-contain rounded-[30px]"
                  src="/images/home/intro.jpg"
                  alt="UFOCube logo"
                  width={"500"}
                  height={38}
                  priority
              ></Image>
              <Image 
                  className="object-contain rounded-[30px]"
                  src="/images/home/intro.jpg"
                  alt="UFOCube logo"
                  width={"500"}
                  height={38}
                  priority
              ></Image>
          </div>
        </div>
        </div>                    
    </main>
    
  );
}
