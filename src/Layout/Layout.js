import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"
import Footer from "../components/Footer/Footer"
import style from "./Layout.module.css"
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <SideBar />
                {children}
            </div>
        </>
    )
}

export default Layout;