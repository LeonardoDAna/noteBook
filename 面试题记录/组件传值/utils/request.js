import axios from 'axios'
import {
    MessageBox,
    Message
} from 'element-ui'
// import fpGet from 'lodash/fp/get'

// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API_SMART, // url = base url + request url
    baseURL: process.env.VUE_APP_BASE_API_U_CENTER,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 15000 // request timeout
})

// request interceptor
// request interceptor
service.interceptors.request.use(
    config => {
        const baseURL = process.env.VUE_APP_BASE_API_U_CENTER

        config.baseURL = baseURL

        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
console.log(process.env.VUE_APP_BASE_API_U_CENTER);
// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== undefined && res.code !== 200 && res.code !== 20000) {
            console.log(res)
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    //   store.dispatch('user/resetToken').then(() => {
                    //     window.location.reload()
                    //   })
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error) // for debug
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service