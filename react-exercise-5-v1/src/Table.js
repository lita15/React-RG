function Table({ mentors, onClick, refresh }) {
  return (
    <>
      {refresh ? <></> : <button onClick={onClick}>Refresh</button>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>House</th>
            <th>Email</th>
          </tr>
        </thead>

        {refresh ? (
          <>
            {mentors.map((e) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.house}</td>
                      <td>{e.email}</td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </>
        ) : (
          <>
            {" "}
            <tbody>
              <tr>
                <td>Data not available</td>
                <td>Data not available</td>
                <td>Data not available</td>
              </tr>
            </tbody>
          </>
        )}
      </table>
    </>
  );
}

export default Table;
