import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CardFeature } from './cardFeature';
import { useNavigate } from 'react-router-dom';
import FilterProduct from './FilterProduct';
// import { useSelector } from 'react-redux';

export const AllProduct = ({category}) => {
    const[products,setProducts]=useState([])//store all data
    // const products=useSelector((state)=>state.product)
    const router=useNavigate()

    const vegetableProduct = products.filter((element) => element.category === "vegetable",[]);
<<<<<<< HEAD
  console.log(vegetableProduct, "111111");
=======
  console.log(vegetableProduct);
>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608

  const categoryList=[...new Set(products.map((data)=>
    {return (
      data.category
    )}
  ))]
  const[datatFilter,setDataFilter]=useState("") 
  const[isFilterProduct,setIsFilterProduct]=useState([])

  // const isFilterProduct=useSelector((state)=>state.product)

  useEffect(()=>{
    setIsFilterProduct(products)
  },[products])

  const getFilterProduct=(category)=>{
    setDataFilter(category)
    const dataFilter=products.filter(el=>el.category === category)
    setIsFilterProduct(()=>{
      return[...dataFilter]
    })
    }

    
  async function getProducts() {
    try {
      const response = await axios.get(
<<<<<<< HEAD
        `${process.env.REACT_APP_SERVER_DOMIN}/api/v1/product/get-product`
=======
        "http://localhost:8000/api/v1/product/get-product"
>>>>>>> 409d359ff0ef8ab804fb5c85773ba9d153ba2608
      );
      if (response?.data.success) {
        setProducts(response.data.getAllData);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getProducts()
  },[])
  
  function redirect(id){
    router(`/menu/${id}`)
  }
  return (
    <div className='p-2 md:p-d'>
      <div className="font-bold text-3xl mt-4 text-slate-800 mb-2">{category}</div>
      
      <div className=" flex gap-4 justify-center overflow-scroll scrollbar-none">
            {categoryList.map((data)=>{
              return (
                <FilterProduct 
                category={data} 
                isActive={data.toLowerCase() === datatFilter.toLowerCase()}
                onClick={()=>getFilterProduct(data)}
                 />
              )
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-5">
        {isFilterProduct.map((element)=>(
          <div onClick={()=>redirect(element._id)}>
          <CardFeature
          key={element._id}
          id={element._id}
          image={element.image}
          name={element.name}
          category={element.category}
          price={element.price}
        />
        </div>
        ))}
      </div>


    </div>
  )
}

