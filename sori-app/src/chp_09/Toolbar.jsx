// 조건 랜더링하기
import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props){
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    return(
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다요!</span>}

            {isLoggedIn ? (<button onClick={onClickLogout}>LOGOUT</button>) : (<button onClick={onClickLogin}>LOGIN</button>)}
        </div>
    );
}

export default Toolbar;