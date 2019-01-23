import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BetterLife from './Learning';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BetterLife />, document.getElementById('root'));

serviceWorker.unregister();
