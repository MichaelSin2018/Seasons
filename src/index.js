import React, { useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation'

const App = () => {
  // const [lat, setLat] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => setLat(position.coords.latitude ),
  //     err => setErrorMessage(err.message )
  //   );    
  // }, []);

  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Pleae accept location request"/>; 
  }

  return <div className="border red">{content}</div>
};


ReactDom.render(
  <App />, document.querySelector('#root')
);

// class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { lat: null, errorMessage: '' };
// //   }
  
//   state = { lat:null, errorMessage: ''};
  
//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//         position => this.setState({ lat: position.coords.latitude }),
//         err => this.setState({ errorMessage: err.message })
//     )  
//   }
  
//   componentDidUpdate() {
//     console.log('My component was just updated - it rerendered!');
//   }

//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//         return <div>Error: {this.state.errorMessage}</div>
//     };

//     if (!this.state.errorMessage && this.state.lat) {
//         return <SeasonDisplay lat={this.state.lat} />
//     };

//     return <Spinner message="Pleae accept location request"/>;
//   }
    
//   //React says we have to define render!!
//   render() {
//     return (
//         <div className="border red">
//           {this.renderContent()}
//         </div>
//     )
//   }
// }; 
