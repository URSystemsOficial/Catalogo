import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';



const WithRouter =()=>(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
