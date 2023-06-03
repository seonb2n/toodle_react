import AuthenticationService from "./AuthenticationService";
import axios from "axios";
import IPSetService from "./IPSetService";

class TodayService {

    API_SERVER_URL;

    constructor() {
        this.API_SERVER_URL = IPSetService.API_IP;
    }

    executeProjectGetService() {
        this.setUpAxiosInterceptors();
        return axios.get(this.API_SERVER_URL + '/api/v1/projects');
    }

    executeProjectRegisterService(projectRequest) {
        this.setUpAxiosInterceptors();
        return axios.post(this.API_SERVER_URL + '/api/v1/projects/register', {
            projectId: projectRequest.projectId,
            projectName: projectRequest.projectName,
            taskDtoSet: projectRequest.taskDtoSet
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                // 정상적으로 등록이 된 경우 today 페이지로 redirect 한다.
                window.location.pathname = '/today'
            }
        })
            ;
    }

    executePostItUpdateService(postItDtoList) {
        this.setUpAxiosInterceptors();
        return axios.post(this.API_SERVER_URL + '/api/v1/postits/update', {
            postItDtoList
        });
    }

    /**
     * generate UUID V4
     * @returns {*}
     */
    generateUUID() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    setUpAxiosInterceptors() {
        AuthenticationService.setupAxiosInterceptors();
    }
}

export default new TodayService();