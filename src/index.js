import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Missing import - this will cause a build error
// import App from './App';

// Syntax error - missing closing parenthesis
const Header = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a test project with build issues</p>
    </div>
  ;
};

// Using undefined variable
const MainContent = () => {
  return (
    <div>
      <Header />
      <p>Current user: {userName}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

// Missing function definition for handleClick
// const handleClick = () => {
//   console.log('Button clicked');
// };

// Trying to render undefined component
ReactDOM.render(
  <React.StrictMode>
    <App />
    <MainContent />
  </React.StrictMode>,
  document.getElementById('root')
);