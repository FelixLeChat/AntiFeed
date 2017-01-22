const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

function json(res) {
  return res.json();
}

function searchByKeyword(keyword) {
    return fetch('/api/compare', {
      method: 'post',
      headers: jsonHeaders,
      body: JSON.stringify({query:keyword}),
    })
    .then(json)
    .catch(err => console.log(err));
}

function searchByHashtags(hashtag) {
    return fetch('/api/bubble', {
      method: 'post',
      headers: jsonHeaders,
      body: JSON.stringify({query:hashtag}),
    })
    .then(json)
    .catch(err => console.log(err));
}

function searchByUser() {
    return fetch('/api/feed', {
      credentials: 'include'
    })
    .then(res => {;
      if (res.status === 403) {
        console.log('reject');
        return Promise.reject('need auth');
      }
    });
}

module.exports = {
  searchByUser,
  searchByKeyword,
  searchByHashtags
}