import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

  constructor() {
    super();
    this.state = { fotos: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/api/public/fotos?X-AUTH-TOKEN=${localStorage.getItem('authToken')}`)
      .then(response => response.json())
      .then(fotos => {
        this.setState({ fotos: fotos });
      });
  }

  // async getCoisa() {
  //   const resps = await fetch('http://localhost:8080/api/public/fotos/rafael');
  //   const json = await resps.json();
  //   return json; 
  // }

  render() {
    return (
      <div className="fotos container">
        {
          this.state.fotos.map(foto => <FotoItem foto={foto} key={foto.id} />)
        }
      </div>
    );
  }
}