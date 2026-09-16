import React from 'react'

interface User{
    id: number,
    name: string,
    email: string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
    const users: User[] = await res.json();
    console.log(users)
  return (
    <>
    <h1 className='text-3xl text-pink-800'>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    
    <table>
        <thead>
            <tr>
                <th>Names</th>
                <th>Emails</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                </tr>)}
            
        </tbody>
        
    </table>

    </>
  )
}

export default UsersPage;
