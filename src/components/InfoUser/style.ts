import styled from "styled-components";

interface IProps {
  availableFWork?: boolean;
}

export const Container = styled.article`
  height: 100%;
  min-height: 148px;

  background-color: white;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);

  position: relative;
  top: -148px;

  div {
  }
`;

export const InfoUserContainer = styled.div`
  padding: 25px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 15px;
  border-radius: 50%;
  object-fit: cover;
`;

export const InfoUser = styled.div<IProps>`
  height: 100%;
  min-height: 98px;

  h1 {
    width: 100%;
    max-width: 200px;
    margin-bottom: 8px;

    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 8px;
    font-size: 0.82rem;
  }

  img {
    width: 12px;
    margin-right: 8px;
    height: fit-content;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;

    font-size: 0.82rem;
    position: relative;

    &::before {
      content: "";
      position: relative;
      width: 14px;
      height: 14px;
      margin-right: 10px;

      border-radius: 50%;

      background-color: ${(props) =>
        props.availableFWork ? "#238D4D" : "#c63637"};
    }
  }
`;

export const MoreInfoContainer = styled.menu`
  padding: 15px 28px 25px 28px;
  div {
    &:nth-child(1) {

      button {
        padding: 8px 14px;
        border: 1px solid rgba(0, 0, 0, .8);
        border-radius: 5px;

        &:nth-child(1) {
          margin-right: 20px;
          background-color: rgba(0, 0, 0, .8);
          color: white;
        }

        &:nth-child(2) {
            background-color: white;
            color: black;
            font-weight: 500;
        }
      }
    }
  }
`;
