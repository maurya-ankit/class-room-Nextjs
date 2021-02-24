import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
    return <>
        <Header profileObj={props.profileObj} />
        <>{props.children}</>
        <Footer />
    </>

};

export default Layout
