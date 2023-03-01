import Image from "next/image";
import Link from "next/link";
const Footer = ()=>{
    return(
        <>
  
  <footer className="bg-white border-t border-neutral-200 pb-12">
  <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
           <Image
           src={"/E.png"}
           width={50}
           height={50}
           className="rounded-full"
           alt="footer image"
           /> 
           <span className="text-2xl text-neutral-800">&nbsp; Elly.ink</span>
          </Link>
          <div className="mt-4 lg:max-w-sm">
            <p className="mt-4 text-sm text-gray-800">
              &copy; Copyright 2023 Elly. All rights reserved.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-black tracking-wide text-neutral-800">
              Company
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  News
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
          <p className="font-black tracking-wide text-neutral-800">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Advertisement
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Developers API
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Bizznex
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <p className="font-black tracking-wide text-neutral-800">
              Legal</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  T&C
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <p className="font-black tracking-wide text-neutral-800">
              Contact</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Delaware, United States
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  twitter
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  github
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</footer>
</>
    )
}

export default Footer;