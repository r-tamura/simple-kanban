import React from 'react'
import { utils } from 'common'
import styles from './Timer.scss'

const Timer = ({
  date
}) => (
  <div className={styles.default}>
    現在時刻は{` ${utils.formatDate(date)} `}です
  </div>
)

export default Timer;