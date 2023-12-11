import React from 'react';

const Header=(props)=>{
    return(
        <div>
            <h1>Welcome to {props.name}'s Portfolio</h1>
            <p>{props.bio}</p>
        </div>
    );
}
export default Header;