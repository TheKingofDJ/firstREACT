import frontImage from '../assets/Restaurant_Frontansicht.png';

const Header = () => (
  <header className="item1">
    <h1 className="p1">Willkommen im Restaurant Schnitzel's</h1>
    <img src={frontImage} alt="Restaurant Logo" />
  </header>
);

export default Header;
