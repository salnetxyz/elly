import Image from "next/image";
// import Footer from "./components/Footer";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

const Home = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Elly - Create Your Bio Website</title>
      </Head>

   <div className="bg-white sticky top-0 z-30"> 
      <div className="flex border-b border-neutral-700 bg-white mx-3 sm:mx-48 sm:px-16 px-5 py-5">
    <div className="flex-1 font-medium inline text-2xl">
     <Image className="inline rounded-lg" width={35} height={35} src={'/E.png'} /> &nbsp; | &nbsp; Elly
    </div>

    <div className="flex-none">
    <Link href="/templates" className="text-sm font-semibold px-5 rounded-xl py-1.5 hover:bg-indigo-700 bg-indigo-500 text-white flex gap-1">
            Templates
    </Link>
    </div>

    {/* <div className="flex-none">
    <Link href="/" className="text-sm font-semibold pl-3 sm:pl-6 rounded-full py-1 text-white flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
    </Link>
    </div> */}


    <div className="flex-none">
    <Link href="/" className="text-sm font-semibold pl-3 sm:pl-6 rounded-full py-1 text-white flex gap-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
    </Link>
    </div>


    <div className="flex-none">
    <a href="https://api.whatsapp.com/send/?phone=919775342439&text=I+would+like+to+build+my+website&type=phone_number&app_absent=0" className="text-sm font-semibold pl-3 sm:pl-6 rounded-full py-1 text-white flex gap-1">
    <svg className="translate-y-0.5" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    </a>
    </div>
    
    <hr className="mt-2" />
  </div>
  </div>  



      <div
        className="container max-w-lg z-20 px-4 sm:pt-20 pt-12 mx-auto text-left max-w-none text-center"
      >
        <div className="mb-6">
          <Image
          src="/E.png"
          width={100}
          height={100}
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
          Choose from over multiple beautiful Elly‑designed templates 
          or customise your site, any way you like.
          </p>
          <div className="mt-5">
              <span className="border px-6 py-3 rounded-xl border-neutral-300 shadow-md">See Templates</span>
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
          Stunning Result Effortlessly
        </h2>
      </div>
      <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        Build your landing page by your own, or submit your details and let us do the rest.
      </p>
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