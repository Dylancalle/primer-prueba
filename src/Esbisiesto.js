function Esbisiesto(numero) {
    let resultado = false
    if(numero % 400 == 0)
    {
        resultado= true
    }else{
        resultado= false
    }
    return resultado
  }
  
  export default Esbisiesto;
  