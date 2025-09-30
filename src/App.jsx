import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TaskList from './components/TaskList' // o TaskList

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container">
        <TaskList />
      </main>
      <Footer />
    </>
  )
}

export default App