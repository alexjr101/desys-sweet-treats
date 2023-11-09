import './App.css'

function App() {

  return (
    <>
        <header className='container w-2xl max-w-screen-xl mx-auto p-8 flex justify-between items-center'>
            <h1 className='text-2xl'>DESY'S SWEET TREATS</h1>
            <nav className='hidden sm:flex w-1/2 justify-between'>
                <a>HOME</a>
                <a>ABOUT</a>
                <a>CONTACT</a>
                <button>ORDER</button>
            </nav>
            <img className='sm:hidden w-8'
                src='icons/hamburger-menu.svg'/>
        </header>
    </>
  )
}

export default App
