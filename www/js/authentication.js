//buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authAnonymousLyButton = document.getElementById('authAnonymousLyButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');

//Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

//Displays
var displayName = document.getElementById('displayName');

//cadastrar usuario
createUserButton.addEventListener('click', function() {
	firebase
		.auth()
		.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
		.then(function () {
			alert('Bem Vindo ' + emailInput.value);
		})
		.catch(function(error) {
			console.error(error.code);
			console.error(error.message);
			alert('falha ao cadastrar, verifique o erro no console.')
		});
});

//autenticar com email e senha
authEmailPassButton.addEventListener('click', function(){
	firebase
		.auth()
		.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
		.then(function (result){
			console.log(result);
			displayName.innerText =  'Bem Vindo', + emailInput.value;
			alert('Autenticado' + emailInput.value);
		})
		.catch(function (error){
			console.error(error.code);
			console.error(error.message);
			alert('Falha ao cadastrar, Verifique o erro no console.')
		});
});

//sair/deslogar
logOutButton.addEventListener('click', function () {
	firebase
		.auth()
		.signOut()
		.then(function () {
			displayName.innerText = 'Você não está autenticado';
			alert('Você se deslogou');
		}, function (error) {
			console.error(error);
});
});