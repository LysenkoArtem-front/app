import { Button } from "@mui/material";
export const Buttons = (props: any) => {
    return (
        <Button onClick={props.onClick} variant={props.variant} color={props.color}>{props.text}</Button>
    );
};