function calcularArea() {
    const figura = prompt("¿de que figura quieres calcular el area?\nOpciones: cuadrado, rectangulo, triangulo")?.toLowerCase();

    let area = 0;

    switch (figura) {
        case "cuadrado":
            const lado = parseFloat(prompt("itroduce el lado del cuadrado:"));
            
            area = lado * lado;
            break;

            case "rectangulo":
                const baseRe = parseFloat(prompt("introduce la base del rectangulo:"));
                const alturaRe = parseFloat(prompt("introduce la altura del rectangulo:"));
                area = baseRe * alturaRe;
                break;


            case "triangulo":
                const baseTriangulo = parseFloat(prompt("introduce la base del triangulo:"));
                const alturaTriangulo = parseFloat(prompt("introduce la altura del triangulo:"));
                area = (baseTriangulo * alturaTriangulo) / 2;
                break;

         default:
            alert("figura no valida. usa cuadrado, rectangulo, o triangulo.");
            return;       
    }

    alert(`el area del ${figura} es: ${area.toFixed(2)}`);
    
}

calcularArea();