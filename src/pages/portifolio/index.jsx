import { Header } from "../../components/header/index.jsx";
import { Container, ConfigSize } from "./style";
import { StoryFirstPart } from "../../components/StoryPart1/index.jsx";
import { FrontCover } from "../../components/HomeFrontCover/index.jsx";
import { StorySecondPart } from "../../components/StoryPart2/index";
import { StoryThirdPart } from "../../components/StoryPart3/index";
import { StoryFourthPart } from "../../components/StoryPart4/index";
import { StoryFifthPart } from "../../components/StoryPart5/index";
export default function Portifolio() {
  return (
    <div>
      <Header />
      <Container>
        <ConfigSize>
          <FrontCover />
          <StoryFirstPart />
        </ConfigSize>
      </Container>
    </div>
  );
}
