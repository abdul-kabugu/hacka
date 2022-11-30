import {Image, Box, Heading, Show, Hide } from '@chakra-ui/react'



import { Sidebar, TopNav, Video} from '../components'
import BottomNav from '../components/BottomNav'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import styles from '../styles/Home.module.css'
import {useDiscoverPosts} from '../hooks/lens-react'
export default function Home() {
  return (
    <Box maxW="1250px" mx="auto">
     <ToastContainer />
           <Hide below='md'>
        <TopNav />
        </Hide>
        <Box  display="flex">
          <Hide below='md'>
         <Sidebar  />
         </Hide>
         <Video />
         </Box>
          <BottomNav  />
    
    </Box>
  )
}
