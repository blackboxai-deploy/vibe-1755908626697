// Missing React import - will cause build error

const MissingImport = ({ data }) => {
  // Using undefined variable
  const processedData = undefinedFunction(data);
  
  return (
    <div>
      <h3>Data Processing</h3>
      {processedData.map(item => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MissingImport;