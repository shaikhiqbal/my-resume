const Index = ({
  className = "",
  variant = "simple",
  color = "primary",
  icon = "",
  label = "Button",
  ...restProps
}) => {
  let btn;

  switch (variant) {
    case "icon":
      btn = (
        <button
          className={`bg-primary py-4 px-8 text-md font-semibold rounded-md w-full flex justify-center items-center ${className}`}
          style={{ color }}
          {...restProps}
        >
          <span className="me-2">{icon}</span>
          <span>{label}</span>
        </button>
      );
      break;
    default:
      btn = (
        <button
          className={`bg-primary py-4 px-8 text-lg font-semibold rounded-md w-full`}
          style={{ backgroundColor: color }}
          {...restProps}
        >
          {label}
        </button>
      );
  }

  return btn;
};

export default Index;
