// 함수 컴포넌트 만들기
import React, { useState } from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false); //확인여부
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;