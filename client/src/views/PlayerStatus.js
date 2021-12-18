import React from 'react';
import { Link } from '@reach/router';
import ManagePlayers from './ManagePlayer';
import ManagePlayerList from './ManagePlayerList';

const PlayerStatus = (props) => {
    const { gameId, players, setPlayers } = props;
    return(
        // Main Link Wrapper
        <div className='wrapper'>
            <div className='topLinks d-flex justify-content-start'>
                <Link className='fs-1' to={'/player/list/na'} >Manage Players</Link>
                <p className='bar fs-1'>&nbsp; | &nbsp;</p>
                <Link className='fs-1' to={'/status/game/1'}> Manage Player Status</Link>
            </div>
            {/* Secondary Link Wrapper */}
            <div className='playerManager'>
            <h1 className='text-start'>Player Status - Game {`${gameId}`}</h1>
                <div className='secondaryLinkDiv d-flex justify-content-start'>
                    <Link className='fs-1' to={`/status/game/1`}>Game 1 </Link>
                    <p className='bar fs-1'>&nbsp; | &nbsp;</p>
                    <Link className='fs-1' to={'/status/game/2'}  >Game 2</Link>
                    <p className='bar fs-1'>&nbsp; | &nbsp;</p>
                    <Link className='fs-1' to={'/status/game/3'}  >Game 3</Link>
                </div>
            </div>
            {
                gameId &&
                <ManagePlayerList path={`/status/game/${gameId}`} gameId={gameId} players={players} setPlayers={setPlayers} />  
            }

        </div>
    )

}
export default PlayerStatus;