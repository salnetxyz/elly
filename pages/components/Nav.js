import Image from "next/image";
import Link from "next/link";
const Nav = ()=>{
   return(
    <>
    <div className="flex bg-[#fff] opacity-95 sm:px-16 px-5 border-b border-neutral-100 sm:pt-4 pt-4 pb-4 sticky top-0 z-30">
    <div className="flex-1">
   <Image className="rounded-xl sm:translate-x-6 w-auto h-auto" alt="Logo" priority width={128} height={50} src="/Elly.png" />
    </div>


    <div className="flex-none hover:opacity-90">
    <Link href="/" className="text-lg font-semibold rounded-full border border-b-4 mt-0.5 border-l-2 text-zinc-400 flex gap-1">
    <svg className="w-9 h-9 bg-white p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
    </Link>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;

    <div className="flex-none">
    <Link href="https://app.addify.us/api/auth/login" className="text-sm font-medium px-8 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-black text-white flex gap-1">
            Sign in
    </Link>
    </div>
    

    <hr className="mt-2" />
  </div>
  </>
   )
}

export default Nav;