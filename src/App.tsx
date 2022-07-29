import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/home/Home';
import PictureDetails from './pages/picture-details/PictureDetails';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:id" element={<PictureDetails />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;