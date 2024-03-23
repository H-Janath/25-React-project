
import { Button } from '@mui/material';
import './index.css'
import { useState } from 'react'
export default function Color() {
    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState('#000000');

    function handleCreateRandomHexColor(){
        const numbers = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

        let hex="#";

        for(let i=0;i<6;i++){
            hex+=numbers[getRandomInt(0,15)]
            
        }
        setColor(hex)
        console.log(color)
    }
    function handleCreateRandomRGBColor(){
        let rgb = "rgb(";
        for (let i = 0; i < 1; i++) {
            rgb += getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255);
        }
        rgb += ")";
        
        setColor(rgb);
        console.log(rgb);
    }

    return (
        <>
            <div style={{
                width:"210vh",
                height:"100vh",
                background:color,
            }}>
                <Button variant="contained" disableElevation onClick={()=>{setTypeOfColor("hex")}}>Create HEX color</Button>
                <Button variant="contained" disableElevation onClick={()=>{setTypeOfColor("rgb")}} >Create RGB color</Button>
                <Button variant="contained" disableElevation onClick={()=>{typeOfColor=="hex"?handleCreateRandomHexColor():handleCreateRandomRGBColor()}}>Generate random color</Button>
                <h1>{typeOfColor}</h1>
                <h1>{color}</h1>
            </div>

        </>
    )
}