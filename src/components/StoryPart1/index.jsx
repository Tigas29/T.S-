// import { Link } from "react-router-dom";
import "animate.css";
import { ContainerStory } from "./style.js";
export function StoryFirstPart() {
  return (
    <ContainerStory>
      <div className="Patterns containerText">
        <h2 className="mediumTittleFirstPart ">
          De 2020 até 2022 eu trabalhava como
          <span className="purpleText"> Social Media </span> de forma autônoma.
        </h2>
        <p className="textFirstPart">
          Trabalhava para empresas que possuíam apenas comércios onlines e
          queriam impulsionar suas vendas através de Marketing e post para redes
          sociais.
        </p>
        <hr className="purpleLine" />
      </div>
    </ContainerStory>
  );
}
