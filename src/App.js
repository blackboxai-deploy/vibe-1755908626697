import React, { useState, useEffect } from 'react';
import './App.css';

// Missing import - this will cause a build error
import { MissingComponent } from './components/MissingComponent';

// Syntax error - missing closing brace
const BrokenComponent = () => {
  return (
    <div>
      <h2>This component has issues</h2>
      <p>Missing closing brace below
    </div>
  );
;

// Undefined variable usage
const ProblematicComponent = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Using undefined variable
    console.log(undefinedVariable);
    setData(someUndefinedFunction());
  }, []);

  return (
    <div>
      <h3>Data: {data.value}</h3>
    </div>
  );
};

// Wrong prop types
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h4>{user.name.toUpperCase()}</h4>
      <p>Age: {user.age + 5}</p>
      <p>Email: {user.email.toLowerCase()}</p>
    </div>
  );
};

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call with wrong data structure
    setTimeout(() => {
      setUsers([
        { id: 1, name: null, age: "25", email: undefined },
        { id: 2, name: "Jane", age: null, email: 123 },
        { id: 3 } // Missing required fields
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Missing return statement in map
  const renderUsers = () => {
    return users.map(user => {
      <UserCard key={user.id} user={user} />
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Broken App for Testing</h1>
        <MissingComponent />
        <BrokenComponent />
        <ProblematicComponent />
        
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div>
            <h2>Users:</h2>
            {renderUsers()}
          </div>
        )}
        
        {/* Accessing undefined method */}
        <button onClick={() => nonExistentFunction()}>
          Click me to break things
        </button>
      </header>
    </div>
  );
}

export default App;