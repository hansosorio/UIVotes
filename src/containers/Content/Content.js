import React, { Component } from 'react';
import './Content.scss';

import Card from '../../components/Card/Card';
import * as fakeAPI from '../../services/fakeAPI';

export class Home extends Component {

  state = {
    people: [],
    loading: true,
    error: false,
  };

 async componentDidMount() {
    try {
      const people = await fakeAPI.getAllCards();
      this.setState({ people, loading: false, error: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  }

  actionLikeHandler = ({ idPerson, action }) => {
    let newpeople = this.state.people.map((item)=>{
      if (item.id === idPerson) {
        if (action === 'like')
          item.countlikes++;
        if (action === 'dislike' && item.countlikes > 0)
          item.countlikes--;
      }
      return item;
    })
    localStorage.setItem('peoplecards', JSON.stringify(newpeople));
    this.setState({ people: newpeople });
  }

  render() {
    const { error, loading, people } = this.state;
    let peopleInfo = null;

    if (!loading && !error && people.length > 0) {
      peopleInfo = this.state.people.map(person => {
        person.total = person.countlikes + person.countdislikes
        person.likes = parseFloat(person.countlikes * 100 / person.total).toFixed(0)
        person.dislikes = parseFloat(person.countdislikes * 100 / person.total).toFixed(0)
        person.mostvote = (person.countlikes >= person.countdislikes) ? 'icon icon-like':'icon icon-dislike';
        return (
          <Card
            key={person.id}
            data={person}
            personId={person.id}
            personName={person.name}
            personPhoto={person.imageurl}
            personStation={person.station}
            personDescription={person.description}
            personLikes={person.likes}
            personDislikes={person.dislikes}
            personTotal={person.total}
            personMostVote={person.mostvote}
            actionLike={this.actionLikeHandler}
          />
        );
      });
    }
    return (
      <div>
        <h2>VOTES</h2>
        <div className="dashboard content" data-testid="main__dashboard">
          {peopleInfo}
        </div>
      </div>
    );
  }
}

export default Home;
