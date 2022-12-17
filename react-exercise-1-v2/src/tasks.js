import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  return (
    <div className="">
      <h1>{props.name}</h1>
    </div>
  );
}

function Task2() {
  const [klik, setklik] = useState(false);
  const onClick = async () => {
    setklik(true);
  };
  // TODO: answer here

  return (
    <div>
      {klik ? <h1>Tombol telah di-klik!</h1> : <h1>Klik tombol di bawah</h1>}
      {/* TODO: replace this */}
      <button onClick={onClick}>
        {" "}
        {/* TODO: replace this */}
        Klik saya!
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return (
    <>
      {students.map((e) => (
        <h2>
          {e.name} - {e.age}
        </h2>
      ))}
    </>
  );
}

function Task3_1() {
  return (
    <>
      {students.map((e) => {
        return e.dropout === false ? (
          <h2>
            {e.name} - {e.age}
          </h2>
        ) : (
          ""
        );
      })}
    </>
  );
}

function Task4() {
  const [klik, setklik] = useState(false);
  const onClick = async () => {
    setklik(true);
  };
  // TODO: answer here

  return (
    <div>
      {klik ? <></> : <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}

      <button onClick={onClick}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
