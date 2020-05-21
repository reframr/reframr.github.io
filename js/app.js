var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    location.href = '/';
  }

  userData = userSession.loadUserData();
	x = JSON.stringify(userData, '\t', 2);
  document.getElementById('user-name').innerHTML = x.name;
});
