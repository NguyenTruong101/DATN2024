import {IconButton,Avatar,Box,CloseButton,Flex,HStack,VStack,useColorModeValue,Drawer,DrawerContent,Text,useDisclosure,BoxProps,FlexProps,Menu,MenuButton,MenuDivider,MenuItem,MenuList,
} from '@chakra-ui/react'
import { useContext } from 'react';
import {NavLink,Link} from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext/LoginContext';

export default function SidebarWithHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
interface LinkItemProps {
    id : number
    name: string
    icon: string
    link: string
  }
const LinkItems: Array<LinkItemProps> = [
    {id:1, name: 'Quản Lý Menu', icon: 'fa-solid fa-bars',link:'admin-thucdon' },
    {id:2, name: 'Quản Lý Sản Phẩm', icon: 'fa-solid fa-cake',link:'admin-sanpham' },
    {id:3, name: 'Quản Lý Tin Tức', icon: 'fa-regular fa-newspaper',link:'admin-tintuc' },
    {id:4, name: 'Quản Lý Liên Hệ', icon: 'fa-solid fa-envelope',link:'admin-lienhe' },
    {id:5, name: 'Quản Lý Đơn Hàng', icon: 'fa-solid fa-money-bill-trend-up',link:'admin-donhang' },
    {id:6,name: 'Quản Lý Người Dùng', icon: 'fa-solid fa-sliders',link:'admin-nguoidung' },
  ];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const linkActive = ({isActive}:any) => ({
    color : isActive ? 'white' : '' ,
    backgroundColor  : isActive ? 'rgb(14 165 233)' : '',
    display : isActive ? 'block' : '',
  })
  return (
    <Box
      transition="3s ease"
      // className='bg-footercolor'
      className='bg-rose-100'
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="4" justifyContent="space-between">
       <Link to='/admin'>
       <Text fontSize="2xl" className='text-indigo-700 font-bold'>
          Cake Admin
        </Text>
       </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
       <NavLink to={`/admin/${link.link}`} key={link.id} style={linkActive}>
        <NavItem>
        <i className={`${link.icon} mr-2`}></i>
          {link.name}
        </NavItem>
      </NavLink>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
      <Flex
        align="center"
        p="4"
        role="group"
        cursor="pointer"
        className='hover:text-white hover:bg-sky-600 duration-300 w-full'
        {...rest}>
        {children}
      </Flex>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const {adminAcc} : any = useContext(LoginContext)
  const adminLogOut = () => {
    localStorage.removeItem('admin_account')
    window.location.reload()
  }
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
      ><i className="fa-solid fa-bars text-maincolor" onClick={onOpen} /></IconButton>
     <Link to='/admin'>
     <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontWeight="bold"
        className='text-white'
        >
        Cake Admin
      </Text>
      </Link>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://as2.ftcdn.net/v2/jpg/01/12/09/17/1000_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="xs" color="gray.600">
                    {adminAcc.adminAccount}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuDivider />
              <MenuItem onClick={adminLogOut}>Đăng Xuất</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};