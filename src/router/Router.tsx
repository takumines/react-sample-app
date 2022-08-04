import { FC, memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import Page404 from '../components/pages/Page404'
import Setting from '../components/pages/Setting'
import UserManagement from '../components/pages/UserManagement'
import HeaderLayout from '../components/templates/HeaderLayout'

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Login />} />
        <Route path='home' element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path='user_management' element={<UserManagement />} />
          <Route path='setting' element={<Setting />} />
        </Route>
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  </BrowserRouter>
)

export default memo(Router)
