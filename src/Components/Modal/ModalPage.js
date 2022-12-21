import React, { useState } from "react";
import Modal from "./modal";
// import './modal.css';
import styles from './modal.module.css';

function ModalPage() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <button
                className={styles.openModalBtn}
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Open Modal
            </button>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
}

export default ModalPage;
