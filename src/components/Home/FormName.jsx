import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { setGlobalUser } from '../../store/reducers/userName'


const FormName = () => {
    const dispatch = useDispatch();

    const initialForm = {
        username: ''
    }
    
    const validateInput = (valueInput, nameInput) => {
        const errorsProcess = JSON.parse(JSON.stringify(errors));
        const regexpName = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü]{4,15}$/;

        if (!valueInput) {
            errorsProcess.username = 'Debes ingresar tu nombre para continuar!'
        } else if (!regexpName.test(valueInput)) {
            errorsProcess.username = 'El nombre solo debe contener letras y números. Mínimo 4 y máximo 15 carácteres'
        } else {
            delete errorsProcess[nameInput]
        }

        return errorsProcess
    }

    const actionForm = form => {
        dispatch(setGlobalUser(form.username.value));
    }

    const { form, errors, handlerChange, handlerSubmit } = useForm(initialForm, validateInput, actionForm);

    return (
        <form
            onSubmit={handlerSubmit}
            className="Home_FormName"
            autoComplete='off'>
            <input
                type="text"
                name="username"
                placeholder='Escribe tu nombre'
                value={form.username}
                onChange={handlerChange}
            />
            {errors.username && <p>{errors.username}</p>}
            <input type="submit" value="Comenzar aventura" />
        </form>
    )
}

export default FormName