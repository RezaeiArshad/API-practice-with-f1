import './files.css/App.css'
import { ScreenSizeProvider } from './components/context'
import List from './components/list/list'

function Dashboard() {
  return (
    <>
      <List />
    </>
  )
}

function App() {


  return (
    <>
      <ScreenSizeProvider>
        <Dashboard />        
      </ScreenSizeProvider>
    </>
  )
}

export default App
