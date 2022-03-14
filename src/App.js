import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Components/Pagination/Pagination';
import Users from './Components/Users/Users';


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  console.log(users.length);

  console.log(totalPages);

  useEffect(()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
      setTotalPages(Math.ceil(users.length / 10))
    })
  },[users.length])

  const handleClick = (page) =>{
      setPage(page)
  }

  return (
    <div>
        <h1>Pagination</h1>
        <p>Page Num: {page}</p>
        {
          loading ? <h2>loading . . .</h2> : 
          <Users users={users}  page={page}/>
        }
        <Pagination totalPages={totalPages}  handleClick={handleClick} />

    </div>
  );
}

export default App;
