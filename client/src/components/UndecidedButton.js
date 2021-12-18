import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UndecidedButton = (props) => {
    const { gameId, playerId, setReloadPlayers, reloadPlayers } = props;
    const [ playerName, setPlayerName] = useState("");
    const [ preferredPosition, setPreferredPosition] = useState("");
    const [ game1, setGame1] = useState("");
    const [ game2, setGame2] = useState("");
    const [ game3, setGame3] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [ id, setId ] = useState()

    
    useEffect((e) => {
        axios.get(`http://localhost:8000/api/player/${props.playerId}`)
            .then((res) => {
                setPlayerName(res.data.playerName);
                setPreferredPosition(res.data.preferredPosition);
                setGame1(res.data.game1);
                setGame2(res.data.game2);
                setGame3(res.data.game3);
                setLoaded(true);
                console.log(game1)
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, [reloadPlayers])

    const setPlaying = (gameId, playerId) => {
        let playerData = {};
        gameId === '3' ? playerData.game1 = "Undecided"
        : gameId === '2' ? playerData.game2 = "Undecided"
        : playerData.game1 = "Undecided"
        
        axios.put(`http://localhost:8000/api/player/${props.playerId}`, playerData)
            .then((res) => {
                setReloadPlayers(!reloadPlayers);
                console.log(playerData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    return(
        <button className='notPlayButton btn btn-warning' onClick={setPlaying} >
            Undecided
        </button >
    )
}
export default UndecidedButton;