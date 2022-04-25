import { createRouter, createWebHistory } from 'vue-router'
import auth from '../services/auth';
import UserInfoStore from '@/store/user-info-store';
import UserInfoApi from '@/services/user-info-api';
import LogoutSuccess from '@/components/LogoutSuccess';
import ErrorComponent from '@/components/ErrorComponent';
import HomeComponent from '@/components/Home'

function requireAuth(to, from, next) {
  
  if (!auth.auth.isUserSignedIn()) {
      UserInfoStore.setLoggedIn(false);
      next({
      path: '/login',
      query: { redirect: to.fullPath }
      });
  } else {
    UserInfoApi.getUserInfo().then(response => {
      UserInfoStore.setLoggedIn(true);
      UserInfoStore.setCognitoInfo(response);
      next();
    });
      
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    beforeEnter: requireAuth
  },
  {
    path: '/login', beforeEnter(){
      auth.auth.getSession();
    }
  },
  {
    path: '/login/oauth2/code/cognito', beforeEnter(){
      var currUrl = window.location.href;
      
      //console.log(currUrl);
      auth.auth.parseCognitoWebResponse(currUrl);
      //next();
    }
  },
  {
    path: '/logout', component: LogoutSuccess,  beforeEnter(to, from, next){
      auth.logout();
      next();
    }

  },
  {
    path: '/error', component: ErrorComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
