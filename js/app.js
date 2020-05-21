var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    location.href = '/';
  }

  userData = userSession.loadUserData();

	for (var i = 0; i < userData.length; i++){
		if (obj[i] == 'name'){
			 x = obj[i].name;
		}
	}

	document.getElementById('user-name').innerHTML = x;
});
