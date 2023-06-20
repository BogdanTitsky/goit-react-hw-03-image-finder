import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import React, { Component } from 'react';
import { getImages } from './API/api';
import { Loader } from './Loader/Loader';
import { STATUS } from 'constants/status.constants';
import { Button } from './Button/Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    status: STATUS.idle,
    page: 1,
    search: '',
    showModal: false,
    selectedImage: '',
  };

  fetchImages = async ({ page = 1, search = '' } = {}) => {
    this.setState({ status: STATUS.loading });
    try {
      const images = await getImages({ page, q: search });
      this.setState(
        prevState => {
          const newImages = [...prevState.images, ...images];
          const newStatus =
            newImages.length > prevState.images.length
              ? STATUS.success
              : STATUS.idle;

          return {
            images: newImages,
            status: newStatus,
          };
        },
        () => {
          if (images.length === 0) {
            Notify.failure('There are no images found');
          }
        }
      );
    } catch (error) {
      console.log(error);
      this.setState({ status: STATUS.error });
    }
  };

  handleSearch = search => {
    this.setState({ images: [], page: 1, search });
    this.fetchImages({ search });
  };

  handleLoadMore = () => {
    const { page, search } = this.state;
    this.setState({ page: page + 1 }, () => {
      this.fetchImages({ page: this.state.page, search });
    });
  };

  toggleModal = (largeImageURL = '') => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: largeImageURL,
    }));
  };

  render() {
    const { status, images, showModal, selectedImage } = this.state;
    return (
      <div className="app">
        <Searchbar onSearch={this.handleSearch} />
        {images.length > 0 && (
          <ImageGallery images={images} toggleModal={this.toggleModal} />
        )}
        {status === STATUS.loading && <Loader />}
        {status === STATUS.success && (
          <Button onLoadMore={this.handleLoadMore}></Button>
        )}
        {showModal && (
          <Modal onClickClose={this.toggleModal} image={selectedImage}></Modal>
        )}
      </div>
    );
  }
}
