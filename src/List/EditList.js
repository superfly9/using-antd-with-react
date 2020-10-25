import React,{useState} from 'react'

function EditList({currentProduct,updateProduct,setListEdit}) {
    const [product,setProduct] = useState(currentProduct)
    console.log('CurrentPr:',currentProduct)
    const handleChange = (e) =>{
        const { target : {name,value}} =e;
        setProduct({
            ...product,
            [name] : value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('product:',product);
        updateProduct(product);
        setProduct({
            ...product,
            brand:'',
            productName:''
        })
    }
    return (
        <>
        <h2>Edit User</h2>
        <form>
            <label>
                <input value={product.brand} name='brand' onChange={handleChange} />
            </label>
            <label>
                <input value={product.productName} name='productName' onChange={handleChange} />
            </label>
            <button type='submit' onClick={handleSubmit}>Edit</button>
            <button onClick={()=>setListEdit(false)}>Cancel</button>
        </form>
        </>
    )
}

export default EditList
