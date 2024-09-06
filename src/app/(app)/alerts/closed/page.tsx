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
import { DevicesTable } from "@/components/tables/devices";
import { AlertsTable } from "@/components/tables/alerts";
import { RecentSales } from "@/components/alerts/recent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AlertsClosedPage() {
  return (
    <ContentLayout title="Alerts">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/alerts">Alerts</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Closed Alerts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Closed Alerts</CardTitle>
        </CardHeader>
        <CardContent>
     <RecentSales />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
