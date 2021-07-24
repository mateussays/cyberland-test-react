import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../services/api";
import Footer from "./components/Footer";
import HeaderHome from "./components/HeaderHome";
import './../App.scss';

function Detail() {
  const { id } = useParams();
  const animeData = useSelector((state) => state.animeData);
  const animeDetail = animeData.find((anime) => anime.id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <>
      <HeaderHome />
      <section className="container">
        <div className="detail-container">
          <div className="left-side-detail">
            <div className="img-detail">
              <img
                src={animeDetail.attributes.posterImage.small}
                alt={animeDetail.attributes.titles.en_jp}
              />
            </div>
            <div>
              <h3>{animeDetail.attributes.titles.en_jp}</h3>
              <p>{animeDetail.attributes.synopsis}</p>
            </div>
          </div>
          <div className="more-info-container">
            <h3>Mais informações:</h3>
            <p>
              <span>Total de episódios:</span>{" "}
              {animeDetail.attributes.episodeCount}
            </p>
            <p>
              <span>Classificação Indicativa:</span>{" "}
              {animeDetail.attributes.ageRatingGuide}
            </p>
            <p>
              <span>Status:</span>{" "}
              {animeDetail.attributes.status === "finished"
                ? "finalizada"
                : "em andamento"}
            </p>
            <p>
              <span>Ranking de Popularidade:</span>{" "}
              {animeDetail.attributes.popularityRank}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Detail;
