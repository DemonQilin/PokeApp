import { useState } from "react";

export const useForm = (initialForm, validateInput, actionForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handlerChange = (e) => {
        const { name, value } = e.target;
        
        setForm({
            ...form,
            [name]: value
        });
        setErrors(validateInput(value, name));
    }

    const handlerSubmit = e => {
        e.preventDefault();

        const errorsSubmit = JSON.parse(JSON.stringify(errors));

        Array.from(e.target).filter(el => (el instanceof HTMLInputElement) && el.name).forEach(el => Object.assign(errorsSubmit, validateInput(el.value, el.name)));

        setErrors(errorsSubmit);

        if (Object.keys(errorsSubmit).length === 0) {
            actionForm(e.target);
            setForm(initialForm);
        } else {
            e.target[Object.keys(errorsSubmit)[0]].focus();
        }
    }

    return {
        form,
        errors,
        handlerChange,
        handlerSubmit
    }
}