import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
const themeConfig = {
  token: {
    fontFamily: " 'Inter', sans-serif",
  },
};
const px2rem = px2remTransformer({
  rootValue: 16, 
});
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
        <StyleProvider transformers={[px2rem]}>
        <ConfigProvider theme={themeConfig}>
      <App />
    </ConfigProvider>
        </StyleProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
