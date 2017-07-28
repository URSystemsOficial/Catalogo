import React from 'react';
import { Input, Card } from 'antd';
import { Upload, message, Icon, Button } from 'antd';
import firebase from '../../firebase';



class ProductsManagerPage extends React.Component{
	
	state = {
		nuevo:{
			nombre:'',
			desc:'',
			price:'',
			img:''
		}
	}

	onChange = (e) => {
		let nuevo = this.state.nuevo;
		const field = e.target.name;
		nuevo[field] = e.target.value;
		this.setState({nuevo});
	};

	onUpload = (e) => {
		 const status = e.file.status;
	    if (status !== 'uploading') {
	      console.log(e.file, e.fileList);
	    }
	    if (status === 'done') {
	      message.success(`${e.file.name} file uploaded successfully.`);
	    } else if (status === 'error') {
	     
	     let storageRef = firebase.storage().ref();
	     let uploadTask = storageRef.child('images/' + e.file.name)
	     	.put(e.file.originFileObj);

	     	uploadTask.on('state_changed', (snapshot)=>{

			}, (error) => {
			}, () => {
			  let downloadURL = uploadTask.snapshot.downloadURL;
			  let nuevo = this.state.nuevo;
			  nuevo.img = downloadURL;
			  this.setState({nuevo});
			  console.log(this.state.nuevo.img);
			});



	    }
	  
	};

	guardar = (e) => {
		e.preventDefault();
		firebase.database().ref('productos')
		.push(this.state.nuevo)
		.then(()=>{
			message.success('Tu producto se guardó');
		});
	};


	render(){
		return(
			<Card
				style={{margin:'0 auto', width:'400px'}}
				title="Nuevo producto"
			>
				<form onSubmit={this.guardar}>
					<Input 
					name="nombre"
					placeholder="nombre del producto"
					type="text" 
					onChange={this.onChange}
					 />		
					 <Input 
					name="desc"
					placeholder="descripción"
					type="text" 
					onChange={this.onChange}
					 />		
					 <Input 
					name="price"
					placeholder="Precio"
					type="number" 
					onChange={this.onChange}
					 />		
					 <Upload.Dragger 
					 	onChange={this.onUpload}
					 >
				      <p className="ant-upload-drag-icon">
				        <Icon type="inbox" />
				      </p>
				      <p className="ant-upload-text">Click or drag file to this area to upload</p>
				      <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
				    </Upload.Dragger>
				    <Button
				    	type="primary"
				    	htmlType="submit"
				    >Guardar</Button>		
					</form>
				</Card>
			);
	}
}

export default ProductsManagerPage;