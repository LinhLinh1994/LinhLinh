import { useState } from 'react';
import User from './User';

const HomeTest02 = () =>
{
    const [users, setUser] = useState([])
    console.log(users, useState)
   
    return (
        <div>
            <button onClick={() => {
                setUser ([
                    ...users,
                    {id: Math.random(), name: 'Linh', phone: '121212121'},
                ])
            }}>ADD</button>
            {users.map((a)=>{
                return (
                    <User key={a.id} Linh={a} setLinh ={setUser} Linhs={users}></User>
                )
            })}
            
          
        </div>  
    )    
}
export default HomeTest02
