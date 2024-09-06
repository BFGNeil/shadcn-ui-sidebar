import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Box, Icon, Map } from "lucide-react";
import { RecentSales } from "@/components/alerts/recent";

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard" >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
         
        </BreadcrumbList>
      </Breadcrumb>
      {
        //we want to create a grid of cards, so first we need to create a grid layout
      }
      <div className="grid gap-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4 mt-2">

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">
                      +2 since last hour
                      </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Assets
                    </CardTitle>
                    <Box className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">573</div>
                    <p className="text-xs text-muted-foreground">
                      +200 last 24 hours
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     Total Assets
                    </CardTitle>
                    <Box className="h-4 w-4 text-muted-foreground"/>
                    
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">129</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Sites
                    </CardTitle>
                    <Map className="h-4 w-4 text-muted-foreground"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">
                      +20% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 mt-4">

                    <PlaceholderContent height="500px" className="col-span-8 rounded-xl border shadow" />
                 
                <Card className="col-span-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-sm font-medium">
                      Active Alerts <br />
                    </CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground"/>
                  </CardHeader>
                 
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card></div>
              
    </ContentLayout>
  );
}
