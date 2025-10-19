import ThemeToggle from '@/components/theme-toggle';
import DashboardWidgets from './dashboard-widgets';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Professional Dashboard</h1>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">
            Welcome to your professional dashboard. Monitor your key metrics and activity.
          </p>
        </div>
        
        <DashboardWidgets />
      </main>
    </div>
  );
}