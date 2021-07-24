import React from 'react';
import { Link } from 'react-router-dom';

function TableAnime({ animeData }) {
  return (
    <section>
      <table>
        <tbody>
          {animeData.map((anime) => {
            return <tr key={anime.id}>
            <td>
            <Link to={`detalhes/${anime.id}`}>
              <img src={anime.attributes.posterImage.tiny} alt="poster"/>
            </Link>
            </td>
            <td>Nome: {anime.attributes.titles.en_jp}</td>
            <td>Episódios: {anime.attributes.episodeCount}</td>           
        </tr>
      })}
      </tbody>
      </table>
    </section>
  );
}

export default TableAnime;
