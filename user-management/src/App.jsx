import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Button } from 'semantic-ui-react'
import UsersCollection from './UsersCollection'

const App = () => {
  const [users, setUsers] = useState([])
  const [response, setResponse] = useState({})
  const fetchUsers = async (page) => {
    let response = await axios.get(
      'https://reqres.in/api/users',
      {
        params: { per_page: 4, page: page }
      })
    setUsers(response.data.data)
    setResponse(response.data)
  }
  useEffect(() => fetchUsers(), [])

  const buttons = () => {
    let { page, total_pages } = response
    return (
      <>
        <Button
          secondary
          disabled={page === 1}
          size="mini"
          content="<<"
          onClick={() => fetchUsers(page - 1)}
        />
        <Button
          secondary
          disabled={page >= total_pages}
          size="mini"
          content=">>"
          onClick={() => fetchUsers(page + 1)}
        />
      </>
    )
  }
  return (
    <Container>
      <h1>User Management</h1>
      <UsersCollection users={users} />
      {buttons()}
    </Container>
  )
}

export default App
