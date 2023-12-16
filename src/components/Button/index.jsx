import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[25px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs text-light_blue-A700_02",
    gray_50_02: "bg-gray-50_02",
    light_blue_A700_01: "bg-light_blue-A700_01 text-white-A700",
  },
};
const sizes = { xs: "p-3.5", sm: "p-[19px]", md: "p-[26px] sm:px-5" };

const Button = ({ children, className = "", leftIcon, rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "light_blue_A700_01",
  ...restProps

}) => {

  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""
        } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "gray_50_02", "light_blue_A700_01"]),
};

export { Button };
