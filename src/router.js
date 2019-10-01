import VueRouter from 'vue-router'
import Home from './components/tabbar/HomeContainer.vue'
import Member from './components/tabbar/MemberContainer.vue'
import ShoppingCar from './components/tabbar/ShoppingCarContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/Photolist.vue'
import PhotoInfo from './components/photos/Photoinfo.vue'
// 商品列表页
import ProductList from './components/products/ProductList.vue'
// 商品详情页
import ProductInfo from './components/products/ProductInfo.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/Home' },
    { path: '/Home', component: Home },
    { path: '/Member', component: Member },
    { path: '/ShoppingCart', component: ShoppingCar },
    { path: '/Search', component: Search },
    { path: '/Home/newslist', component: NewsList },
    { 
      path: '/Home/newsInfo/:id', 
      component: NewsInfo,
      props: true 
    },
    { path: '/Home/photolist', component: PhotoList },
    { 
      path: '/Home/photoinfo/:id',
      component: PhotoInfo,
      props: true
    },
    { path: '/Home/productlist', component: ProductList },
    { 
      path: '/Home/productinfo/:id',
      component: ProductInfo,
      props: true
    }
  ],
  linkActiveClass: 'mui-active'
})

export default router
