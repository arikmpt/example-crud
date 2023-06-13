import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
    const [status, setStatus] = useState('1');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };
    
    return (
        <div className="login-box">
            <Card sx={{ maxWidth: 300 }}>
                <CardContent className={'login-content'}>
                    <Typography sx={{ fontSize: 14 }}>
                        Add New Category
                    </Typography>
                    <Link to={'/'}>Kembali</Link>
                    <div className="login-form">
                        <TextField label="name" variant="outlined" size="small"/>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Age"
                                onChange={handleChange}
                                size="small"
                            >
                                <MenuItem value={'1'}>Active</MenuItem>
                                <MenuItem value={'0'}>Deactive</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button variant="contained" fullWidth>Submit</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Add
