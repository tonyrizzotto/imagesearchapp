import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // The 'load' event listener is necessary to delay the running of image ref as it takes time to load data. Otherwise, any code that runs will be 0 (runs as initial load, before checks have run).
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //The callback function must be bound or the value it returns will always be undefined. You can easily do this with an arrow function.
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
