import { Container } from "./style";
import pencil from "../../imgs/linktree/pencil.svg";
import tagP from "../../imgs/linktree/tagP.svg";
import myPhoto from "../../imgs/linktree/MyPhoto.png";
export default function LinkTree() {
  const links = [
    {
      id: 1,
      href: "https://www.behance.net/tiagosantos67",
      title: "Behance",
      class: "link  behance",
      text: "Site para  trabalhos artísticos",
    },
    {
      id: 2,
      href: "https://github.com/Tigas29",
      title: "Github",
      class: "link  github",
      text: "Site para versionamos código de projetos ",
    },
    {
      id: 3,
      href: "http://www.linkedin.com/in/tigass",
      title: "LinkedIn",
      class: "link  linkedin",
      text: "Onde mostro o que eu ando fazendo",
    },
  ];
  return (
    <Container>
      <img
        className="imgBackground"
        src={pencil}
        alt="imagem ilustrativa retratando area de design"
      />
      <section className="col">
        <div className="introductionContainer col">
          <img src={myPhoto} alt="foto abstrata minha" />
          <h1>Tiago Santos (Tigas)</h1>
          <h2>@_santostiagoo</h2>
        </div>
        <ol className="col">
          <li> 💻 Desenvolvedor</li>
          <li> 🎨 Designer</li>
          <li>🎸 Gosto de tocar instrumentos</li>
        </ol>
        <p>↓ Vem comigo ↓</p>

        <div className="linksContainer ">
          {links.map((item) => (
            <a href={item.href} key={item.id}>
              <div className={item.class}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <img
        className="imgBackground"
        src={tagP}
        alt="imagem ilustrativa retratando area de dev"
      />
    </Container>
  );
}
