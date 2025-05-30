import "bootstrap/dist/css/bootstrap.min.css";
import "./UserList.css";
import HomeButton from "./HomeButton.jsx";

function UserList() {
  const users = [
    {
      name: "Akash",
      post: "Admin",
      email: "akash@gmail.com",
      ta: "0",
      tc: "0",
      ted: "0",
      cts: "None",
      ctd: "None",
    },
    {
      name: "Braj",
      post: "Manager",
      email: "braj@gmail.com",
      ta: "10",
      tc: "4",
      ted: "6",
      cts: "Completed",
      ctd: "06-06-25",
    },
    {
      name: "Mahajan",
      post: "Employee",
      email: "mahajan@gmail.com",
      ta: "80",
      tc: "79",
      ted: "1",
      cts: "Unbegun",
      ctd: "10-06-25",
    },
    {
      name: "Dev",
      post: "Employee",
      email: "dev@gmail.com",
      ta: "50",
      tc: "30",
      ted: "20",
      cts: "Pending",
      ctd: "02-06-25",
    },
  ];

  const getTedColor = (ted, ta) => {
    const percent = (ted / ta) * 100;
    if (percent > 30) return "text-danger";
    if (percent > 10) return "text-warning";
    if (percent > 5) return "text-success";
    return "text-success fw-bold"; // <5%
  };

  const getTcColor = (tc, ta) => {
    const percent = (tc / ta) * 100;
    if (percent > 95) return "text-success fw-bold";
    if (percent > 70) return "text-success";
    if (percent > 40) return "text-warning";
    return "text-danger";
  };

  const getDeadlineColor = (deadline) => {
    if (!deadline || deadline === "none") return "text-white";
    const diffDays = Math.ceil(
      (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays <= 3) return "text-danger";
    if (diffDays <= 10) return "text-warning";
    return "text-success";
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "Pending":
        return "text-warning";
      case "Completed":
        return "text-success";
      case "Unbegun":
        return "text-danger";
      default:
        return "text-white";
    }
  };

  return (
    <>
      <div
        className="container mt-4"
        style={{
          // backgroundColor: "#c3dfe0",
          // width:'1000%',
          backgroundColor: "#0d1319",
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <HomeButton />
          <h1
            className="text-center flex-grow-1 mb-0"
            style={{ color: "white" }}
          >
            User Panel
          </h1>
          <div style={{ width: "75px" }}></div>{" "}
        </div>
        <hr style={{ color: "white" }}></hr>
        <div
          className="list-group"
          style={{
            maxHeight: "full",
            width: "full",
            overflowY: "auto",
            // border: "1px solid white",
            borderRadius: "0.5rem",
            padding: "1%",
            display: "flex",
            alignItems: "center",
            // backgroundColor: "#ccdbdc",
            backgroundColor: "#0d1319",
            // backgroundColor: "#151f28",
            // margin: '2%',
          }}
        >
          {users.map((user, index) => (
            <div
              key={index}
              className={`list-group-item user-item d-flex justify-content-between align-items-center flex-wrap ${
                index % 2 === 0 ? "even-item" : "odd-item"
              }`}
              style={{ width: "90%", margin: "0.5%" }}
            >
              <div style={{ flex: 1 }}>
                <h3 className="fw-bold">{user.name}</h3>
                <p className="mb-1">
                  <strong>Post:</strong> {user.post}
                </p>
                <small>{user.email}</small>
              </div>

              <div className="task-table-container" style={{ flex: 1 }}>
                <table
                  className={`table table-bordered table-sm mb-0 text-center ${
                    index % 2 === 0 ? "table-dark-even" : "table-dark-odd"
                  }`}
                >
                  <thead>
                    <tr>
                      <th colSpan="3">Tasks</th>
                      <th colSpan="2">Current Task</th>
                    </tr>
                    <tr>
                      <th>Assigned</th>
                      <th>Completed</th>
                      <th>Overdue</th>
                      <th>Status</th>
                      <th>Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.ta}</td>
                      <td className={getTcColor(user.tc, user.ta)}>
                        {user.tc}
                      </td>
                      <td className={getTedColor(user.ted, user.ta)}>
                        {user.ted}
                      </td>
                      <td className={getStatusColor(user.cts)}>{user.cts}</td>
                      <td className={getDeadlineColor(user.ctd)}>{user.ctd}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserList;
