import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <span
        className="glyphicon glyphicon-chevron-up up-arrow"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      ></span>
      <span>&copy; Jonelle Bowen 2024</span>
    </footer>
  );
}

export default Footer;
