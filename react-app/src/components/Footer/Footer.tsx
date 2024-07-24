import './Footer.scss';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
function Footer() {
  return (
    <footer className="footer">
      <span
        className="glyphicon glyphicon-chevron-up up-arrow"
        title="Scroll to top"
        onClick={scrollToTop}
      ></span>
      <span>&copy; Jonelle Bowen 2024</span>
    </footer>
  );
}

export default Footer;
