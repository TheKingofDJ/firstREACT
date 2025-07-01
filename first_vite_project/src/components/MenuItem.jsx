const MenuItem = ({ name, price, side }) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
    <td>{side}</td>
  </tr>
);

export default MenuItem;
