import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Global from './theme/global';


function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
