import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './Components/Home'
import Restaurent from './Components/Restaurent' 
import RestaurentMenu from './Components/RestaurentMenu'
import SearchFood from './Components/SearchFood'
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux"
import Checkout from "./Components/Checkout";
//Header Section :- Let's build it 
function App()
{
    return(
        <>
       <Provider store={store}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurent" element={<Restaurent></Restaurent>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurentMenu></RestaurentMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
       </Routes>
       </BrowserRouter>
       </Provider>
       </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)





//Proxt Server link:- https://cors-anywhere.herokuapp.com/