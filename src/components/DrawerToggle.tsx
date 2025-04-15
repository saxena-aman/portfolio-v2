"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Bot } from 'lucide-react';
import { cn } from "@/lib/utils";

interface DrawerToggleProps {
  className?: string;
  style?: React.CSSProperties;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
}

export function DrawerToggle({ 
  className, 
  style, 
  buttonClassName,
  buttonStyle 
}: DrawerToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className={buttonClassName}
        style={buttonStyle}
        onClick={() => setOpen(true)}
      >
        <Bot className="size-5"/>
      </Button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className={cn("w-full rounded-t-xl p-6", className)} style={style}>
          <DrawerHeader>
            <DrawerTitle>Start Chat</DrawerTitle>
            <DrawerDescription>Let's have a conversation!</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Send</Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}