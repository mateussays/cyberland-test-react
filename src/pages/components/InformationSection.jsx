import React from "react";
import "./../../App.scss";
import vector1 from "./../../images/vector1.png";
import vector2 from "./../../images/vector2.png";
import vector3 from "./../../images/vector3.png";

function InformationSection() {
  return (
    <section>
      <div className="info-container container">
        <div>
          <h1>O que fazer por aqui?</h1>
        </div>
        <div className="info-content">
          <div>
            <div className="div-content">
              <img src={vector1} alt="vetor" />
            </div>
            <h4>Os Melhores</h4>
            <p>
              Veja o que esta pegando fogo, no mundo dos animes. Os
              animes mais bem avaliados pela galera!
            </p>
          </div>
          <div>
            <div className="div-content">
              <img src={vector2} alt="vetor" />
            </div>
            <h4>Informações</h4>
            <p>Procure informações dos seus animes preferidos.</p>
          </div>
          <div>
            <div className="div-content">
              <img src={vector3} alt="vetor" />
            </div>
            <h4>Sua Lista</h4>
            <p>
              Comece agora mesmo a montar sua lista de animes preferidos, e seja
              notificado quando um episódio novo for ao ar!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
