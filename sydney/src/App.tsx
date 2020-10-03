import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from './components/chart/chart';
import { Picture } from './components/picture/picture';
import { Photo, Tag } from './interfaces/photo';


const photo: Photo = {
  caption: "Forrest",
  url: "https://picsum.photos/300/300",
  tags: [
      Tag.freelance,
  ],
  height: 300,
  width: 300,
}

function App() {
  return (
    <Fragment>
      <Chart />
      <Picture {...photo} />
      <Picture {...photo} />
    </Fragment>
  );
}

export default App;
