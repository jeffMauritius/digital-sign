import React, { useState } from "react"
import { StepOne } from "./formSteps/stepOne"
import { Button } from "@/components/ui/button"
import { StepTwo } from "./formSteps/stepTwo"
import { StepThree } from "./formSteps/stepThree"
import { StepFour } from "./formSteps/stepFour"

const FormStep: React.FC = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(prevStep => prevStep + 1)
  }

  const prevStep = () => {
    setStep(prevStep => prevStep - 1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />
      case 2:
        return <StepTwo />
      case 3:
        return <StepThree />
      case 4:
        return <StepFour />
      default:
        return <StepOne />
    }
  }

  return (
    <div>
      {renderStep()}
      <div className="flex justify-start space-x-5 pt-5">
        {step > 1 && <Button onClick={prevStep}>Précédent</Button>}
        {step < 4 && <Button onClick={nextStep}>Suivant</Button>}
      </div>
    </div>
  )
}

export default FormStep
