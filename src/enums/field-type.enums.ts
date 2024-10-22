export const FieldType = {
    SIGNATURE: 'SIGNATURE',
    FREE_SIGNATURE: 'FREE_SIGNATURE',
    INITIALS: 'INITIALS',
    NAME: 'NAME',
    EMAIL: 'EMAIL',
    DATE: 'DATE',
    TEXT: 'TEXT',
    NUMBER: 'NUMBER',
    RADIO: 'RADIO',
    CHECKBOX: 'CHECKBOX',
    DROPDOWN: 'DROPDOWN'
  };

  export type FieldType = (typeof FieldType)[keyof typeof FieldType]