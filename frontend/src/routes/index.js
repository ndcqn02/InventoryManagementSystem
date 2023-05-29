import Home from '~/pages/Home'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

//Route khong can dang nhap van xem dc
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload , layout : null}

]

const privateRoutes = [
]


export {publicRoutes, privateRoutes} 