import {Player} from 'domain/entities';
import {del, post, get} from '../transport/request';

export function async_getPlayers() {
  return new Promise(resolve => {
    get('players')
      .then(response => response.json())
      .then(data => {
        resolve(_response(data));
      });
  });
}

export function async_getPlayer(id: number) {
  return new Promise(resolve => {
    get('player' + id)
      .then(response => response.json())
      .then(data => {
        resolve(_response(data));
      });
  });
}

export function async_addPlayer(object: Player) {
  return new Promise(resolve => {
    post('adding', 'application/json;charset=UTF-8', object)
      .then(response => response.text())
      .then(data => {
        resolve(data);
      });
  });
}

export function delPlayer(id: number) {
  const URL: string = 'deleting/' + id;
  del(URL);
}

function _response(player: Player[]) {
  if (player != null) {
    let players: Player[] = [];
    for (let i = 0; i < player.length; i++) {
      players.push(
        new Player(
          player[i].age,
          player[i].id,
          player[i].level,
          player[i].name,
        ),
      );
    }
    return players;
  }
}
