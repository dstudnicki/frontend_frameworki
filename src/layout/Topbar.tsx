import styled from "styled-components";

const Wrapper = styled.div`
    background: red;
`;

export const Topbar: React.FC = () => {
    return (
        <Wrapper>
            <div>
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="logo" />
                Navbar
            </div>
        </Wrapper>
    );
};
