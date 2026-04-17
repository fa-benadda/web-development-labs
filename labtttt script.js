// Wait until DOM is fully loaded 
document.addEventListener("DOMContentLoaded", () => { 
    const form = document.getElementById("calculatorForm"); 
    const Display = document.getElementById("result"); 
    form.addEventListener("submit", function(e) { 
        e.preventDefault();  
        const n1 = parseFloat(document.getElementById("num1").value); 
        const n2 = parseFloat(document.getElementById("num2").value); 
        const op = document.getElementById("operation").value; 
        if (op === "add") {  
            Display.textContent = n1 + n2; 
        } else if (op === "sub") { 
            Display.textContent = n1 - n2; 
        } else if (op === "mult") { 
            Display.textContent = n1 * n2; 
        } else if (op === "div") { 
            if (n2 !== 0) { 
                Display.textContent = n1 / n2; 
            } else { 
                Display.textContent = "Division by zero"; 
            } 
 
        }  
    }); 
});