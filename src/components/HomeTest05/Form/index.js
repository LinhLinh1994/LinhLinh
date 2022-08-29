
const Form = ({ data, onChange, onCreate, test, list }) => {
  return (

    <div class="modal" tabindex="-1" id="Createbutton">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Input Info</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class='mb-3'>
              <label class="form-label">Input Name</label>
              <input class="form-control" name='name' value={data.name} onChange={onChange} />
            </div>
            <div>
              <label class="form-label">Input Phone</label>
              <input class="form-control" name='phone' value={data.phone} onChange={onChange} />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={onCreate} >Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;