import './App.css'
import Title from './components/title'
import Intro from './components/intro'
import Hobby1 from './components/hobby1'

function App() {
  return (
    <>
        <Title _class={"CS3733-D25"} teamNumber={52} hobby1={"running"} hobby2={""}/>
        <Intro name1={"Adam Blanchard"} name2={""}/>
        <Hobby1/>

    </>
  )
}

export default App
