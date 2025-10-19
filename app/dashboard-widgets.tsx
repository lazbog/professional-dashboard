import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
}

const DashboardWidgets = () => {
  const kpiCards = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', positive: true },
    { title: 'Active Users', value: '2,350', change: '+180', positive: true },
    { title: 'Conversion Rate', value: '12.5%', change: '-2.3%', positive: false },
    { title: 'Avg. Session', value: '3m 24s', change: '+12s', positive: true },
  ];

  const recentActivity: Activity[] = [
    { id: 1, user: 'John Doe', action: 'Completed purchase', time: '2 min ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '15 min ago' },
    { id: 3, user: 'Bob Johnson', action: 'Left a review', time: '1 hour ago' },
    { id: 4, user: 'Alice Brown', action: 'Subscribed to newsletter', time: '3 hours ago' },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {kpiCards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className={`text-xs ${card.positive ? 'text-green-600' : 'text-red-600'}`}>
              {card.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
      
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest user actions on your platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="text-sm font-medium">{activity.user}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardWidgets;