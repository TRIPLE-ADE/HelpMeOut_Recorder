import styles from "../style";
import Image from "next/image";

const page = () => {
  return (
    <main
      className={`pt-20 pb-[125px] shadow-lg m-auto bg-white text-black`}
    >
      <div className="px-6 sm:px-[113.5px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={180}
          height={37}
          priority
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className={`${styles.container} gap-8 max-w-[475px] px-6 sm:px-0 pt-[38px] m-auto`}>
        <div>
          <h2
            className={`text-center font-sans text-[32px] leading-[48px] text-Secondary font-bold`}
          >
            Log in or Sign up
          </h2>
          <p
            className={`font-sans text-neutral-1 font-light text-center text-sm leading-[21px] max-w-xs`}
          >
            Join millions of others in sharing successful moves on{" "}
            <span className="font-normal font-sen">HelpMeOut.</span>
          </p>
        </div>
        <div className="w-full">
          <div className={`${styles.signupBorder} md:pl-[133px]`}>
            <Image
              src="/google.svg"
              alt="Google"
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
            />
            <p className="font-sans font-medium text-Secondary">
              Continue with Google
            </p>
          </div>
          <div className={`${styles.signupBorder} mt-6 md:pl-[129px]`}>
            <Image 
              src="/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              style={{ width: "auto", height: "auto" }}
            />
            <p className="font-sans font-medium text-Secondary">
              Continue with Facebook
            </p>
          </div>
        </div>
          <Image src="/signup_divider.svg" alt="Divider" width={438} height={25} style={{ width: "auto", height: "auto" }}/>
        <form className="w-full">
          <div className={`${styles.formInputGroup}`}>
            <label htmlFor="email" className={`${styles.formLabel}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${styles.formInput} ${styles.formPlaceholder}`}
              placeholder="Enter your email address"
            />
          </div>
          <div className={`${styles.formInputGroup} mt-4`}>
            <label htmlFor="password" className={`${styles.formLabel}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`${styles.formInput} ${styles.formPlaceholder}`}
              placeholder="Enter your Password"
            />
          </div>
          <div className={`${styles.formInputGroup} mt-8`}>
            <button
              type="submit"
              className={`${styles.formInput} bg-Primary text-[#f9f9ff] font-bold border-0 rounded-md outline-0`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
