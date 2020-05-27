import { findUser, deleteUser,addUser, updateUser } from '@/services/home'
const { pathToRegexp } = require('path-to-regexp')
export default {
  namespace: 'home',
  state: {
    data:[],
    opt:{}
  },
  subscriptions: {
    fn({history,dispatch}) {
      history.listen(({pathname}) => {
        const regexp = pathToRegexp('/').exec(pathname)  
        if (regexp ) {
            dispatch({type:'getselectDate'})
          }
      })
    }
  },
  effects: {
    //获取数据
    *getselectDate ({payload},{ call , put, select}) {
      const data= yield call(findUser)
      yield put({
        type:'Date',
        payload:data.users
      })
    },
    //删除数据
    *deletes ({payload},{ call , put, select}) {
      const data= yield call(() =>deleteUser(payload))
      if ( data.status ==='200'){
         yield put({
        type:'getselectDate',
      })
      }
    },
    //添加用户
    *add ({payload},{ call , put, select}) {
      const data= yield call(() =>addUser(payload))
      if ( data.status ==='200'){
         yield put({
        type:'getselectDate',
      })
      }
    },
    //编辑
    *udateusers ({payload},{ call , put, select}) {
      const data= yield call(() =>updateUser(payload))
      if ( data.status ==='200'){
         yield put({
        type:'getselectDate',
      })
      }
    },
  },
  reducers: {
    Date(state, action) {
      return { ...state, data:action.payload };
    },
    update(state, action) {
      return { ...state, opt:action.payload };
    }
  },
};