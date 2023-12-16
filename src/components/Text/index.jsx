import React from "react";

const sizeClasses = {

  txtSourceSansProRegular18: "font-normal font-sourcesanspro",
  txtSourceSansProRegular16: "font-normal font-sourcesanspro",
  txtSourceSansProRegular20Gray500: "font-normal font-sourcesanspro",
  txtSourceSansProBold16: "font-bold font-sourcesanspro",
  txtSourceSansProSemiBold54: "font-semibold font-sourcesanspro",
  txtSourceSansProRegular20: "font-normal font-sourcesanspro",
  txtSourceSansProSemiBold16: "font-semibold font-sourcesanspro",
  txtSourceSansProSemiBold48: "font-semibold font-sourcesanspro",
  txtOpenSansSemiBold14: "font-opensans font-semibold",
  txtSourceSansProSemiBold24: "font-semibold font-sourcesanspro",
  txtSourceSansProBold24WhiteA700: "font-bold font-sourcesanspro",
  txtSourceSansProRegular20WhiteA700: "font-normal font-sourcesanspro",
  txtSourceSansProBold64: "font-bold font-sourcesanspro",
  txtSourceSansProBold34: "font-bold font-sourcesanspro",
  txtSourceSansProBold24: "font-bold font-sourcesanspro",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
