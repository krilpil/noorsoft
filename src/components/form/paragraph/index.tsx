import React from 'react';
import {Paragraph} from "./styled";

interface Errors {
    [key: string]: string;
}

interface InputsForm {
    errors: Errors,
    touchedForm: boolean | undefined,
}

const variantFormParagraph = ({errors, touchedForm}: InputsForm): string => {

    let errorMessage = String()
    if (touchedForm && Object.keys(errors).length !== 0) {
        for (const props in errors) {
            errorMessage = errors[props]
        }
    } else {
        errorMessage = 'Enter your email and password.'
    }

    return errorMessage
}

const FormParagraph: React.FC<InputsForm> = (inputsForm: InputsForm): JSX.Element => {
    return (
        <Paragraph>
            <p>
                {variantFormParagraph(inputsForm)}
            </p>
        </Paragraph>
    )
};

export default React.memo(FormParagraph);