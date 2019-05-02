const axios = require("axios");

let onCallToApi = async function(username) {
  // Make a request for a user with a given ID
  let url = `https://api.github.com/users/${username}/repos`;
  console.log(url);
  return await axios
    .get(url)
    .then(response => {
      //console.log(response);
      return response
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

onCallToApi("sodeeqOlapade");

module.exports = onCallToApi

// https://api.github.com/users/sodeeqOlapade/repos
