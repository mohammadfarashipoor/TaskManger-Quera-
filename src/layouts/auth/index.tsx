import Text from "@/ui/atom/typography/Text";
import { Link, Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const userPath = useLocation().pathname;
  const isLoginPage = userPath === "/login";
  const statusText = isLoginPage
    ? "ثبت‌نام نکرده‌ای؟"
    : "قبلا ثبت‌نام کرده‌ای؟";
  const buttonText = isLoginPage ? "ثبت نام" : "ورود";

  return (
    <div className="flex flex-col h-[100vh] auth-layout">
      <div className="z-[1000] fixed w-full">
        <nav className="flex flex-row-reverse items-center justify-between mt-[60px] mx-[80px]">
          <div className="flex items-center gap-xs ">
            <span className="text-body-m">{statusText}</span>
            <Link
              to={buttonText === "ورود" ? "/login" : "/register"}
              className="flex justify-center items-center w-[95px] h-[40px] bg-brand-primary text-white rounded-[6px] hover:cursor-pointer font-semibold text-bold-s"
            >
              {buttonText}
            </Link>
          </div>
          <Text textSize="headingXS" textColor="gradient">
            کوئرا تسک منیجر
          </Text>
        </nav>
      </div>
      <div className="flex flex-grow items-center justify-center z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
