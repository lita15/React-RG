// TODO: answer here
import { useState, useEffect } from "react";
import Task1 from "./tasks";

const App = () => {
  const [all, setAll] = useState({});
  const [val, setVal] = useState("All");
  const [loadingA, setLoadingA] = useState(true);
  const [loadingB, setLoadingB] = useState(true);
  const [loadingC, setLoadingC] = useState(true);

  const [basic, setBasic] = useState({});
  const [creator, setCreator] = useState({});
  console.log(val);

  useEffect(() => {
    if (val === "All") {
      const getAll = async () => {
        const b = await fetch(
          "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
        );
        console.log(b);
        const parse = await b.json();
        console.log(parse);
        setAll(parse);
        setLoadingA(false);
      };
      getAll();
    }
    if (val === "Basic") {
      const getBasic = async () => {
        const basic = await fetch(
          "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49?fields=title,description"
        );
        const parse = await basic.json();
        console.log(parse);
        setBasic(parse);
        setLoadingB(false);
      };

      getBasic();
    }

    if (val === "Basic with Creator") {
      const getWithCreator = async () => {
        const creator = await fetch(
          "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49?fields=title,description,director,producer"
        );
        const parse = await creator.json();
        console.log(parse);
        setCreator(parse);
        setLoadingC(false);
      };
      getWithCreator();
    }
  }, [val]);

  return (
    <div>
      <select onChange={(e) => setVal(e.target.value)}>
        <option value="All">All</option>
        <option value="Basic">Basic</option>
        <option value="Basic with Creator">Basic with Creator</option>
      </select>
      <>
        <Task1
          val={val}
          all={all}
          basic={basic}
          loadingA={loadingA}
          loadingB={loadingB}
          loadingC={loadingC}
          creator={creator}
          // load={load}
        />
      </>
    </div>
  );
};

export default App;
