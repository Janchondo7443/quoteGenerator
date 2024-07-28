import { connect } from "react-redux"
import QuoteList from "./QuoteList"

const QuoteDisplay = (props) => {
  return (
    <div className="quote-display-container">
      <h1 className="quote-list-title">Quotes</h1>
      <QuoteList />
    </div>
  )
}

export default connect(null, null)(QuoteDisplay)
