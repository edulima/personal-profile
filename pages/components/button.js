import cx from 'classnames'

const Button = ({
  full,
  children,
  secondary,
  disabled,
  type = 'button',
  onClick = () => {},
}) => (
  <button
    type={type}
    onClick={onClick}
    className={cx({
      'px-4': true,
      'py-2': true,
      'w-full': full,
      'rounded': true,
      'shadow-2xl': true,
      'text-center': true,
      'bg-white': secondary,
      'hover:bg-white': true,
      'text-black': secondary,
      'bg-blue-800': !secondary,
      'hover:text-blue-800': true,
    })}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
