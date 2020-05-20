var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    alert('Error: user is not signed in');
  }

  userData = userSession.loadUserData();
  document.getElementById('user-data').innerHTML =
    JSON.stringify(userData, '\t', 2);
});
