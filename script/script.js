const computerNumber = 6;
let userNumber; 
//userNumber=prompt("Угадай число от 1 до 100");

//console.log (isNaN(userNumber));

function inputNumber(){
    userNumber=prompt("Угадай число от 1 до 100");
    
    if (userNumber===null){
         alert("Игра окончена");
         return;
        }
    if(isNaN(userNumber)) {      
            alert("Введите число");
            inputNumber();
    }
    if (userNumber==computerNumber) {
        alert("Вы угадали");
    }
    if (userNumber>computerNumber) {
        alert("Загаданное число меньше");
        inputNumber();
    }
    if ((userNumber>0)&&(userNumber<computerNumber)) {
        alert("Загаданное число больше");
        inputNumber();
    }
    
}
inputNumber();