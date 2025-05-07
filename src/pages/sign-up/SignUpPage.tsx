import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useRegisterUserMutation, useFetchGitHubTokensMutation } from "~entities/users/api/authApi.ts";
import { CustomButton } from "~shared/ui/CustomButton";
import { ErrorPage } from "~pages/error-page/ErrorPage.tsx";
import { InputField } from '~shared/ui/InputField/InputField.tsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import registerImage from "./ui/icons/register.webp";
import styles from "./ui/Register.module.scss";


const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const [registerUser] = useRegisterUserMutation();
  const [loginWithGitHub] = useFetchGitHubTokensMutation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        username,
        email,
        password: password,
        re_password: confirmPassword,
      }).unwrap();

      navigate("/sign_in");
    } catch (err: any) {
      setError(err.message || "Registration failed");
    }
  };


  const handleGitHubLogin = async () => {
    try {
      await loginWithGitHub().unwrap();
    } catch (err: any) {
      setError(err.message || "GitHub login failed");
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.imageContainer}>
        <img src={registerImage} alt="Register" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <h3 className={styles.welcomeText}>Welcome to Campfire! 👋🏻</h3>
        <p>Please sign-up to your account and start the adventure</p>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <a href="#" className={styles.link}>
            Forgot password?
          </a>
          <div className={styles.registerContent}>
            <CustomButton buttonType={'submit'} className={styles.regButton}>
              Register
            </CustomButton>
            <p className={styles.redirectText}>
              Already have an account? <a href="/sign_in" className={styles.redirectLink}>Sign In</a>
            </p>
          </div>
        </form>
        <div className={styles.divider}>
          <span>or</span>
        </div>
        <div className={styles.socialButtonsContainer}>
          <FontAwesomeIcon onClick={handleGitHubLogin} icon={faGithub} className={styles.icon} />
          <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
          <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
