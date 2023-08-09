import "./App.css";
import "./Components/Components.css";
import "./HomeSections/HomeSection.css";
import "./Pages/Page.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import OurTeam from "./Pages/OurTeam";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/AboutUs" Component={AboutUs}></Route>
        <Route exact path="/Contact" Component={Contact}></Route>
        <Route exact path="/Blog" Component={Blog}></Route>
        <Route exact path="/Services" Component={Services}></Route>
        <Route exact path="/OurTeam" Component={OurTeam}></Route>
        <Route exact path="/Portfolio" Component={Portfolio}></Route>
        <Route exact path="*" Component={Home}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
