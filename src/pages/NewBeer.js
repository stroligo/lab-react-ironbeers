import { useRef } from "react";

const NewBeer = () => {
  const nameRef = useRef("");
  const taglineRef = useRef("");
  const descriptionRef = useRef("");
  const firstBrewedRef = useRef("");
  const brewersTipsRef = useRef("");
  const attenuationLevelRef = useRef(0);
  const contributedByRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const sent = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', form)

    const payload = {
      name: nameRef.current.value,
      tagline: taglineRef.current.value,
      description: descriptionRef.current.value,
      first_brewed: firstBrewedRef.current.value,
      brewers_tips: brewersTipsRef.current.value,
      attenuation_level: 0,
      contributed_by: contributedByRef.current.value,
    };

    console.log(payload);

    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((status) => {
        console.log(status);
      });

    nameRef.current.value = "";
    taglineRef.current.value = "";
    descriptionRef.current.value = "";
    firstBrewedRef.current.value = "";
    brewersTipsRef.current.value = "";
    contributedByRef.current.value = "";
  };

  return (
    <section>
      <p>MAKE YOUR OWN BEER!!</p>

      <form onSubmit={handleSubmit} style={{}}>
        <label>
          Nome
          <input
            name="name"
            defaultValue={nameRef.current.value}
            ref={nameRef}
            type="text"
          />
        </label>
        <label>
          TagLine
          <input
            name="tagline"
            defaultValue={taglineRef.current.value}
            ref={taglineRef}
            type="text"
          />
        </label>
        <label>
          Descrição
          <textarea
            name="description"
            defaultValue={descriptionRef.current.value}
            ref={descriptionRef}
            rows={10}
            cols={40}
          />
        </label>
        <label>
          First Brewed
          <input
            name="first_brewed"
            defaultValue={firstBrewedRef.current.value}
            ref={firstBrewedRef}
            type="text"
          />
        </label>
        <label>
          Brewers tips
          <input
            name="brewers_tips"
            defaultValue={brewersTipsRef.current.value}
            ref={brewersTipsRef}
            type="text"
          />
        </label>
        <label>
          Attenuation level
          <input
            name="attenuation_level"
            defaultValue={attenuationLevelRef.current.value}
            ref={attenuationLevelRef}
            type="number"
          />
        </label>
        <label>
          Contribuição de
          <input
            name="contributed_by"
            defaultValue={contributedByRef.current.value}
            ref={contributedByRef}
            type="text"
          />
        </label>

        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
};

export default NewBeer;
