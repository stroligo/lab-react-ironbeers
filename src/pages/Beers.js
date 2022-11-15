import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeer, setFilteredBeer] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://ih-beers-api2.herokuapp.com/beers", { signal })
      // Valida se encontrou o JSON
      .then((res) => res.json())
      // Valida se tem data
      .then((data) => setBeers(data))
      // Caso erro aborta
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
      <label>Search</label>
      <input
        type="text"
        onChange={(search) => setFilteredBeer(search.target.value)}
      />

      {beers
        .filter((beer) =>
          beer.name.toLowerCase().includes(filteredBeer.toLowerCase())
        )
        .map((beer) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                src={beer["image_url"]}
                alt="beer"
                style={{ width: "100px" }}
              />
              <div style={{ flexDirection: "column" }}>
                <Link to={`/beers/${beer["_id"]}`}>
                  {" "}
                  <p>Name: {beer.name}</p>{" "}
                </Link>
                <p>{beer["tagline"]}</p>
                <p>Created By: {beer["contributed_by"]}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Beers;
