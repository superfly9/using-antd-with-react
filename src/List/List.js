import React, { useState, useEffect } from 'react';
import {Row,Col } from 'antd';
import RenderList from './RenderList';
import AddList from './AddList';
import EditList from './EditList';

const ListPage = () => {
  const [productList,setProductList] = useState([{
    brand:'Seoul',
    productName:'Lite',
    id:1
  }])
  const [listEdit,setListEdit] = useState(false);
  const handleEdit = (currentId,product) => {  
    setListEdit(true);
    setCurrentProduct(product);
  }
  const addList = (newProduct)=>setProductList([...productList,newProduct]);

  const updateProduct = (product)=>{
    console.log(productList)
    console.log('List:',product);
    const result = productList.map(item=>item.id === product.id ? product : item);
    console.log('result:',result)
    setProductList(result);
  };
  const [currentProduct,setCurrentProduct] = useState({});
  return (
    <>
      <h2 style={{textAlign:'center',margin:'20px'}}>Cheer Up</h2>
    <Row>
      <Col offset={2} span={10}>
        <Row>
          <Col span={12}>
            <div>
              BrandName
            </div>
          </Col>
          <Col span={12}>
            <div>
              productName
            </div>
          </Col>
          <Col span={24}>
            <ul>
              {<RenderList handleEdit={handleEdit} productList={productList} setProductList={setProductList} />}
            </ul>
          </Col>
        </Row>
      </Col>
      <Col span={10} offset={2} >
          <h2 style={{paddingLeft:'50px'}}>Add Task</h2>
          {
            listEdit ?
            <EditList setListEdit={setListEdit} updateProduct={updateProduct} currentProduct= {currentProduct}  /> 
              : 
            <AddList productList={productList} addList={addList}/>
          }
      </Col>
    </Row>
    </>
  )
};

export default ListPage;

//edit => edit할 타켓의 정보, edit할지 여부