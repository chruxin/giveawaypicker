import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Card,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Import conponents
import InstagramResult from '../InstagramResult';
// Import helpers
import {validURL, validateForm, handleRule} from '../../utils/Instagram/helpers.js';

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
   this.toggle = this.toggle.bind(this);
   this.renderRules = this.renderRules.bind(this);
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

  async handleSubmit(event) {
    let error = validateForm(this.state.numberOfWinners, this.state.rules);
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
        return handleRule(rule, token);
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

  renderRules() {
    let rules = this.state.rules.map((rule, index) => {
      let type = rule.type;
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
    return rules;
  }

  render() {
    const rules = this.renderRules();

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
