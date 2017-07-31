import React, { Component } from 'react';

class InstagramResult extends Component {
  constructor (props) {
    super(props);
    this.selectRandomWinners = this.selectRandomWinners.bind(this);
  }

  selectRandomWinners (users, numberOfWinners) {
    console.log('users: ' + JSON.stringify(users));
    let winners = [];
    for (let i = 0; i < numberOfWinners; i++) {
      let randomIndex = Math.floor(Math.random() * users.length);
      winners.push(users[randomIndex]);
    }
    return winners;
  }

  render () {
    const users = this.props.users;
    const error = this.props.error;
    const result = this.props.result;
    const numberOfWinners = this.props.numberOfWinners;
    let giveawayResult;
    if (error !== '') {
      giveawayResult = <h2>Error: { error }</h2>;
    } else if (result === true) {
      giveawayResult = (
        <div>
          <h2>Generating result...</h2>
        </div>
      );
      const winners = this.selectRandomWinners (users, numberOfWinners);
      const winnerLinks = winners.map((winner, index) =>
      <p key={index}>
        <a href={'https://www.instagram.com/' + winner.username}>
          @{winner.username}
        </a>
      </p>
    );
      giveawayResult = (
        <div>
          <h2>Winner(s):</h2>
          { winnerLinks }
        </div>
      );
    }
    return (
      <div>
        { giveawayResult }
      </div>
    );
  }
}

export default InstagramResult;
