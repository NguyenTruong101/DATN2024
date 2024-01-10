import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../../context/LoginContext/LoginContext"

const UserLogin = () => {
  const {userAcc} : any = useContext(LoginContext)
  const [display,setDisplay] = useState<boolean>(false)
  const toggleDisplay = () => setDisplay(!display)
  const logOut = () => {
    localStorage.removeItem('user_account')
    localStorage.removeItem('product_list')
    window.location.reload()
  }
  return (
    <>
    {userAcc ? 
        <div className='relative' onClick={toggleDisplay}>
          <img 
            title= {userAcc?.userName}
            className='cursor-pointer h-[35px] w-[35px] lg:h-[24px] lg:w-[24px] rounded-full'
            src='https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png' 
            alt={userAcc?.userName}/>
          {display && 
          <div className='bg-white w-[100px] 2lg:w-[80px] absolute py-3 px-2 shadow-md border-t-[1px] border-t-footercolor top-[120%]'>
            <ul className='text-sky-600'>
              <li className='hover:underline 2lg:text-[12px]'>
                <Link to='/thong-tin'>Thông tin</Link>
              </li>
              <li className='hover:underline 2lg:text-[12px]' onClick={logOut}>
                  Đăng xuất 
              </li>
            </ul>
          </div>}  
        </div> : 
        <Link to='/dang-nhap'><i className="fa-solid fa-user text-sky-600 text-[25px]"></i></Link>
    }
    </>
  )
}
export default UserLogin