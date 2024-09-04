
import { Provider } from 'react-redux'
import './App.css'
import ToDoApp from './components/ToDoApp'

function App() {
  

  return (
    <Provider>
      <ToDoApp />
    </Provider>
  )
}

export default App
