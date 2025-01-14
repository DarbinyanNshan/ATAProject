import React from "react";
import "./style.css"
import { NavBar } from "../components/navbar";

import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Activities } from "../pages/activities";
import { Media } from "../pages/media";
import { News } from "../pages/news";



export const Router = () => {


    return (
        <div className="wrapper">
            <NavBar/>
            <div className="content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/media" element={<Media />} />
                <Route path="/news" element={<News />} />
                <Route path="/news" element={<News />} />
            </Routes>
            </div>
            <Footer/>
        </div>
    )
}