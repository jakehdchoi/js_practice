// Async/Await: Modern Concurrency In JavaScript
// Coding Tech
// https://www.youtube.com/watch?v=NsQ2QIrQShU

// callback
readFile("file.txt", content => {
  console.log(content);
});

// promise
// readFile('config.json')
//   .then(...)
//   .catch(...);

// chaining promise
sleep(1000)
  .then(() => {
    console.log("one");
    return sleep(1000);
  })
  .then(() => {
    console.log("two");
  });

// async / await
async function getUsers() {
  let result = await fetchJSON("/users");
  console.log(result);
}

//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//-//

// callback style
fetchJSON("/user-profile")
  .then(user => {
    return fetchJSON(`/users/${user.id}/friends`);
  })
  .then(friendIDs => {
    let promises = friendIDs.map(id => {
      return fetchJSON(`/users/${id};`);
    });
    return Promise.all(promises);
  })
  .then(friends => console.log(friends));

// async style
async function getUserFriends() {
  try {
    let user = await fetchJSON("/users/me");
    let friendIDs = await fetchJSON(`/friends/${user.id}`);
    let promises = friendIDs.map(id => {
      return fetchJSON(`/users/${id}`);
    });
    let friends = await Promise.all(promises);
    console.log(friends);
  } catch (error) {
    console.log("An error occured", error);
  }
}
let promise = getUserFriends();
