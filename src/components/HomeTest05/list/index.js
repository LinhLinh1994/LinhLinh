const List = ({ list, onDelete, onEdit }) => {


    return (
        <div className="row">
            {list.map((item) => {
                return (
                    <div className="col-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <div key={item.id} >
                                    <h5 className="card-title">Card title</h5>
                                    <div>Name : {item.name}</div>
                                    <div>Phone : {item.phone}</div>
                                    <a href="#" className="card-link" class="btn btn-primary"><button onClick={() => { onDelete(item.id) }}> Delete </button></a>
                                    <a href="#" className="card-link"><button onClick={() => {onEdit(item) }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Createbutton"> Edit </button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>

    );
}
export default List;