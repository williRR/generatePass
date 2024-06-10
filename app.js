// funcionalidad de agregar mas caracteres a mi contrasenia
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');
let cantidadInput = document.getElementById('cantidad');
let stageDiv = document.getElementById("stage");
let stageDiv2 = document.getElementById("stage2");
let generatePas= document.getElementById('generateButton');
let cantidad = parseInt(cantidadInput.value);

  function plus() {
    cantidad+= 1;
    cantidadInput.value = cantidad;
  }

  function minus() {

    if (cantidad <= 8) {
        alert('La cantidad minima es 8');
    }else  {
      cantidad -= 1;
      cantidadInput.value = cantidad;
    }
  }

  
plusBtn.addEventListener('click',plus);
plusBtn.addEventListener('click',minus);




const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePassword2(){
    let password = "";

         for (let i=0; i<cantidad; i++){
            let randomN = Math.floor(Math.random() * characters.length);
            password += characters[randomN];
            stageDiv2.textContent = password;
        }
      

}

function generatePassword(){
    let password = "";

         for (let i=0; i<cantidad; i++){
            let randomN = Math.floor(Math.random() * characters.length);
            password += characters[randomN];
            stageDiv.textContent = password;
        } 

        generatePassword2();

}


generatePas.addEventListener('click', generatePassword);