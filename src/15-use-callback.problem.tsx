import { useCallback } from "react"

export const Buttons = (props: { id: string }) => {
    const onClick = useCallback((buttonName: string) => {
        console.log(props.id, buttonName);
    }, [props.id]);

    return (
        <div>
            <button onClick={() => { 
                const res = onClick("A");
                console.log(res);
            }}>A</button>
            <button onClick={() => onClick("B")}>B</button>
        </div>
    );
}