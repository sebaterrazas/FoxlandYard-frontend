import React from 'react';

function CustomModal({ showModal, closeModal, body }) {
    return (
        <div>
            {showModal ? 
            (<div className="modal">
                <div className="modal-content">
                <div className="modal-header">
                    <h2>Game Ended</h2>
                    <button onClick={closeModal}>Close</button>
                </div>
                <div className="modal-body">
                    <p>{finalGameState}</p>
                </div>
                </div>
            </div>) 
            : null }
        </div>
    );
}

export default CustomModal;