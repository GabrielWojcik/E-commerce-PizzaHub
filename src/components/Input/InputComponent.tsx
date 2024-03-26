"use client"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

interface PropsInputComponent{
    type: string
    label: string
    showPassword?: any
    setShowPassword?: any
    onChange?: () => void
    onClick?: () => void
}



export default function InputComponent(props: PropsInputComponent) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show: any) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

    if (props.type === 'user-name') {
        return(
            <div className="flex items-center justify-center py-2 w-3/4">
                <TextField 
                    className="bg-white rounded"
                    id="outlined-basic" 
                    label={props.label} 
                    variant="outlined" 
                />
            </div>
        )
    }

    if (props.type === 'password') {
        return(
        <div className="flex items-center justify-center py-2 w-3/4">
        <FormControl variant="outlined" className="bg-white rounded">
          <InputLabel htmlFor="outlined-adornment-password" >{props.label}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={'' ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {props.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
        )
    }

    return null
     
}