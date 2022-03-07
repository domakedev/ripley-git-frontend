import styled from 'styled-components'

export const MenuContainer = styled.div`
    /* width: ${(props) => (props.menuOpen ? '285px' : '78px')}; */
    display: flex;
    height: 100vh;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: all;
    position: absolute;
    transform: translateX(${(props) => (props.menuOpen ? '' : '-60px')});
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
    background: linear-gradient(180deg, #6f28e0 0%, #1d8cea 55.73%);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 0px 16px 16px 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const WhiteContainer = styled.div`
    height: 100vh;
    width: ${(props) => (props.menuOpen ? '207px' : '0px')};
    /* width: 207px; */
    background: white;
    transition: width 1s;
    padding-top: 171px;
`

export const SimpleText = styled.p`
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 22px;
    width: ${(props) => (props.menuOpen ? '100%' : '0px')};
    color: ${(props) => (props.menuOpen ? ' #6d6d6d' : 'transparent')};
    text-align: left;
    margin-bottom: 45px;
    padding-left: ${(props) => (props.menuOpen ? '65px' : '0px')};
    position: relative;
    overflow: ${(props) => (props.menuOpen ? '' : 'hidden')};
    transition: width 1s;
    transition: color 1s;
    ::after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #c2c2c2;
        width: ${(props) => (props.menuOpen ? '256px' : '0px')};
        bottom: -26px;
        left: 18px;
        transition: width 1s;
    }
`

export const LogoImage = styled.img`
    cursor: pointer;
`

export const NavIcon = styled.img`
    cursor: pointer;
    width: 22px;
    height: 23px;
    margin: 9px 0px 34px 0px;
`

export const LastNavIcon = styled.img`
    cursor: pointer;
    width: 22px;
    height: 23px;
    margin-top: 140px;
`

export const SimpleTextLogout = styled(SimpleText)`
    margin-top: 173px;
    ::before {
        content: '';
        position: absolute;
        border-bottom: 1px solid #c2c2c2;
        width: ${(props) => (props.menuOpen ? '256px' : '0px')};
        top: -26px;
        left: 18px;
        transition: width 1s;
    }
`
