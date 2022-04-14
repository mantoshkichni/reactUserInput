export default function userTable(props) {
  var userData = props.userData;
  function deleteData(key) {
    console.log("data deleted");
    console.log(key);
    const data = userData.filter((item) => {
      return item.key !== key;
    });
    console.log(data);
    renderingData();
  }

  function renderingData() {
    return userData.map((user) => {
      return (
        <tr>
          <th scope="row">{user.name}</th>
          <td>{user.phone}</td>
          <td>{user.dob}</td>
          <td>{user.location}</td>
          <td>
            <button>
              <i class="bi bi-pencil"></i>
            </button>
          </td>
          <td>
            <button onClick={() => deleteData(user.key)}>
              {" "}
              <i class="bi bi-trash3"></i>
            </button>
          </td>
        </tr>
      );
    });
  }
  return (
    <div style={{ overflow: "scroll", height: "300px" }} className="mt-3">
      <table class=" container-float table table-dark  ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">PhoneNo</th>
            <th scope="col">DateofBirth</th>
            <th scope="col">LOcation</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.userData.map((user) => {
            return (
              <tr>
                <th scope="row">{user.name}</th>
                <td>{user.phone}</td>
                <td>{user.dob}</td>
                <td>{user.location}</td>
                <td>
                  <button>
                    <i class="bi bi-pencil"></i>
                  </button>
                </td>
                <td>
                  <button>
                    {" "}
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            );
          })} */}
          {renderingData()}
        </tbody>
      </table>
    </div>
  );
}
