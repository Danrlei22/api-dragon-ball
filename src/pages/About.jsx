import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <h2>Sobre o projeto: </h2>
        <p className={styles.pAbout}>
          Este projeto esta consumindo uma API de Dragon Ball feita pelo{" "}
          <strong>Antonio Alvarez</strong>e pode ser encontrada
          <a
            className={styles.linkAbout}
            href="https://web.dragonball-api.com/"
            target="_blank"
          >
            {" "}
            AQUI.
          </a>
        </p>
        <p className={styles.pAbout}>
          A API Dragon Ball é uma API REST abrangente inspirada na icônica série
          de televisão Dragon Ball. Esta API concede aos usuários acesso a um
          extenso banco de dados com centenas de personagens, imagens,
          transformações e planetas do universo Dragon Ball. Ela abrange
          informações canônicas derivadas de várias séries, incluindo Dragon
          Ball Z, Dragon Ball GT, Dragon Ball Super, bem como filmes e um toque
          de Dragon Ball Heroes.
        </p>
        <h2>Quem é você?</h2>
        <p className={styles.pAbout}>
          Sou <strong>Danrlei Vieira,</strong> um profissional com muitos sonhos
          e vontade de aprender e vencer. E este projeto é mais um feito para
          testar minhas habilidades e conhecimentos.
        </p>
        <h2>Direitos autorais</h2>
        <p className={styles.pAbout}>
          Todos os personagens, imagens e conteúdo relacionado de Dragon Ball
          apresentados neste projeto são propriedade intelectual de seus
          respectivos criadores, Akira Toriyama e Toei Animation. Reconhecemos e
          respeitamos seu trabalho criativo. Este projeto é uma iniciativa
          criada por fãs e não se destina a fins comerciais. Nenhuma violação de
          direitos autorais é pretendida, e todos os direitos de Dragon Ball
          pertencem aos seus legítimos proprietários.
        </p>
        <p className={styles.pAbout}>
          Este projeto é de código aberto e aceita contribuições da comunidade.
          Você pode encontrar o código-fonte{" "}
          <a
            className={styles.linkAbout}
            href="https://github.com/Danrlei22/api-dragon-ball.git"
            target="_blank"
          >
            {" "}
            AQUI.
          </a>{" "}
          Sinta-se à vontade para explorar, contribuir e aprimorar o projeto
          enquanto celebramos coletivamente nosso amor por Dragon Ball.
          Verifique a licença do projeto para obter mais detalhes sobre uso e
          distribuição.
        </p>
      </div>
    </div>
  );
}

export default About;
