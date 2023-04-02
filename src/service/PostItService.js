import AuthenticationService from "./AuthenticationService";
import axios from "axios";

class PostItService {

    executePostItGetService() {
        this.setUpAxiosInterceptors();
        return axios.get('http://localhost:8080/api/v1/postits');
    }

    executePostItUpdateService(postItCategoryDtoList ,postItDtoList) {
        this.setUpAxiosInterceptors();
        return axios.post('http://localhost:8080/api/v1/postits/update', {
            postItCategoryDtoList,
            postItDtoList
        });
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

    setUpAxiosInterceptors() {
        AuthenticationService.setupAxiosInterceptors();
    }
}

export default new PostItService();