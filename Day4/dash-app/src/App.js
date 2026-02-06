import React from "react";

function App() {
  return (
    <div style={{ background: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)", minHeight: "100vh", padding: "20px" }}>
      
      <h1 style={{ textAlign: "center" }}>Student Dashboard</h1>

      <div style={{ background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)", padding: "15px", marginBottom: "20px", textAlign:"center",fontSize:"large" }}>
        <h3>Student Details</h3>
        <p>Name : KSR Sarma</p>
        <p>Roll No : 21CSE045</p>
        <p>Department : CSE</p>
        <p>Year : Final Year</p>
        <p>CGPA : 8.7</p>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap",justifyContent:"center" }}>
        
        <div style={boxStyle}>
          <h4>Attendance</h4>
          <p>92%</p>
        </div>

        <div style={boxStyle}>
          <h4>Assignments</h4>
          <p>8 Pending</p>
        </div>

        <div style={boxStyle}>
          <h4>Exams</h4>
          <p>2 Upcoming</p>
        </div>

        <div style={boxStyle}>
          <h4>Notifications</h4>
          <p>5 New</p>
        </div>

      </div>

    </div>
  );
}

const boxStyle = {
  background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
  padding: "10px",
  width: "150px",
  border: "1px solid #ccc",
  textAlign: "center",
};

export default App;
