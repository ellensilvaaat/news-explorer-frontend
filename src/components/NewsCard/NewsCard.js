import React from 'react';
import './NewsCard.css';

// Componente para um único card de notícia
function NewsCard({ article }) {
  // Formata a data para um formato mais legível
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="card">
       {article.urlToImage ? (
        <img className="card__image" src={article.urlToImage} alt={article.title} />
      ) : (
        <div className="card__image-placeholder">
          <p>[Imagem indisponível]</p>
        </div>
      )}
      <div className="card__content">
        <p className="card__date">{formattedDate}</p>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__text">{article.description}</p>
        <a className="card__link" href={article.url} target="_blank" rel="noopener noreferrer">
          {article.source.name}
        </a>
      </div>
    </article>
  );
}

export default NewsCard;
