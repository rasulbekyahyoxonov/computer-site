import './App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Главная from './page/Главная'
import Курсы from './page/Курсы'
import Расписание from './page/Расписание'
import logo from './pictures/logo.png'
function App() {

  const openNav = () => {
    document.querySelector('.nav-link').classList.toggle('nav-link-toggle');
    document.querySelector('.dark-div').classList.toggle('dark-div-toggle');
  }

  const closeNav = () => {
    document.querySelector('.nav-link').classList.toggle('nav-link-toggle');
    document.querySelector('.dark-div').classList.toggle('dark-div-toggle');
  }

  const setActive = ({isActive}) => isActive ? 'active-a' : ''

  return (
    <>
      <nav className='all-nav'>
        <Link to='/'>
          <img src={logo} className='logo' alt="logo" />
        </Link>
        <div>
          <img className="open-icon" onClick={openNav} src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" alt="none" />
        </div>
        <div className="dark-div" onClick={closeNav}></div>
        <div className='nav-link'>
          <div className='hamburgerDiv' onClick={openNav}>
              <div className='hamburger xd'></div>
              <div className='hamburger dx'></div>
          </div>
          <ul className='nav-ul'>
            <li><NavLink to='/' className={setActive}>Главная</NavLink></li>
            <li><NavLink to='/Курсы' className={setActive}>Курсы</NavLink></li>
            <li><NavLink to='/Расписание' className={setActive}>Расписание</NavLink></li>
            <li><NavLink>Преподаватели</NavLink></li>
            <li><NavLink>Рассылка</NavLink></li>
            <li><NavLink>Контакты</NavLink></li>
          </ul>
          <Link to='/' className='btn-shop-a'>
            <button className='btn-shop'>Зайти в кабинет</button>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Главная />} />
        <Route path='/Курсы' element={<Курсы />} />
        <Route path='/Расписание' element={<Расписание />} />
      </Routes>
    </>
  );
}

export default App;