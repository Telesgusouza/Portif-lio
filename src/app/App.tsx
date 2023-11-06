import * as Styled from "./style";
import Header from "../components/Header";
import InfoUser from "../components/InfoUser";

function App() {
  return (
    <Styled.Container>
      <Header />

      <Styled.SectionInfo className="box" >
        <InfoUser />
      </Styled.SectionInfo>
    </Styled.Container>
  );
}

export default App;
