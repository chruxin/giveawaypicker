import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import jsonp from 'jsonp';

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
    // TODO: check browser support for localStorage `if (typeof(Storage) !== "undefined")`
    const token = localStorage.getItem('access_token');

    // const postURL = this.state.postURL;
    // const requestURL = 'https://api.instagram.com/oembed/?url=' + postURL + '&callback=?';
    //
    //
    // axios.get(requestURL).then(function (response) {
    //     console.log('request: ' + requestURL);
    //     console.log(JSON.stringify(response));
    //   })
    //   .catch(function (error) {
    //     console.log('request: ' + requestURL);
    //     console.log(JSON.stringify(error));
    //   });

    jsonp('https://api.instagram.com/v1/users/self/?access_token=' + token, null, function (err, data) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data);
      }
    });

      // axios.get('https://api.instagram.com/v1/users/self/?access_token=' + token + '&callback=?').then(function (response) {
      //   console.log('request: https://api.instagram.com/v1/users/self/?access_token=' + token);
      //     console.log(JSON.stringify(response));
      //   })
      //   .catch(function (error) {
      //     console.log('request: https://api.instagram.com/v1/users/self/?access_token=' + token);
      //     console.log(JSON.stringify(error));
      //   });


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
