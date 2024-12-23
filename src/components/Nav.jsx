import { headerLogo } from '../assets/images'
import { hamburger  } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full shadow-md'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo} 
                alt="Nike_Logo" 
                width={130}
                height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray 
                      transition duration-300 hover:text-coral-red"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
            <div className='space-x-16 max-lg:hidden'>
                <button 
                  className="btn"
                >
                  Sign Up
                </button>

                <button
                  className='text-lg font-medium text-slate-gray font-montserrat transition 
                  duration-300 hover:text-coral-red'
                >
                  Login
                </button>
            </div>
            <div className="hidden max-lg:block cursor-pointer">
                  <img 
                    src={hamburger} 
                    alt="hamburgerMenu"
                    width={25}
                    height={25}  
                  />
            </div>
        </nav>
    </header>
  )
}

export default Nav