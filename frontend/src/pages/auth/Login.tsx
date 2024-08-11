import InputControl from "@/components/formcontrol/Input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { loginSchema, LoginType } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
  const form = useForm<LoginType>({
    defaultValues: {
      password: "",
      username: "",
    },
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginType) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="hidden md:block">image</div>
      <div className="flex justify-center items-center">
        <Card className="w-[90%] md:w-[80%] lg:w-[60%]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <InputControl
                  name="username"
                  placeholder="Enter Username"
                  label="Username"
                />
                <InputControl
                  name="password"
                  placeholder="Enter Password"
                  label="Password"
                />
                <Button>Login</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
/*

            <div>
              <Label htmlFor="username">Username</Label>
              <Input name="username" placeholder="Enter Username" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input name="password" placeholder="Enter Password" />
            </div>
            <div>
              <Button>Login</Button>
            </div>
*/
