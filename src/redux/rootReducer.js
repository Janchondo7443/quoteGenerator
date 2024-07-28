import * as types from "./types"

let initialState = {
  author: "",
  text: "",
  posts: [],
  isEdit: false,
  editAuthor: "",
  editText: "",
  editId: "",
  btnTxt: "ADD",
  editFormModalOpen: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT:
      let { name, value } = action.payload
      return {
        ...state,
        [name]: value
      }
    case types.HANDLE_SUBMIT:
      let newPost = action.payload
      return {
        ...state,
        author: "",
        text: "",
        posts: [newPost, ...state.posts]
      }
    case types.DELETEPOST:
      let _id = action.payload
      let newPostList = state.posts.filter(post => post._id !== _id)
      return {
        ...state,
        posts: newPostList
      }
    case types.GET_QUOTES:

      return {
        ...state,
        posts: action.payload
      }
    case types.PREPARE_TO_EDIT:

      return {
        ...state,
        isEdit: true,
        editId: action.payload,
        editFormModalOpen: true
      }
    case types.SUBMIT_EDIT:
      let editedPost = action.payload
      let newList = state.posts.map(post => {
        if (post._id === editedPost._id) {
          return editedPost
        } else {
          return post
        }
      })
      return {
        ...state,
        author: "",
        text: "",
        posts: newList,
        isEdit: false,
        editAuthor: "",
        editText: "",
        editId: "",
        btnTxt: "ADD",
        editFormModalOpen: false
      }
    default:
      return state
  }
}
export default rootReducer