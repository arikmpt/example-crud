import { Button, Card, CardContent, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className="login-box">
            <Card sx={{ maxWidth: 300 }}>
                <CardContent className={'login-content'}>
                    <Typography sx={{ fontSize: 14 }}>
                        Please Register To Our Platform
                    </Typography>
                    <div className="login-form">
                        <TextField label="email" variant="outlined" size="small"/>
                        <TextField label="password" variant="outlined" size="small"/>
                    </div>
                    <Button variant="contained" fullWidth onClick={handleLogin}>Register</Button>
                    <Typography sx={{ fontSize: 14 }}>
                        Or
                    </Typography>
                    <Button variant="outlined" fullWidth onClick={handleLogin}>Login Here</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register