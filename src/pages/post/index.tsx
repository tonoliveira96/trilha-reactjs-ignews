import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "./styles.module.scss";

import Prismic from "@prismicio/client"
import {getPrismicClient} from '../../services/prismic'

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

export const getStaticProps: GetStaticProps = async ()=>{
  const prismic  = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type','post')
  ],{
    fetch: ['post.title', 'post.content'],
    pageSize: 100
  })

  console.log(response)
  return {
    props:{}
  }
}
