"use client";

import { api } from "~/trpc/react";

export  function HelloPage() {
  const { data, error, isLoading } = api.dummy.hello.useQuery({text: "bob"});
  // const result =  api.dummy.hello.useQuery()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-lg">{data?.greeting}</p>
    </div>
  );
}