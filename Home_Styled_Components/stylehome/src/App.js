import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Global from './theme/global';


function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
