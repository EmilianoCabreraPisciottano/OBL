import { useState, useEffect } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(2);
    const [contador3, setContador3] = useState(2);

    const contar = () => {
        console.log('click');  
        setContador(contador+1); 
    }

    // primero modo del use effect comportamiento natural por defecto
    // useEffect(() =>{
    //     document.title = `Cuenta: ${contador}`
    // })

    // segunda version con array de dependencias vacio que se ejecuta unicamente al cargarse el componente por primera vez
    useEffect(() =>{
        document.title = `Cuenta: ${contador}`
        console.log('efecto1');
        
    },[])

    // ejecutar el efecto secundario cada vez que escuche un cambio en el estado que yo le diga que tiene asociado
        useEffect(() =>{
        document.title = `Cuenta: ${contador2}`
        console.log('efecto2');

    },[contador2, contador])

    // useEffect(() => {
    // //   la logica propia del efecto
    
    // }, [])
    

  return (
    <div>
        <input type="button" value="Presionar" onClick={contar}/>
        <h2>{contador}</h2>
        <input type="button" value="Presionar 2" onClick={() =>{
            setContador2(contador2 + 1)
        }} />
    </div>
  )
}

export default Contador