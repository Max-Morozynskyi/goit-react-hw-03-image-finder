import React, { Component } from 'react';
import { AppDiv } from './App.styled';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    isModalOpen: false,
    searchValue: '',
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  handleSearchState = searchValue => {
    // this.setState({ searchValue });
    console.log('searchValue', searchValue);
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <AppDiv>
        <Searchbar qwert={this.handleSearchState} />
        {isModalOpen && <Modal onClose={this.toggleModal}>popup</Modal>}
        React homework template
      </AppDiv>
    );
  }
}
