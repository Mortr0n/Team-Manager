import React, { useEffect, useState } from 'react';
import Form from './Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditPlayer = (props) => {
    const { players, setPlayers, id, player, setPlayer } = props;
    const [ playerName, setPlayerName] = useState("");
    const [ preferredPosition, setPreferredPosition] = useState("");
    const [ game1, setGame1] = useState("");
    const [ game2, setGame2] = useState("");
    const [ game3, setGame3] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [ errors, setErrors ] = useState([]);
    
    // grabbing the info for the player using ID
    useEffect(() => {
        axios.get(`http://localhost:8000/api/player/${props.id}`)
            .then((res) => {
                setPlayerName(res.data.playerName);
                setPreferredPosition(res.data.preferredPosition);
                setGame1(res.data.game1);
                setGame2(res.data.game2);
                setGame3(res.data.game3);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    // Taking in player object and updating then navigating back to list after
    const editPlayer = (player) => {
        console.log(player);
        axios.put(`http://localhost:8000/api/player/${id}`, player)
            .then((res) => {
                setPlayers([...players, res.data ]);
                // navigate to player list after player creation
                navigate('/player/list/na')
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                if(err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            })
    }

    return(
        // creating box structure around the form
        <div className='playerCreateContainer'>
            <p className='fs-2 text-start'>Edit Player</p>
            <div className='d-flex justify-content-center'>
                {
                    loaded &&
                    <Form onSubmitProp={editPlayer} errors={errors} playerNameState={playerName} preferredPositionState={preferredPosition} game1State={game1} game2State={game2} game3State={game3}  />
                }
                
            </div>
            
        </div>
    )
}

export default EditPlayer;