import React from 'react'
import { List, Image } from 'semantic-ui-react'


const UserDisplay = ({ user }) => {
  return (
    <List.Item>
      <Image avatar src={user.avatar} />
      <List.Content>
        <List.Header as='p'>{user.first_name + user.last_name}</List.Header>
        <List.Description>
          <a href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

export default UserDisplay
