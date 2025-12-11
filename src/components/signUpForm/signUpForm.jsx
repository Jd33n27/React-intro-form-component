import React from "react";
import styles from "./signUpForm.module.css";
import FormField from "../formField/formField";
import Button from "../button/button";
import IntroText from "../introText/introText";

const SignUpForm = () => {
  return (
    <section className={`${styles.SignUpFormContainer}`}>
      {/* Text Content */}
      <IntroText />
      {/* Purple Button */}
      <div className={["styles.purpleButtonContainer"]}>
        <Button
          children={
            <p>
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
          }
        />
      </div>

      {/* Form */}
      <div className={["styles.formContainer"]}>
        <FormField
          label="First Name"
          type="text"
          placeholder="Enter your first name"
        />
        <FormField
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
        />
        <FormField label="Email" type="email" placeholder="Enter your email" />
        <FormField
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Button children={"Sign up now"} />
      </div>
    </section>
  );
};

export default SignUpForm;
