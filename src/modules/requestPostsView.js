const BASE_URL  = 'https://devto-challange-default-rtdb.firebaseio.com/';

const getPostById = async (id) => {
  let response = await fetch(`${BASE_URL}${id}/.json`);
  let data = response.json();

  return data;
}

const deleteByid = async (id) => {
  let response = await fetch(`${BASE_URL}${id}/.json`, { method: 'DELETE' });
  let data = await response.json();

  return data;
}

export { getPostById, deleteByid }