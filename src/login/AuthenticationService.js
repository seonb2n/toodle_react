import axios from 'axios'

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
    executeJwtAuthenticationService(email, password) {
        return axios.post('http://localhost:8080/api/v1/users/login', {
            email,
            password
        });
    }

    executeTodayService() {
        console.log("===executeTodayService===");
        return axios.get('http://localhost:8080/today');
    }

    executePostItGetService() {
        this.setupAxiosInterceptors();
        return axios.get('http://localhost:8080/api/v1/postits');
    }

    executePostItUpdateService(postItDtoList) {
        this.setupAxiosInterceptors();
        return axios.post('http://localhost:8080/api/v1/postits/update', {
            postItDtoList
        });
    }

    registerSuccessfulLoginForJwt(userEmail, token) {
        console.log("===registerSuccessfulLoginForJwt===");
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', userEmail);
        this.setupAxiosInterceptors();
    }

    executeProjectGetService() {
        this.setupAxiosInterceptors();
        return axios.get('http://localhost:8080/api/v1/projects');
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
        console.log(token);

        if (token) {
            return true;
        }

        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }

    /**
     * generate UUID V4
     * @returns {*}
     */
    generateUUID() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
}

export default new AuthenticationService();