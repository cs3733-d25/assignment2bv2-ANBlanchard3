import './App.css'
import Title from './components/title'
import Intro from './components/intro'
import Hobby1 from './components/hobby1'
import Hobby2 from './components/hobby2'

function App() {
  return (
    <>
        <Title _class={"CS3733-D25"} teamNumber={52} hobby1={"running"} hobby2={"Videogames"}/>
        <Intro name1={"Adam Blanchard"} name2={"Ethan Ramoth"}/>
        <Hobby1/>
        <Hobby2/>

    </>
  )
}

export default App
