function calculadoraCadenas (cadena){
    let resultado = 0;
        if (cadena!="")
        {
            let cadenaAux = cadena.split(/,|-/);
            for (let i = 0; i < cadenaAux.length ; i++){
                if (parseInt(cadenaAux[i]) <= 1000)
                {
                    resultado += parseInt(cadenaAux[i]);
                }
                
            }
        }
        return resultado; 
}

export default calculadoraCadenas;