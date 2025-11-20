import React from 'react';
import { Mic, FileAudio, Code, Server, ArrowRight, Bot, FileText, Speaker, Music, Sparkles } from 'lucide-react';

const AudioView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto space-y-10 pb-12">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Traitement et Génération Audio</h2>
        <p className="text-slate-600">
          L'IA transforme l'audio en passant souvent par le texte ou le code, plutôt que par une écoute directe brute.
        </p>
      </div>

      {/* Section 1: Le Défi Technique (Code vs Direct) */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-600 shrink-0">
                <Code size={24} />
            </div>
            <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">La barrière du fichier Audio</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Bien que multimodaux, les LLMs ont souvent du mal à charger et analyser des fichiers audio lourds directement dans leur contexte. 
                    La solution standard n'est pas que le LLM "écoute", mais qu'il <strong>génère du code</strong> (Python, FFmpeg, Whisper) pour traiter le fichier.
                </p>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-blue-300 overflow-x-auto">
                    <span className="text-slate-500"># Le LLM écrit ce code pour analyser le son au lieu de l'écouter lui-même</span><br/>
                    import librosa<br/>
                    y, sr = librosa.load('meeting_recording.wav')<br/>
                    tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)<br/>
                    print(f"Tempo détecté : {'{tempo}'} BPM")
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: Les Outils Phares */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* NotebookLM */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-blue-100"></div>
            <div className="relative z-10">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
                    <Bot size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">NotebookLM</h3>
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Google / Gratuit</span>
                <p className="text-sm text-slate-600 mt-3">
                    Révolutionne la consommation. Transforme vos documents en un <strong>podcast audio</strong> où deux IA discutent du contenu.
                </p>
            </div>
        </div>

        {/* ElevenLabs */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-purple-100"></div>
             <div className="relative z-10">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
                    <Speaker size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">ElevenLabs</h3>
                <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Spécialisé / Payant</span>
                <p className="text-sm text-slate-600 mt-3">
                    La référence pour le <strong>Voice Cloning</strong> et le TTS haute fidélité. Idéal pour le doublage et la création de voix off réalistes.
                </p>
            </div>
        </div>

        {/* Google AI Studio */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-teal-100"></div>
             <div className="relative z-10">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
                    <Sparkles size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Google AI Studio</h3>
                <span className="text-xs font-semibold bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Google / Dev</span>
                <p className="text-sm text-slate-600 mt-3">
                    Accès direct aux modèles Gemini. Permet de tester les capacités natives de <strong>Text-to-Speech</strong> via l'API.
                </p>
            </div>
        </div>
      </div>

      {/* Section 3: Le Pipeline de Production */}
      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Server size={24} className="text-indigo-600"/>
            Pipeline de Production Audio
        </h3>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                
                {/* Etape 1 */}
                <div className="flex-1 w-full bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center text-center">
                    <div className="bg-red-100 p-3 rounded-full text-red-600 mb-3">
                        <Mic size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm uppercase mb-1">1. Speech-to-Text</h4>
                    <p className="text-xs text-slate-500 mb-2">Plateforme dédiée (Whisper/ElevenLabs)</p>
                    <div className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 border border-slate-200 w-full">
                        Audio (.wav) &rarr; Texte (.txt)
                    </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-slate-400">
                    <ArrowRight size={24} />
                </div>
                 <div className="md:hidden text-slate-400 rotate-90 my-2">
                    <ArrowRight size={24} />
                </div>

                {/* Etape 2 */}
                <div className="flex-1 w-full bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-3">
                        <Bot size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm uppercase mb-1">2. Traitement LLM</h4>
                    <p className="text-xs text-slate-500 mb-2">GPT-4 / Claude / Gemini</p>
                    <div className="text-[10px] bg-blue-50 px-2 py-1 rounded text-blue-700 border border-blue-100 w-full font-medium">
                        Traduction, Résumé, Réécriture
                    </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-slate-400">
                    <ArrowRight size={24} />
                </div>
                <div className="md:hidden text-slate-400 rotate-90 my-2">
                    <ArrowRight size={24} />
                </div>

                {/* Etape 3 */}
                <div className="flex-1 w-full bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full text-green-600 mb-3">
                        <Music size={20} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm uppercase mb-1">3. Text-to-Speech</h4>
                    <p className="text-xs text-slate-500 mb-2">ElevenLabs / Google AI Studio</p>
                    <div className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 border border-slate-200 w-full">
                         Texte Transformé &rarr; Nouvel Audio
                    </div>
                </div>

            </div>
            
            {/* Connection Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-200 z-0 -translate-y-1/2"></div>
        </div>
      </section>

    </div>
  );
};

export default AudioView;