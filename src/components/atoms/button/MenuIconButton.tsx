import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  onOpen: () => void
}

const MenuIconButton: FC<Props> = (props) => {
  const { onOpen } = props

  return (
    <IconButton
      aria-label='メニューボタン'
      icon={<HamburgerIcon />}
      size='sm'
      variant='unstyled'
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  )
}

export default MenuIconButton
