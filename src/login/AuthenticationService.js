import axios from 'axios'

class AuthenticationService {

    executeJwtAuthenticationService(email, password) {
        return axios.post('http://localhost:8080/api/v1/users/authenticate', {
            email,
            password
        });
    }

    executeTodayService() {
        console.log("===executeTodayService===");
        return axios.get('http://localhost:8080/today');
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
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
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
}

export default new AuthenticationService();