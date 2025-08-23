import React from 'react';

interface Props {
  title: string;
  count?: number;
}

// Intentional TypeScript error - using wrong prop type
const BrokenComponent: React.FC<Props> = ({ title, count = 0 }) => {
  // Intentional error - useState not imported
  const [value, setValue] = useState(count);
  
  // Intentional syntax error - missing semicolon and wrong JSX
  const handleClick = () => {
    setValue(value + 1)
    console.log('Clicked')
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      // Intentional JSX error - wrong comment syntax
      <span>{value}</span>
    </div>
  );
};

export default BrokenComponent;