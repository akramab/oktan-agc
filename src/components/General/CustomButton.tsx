import { Button } from 'react-bootstrap';

const CustomButton = (props: any) => {
    return (
        <Button className={`${props?.bg} {props?.width ?? "w-100"} rounded px-3 border-0`} onClick={props?.onClick} type="submit">
            <p className="py-1 text-white">{props?.text}</p>
        </Button>
    )
}

export default CustomButton;