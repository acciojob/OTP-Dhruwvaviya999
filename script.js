//your JS code here. If required.

const codes = document.querySelectorAll(".code");


codes.forEach((code, i)=>{
	code.addEventListener("input", (e) => {
		const currentInput = e.target;
		const nextInput = codes[i + 1];

		if(currentInput && nextInput){
			nextInput.focus();
		};
	});

	code.addEventListener("keydown", (e) => {
		let prevInput = codes[i - 1]; 
		if(e.code === "Backspace" && !e.target.value && prevInput){
			prevInput.focus();
		}
	});
});

function handleFocus(e){
	
}