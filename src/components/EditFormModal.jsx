import EditForm from "./EditForm"
import { connect } from "react-redux"

const EditFormModal = (props) => {

  return (
    <dialog className="modal" open={props.app.editFormModalOpen}>
      <EditForm
        _id={props._id}
        editAuthor={props.app.editAuthor}
        editText={props.app.editText}
      />
    </dialog>
  )
}
const mapStateToProps = (state) => {
  return {
    app: state
  }
}
export default connect(mapStateToProps, null)(EditFormModal)