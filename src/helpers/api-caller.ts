import axios from 'axios';

const baseUrl = 'https://doodler-api.herokuapp.com/api/v1';

export const apiCaller = (
  endPoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body = {},
  token = ''
) => {
  return axios(`${baseUrl}/${endPoint}`, {
    method,
    data: body,
    headers: { 'x-auth-token': token },
  });
};
