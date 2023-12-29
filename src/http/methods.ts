import axios from 'axios';
// import config from 'whats-app/config/environment';
// import 'dotenv/config'

// const configApi = process.env.API_URL_DEVELOPMENT || 'http://localhost:4000'
const configApi = 'http://localhost:4000'

function post(url: string, data: object) {
  return axios.post(`${configApi}/${url}`, data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('__whats_access_token')}`,
      'X-account-id': localStorage.getItem('__whats_id'),
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
}

function get(url: string, id: string) {
  const apiUrl = id ? `${configApi}/${url}/${id}` : `${configApi}/${url}`;
  return axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('__whats_access_token')}`,
      'X-account-id': localStorage.getItem('__whats_id'),
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
}

function put(url: string, data: object) {
  return axios.put(`${configApi}/${url}`, data, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('__whats_access_token')}`,
      'X-account-id': localStorage.getItem('__whats_id'),
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
}

function remove(url: string, id: string) {
  return axios.delete(`${configApi}/${url}/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('__whats_access_token')}`,
      'X-account-id': localStorage.getItem('__whats_id'),
      'Content-Type': 'application/vnd.api+json',
      'Accept': 'application/vnd.api+json'
    }
  })
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
}

export default {
  post,
  get,
  remove,
  put
};
