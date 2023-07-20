import React, { Component } from 'react';
import { Items } from './Menu';
import './Navbar.css'

class Navbar extends Component {
  state = { press: false}

  handleCLick = () => {
    this.setState({ press: !this.state.press })
  }
  render() {
    return(
      <nav className='NavbarItems'>
        <a className='Nav-logo' href='/'>EtaTryKoro</a>
        <div className="bars" onClick={this.handleCLick}>
        <i className={this.state.press ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={this.state.press ? 'nav-menu-bar' : 'nav-menu'}>
          {Items.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.id} href={item.url}>
                {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar