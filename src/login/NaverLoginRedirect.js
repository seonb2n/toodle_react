import {useEffect} from "react";

export default function NaverLoginRedirect() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let token = urlParams.get('token');
        console.log(token);
        localStorage.setItem("token", token);
        window.location.replace("/postit");
    }, []);

    return (<></>);
}