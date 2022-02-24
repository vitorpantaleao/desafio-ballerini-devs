import React from "react";
import styles from '../../../styles/Modal.module.css'

const Modal = ({ onClose = () => {} }) => {

    return <>
        <div className={styles.modal} >
            <div className={styles.containerModal}>
                <div className={styles.content}>
                    <h2>Adicionar Desenvolvedor</h2>
                    <form className={styles.formDev}>
                        <label> Nome:
                            <input type="text" />
                        </label>
                        <label> Avatar:
                            <input type="text" />
                        </label>
                        <label> Cargo:
                            <input type="text" />
                        </label>
                        <label> GitHub:
                            <input type="text" />
                        </label>
                        <label> LinkedIn:
                            <input type="text" />
                        </label>
                        <div className={styles.btnsModal}>
                            <button 
                                className={styles.close}
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                            <button className={styles.add}>Adicionar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Modal