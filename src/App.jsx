import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeDoUsuario, setNomeDoUsuario] = useState('');

  return (
    <div>
      <input type="text" onBlur={(e) => setNomeDoUsuario(e.target.value)} />

      {nomeDoUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario = {nomeDoUsuario} />
          <ReposList nomeUsuario = {nomeDoUsuario} />
        </>
      )}
      
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toogle form</button> */}
    </div>
  )
}

export default App
