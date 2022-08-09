import { FC, memo } from 'react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import UserCard from '../organisms/user/UserCard'

const UserManagement: FC = () => (
  <Wrap p={{ base: 4, md: 10 }}>
    <WrapItem>
      <UserCard imageUrl='https://source.unsplash.com/random' userName='tetes' fullName='fdfdfsd' />
    </WrapItem>
  </Wrap>
)

export default memo(UserManagement)
