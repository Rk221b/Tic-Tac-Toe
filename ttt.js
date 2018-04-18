//Restart game button

var restart = document.querySelector("#b");
 
//Grabs all squares
var squares = document.querySelectorAll('td');

//Clear all squares

function clearboard() {
    
    for(var i = 0 ; i < squares.length ; i++) {
        
    squares[i].textContent = '' ;        
        
    }

}

restart.addEventListener("click",clearboard);

//check the square marker

function changemaker() {
    
    if(this.textContent === '') {
        
        this.textContent = 'X';
    }
    else if(this.textContent === 'X') {
        
        this.textContent = 'O';
    }
    else {
        
        this.textContent = '';
    }
}

for(var i = 0 ; i < squares.length ; i++) {
        
    squares[i].addEventListener('click',changemaker);        
        
    }