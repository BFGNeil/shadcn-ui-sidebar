import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card, CardContent } from "../ui/card"
  
  const alerts = [
    {
        id: 1,
        name: "Alert 1",
        devices: 2,
        status: "Active",
        last_alerted: "2021-09-01",
    },
    {
        id: 2,
        name: "Alert 2",
        devices: 3,
        status: "Active",
        last_alerted: "2021-09-02",
    },
  ]
  export function AlertsTable() {
    return (
      <Card className="rounded-lg border-none mt-4">
      <CardContent className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alert Name</TableHead>
            <TableHead>Devices Assigned</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {alerts.map((alert) => (
                <TableRow key={alert.id}>
                    <TableCell className="font-medium">{alert.name}</TableCell>
                    <TableCell>{alert.devices}</TableCell>
                    <TableCell>{alert.status}</TableCell>
                    <TableCell>{alert.last_alerted}</TableCell>
                </TableRow>
            ))}
         
        </TableBody>
       
      </Table>
      </CardContent>
      </Card>
    )
  }
  