import { Button } from "@mui/material";

interface MyButtonProps {
    title: string,
    icon?: React.ReactNode,
    buttonFn: Function
}

const MyButton: React.FC<MyButtonProps> = ({title, icon, buttonFn}) => {
    return (
        <Button
            variant='contained'
            sx={{ backgroundColor: 'rgb(218 31 57)', lineHeight: '15px', textAlign: 'left' }}
            onClick={() => buttonFn()}
            startIcon={icon}
        >
            {title}
        </Button>
    );
};

export default MyButton;
