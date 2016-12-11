import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export const AddCard = ({
  onSubmit,
}) => {
  let textField

  return (
    <div>
      <form
        onSubmit={(e) => {
          const input = textField.getInputNode()
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onSubmit(input.value)
          input.value = ''
        }}
      >
        <TextField
          name="add-todo"
          ref={ref => (textField = ref)}
        />
        <RaisedButton type="submit">
          Add Card
        </RaisedButton>
      </form>
    </div>
  )
}

AddCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

// AddCard = connect(
//   null,
//   (dispatch, owonProps) => ({
//     onSubmit(title) {
//       dispatch(CardActions.addCard(title))
//     },
//   })
// )(AddCard)

export default AddCard
