import React, {Component} from 'react';

import './App3.css';
import Header from './components/headerComponent/header2';
import Footer from './components/footerComponent/footer3';
import NameForm1 from './components/headerComponent/nameForm'

{/*Component of app*/}
class App extends Component {
  render() {
    return(

      <div className="App">
        {/*component for header*/}
        <Header />
        {/*component for form*/}
        <NameForm1 />
        {/*component for footer*/}
        <Footer />
      </div>



    );
  }
}

export default App;
