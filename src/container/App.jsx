import React, { Component } from 'react';
import AddContainer from './AddContainer';
import ContentListContainer from './ContentListContainer';
import FooterContainer from './FooterContainer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <AddContainer />
        <ContentListContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
