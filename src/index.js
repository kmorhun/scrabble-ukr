import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';

const locale = navigator.language;
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <IntlProvider locale={locale}>
        <App />
    </IntlProvider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
