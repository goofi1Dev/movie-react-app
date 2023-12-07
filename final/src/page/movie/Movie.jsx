import React, { useEffect, useState } from "react";
import "./movie.css";

function Movie() {
  const [endPoint, setEndPoint] = useState("");
  const [conteiner, setConteiner] = useState([]);
  // console.log(conteiner);
  const [finalPoint, setFinalPoint] = useState("");

  useEffect(() => {
    fetchMovie();
  }, [finalPoint]);

  const fetchMovie = () => {
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "061150c722msh8f609c3af4c22c3p1c8c9ejsn447eb7ba0e09",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setConteiner(data.d);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };

  const submitHamdler = (e) => {
    e.preventDefault();
    setFinalPoint(endPoint);
  };

  return (
    <section>
      <div className="movieSection">
        <div className="movie">
          <form onSubmit={submitHamdler}>
            <input
              type="text"
              value={endPoint}
              onChange={onChangeHandler}
              placeholder="Search Some Movie ..."
            />
            <button className="NavBtn" type="submit">
              Submit
            </button>
          </form>

          <div className="element">
            {conteiner.map((item, index) => {
              return (
                <div key={index} className="element-div">
                  <div className="image box">
                    <img
                      className="image_img"
                      src={item.i.imageUrl}
                      alt={item.id}
                    />
                    <div className="image_overlay">
                      <span>ACTORS:</span>
                      <div className="image_title">{item.s} </div>
                      <p className="image_description">{item.y}</p>
                    </div>
                  </div>
                  <h1>GANRE: {item.q} </h1>
                  <h1>{item.yr} </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
