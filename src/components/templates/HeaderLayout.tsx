import { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../organisms/layout/Header'

const HeaderLayout: FC = () => (
  <>
    <Header />
    <Outlet />
  </>
)

export default memo(HeaderLayout)
