import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './utils/theme';
import { MuiThemeProvider } from '@material-ui/core';

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <p>
              hi
            </p>
            
          </header>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
