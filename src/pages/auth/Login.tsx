import { Button, Card, CardContent, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/')
    }

    const handleRegister = () => {
        navigate('/register')
    }
    return (
        <div className="login-box">
            <Card sx={{ maxWidth: 300 }}>
                <CardContent className={'login-content'}>
                    <Typography sx={{ fontSize: 14 }}>
                        Please Login To Continue
                    </Typography>
                    <div className="login-form">
                        <TextField label="email" variant="outlined" size="small"/>
                        <TextField label="password" variant="outlined" size="small"/>
                    </div>
                    <Button variant="contained" fullWidth onClick={handleRedirect}>Login</Button>
                    <Typography sx={{ fontSize: 14 }}>
                        Or
                    </Typography>
                    <Button variant="outlined" fullWidth onClick={handleRegister}>Register</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login