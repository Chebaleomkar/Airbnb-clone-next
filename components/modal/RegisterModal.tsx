"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((err: any) => {
        toast.error("something went wronge");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={error}
        required
        />
      <Input
        id="name"
        label="Name"
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
    registerModal.onClose();
     loginModal.onOpen();
 
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
            Already have an account?
            <span onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline font-semibold  ">
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Register"
      isOpen={registerModal.isOpen}
      actionLabel="Continue"
      body={bodyContent}
      footer={footerContent}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
