var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    /* location.href = '/'; */
		document.getElementById('username').innerHTML = "username";
  }

  userData = userSession.loadUserData();

	document.getElementById('username').innerHTML = userData.username;
});
