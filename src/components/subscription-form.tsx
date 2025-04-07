"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { IconMail, IconUser } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  function onSubscribe(data: SubscriptionSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full rounded-2xl space-y-6 md:max-w-[440px]"
    >
      <Card>
        <CardHeader>
          <h2 className="font-heading font-semibold text-gray-200 text-xl">
            Inscrição
          </h2>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="group flex flex-row items-center gap-2 border rounded-lg focus-within:border-gray-100">
                <span className="text-gray-400 group-focus-within:text-gray-100">
                  <IconUser />
                </span>
                <Input
                  className="border-none ring-0 focus-visible:ring-0 focus:ring-0 outline-none focus:outline-none flex-1"
                  type="text"
                  placeholder="Nome completo"
                  {...register("name")}
                />
              </div>

              {errors?.name && (
                <p className="text-danger font-semibold text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="group flex flex-row items-center gap-2 border rounded-lg focus-within:border-gray-100">
                <span className="text-gray-400 ml-0.5 group-focus-within:text-gray-100">
                  <IconMail />
                </span>
                <Input
                  className="border-none ring-0 focus-visible:ring-0 focus:ring-0 outline-none focus:outline-none flex-1"
                  type="text"
                  placeholder="Email"
                  {...register("email")}
                />
              </div>

              {errors?.email && (
                <p className="text-danger font-semibold text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <Button className="mt-2.5 w-full flex justify-between" type="submit">
            Confirmar
            <ArrowRight className="size-6" />
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
