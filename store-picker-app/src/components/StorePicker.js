import React from 'react';
import { Button } from 'reactstrap';


class StorePicker extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <div className="searchStoreWrap">
          <h3>Please Enter Store Name</h3>
          <input type="text" placeholder="Enter store name"/>
          <Button type="submit" color="danger"> Visit Store </Button>
        </div>
      </div>
    )
  }
}

export default StorePicker;
