"use client";

import { IconCopy } from "@tabler/icons-react";

import { Button } from "./ui/button";

interface InviteLinkProps {
  inviteLink: string;
}

export function CopyButton({ inviteLink }: InviteLinkProps) {
  function copyInvitelink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <Button
      onClick={copyInvitelink}
      size={"icon"}
      className="h-8 mr-0.5 hover:cursor-pointer"
    >
      <span className="text-gray-100 flex items-center justify-center group-focus-within:text-zinc-950">
        <IconCopy />
      </span>
    </Button>
  );
}
