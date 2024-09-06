"use client";
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
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecentSales } from "@/components/alerts/recent";
import { AssetsTable } from "@/components/tables/assets";

export default function SitePage() {
  const {id } = useParams();
  const siteName = "Site " + id;
  return (
    <ContentLayout title={siteName}>
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
              <Link href="/sites">Sites</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{siteName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
{
  //grid, 12 columns
}
<div className="grid gap-4 grid-cols-12 gap-y-4 mt-4">

<PlaceholderContent height="600px" className="col-span-9 rounded-xl border shadow" />

      <Card className="rounded-lg border-none col-span-3">
        <CardHeader>
          <CardTitle>Active Alerts</CardTitle>
        </CardHeader>
        <CardContent>
        <RecentSales />
        </CardContent>
      </Card>

      <Card className="rounded-lg border-none  col-span-12">
        <CardHeader>
          <CardTitle>Assets</CardTitle>
        </CardHeader>
        <CardContent>
       <AssetsTable />
        </CardContent>
      </Card>
      </div>
    </ContentLayout>
  );
}
