import React from 'react';
import {Row,Col} from 'antd';

function RenderList({productList,setProductList,handleEdit}) {
    const deleteList = (currentId) =>{
        const deletedList = productList.filter(item=>item.id!==currentId);
        setProductList(deletedList);
    }
    return (
        <>
        {productList.map((item,index)=>(
            <Row key={item.id}>
                <Col span={9}>
                    <li>{item.brand}</li>
                </Col>
                <Col span={9}>
                    <li>{item.productName}</li>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={12}>
                            <button onClick={()=>handleEdit(item.id,item)}>Edit</button>
                        </Col>
                        <Col span={12}>
                            <button onClick={()=>deleteList(item.id)}>Delete</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        ))}
        </>
    )
}

export default RenderList;