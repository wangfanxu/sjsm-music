import Luckydraw from "../../components/luckydraw/luckydraw.component";
import { NameList } from "../../components/namelist/namelist.component";
import "./draw.styles.scss";
export const Draw = () => {
  return (
    <div className="draw-container">
      <Luckydraw />
      <NameList />
    </div>
  );
};

export default Draw;
