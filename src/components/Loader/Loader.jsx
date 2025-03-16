import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <HashLoader loading={true} size={18} color="#3f51b5" />
    </div>
  );
};

export default Loader;
