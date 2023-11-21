import classes from './ErrorComp.module.css'

const ErrorComp = ({message}) => {
    
    return (
        <p className={classes.errorText}>{message}</p>
    )
}

export default ErrorComp;