import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";



  
  export function RecentSales() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
            <p className="text-sm text-muted-foreground">
              Shock Detected
            </p>
          </div>
          <div className="ml-auto font-medium">{
            //return a new date for now
            new Date().toLocaleTimeString()
            }</div>
        </div>
       

        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>FR</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Finn Richards</p>
            <p className="text-sm text-muted-foreground">
              Temperature Low
            </p>
          </div>
          <div className="ml-auto font-medium">{
            //return a new date for now
            new Date().toLocaleTimeString()
            }</div>
        </div>

        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Aria Smith</p>
            <p className="text-sm text-muted-foreground">
             No Movement
            </p>
          </div>
          <div className="ml-auto font-medium">{
            //return a new date for now
            new Date().toLocaleTimeString()
            }</div>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Ella Daniels</p>
            <p className="text-sm text-muted-foreground">
             Restricted Area
            </p>
          </div>
          <div className="ml-auto font-medium">{
            //return a new date for now
            new Date().toLocaleTimeString()
            }</div>
        </div>

        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>LY</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Liam Young</p>
            <p className="text-sm text-muted-foreground">
              Shock Detected
            </p>
          </div>
          <div className="ml-auto font-medium">{
            //return a new date for now
            new Date().toLocaleTimeString()
            }</div>
        </div>
      </div>
    )
  }