import PropTypes from 'prop-types'
import styles from './SpeakerCard.module.css'

function SpeakerCard({ name, role, talk, time, room, initials, accent = 'violet' }) {
  return (
    <article className={styles.card}>
      <div className={`${styles.avatar} ${styles[accent]}`} aria-hidden="true">{initials}</div>
      <div className={styles.body}>
        <p className={styles.role}>{role}</p>
        <h3>{name}</h3>
        <p className={styles.talk}>«{talk}»</p>
        <div className={styles.meta}><span>{time}</span><span>{room}</span></div>
      </div>
    </article>
  )
}

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  talk: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
  accent: PropTypes.oneOf(['coral', 'blue', 'violet']),
}

export default SpeakerCard
