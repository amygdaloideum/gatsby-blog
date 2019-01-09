import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import CandleIcon from './candle-icon'

export default () => (
  <nav className={styles.navigation} role="navigation">
    <h1>
      <Link style={{ textDecoration: 'none' }} to="/">
        <CandleIcon className={styles.hIcon} />
        <span>Autofagist</span>
      </Link>
    </h1>
  </nav>
)
