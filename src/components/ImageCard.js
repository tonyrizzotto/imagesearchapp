import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // The 'load' event listener is necessary to delay the running of image ref as it takes time to load data. Otherwise, any code that runs will be 0 (runs as initial load, before checks have run).
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //The callback function must be bound or the value it returns will always be undefined. You can easily do this with an arrow function.
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // cap the value with Math.ceil. This number will be used to set the span value in the CSS.
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      // Inline style is added to dynamically update the CSS with the spans state.
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
