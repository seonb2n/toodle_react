import axios from 'axios'
import IPSetService from "../service/IPSetService"

class AuthenticationService {
    /**
     * 서비스 내에서 execute 함수는 하나의 api 통신이다.
     * input param 은 검증이 끝난 상태,
     * return 객체는 dto 다.
     * 함수의 신뢰도의 목적(이 함수는 옳은 값을 받아서 통신하고 믿을 수 있는 값으로 반환한다)
     * @param email
     * @param password
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    API_SERVER_URL;

    constructor() {
        this.API_SERVER_URL = IPSetService.API_IP;
    }

    executeJwtAuthenticationService(email, password) {
        return axios.post(this.API_SERVER_URL + '/api/v1/users/login', {
            email,
            password
        });
    }

    checkUserEmailIsPresent(userEmail) {
        return axios.get(this.API_SERVER_URL + '/api/v1/users/checkEmail', {
            params: {
                "userEmail": userEmail
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }

    changeUserPassword(userEmail) {
        return axios.post(this.API_SERVER_URL + '/api/v1/users/changePassword', {
            "userEmail": userEmail
            });
    }

    registerUserAccount(userEmail, userPassword, userNickName) {
        return axios.post(this.API_SERVER_URL + '/api/v1/users/register', {
            "userEmail": userEmail,
            "userPassword": userPassword,
            "userNickName": userNickName
        })
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    }

    registerSuccessfulLoginForJwt(userEmail, token) {
        console.log("===registerSuccessfulLoginForJwt===");
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', userEmail);
        this.setupAxiosInterceptors();
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                console.log("interceptor");
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                //= config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        // console.log(token);

        if (token) {
            return true;
        }

        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if (user === null) return '';
        return user;
    }
}

export default new AuthenticationService();