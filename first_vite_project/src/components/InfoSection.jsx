import AddressBox from './AddressBox';
import OpeningHours from './OpeningHours';
import ContactBox from './ContactBox';

const InfoSection = () => (
  <section>
    <h2>Über uns</h2>
    <div className="flex_container">
      <AddressBox />
      <OpeningHours />
      <ContactBox />
    </div>
  </section>
);

export default InfoSection;
