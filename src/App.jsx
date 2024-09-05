
import { Provider } from 'react-redux'
import './App.css'
import ToDoApp from './components/ToDoApp'
import store from './Redux/Store/store'

function App() {
  

  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  )
}

export default App;
