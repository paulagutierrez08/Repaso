import Button from '@mui/material/Button'


function CIButton ({onClick, children, ...rest}){
    return(
        <div>
            <h1>Interceptor</h1>
            <Button {...rest} color="primary">{children}</Button>
        </div>
    )
}

export default CIButton;