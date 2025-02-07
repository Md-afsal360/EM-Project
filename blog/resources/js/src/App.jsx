import { Component } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Create from "./Pages/Create";
class App extends Component{
    render(){
        return <HashRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<h1>edit</h1>} />
                
            </Routes>
                </HashRouter>
    }
}

const root = createRoot(document.getElementById("app")); //render the app component into the app div
root.render(<App />);
