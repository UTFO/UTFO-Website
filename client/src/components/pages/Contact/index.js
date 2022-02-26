import './Contact.css';
import Logo from '../../../assets/logo_spearman.png';

function Contact() {
  return (
    <div className='contact-form inner'>
      <iframe title="Contact form" src="https://docs.google.com/forms/d/e/1FAIpQLSegAj-XyKDQT5x0AfKDoVap2mJKhG5cXl_HUBZe3eSo_k1N7A/viewform?embedded=true">Loading…</iframe>
      <div className='information'>
        <h2>Get in touch with us here</h2>
        <img src={Logo} alt='spearman logo'></img>
        <div>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com/company/university-of-toronto-freelancers-organization-utfo/"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
