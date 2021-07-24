import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "./../../App.scss";
import vector2 from "./../../images/vector2.png";

function TableAnime({ animeData }) {
  return (
    <section className="container">
      <div className="container-table">
        <div className="title-table">
          <img src={ vector2 } alt="vetor"/>
          <h4>Veja Animes</h4>
        </div>
        <table>
          <tbody>
            {animeData.map((anime) => {
              return (
                <tr key={anime.id}>
                  <td>
                      <img
                        src={anime.attributes.posterImage.tiny}
                        alt="poster"
                      />
                  </td>
                  <td>Nome: {anime.attributes.titles.en_jp}</td>
                  <td>Episódios: {anime.attributes.episodeCount}</td>
                  <td className="td-play">
                    <Link to={`detalhes/${anime.id}`}><FontAwesomeIcon icon={faPlay} /></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TableAnime;
