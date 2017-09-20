import React, { Component } from 'react';
import './App.css';
import HistogramComponent from './HistogramComponent';
class App extends Component {
  render() {
    const data = [
      {
        "id": "some GUID",
        "date": "2017-09-19T13:14:14.499Z",
        "duration": 5324, // milliseconds
        "success": 1 // 1 for success, 0 for failure
      },
      {
        "id": "some GUID 2",
        "date": "2017-09-19T13:15:14.499Z",
        "duration": 2354, // milliseconds
        "success": 1 // 1 for success, 0 for failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 3491, // milliseconds
        "success": 0 // failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 3291, // milliseconds
        "success": 0 // failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 3931, // milliseconds
        "success": 0 // failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 391, // milliseconds
        "success": 1 // failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 3291, // milliseconds
        "success": 0 // failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 391, // milliseconds
        "success": 0 // failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 3931, // milliseconds
        "success": 0 // failure
      },
      {
        "id": "some GUID 3",
        "date": "2017-09-19T13:16:14.499Z",
        "duration": 237, // milliseconds
        "success": 1 // failure
      }
    ]
    return (
      <HistogramComponent width="600px" data={data} />
    );
  }
}

export default App;
