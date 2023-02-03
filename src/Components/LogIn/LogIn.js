import { Component } from 'react'


const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
    sex: 'none',
    country: '',

  };


  export default class Form extends Component {
    state = {
      ...INITIAL_STATE
    };
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      // fetch().then(() => {})
      if(this.state.password === this.state.confirmPassword){
        this.setState({ ...INITIAL_STATE });
      }
      else{
        alert("Check your passwords!")
      }
    };
    handleChange = (event) => {
      const { name, value, type, checked } = event.target;
      console.log(name, value, type, checked);
      this.setState({ [name]: type === "checkbox" ? checked : value });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.email}
            type="text"
            name="email"
            onChange={this.handleChange}
          />
          <input
            value={this.state.login}
            type="text"
            name="login"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            type="password"
            name="password"
            onChange={this.handleChange}
          />
          <input
            value={this.state.confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
          />
          <input
            value='Male'
            type="radio"
            name="sex"
            onChange={this.handleChange}
          /><input
            value='Female'
            type="radio"
            name="sex"
              onChange={this.handleChange}
            />
            <select name='country' value={this.state.country} onChange={this.handleChange}>
                <option value='US'>USA</option>
                <option value='UK'>United Kingdom</option>
                <option value='UA'>Ukraine</option>
            </select>
          <label>
            <input
              type="checkbox"
              checked={this.state.agreed}
              name="agreed"
              onChange={this.handleChange}
            />
            I Agree
          </label>
          <button
            style={{ display: this.state.agreed ? "inline-block" : "none" }}
          >
            Login
          </button>
        </form>
      );
    }
  }