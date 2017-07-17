import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class InstagramForm extends Component {
  constructor(props) {
   super(props);
   this.state = {postURL: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({postURL: event.target.value});
  }

  handleSubmit(event) {
    const postURL = this.state.postURL;


  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="postURL">Post Link</Label>
          <Input type="url"
            name="postURL"
            id="postURL"
            placeholder="post link, example: https://www.instagram.com/p/AAaAaA0AAaa/?taken-by=someone"
            onChange={this.handleChange}/>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default InstagramForm;
