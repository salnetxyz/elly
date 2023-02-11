import Image from "next/image";
// import Footer from "./components/Footer";
import Head from "next/head";
const Home = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Biobyme - Create Your Bio Website</title>
      </Head>

   <div className="bg-white sticky top-0 z-30"> 
      <div className="flex border-b border-neutral-700 bg-white mx-3 sm:mx-48 opacity-95 sm:px-16 px-5 py-5">
    <div className="flex-1 font-medium inline text-2xl">
     <Image className="inline rounded-lg" width={35} height={35} src={'/E.png'} /> &nbsp; | &nbsp; Elly
    </div>

    <div className="flex-none">
    <a href="https://api.whatsapp.com/send/?phone=919775342439&text=I+would+like+to+build+my+website&type=phone_number&app_absent=0" className="text-sm font-semibold px-5 rounded-xl py-1.5 hover:bg-indigo-700 bg-indigo-500 text-white flex gap-1">
            Contact
    </a>
    </div>

    <div className="flex-none">
    <a href="/pages" className="text-sm font-semibold pl-3 sm:pl-6 rounded-full py-1 text-white flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
    </a>
    </div>


    <div className="flex-none">
    <a href="/pages" className="text-sm font-semibold pl-3 sm:pl-6 rounded-full py-1 text-white flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
    </svg>
    </a>
    </div>
    
    <hr className="mt-2" />
  </div>
  </div>  



      <div
        className="container opacity-70 max-w-lg z-20 px-4 sm:pt-20 pt-12 mx-auto text-left max-w-none text-center"
      >
        <div className="mb-6">
          <Image
          src="/E.png"
          width={80}
          height={80}
          className="rounded-3xl shadow-xl max-w-screen-sm mx-auto md:w-auto lg:max-w-screen-md"
          alt="banner pic"
          />
        </div>
        <h1
          className="text-4xl px-3 font-medium leading-10 tracking-tight text-left text-neutral-900 text-center sm:leading-none md:text-6xl lg:text-7xl"
        >
          <span className="inline md:block">Launch Your Landing</span>
          <span
            className="mt-2 text-black md:inline-block"
          > <span className="text-black">Page In </span> Minutes!</span>
        </h1>

        <div className="flex flex-col mt-5">

          <span className="relative sm:block inline-flex w-full md:w-auto">
            <a
            href="https://api.whatsapp.com/send/?phone=919775342439&text=I+would+like+to+build+my+website&type=phone_number&app_absent=0"
              className="inline-flex mx-8 opacity-90 mt-3 border border-neutral-700 text-4xl hover:shadow-lg hover:shadow-neutral-300 items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white bg-indigo-500 border border-b-4 rounded-xl md:w-auto hover:shadow-xl focus:outline-none"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>&nbsp;
            Get Your Landing Page
            </a>
          </span>
   
        <div className="mt-8">
          <Image
          src="/banner.jpg"
          width={400}
          height={180}
          className="w-full rounded shadow-xl max-w-screen-sm mx-auto md:w-auto lg:max-w-screen-md"
          alt="banner pic"
          />
        </div>
        </div>
      </div>

        <div className="bg-[#F8F8F8] mt-12 sm:px-8 px-3 py-8">

           {/* Card Section */}

            <div className="border mt-12 rounded-2xl sm:mx-32 mx-2 bg-white border-white">
              

            <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-20 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <div>
          </div>
          <h2 className="max-w-lg mb-6 text-3xl font-medium tracking-wide text-neutral-900 sm:text-4xl sm:leading-none">
            Build Something 
            <br className="hidden md:block" />
            <span className="inline-block text-deep-purple-accent-400">
              Beautiful.
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          Choose from over multiple beautiful Addify‑designed templates. 
          or customise your site, any way you like.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://kitwind.io/assets/kometa/two-thirds-phone.png"
          className="object-cover object-top w-full h-32 mx-auto lg:h-80 xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
              

              </div>
            </div>
{/* Card End */}




           {/* Card Section */}

           <div className="border rounded-2xl mt-16 sm:mx-32 mx-2 bg-white border-white">
           <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
      <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-4">
        <div>
        </div>
        <h2 className="max-w-lg text-3xl font-medium leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Stunning Result Effortlessly
        </h2>
      </div>
      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        Build your landing page by your own, rr submit your details and let us do the rest.
      </p>
      <img
        src="https://kitwind.io/assets/kometa/half-phone.png"
        className="w-full mx-auto md:w-auto md:max-w-xs"
        alt=""
      />
    </div>
              </div>
  {/* Card End */}
  
</div>


<footer className="bg-black border-t border-neutral-100 pb-12 sm:pb-8">
  <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-300 sm:justify-start">
      <p className="mt-8 text-sm text-center text-gray-100 lg:text-right lg:mt-0">
      Copyright © 2023 Elly. All rights reserved.
      </p>
      </div>

      <p className="mt-8 text-sm text-center text-gray-100 lg:text-right lg:mt-0">
        T&C &nbsp; Privacy & Policy &nbsp; Developers
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Home;