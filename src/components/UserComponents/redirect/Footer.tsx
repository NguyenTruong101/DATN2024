import { ReactNode } from 'react';
import {Box,Container,Stack,SimpleGrid,Text,VisuallyHidden,chakra,useColorModeValue,} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import MyChatComponent from './ChatAI';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  const location = useLocation()
  const hiddenFooterLG = (location.pathname === '/dang-nhap' || location.pathname === '/dang-ky') ? 'hidden' : 'block'
  return (
    <footer className={`mt-10 ${hiddenFooterLG}`} >
      <Box className='bg-sky-300'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Về chúng tôi</ListHeader>
            <Link to={'#'}>Cake</Link>
            <Link to={'#'}>Cake101@gmail.com</Link>
            <Link to={'#'}>235 HQV, Bắc Từ Liêm, Hà Nội</Link>
            <Link to={'#'}>0837942742</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Thực đơn</ListHeader>
            <Link to={'/thuc-don'}>Donut</Link>
            <Link to={'/thuc-don'}>Tiramisu</Link>
            <Link to={'/thuc-don'}>Xem thêm</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Kết nối</ListHeader>
            <Link to={'/tin-tuc'}>Tin tức</Link>
            <Link to={'/lien-he'}>Liên hệ</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Tải ứng dụng</ListHeader>
            <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">Tải ứng dụng</a>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        className='bg-sky-400 '
        >
        {/* <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 Copyright Cake</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'#'}>
            <i className="fa-brands fa-facebook text-[20px]  cursor-pointer"></i>
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
            <i className="fa-brands fa-square-instagram text-[20px] "></i>
            </SocialButton>
            <SocialButton label={'Tiktok'} href={'#'}>
            <i className="fa-brands fa-tiktok text-[20px]  "></i>
            </SocialButton>
          </Stack>
        </Container> */}
      </Box>
    </Box>
    <MyChatComponent/>
    </footer>
  );
}
export default Footer



