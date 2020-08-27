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

  render() {
    const { error, loading, people } = this.state;
    let peopleInfo = null;

    if (!loading && !error && people.length > 0) {
      peopleInfo = people.map(person => {
        person.total = person.countlikes + person.countdislikes
        person.likes = person.countlikes * 100 / person.total
        person.dislikes = person.countdislikes * 100 / person.total
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
