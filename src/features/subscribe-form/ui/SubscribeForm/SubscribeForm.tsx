import { useState } from "react";
import { SubscribeButton } from "~shared/ui/SubscribeButton";
import css from './SubscribeForm.module.scss';
import emailIcon from "~shared/ui/Icon/icons/email.svg?url";

const SubscribeForm = () => {
    const [email, setEmail] = useState("");

    const validateEmail = () => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateEmail()) {
            try {
                // request
            } catch(error) {
                // error handling
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return (
        <form className={css.subscribeInputForm} onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
                <input
                    className={css.subscribeInput}
                    type="email" 
                    placeholder="Enter your email to get the latest news..." 
                    value={email}
                    onChange={handleChange}
                    maxLength={75}
                    minLength={3}
                    required
                />
                <img className={css.emailIcon} src={emailIcon} alt="Email"/> 
            </div>
            
            <SubscribeButton 
                type="submit" 
                text="Subscribe"
                className={css.subscribeButton}
            />
        </form>
    )
}

export { SubscribeForm };