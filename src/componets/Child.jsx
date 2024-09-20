import PropTypes from "prop-types"

export const Child = (props) => {
  return (
    <div>
        <h1>child</h1>
        <ul>
            <li>{ props.name }</li>
        </ul>

    </div>
  )
}

Child.propTypes = {
    name : PropTypes.string,
}