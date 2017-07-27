import React, {Component} from 'react';
import { Carousel } from 'antd';

class HomePage extends Component{
  render(){
    return(
      <div>
      <Carousel autoplay>
          <div><img
            style={{width:'100%', height:'80vh'}}
           src="https://i.ytimg.com/vi/SKREgFVGasU/maxresdefault.jpg" alt="img"/></div>
          <div><img
            style={{width:'100%', height:'80vh'}}
           src="https://img.ifcdn.com/images/8aa2c1083706d4cc005c5feb7edf0ce1b33dd7bda61816f155cf5d10de5c2309_1.jpg" alt="img"/></div>
        </Carousel>
      </div>
    );
  }
}
export default HomePage;
