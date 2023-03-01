import Header from "./Header";
import Footer from "./Footer";
const Layout = ({children, title})=>{
    return(
        <>
            <Header title={title} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;