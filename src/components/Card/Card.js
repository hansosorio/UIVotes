import React from 'react';
import './Card.scss';
import Hand from '../../assets/hand.png';

const Card = props => (
  <div
    className="card-component"
    style={{ backgroundImage: `linear-gradient(to top, #000000, transparent), url('${props.personPhoto}')`}}>
    <div className="resume-like" >
      <img className="icon icon-like" src={Hand} alt="like" />
    </div>
    <h3>{props.personName}</h3>
    <h4 className="station-component">{props.personStation}</h4>
    <h4 className="description-component">{props.personDescription}</h4>

    <div className="votescontainer">
      <div className="bar-like" onClick={() => console.log('like')} >
        <img className="icon icon-like" src={Hand} alt="like" />
      </div>
      <div className="bar-dislike" onClick={() => console.log('dislike')} >
        <img className="icon icon-dislike" src={Hand} alt="dislike" />
      </div>
      <div className="btn-vote" onClick={() => console.log('vote')} >
        <span>Vote now</span>
      </div>
    </div>

    <div className="votescounterbar">
      <div
        className="bar-like"
        style={{ width: `${props.personLikes}%` }}>
        <img className="icon icon-like"src={Hand} alt="likes" />
        <span>{props.personLikes}%</span>
      </div>
      <div
        className="bar-dislike"
        style={{ width: `${props.personDislikes}%` }}>
        <span>{props.personDislikes}%</span>
        <img className="icon icon-dislike" src={Hand} alt="dislikes" />
      </div>
    </div>
  </div>
);

export default Card;
