"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import axios from "axios";

import Input from "../../components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type TypeVariant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();

  const [variant, setVariant] = useState<TypeVariant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/users");
    }
  }, [router, session?.status]);

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "LOGIN" ? "REGISTER" : "LOGIN"
    );
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong..."))
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      signIn("credentials", { ...data, redirect: false })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid email or password!");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Logged in!");
            router.push("/users");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: "github" | "google") => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid email or password!");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className=" bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              errors={errors}
              id="name"
              label="Name"
              register={register}
              disabled={isLoading}
            />
          )}

          <Input
            errors={errors}
            id="email"
            label="Email address"
            type="email"
            register={register}
            disabled={isLoading}
          />
          <Input
            errors={errors}
            id="password"
            label="Password"
            type="password"
            register={register}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className=" absolute inset-0 flex items-center">
              <div className=" w-full border-t border-gray-300" />
            </div>
            <div className=" relative flex justify-center text-sm ">
              <span className=" bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className=" mt-6 flex gap-2">
            <AuthSocialButton
              icon={FaGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={FcGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div className=" flex gap-2 justify-center text-sm mt-6 text-gray-500 ">
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className=" underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Log in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
