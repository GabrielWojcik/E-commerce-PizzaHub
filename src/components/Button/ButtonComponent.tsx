import { Button } from "@mui/material"

interface PropsButtonComponent{
    type: string
    label: string
}

export default function ButtonComponent(props: PropsButtonComponent) {
    if (props.type === 'send') {
        return(
            <div className="flex items-center justify-center py-2 w-3/4">
               <Button 
                className="bg-green-500 w-3/4"
                variant="contained"
                color="success"
                >
                    {props.label}
               </Button>

            </div>
        )
    }

    return null
}