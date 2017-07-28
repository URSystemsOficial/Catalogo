import React from 'react';
import {Card} from 'antd';

const ProductCard=(props)=>{
  return(
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
       <div className="custom-image">
         <img alt="example" width="100%" src={props.link} />
       </div>
       <div className="custom-card">
         <h3>{props.name}</h3>
         <p>www.instagram.com</p>
       </div>
     </Card>
  );
}

export default ProductCard;
