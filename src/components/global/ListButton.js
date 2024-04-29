import "../../style/global/action-button.scss";
import iconarticle from "../../images/icon-article.svg";
import { Tooltip } from "react-tooltip";

function ListButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className="action-button"
      disabled={props.disabled}
    >
      <a className="tooltip-list-button" data-tooltip-content={props.tooltip}>
        <img alt="icon-edit" className="list-icon" src={iconarticle}></img>
      </a>
      <Tooltip anchorSelect=".tooltip-list-button" />

      {props.title}
    </button>
  );
}
export default ListButton;
