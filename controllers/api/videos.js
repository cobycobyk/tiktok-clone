const Video = require('../../models/video');

module.exports = {
  getAll,
  create,
}

async function getAll(req, res) {
  console.log('getAll');
  const videos = await Video.find({});
  res.status(200).json(videos);
}

async function create(req, res) {
  console.log('hello')
  const videos = await Video.create(req.body);
  res.status(200).json(videos);
}