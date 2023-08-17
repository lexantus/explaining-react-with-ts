import { ComponentProps } from "react";

type OverrideProps<T, TOverriden> = Omit<T, keyof TOverriden> & TOverriden;

// type Example = Omit<ComponentProps<"input">, 'onChange'>;
// type Props = Example & { onChange: (value: string) => void };
type Props = OverrideProps<
    ComponentProps<"input">,
    {
        onChange: (value: string) => void;
        name: number;
    }
>;

const example: Props = {
    type: 'button',
    onChange(e) {
        console.log(e);
    },
    name: 4.3,
}

export const Input = (props: Props) => {
    return (
        <input
            {...props}
            name={`hello_${props.name + 2}`}
            onChange={(e) => {
                props.onChange(e.target.value);
            }}></input>
    );
}

const Parent = () => {
    return (
        <Input name={3} onChange={(e) => {
            console.log(e);
        }}></Input>
    )
}