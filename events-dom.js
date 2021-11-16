// Iteración#1

window.onload = () =>{
    btnClick();
    focusInput();
    valueInput();
};

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const eventLog = (event) =>{
    console.log(event)
}

const eventValue = (event) =>{
    console.log(event.target.value)
}

const btnClick = () => {
    document.getElementById("btnToClick").addEventListener("click", eventLog);
};


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = () =>{
    document.querySelector(".focus").addEventListener("focus", eventValue)
}

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.


const valueInput = () =>{
    document.querySelector(".value").addEventListener("input", eventValue)
}