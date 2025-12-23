const axios = require('axios');
const fs = require('fs');
const path = require('path');
const config = require('../config.json');

const LAST_VIDEO = path.join(__dirname, 'lastVideo.json');

async function checkNewVideo() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${config.youtube.apiKey}&channelId=${config.youtube.channelId}&part=snippet,id&order=date&maxResults=1`;

  const res = await axios.get(url);
  const items = (res.data && res.data.items) || [];
  if (!items.length) return null;

  const videoId = items[0].id.videoId || (items[0].id && items[0].id.videoId) || null;
  if (!videoId) return null;

  let saved = { videoId: null };
  try {
    if (fs.existsSync(LAST_VIDEO)) {
      saved = JSON.parse(fs.readFileSync(LAST_VIDEO, 'utf8')) || saved;
    }
  } catch (e) {
    console.error('error ler ultimo video',  e)
  }

  if (saved.videoId !== videoId) {
    try {
      fs.writeFileSync(LAST_VIDEO, JSON.stringify({ videoId }), 'utf8');
    } catch (e) {
        console.error('error salvar ultimo video', e)
    }
    return `https://youtu.be/${videoId}`;
  }

  return null;
}

module.exports = { checkNewVideo };