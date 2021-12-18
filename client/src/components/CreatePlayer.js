import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreatePlayer = (props) => {
    const { players, setPlayers} = props;
    const [ errors, setErrors ] = useState([]);
    // create player adding in player object taken in at post 
    const createPlayer = (player) => {
        axios.post(`http://localhost:8000/api/player`, player)
            .then((res) => {
                setPlayers([...players, res.data ]);
                // navigate to player list after player creation
                navigate('/player/list/na')
            })
            .catch((err) => {
                // if error make array with errors
                console.log(err.response.data.errors);
                if(err.response.data.errors) {
                    setErrors(err.response.data.errors);
            }
        })
    }

    return(
        // creating box structure around the form
        <div className='playerCreateContainer'>
            <p className='fs-2 text-start'>Add Player</p>
            <div className='d-flex justify-content-center'>
                {/* passing all state to the form including errors */}
                <Form onSubmitProp={createPlayer} errors={errors} playerNameState="" preferredPositionState="" game1State="Undecided" game2State="Undecided" game3State="Undecided" />
            </div>
            
        </div>
    )
}

export default CreatePlayer;