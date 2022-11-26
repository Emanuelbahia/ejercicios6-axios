import { useEffect, useState } from "react"
import Axios from "axios"
import "./assets/chuck.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

function App() {
  
  const [joke , setJoke] = useState("");
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0)
 

  useEffect( () => {
      
      //como las peticiones a la API tardan unos segundos y js pasa a la otra linea uso el async await
      //pero el async await no lo puedo usar en el useEffect, asi q lo hago en una funcion y la llamo !!
      chuckJoke();
  }, [])

  const chuckJoke = async () => {
      //cuando usamos get es para cargar la pagina de la API

      let result = await Axios.get("https://api.chucknorris.io/jokes/random")
      setJoke(result.data.value)
  }

  const add = () => {
      setLike(like + 1)
  }
  const rest = () => {
      setDislike(dislike + 1)
  }
  

  return ( 
      <div className="container-chuck">
          <img className="photo-chuck" src="../public/chuck.jpg" />
          <h2>El chiste es: </h2>
          <h3> { joke } </h3> <br />
          <button onClick={ chuckJoke }>New joke</button>
          <div className="icons-like-dislike">
              <ThumbUpIcon className="icon-like" onClick={add} />
              {like}
              <ThumbDownAltIcon className="icon-dislike" onClick={rest} />
              {dislike}
          </div>
      </div>
   );
}

export default App
