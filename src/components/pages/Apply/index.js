import React from 'react';
import './Apply.css';

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

  render() {
    return (
      <div className="inner">
        <form onSubmit={this.handleSubmit} className="apply-form">
          <div className='join-title'><span>Join the Team!</span></div>

          <input type="text" placeholder="Name" />

          <input type="email" placeholder="Email" value={this.state.value} onChange={this.handleChange} />

          <textarea placeholder="Write your message here..." rows='6' />

          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }

}


export default App;
