import Nav from "./components/Nav";
const create = ()=>{
    return(
        <>
            <Nav />
            <div
            className="container max-w-lg z-20 px-4 sm:pt-20 pt-12 mx-auto text-left max-w-none text-center"
            >

            <h1
            className="text-4xl sm:py-32 py-12 px-3 font-medium leading-10 tracking-tight text-left text-neutral-900 text-center sm:leading-none md:text-6xl lg:text-7xl"
            >
            <span className="inline">Build Your Website</span>
            </h1>

            </div>


            <div className="bg-[#F8F8F8] rounded-t-3xl mt-12 py-8">

            {/* Card Section */}
            <div className="sm:grid grid-cols-2 gap-x-20 gap-y-8 space-y-8 sm:space-y-0 sm:mx-12 mx-4">
               
            </div>
            {/* Card End */}
            </div>

            </>
    )
}

export default create;