import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Componants/Home";
import Series from "../Componants/Series";
import Movies from "../Componants/Movies";

const RoutesComponent = () => {


    return (
        <Routes>



            <Route path="/" element={<Home />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />


        </Routes>
    );
};


export default RoutesComponent;
