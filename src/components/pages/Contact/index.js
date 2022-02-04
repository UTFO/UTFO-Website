import React from 'react';
import './Contact.css';
import Logo from '../../../assets/logo_spearman.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit} className="form">
  //       <div className='contact-title'>SEND US A MESSAGE!</div> 
        
  //       <input type="text" placeholder="Name" />

  //       <input type="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} />

  //       <textarea placeholder="Write your message here..." rows='6' />      

  //       <input type="submit" value="Submit" />
        
  //     </form>
  //   );
  // }
  render() {
    return (
      <div className='form-container'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegAj-XyKDQT5x0AfKDoVap2mJKhG5cXl_HUBZe3eSo_k1N7A/viewform?embedded=true" height='1026'>Loading…</iframe>
        <div className='information'>
          <text>Get in touch with us here</text>
          <img src={Logo} alt='spearman logo'></img>
        </div>
      </div>
    );
  }

}


export default App;
