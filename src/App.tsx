import React from 'react';
import {Box, Button, ButtonGroup} from "@mui/material";
import Item from "./entities/Item";



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
      <Box>
        {(progress>=0)?<Item setButtonsIsVisible={setButtonsIsVisible} setProgress={setProgress} progress={progress}/>:<Button onClick={start}>Start
        </Button>}
        {(buttonsIsVisible)&&<ButtonGroup variant="contained">
          <Button onClick={()=>setProgress(progress+1)}>Дальше</Button>
          <Button onClick={()=>setProgress(progress+1)}>Пропустить</Button>
        </ButtonGroup>}
      </Box>
  );
}

export default App;
