  require('dotenv').config();
require('./config/database');

const Video = require('./models/video');

(async function() {

  const videos = await Video.create([
    {
      url: "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c004/a929c94967884c6c88c7ea51a96f88b1/?a=1988&br=6914&bt=3457&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1614226187&l=2021022422093801019021820340016A66&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=M2lxeDY2MzxkMzMzaTczM0ApNDY4Njs6Ojs0Nzk7NDVnOmdoNWFpMm1fa2RgLS1fMTZzc2JeMmEuYS4uYzIyLy5hMy86Yw%3D%3D&signature=70e7b5295f3a67e9ed26c16200e1bca8&tk=tt_webid_v2&vl=&vr=",
      channel: "mattupham",
      song: "i got u all figured out slowed - @mars",
      likes: "659",
      messages: "55",
      description: "I love programming, but to be honest I'd rather be snowboarding",
      shares: "3",
    },
    {
      url: "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c002/e777abb9da8b472cb0dd68c1c36901cf/?a=1988&br=2058&bt=1029&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1614226189&l=2021022422093801019021820340016A66&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=amR0ZDo5OXVqMzMzZzczM0ApM2Y2M2ZnaTw7NzQ6Njc2NmdwXm1hYWteLi9gLS0zMTZzczBeLzYzNDNhLTIyLmIvMF46Yw%3D%3D&signature=f98f6e4d23b04a74f2dbccddb4ef1b03&tk=tt_webid_v2&vl=&vr=",
      channel: "mattupham",
      song: "I Do - @Kill The Noise & Feed Me",
      likes: "1772",
      messages: "62",
      description: "Love working longer",
      shares: "8",
    }
  ]) 
  console.log(videos);
  process.exit();
})();
