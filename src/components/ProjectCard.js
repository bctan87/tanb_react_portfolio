import React from 'react';

function FriendCard(props) {
  return (
    
        <div className="col s12 m4">
        <div className="card">
            <div className="card-image">
            <img alt={props.name} src={props.image} />
            <span className="card-title">{props.name}</span>
            </div>
            <div className="card-content">
            <p>{props.description}</p>
            </div>
            <div className="card-action">
            <a href={props.link}>Link</a>
            </div>
            <div className="card-action">
            <a href={props.repo}>Repo</a>
            </div>
        </div>
        </div>
    

  );
}

export default FriendCard;