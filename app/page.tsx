'use client'
import styles from './page.module.css'
import { useState } from 'react'
import List from './List'

export default function Home() {

  return (
    <div className={styles.context}>
      <List/>
    </div>
  )
}
