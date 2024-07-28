import { connect } from "react-redux"
import * as actions from "../redux/actions"
const EditForm = (props) => {

  const handleEditSubmit = (e) => {
    e.preventDefault()
    let editedPost = {
      author: props.app.editAuthor,
      _id: props.app.editId,
      text: props.app.editText
    }
    props.submitEdit(editedPost)
  }
  return (

    <form onSubmit={handleEditSubmit} className="quote-form">
      <input className="form-input" type="text" name="editAuthor" value={props.editAuthor || ""} onInput={props.handleInput} required placeholder="enter new title" />
      <input className="form-input" type="text" name="editText" value={props.editText || ""} onInput={props.handleInput} placeholder="enter new quote" />
      <button className="edit-form-submit-btn">change</button>
    </form>
  )
}
const mapStateToProps = (state) => {
  return {
    app: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (e) => dispatch(actions.handleInput(e.target)),
    submitEdit: (editedPost) => dispatch(actions.submitEdit(editedPost))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm)


