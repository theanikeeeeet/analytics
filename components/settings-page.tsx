'use client';

import { Bell, Lock, Users, Zap } from 'lucide-react';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

function SettingItem({ icon, title, description, action }: SettingItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 md:p-6 border border-border rounded-2xl hover:bg-muted smooth-transition cursor-pointer">
      <div className="p-3 bg-secondary rounded-lg text-accent flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

export function SettingsPage() {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="px-4 md:px-8 py-6 border-b border-border bg-card sticky top-0 z-10">
        <h2 className="text-2xl font-serif font-semibold text-foreground">Settings</h2>
        <p className="text-sm text-muted-foreground mt-1">Manage your EventFlow AI experience</p>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 py-6 space-y-6 flex-1">
        {/* Notifications Section */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Notifications</h3>
          <div className="space-y-3">
            <SettingItem
              icon={<Bell size={24} />}
              title="Query Alerts"
              description="Get notified of high-volume query periods"
              action={
                <div className="w-12 h-6 bg-accent rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full smooth-transition"></div>
                </div>
              }
            />
            <SettingItem
              icon={<Zap size={24} />}
              title="Performance Updates"
              description="Receive updates about system performance"
              action={
                <div className="w-12 h-6 bg-muted rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-muted-foreground rounded-full smooth-transition"></div>
                </div>
              }
            />
          </div>
        </div>

        {/* Security Section */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Security</h3>
          <div className="space-y-3">
            <SettingItem
              icon={<Lock size={24} />}
              title="Change Password"
              description="Update your account password"
              action={
                <button className="px-4 py-2 text-accent text-sm font-medium hover:bg-secondary rounded-lg smooth-transition">
                  Update
                </button>
              }
            />
            <SettingItem
              icon={<Lock size={24} />}
              title="Two-Factor Authentication"
              description="Add an extra layer of security to your account"
              action={
                <button className="px-4 py-2 text-accent text-sm font-medium hover:bg-secondary rounded-lg smooth-transition">
                  Enable
                </button>
              }
            />
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Team Management</h3>
          <div className="space-y-3">
            <SettingItem
              icon={<Users size={24} />}
              title="Invite Team Members"
              description="Collaborate with your team on event operations"
              action={
                <button className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:opacity-90 smooth-transition">
                  Invite
                </button>
              }
            />
          </div>
        </div>

        {/* About Section */}
        <div className="bg-secondary border border-border rounded-2xl p-6 md:p-8">
          <h3 className="text-lg font-serif font-semibold text-foreground mb-2">About EventFlow AI</h3>
          <p className="text-sm text-muted-foreground mb-4">
            EventFlow AI is your intelligent event operations assistant, powered by advanced AI to answer attendee questions and manage event logistics seamlessly.
          </p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Version: 1.0.0</p>
            <p>Last updated: March 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
