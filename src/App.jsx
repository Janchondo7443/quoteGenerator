import React from "react"
import { connect } from "react-redux"
import Form from "./components/Form"
import QuoteDisplay from "./components/QuoteDisplay"
import * as actions from "./redux/actions"
import { v4 as uuid } from "uuid"

const App = (props) => {

  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
     let quotes = data.map(quote=>{
      let regex = /, type.fit/gi
      let newAuthor =quote.author.split(regex)[0]
      quote.author = newAuthor
      quote._id = uuid()
      return quote
      })
      //if less initial quotes wanted //
      // let random1 = Math.floor(Math.random() * 8)
      // let quotes = data.slice(random1, random1 + 4).map(quote => {
      //   quote._id = uuid()
      //   return quote
      // })
      props.getQuotes(quotes)
    });


  return (
    <div className="main-container">
      <h1>Quote Machine</h1>
      <Form />
      <QuoteDisplay />
    </div>
  )

}
const mapDispatchToProps = (dispatch) => {
  return {
    getQuotes: (data) => dispatch(actions.getQuotes(data))
  }
}

export default connect(null, mapDispatchToProps)(App)