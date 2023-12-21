import { useContext } from "react";
import ThemeContext from "./ThemeContext";

//현재설정된 ThemeContext의 테마값을 받아와 실제화면의 컨텐츠를 랜더링
function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마를 선택해보세요</p>
            <button onClick={toggleTheme}>테마변경</button>
        </div>
    );

}

export default MainContent;