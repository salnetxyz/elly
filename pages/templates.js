import Image from "next/image";
// import Footer from "./components/Footer";
import Link from "next/link";
import Head from "next/head";
import TemplateCard from "./components/TemplateCard";
import Nav from "./components/Nav";
const Templates = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Elly - Create Your Bio Website</title>
      </Head>
      <Nav />


      <div
        className="container max-w-lg z-20 px-4 sm:pt-20 pt-12 mx-auto text-left max-w-none text-center"
      >

        <h1
          className="text-4xl sm:py-32 py-12 px-3 font-medium leading-10 tracking-tight text-left text-neutral-900 text-center sm:leading-none md:text-6xl lg:text-7xl"
        >
          <span className="inline">Elly Templates</span>
        </h1>

      </div>

        <div className="bg-[#F8F8F8] rounded-t-3xl mt-12 py-8">

           {/* Card Section */}
              <div className="sm:grid grid-cols-2 gap-x-20 gap-y-8 space-y-8 sm:space-y-0 sm:mx-12 mx-4">
              <TemplateCard name={"demo1"} image={"portfolio.png"} />
              <TemplateCard name={"demo2"} image={"link.png"} />
              <TemplateCard name={"demo3"} image={"product.png"} />
              <TemplateCard name={"demo4"} image={"ellyt.png"} />
              <TemplateCard name={"demo5"} image={"page.png"} />
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

export default Templates;