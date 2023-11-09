export default function Header() {
    return <header className='container w-2xl max-w-screen-xl mx-auto p-8 flex justify-between items-center'>
        <h1 className='text-xl md:text-2xl'>DESY'S <span className="text-dark-pink">SWEET</span> TREATS</h1>
        <nav className='hidden sm:w-3/5 sm:flex md:w-1/2 justify-between items-center'>
            <a>HOME</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
            <button className='rounded-full text-dark-pink border-2 border-dark-pink px-8 py-2 hover:bg-dark-pink hover:text-white'>ORDER</button>
        </nav>
        <img className='sm:hidden w-8'
            src='icons/hamburger-menu.svg'/>
    </header>
}