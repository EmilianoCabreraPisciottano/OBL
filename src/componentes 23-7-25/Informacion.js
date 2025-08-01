// const Informacion = (props) => {
//   return (
//     <p>Hola {props.nombre} {props.apellido}!</p>
//   )
// }

// export default Informacion

// -------------------------------------------------------------------

// const Informacion = props => {
//   return (
//     <p>Hola {props.nombre} {props.apellido}!</p>
//   )
// }

// export default Informacion

// -------------------------------------------------------------------
// const Informacion = props => {
//     let {nombre, apellido} = props
//   return (
//     <p>Hola {nombre} {apellido}!</p>
//   )
// }

// export default Informacion
// -------------------------------------------------------------------

const Informacion = ({nombre, apellido}) => {

    return (
    <p>Hola {nombre} {apellido}!</p>
  )
}

export default Informacion
