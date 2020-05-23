var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    /* location.href = '/'; */
		document.getElementById('username-profile').innerHTML = "username";
  }

  userData = userSession.loadUserData();

	document.getElementById('username-profile').innerHTML = userData.username;
});
