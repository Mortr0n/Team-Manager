import React from 'react';
import Form from '../components/Form';
import axios from 'axios';

const CreatePlayer = (props) => {
    const { players, setPlayers } = props;

    const createPlayer = (player) => {
        axios.post(`http://localhost:8000/api/player`, player)
            .then((res) => {
                console.log(res.data);
                setPlayers([...players, res.data ]);
                console.log(players);
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    return(
        <div>
            <Form onSubmitProp={createPlayer} playerNameState="" preferredPositionState="" game1State="Undecided" game2State="Undecided" game3State="Undecided" />
        </div>
    )
}

export default CreatePlayer;