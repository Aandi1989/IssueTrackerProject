'use client';

import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
   <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider

//  при добавлении приватных путей в matcher в middleware.ts они перестали быть доступны и для авторизованого пользователя
// так же стал некоректно работать редирект после signin и signout