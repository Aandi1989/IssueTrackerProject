import authOptions from "@/app/auth/authOptions";
import NextAuth from "next-auth"


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

//  при добавлении приватных путей в matcher в middleware.ts они перестали быть доступны и для авторизованого пользователя
// так же стал некоректно работать редирект после signin и signout

