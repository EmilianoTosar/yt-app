import axios from 'axios'

const KEY = 'AIzaSyD9GogCsdcVgAtcATl2R5Eb8GHu-oYTEdk'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY,
    type: 'video'
  }
})