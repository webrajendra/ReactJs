import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fooddata from "./data";

const Home = () => {
  const [menu, setMenu] = useState(Fooddata);
  const filterCategory = (curItem) => {
    const updatedCategory = Fooddata.filter((curr, ind)=> {
        return curr.category == curItem;
    });
    setMenu(updatedCategory)
  }
  return (
    <div className="container text-center">
      <h2>Search Your Food</h2>
      <div className="filterCategories d-flex justify-content-around mt-3 mb-3">
        <Button variant="primary" onClick={()=> filterCategory('punjabi')}>Punjabi</Button> 
        <Button variant="secondary" onClick={()=> filterCategory('Maharashtrian')}>Maharashtrian</Button> 
        <Button variant="success" onClick={()=> filterCategory('Pizza')}>Pizza</Button> 
        <Button variant="warning" onClick={()=> filterCategory('Momos')}>Momos</Button> 
        <Button variant="danger" onClick={()=> filterCategory('Frankie')}>Frankie</Button> 
        <Button variant="info" onClick={()=> filterCategory('Chai')}>Chai</Button> 
        <Button variant="primary" onClick={()=> filterCategory('punjabi')}>Punjabi</Button> 
        <Button variant="danger" onClick={()=>setMenu(Fooddata)}>All</Button> 
      </div>

      <div className="foodCardsWrap d-flex justify-content-around flex-wrap">
        {menu.map((el, index) => {
          return (
            <Card className=" mt-3 mb-3" style={{ width: "22rem", border: "none" }}>
              <Card.Img variant="top" src={el.imgdata} style={{width: "21.9rem", height: "15rem"}} />
              <Card.Body>
                <Card.Title>{el.rname}</Card.Title>
                <Card.Text>
                  {el.price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
