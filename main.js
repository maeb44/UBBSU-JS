setColour()
calc()
function validateForm(){
	let input = document.getElementsByClassName('inp-sec')
	phoneRegex=/^\+375[0-9]{9}$/;
	if(input[0].value!=='' 
		&& phoneRegex.test(input[0].value)==false){
			alert("неправильный номер")
			return false;
		}
	if(input[1].value==='' && input[0].value===''){
			alert("введите одно из полей email или tel");
			return false;
		}
}
function setColour(){
	let big = document.getElementById('big');
	let red = document.getElementById('red');
	let green = document.getElementById('green');
	let black = document.getElementById('black');
	red.addEventListener("mouseenter", ()=>{
		big.style.background="red"
	})
	green.addEventListener("mouseenter", ()=>{
		big.style.background="greenyellow"
	})
	black.addEventListener("mouseenter", ()=>{
		big.style.background="black"
	})
}

function calc(){
	let regex=/[0-9]/;
	let input = document.getElementById('calc');
	document.addEventListener('click',(event)=>{
		if(event.target.classList.contains('number')){
			input.value+=event.target.textContent
			console.log(input.value)
		}
		if(event.target.classList.contains('operand')){
				if(regex.test(input.value[input.value.length-1])){
					input.value+=event.target.textContent
			}
		}
		if(event.target.classList.contains('result')){
			input.value=eval(input.value)
			if(isNaN(input.value) || !isFinite(input.value) || input.value == null){
				input.value="Неправильное значение"
				setTimeout(()=>input.value="",2000);
			}
		}
		if(event.target.classList.contains('reset')){
			input.value=''
		}
	})

	
}






