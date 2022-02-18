import React from "react";
import Image from "next/image";
import styles from '../../../styles/Home.module.css'
import linkedin from '../../assets/icons/linkedin.png'
import facebook from '../../assets/icons/facebook.png'
import discord from '../../assets/icons/discord.png'

export default function Menu() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.icons}>
                <Image className="icon" src={linkedin} alt="Discord" width={25} height={25} />
                <Image className="icon" src={facebook} alt="Discord" width={25} height={25} />
                <Image className="icon" src={discord} alt="Discord" width={25} height={25} />
            </div>
            <div className={styles.logo}>
                <a href="/">
                    <Image src="/logo.png" alt="Vercel Logo" width={39} height={42} />
                    <h2 className={styles.logoName}>Ballerini Devs</h2>
                </a>
            </div>
            <div className="search"></div>
        </nav>
    )
}styles