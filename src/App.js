import './App.css';
import React, {Component, Suspense} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Carpet from './components/Services/Carpet/Carpet';
import MarineUpholstery from './components/Services/MarineUpholstery/MarineUpholstery';
import Contact from './components/Contact/Contact';
import FooterContainer from './components/Footer/FooterContainer';
import AboutUs from './components/AboutUs/AboutUs';
import ImageSliderContainer from './components/ImageSlider/ImageSliderContainer';
import Greetings from "./components/Greetings/Greetings";
import Clock from "./components/Greetings/Clock";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux.store";
import {BrowserRouter} from "react-router-dom";

const UsersContainer = React.lazy(()=> import("./components/Users/UserContainer"));

class App extends Component {
    catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
        alert("Some error occured");
        console.error(promiseRejectionEvent);
    }
  componentDidMount() {
    //this.props.props.initializeApp();
      window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader/>
    // }

    return (
        <div className='gridApp' id="home">
          <HeaderContainer/>
          <div className='services' id='services'>
            <ImageSliderContainer/>
          </div>
          <AboutUs/>
          <Contact/>
          <FooterContainer/>
          <Login/>
            <Suspense fallback={<div><Preloader/></div>}>
          <UsersContainer/>
            </Suspense>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    //initialized: state.app.initialized
})

//export default App;

//compose(
    //withRouter,
    //connect(mapStateToProps, {initializeApp}))(App);

//<Routes>
//<Route path='/marineupholstery' render={() => <MarineUpholstery/>} />
//<Route path='/carpet' element={<Carpet/>} />
//</Routes>

//<MarineUpholstery data={props.state.homeServicesPage}/>    
//<ImageSlider data={props.state.homeServicesPage} dispatch={props.dispatch} />

let AppContainer = App;

// const SamuraiJSApp = (props) => {
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>
// }

export default App;