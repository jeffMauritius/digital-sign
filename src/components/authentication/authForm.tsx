import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SignInForm from "./signinForm"
import SignUpForm from "./signupForm"

const AuthForm = () => {
  return (
    <Tabs defaultValue="signIn" className="pt-3">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signIn">Sign in</TabsTrigger>
        <TabsTrigger value="signUp">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="signIn">
        <SignInForm />
      </TabsContent>
      <TabsContent value="signUp">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  )
}

export default AuthForm
