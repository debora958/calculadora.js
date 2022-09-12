function calculadora(num1, num2, op){

    let numero1 = num1
    let numero2 = num2
    let operador = op

    if(operador == '+'){
        let result = numero1 + numero2
        return (result)
    } else if(operador == '-'){
        let result = numero1 - numero2
        return (result)
    } else if(operador == '*'){
        let result = numero1 * numero2
        return (result)
    } else if(operador == '/'){
        let result = numero1 / numero2
        let resultdoResto = numero1 % numero2

        if(resultdoResto != 0){
            return "O resultado é: " + (result) + "O resto é: " + (resultdoResto)
        
        }else
            return "O resultado é: " + (result)
    } 
    }


console.log(calculadora(5,3,'-'))