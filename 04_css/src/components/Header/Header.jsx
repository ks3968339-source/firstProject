import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.head}>
      <h2>This is the Header</h2>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
