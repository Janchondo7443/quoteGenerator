import { connect } from "react-redux"
import * as actions from "../redux/actions"
import { v4 as uuid } from "uuid"
import "../App.css"

const Form = (props) => {

  const genHandleSubmit = (e) => {
    e.preventDefault()
    let newPost = {
      _id: uuid(),
      author: props.app.author,
      text: props.app.text
    }
    props.handleSubmit(newPost)
  }
  return (

    <form onSubmit={(e) => genHandleSubmit(e)} className="quote-form">
      <input className="form-input" type="text" name="author" value={props.app.author || ""} onInput={props.handleInput} required placeholder="enter new author" />
      <textarea className="form-input" type="text" name="text" value={props.app.text || ""} onInput={props.handleInput} placeholder="enter new quote" />
      <button className="add-form-btn">{props.app.btnTxt}</button>
    </form>

  )
}
const mapStateToProps = (state) => {
  return {
    app: state,
    title: state.title
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (e) => dispatch(actions.handleInput(e.target)),
    handleSubmit: (e) => dispatch(actions.handleSubmit(e))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)