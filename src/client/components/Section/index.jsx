import styles from './Section.module.scss'

const getHeader = (content, size) => {
  return [
    <h1>{content}</h1>,
    <h2>{content}</h2>,
    <h3>{content}</h3>,
    <h4>{content}</h4>,
    <h5>{content}</h5>,
    <h6>{content}</h6>,
  ][size]
}

const Section = (props) => {
  const { background: { src } = '', title = '', titleSize = 2, bgc } = props

  const text = getHeader(title, titleSize)

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${src})`,
        backgroundColor: bgc ? bgc : '#1A213A',
      }}
    >
      <div className={styles.sectionContainer}>
        {title ? text : null}
        {props.children}
      </div>
    </section>
  )
}
export default Section
