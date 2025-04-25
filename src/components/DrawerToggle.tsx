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
import { Bot, Send } from "lucide-react";
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
  buttonStyle,
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
        <Bot className="size-5" />
      </Button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent
          className={cn("w-full rounded-t-xl p-6", className)}
          style={style}
        >
          <DrawerFooter>
            <div className="flex flex-row items-center gap-2 w-full border border-gray-300 dark:border-gray-700 rounded-xl p-2">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-grow basis-9/10 p-2 rounded-md focus:outline-none bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <Button
                variant="ghost"
                className="flex-none basis-1/10 flex items-center justify-center p-2 rounded-full aspect-square"
                onClick={() => {
                  // Handle send message
                  setOpen(false);
                }}
              >
                <Send className="w-full h-full max-w-5 max-h-5 text-black dark:text-white" />
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
