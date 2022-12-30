import "./luckydraw.styles.scss";
import Button from "../button/button.component";

export const Luckydraw = () => {
  return (
    <div className="luckydraw-container">
      <div class="header">
        <h2>希望小组新年聚会 经文互赠活动</h2>
        <p>抽取一位弟兄姐妹并赠予他/她一节经文!</p>
      </div>

      <div>
        <div>
          <h3>如何使用</h3>
          <p>抽取一名弟兄姐妹</p>
          <p>准备一节经文，包入红包中🧧</p>
          <p>并在当天送予他/她一则经文作为新的一年的祝福</p>
          <br/>
        </div>
        <Button type="button">抽取名字</Button>
      </div>
    </div>
  );
};

export default Luckydraw;
