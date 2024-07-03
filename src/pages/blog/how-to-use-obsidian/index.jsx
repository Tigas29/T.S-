import { Header } from "../../../components/header/index.jsx";
import { useEffect, useState } from "react";
import { Container, ConfigSize, Media } from "./style"; // Certifique-se de importar Media se não estiver importado
import Footer from "../../../components/footer/index.jsx";
import photo from "../../../imgs/blog/obsidian/BACKGROUND.webp";
export default function Portfolio() {
  // URL do vídeo do YouTube
  const videoUrl =
    "https://www.youtube.com/embed/3DFwmDMdx9Y?si=p21dezcWsqTgWo2p";
  const photoone =
    "https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <Header />
      <Container>
        <div className="containerBanner">
          <h1>Como usar o Obsidian</h1>
          <img src={photo} alt="imagem de capa" />
        </div>
        <ConfigSize>
          <div className="gap">
            <h2>Introdução ao Obsidian</h2>
            <p>
              Obsidian é um aplicativo de anotações e gestão de conhecimento
              pessoal que utiliza arquivos de texto simples em formato Markdown.
              Ele oferece uma interface poderosa e altamente personalizável, com
              funcionalidades que permitem organizar, interconectar e visualizar
              suas notas de maneira eficiente.
            </p>
          </div>
          <div className="imageSection">
            <img src={photoone} alt="Descrição da imagem" />
          </div>
          <div className="gap">
            <h2>Primeiros Passos</h2>
            <h3>Instalação</h3>
            <ol>
              <li>
                <b>Baixe o Obsidian:</b> Acesse o{" "}
                <a
                  href="https://obsidian.md/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  site oficial do Obsidian
                </a>{" "}
                e baixe a versão compatível com o seu sistema operacional
                (Windows, macOS, Linux).
              </li>
              <li>
                <b>Instale o Obsidian:</b> Siga as instruções de instalação
                conforme o seu sistema operacional.
              </li>
            </ol>
          </div>
          <div className="gap">
            <h3>Configuração Inicial</h3>
            <ol>
              <li>
                <b>Crie um Vault:</b> Um Vault é o repositório onde todas as
                suas notas serão armazenadas. Ao abrir o Obsidian pela primeira
                vez, você será solicitado a criar um novo Vault ou abrir um
                existente. Escolha "Create new vault" e dê um nome a ele.
                Selecione o diretório onde deseja salvar suas notas.
              </li>
            </ol>
          </div>

          <h2>Navegação Básica</h2>
          <h3>Interface do Usuário</h3>
          <p>A interface do Obsidian é dividida em várias partes principais:</p>
          <ul>
            <li>
              <b>Painel de Navegação:</b> Localizado à esquerda, ele permite
              acessar rapidamente suas notas, pastas e plugins.
            </li>
            <li>
              <b>Área de Edição:</b> Onde você cria e edita suas notas em
              Markdown.
            </li>
            <li>
              <b>Painel de Pré-visualização:</b> Mostra como sua nota ficará
              formatada em Markdown.
            </li>
            <li>
              <b>Painel de Plugins:</b> À direita, permite gerenciar e
              configurar plugins adicionais para expandir as funcionalidades do
              Obsidian.
            </li>
          </ul>

          <h3>Criando e Editando Notas</h3>
          <ol>
            <li>
              <b>Criar uma Nova Nota:</b> Clique no ícone "+" na parte superior
              ou use o atalho <code>Ctrl+N</code> (Windows/Linux) ou{" "}
              <code>Cmd+N</code> (macOS).
            </li>
            <li>
              <b>Editando Notas:</b> Escreva suas notas usando sintaxe Markdown.
              Exemplo básico:
              <pre>
                <code>
                  {`
# Título da Nota

Esta é uma **nota** de exemplo.

- Item 1
- Item 2

[Link para outra nota](outra-nota.md)
`}
                </code>
              </pre>
            </li>
            <li>
              <b>Salvar Notas:</b> O Obsidian salva automaticamente suas notas
              enquanto você as escreve.
            </li>
          </ol>

          <h2>Funcionalidades Avançadas</h2>
          <h3>Links e Backlinks</h3>
          <ul>
            <li>
              <b>Criar Links:</b> Use a sintaxe{" "}
              <code>[Nome do Link](caminho/para/nota.md)</code> para criar links
              entre notas.
            </li>
            <li>
              <b>Backlinks:</b> O Obsidian automaticamente mostra backlinks
              (notas que linkam para a nota atual) no painel à direita,
              facilitando a navegação entre notas relacionadas.
            </li>
          </ul>

          <h3>Plugins</h3>
          <ul>
            <li>
              <b>Gerenciar Plugins:</b> Acesse o painel de plugins clicando no
              ícone de engrenagem. Explore e instale plugins da comunidade para
              adicionar funcionalidades, como gráficos, agendas e integração com
              outras ferramentas.
            </li>
          </ul>

          <h3>Visualização em Grafos</h3>
          <p>
            <b>Graph View:</b> Clique no ícone de gráfico para visualizar uma
            rede interconectada de todas as suas notas. Isso ajuda a identificar
            relacionamentos e padrões em suas anotações.
          </p>

          <h2>Adicionando Mídia</h2>
          <div className="mediaSection">
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="Vídeo sobre como usar o Obsidian"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2>Conclusão</h2>
          <p>
            O Obsidian é uma ferramenta poderosa para organização e gestão de
            conhecimento pessoal. Com sua flexibilidade e extensibilidade
            através de plugins, ele pode ser adaptado para uma ampla variedade
            de usos, desde simples anotações até complexos bancos de dados de
            conhecimento. Experimente suas funcionalidades e ajuste-o conforme
            suas necessidades para aproveitar ao máximo este incrível
            aplicativo.
          </p>
        </ConfigSize>
        <Footer />
      </Container>
    </div>
  );
}
