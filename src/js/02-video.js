import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeupdate, 1000));

function onTimeupdate(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}
saveTime();

function saveTime() {
  const getTime = localStorage.getItem('videoplayer-current-time');
  const parsedGetTime = JSON.parse(getTime);

  if (parsedGetTime) {
    player.setCurrentTime(parsedGetTime);
  }
}
