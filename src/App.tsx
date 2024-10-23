import React from 'react';
import {Box, Button, ButtonGroup} from "@mui/material";
import Item from "./entities/Item";
import './app/index.css'



function App() {

  const beginPage=localStorage.getItem("progress")===null?-1:JSON.parse(localStorage.getItem("progress")!);
  const [progress, setProgress] = React.useState(beginPage);
  const [buttonsIsVisible, setButtonsIsVisible] = React.useState<boolean>(!(beginPage<0));
  function start() {
    localStorage.setItem("result", JSON.stringify([]));
    setProgress(0)
    setButtonsIsVisible(true)
  }
  return (
      <Box sx={{
        paddingTop: "150px"
      }}>
        {(progress>=0)?<Item setButtonsIsVisible={setButtonsIsVisible} setProgress={setProgress} progress={progress}/>:
            <Button  variant="contained" onClick={start}>Start
        </Button>}
        {(buttonsIsVisible)&&<ButtonGroup
            sx={{
              textAlign: "center",
              margin: '0 auto'
            }}
            variant="text">
          <Button onClick={()=>setProgress(progress+1)}>Дальше</Button>
          <Button onClick={()=>setProgress(progress+1)}>Пропустить</Button>
        </ButtonGroup>}
      </Box>
  );
}

export default App;
