import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BeerDetails = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Request cancelled!");
        } else {
          //TODO: handle other errors.
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section>
      <img src={beer["image_url"]} alt="beer" style={{ width: "50px" }} />
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
      <p>{beer.brewers_tips}</p>

      <Link to="/beers">Voltar</Link>
    </section>
  );
};

export default BeerDetails;
