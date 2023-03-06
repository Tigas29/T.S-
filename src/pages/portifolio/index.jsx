import { Header } from "../../components/header/index.jsx";
import { Container, ConfigSize } from "./style";
import { StoryFirstPart } from "../../components/StoryPart1/index.jsx";
import { FrontCover } from "../../components/HomeFrontCover/index.jsx";
export default function Portifolio() {
  return (
    <div>
      <Header />
      <Container>
        <ConfigSize>
          <hr />
          <FrontCover />
          <StoryFirstPart />
        </ConfigSize>
      </Container>
    </div>
  );
}
