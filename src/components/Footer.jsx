import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.information}>
        <strong className={styles.info}>PERSONAGENS: 58 </strong>
        <strong className={styles.info}>TRANSFORMAÇÕES: 49</strong>
        <strong className={styles.info}>PLANETAS: 20</strong>
      </p>
      <hr />

      <div className={styles.icons}>
        <a
          className={styles.linkedin}
          href="https://www.linkedin.com/in/danrlei-vieira-85b335231/"
          target="_blank"
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          className={styles.github}
          href="https://github.com/Danrlei22"
          target="_blank"
        >
          <FaGithub className={styles.icon} />
        </a>
      </div>

      <p className={styles.dev}>
        &copy; Desenvolvido por: <strong>Danrlei 2025</strong>.
      </p>
    </footer>
  );
}

export default Footer;

/*
<h2>Sobre o projeto: </h2>
      <p>
        Este projeto esta consumindo uma API de Dragon Ball feita pelo{" "}
        <strong>Antonio Alvarez</strong>e pode ser encontrada no link:
        <a href="https://web.dragonball-api.com/">AQUI</a>
      </p>
      <p>
        A API Dragon Ball é uma API REST abrangente inspirada na icônica série
        de televisão Dragon Ball. Esta API concede aos usuários acesso a um
        extenso banco de dados com centenas de personagens, imagens,
        transformações e planetas do universo Dragon Ball. Ela abrange
        informações canônicas derivadas de várias séries, incluindo Dragon Ball
        Z, Dragon Ball GT, Dragon Ball Super, bem como filmes e um toque de
        Dragon Ball Heroes.
      </p>
      <h2>Quem é você?</h2>
      <p>
        Sou Danrlei Vieira, um profissional com muitos sonhos e vontade de
        aprender e vencer. E este projeto é mais um feito para testar minhas
        habilidades e conhecimentos.
      </p>
      <h2>Direitos autorais</h2>
      <p>
        Todos os personagens, imagens e conteúdo relacionado de Dragon Ball
        apresentados neste projeto são propriedade intelectual de seus
        respectivos criadores, Akira Toriyama e Toei Animation. Reconhecemos e
        respeitamos seu trabalho criativo. Este projeto é uma iniciativa criada
        por fãs e não se destina a fins comerciais. Nenhuma violação de direitos
        autorais é pretendida, e todos os direitos de Dragon Ball pertencem aos
        seus legítimos proprietários. Este projeto é de código aberto e aceita
        contribuições da comunidade. Você pode encontrar o código-fonte neste
        link . Sinta-se à vontade para explorar, contribuir e aprimorar o
        projeto enquanto celebramos coletivamente nosso amor por Dragon Ball.
        Verifique a licença do projeto para obter mais detalhes sobre uso e
        distribuição.
      </p>

*/
