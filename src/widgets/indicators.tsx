import {Stepper, StepIndicator, Step,} from "@mui/joy";
import "./index.css"

function Indicators(props: { amount: number, current: number }) {
    const indicators: number[] =[]

    for (let i=0; i<props.amount; i++) {
        indicators.push(i)
    }
    return <Stepper sx={{
        width: `50%`,
        marginBottom: "10px",

        padding: "10px",
    }}>
        {
            indicators.map((indicator) => {
                const bg=indicator<=props.current?'primary': 'neutral'
                return  <Step
                    indicator={
                        <StepIndicator variant="solid" color={bg}>
                            {indicator+1}
                        </StepIndicator>
                    }
                >
                </Step>
            })
        }
    </Stepper>
}

export default Indicators;