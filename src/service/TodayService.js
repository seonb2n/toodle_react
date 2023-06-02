import AuthenticationService from "./AuthenticationService";
import axios from "axios";

class TodayService {

    executeProjectGetService() {
        this.setUpAxiosInterceptors();
        return axios.get('http://localhost:8080/api/v1/projects');
    }

    executeProjectRegisterService(projectRequest) {
        this.setUpAxiosInterceptors();
        return axios.post('http://localhost:8080/api/v1/projects/register', {
            projectId: projectRequest.projectId,
            projectName: projectRequest.projectName,
            taskDtoSet: projectRequest.taskDtoSet
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    executePostItUpdateService(postItDtoList) {
        this.setUpAxiosInterceptors();
        return axios.post('http://localhost:8080/api/v1/postits/update', {
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