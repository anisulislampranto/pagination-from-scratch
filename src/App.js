import { useEffect, useState } from 'react';
import './App.css';
import Users from './Components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  },[])

  return (
    <div>
        <h1>Pagination</h1>
        {
          loading ? <h2>loading . . .</h2> : 
          <Users users={users} />
        }

    </div>
  );
}

export default App;
