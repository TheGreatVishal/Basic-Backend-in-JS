require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "TheGreatVishal",
    "id": 111722918,
    "node_id": "U_kgDOBqjBpg",
    "avatar_url": "https://avatars.githubusercontent.com/u/111722918?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/TheGreatVishal",
    "html_url": "https://github.com/TheGreatVishal",
    "followers_url": "https://api.github.com/users/TheGreatVishal/followers",
    "following_url": "https://api.github.com/users/TheGreatVishal/following{/other_user}",
    "gists_url": "https://api.github.com/users/TheGreatVishal/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/TheGreatVishal/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/TheGreatVishal/subscriptions",
    "organizations_url": "https://api.github.com/users/TheGreatVishal/orgs",
    "repos_url": "https://api.github.com/users/TheGreatVishal/repos",
    "events_url": "https://api.github.com/users/TheGreatVishal/events{/privacy}",
    "received_events_url": "https://api.github.com/users/TheGreatVishal/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vishal Solanki",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-08-22T04:16:39Z",
    "updated_at": "2024-01-07T05:44:15Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter')
})

app.get('/login',(req,res)=>{
    res.send("<h1> Give your Login details </h1>")
})

app.get('/testing',(req,res)=>{
    let x = Math.floor(Math.random()*1000);
    res.send(`${x}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})