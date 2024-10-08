import { StepOne } from "./stepOne"
import { StepTwo } from "./stepTwo"
import { StepThree } from "./stepThree"
import { StepFour } from "./stepFour"

import { STEP_ONE, STEP_TWO, STEP_THREE, STEP_FOUR } from "@/constants/steps"

export const Steps = [
  {
    step: STEP_ONE,
    component: StepOne,
    nextStep: () => STEP_TWO,
    prevStep: () => null,
  },
  {
    step: STEP_TWO,
    component: StepTwo,
    nextStep: () => STEP_THREE,
    prevStep: () => STEP_ONE,
  },
  {
    step: STEP_THREE,
    component: StepThree,
    nextStep: () => STEP_FOUR,
    prevStep: () => STEP_TWO,
  },
  {
    step: STEP_FOUR,
    component: StepFour,
    nextStep: () => null,
    prevStep: () => STEP_THREE,
  },
]
