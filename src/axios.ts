import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://us-central1-clone-f29f9.cloudfunctions.net/api',
  // TEST URL
  baseURL: 'http://localhost:5001/clone-f29f9/us-central1/api',
});

export default instance;
