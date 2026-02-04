import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    course: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(form.email)) newErrors.email = "Invalid email format";

    if (!/^[0-9]{10}$/.test(form.phone)) newErrors.phone = "Phone must be 10 digits";

    if (form.age < 17 || form.age > 60)
      newErrors.age = "Age must be between 17 and 60";

    if (!form.gender) newErrors.gender = "Select gender";

    if (!form.course) newErrors.course = "Select a course";

    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Registration Successful!");
    }
  };

  return (
    <div style={{ backgroundColor: "blueviolet", minHeight: "100vh", fontWeight: "bold" }}>
      <div
        id="out"
        style={{
          width: "400px",
          background: "white",
          padding: "20px",
          margin: "50px auto",
          borderRadius: "8px",
          boxShadow: "0 0 10px gray",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>User Registration</h1>

          <label>Name of the Student</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "90%", padding: "8px", marginTop: "8px" }}
          />
          <span style={{ color: "red", fontSize: "14px" }}>{errors.name}</span>

          <label>Email Address</label>
          <input
            type="text"
            id="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "90%", padding: "8px", marginTop: "8px" }}
          />
          <span style={{ color: "red", fontSize: "14px" }}>{errors.email}</span>

          <label>Mobile number of the Student</label>
          <input
            type="text"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            style={{ width: "90%", padding: "8px", marginTop: "8px" }}
          />
          <span style={{ color: "red", fontSize: "14px" }}>{errors.phone}</span>

          <label>Age of the Student</label>
          <input
            type="number"
            id="age"
            value={form.age}
            onChange={handleChange}
            style={{ width: "90%", padding: "8px", marginTop: "8px" }}
          />
          <span style={{ color: "red", fontSize: "14px" }}>{errors.age}</span>

          <label>Gender of the Student</label>
          <select
            id="gender"
            value={form.gender}
            onChange={handleChange}
            style={{ width: "90%", padding: "8px", marginTop: "8px" }}
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <span style={{ color: "red", fontSize: "14px" }}>{errors.gender}</span>

          <label>Course of the Student</label>
          <select
            id="course"
            value={form.course}
            onChange={handleChange}
            style={{ width: "90%", padding: "8px", marginTop: "8px" }}
          >
            <option value="">Select Course</option>
            <option>B.Tech</option>
            <option>MCA</option>
            <option>MBA</option>
          </select>
          <span style={{ color: "red", fontSize: "14px" }}>{errors.course}</span>

          <label>Password</label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "90%", padding: "8px", marginTop: "8px" }}
          />
          <span style={{ color: "red", fontSize: "14px" }}>{errors.password}</span>

          <button
            type="submit"
            style={{
              marginTop: "15px",
              padding: "10px",
              width: "100%",
              background: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
