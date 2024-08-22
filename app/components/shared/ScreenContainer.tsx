import { CSSProperties, ReactNode } from "react";
interface Props {
  children: ReactNode;
  style?: CSSProperties;
}
const ScreenContainer = ({ children, style }: Props) => {
  return (
    <div
      className="mx-auto w-full max-w-[1280px] xl:px-[15px]"
      style={style}
    >
      {children}
    </div>
  );
};
export default ScreenContainer;
