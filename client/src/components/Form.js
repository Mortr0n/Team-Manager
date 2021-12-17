import React, { useState } from 'react';
import axios from 'axios';


const Form = (props) => {
    const { playerNameState, preferredPositionState, game1State, game2State, game3State, onSubmitProp, players, setPlayers } = props;
    const [ playerName, setPlayerName ] = useState(playerNameState);
    const [ preferredPosition, setPreferredPosition ] = useState(preferredPositionState);
    // default starting point is Undecided not able to change in form
    const [ game1, setGame1 ] = useState(game1State);
    const [ game2, setGame2 ] = useState(game2State);
    const [ game3, setGame3 ] = useState(game3State);
    
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("got here");
        // passing these items as an object for create and update functions
        onSubmitProp({ playerName, preferredPosition, game1, game2, game3 });
    }

    


    return(
        <form onSubmit={formSubmitHandler}>
            {/* TODO: make sure to add validations!!! */}
            <div  className='form-group'>
                <label htmlFor="playerName" className="form-label">Player Name:</label>
                <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='preferredPosition' className='form-label'>Preferred Position(Optional):</label>
                <input
                type="text"
                value={preferredPosition}
                onChange={(e)=>setPreferredPosition(e.target.value)} />
            </div>
            <div className='form-group'>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}
export default Form;