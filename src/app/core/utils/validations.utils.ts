import { FormControl, FormGroup } from '@angular/forms';

export function getValidatorErrorMessage(
  validatorName: string,
  message?: string
): Record<string, string> {
  const config = {
    customRequired: `${message}`
  };
  return config[validatorName];
}

/**
 * Valida si el campo esta relleno con datos y permite poner un mensaje personalizado en caso de error
 */
export function customRequired(control: FormControl): Record<string, boolean> {
  return !control.value || (Array.isArray(control.value) && control.value.length === 0)
    ? { customRequired: true }
    : null;
}


