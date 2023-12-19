const url = 'http://localhost:8080/childgame1-1.0-SNAPSHOT/api/';

export function del(URL: string) {
  fetch(url + URL, {
    method: 'DELETE',
  });
}
export function put(URL: string, header: string, object: any) {
  fetch(url + URL, {
    method: 'PUT',
    headers: {'Content-Type': header},
    body: object,
  });
}

export function post(URL: string, header: string, object: any) {
  return fetch(url + URL, {
    method: 'POST',
    headers: {'Content-Type': header},
    body: object,
  });
}
export function get(URL: string) {
  return fetch(url + URL, {
    method: 'GET',
  });
}
