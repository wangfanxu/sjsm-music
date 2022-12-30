import "./namelist.styles.scss";
import SHOW_DATA from "../../shop-data.json";
export const NameList = () => {
  return (
    <div className="name-list-container">
      <h2>姓名</h2>
      {SHOW_DATA.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  );
};
