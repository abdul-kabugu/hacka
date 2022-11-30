import React from 'react'
import {useParams} from 'react-router-dom'
import {useGetUserProfile, useGetUserPosts, useFollow} from '../hooks/lens-react'
import {GET_ARTIST_PROFILE} from '../graphql/query/getUserProfile'
import {useQuery} from '@apollo/client'
import { TopNav, Sidebar, Video, BottomNav, UserPosts } from '../components'
import {Box, Hide, Show} from '@chakra-ui/react'
import UserProfile from "../components/UserProfile"

function ProfileDetails() {
    const {userId} = useParams()
    const {userProfile, isUserProfileLoading, isUserProfileError} = useGetUserProfile(userId)
    const {userPosts, isUserPostsError, isUserPostsLoading} = useGetUserPosts(userId)
    const {followUsers, isLoading } = useFollow()
      
     
  return (
    <Box maxW="1250px" mx="auto">
    
          <Hide below='md'>
       <TopNav />
       </Hide>
       <Box  display="flex">
         <Hide below='md'>
        <Sidebar  />
        </Hide>
        
        <Box display='flex' flexDir="column" h="90vh" overflowY="scroll">
          <UserProfile userProfile = {userProfile} isUserProfileLoading = {isUserPostsLoading}
          isUserProfileError = {isUserPostsError}
          />
          <div className='vid-container'>
          <UserPosts userPosts = {userPosts} isUserPostsError = {isUserPostsError} 
            isUserPostsLoading = {isUserPostsLoading}
          />
         </div>
          </Box>
          
        </Box>
         <BottomNav  />
   
   </Box>
  )
}

export default ProfileDetails

