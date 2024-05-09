import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation/Navigation'
import Layout from './components/Layout/Layout'
import NewCoasterForm from './components/NewCoasterForm/NewCoasterForm'

function App() {

  return (
    <div className="App">
      <Navigation />
      <NewCoasterForm />
      <Layout />
    </div>
  )
}

export default App