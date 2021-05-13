import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL

  // baseURL:'https://us-central1-from-38f94.cloudfunctions.net/api'
});

export default instance;
