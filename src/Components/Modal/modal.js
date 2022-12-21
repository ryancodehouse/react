import React from "react";
// import "./modal.module.css";
import styles from "./modal.module.css";

function Modal({ setOpenModal }) {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.closeButton}>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className={styles.title}>
                    <h1>This is my modal</h1>
                </div>
                <div className={styles.textArea}>
                    <p>This is some text telling you about the modal</p>
                </div>
                <div className={styles.footer}>
                    <a href="/">
                        <button className={styles.footerButton}>Home Page</button>
                    </a>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        className={`${styles.cancelBtn} ${styles.footerButton}`}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;