import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { TodoActions } from 'modules/todos'

let AddTodo = ({
  onSubmit,
}) => {
  let input

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onSubmit(input.value)
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
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
