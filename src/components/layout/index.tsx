//src/container/layout/index.tsx
import { Header } from "../header";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer";



export function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

