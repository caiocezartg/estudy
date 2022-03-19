import { useState } from "react";
import { toast } from "react-toastify";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A sua senha deve conter ao menos 08 caracteres, sendo um deles 01 digito, 01 letra maiúscula e 01 letra minúscula.",
  },
  cep: {
      regex: /^\d{5}-?\d{3}$/,
      message: "Insira um CEP válido."
  }
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;

    if (!value.length) {
        toast.error("Preencha um valor.", {
            position: toast.POSITION.TOP_CENTER
        });
        return false;
    } else if (types[type] && !types[type].regex.test(value)) {
        toast.error(types[type].message, {
            position: toast.POSITION.TOP_CENTER
        });
        return false;
    } else {
        setError(null);
        return true;
    }
  }

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;