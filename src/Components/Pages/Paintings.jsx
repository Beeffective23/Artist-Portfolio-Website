import { imgInfo } from "../../helpers";
import Pictures from "../Pictures";
function Paintings() {
  return (
    <div className="PaintingsPage">
      <Pictures imgInfo={imgInfo} displSeeMore="none" />
    </div>
  );
}

export default Paintings;
