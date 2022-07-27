function calculadora(){
    var altura = (document.getElementById("altura").value)/100
    var peso = document.getElementById("peso").value

    var imcpessoa = peso/altura**2;

    if (imcpessoa<18.5){
        window.alert("VAI COMEEER!")
    }else if(imcpessoa<24.9){
        window.alert("De boa")
    }
    else if(imcpessoa<29.9){
        window.alert("Ta piorando (SOBREPESO)")
    }
    else if(imcpessoa<39.9){
        window.alert("OBESIDADE")
    }
    else if(imcpessoa>39.9){
        window.alert("OBESIDADE MORIDA")
    }
}