import React, { useState, useEffect } from "react";
import "./toastNotification.css";

function ToastNotification(props) {
    useEffect(() => {
        let timer = setTimeout(() => {
            props.setToastState(false);		// 2초 뒤, toastState가 false가 되면서 알림창이 사라진다
        }, 2000);

        return () => { clearTimeout(timer) }
    }, []);

    return (
        <div className="toast-alert">
            <p>{props.content}</p>
        </div>
    );
}

export { ToastNotification }