import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              image={image}
              toggleModal={this.props.toggleModal}
            />
          );
        })}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
