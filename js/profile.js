var userData = {};

window.addEventListener('load', (event) => {
  if (!userSession.isUserSignedIn()) {
    /* location.href = '/'; */
		document.getElementById('username-profile').innerHTML = "username";
  }

  userData = userSession.loadUserData();

	document.getElementById('username-profile').innerHTML = userData.username;
});

filename = document.getElementById("filename");

let options = {
  encrypt: false
}

function uploadFile() {
	userSession.putFile(filename, HTMLInputElement.files, options);
}
