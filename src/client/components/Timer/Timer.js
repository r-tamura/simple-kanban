import React, { PropTypes } from 'react'
import { utils } from 'common'
import styles from './Timer.css'

const Timer = ({
  date,
}) => (
  <div className={styles.default}>
    現在時刻は{` ${utils.formatDate(date)} `}です
  </div>
)

Timer.propTypes = {
  date: PropTypes.object.isRequired,
}

export default Timer
