import React from 'react';
import { Button } from 'reactstrap';


class StorePicker extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <h2>Please Enter Store Name</h2>
        <input type="text" placeholder="Enter store name"/>
        <Button type="submit" color="danger"> Visit Store </Button>
      </div>
    )
  }
}

export default StorePicker;
