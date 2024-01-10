import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEvent, useRef, useState } from 'react'
import productAPI, { ProdItem } from '../../../api/productAPI'
import { debounce } from 'lodash'
import { Link } from 'react-router-dom'

const SearchProduct = () => {
  const [product,setProduct] = useState<ProdItem>()
  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    debounceProduct(e.target.value)
  }
  const debounceProduct = useRef(debounce((nextValue : string) => handleSearchProduct(nextValue), 800)).current
  const handleSearchProduct = async (value : string) => {
    const response = await productAPI.getProdByName(value)
    setProduct(response)
  }
  return (
    <div className='relative'>
     <div className='w-[200px] lg:w-[160px]'>
     <InputGroup>
        <InputLeftElement
         pointerEvents='none'
         children={<SearchIcon color='#00aaee' />}
        />
        <Input 
         type='search' 
         variant='flushed' 
         placeholder='Tìm kiếm' 
         className='cursor-pointer' 
         focusBorderColor='#00aaee'
         onChange={handleInputChange}
        />
     </InputGroup>
     </div>
     {product && 
     <Link to={`/thuc-don/${product.prodType}/${product.prodName}`}>
     <div className='absolute w-[300px] lg:w-[160px] bg-white flex justify-around items-center'>
        <div>
          <h3 className='text-[20px] pt-1'>{product.prodName}</h3>
          <span className='text-[12px]'>{product.prodType}</span>
        </div>
        {product.prodImg && <img src={product.prodImg} alt={product.prodName} className='h-[50px] w-[50px] rounded-[10px] object-cover' />}
     </div>
     </Link>}
    </div>
  )
}
export default SearchProduct


