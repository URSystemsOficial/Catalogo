import React, {Component} from 'react';
import { Row, Col } from 'antd';
import ProductCard from './productCard';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';









class ProductList extends Component{

  state = {
    productos: []
  }

  componentWillMount(){

    firebase.database().ref('productos')
    .once('value', (res)=>{
      let obj = res.val();
      let array = [];
      for(let key in obj){
        let no = obj[key];
        no['id'] = key;
       array.push(no);
      }
      this.setState({productos:array});
    });
  }


  render(){
    return(
    <div>
      <Row>
      {this.state.productos.map(prod=>{
        return(
          <Col span={6} key={prod.id}>
            <Link to={'/catalogo/'+prod.id}>
              <ProductCard
                name={prod.nombre}
                link={prod.img}/>
            </Link>
          </Col>
        );
      })}

     </Row>

    </div>
    );
  }
}
export default ProductList;
