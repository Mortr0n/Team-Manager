import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { playerId, successCallback } = props;

    const deletePlayer = (e) => {
        axios.delete(`http://localhost:8000/api/player/${playerId}`)
            .then((res) =>{
                // callback for removing item from list or navigation
                successCallback();
            })
    }

    return(
        <button className='btn btn-danger mb-2' onClick={deletePlayer} >
            Delete
        </button>
    )
}
export default DeleteButton;