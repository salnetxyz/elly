import Image from "next/image";
// import Footer from "./components/Footer";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Nav from "./components/Nav";
const Home = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Elly - Create Your Bio Website</title>
      </Head>

  
      <Nav />

      <div
        className="container max-w-lg z-20 px-4 sm:pt-20 pt-12 mx-auto text-left max-w-none text-center"
      >
        <div className="mb-6">
          <Image
          src="/E.png"
          width={100}
          height={100}
          className="rounded-3xl hidden sm:block shadow-xl max-w-screen-sm mx-auto md:w-auto lg:max-w-screen-md"
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
            <Link
            href="https://api.whatsapp.com/send/?phone=919775342439&text=I+would+like+to+build+my+website&type=phone_number&app_absent=0"
              className="inline-flex mx-8 opacity-90 mt-3 border border-neutral-700 text-4xl hover:shadow-lg hover:shadow-neutral-300 items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white bg-indigo-500 border border-b-4 rounded-xl md:w-auto hover:shadow-xl focus:outline-none"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>&nbsp;
            Get Your Landing Page
            </Link>
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
          Choose from over multiple beautiful Elly‑designed templates.
          
          </p>
          <div className="mt-5">
              <span className="border px-6 py-3 rounded-xl border-neutral-300 shadow-md">Build Your Website</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/mobi1.png"
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
        🚀 Rs 1400 per year
        </h2>
      </div>
      <p className="text-center text-gray-700 pb-4 md:text-lg">
      Get your landing page up and running in minutes! Only Rs 1400/year, with free SSL, on page seo and logo. Invest in your online presence today!</p>
      <img
        src="/mobi.png"
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
<Script src="//code.tidio.co/xssnm5kgtqpkrrnf6xkitn0oliavwy5c.js" />
    </div>
  )
}

export default Home;