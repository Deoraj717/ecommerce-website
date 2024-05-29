import React from 'react'

function Product(products_data) {
    
    // const [products,setProducts] = React.useState(products_data);

    const product_list = products_data.products?.map((product)=>{
        return (
            <div className='product'>
                {product.name}
            </div>
        )
    })

    console.log(products_data);

    return (
        <div>
            {product_list}
        </div>
    )
}

export default Product