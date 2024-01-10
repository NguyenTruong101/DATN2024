import { Select } from "@chakra-ui/react"
import { useState,useEffect } from "react"
import productAPI, { ProdItem } from "../../api/productAPI"
import { ProductCard } from "../../components/UserComponents/Food"

const Promotion = () => {
  const [proFood,setProFood] = useState<ProdItem[]>([])
  useEffect(() =>{
    const getPromoItem = async () => {
      try{
         const response = await productAPI.getProdItem()
         setProFood(response)
      }
      catch(err){
        console.log('Ko the lay danh sach san pham khuyen mai',err)
      }
    }
    getPromoItem()
  },[])
  const [selected, setSelected] = useState()
  const handleChange = (e: any) => {
    if(e.target.value === 'prices-up'){
      const pricesGoUp = proFood.sort((a,b)=>a.prodPrice - b.prodPrice)
      setSelected(e.target.value)
      setProFood(pricesGoUp)
    }
    else if(e.target.value === 'prices-down') {
      const pricesGoDown = proFood.sort((a,b)=>b.prodPrice - a.prodPrice)
      setSelected(e.target.value)
      setProFood(pricesGoDown)
    }
  }
  const filProdPromotion = proFood.filter(item=>item.saleOff === 'khuyen-mai')
  return (
    <section className='max-w-[1200px] m-auto lg:px-5'>
      <div className='mb-8 ml-2 inline-block w-[200px]'>
        <Select placeholder='Sắp xếp theo' 
        borderColor='#00aaee'
        focusBorderColor='#00aaee'
        color='#576574'
        className='cursor-pointer'
        value = {selected}
        onChange = {handleChange}
        >
          <option key='prices-up' value='prices-up'>Giá tăng dần</option>
          <option key='prices-down' value='prices-down'>Giá giảm dần</option>
        </Select>
      </div>
      <div className='grid grid-cols-4 gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        <ProductCard productList={filProdPromotion}/>
       </div>   
      </section> 
  )
}
export default Promotion