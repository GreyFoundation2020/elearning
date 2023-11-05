import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

const Button = ({
  children,
  primary,
  primaryGradient,
  secondaryGradient,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "text-[inherit] text-white font-bold rounded-full px-6 py-3 leading-none relative after:absolute after:content-[''] after:w-full after:h-full after:bg-white after:top-0 after:start-0 after:block overflow-hidden after:z-[-1] isolate after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-50 ",
    {
      "bg-blue-dark": primary,
      "primary-gradient": primaryGradient,
      "secondary-gradient": secondaryGradient,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  primaryGradient: PropTypes.bool,
  secondaryGradient: PropTypes.bool,
  checkVariationValue: ({ primary, primaryGradient, secondaryGradient }) => {
    const count =
      Number(!!primary) +
      Number(!!primaryGradient) +
      Number(!!secondaryGradient);

    if (count === 0) {
      return new Error(
        "Button should have one of these props - primary, primaryGradient, secondaryGradient"
      );
    }

    if (count > 1) {
      return new Error(
        "Only one of primary, primaryGradient and secondaryGradient can be true"
      );
    }
  },
};

export default Button;
