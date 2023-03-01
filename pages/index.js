import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/Layout'
import Services from './components/Services'

const Home = () => {

  return (
      
    <Layout 
    title={"Addify - Create Your Vcard"}
    >
    {/* SECTION */}
    
    <section> 
    <div className="pt-8 sm:pt-8 mx-auto px-5 md:px-24 lg:px-8 ">
    <div className="flex flex-col items-center justify-between w-full lg:flex-row">
    <div className="lg:max-w-lg lg:pr-5 sm:translate-x-16">
    <div className="max-w-xl">    
    <h2 className="font-mediumtracking-wide text-black text-sm lg:text-sm sm:leading-none max-w-lg mb-4">
    ✰ Sign in or Signup to Get Started.
    </h2>

    <h2 className="font-black tracking-wide text-black text-4xl lg:text-5xl sm:leading-none max-w-lg mb-4">
      Build Your Android App With Elly.
    </h2>
    <h2 className="font-medium tracking-wide text-black text-md lg:text-sm sm:leading-none max-w-lg mb-4">
      Convert Your Website Into A Mobile App Or Build A App From Scratch.</h2>
    </div>

    <button className="flex items-center space-x-3 sm:mb-0 mb-6">
    <Link href="/api/auth/login">
    <div 
    className="font-medium hover:shadow-sm text-xl border text-neutral-100 bg-blue-700 hover:bg-blue-800 rounded-3xl py-3 px-6">
    Create Now
    </div>
    </Link>
    </button>
    </div>
    

    <span className="sm:hidden ">
    <Image className="rounded-lg sm:-translate-y-16  w-auto h-auto" 
    alt="mobile banner image" 
    priority={true}
    width={640} 
    height={700} 
    src="/banner3.png" />
    </span>

    <span className="hidden sm:block">
    <Image className="rounded-lg -translate-x-16" 
    alt="desktop banner image" 
    priority={true}
    width={320} 
    height={327} 
    src="/banner3.png" />
    </span>
    
    </div>
    </div>
    <Services />

    </section>
    {/* SECTION */}
    </Layout>
  )

}

export default Home;