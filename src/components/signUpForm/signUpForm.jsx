import { useState, useEffect } from "react";
import styles from "./signUpForm.module.css";
import FormField from "../formField/formField";
import Button from "../button/button";
import IntroText from "../introText/introText";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (error[id]) {
      setError((prevError) => ({ ...prevError, [id]: "" }));
    }

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};
    /* Check First Name */
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name cannot be empty";
    }

    /* Check Last Name */
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name cannot be empty";
    }

    /* Check Email */
    const emailPattern = /^[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email cannot be empty";
    } else if (emailPattern.test(formData.email)) {
      newErrors.email = "Looks like this is not an email";
    }

    /* Check Password */
    if (!formData.password.trim()) {
      newErrors.password = "Password cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      console.log("Form submitted succesfully");
    }
  };
  return (
    <section className={`${styles.signUpFormContainer}`}>
      {/* Text Content */}
      <IntroText />
      <div className="desktopSeperator">
        {/* Purple Button */}
        <div className={["styles.purpleButtonContainer"]}>
          <Button
            variants="secondary"
            children={
              <p
                style={{
                  textAlign: "center",
                  padding: "0 40px",
                  fontWeight: "lighter",
                }}
              >
                <strong style={{ fontWeight: "bolder" }}>
                  Try it free 7 days
                </strong>{" "}
                then $20/mo. thereafter
              </p>
            }
          />
        </div>

        {/* Form */}
        <div className={`${styles.formField}`}>
          <form onSubmit={handleSubmit} className={`${styles.formContainer}`}>
            <FormField
              label="First Name"
              id="firstName"
              value={formData.firstName}
              type="text"
              error={error.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <FormField
              label="last Name"
              id="lastName"
              value={formData.lastName}
              type="text"
              error={error.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
            <FormField
              label="Email"
              id="email"
              value={formData.email}
              type="email"
              error={error.email}
              placeholder="Email Address"
              onChange={handleChange}
            />
            <FormField
              label="Password"
              id="password"
              value={formData.password}
              type="password"
              error={error.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <Button variants="primary" children={"claim your free trial"} />
          </form>
          <p style={{ color: "var(--lightGray)", textAlign: "center" }}>
            By clicking the button, you are agreeing to our{" "}
            <a
              href="#"
              style={{
                color: "var(--Red-400)",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Terms and Services
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
