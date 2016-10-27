import React, { PropTypes } from 'react'
import styles from './Todo.scss'

const Todo = ({ onClick, completed, text }) => {
  return (<li
    onClick={onClick}
    className= {completed ? styles.completed : styles.notCompleted }
  >
    {text}
  </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
