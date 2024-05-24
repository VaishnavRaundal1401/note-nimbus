import React from 'react'

function Notesitem(props) {
    const {notes} = props;
  return (
    <div className='col-md-3'>
        <div class="card my-3">
            <div class="card-body">
                <h5 class="card-title">{notes.title}</h5>
                <p class="card-text">{notes.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique velit expedita perferendis. Est ab officia itaque, eius tempora adipisci blanditiis voluptatem veritatis atque quasi, sint maxime ipsum aspernatur cum modi nesciunt minima suscipit.</p>
                <i class="fa-solid fa-trash mx-2"></i>
                <i class="fa-regular fa-pen-to-square mx-2"></i>
            </div>
        </div>
    </div>
  )
}

export default Notesitem
