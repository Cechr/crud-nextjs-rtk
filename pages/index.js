import {useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {SET_NOMBRE} from "@/redux/reducers/perfilSlice";

function DisplayName() {
    const {nombre} = useSelector((state) => state.perfil)
    return (
        <p>DisplayName: {nombre}</p>
    )
}

export default function Home() {
    const nombre = useRef()
    const dispatch = useDispatch()

    const UseName = () => {
        console.log(nombre.current.value)
        dispatch(SET_NOMBRE(nombre.current.value))
    }

  return (
    <div>
      <p>Cuál es tu nombre?</p>
        <input type="text" placeholder="Tu nombre" ref={nombre}/>
        <button onClick={UseName}>Enviar</button>
        <DisplayName/>
    </div>
  )
}
