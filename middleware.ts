export { default } from 'next-auth/middleware';

//  при добавлении приватных путей в matcher в middleware.ts они перестали быть доступны и для авторизованого пользователя
// так же стал некоректно работать редирект после signin и signout
// после подключения next-auth авторизации запускается вечный loading при попытке update issue

export const config = {
    matcher: [
        // '/issues/new',
        // '/issues/:id/edit'
    ]
}