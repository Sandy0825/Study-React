import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id : 1,
        message: "안녕하세요1"
    },
    {
        id : 2,
        message: "안녕하세요22"
    },
    {
        id : 3,
        message: "안녕하세요333"
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ //state를 업데이트할때는 꼭 setState로!
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [], //다 보여주면 notifications 비우기
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    //리액트18버전에서 index.js에서 <React.StrictMode>(개발모드시 잠재적인 버그를 찾을 수 있게하는 것)로 두번호출되는것을 막기위해 쓰는 코드 
    // strictmode를 제거하거나 실 운영배포시에는 상관없음
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((noti) => {
                    return (
                        <Notification
                            key={noti.id} //key와 id 한쌍으로 고유값 필수!
                            id = {noti.id}
                            message={noti.message}
                        />
                    )
                })}
            </div>
        )
    }
}


export default NotificationList;