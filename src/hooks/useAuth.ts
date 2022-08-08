import { useCallback, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { User } from '../types/api/user'
import { useMessage } from './useMessage'

export const useAuth = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { showMessage } = useMessage()

  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'ログインしました。', status: 'success' })
            navigate('/home')
          } else {
            showMessage({ title: 'ユーザーが見つかりません。', status: 'error' })
          }
        })
        .catch(() => {
          showMessage({ title: 'ログインできません。', status: 'error' })
        })
        .finally(() => setLoading(false))
    },
    [navigate, showMessage]
  )

  return { login, loading } as const
}
