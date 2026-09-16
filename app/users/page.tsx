import React from 'react'

interface User{
    id: number,
    name: string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
    const users: User[] = await res.json();
    console.log(users)
  return (
    <>
    <h1 className='text-3xl text-pink-800'>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <ol>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ol>

    </>
  )
}

export default UsersPage;
