import React from "react";
import styled from "styled-components";


function SearchBar() {
    const Bar = styled.section`
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 5px;
        width: 100px;
        height: 30px;
        margin-top: 8%;

    `
    return(
        <div>
            <Bar>
                <p>Search</p>
            </Bar>
        </div>
    )
}

export default SearchBar;