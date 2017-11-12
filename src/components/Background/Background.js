import React from 'react';
import ReactTimeout from 'react-timeout';

import './Background.css';

const CYCLE_TIMER = 3 * 1000;

// Temp
const images = [ 'cats1.jpg', 'cats2.jpg', 'cats3.jpg' ];

class Background extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageId: 0
    };

    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    this.nextImage();
  }

  nextImage() {
    let { currentImageId } = this.state;
    currentImageId++

    this.setState({
      currentImageId: (currentImageId) >= images.length ? 0 : currentImageId
    });

    this.props.setTimeout(this.nextImage, CYCLE_TIMER);
  }

  render() {
    const styles = { backgroundImage: `url(/img/bg/${ images[this.state.currentImageId] })` };

    return (
      <div className="app-background" style={ styles }></div>
    );
  }
}

export default ReactTimeout(Background);
