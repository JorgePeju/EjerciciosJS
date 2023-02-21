//4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos) //
const USER = 'usuario';
const PASS = 'password';
let attempts = 3;
let inputuser;
let inputpass;

do {
    inputuser = prompt('Escribe tu usuario');
    inputpass = prompt('Escribe tu contraseña');
    attempts--
} while ((inputuser != USER ||  inputpass != PASS) && attempts > 0); 

// otra solución 

const userC = "admin";
const passC = "admin";
var user, pass;
var intentos = 3;
do{
  user =  prompt('Usuario');
  pass =  prompt('Contraseña');
  intentos--;
}while((user!=userC || pass!=passC) && intentos>0);

if(user==userC && pass==passC){
  alert('Bienvenid@');
}else{
  alert('Intentos agotados');
}