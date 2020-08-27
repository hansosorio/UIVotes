
import React, { Component } from 'react';
import './Card.scss';
import Hand from '../../assets/hand.png';

export default class Card extends Component {
  state = {
    idPerson: null,
    action: '',
    waitToReset: false,
    animateCalltoAction: false
  };

  addLike = id => {
    this.setState({idPerson: id, action: 'like'});

  }
  removeLike = id => {
    this.setState({idPerson: id, action: 'dislike'});
  }

  toVote = () => {
    if (this.state.waitToReset) {
      this.setState({action: '', waitToReset: false, animateCalltoAction: false});
    } else if (this.state.action !== '') {
      this.props.actionLike(this.state)
      this.setState({action: '', waitToReset: true, animateCalltoAction: false});
    } else { //Active the animation
      this.setState({animateCalltoAction: true});
    }
  }

  render() {
    const props = this.props;
    return (
      <div
        className="card-component"
        style={{ backgroundImage: `linear-gradient(to top, #000000, transparent), url('${props.personPhoto}')`, backgroundRepeat: "no-repeat"}}>
        <div className="resume-like" >
          <img className={props.personMostVote} src={Hand} alt="like" />
        </div>

        <h3>{props.personName}</h3>

        <h4 className="station-component">{props.personStation}</h4>

        { this.state.waitToReset ?
          <h4 className="description-component">Thank you for voting!</h4> :
          <h4 className="description-component">{props.personDescription}</h4> }

        <div className="votescontainer">
          <div
            className={`bar bar-like ${this.state.action === "like"? 'active': ''} ${this.state.animateCalltoAction ? 'animate': ''}`} onClick={() => this.addLike(props.personId)} >
            <img className="icon icon-like" src={Hand} alt="like" />
          </div>
          <div className={`bar bar-dislike ${this.state.action === "dislike"? 'active': ''} ${this.state.animateCalltoAction ? 'animate': ''}`} onClick={() => this.removeLike(props.personId)} >
            <img className="icon icon-dislike" src={Hand} alt="dislike" />
          </div>
          <div className="btn-vote" onClick={() => this.toVote()} >
            <span>{this.state.waitToReset ? 'Vote again' : 'Vote now'}</span>
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
    )
  }
}
