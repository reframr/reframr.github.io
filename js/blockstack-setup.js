var appConfig = new blockstack.AppConfig(
  ['email', 'publish_data', 'store_write'], // app access scopes
  // You also can pass
  // appDomain
  // redirectPath
  // manifestPath
);

var userSession = new blockstack.UserSession({
  appConfig,
});

function signOut() {
  // We pass url to redirect after signing out
  blockstack.signUserOut('/');
}

function saveFileToGaia() {
  var fileDetails = getFileDetailsFromForm();
  console.log(fileDetails);
  userSession.putFile(fileDetails.name, fileDetails.content, {
    encrypt: fileDetails.encrypt,
    // contentType (You can set a Content-Type header for unencrypted data)
    // sign (You can sign the data with using Users Private Key)
  }).then(function() {
    alert('File: ' + fileDetails.name + ' saved');
  });
}
