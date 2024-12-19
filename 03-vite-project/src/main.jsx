import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './HelloWorldApp';
import { SecondApp } from './CounterApp';   

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Sebastian R"/>
    </React.StrictMode>
    
);