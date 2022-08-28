import { DialogTitle, DialogTitleProps } from '@mui/material';
import './DialogTitle.scss';

export default function SpecificDialogTitle(props: DialogTitleProps) {
    return (<DialogTitle className="specificTitle">{props.children}</DialogTitle>)
}
