import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
export function StoryFifthPart() {
  return (
    <ContainerStory>
      <div className="Patterns containerText">
        <h2 className="mediumTittleFirstPart ">Desenvolvedor web</h2>
        <Link to="/">
          <button className="goPage textAcessibility">Ver projetos </button>
        </Link>
      </div>
    </ContainerStory>
  );
}
