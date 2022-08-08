import { Button } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}

const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick, disabled = false, loading = false } = props
  return (
    <Button
      bg='teal.400'
      color='white'
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
