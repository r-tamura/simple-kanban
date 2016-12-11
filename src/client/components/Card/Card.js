import React, { PropTypes } from 'react'
import styles from './Card.scss'

const Card = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={completed ? styles.completed : styles.notCompleted}
  >
    {text}
  </li>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card
