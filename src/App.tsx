// Importando o componente Card do arquivo correspondente
import Card from "./components/Card/Card"
import Contador from "./components/Contador/Contador"
import Task from "./components/Task/Task"

// Definindo o componente principal da aplicação
function App() {
  return (
    // Renderizando dois componentes Card através de fragment, cada um com títulos e descrições diferentes
    <>
      {/* Primeiro Card */}
      {/* <Card titulo="React" descricao="Biblioteca com JS" /> */}
      {/* Segundo Card */}
      {/* <Card titulo="Spring" descricao="Framework de Java" /> */}

      {/* <Contador /> */}

      <Task/>
    </>
  )
}

// Exportando o componente App para que ele possa ser utilizado em outros lugares
export default App
