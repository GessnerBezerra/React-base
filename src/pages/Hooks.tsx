import React, { useEffect, useState } from 'react';
import TopSecret from '../components/TopSecret';


interface Props {
  id: number;
  titulo: string;
  descricao: string;
}

export const Hooks = () => {
  // aqui vai os hooks
  const [posts, setPosts] = useState<Props[]>([
    { id: Math.random(), titulo: 'Titulo 1', descricao: 'Descrição 1' },
  ]);

  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    console.log('Renderizou');
  }, []);

  useEffect(() => {
    console.log('Estado Atualizado!');
  }, [posts]);

  

  // aqui vai as funcoes
  function adicionar() {
    setPosts([
      ...posts,
      { id: Math.random(), titulo: 'Novo Titulo', descricao: 'Novo Descrição' },
    ]);
  }

  function moatrarConteudo(){
   setTimeout(() => {
    setMostrar(!mostrar);
  },3000)
  }

  // aqui o componente
  return (
    <div>
      {posts.map((post, index) => (
        <h2 key={post.id}>
          Titulo: {post.titulo} | Descrição: {post.descricao}
        </h2>
      ))}

      <button type='button' onClick={adicionar}>
        Adicionar Novo Post
      </button>
      &nbsp;
      <button type='button' onClick={moatrarConteudo}>
        {mostrar
          ? 'Ocultar Conteudo secreto | DANGER!🚫'
          : 'Mostrar Conteudo secreto | DANGER!🚫'}
      </button>
      <TopSecret ativo={mostrar}/>;

    </div>
  );
};