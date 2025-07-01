const ContactBox = () => (
  <div>
    <h3>Kontakt</h3>
    <p>Telefon: 06431 123456</p>
    <p>Email: <a href="mailto:lele@lele.lele">lele@lele.lele</a></p>
    <button className="button" onClick={() => alert('Reservierung erfolgreich!')}>
      Reservieren
    </button>
  </div>
);

export default ContactBox;
