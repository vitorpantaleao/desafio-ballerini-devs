import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/Auth';
import Image from "next/image";
import styles from '../../../styles/Home.module.css'
import linkedin from '../../assets/icons/linkedin.png'
import facebook from '../../assets/icons/facebook.png'
import discord from '../../assets/icons/discord.png'

import Modal from '../Modal/Modal';

export default function Menu() {
    const [isModalVisible, setIsModalVisible]   = useState(false)
    const {isLogged, setIsLogged} = React.useContext(AuthContext)
    console.log('menu', isLogged)
    return(
        <nav className={styles.navbar}>
            <div className={styles.icons}>
                <a href="#">
                    <Image className="icon" src={linkedin} alt="Discord" width={28} height={28} />
                </a>
                <a href="#">
                    <Image className="icon" src={facebook} alt="Discord" width={28} height={28} />
                </a>
                <a href="#">
                    <Image className="icon" src={discord} alt="Discord" width={28} height={28} />
                </a>
            </div>
            <div className={styles.logo}>
                <a href="/">
                    <Image src="/logo.png" alt="Vercel Logo" width={39} height={42} />
                    <h2 className={styles.logoName}>Ballerini Devs</h2>
                </a>
            </div>
            <div className={styles.searchDevs}>
                { isLogged ? 
                    <>
                        <form>
                            <input className={styles.search} type="text" placeholder="Buscar" />
                        </form>
                        <button 
                            className={styles.addDev}
                            onClick={() => setIsModalVisible(true) }
                        >
                            Adicionar Desenvolvedor
                        </button>
                    </>
                : null }
                
                { isModalVisible ? <Modal onClose={ () => setIsModalVisible(false) } /> : null }
            </div>
        </nav>
    )
}styles