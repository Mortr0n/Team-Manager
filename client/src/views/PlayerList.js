import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const PlayerList = (props) => {
    const { players, setPlayers } = props;
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then((res) => {
                console.log(res.data);
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err.response.data));
    }, [])

    return(
        <div>
            <div className='d-flex justify-content-start'>
                <Link className='fs-1' to={'/player'}>List </Link>
                <p className='bar fs-1'>&nbsp; | &nbsp;</p>
                <Link className='fs-1' to={'/player/new'}> Add Player</Link>
            </div>
            
            <table className='table table-striped table-light'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    players.map((player) => {
                        return(
                            <tr key={player._id}>
                                <td>{player.playerName}</td>
                                <td>{player.preferredPosition}</td>
                                <td>EDIT/DELETE</td>
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