import axios from 'axios';

const KEY = 'AIzaSyDShrjLj6w-4FGZnU71I3-pT1u-YK9y57A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY
  }
});