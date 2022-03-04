import React from 'react'
import styles from '../../../styles/Users.module.css'

export default function Users() {
  return (
    <>
        <div className={styles.users}>
            <div className={styles.user}>
                <div className={styles.imgUser}>
                    <img src="https://github.com/vitorpantaleao.png" alt="usuario Github" />
                </div>  
            </div>
        </div>
    </>
  )
}
