import { useEffect, useState } from "react";

const RandomBeer = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://ih-beers-api2.herokuapp.com/beers/random", { signal })
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
      <p>Random Beer</p>
      <img src={beer["image_url"]} alt="beer" style={{ width: "50px" }} />
      <p>{beer.name}</p>
      <p>{beer["tagline"]}</p>
      <p>{beer.description}</p>
    </section>
  );
};

export default RandomBeer;
