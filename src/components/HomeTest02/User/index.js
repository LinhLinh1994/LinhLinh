const User = ({Linh,setLinh,Linhs}) => {
    return (
        <div key={Linh.id}>
            <div>{Linh.name}</div>
            <div>{Linh.phone}</div>
            <button onClick={() => {
                const NewUser = Linhs.filter((a)=>{
                    return a.id !== Linh.id
                });
                setLinh (NewUser)
            
            }}>Delete</button>
            </div>
            )
            }
export default User;