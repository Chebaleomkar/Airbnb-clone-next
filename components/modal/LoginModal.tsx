"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from 'next-auth/react'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";

const RegisterModal = () => {

  const registerModal = useLoginModal();
  const loginModal = useLoginModal();

  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { error  },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    signIn("credentials", {
        ...data,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          toast.success("Logged in");
          router.refresh();
          loginModal.onClose();
        }
  
        if (callback?.error) {
          toast.error(callback.error);
        }
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome Back" subtitle="Login to your account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={error}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={error}
        required
      />
    </div>
  );

  const toggle = useCallback(()=>{
    loginModal.onClose();
    registerModal.onOpen();

  },[loginModal , registerModal]);

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() =>signIn('google')}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() =>signIn('github')}
      />
      <div className="text-neutral-500 text-center  mt-4 font-light ">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <p>
            First time using Airbnb ?
            <span onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline  font-semibold ">
               Create an account
              </span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Login"
      isOpen={loginModal.isOpen}
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
