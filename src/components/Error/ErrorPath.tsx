import { CiHospital1 } from "react-icons/ci";
import s from "./errorPath.module.scss";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../common/constants/constants";

export function ErrorPath() {
  const navigate = useNavigate();
  const onClickRedirect = () => {
    navigate(PATH.MAIN);
  };

  return (
    <div className={s.style}>
      <h1>Hi, maybe you confused the address ?</h1>
      <button onClick={onClickRedirect}>Click me</button>
    </div>
  );
}
