import { useState } from "react";

const HomeTest03 = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const onChange = (e) => {
        setName(e.target.value)
    }
    const onCreate = () => {
        setList([
            ...list,
            name
        ])
        setName('')
    }

    return (
        <div>
            <input value={name} onChange={onChange}></input>
            <button onClick={onCreate}>Create</button>

            {list.map((b) =>{
                return (
                    <div key={b}>{b}</div>
                )
            })}
            

        </div>
        
    
        
        )

}
//Nhập dữ liệu từ 1 input
//Sau khi click add thì lấy giá trị vừa nhập nhập vào mảng
//Đồng thời xóa giá trị ở khung input
//Xuất giá trị vừa nhập lên màn hình

//Nếu name rỗng hoặc đã từng xuất hiện, thì không thêm vào list nữa

export default HomeTest03