var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    location.href = '/';
  }

  userData = userSession.loadUserData();
	userJSON = userData.toJSON();
	document.getElementById('user-name').innerHTML = userJSON.name;
});
