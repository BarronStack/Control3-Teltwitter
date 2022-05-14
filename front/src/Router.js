import React,{Component} from "react";
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import New_Twitt from "./components/New_Twitt";

class Router extends Component{
  render(){
    return(
      
      <BrowserRouter>
        {/*Configuracion de rutas */}
        <Routes>
          <Route path="/" element = {<Dashboard />} />
          <Route path="/new_Twitt" element = {<New_Twitt />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router