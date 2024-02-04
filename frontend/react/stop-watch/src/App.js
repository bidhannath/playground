import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [data, setData] = useState(null);
  useEffect(() => {
    // let res = await fetch('https://jsonplaceholder.typicode.com/users');
    // let jsonData = await res.json();
    // let sortedData = jsonData.sort((a, b) => a.name - b.name);
    // console.log(sortedData);
    // setData(sortedData);
    console.log('in use effect')
  }, []);

  return (
    <div className="App">
      <div>User List</div>
    </div>
  );
}

export default App;
