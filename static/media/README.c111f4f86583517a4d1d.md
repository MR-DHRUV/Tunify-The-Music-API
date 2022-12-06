# Tunify : The Music API
- A simple api where you can add your favourite music and help others to get into nirvana 🎵🎶

- You can also access to music and playlists added by others by seacrhing them with parametes like name, artist and category.
## Features

- Getting API key 
- Adding music and playlists
- Fetching music and playlists added by you
- Fetching all songs and playlists
- Querying music and playlists with parametes like name, artist and category.


## Endpoints

### Getting API key


```js
  POST https://api-tunify.azurewebsites.net/user/new
```

#### Body (json) :

| Parameter  | Type     | Description                           |
| :--------- | :------- | :-------------------------------------- |
| `email`    | `string` | **Required**               |
| `name`    | `string` | **Required**, min : 3, max : 20                |


#### response

```javascript
{
  "message": "Account created successflly, Please check your email for api key" 
}

```
<hr>

### Adding a song:

```js
  POST https://api-tunify.azurewebsites.net/music/new
```

#### Body (json) :

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `apiKey`     | `string` | **Required** |
| `songname`     | `string` | **Required** |
| `category`    | `string` | **Required**                 |
| `artist` | `string` | **Required** |
| `url` | `string` | **Required** |



#### response

```javascript

{
  "newSong": {
    "songname": "attention",
    "category": "edm",
    "artist": "charlie puth ",
    "url": "https://music.youtube.com/watch?v=vxUBYHz_q1I&feature=share",
    "username": "6b6e93be7ed62cfc6a06038aecf338dc",
  },
  "message": "Song Saved"
}

```
<hr>

### Adding a playlist

```js
  POST https://api-tunify.azurewebsites.net/playlist/new
```

#### Body (json) :

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `apiKey`     | `string` | **Required** |
| `playlistname`     | `string` | **Required** |
| `category`    | `string` | **Required**                 |
| `url` | `string` | **Required** |

#### response

```javascript
{
  "newPlayList": {
    "playlistname": "top 100 global august-2022",
    "category": "top-charts",
    "url": "https://www.youtube.com/playlist?list=PL4fGSI1pDJn6puJdseH2Rt9sMvt9E2M4i",
    "username": "6b6e93be7ed62cfc6a06038aecf338dc",
  },
  "message": "Playlist Saved"
}
```
<hr>

### Get all songs corresponding to given API key

```js
  POST https://api-tunify.azurewebsites.net/user/music
```

#### Body (json) :

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `apiKey`     | `string` | **Required** |

#### response

```javascript

{
  "Songs": [
    {
      "songname": "attention",
      "category": "edm",
      "artist": "charlie puth",
      "url": "https://music.youtube.com/watch?v=vxUBYHz_q1I&feature=share",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    },
    {
      "songname": "anime thighs",
      "category": "generic",
      "artist": "mc virgins, wonder",
      "url": "https://music.youtube.com/watch?v=prlr6XuoK6w&feature=share",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    }
    ...
  ]
}
```
<hr>

### Get all playlists corresponding to given API key

```js
  POST https://api-tunify.azurewebsites.net/user/playlist
```

#### Body (json) :

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `apiKey`     | `string` | **Required** |

#### response

```javascript

{
  "Playlist": [
    {
      "playlistname": "best",
      "category": "best",
      "url": "https://open.spotify.com/playlist/1TkzdrSSNyST2inQVH8bel?si=ec5ec6b150244a75",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    },
    {
      "playlistname": "top 100 global august-2022",
      "category": "top-charts",
      "url": "https://www.youtube.com/playlist?list=PL4fGSI1pDJn6puJdseH2Rt9sMvt9E2M4i",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    }
    ...
  ]
}
```

<hr>

### Get all songs

```js
  GET https://api-tunify.azurewebsites.net/music/all
```

#### response

```javascript

{
  "Songs": [
    {
      "songname": "attention",
      "category": "edm",
      "artist": "charlie puth",
      "url": "https://music.youtube.com/watch?v=vxUBYHz_q1I&feature=share",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    },
    {
      "songname": "anime thighs",
      "category": "generic",
      "artist": "mc virgins, wonder",
      "url": "https://music.youtube.com/watch?v=prlr6XuoK6w&feature=share",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    }
    ...
  ]
}
```
<hr>

### Get all playlists

```js
  GET https://api-tunify.azurewebsites.net/playlist/all
```



```javascript
{
  "Playlist": [
    {
      "playlistname": "best",
      "category": "best",
      "url": "https://open.spotify.com/playlist/1TkzdrSSNyST2inQVH8bel?si=ec5ec6b150244a75",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    },
    {
      "playlistname": "top 100 global august-2022",
      "category": "top-charts",
      "url": "https://www.youtube.com/playlist?list=PL4fGSI1pDJn6puJdseH2Rt9sMvt9E2M4i",
      "username": "6b6e93be7ed62cfc6a06038aecf338dc",
    }
    ...
  ]
}

```
<hr>

### Searching music 

**By name :** 
```js
  POST https://api-tunify.azurewebsites.net/music/search/{put song name here}
```

**By artist :** 
```js
  POST https://api-tunify.azurewebsites.net/music/artist/{put artist name here}

```
**By category :** 
```js
  POST https://api-tunify.azurewebsites.net/music/category/{put category  here}
```

<hr>

### Searching playlists 

**By name :** 
```js
  POST https://api-tunify.azurewebsites.net/playlist/search/{put playlist name here}
```

**By category :** 
```js
  POST https://api-tunify.azurewebsites.net/playlist/category/{put category  here}
```
<hr>

## Support

For any issue or query I'll love to hear at : developer.authify@gmail.com

**We love contributions ❤️** <br>Contribute to this api <a href="https://github.com/MR-DHRUV/Tunify-The-Music-API" target="_blank" rel="noopener noreferrer">here</a>


## Contact Me <br>


<a href="https://www.linkedin.com/in/dhruv-gupta-55034a228/" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" width="50px" height="50px">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://github.com/MR-DHRUV" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" width="50px" height="50px">
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="mailto://developer.authify@gmail.com" target="_blank" rel="noopener noreferrer">
  <img src="https://cdn-icons-png.flaticon.com/512/60/60543.png" alt="" width="50px" height="50px">
</a>

