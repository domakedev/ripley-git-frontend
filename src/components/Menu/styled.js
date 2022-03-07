import styled from 'styled-components'

export const MenuContainer = styled.div`
    /* width: ${(props) => (props.menuOpen ? '285px' : '78px')}; */
    display: flex;
    height: 100vh;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: all;
    position: fixed;
    transform: translateX(${(props) => (props.menuOpen ? '' : '-65px')});
    transition: transform 1s;
`

export const LogoContainer = styled.div`
    background: #000;
    border-radius: 0px 10px 10px 0px;
    width: 89px;
    min-height: 67px;
    display: flex;
    flex-basis: column;
    justify-content: center;
    align-items: center;
    margin-top: 41px;
    margin-bottom: 50px;
    margin-left: 10px;
    cursor: pointer;
`
export const BlueContainer = styled.div`
    height: 100vh;
    /* width: 5vw; */
    width: 78px;
    background: linear-gradient(180deg, #5c0094 0%, #9a39d6 74.48%);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 0px 16px 16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const LogoImage = styled.img`
    cursor: pointer;
`
