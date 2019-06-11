import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: '',
    };
  }

  componentDidMount() {
    // fetch('https://sandbox-api.brighthr.com/employee/42932/profile', {
    //   headers: {
    //     authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQxMjIwLCJDb21wYW55SWQiOjI4NDUyLCJFeHBpcnlEYXRlIjoiXC9EYXRlKDE1NjAyODk4ODQxNTYpXC8iLCJVc2VyR3VpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkNsYWltcyI6W119.-Gpg_nYLCZcXt4RpGEAX5epryAeDbagQhUKrB4bDDsw',
    //   },
    // })
    //   .then(res => res.json())
    //   .then((json) => { this.setState({ name: json._embedded.personal.firstName }); });
    function getToil(url) {
      const newxhr = new XMLHttpRequest();
      newxhr.open('GET', url);
      newxhr.setRequestHeader('authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQxMjIwLCJDb21wYW55SWQiOjI4NDUyLCJFeHBpcnlEYXRlIjoiXC9EYXRlKDE1NjAyODk4ODQxNTYpXC8iLCJVc2VyR3VpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkNsYWltcyI6W119.-Gpg_nYLCZcXt4RpGEAX5epryAeDbagQhUKrB4bDDsw');
      newxhr.send();
      newxhr.onload = () => {
        const json = JSON.parse(newxhr.response);
        console.log(json);
      };
    }


    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://sandbox-api.brighthr.com/employee/42932/profile');
    xhr.setRequestHeader('authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQxMjIwLCJDb21wYW55SWQiOjI4NDUyLCJFeHBpcnlEYXRlIjoiXC9EYXRlKDE1NjAyODk4ODQxNTYpXC8iLCJVc2VyR3VpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsIkNsYWltcyI6W119.-Gpg_nYLCZcXt4RpGEAX5epryAeDbagQhUKrB4bDDsw');
    xhr.send();

    xhr.onload = () => {
      if (xhr.status !== 200) {
        this.setState({ error: xhr.statusText });
      }
      const json = JSON.parse(xhr.response);

      this.setState({
        name: json._embedded.personal.firstName,
      });

      const TOILUrl = json._links['http://api.brighthr.com/rels/lieu'].href;
      getToil(TOILUrl);
    };

    // xhr.
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default App;
