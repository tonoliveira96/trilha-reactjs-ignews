import Head from "next/head";
import styles from "./styles.module.scss";

export default function Post() {
  return (
    <>
      <Head>
        <title>Post | ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>08 de Novembro de 2021</time>
            <strong>Titulo do post</strong>
            <p>
              O primeiro passo para instalação do Git em sua máquina, é acessar
              o seu site para realizar o download do Git. Em seu site você
              encontra toda documentação, comunidade, download (para diferentes
              sistemas operacionais - Windows, Mac e Linux), empresas e projetos
              que utilizam o Git (Google, Facebook, Twitter, Netflix, entre
              outras) e muito mais.
            </p>
          </a>
          <a href="">
            <time>08 de Novembro de 2021</time>
            <strong>Titulo do post</strong>
            <p>
              O primeiro passo para instalação do Git em sua máquina, é acessar
              o seu site para realizar o download do Git. Em seu site você
              encontra toda documentação, comunidade, download (para diferentes
              sistemas operacionais - Windows, Mac e Linux), empresas e projetos
              que utilizam o Git (Google, Facebook, Twitter, Netflix, entre
              outras) e muito mais.
            </p>
          </a>
          <a href="">
            <time>08 de Novembro de 2021</time>
            <strong>Titulo do post</strong>
            <p>
              O primeiro passo para instalação do Git em sua máquina, é acessar
              o seu site para realizar o download do Git. Em seu site você
              encontra toda documentação, comunidade, download (para diferentes
              sistemas operacionais - Windows, Mac e Linux), empresas e projetos
              que utilizam o Git (Google, Facebook, Twitter, Netflix, entre
              outras) e muito mais.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
