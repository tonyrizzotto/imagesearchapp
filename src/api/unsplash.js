import axios from 'axios';

// axios allows you set up a preconfigured instance of the client with default properties.

// Create a customized client with default properties
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID PhOGE0noKNZoLD5m3fdYobu_7n7BHpHUC7ksTFUG6gU',
  },
});
