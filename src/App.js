import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Routes from './config/routes'

function App() {
  return (
    <BrowserRouter>
      <Route render={props =>(
        <>
          <Header {...props}/>
          <Routes/>
          <Footer/>
        </>
      )}/>
    </BrowserRouter>
  )
}

export default App;
