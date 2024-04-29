import "../../style/global/form-text-area.scss";

function FormTextArea(props) {
  return (
    <div className="text-area-wrapper">
      <label className="text-area-label">{props.title}</label>
      <textarea
        className="text-area-input"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
      <div className="text-area-error">{props.error ? props.error : null}</div>
    </div>
  );
}
export default FormTextArea;
