function Esbisiesto(numero) {
    let resultado = false
    if(numero % 400 == 0)
    {
        resultado= true
    }else{
        resultado= false
    } if(numero % 100 == 0 && numero % 400 != 0)
    {
        resultado = false
    }else{
        resultado = true
    }
    
    return resultado
  }
  
  export default Esbisiesto;
  