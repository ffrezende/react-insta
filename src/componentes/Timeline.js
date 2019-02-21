import React, { Component } from 'react';
import FotoItem from './Foto';

export default class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = { fotos: [] };
    this.login = this.props.login;
  }


  carregaTimeLine() {
    let url;

    if (this.login === undefined) {
      url = `http://localhost:8080/api/public/fotos?X-AUTH-TOKEN=${localStorage.getItem('authToken')}`;
    } else {
      url = `http://localhost:8080/api/public/fotos/${this.login}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(fotos => {
        this.setState({ fotos: fotos });
      });
  }

  componentDidMount() {
    this.carregaTimeLine();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== undefined) {
      this.login = nextProps.login;
      this.carregaTimeLine();
    }
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