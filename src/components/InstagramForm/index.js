import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import jsonp from 'jsonp';

class InstagramResult extends Component {
  constructor (props) {
    super(props);
    this.selectRandomWinners = this.selectRandomWinners.bind(this);
  }

  selectRandomWinners (users, numberOfWinners) {
    return users;
  }

  render () {
    const users = this.props.users;
    const error = this.props.error;
    const result = this.props.result;
    const numberOfWinners = this.props.numberOfWinners;
    console.log('users: ' + JSON.stringify(users));
    console.log('error: ' + error);
    console.log('result: ' + result);
    console.log('numberOfWinners: ' + numberOfWinners);
    let message;
    if (error !== '') {
      message = <h2>Error: { error }</h2>;
    } else if (result) {
      const winners = this.selectRandomWinners (users, numberOfWinners);
      const links = winners.map((winner) =>
      <a href={'https://www.instagram.com/' + winner.username} key={winner.username}>
        @{winner.username}
      </a>
    );
      message = (
        <div>
          <h2>Winner(s):</h2>
          <p>{ links }</p>
        </div>
      );
    }
    return (
      <div>
        { message }
      </div>
    );
  }
}

class InstagramForm extends Component {
  constructor(props) {
   super(props);
   this.state = {
     postURL: '',
     numberOfWinners: '',
     users: [],
     error: '',
     result: false
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // this.setState({postURL: event.target.value});
  }

  handleSubmit(event) {
    // TODO: check browser support for localStorage `if (typeof(Storage) !== "undefined")`
    const token = localStorage.getItem('access_token');

    const postURL = this.state.postURL;
    const requestURLForMediaId = 'https://api.instagram.com/oembed/?url=' + postURL;

    let that = this;
    jsonp(requestURLForMediaId, null, function (err, data) {
      if (err) {
        console.log('error!');
        console.error(err.message);
        that.setState({error: err.message});
      } else {
        console.log('success!');
        console.log(data);
        const mediaId = data.media_id;
        const requestURLForLikes = 'https://api.instagram.com/v1/media/'
        + mediaId + '/likes?access_token=' + token;
        jsonp(requestURLForLikes, null, function (err, data) {
          if (err) {
            console.log('error!');
            console.error(err.message);
          } else {
            console.log('success!');
            console.log(data);
            that.setState({
              users: data.data,
              result: true
            });
          }
        });
      }
    });

  }

  render() {
    // const title

    return (
      <div>
        <h2>Number of winners</h2>
        <Input type="number"
          name="numberOfWinners"
          id="numberOfWinners"
          onChange={this.handleChange}/>
        <h2>Rules</h2>
        <Form>
          <FormGroup>
            <Label for="postURL">Must like post</Label>
            <Input type="url"
              name="postURL"
              id="postURL"
              placeholder="post link, example: https://www.instagram.com/p/AAaAaA0AAaa/?taken-by=someone"
              onChange={this.handleChange}/>
          </FormGroup>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <InstagramResult
          users={this.state.users}
          numberOfWinners={this.state.numberOfWinners}
          error={this.state.error}
          result={this.state.result}/>
      </div>
    );
  }
}

export default InstagramForm;
