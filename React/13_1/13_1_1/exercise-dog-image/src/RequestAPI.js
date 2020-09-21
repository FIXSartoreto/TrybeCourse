import React, { Component } from 'react';

class RequestAPI extends Component {
  constructor() {
    super();

    this.state = {
      Name: '',
      imgPath: '',
      dogBreed: '',
      dogsSaved: [],
    }

    this.fetchDog = this.fetchDog.bind(this);
    this.saveName = this.saveName.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  async fetchDog() {
     const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
     const requestObject = await requestReturn.json();
     const srcPath = requestObject.message;
     
     this.setState({
       imgPath: srcPath,
       dogBreed: srcPath.split("/")[4],
      });
  }

  componentDidMount() {
    this.fetchDog();
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.imgPath.includes('terrier')) {
      return false
    }
    return true
  }

  componentDidUpdate() {
    const { imgPath } = this.state;

    localStorage.setItem('dogURL', imgPath);
  }

  saveName() {
    const { dogsSaved, imgPath, dogBreed, Name } = this.state;
    const dogData = {
      Name,
      Breed: dogBreed,
      URLImage: imgPath
    };
    const newArray = [...dogsSaved, dogData];

    this.setState({ dogsSaved: newArray, Name: '' });
  }

  handleName({ target }) {
    this.setState({ Name: target.value })
  }

  render() {
    const { imgPath, dogBreed, Name } = this.state;

    return (
      <div>
        <header>
          Cute Dogs!
        </header>
        {(imgPath !== '') ? <img src={imgPath} alt='Dog' width='400px' height='400px' /> : <span>Loading...</span>}
        <p>Dog Race: {dogBreed}</p>

        <button onClick={() =>{
          this.fetchDog()
        }}>Next Dog!</button><br />
        <input type='text' value={this.state.Name} onChange={this.handleName} />
        <button onClick={this.saveName}>Name this dog!</button>
      </div>
    );
  }
}

export default RequestAPI;