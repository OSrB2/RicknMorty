import './Header.css';
import Logo from '../../assets/logoRnM.png';

function Header() {
  return (
    <div className='Header'>
      <div className='Logo'>
        <img src={Logo} alt='Logo Ricky and Morty' title='Ricky and Morty' />
      </div>
      <div className='NavBar'>
        <a href='#'>Home</a>
        <a href='#'>Criar</a>
      </div>
    </div>
  );
}

export { Header };
