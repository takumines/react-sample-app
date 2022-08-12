import { FC, memo, useCallback, useEffect } from 'react'
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import UserCard from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import UserDetailModal from '../organisms/user/UserDetailModal'
import { useSelectUser } from '../../hooks/useSelectUser'

const UserManagement: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, loading, users } = useAllUsers()
  const { selectedUser, onSelectUser } = useSelectUser()
  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
    },
    [users, onSelectUser, onOpen]
  )

  return (
    <>
      {loading ? (
        <Center h='100vh'>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users?.map((user) => (
            <WrapItem key={user.id} mx='auto'>
              <UserCard
                id={user.id}
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser!} />
    </>
  )
}

export default memo(UserManagement)
