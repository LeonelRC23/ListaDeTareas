import { API_URL } from '../constants/back';

export const setTaks = (e) => {
  console.log(e.target.value);
  fetch(`${API_URL}task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      name: e.target.value,
    }),
  }).then(() => window.location.reload());
};

export const deleteElement = (id) => {
  fetch(`${API_URL}task/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }).then(() => window.location.reload());
};
