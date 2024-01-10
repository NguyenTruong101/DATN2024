import { Link } from 'react-router-dom'

const HomeBG = () => {
  return (
    <section className="h-[calc(70vh-68px)] flex items-center justify-start bg-black relative lg:px-5">
      <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-[url('https://1.bp.blogspot.com/-S0Q51i6s08Q/VeVkxDcxHmI/AAAAAAAAGgA/-fnieKnSPM4/s1600/anh-banh-sinh-nhat-de-thuong-242.jpg')] bg-no-repeat bg-cover bg-center opacity-40" />
      <div className=' relative max-w-[1200px] w-full m-auto md:px-5'>
        <div className=' font-bold text-white'>
          <h1 className='text-[50px] uppercase md:text-[35px]'>Lựa chọn ngọt ngào</h1>
          <h1 className='text-[50px] md:text-[35px] uppercase'>Dành riêng cho kỉ niệm của bạn</h1>
        </div>
        <div className='mt-10 text-sky-600'>
          <button className='bg-white px-5 py-4 rounded-full capitalize'><Link to='/thuc-don'>khám phá menu</Link></button>
        </div>
        <div className='mt-10'>
          <span className=' mr-10'>
            <i className="fa-brands fa-facebook text-[20px] text-sky-600 bg-white p-2 rounded-full cursor-pointer hover:bg-maincolor duration-200 hover:text-white"></i>
          </span>
          <span className=' mr-10'>
            <i className="fa-brands fa-square-instagram text-[20px] text-sky-600 bg-white p-2 rounded-full cursor-pointer hover:bg-maincolor duration-200 hover:text-white"></i>
          </span>
          <span className=' mr-10'>
            <i className="fa-brands fa-tiktok text-[20px] text-sky-600 bg-white p-2 rounded-full cursor-pointer hover:bg-maincolor duration-200 hover:text-white"></i>
          </span>
        </div>
      </div>
    </section>
  )
}
export default HomeBG