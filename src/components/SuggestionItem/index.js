import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, onClickArrow} = props
  const {suggestion} = suggestionsDetails
  const onClick = () => {
    onClickArrow(suggestion)
  }

  return (
    <li className="li-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={onClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
