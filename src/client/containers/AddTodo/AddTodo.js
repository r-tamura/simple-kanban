import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { TodoActions } from 'modules/todos'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

let AddTodo = ({
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
          Add Todo
        </RaisedButton>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

AddTodo = connect(
  () => ({}),
  (dispatch, owonProps) => ({
    onSubmit(todoTitle) {
      dispatch(TodoActions.addTodo(todoTitle))
    },
  })
)(AddTodo)

export default AddTodo
