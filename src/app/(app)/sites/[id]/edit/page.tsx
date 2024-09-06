'use client';
import Link from "next/link";
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
import { Form, FormProvider, useForm } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  file: z.string().nonempty("File is required"),
});

export default function SitePage() {
  const { id } = useParams();
  const siteName = "Site " + id;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: siteName,
      file: "site.geojson",
    },
  });

  const methods = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <ContentLayout title="Site List">
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
            <BreadcrumbLink asChild>
              <Link href={`/sites/${id}`}>{siteName}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Edit</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
     
      {
        //layout grid for the site, we will have columns of different sizes
      }
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 mt-2 ">
        {
          //site name card and geojson file listed that user can click edit on, 
        }
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
           <CardTitle>{siteName} Settings</CardTitle>
          </CardHeader>
          <CardContent>
         {
          //form with textbox for name, file name with edit button for geojson file
         }
          <FormProvider {...methods}>
        <Form {...form}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem 
            className="flex flex-row items-center"
            >
              <FormLabel 
              //give this at least 1/2 width
              className="w-1/2"
              >Site Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem 
            className="flex flex-row items-center"
            >
              <FormLabel 
              //give this at least 1/2 width
              className="w-1/2"
              >GeoJSON Floor Plan</FormLabel>
              
              {

                //flex 2 buttons space-before so they are on the right
              }
              <div className="flex-1 flex justify-end space-x-2">
                <Button type="button" variant="secondary">Edit</Button>
                <Button type="button" variant="secondary">Download</Button>
              </div>
              

              <FormMessage />
            </FormItem>
          
          )}
        />
        
 </Form>
 </FormProvider>

          </CardContent>
        </Card>



        {
          //and now any ble beacons that are associated with the site (mac address, name, latitutde, longitude)
        }
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
           <CardTitle>BLE Beacons</CardTitle>
          </CardHeader>
          <CardContent>
            {
              //table of ble beacons
            }
          </CardContent>
        </Card>

        {
          //and now any wifi access points that are associated with the site (mac address, name, latitutde, longitude)
        }
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
           <CardTitle>WiFi Access Points</CardTitle>
          </CardHeader>
          <CardContent>
            {
              //table of wifi access points
            }
          </CardContent>
        </Card>

        {
          //now we want a card for the sites assets (list of assets)

        }
        <Card className="col-span-12">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
           <CardTitle>Assets</CardTitle>
          </CardHeader>
          <CardContent>
            {
              //table of assets
            }
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}
