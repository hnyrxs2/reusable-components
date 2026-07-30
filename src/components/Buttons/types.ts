export type ButtonTypes = 'primary' | 'secondary';

export interface IButtonProps {
    id: string;
    type: ButtonTypes;
    labelText: string;
}

export interface IRadioButtonProps<T> {
    id: string;
    value: T;
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
