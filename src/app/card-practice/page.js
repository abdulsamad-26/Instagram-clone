import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
function page() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <Card className='h-72 w-72'>
      <CardHeader>
        <div className='flex gap-2'>
        <Avatar>
  <AvatarImage src="" />
  <AvatarFallback>AM</AvatarFallback>
</Avatar>
        <CardTitle>Joseph underson</CardTitle>
        <p className='font-'>Posted 2h ago</p>
</div>
        <CardDescription>
          Track progress and recent activity for your Next.js app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Your design system is ready. Start building your next component.
      </CardContent>
    </Card>
    {/* <Button>Click me</Button> */}
    </div>
  )
}

export default page