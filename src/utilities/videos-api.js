import sendRequest from './send-request';

const BASE_URL = '/api/videos';

export function getVideos() {
  return sendRequest(`${BASE_URL}`);
}