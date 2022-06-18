import React from 'react'

function Modal(props) {
  return (
    <section className='modal-container'>
        <div className="modal">
            <h4 className='modal-title'>Enter a valid movie name</h4>
            <button type='button' onClick={props.closeModal} className="modal-btn" >close</button>
        </div>
    </section>
  )
}

export default Modal