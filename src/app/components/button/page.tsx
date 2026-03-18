// import React from 'react'
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">
      button page
      <Button variant="outline">Button</Button>
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline" size="sm">
        Button Small
      </Button>

    </div>
  )
}
