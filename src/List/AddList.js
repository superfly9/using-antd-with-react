import React, { useState } from 'react';
import {Row,Col} from 'antd';

const inputStyle = {width:'100%'}

function AddList({addList,productList}) {
    const [productInfo,setProductInfo] = useState({
        brand:'',
        productName :''
    });
    const handleChange = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productInfo)
        if (!productInfo.brand ||  !productInfo.productName) {
            alert('Fill the All')
        }
        addList({
            ...productInfo,                
            id: productList.length+1
        })              
        setProductInfo({brand:'',productName:''})
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <Row>
                <Col span={8}>
                <input style={inputStyle} name='brand' value={productInfo.brand} onChange={handleChange} />
                </Col>
                <Col span={8}>
                <input style={inputStyle} name='productName' value={productInfo.productName} onChange={handleChange} />
                </Col>
                <Col span={6}>
                <button style={inputStyle} type='submit'>Add</button>
                </Col>
            </Row>
        </form>
        </>
    )
}

export default AddList
