import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/nav.css';
import './styles/home.css';
import './styles/footer.css';
import './styles/details.css'
import './styles/cart.css';
import './styles/login.css'
import './styles/index.css';
import App from './App';
import { Content } from './Hooks/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Content>
       <App />
    </Content>
  </>
);

