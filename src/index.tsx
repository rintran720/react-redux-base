import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './App';
import i18n from './i18n';
import reportWebVitals from './reportWebVitals';
import store from './store';
require('dotenv').config();

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
