import { connect } from "react-redux"
import * as actions from "../redux/actions"
import EditFormModal from "./EditFormModal"

const QuoteList = (props) => {

  return (
    <ul className="quote-list">
      {
        !props.app.posts.length ?
          <li>please add quote</li>
          :
          props.app.posts.map(post => {
            let _id = post._id
            return props.app.isEdit
              && props.app.editId === _id
              ?
              <li key={_id} className="modal-li">
                <EditFormModal
                  _id={post._id}
                />
              </li>
              :
              <li className="quote-list-li" key={_id}>
                <h4 className="author">{post.author}</h4>
                <p className="text">{post.text}</p>
                <div className="li-btn-div">
                  <button
                    onClick={(_id) => props.prepareToEdit(post._id)}
                    className="edit-btn">EDIT</button>
                  <button className="delete-btn" onClick={(_id) => props.deletePost(post._id)} >DELETE</button>
                </div>
              </li>
          })

      }
    </ul>
  )
}
const mapStateToProps = (state) => {
  return {
    app: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (_id) => dispatch(actions.deletePost(_id)),
    prepareToEdit: (_id) => dispatch(actions.prepareToEdit(_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteList)