import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding:10px;
    font-size:16px;
    cursor:pointer;
`;

function Button(props) {
    const { title, onClick } = props;

    return (
        <StyledButton onClick={onClick}>
            {title || "button"}
        </StyledButton>
    );
}

export default Button;