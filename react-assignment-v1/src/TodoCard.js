function TodoCard({ todos, loading }) {
  return (
    <>
      <h1>TODO LIST</h1>
      {loading ? (
        <>
          {todos.map((e) => {
            return (
              <div
                className="todo-card "
                onClick={function () {
                  alert(`todo dengan id ${e.id} telah di clicked`);
                }}
              >
                <h2 key={e.id}>{e.title}</h2>
                <p>{e.completed ? "Completed" : "Not Completed"}</p>
              </div>
            );
          })}
        </>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default TodoCard;
