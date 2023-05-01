/**
 * 현재 서버가 작동하는 IP 에 따라 다른 API IP 를 설정하도록 작동
 */
class IPSetService {

    API_IP;


    constructor() {
        const ipAddress = window.location.hostname;

        if (ipAddress === '54.180.54.238') {
            this.API_IP = 'http://' + ipAddress + ':8080';
        }
        else {
            this.API_IP = 'http://localhost:8080';
        }
    }
}