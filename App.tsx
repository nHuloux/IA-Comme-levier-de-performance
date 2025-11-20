import React, { useState } from 'react';
import { 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Mic, 
  Image as ImageIcon, 
  Film,
  Menu,
  X,
  Workflow
} from 'lucide-react';
import { TabId } from './types';
import IntroView from './views/IntroView';
import PromptView from './views/PromptView';
import PlanningView from './views/PlanningView';
import DataView from './views/DataView';
import AudioView from './views/AudioView';
import ImageView from './views/ImageView';
import VideoView from './views/VideoView';
import ProcessView from './views/ProcessView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.INTRO);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case TabId.INTRO: return <IntroView />;
      case TabId.PROMPT: return <PromptView />;
      case TabId.DATA: return <DataView />;
      case TabId.PROCESS: return <ProcessView />;
      case TabId.PLANNING: return <PlanningView />;
      case TabId.IMAGE: return <ImageView />;
      case TabId.AUDIO: return <AudioView />;
      case TabId.VIDEO: return <VideoView />;
      default: return <IntroView />;
    }
  };

  const menuItems = [
    { id: TabId.INTRO, label: 'Introduction', icon: BookOpen },
    { id: TabId.PROMPT, label: 'Prompt Engineering', icon: MessageSquare },
    { id: TabId.DATA, label: 'Data & Dashboard', icon: BarChart3 },
    { id: TabId.PROCESS, label: 'Processus & Docs', icon: Workflow },
    { id: TabId.PLANNING, label: 'Planification', icon: Calendar },
    { id: TabId.IMAGE, label: 'Images', icon: ImageIcon },
    { id: TabId.AUDIO, label: 'Audio', icon: Mic },
    { id: TabId.VIDEO, label: 'Vidéo', icon: Film },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tighter text-white uppercase leading-none font-sans">MIRA</span>
            <span className="text-[0.6rem] font-bold tracking-widest text-slate-400 uppercase mt-1">École d'Ingénieur·e·s</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
              `}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-800">
          <div className="text-xs text-slate-500">
            <p>Récapitulatif de formation</p>
            <p className="mt-1">© 2024 Aflokkat</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 lg:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-slate-600 hover:text-slate-900"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-slate-800">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-sm font-medium text-slate-500 hidden sm:block">Créé par : Nicolas Huloux avec AIStudio</span>
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;