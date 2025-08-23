import React from 'react';
import BrokenComponent from '../components/BrokenComponent';
import MissingImport from '../components/MissingImport';
// Importing non-existent component
import NonExistentComponent from '../components/DoesNotExist';

export default function Home() {
  // Using undefined variable
  const data = undefinedVariable;
  
  return (
    <div>
      <h1>Test Project with Build Issues</h1>
      <BrokenComponent title="Test" count={5} />
      <MissingImport data={data} />
      <NonExistentComponent />
      {/* Intentional JSX syntax error */}
      <div unclosed
        <p>This will cause a parse error</p>
      </div>
    </div>
  );
}