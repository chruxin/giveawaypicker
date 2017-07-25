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
    // TODO: implement this function
    return users;
  }

  render () {
    const users = this.props.users;
    const error = this.props.error;
    const result = this.props.result;
    const numberOfWinners = this.props.numberOfWinners;
    let message;
    if (error !== '') {
      message = <h2>Error: { error }</h2>;
    } else if (result === true) {
      message = (
        <div>
          <h2>Generating result...</h2>
        </div>
      );
      const winners = this.selectRandomWinners (users, numberOfWinners);
      const winnerLinks = winners.map((winner) =>
      <a href={'https://www.instagram.com/' + winner.username} key={winner.username}>
        @{winner.username}
      </a>
    );
      message = (
        <div>
          <h2>Winner(s):</h2>
          <p>{ winnerLinks }</p>
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
     numberOfWinners: '',
     users: [],
     error: '',
     result: false,
     message: '',
     dropdownOpen: false,
     rules: []
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
    if (parseInt(this.state.numberOfWinners) <= 0) {
      error = 'Please input a positive number of winners.';
    } else if (parseFloat(this.state.numberOfWinners) !== parseInt(this.state.numberOfWinners)) {
      error = 'Please input an integer number of winners.';
    } else {
      // number of winners is a positive integer
      // TODO: validate input to rules
    }
  }

  async handleSubmit(event) {
    this.setState({message: 'Generating result...'});

    // validate form Input
    if (parseInt(this.state.numberOfWinners) <= 0) {
      this.setState({error: 'Please input a positive number of winners.'});
    } else if (parseFloat(this.state.numberOfWinners) !== parseInt(this.state.numberOfWinners)) {
      this.setState({error: 'Please input an integer number of winners.'});
    } else {
      //
      const token = localStorage.getItem('access_token');
      const postURL = this.state.rules[0].data; //TODO: change this hard-coded index
      const requestURLForMediaId = 'https://api.instagram.com/oembed/?url=' + postURL;

      try {
        let response = await fetchJsonp(requestURLForMediaId)
        this.setState({message: ''});
        let json = await response.json();
        const mediaId = json.media_id;
        const requestURLForLikes = 'https://api.instagram.com/v1/media/'
          + mediaId + '/likes?access_token=' + token;
        let response2 = await fetchJsonp(requestURLForLikes)
        let json2 = await response2.json();
        this.setState({
          users: json2.data,
          result: true
        });
      } catch (err) {
          this.setState({
            message: '',
            error: err.message
          });
      }
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
      } //TODO
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
            <DropdownItem>Another Action</DropdownItem>
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
