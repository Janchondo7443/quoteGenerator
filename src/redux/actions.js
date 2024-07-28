import * as types from "./types"

export const getQuotes = (randomQuotes) => {
  return {
    type: types.GET_QUOTES,
    payload: randomQuotes
  }
}
export const handleInput = (input) => {
  return {
    type: types.HANDLE_INPUT,
    payload: input
  }
}

export const handleSubmit = (newPost) => {
  return {
    type: types.HANDLE_SUBMIT,
    payload: newPost
  }
}

export const deletePost = (_id) => {
  return {
    type: types.DELETEPOST,
    payload: _id
  }
}

export const prepareToEdit = (_id) => {
  return {
    type: types.PREPARE_TO_EDIT,
    payload: _id
  }
}
export const submitEdit = (editedPost) => {
  return {
    type: types.SUBMIT_EDIT,
    payload: editedPost
  }
}
