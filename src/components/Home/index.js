import { useState } from "react";
// const [a, setA] = useState('') string
// const [a, setA] = useState(0) number
// const [a, setA] = useState(fale) bloolean
// const [a, setA] = useState(()) object
// const [a, setA] = useState([]) array

// arr.filter() lọc dữ liệu, trả về array tương ứng
// arr.find() tìm kiếm dữ liệu tương ứng , trả về object tương ứng (đầu tiên và ngừng xét)
// arr.map.()    duyệt tất cả phần tử trong mảng sau đó thay đổi gia tri theo nội dung bên trong

// arr.forEach = for // elements.forEach((item) => {
    //console.log(item) })

// })

//useEffect quan sát tất cả các biến trong [] mảng danh sách và trả về kết quả
//kiểm tra phía trong frontend, kiểm tra dùng format
//kiểm tra

// user = { name : '1', phone : '2', email : '3'}
// const {name, phone, email} = user


// Function : function A() {}, function A = () => {}
// Lấy thẻ dom : document.querySelector || document.querySelectorAll
// Thêm sự kiện : {element}.addEventListener('click', () => {})
// Xóa sự kiện : {element}.removeEventListener('click', () => {})
// Thêm thuộc tính : {element}.setAttribute('disable', 'true', 'target', 'value')
// Xoa thuộc tính : {element}.removeAttribute('disable', 'true')

//classList 
// {element}.classList.add('user')
// {element}.classList.remove('user')
// {element}.classList.has('user')

// ten + ho == fullName
// const ten = "Linh"
// cons ho = "Le"
// const fullName = `${ho}${ten}` || `toi ten ${ho}${ten}`

// const user = {name : 'Linh', phone '123', email :'abc'}
// const {...rest} =  user || const {name, ...rest}




const Home = () => {
    const [infor, setInfor] = useState ('')
    const [lists, setLists] = useState ([])
    const onChanges = (e)=> {
        setInfor(e.target.value)
    }
    const onCreates = () => {
        if(infor != ''){
            const uniqueLists = lists.filter((item) => {
                return item === infor
            })
            
            if(uniqueLists.length === 0){
                setLists([
                    ...lists,
                    infor
                ])
            }
        }
       
        setInfor('')
    }
    const onDelete = (str) => {
        const newList = lists.filter((a)=>{
            return a !== str
        });
        setLists (newList)
    }
     
    return (
        <div>
            <input value={infor} onChange={onChanges}></input>
            <button onClick={onCreates}>Create</button>
            
            {lists.map((c) =>{
                    return (
                        <div key={c}>{c}
                        <button onClick= {() => {onDelete(c)}}>Delete</button>
                        </div>
                    )
                    
                })
            }
        </div>
    )

} 

export default Home