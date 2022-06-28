import { useState } from "react";

export const useForm = (initialForm, validateInput, actionForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validateFormSubmit = (errorsState, $form) => {
        const errorsProcess = JSON.parse(JSON.stringify(errorsState));

        Array.from($form).filter(el => (el instanceof HTMLInputElement) && el.name).forEach(el => Object.assign(errorsProcess, validateInput(errorsState, el)));

        if (Object.keys(errorsProcess).length === 0) {
            actionForm($form);
            setForm(initialForm);
        } else {
            $form[Object.keys(errorsProcess)[0]].focus();
        }

        return errorsProcess
    }

    const handlerChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
        setErrors(errorsState => validateInput(errorsState, e.target));
    }

    const handlerSubmit = e => {
        e.preventDefault();
        setErrors(errorsState => validateFormSubmit(errorsState, e.target))
    }

    return {
        form,
        errors,
        handlerChange,
        handlerSubmit
    }
}