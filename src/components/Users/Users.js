import React from 'react'
import styles from '../../../styles/Users.module.css'
import Image from "next/image"
import GitHub from '../../assets/icons/github.png'
import Linkedin from '../../assets/icons/linkedin-user.png'

export default function Users() {
  return (
    <>
        <div className={styles.users}>
            <div className={styles.user}>
                <div className={styles.userContent}>
                    <div className={styles.imgUser}>
                        <img src="https://github.com/vitorpantaleao.png" alt="usuario Github" />
                    </div>
                    <hr className={styles.divisor} />
                    <div className={styles.userInfo}>
                        <h2>Vitor Pantaleão</h2>
                        <p>Desenvolvedor Front-end</p>
                    </div>
                    <div className={styles.userLinks}>
                        <div className={styles.userSocial}>
                            <a href="#">
                                <Image className="icon" src={GitHub} alt="Discord" width={35} height={35} />    
                            </a>
                            <a href="#">
                                <Image className="icon" src={Linkedin} alt="Discord" width={30} height={30} />    
                            </a>
                        </div>
                        <a className={styles.userMore} href="#">Ver Mais</a>
                    </div>
                </div>
                <div className={styles.btnActionUser}>
                    <a className={styles.edit} href="#">Editar</a>
                    <a className={styles.delete} href="#">Deletar</a>
                </div>
            </div>
        </div>
    </>
  )
}
