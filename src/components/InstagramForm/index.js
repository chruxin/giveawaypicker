import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Card,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import fetchJsonp from 'fetch-jsonp';

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

// Taken from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function validURL(str) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if(!regex .test(str)) {
    return false;
  } else {
    return true;
  }
}

class InstagramForm extends Component {
  constructor(props) {
   super(props);
   this.state = {
     numberOfWinners: '',
     users: [],
     error: '',
     result: false,
     message: '',
     dropdownOpen: false,
     rules: []
     // An array of objects where the object at index i is the user
     // input for the i-th rule.
     // Each object has a string type field and a string data field, ex.
     // {type: '', data: ''}.
     // Possible types: 'must_like_post'
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleRuleChange = this.handleRuleChange.bind(this);
   this.handleRemove = this.handleRemove.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleAdd = this.handleAdd.bind(this);
   this.validateForm = this.validateForm.bind(this);
   this.toggle = this.toggle.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleRuleChange(event) {
    const target = event.target;
    const value = target.value;
    const index = target.id;
    this.setState((prevState) => {
      let rules = prevState.rules;
      rules[index].data = value;
      return {
        rules: rules
      };
    });
  }

  handleRemove(event) {
    const target = event.target;
    const index = target.id;
    this.setState((prevState) => {
      let rules = prevState.rules;
      rules.splice(index, 1);
      return {
        rules: rules
      };
    });
  }

  validateForm() {
    let error = '';
    if (parseInt(this.state.numberOfWinners, 10) <= 0) {
      error = 'Please input a positive number of winners.';
    } else if (parseFloat(this.state.numberOfWinners, 10)
    !== parseInt(this.state.numberOfWinners, 10)) {
      error = 'Please input an integer number of winners.';
    } else {
      // number of winners is a positive integer
      for (let rule of this.state.rules) {
        if (rule.type === 'must_like_post') {
          if (validURL(rule.data) === false) {
            error = 'Invalid URL.';
          }
        } else {
          error = 'Invalid type.';
        }
      }
    }
    return error;
  }

  async handleSubmit(event) {
    let error = this.validateForm();
    if (error !== '') {
      this.setState({
        result: false,
        message: error
      });
    } else {
      this.setState({
        result: false,
        message: 'Generating result...'
      });

      const token = localStorage.getItem('access_token');
      let resultPromises = this.state.rules.map((rule) => {
        return new Promise((fulfill, reject) => {
          if (rule.type === 'must_like_post') {
            const postURL = rule.data;
            const requestURLForMediaId = 'https://api.instagram.com/oembed/?url=' + postURL;
            // first request to get media_id
            fetchJsonp(requestURLForMediaId).then((response) => {
              return response.json();
            }).then((json) => {
              const mediaId = json.media_id;
              const requestURLForLikes = 'https://api.instagram.com/v1/media/'
              + mediaId + '/likes?access_token=' + token;
              // second request to get users who liked the post
              return fetchJsonp(requestURLForLikes).then((response) => {
                return response.json();
              }).then((json) => {
                // fulfill the promise with an array of users
                // who liked the post
                fulfill(json.data);
              });
            }).catch((error) => {
              reject({error: error});
            });
          } else {
            reject({error: 'Invalid rule.'});
          }
        });
      });

      Promise.all(resultPromises).then((resultArray) => {
        // resultArray contains arrays of users
        console.log('resultArray: ' + JSON.stringify(resultArray));
        this.setState({message: ''});
        let resultUsers = resultArray.reduce((usersArray1, usersArray2) => {
          return usersArray1.concat(usersArray2);
        });
        console.log('resultUsers: ' + JSON.stringify(resultUsers));
        this.setState({
          users: resultUsers,
          result: true
        });
      }).catch((error) => {
        this.setState({message: error.error});
      });
    }
  }

  handleAdd (event) {
    const name = event.target.name;
    this.setState((prevState) => {
      let newRules = prevState.rules;
      newRules.push({
        type: name,
        data: ''
      });
      return {
        rules: newRules
      }});
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const rules = this.state.rules.map((rule, index) => {
      const type = rule.type;
      if (type === "must_like_post") {
          return (
            <Card block outline color="secondary" key={index}>
              <FormGroup row>
                <Label for="postURL" sm={2}>&bull; Must like post</Label>
                <Col sm={8}>
                  <Input type="url"
                    name="postURL"
                    id={index}
                    placeholder="post link, example: https://www.instagram.com/p/AAaAaA0AAaa/?taken-by=someone"
                    onChange={this.handleRuleChange}/>
                </Col>
                <Col sm={2}>
                  <Button color="danger" onClick={this.handleRemove} id={index}>Remove</Button>
                </Col>
              </FormGroup>
            </Card>
          );
      } else {
        return <p>Invalid type.</p>;
      }
    });

    return (
      <div>
        <h2>Number of winners</h2>
        <Input type="number"
          required="true"
          name="numberOfWinners"
          id="numberOfWinners"
          onChange={this.handleChange}/>
        <h2>Rules</h2>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Add Rule
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.handleAdd} name="must_like_post">Must like post</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Form>
          {rules}
        </Form>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <h2>{ this.state.message }</h2>
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
