let usuarioYpassword = 'pepito2017,12345';
let nombreDeUsuario;
let password;

nombreDeUsuario = usuarioYpassword.substr(0,10);
password = usuarioYpassword.substr(11,17);

console.log(`El usuario ${nombreDeUsuario}, tiene como password: ${password}.`);