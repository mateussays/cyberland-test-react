import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getData } from '../services/api';

function Detail() {
  const { id } = useParams();
  const animeData  = useSelector((state) =>  state.animeData);
  const animeDetail = animeData.find((anime) => anime.id === id);

  const dispatch = useDispatch();

  useEffect(() => {
     getData(dispatch);
  }, [dispatch]);

  return (
    <div>
      <img src={animeDetail.attributes.posterImage.small} alt={animeDetail.attributes.titles.en_jp} />
      <h3>{animeDetail.attributes.titles.en_jp}</h3>
      <p>{animeDetail.attributes.synopsis}</p>
      <h3>Mais informações:</h3>
      <p><span>Total de episódios:</span> {animeDetail.attributes.episodeCount}</p>
      <p><span>Classificação Indicativa:</span> {animeDetail.attributes.ageRatingGuide}</p>
      <p>
        <span>Status:</span> {animeDetail.attributes.status === 'finished' ? 'finalizada' : 'em andamento'}
      </p>
      <p><span>Ranking de Popularidade:</span> {animeDetail.attributes.popularityRank}</p>
    </div>
  );
}

export default Detail;
