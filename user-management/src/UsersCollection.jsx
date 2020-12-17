import React from 'react'
import UserDisplay from './UserDisplay'
import { List } from 'semantic-ui-react'

const UsersCollection = ({ users }) => {
  return (
    <List>
      {users.map(user => <UserDisplay key={user.id}user={user} />)}
    </List>
  )
}

export default UsersCollection
