import React from 'react'

const AllProducts = (props) => {
    const { awdiz } = props;
    console.log(awdiz, "awdiz")
    return (
        <div>
            <h1>All Products</h1>
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
                {awdiz.map((productObj) => (
                    <div style={{ width: "18%", border: "2px solid black", height: "250px" }}>
                        <img style={{ height: "70%", width: '100%' }} src={productObj.image} />
                        <h1>{productObj.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProducts