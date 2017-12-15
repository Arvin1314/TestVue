
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://qa.weiweiwen.com';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     console.log("api-axios 错误的传参", 'fail');
    return Promise.reject(error);
});

    //返回状态判断
    axios.interceptors.response.use((res) =>{
        if(res.status ==200){
            return res.data;
        }
    }, (error) => {
        console.log("api-axios 网络异常", 'fail');
        return Promise.reject(error);
    });

export default {

         get(url,params) {
            return new Promise((resolve, reject)=>{
                axios.get(url, {params:params})
                .then(response => {
                    resolve(response);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })

            })
            
        },

         post(url,params) {
            return new Promise((resolve, reject)=>{
                axios.post(url, params)
                .then(response => {
                    resolve(response);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })

            })
            
        }
}
