var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    /* location.href = '/'; */
  }

  userData = userSession.loadUserData();
  document.getElementById('user-data').innerHTML =
    JSON.stringify(userData, '\t', 2);
});
