import userEvent from "@testing-library/user-event";
import { useEffect, useMemo, useState } from "react";
import Form from "./Form";
import List from "./list";
import { getUsers, creatUser, editUser, deletetUser } from "../../apis/users";

const HomeTest04 = () => {
    const DEFAULT_FORM_DATA = { name: '', phone: '' }
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
    const [list, setList] = useState([])
    const [resultList, setResultList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        Api()
    }, [])

    const Api = ()=> {
        getUsers()
        .then( respone => {
            setList(respone.data)
        })
        .catch((error) => {
            console.log(error)
        })

    }


    useEffect(() => {
        if (search) {
            const newResultList = list.filter((item) => {
                return item.name.includes(search) || item.phone.includes(search)
            })
            setResultList(newResultList)
        }
        else {
            setResultList(list)
        }
    }, [search, list])

    const onSearch = (e) => {
        const value = e.target.value
        setSearch(value)
    }


    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const Test = (formData, list) => {
        // Kiểm tra mảng rỗng 
        if (formData.name === '' || formData.phone === '') {
            console.log(1);
            return false
        }
        // Kiểm tra giá trị trùng
        const DoubleTest = list.find((item) => {
            console.log(2);
            return item.name === formData.name || item.phone === formData.phone
        })
        console.log(3);
        return DoubleTest ? false : true 
    }
    // nếu giá trị cuả name !== '' && phone !== '' thì onCreat khởi tạo, else thì k thể khởi tạo


    const onCreate = () => {

        if (!formData.id) {
            // const testSieuCAP = Test(formData, list)
            // if(testSieuCAP){
                creatUser(formData).then((res) => {
                    Api()
                    setFormData(DEFAULT_FORM_DATA)
                })
                .catch((error) => {console.log(error)})
                          // }
        }
        // setFormData(DEFAULT_FORM_DATA)

        if (formData.id) {
            editUser(formData.id, formData).then((res) => {
                setFormData(DEFAULT_FORM_DATA)
            })
            .catch((error) => {console.log(error)})
            
        }

    }

    const onDelete = (id) => {
        deletetUser(id).then((res) => {
            Api()
        })
        .catch((error) => {console.log(error)})
        }
    const onEdit = (data) => {
        setFormData(data)
    }
    return (
        <div>
            <input className="form-control" value={search} placeholder='Type to search' onChange={onSearch} />
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Createbutton" >Create</button>
            <Form data={formData} onChange={onChange} onCreate={onCreate} test={Test} list={list} />
            <div className="container">
            <List list={resultList} onDelete={onDelete} onEdit={onEdit} />\
            </div>
        </div>
    )
}


export default HomeTest04;