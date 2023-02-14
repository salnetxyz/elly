import Nav from "./components/Nav";
const create = ()=>{
    return(
        <>
            <Nav />
            <div
            className="container max-w-lg z-20 px-4 sm:pt-20 pt-12 mx-auto text-left max-w-none text-center"
            >

            <h1
            className="text-4xl py-12 px-3 font-medium leading-10 tracking-tight text-left text-neutral-900 text-center sm:leading-none md:text-6xl lg:text-7xl"
            >
            <span className="inline">Build Your Website</span>
            </h1>

            <span className="px-28 text-center">
                    <li>Premium Templates</li>
                    <li>Free SSl Certificate</li>
                    <li>Free Hosting, Deployed on Aws and gcp</li>

            </span>

            </div>


            </>
    )
}

export default create;