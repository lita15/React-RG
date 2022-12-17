const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  // TODO: answer here
  const first = name.split(" ");
  return (
    <>
      <p className="fullName">Name: {name}</p>
      <p className="firstName">First name: {first[0]}</p>
      {isStudent === true ? (
        <p className="status"> Status: Student</p>
      ) : (
        <p className="status"> Status: Not student</p>
      )}
    </>
  );
}

export default App;
export { Student };
