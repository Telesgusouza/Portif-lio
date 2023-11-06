import * as Styled from "./style";

import iconLocation from "../../assets/icons/location.svg";

import avatarTest from "../../assets/banner.png";

export default function InfoUser() {
  return (
    <Styled.Container>
      <Styled.InfoUserContainer>
        <Styled.Avatar src={avatarTest} alt="avatar usúario" />

        <Styled.InfoUser availableFWork={false}>
          <h1>Nome Usuario Usuario Usuario Usuario</h1>
          <span>Trabalho usuario</span>
          <div>
            <img src={iconLocation} alt="icone de localização" />
            BR
          </div>
          <p>Disponivel para trabalho</p>
        </Styled.InfoUser>
      </Styled.InfoUserContainer>

      <Styled.MoreInfoContainer>
        <div>
          <button>Contrate agora</button>
          <button>Trabalho recente</button>
        </div>
        <div></div>
        <div></div>
      </Styled.MoreInfoContainer>
    </Styled.Container>
  );
}
