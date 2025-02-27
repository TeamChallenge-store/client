import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoginUserMutation, useLoginWithGitHubMutation } from '~entities/users/api/authApi.ts';
import { InputField } from '~shared/ui/InputField/InputField.tsx';
import { CustomButton } from "~shared/ui/CustomButton";

import styles from './ui/Login.module.scss';
import loginImage from "./ui/icons/login.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignInPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const [loginWithGitHub] = useLoginWithGitHubMutation();
  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = credentials;

    try {
      const response = await loginUser({
        email,
        password
      }).unwrap();

      sessionStorage.setItem('accessToken', response.access);
      sessionStorage.setItem('refreshToken', response.refresh);

      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Login failed. Please try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await loginWithGitHub().unwrap();
    } catch (err: any) {
      setError(err.message || "GitHub login failed");
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.imageContainer}>
        <img src={loginImage} alt="Login Illustration" className={styles.image} />
      </div>
      <div className={styles.formContainer}>
        <h3 className={styles.heading}>Login</h3>
        <p className={styles.greeting}>Welcome back! 😊</p>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <a href="#" className={styles.link}>
            Forgot password?
          </a>
          <CustomButton buttonType="submit" className={styles.logButton}>
            Login
          </CustomButton>
        </form>
        <p className={styles.redirectText}>
          Don't have an account?{" "}
          <a href="/#/sign_up" className={styles.redirectLink}>
            Register here
          </a>
        </p>
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

export default SignInPage;