const app = document.getElementById('application')

const fetchUsers = async (page) => {
  // Version 1
  // let response = await (await fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)).json()
  // return response

  // Version 1.b
  return await (await fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)).json()

  // Version 2
  // return fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(json => {
  //     return json
  //   })



  // Version 3 (using Axios)
  // let response = await axios.get(
  //   'https://reqres.in/api/users',
  //   {
  //     params: { per_page: 4, page: page }
  //   })
  // return response.data
}

const formatUserDisplay = user => {
  let html = `<img class="ui avatar image" src="${user.avatar}">`
  html += `<div class="content">`
  html += `<p class="header">${user.first_name} ${user.last_name}</p>`
  html += `<a href="mailto:${user.email}" class="header">${user.email}</a>`
  html += `</div>`
  return html
}

const displayNavigation = response => {
  let { page, total_pages } = response
  let buttonDisplayNode, prevLink, nextLink
  buttonDisplayNode = document.getElementById('buttons')
  if (buttonDisplayNode) {
    buttonDisplayNode.innerHTML = null
  } else {
    buttonDisplayNode = document.createElement('div')
    buttonDisplayNode.id = "buttons"
  }
  prevLink = `<button class="mini ui secondary button" disabled onclick="displayUsers({page: ${page - 1}})"><<</button>`
  nextLink = `<button class="mini ui secondary button" disabled onclick="displayUsers({page: ${page + 1}})">>></button>`
  prevLink = page !== 1 ? prevLink.replace('disabled', '') : prevLink
  nextLink = page < total_pages ? nextLink.replace('disabled', '') : nextLink
  buttonDisplayNode.innerHTML = prevLink + nextLink
  app.appendChild(buttonDisplayNode)
}

const displayUsers = async (options = {}) => {
  let { users, page } = options
  let usersList
  if (typeof (users) !== 'undefined') {
    usersList = document.createElement('div')
    usersList.id = 'users-list'
    usersList.classList.add('ui', 'list')
    app.appendChild(usersList)
  } else {
    let response = await fetchUsers(page)
    users = response.data
    usersList = document.getElementById('users-list')
    usersList.innerHTML = null
    displayNavigation(response)
  }

  users.forEach(user => {
    let userDisplayNode = document.createElement('div')
    userDisplayNode.classList.add('item')
    let html = formatUserDisplay(user)
    userDisplayNode.innerHTML = html
    usersList.appendChild(userDisplayNode)
  })
}

document.addEventListener('DOMContentLoaded', async () => {
  let response = await fetchUsers()
  let users = response.data
  displayUsers({ users: users })
  displayNavigation(response)
})