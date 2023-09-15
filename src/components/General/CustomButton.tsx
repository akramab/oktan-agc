import { Button } from 'react-bootstrap';

const CustomButton = (props: any) => {
    return (
        <Button className={`${props?.bg} rounded px-3 border-0 w-100`} onClick={props?.onClick} type="submit">
            <p className="py-2 text-white">{props?.text}</p>
        </Button>
    )
}

export default CustomButton;