/* eslint-disable no-unused-vars */

import { screens } from "../Screens";

import {
  BrowserRouter,Routes,Route
} from "react-router-dom";
import "../index.css";
import Layout from "../LayOut";

import React from 'react'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={
            <Layout>
            <screens.HomePage />
            </Layout>
            
            } />
        <Route path="/about" element={
        <Layout>
        <screens.AboutPage />
        </Layout>
        
        } /> 
        </Routes>

    </BrowserRouter>
  )
 
}

export default Router