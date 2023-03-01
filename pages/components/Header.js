import Head from "next/head"
import Nav from "./Nav"
const Header = ({title}) =>{
    return(
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Sal Net" />
            <meta property="og:type" content="website" />
            <meta propert="og:image" content="https://addify.us/addifylogo1.png" />
            <meta property="og:url" content="https://addify.us" />
            <meta property="og:description" content="Create Your Online Vcard.." />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Addify" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@getaddify" />
            <meta name="twitter:creator" content="@getaddify" />
            <meta property="og:url" content="https://addify.us/" />
            <meta property="og:title" content="Addify" />
            <meta property="og:description" content="Create Your Online Vcard.." />
            <meta property="og:image" content="https://addify.us/addifylogo1.png" />
            <title>{title}</title>
        </Head>
        <Nav />
        </>
    )
}

export default Header