import Header from "../components/Header/Header"
import SideBar from "../components/SideBar/SideBar"
import ShowMenu from "../components/ShowMenu/ShowMenu"
import style from "./Layout.module.css"
import { useState } from "react"
const Layout = ({ children }) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <Header />
            <ShowMenu setShow={setShow} show={show}/>
            <div className={!show ? style.wrapper : style.wrapperHid}>
                <SideBar show={show} setShow={setShow} />
                {children}
            </div>
        </>
    )
}

export default Layout;