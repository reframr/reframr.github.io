var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    /* location.href = '/'; */
  }

  userData = userSession.loadUserData();

	document.getElementById('username').innerHTML = userData.username;
});
