'use client';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Clock, AlertCircle } from 'lucide-react';

const chartData = [
  { time: '2 PM', queries: 12 },
  { time: '3 PM', queries: 19 },
  { time: '4 PM', queries: 15 },
  { time: '5 PM', queries: 28 },
  { time: '6 PM', queries: 45 },
  { time: '7 PM', queries: 52 },
  { time: '8 PM', queries: 38 },
  { time: '9 PM', queries: 22 },
];

const responseTimeData = [
  { query: 'Entry Location', time: 1.2 },
  { query: 'Event Timing', time: 0.8 },
  { query: 'Parking Info', time: 1.5 },
  { query: 'Venue Details', time: 0.9 },
  { query: 'Registration', time: 1.1 },
];

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}

function StatCard({ icon, title, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md smooth-transition">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-2">{value}</h3>
        </div>
        <div className="p-3 bg-secondary rounded-lg text-accent">
          {icon}
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export function AnalyticsPage() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="px-4 md:px-8 py-6 border-b border-border bg-card sticky top-0 z-10">
        <h2 className="text-2xl font-serif font-semibold text-foreground">Analytics</h2>
        <p className="text-sm text-muted-foreground mt-1">Real-time event insights</p>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 py-6 space-y-6 flex-1">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <StatCard
            icon={<AlertCircle size={24} />}
            title="Total Queries"
            value="289"
            subtitle="Answered in the last hour"
          />
          <StatCard
            icon={<Clock size={24} />}
            title="Avg Response Time"
            value="1.1s"
            subtitle="Sub-second responses"
          />
          <StatCard
            icon={<TrendingUp size={24} />}
            title="Peak Activity"
            value="8 PM"
            subtitle="Most queries at this time"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Query Volume Chart */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Query Volume by Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="time" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Bar dataKey="queries" fill="var(--accent)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Response Time Chart */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Response Time by Query Type</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={responseTimeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis type="number" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis dataKey="query" type="category" stroke="var(--muted-foreground)" style={{ fontSize: '12px' }} width={100} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'var(--foreground)' }}
                />
                <Bar dataKey="time" fill="var(--chart-2)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Key Insights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground">Peak queries at 8 PM, marking the event&apos;s main activity window</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground">Most asked question: Entry location (35% of queries)</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground">Average satisfaction rate: 94% with AI responses</p>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Most Asked Questions</h3>
            <ul className="space-y-3">
              <li className="pb-3 border-b border-border last:border-b-0">
                <p className="text-sm font-medium text-foreground">Where is the entry?</p>
                <p className="text-xs text-muted-foreground mt-1">87 queries</p>
              </li>
              <li className="pb-3 border-b border-border last:border-b-0">
                <p className="text-sm font-medium text-foreground">What time does it start?</p>
                <p className="text-xs text-muted-foreground mt-1">65 queries</p>
              </li>
              <li className="pb-3 border-b border-border last:border-b-0">
                <p className="text-sm font-medium text-foreground">Is parking available?</p>
                <p className="text-xs text-muted-foreground mt-1">52 queries</p>
              </li>
              <li>
                <p className="text-sm font-medium text-foreground">How to register?</p>
                <p className="text-xs text-muted-foreground mt-1">42 queries</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
