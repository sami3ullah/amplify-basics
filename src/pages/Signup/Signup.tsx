import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/routes";
import { FormTypes } from "../../utils/enums";
import {
  signUp,
  confirmSignUp,
  resendConfirmationCode,
} from "../../api/cognito";
import Arrow from "../../utils/icons/Arrow/Arrow";
import Spinner from "../../utils/icons/Spinner/Spinner";
import { useAuthContext } from "../../hooks/useAuthContext";

function Signup() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    authCode: "",
    formType: FormTypes.SIGNUP,
    isLoading: false,
    errorMessage: "",
  });
  const { dispatch } = useAuthContext();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFormValues(() => ({ ...formValues, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormValues(() => ({ ...formValues, isLoading: true }));
    try {
      const response = await signUp(
        formValues.email,
        formValues.password,
        formValues.email,
        formValues.name
      );
      setFormValues(() => ({ ...formValues, errorMessage: response }));
      setFormValues(() => ({ ...formValues, isLoading: false }));
      if (response) {
        setFormValues(() => ({
          ...formValues,
          formType: FormTypes.CONFIRMSIGNUP,
        }));
      }
      // setting the context state
      // dispatch({type: "USER": payload: response})
    } catch (err) {
      setFormValues(() => ({ ...formValues, isLoading: false }));
    }
  };

  console.log("hi")

  const confirmSignupHandler = async () => {
    // call api here
    setFormValues(() => ({ ...formValues, isLoading: true }));
    await confirmSignUp(formValues.email, formValues.authCode);
    setFormValues(() => ({ ...formValues, isLoading: false }));
  };

  const resendCodeHandler = async () => {
    setFormValues(() => ({ ...formValues, isLoading: true }));
    await resendConfirmationCode(formValues.email);
    setFormValues(() => ({ ...formValues, isLoading: false }));
  };

  return (
    <section className="flex items-center justify-center h-screen background-image bg-blueishsecondary">
      <div className="w-[80%] md:w-[60%] lg:w-[30%] bg-darkgrey rounded-lg py-5">
        {/* if formtype is signup */}
        {formValues.formType === FormTypes.SIGNUP ? (
          <div>
            <h1 className="py-6 text-lg font-bold text-center text-white uppercase md:text-3xl">
              Create a free account
            </h1>
            {/* form */}
            <div className="px-10 py-6">
              <form
                onSubmit={submitHandler}
                className="flex flex-col items-center"
              >
                {/* name */}
                <div className="relative z-0 w-full mb-8">
                  <input
                    type="text"
                    onChange={onChangeHandler}
                    name="name"
                    className="@apply floating-input peer"
                    placeholder=" "
                  />
                  <label className="@apply floating-label">Full Name</label>
                </div>
                {/* email */}
                <div className="relative z-0 w-full mb-8">
                  <input
                    type="text"
                    onChange={onChangeHandler}
                    name="email"
                    className="@apply floating-input peer"
                    placeholder=" "
                  />
                  <label className="@apply floating-label">Email</label>
                </div>
                {/* password */}
                <div className="relative z-0 w-full mb-8">
                  <input
                    type="password"
                    onChange={onChangeHandler}
                    name="password"
                    className="@apply floating-input peer"
                    placeholder=" "
                  />
                  <label className="@apply floating-label">Password</label>
                </div>
                {/* submit button */}
                <button
                  type="submit"
                  className="flex justify-center w-full mt-6 font-bold uppercase transition button-styles bg-primary group"
                >
                  Sign UP
                  {formValues.isLoading ? <Spinner /> : <Arrow />}
                </button>
                <p className="mt-3 text-sm text-white">
                  Already have an account?
                  <Link to={LOGIN}>
                    <span className="underline text-primary"> Login</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="py-6 text-lg font-bold text-center text-white uppercase md:text-3xl">
              Enter your confirmation code
            </h1>
            {/* form */}
            <div className="px-10 py-6">
              <div className="flex flex-col items-center">
                {/* confirmation code */}
                <div className="relative z-0 w-full mb-8">
                  <input
                    type="text"
                    onChange={onChangeHandler}
                    name="authCode"
                    className="@apply floating-input peer"
                    placeholder=" "
                  />
                  <label className="@apply floating-label">
                    Confirmation Code
                  </label>
                </div>
                {/* submit button */}
                <button
                  onClick={confirmSignupHandler}
                  className="flex justify-center w-full mt-6 font-bold uppercase transition button-styles bg-primary group"
                >
                  Confirm Singup
                  {formValues.isLoading ? <Spinner /> : <Arrow />}
                </button>
                <span
                  className="underline text-primary"
                  onClick={resendCodeHandler}
                >
                  {formValues.isLoading ? <Spinner /> : "Resend Code"}
                </span>
                <p className="mt-3 text-sm text-white">
                  Already have an account?
                  <Link to={LOGIN}>
                    <span className="underline text-primary"> Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Signup;
