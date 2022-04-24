import React from 'react';
import {Paragraph} from "./styled";

interface inputForm {
    touchedEmail: boolean | undefined,
    errorsEmail: string | undefined,
    touchedPassword: boolean | undefined,
    errorsPassword: string | undefined,
    errorAuthorization: string | undefined
}

const variantFormParagraph = ({touchedEmail, touchedPassword, errorsEmail, errorsPassword, errorAuthorization}
                                  : inputForm): string => {
    if (errorAuthorization) {
        return errorAuthorization
    }
    if (touchedEmail && errorsEmail) {
        return errorsEmail
    }
    if (touchedPassword && errorsPassword) {
        return errorsPassword
    }
    return 'Enter your email and password.'
}

const FormParagraph: React.FC<inputForm> = (formParagraph: inputForm): JSX.Element => {
    return (
        <Paragraph>
            <p>
                {variantFormParagraph(formParagraph)}
            </p>
        </Paragraph>
    )
};

export default React.memo(FormParagraph);