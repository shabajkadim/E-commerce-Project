import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import loadingIcon from  './../project-imge/loading-icon.gif'
import axios from 'axios'
import {setDataProduct} from '../redux/productSlice'
import { useDispatch} from 'react-redux'

const Demo = () => {
  const{state,LOGOUT}=useContext(AuthContext)
<<<<<<< HEAD
  // const productData=useSelector((state)=>state.product)//, useSelector
=======
  // const productData=useSelector((state)=>state.product)
>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608
  const dispatch=useDispatch()

  
  const [products, setProducts] = useState([])
  // console.log(products, "products")

  // const testProduct=products.slice(2,8)
  // console.log(testProduct,"testhjgdjs");

  async function getProducts() {
      try {
<<<<<<< HEAD
        const response=await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/v1/product/get-product`,'product')
=======
        const response=await axios.get('http://localhost:8000/api/v1/product/get-product','product')
>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608
          if (response?.data.success) {
              setProducts(response.data.getAllData)
              dispatch(setDataProduct(response.data.getAllData))
          }
      } catch (error) {
          console.log(error)
      }
  }
  useEffect(() => {
      getProducts()
  })
  // console.log(productData,"productData");

  return (
    <div style={state} className='pt-20 bg-slate-100 min-h-0 min-h-[650px]'>
      <h3>Demo page</h3>
      <h2>welcom:{state?.user?.name}</h2>
      <button onClick={LOGOUT}></button>
      <div className='item-center '>
      {products?.length ? <div className='flex flex-wrap gap-4 p-4 items-center' >
                {products?.map((product) => (
                    <div >
                      <p><img className='w-22 h-20  ' src={product.image} alt='productimg' /></p>                       
                        <h3>Name : {product.name}</h3>
                        <h4>Price : {product.price}/-</h4>
                        <h4>Category : {product.category}</h4>
                       
                    </div>
                ))}
            </div> : <div className='flex justify-center items-center w-full h-full'><img src={loadingIcon} className='items-center ' alt='loading icon' /></div>
            }

      </div>

      {/* <div>
        {testProduct?.length? <div>
          {testProduct?.map((filterData)=>
            (
              <div>
                <p><img src={filterData.image} /></p>
              </div>
            )
          )}
        </div> : <div>filterData</div>}
      </div> */}

    </div>
  )
}

export default Demo

