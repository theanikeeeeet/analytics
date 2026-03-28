'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { ChatInterface } from '@/components/chat-interface';
import { AnalyticsPage } from '@/components/analytics-page';
import { SettingsPage } from '@/components/settings-page';

export default function Home() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main content */}
      <main className="flex-1 md:ml-60 flex flex-col h-screen overflow-hidden">
        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'analytics' && <AnalyticsPage />}
        {activeTab === 'settings' && <SettingsPage />}
      </main>
    </div>
  );
}
