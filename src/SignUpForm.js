import { useRef, useState } from "react";
import InputBox from "./InputBox";

function SignUpForm(props) {
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const firstNameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    const checkName = (field) => {
        if (field.value) return true;
        else return false;
    };
    const checkEmail = () => {
        const emailRegex = /\w/;

        if (emailRegex.test(emailInput.current.value)) return true;
        else return false;
    };
    const checkPassword = () => {
        const passLen = 8;
        const passwordValue = passwordInput.current.value;

        if (passwordValue && passwordValue.length >= passLen) return true;
        else return false;
    };

    function handleClick(e) {
        e.preventDefault();

        if (
            checkName(firstNameInput.current) &&
            checkName(lastNameInput.current) &&
            checkEmail() &&
            checkPassword()
        ) {
            setFirstNameError(false);
            setLastNameError(false);
            setEmailError(false);
            setPasswordError(false);

            return props.onSubmit(true);
        } else {
            if (!checkName(firstNameInput.current)) setFirstNameError(true);
            else setFirstNameError(false);

            if (!checkName(lastNameInput.current)) setLastNameError(true);
            else setLastNameError(false);

            if (!checkEmail()) setEmailError(true);
            else setEmailError(false);

            if (!checkPassword()) setPasswordError(true);
            else setPasswordError(false);
        }
    }

    return (
        <form action="" className="mt-6 p-6 bg-white rounded-lg flat-shadow">
            <InputBox
                type="text"
                name="firstName"
                placeholder="First Name"
                ref={firstNameInput}
                error={firstNameError}
                errorText="First Name cannot be empty"
            />
            <InputBox
                type="text"
                name="lastName"
                placeholder="Last Name"
                ref={lastNameInput}
                error={lastNameError}
                errorText="Last Name cannot be empty"
            />
            <InputBox
                type="email"
                name="userEmail"
                placeholder="Email Address"
                ref={emailInput}
                error={emailError}
                errorText="Looks like this is not an email"
            />
            <InputBox
                type="password"
                name="userPassword"
                placeholder="Password"
                ref={passwordInput}
                error={passwordError}
                errorText="Password cannot be empty"
            />
            <div>
                <button
                    className="p-4 bg-emerald-400 uppercase font-semibold rounded-md tracking-wide text-white w-full hover:bg-emerald-300 button-shadow"
                    onClick={handleClick}>
                    Claim your free trial
                </button>
            </div>
            <p className="text-xs text-slate-400 text-center mt-3">
                By clicking this button, you are agreeing to our{" "}
                <a href="#" className="text-rose-500 font-bold">
                    Terms and Services
                </a>
            </p>
        </form>
    );
}

export default SignUpForm;
