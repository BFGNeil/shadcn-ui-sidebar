import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card, CardContent } from "../ui/card"
  
  const assets = [
    {
      id: 1,
      name: "Asset 1",
      type: "Person",
      site: "Site 1",
      last_seen: "2021-09-01",
      status: "Active",
      alert: false,
      alert_msg: "",
    },
    {
      id: 2,
      name: "Asset 2",
      type: "Vehicle",
      site: "Site 2",
      last_seen: "2021-09-02",
      status: "Active",
      alert: true,
      alert_msg: "Out of bounds",
    },
  ]
  export function AssetsTable() {
    return (
      <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Site</TableHead>
            <TableHead>Last Seen</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Alert</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}
            className={asset.alert ? "bg-red-600" : ""}>
              <TableCell className="font-medium">{asset.name}</TableCell>
              <TableCell>{asset.type}</TableCell>
              <TableCell>{asset.site}</TableCell>
              <TableCell>{asset.last_seen}</TableCell>
              <TableCell>{asset.status}</TableCell>
              <TableCell>{asset.alert ? asset.alert_msg : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
      </CardContent>
      </Card>
    )
  }
  