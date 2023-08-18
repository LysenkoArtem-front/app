import { Input } from "@mui/material";
export const Inputs = (props: any) => {
    return (
        <Input
            type="text"
            size='small'
            value={props.value}
            sx={{
                height: 70,
                borderRadius: '2px',
                color: 'blue'
            }} />
    );
}