import React from 'react';
import { Paragraph } from './styled';

interface Errors {
  [key: string]: string;
}

interface FormParagraphProps {
  children: React.ReactNode;
  errors: Errors;
  touchedForm: boolean | undefined;
}

const variantFormParagraph = ({ errors, touchedForm, children }: FormParagraphProps): string => {
  let errorMessage = String();
  if (touchedForm && Object.keys(errors).length !== 0) {
    for (const props in errors) {
      if (errors.hasOwnProperty(props)) {
        errorMessage = errors[props];
      }
    }
  } else {
    errorMessage = `${children}`;
  }

  return errorMessage;
};

const FormParagraph: React.FC<FormParagraphProps> = (
  formParagraphProps: FormParagraphProps
): JSX.Element => {
  return (
    <Paragraph>
      <p>{variantFormParagraph(formParagraphProps)}</p>
    </Paragraph>
  );
};

export default React.memo(FormParagraph);
