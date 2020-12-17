import axios from 'axios'

const fetchUsers = async (page) => {
  let response = await axios.get(
    'https://reqres.in/api/users',
    {
      params: { per_page: 4, page: page }
    })
  return response.data
}

export default fetchUsers