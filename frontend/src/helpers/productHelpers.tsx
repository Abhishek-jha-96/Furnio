import { IconWithLabelProps } from './productConstants';

export function IconWithLabel({
  Icon,
  label,
}: IconWithLabelProps): JSX.Element {
  return (
    <div className="flex flex-col items-center text-white">
      <Icon />
      <h3>{label}</h3>
    </div>
  );
}
