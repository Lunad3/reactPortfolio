// import react tools
import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";

// import materialize css and js
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.js";

// import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Pages
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NoMatchPage from "./pages/NoMatchPage";

import "./App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      width:window.innerWidth
    };
    this.updateWidth = this.updateWidth.bind(this);
  };

  componentDidMount(){
    window.addEventListener("resize",this.updateWidth);
  };

  updateWidth(){
    console.log(window.innerWidth);
    this.setState({width:window.innerWidth});
  };

  render() {

    const isMobileVal = (this.state.width <= 992);

    return (
      <div  className="Page">
          <Header/>
          <div className="content">
            <Router>
              <Switch>
                <Route
                  exact path="/"
                  render={()=><AboutMePage
                  />}
                />
                <Route
                  exact path="/projects"
                  render={()=><ProjectsPage
                    isMobile={isMobileVal}
                  />}
                />
                <Route
                  exact path="/contact"
                  render={()=><ContactPage
                  />}
                />
                <Route 
                  render={()=><NoMatchPage/>}
                />
              </Switch>
            </Router>
            <Footer/>
          </div>
      </div>
    );
  };
};

export default App;
