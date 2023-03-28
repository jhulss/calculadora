function calculadoraCadenas (cadena){
    let resultado = 0;
        if (cadena!="")
        {
            let cadenaAux = cadena.split(/,|-/);
            for (let i = 0; i < cadenaAux.length ; i++){
                resultado += parseInt(cadenaAux[i]);
            }
        }
        return resultado; 
}

export default calculadoraCadenas;