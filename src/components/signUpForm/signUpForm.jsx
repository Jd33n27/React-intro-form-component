import { useState, useEffect } from "react";
import styles from "./signUpForm.module.css";
import FormField from "../formField/formField";
import Button from "../button/button";
import IntroText from "../introText/introText";

const SignUpForm = () => {
  const [error, setError] = useState(null);

  const handleInputChanges = () => {
    let inputValue = FormField.value;
    if (inputValue.length === 0) {
      console.log("cannot be empty");
    } else {
      console.log("all is good");
      inputValue = "";
    }
  };

  const validator = () => {
    handleInputChanges();
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
          <div className={`${styles.formContainer}`}>
            <FormField
              label="First Name"
              type="text"
              placeholder="First name"
            />
            <FormField label="Last Name" type="text" placeholder="Last name" />
            <FormField label="Email" type="email" placeholder="Email Address" />
            <FormField
              label="Password"
              type="password"
              placeholder="Password"
            />
            <Button
              variants="primary"
              onClick={validator}
              children={"claim your free trial"}
            />
          </div>
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
