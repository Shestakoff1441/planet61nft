
import classnames from 'classnames'
import styles from './ButtonComponent.module.scss'

const Button = ({ text, onClick, classes }) => {
  return (
    <button
      onClick={onClick}
      className={classnames([styles.customBtn, classes ? classes : []])}
    >
      {text}
    </button>
  )
}

export default Button
