import MenuItem from './MenuItem';

const menuItems = [
  { name: 'Schnitzel Wiener Art', price: '15€', side: 'Pommes Frites' },
  { name: 'Schnitzel Jägersoße', price: '16€', side: 'Pommes Frites' },
  { name: 'Schnitzel Zigeunersoße', price: '16€', side: 'Pommes Frites' },
  { name: 'Schnitzel Rahmsoße', price: '16€', side: 'Pommes Frites' },
  { name: 'Schnitzel NUR FLEISCH', price: '20€', side: 'EXTRA SCHNITZEL, KEIN SALAT' },
];

const Menu = () => (
  <section>
    <h2 className="lel2">Speisekarte</h2>
    <p>Unsere Speisekarte bietet eine Vielzahl leckerer Gerichte, vor allem FLEISCH</p>
    <table>
      <thead>
        <tr>
          <th>Gericht</th>
          <th>Preis</th>
          <th>Beilage</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </tbody>
    </table>
  </section>
);

export default Menu;
