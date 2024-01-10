import { Link } from 'react-router-dom'

const HomeMore = () => {
  return (
    <section className='mt-10 lg:px-5'>
      <h1 className='text-[40px] md:text-[30px] sm:text-[25px] py-5 overflow-hidden relative font-semibold text-sky-600'>Khám phá thêm</h1>
      <div className='grid grid-cols-2 md:grid-cols-1 gap-2'>
       <Link to='/tin-tuc'>
       <div className='relative overflow-hidden bg-black cursor-pointer'>
        <img alt='combo' src='https://free.vector6.com/wp-content/uploads/2020/03/Stock-Anh-04009.jpg' className='opacity-60 h-[300px] md:h-[150px] w-full object-cover' />
          <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[30px] font-semibold'>Tin tức</span>
        </div>
       </Link>
        <div className='relative overflow-hidden bg-black cursor-pointer'>
        <img alt='combo' src='https://img2.thuthuatphanmem.vn/uploads/2018/12/13/tai-hinh-nen-banh-sinh-nhat-dep-nhat_010806311.jpg' className='opacity-60 h-[300px] md:h-[150px] w-full object-cover' />
          <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[30px] font-semibold'>
            <a href='http://google.com' target="_blank" rel="noopener noreferrer">Tải ứng dụng</a>
          </span>
        </div>
      </div>
    </section>
  )
}
export default HomeMore