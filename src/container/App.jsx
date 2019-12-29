import React, { PureComponent } from 'react';
import AddContainer from './AddContainer';
import ContentListContainer from './ContentListContainer';
import FooterContainer from './FooterContainer';

class App extends PureComponent {
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
