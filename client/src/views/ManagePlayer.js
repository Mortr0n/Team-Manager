import React, { useState } from 'react';
import { Link, Router } from '@reach/router';
import CreatePlayer from '../components/CreatePlayer';
import EditPlayer from '../components/EditPlayer';
import PlayerList from './PlayerList';


const ManagePlayers = (props) => {
    const { players, setPlayers, pathVar, removeFromDom, id } = props;

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
                <div className='secondaryLinkDiv d-flex justify-content-start'>
                    <Link className='fs-1' to={'/player/list/na'}>List </Link>
                    <p className='bar fs-1'>&nbsp; | &nbsp;</p>
                    <Link className='fs-1' to={'/player/create/new'}  > Add Player</Link>
                </div>
                {/* changing which page shows up based on the pathVar variable sent in uri 
                I didn't want to create multiple pages when they would all be the same */}
                {
                    pathVar==="list" &&
                    <PlayerList path="/player/list/na" players={players} setPlayers={setPlayers} removeFromDom={removeFromDom} />
                }
                {
                    pathVar==="create" &&
                    <CreatePlayer path="/player/create/new" players={players} setPlayers={setPlayers} /> }
                {
                    pathVar==="edit" &&
                    <EditPlayer path='/player/edit/:id' players={players} id={id} setPlayers={setPlayers} />
                }
            </div>
        </div>
    )
}
export default ManagePlayers;