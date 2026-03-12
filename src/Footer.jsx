function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="footer">
      <p className="p-footer">
        We're open until {props.closeHour}:00. Come visit us or order online.  {new Date().toLocaleTimeString()}
      </p>
      <button className="btn-footer">Order Now</button>
    </div>
  );
}

export default Footer;
