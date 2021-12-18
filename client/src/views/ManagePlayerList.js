import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import PlayingButton from '../components/PlayingButton';
import NotPlayingButton from '../components/NotPlayingButton';
import UndecidedButton from '../components/UndecidedButton';

const PlayerList = (props) => {
    const { players, setPlayers, gameId} = props;
    const [ loaded, setLoaded ] = useState(false);
    const [ reloadPlayers, setReloadPlayers ] = useState(false);

    // grab players and set the array for the list 
    // set loaded to true so player list can load
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then((res) => {
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err.response.data));
    }, [reloadPlayers])

    return(
        <div className='playerList'>            
            <table className='table table-striped table-secondary table-hover'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {/* if players array is loaded then map through player list */}
                {
                    loaded &&
                    players.map((player) => {
                        return(
                            <tr key={player._id}>
                                <td>
                                    <Link to={`/player/edit/${player._id}`} >{player.playerName}</Link>
                                </td>
                                <td>
                                    <PlayingButton playerId={player._id} reloadPlayers={reloadPlayers} setReloadPlayers={setReloadPlayers} gameId={gameId}  />
                                </td>
                                <td>
                                    <NotPlayingButton playerId={player._id} reloadPlayers={reloadPlayers} setReloadPlayers={setReloadPlayers} gameId={gameId}  />
                                </td>
                                <td>
                                    <UndecidedButton playerId={player._id} reloadPlayers={reloadPlayers} setReloadPlayers={setReloadPlayers} gameId={gameId}  />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default PlayerList;