import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  const heroImgUrl = `/assets/${hero.id}.jpg`;

  return (
    <>
      <div className="col animate__animated animate__fadeIn" key={hero.id}>
        <div className="card">
          <div className="row no-gutter">
            <div className="col-4">
              <img className="card-img" src={heroImgUrl} alt={hero.superhero} />
            </div>

            <div className="col-8">
              <div className="card-body">
                <p>Name: {hero.superhero}</p>
                <p>Alter ego: {hero.alter_ego}</p>
                {hero.alter_ego !== hero.characters && (
                  <p>Characters: {hero.characters}</p>
                )}
                <p className="card-text">
                  <small className="text-muted">
                    First appearance: {hero.first_appearance}
                  </small>
                </p>

                <Link to={`/hero/${hero.id}`}>Mas informacion...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
