import {useState} from "react";
import axios from "axios";

function Cors() {

    const [message, setMessage] = useState('');

    const responseHandler = ({data}) => {
        setMessage(data);
        return data;
    };

    const errorHandler = ({message}) => {
        setMessage(message);
        return message;
    };

    const onNonCorsHeaderHandler = () => {
        axios.get('http://localhost:8080/cors/not-cors')
            .then(responseHandler)
            .catch(errorHandler);
    };

    const onCorsHeaderHandler = () => {
        axios.get('http://localhost:8080/cors/cors').then(responseHandler);
    };

    const onNonProxyHandler = () => {
        axios.get('/cors/not-proxy')
            .then(responseHandler)
            .catch(errorHandler);
    };

    const onProxyHandler = () => {
        axios.get('/cors/proxy').then(responseHandler);
    };

    return (
        <div className="App">
            <p>
                {message}
            </p>
            <div>
                <div onClick={onNonCorsHeaderHandler}>non cors header</div>
                <div onClick={onCorsHeaderHandler}>cors header</div>
                <div onClick={onNonProxyHandler}>nonProxy</div>
                <div onClick={onProxyHandler}>proxy</div>
            </div>
        </div>
    );
}

export default Cors;