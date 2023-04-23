import { Component } from 'react';
import { default as Searchbar } from './Searchbar/Searchbar';
import { default as ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
