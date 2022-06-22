import { useState } from 'react'
import classnames from 'classnames'
import styles from './ExpandElement.module.scss'

const ExpandElement = ({isExpanded, onClick}) => {

  return (
    <span
      onClick={onClick}
      className={classnames(styles.arrowElement, {
        [styles.basicViewExpand]: !isExpanded,
        [styles.expandView]: isExpanded,
      })}
    ></span>
  )
}

export default ExpandElement
