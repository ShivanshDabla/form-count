import React, { useState } from 'react'

const App = () => {
  const [users, setusers] = useState([])

  const [user, setuser] = useState('')

  const handler=()=>{
    setusers([...users,user])
  }

  const total=users.length;
  const last=users[users.length-1];
  const unique=[...new Set(users)].length;

  return (
    <div>
      <h1>User information</h1>
      <input onChange={(e)=>setuser(e.target.value)} type='text' placeholder='enter your name'></input>
      <button onClick={handler}>submit</button>
      <br></br>
      <br></br>
      <h2>total user: {total}</h2>
      <h2>last user: {last}</h2>
      <h2>unique user: {unique}</h2>

      {
        users.map((item,idx)=>(
          <div key={idx}>
            <h3>{item}</h3>
          </div>
        ))
      }

    </div>
    
  )
}
export default App