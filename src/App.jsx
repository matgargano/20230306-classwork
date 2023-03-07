
import Button from "./components/Button"
import Reverser from "./components/Reverser"

function App() {

  return (
    <>
    <Reverser />
    <Button disabled={true} onClick={() => true}><h3>Click on Me!</h3></Button>
    </>
  )
}

export default App
