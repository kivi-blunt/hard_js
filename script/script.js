let userNumber; 

let counter = 10;
inputNumber();
function inputNumber(){
    let computerNumber = 6;
    function newGame () {
        if(confirm("Хотели бы сыграть еще раз?")){
            counter = 10;
            inputNumber();
         }          
         return;
    };
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
       newGame();
         
    }
    if (counter == 0) {
        alert("Попытки закончились");
        newGame();}
    if (counter != 0) {
     
    
        if (userNumber>computerNumber) {
         alert("Загаданное число меньше, осталось "+ --counter +" Попыток");
         inputNumber();
            
    }
        if ((userNumber>0)&&(userNumber<computerNumber)) {
            alert("Загаданное число больше, осталось "+ --counter +" Попыток");
            inputNumber();
    }
}
}

