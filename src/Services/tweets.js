

const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

function json(res) {
  return res.json();
}

function searchByKeyword(keyword) {
    return fetch('/compare', {
      methode: 'POST',
      headers: jsonHeaders,
      body: JSON.stringify({keyword}),
    })
    .then(json)
    .catch(err => console.log(err));
}

function searchByUser() {
    return fetch('/feed', {
      credentials: 'include'
    })
    .then(res => {
      console.log(res);
      if (res.status === 403) {
        console.log('reject');
        return Promise.reject('need auth');
      }
    });
}

module.exports = {
  searchByUser,
  searchByKeyword,
}