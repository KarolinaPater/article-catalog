import React, { useEffect, useState } from "react";

function FormImageInput(props) {
  const [image, setImage] = useState("");
  function convertToBase64(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);

      const e = {
        target: {
          name: props.name,
          value: reader.result,
        },
      };
      props.onChange(e);
    };
    reader.onerror = (error) => {};
  }

  const handleInit = () => {
    setImage(props.value || "");
    const e = {
      target: {
        name: props.name,
        value: props.value || "",
      },
    };
    props.onChange(e);
  };

  useEffect(() => {
    handleInit();
  }, [props.value]);

  return (
    <div>
      Załącz plik w formacie JPG <br />
      <input
        name={props.name}
        accept="image/*"
        type="file"
        onChange={convertToBase64}
      />
      {image == "" || image == null ? "" : <img height={100} src={image} />}
    </div>
  );
}

export default FormImageInput;
