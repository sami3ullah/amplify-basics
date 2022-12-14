import { Link } from "react-router-dom";
import { SIGNUP } from "../../utils/routes";

function Login() {
  return (
    <section className="flex items-center justify-center h-screen background-image bg-blueishsecondary">
      <div className="w-[80%] md:w-[60%] lg:w-[30%] bg-darkgrey rounded-lg py-5">
        <div>
          <h1 className="py-6 text-lg font-bold text-center text-white uppercase md:text-3xl">
            Login to your account
          </h1>
          {/* form */}
          <div className="px-10 py-6">
            <form className="flex flex-col items-center">
              {/* email */}
              <div className="relative z-0 w-full mb-8">
                <input
                  type="text"
                  name="email"
                  className="@apply floating-input peer"
                  placeholder=" "
                />
                <label htmlFor="email" className="@apply floating-label">
                  Email
                </label>
              </div>
              {/* password */}
              <div className="relative z-0 w-full mb-8">
                <input
                  type="text"
                  name="password"
                  className="@apply floating-input peer"
                  placeholder=" "
                />
                <label htmlFor="password" className="@apply floating-label">
                  Password
                </label>
              </div>
              {/* submit button */}
              <button
                type="button"
                className="flex justify-center w-full mt-6 font-bold uppercase transition button-styles bg-primary group"
              >
                Login
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1 duration-300 group-hover:translate-x-2 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <p className="mt-3 text-sm text-white">
                Don't have an account?
                <Link to={SIGNUP}>
                  <span className="underline text-primary"> Signup</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
