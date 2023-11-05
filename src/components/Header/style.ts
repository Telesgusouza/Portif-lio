import styled from "styled-components";
// import bg from '../../assets/banner.png'

interface IProps {
    bgImg: string
}

export const Container = styled.div<IProps>`
  width: 100%;
  height: 250px;
  
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
