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
            <div className="absolute top-0 left-0 z-10 min-h-full w-full mt-[15%] px-14 xs:px-20 sm:px-28">
              <div className="w-full text-white">
                  <p className='text-sm font-bold xs:text-md md:text-xl'>We</p>
                  <p className='text-2xl font-bold mb-0 xs:text-3xl md:text-5xl md:mt-1 lg:text-7xl'>Grow your</p>
                  <p className='text-2xl font-black mb-0 text-yellow-400 xs:text-3xl md:text-5xl lg:text-7xl'>BUSINESS </p>
                  <p className='text-xs font-thin mb-4 xs:text-xs md:text-sm md:mt-4 lg:text-xl'>by bringing your Business<br />
                      Online </p>
                  <Link
                      className='px-5 py-1 rounded-[30px] w-48 bg-white text-black font-light text-xs text-center'
                      href="/"
                  >Know More</Link>
              </div>
            </div>
      </div>
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-14">
        <div className="h-full w-full flex flex-col justify-between items-center py-14">        
          
          {/* Intro Section ================================== */}
          <div className='rounded-[15px] relative overflow-hidden mb-14'>
            <Image 
              className="object-contain"
              src="/images/home/intro.jpg"
              alt="UFOCube logo"
              width={"600"}
              height={38}
              priority
            />
          </div>

          {/* What We Do Section ================================== */}
          <div className=''>
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
