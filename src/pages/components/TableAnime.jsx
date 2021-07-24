import React from 'react';

function TableAnime({ animeData }) {
  return (
    <section>
      <table>
        <tbody>
          {animeData.map((anime) => {
            return <tr key={anime.id}>
            <td><img src={anime.attributes.posterImage.tiny} alt="poster"/></td>
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
