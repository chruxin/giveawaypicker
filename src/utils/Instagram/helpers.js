import fetchJsonp from 'fetch-jsonp';

// Taken from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export const validURL = (str) => {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if(!regex .test(str)) {
    return false;
  } else {
    return true;
  }
}

/*------------- FORM VALIDATION -------------*/
export const validateForm = (numberOfWinners, rules) => {
  let error = '';
  if (validNumberOfWinners(numberOfWinners) === false) {
    error = 'Please input a positive integer for the number of winners.';
  } else {
    // number of winners is a positive integer
    for (let rule of rules) {
      if (rule.type === 'must_like_post') {
        if (validURL(rule.data) === false) {
          error = 'Invalid URL.';
          break;
        }
      } else {
        error = 'Invalid type.';
        break;
      }
    }
  }
  return error;
}

function validNumberOfWinners(numberOfWinners) {
  if (parseInt(numberOfWinners, 10) <= 0
  || parseFloat(numberOfWinners, 10) !== parseInt(numberOfWinners, 10)) {
    return false;
  } else {
    return true;
  }
}

/*------------- REQUEST HANDLING -------------*/
export const handleRule = (rule, token) => {
  if (rule.type === 'must_like_post') {
    return handleMustLikePost(rule.data, token);
  } else {
    return new Promise((fulfill, reject) => {
      reject({error: 'Invalid rule.'});
    });
  }
}

// Request handler for the rule 'must_like_post'
function handleMustLikePost(postURL, token) {
  return new Promise((fulfill, reject) => {
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
  });
}
