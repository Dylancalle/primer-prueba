function Esbisiesto(numero) {
    let resultado = false
   if(numero % 100 == 0 && numero % 400 != 0)
    {
        resultado = false
    }else{
        resultado = true
    }
    if(numero % 4 == 0 && (numero % 100 != 0 || numero % 400 == 0))
    {
        resultado = true
    }else{
        resultado = false
    }
    return resultado
  }
  
  export default Esbisiesto;
  