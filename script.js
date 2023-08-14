// connecting to HTML elements
input = document.getElementById('inputBox');
input.value = '0';
question = document.getElementById('question');

// main
answer = 0;
number = 0;
document.addEventListener("keyup", function(event){
if(event.key == 'Enter'){
    if(input.value == answer){
        input.value = '';
        [num1, num2] = sum();
        [num3, num4] = diff();
        [num5, num6] = prod();

        number = number + 1;
        if(number%3==1){
            question.textContent = num1 + ' + ' + num2;
            answer = num1 + num2;
        }
        if(number%3==2){
            question.textContent = num3 + ' - ' + num4;
            answer = num3 - num4;
        }
        if(number%3==0){
            question.textContent = num5 + ' x ' + num6;
            answer = num5 * num6;
        }
    }
    else{
        input.value = '';
    }
}
});

// question.textContent = 

// functions for generating random numbers
function sum(){
    let num_a = Math.floor(Math.random()*900)+100;
    let num_b = Math.floor(Math.random()*900)+100; 
    return [num_a, num_b];
}
function diff(){
    let num_a = Math.floor(Math.random()*900)+100;
    let num_b = Math.floor(Math.random()*900)+100; 
    return [Math.max(num_a, num_b), Math.min(num_a, num_b)];
}
function prod(){
    let num_a = Math.floor(Math.random()*90)+10;
    let num_b = Math.floor(Math.random()*90)+10; 
    return [num_a, num_b];
}

