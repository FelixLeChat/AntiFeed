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
      return res.json();
    });
}

function authenticate(tokens) {
  return fetch('/auth/twitter/callback', 
  {
    method: 'post',
    headers: jsonHeaders,
    credentials: 'include',
    body: JSON.stringify(tokens),
  })
  .then(res => {
    console.log(res);
  })
}

function buildTokensUrl(path, tokens) {
  return `${path}?oauth_token=${tokens.oauth_token}&oauth_verifier=${tokens.oauth_verifier}`;
}

function getTokens() {
  return {
    oauth_token: localStorage.getItem("oauth_token"),
    oauth_verifier: localStorage.setItem("oauth_verifier")
  }
}

module.exports = {
  authenticate,
  searchByUser,
  searchByKeyword,
  searchByHashtags
}