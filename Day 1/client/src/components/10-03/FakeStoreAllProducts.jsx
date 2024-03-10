import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FakeStoreAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    console.log(allProducts, "allProducts")

    async function getProducts() {
        // api call
        // alert("Jiii")
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            // console.log(response, "response from fakestore api")
            if (response?.data.length) {
                setAllProducts(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])



    return (
        <div>
            <h1>Fake Store All Products</h1>
            {allProducts?.length ? <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
                {allProducts.map((productObj) => (
                    <div style={{ width: "18%", border: "2px solid black", height: "250px" }}>
                        <img style={{ height: "70%", width: '100%' }} src={productObj.image} />
                        <h1>{productObj.title}</h1>
                    </div>
                ))}
            </div> : <div>Loading...</div>}
        </div>
    )
}

export default FakeStoreAllProducts