import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

// Componente que exibe a lista de cards e o botão "Mostrar mais"
function NewsCardList({ articles, visibleCount, onShowMore }) {
  const hasMoreArticles = visibleCount < articles.length;

  return (
    <section className="results">
      <div className="results__container">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      {hasMoreArticles && (
        <button className="results__show-more-button" onClick={onShowMore}>
          Mostrar mais
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
