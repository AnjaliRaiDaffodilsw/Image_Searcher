import React, { Component } from 'react'
import Index from './components/main/Index'
import { Provider } from './context';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider>
          <div className="App">
            <Index />
          </div>
        </Provider>
      </MuiThemeProvider>

    )
  }
}

export default App
