import React from 'react';
import { Film, ScanEye, Layers, BrainCircuit, MessageSquare, Video, FileAudio, Eye, User, Car, Zap, Mountain } from 'lucide-react';

const VideoView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 space-y-12 pb-12">
      
      {/* Header */}
      <div>
         <h2 className="text-3xl font-bold text-slate-900 mb-2">Analyse Vidéo Multimodale</h2>
         <p className="text-slate-600 max-w-3xl">
           Contrairement à l'audio qui nécessite souvent des outils tiers, les modèles récents (Gemini 1.5, GPT-4o) sont "natifs vidéo". Ils <strong>voient</strong> littéralement le contenu.
         </p>
      </div>

      {/* Concept Clé : Frame Sampling */}
      <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 overflow-hidden relative">
        <div className="flex items-center gap-3 mb-8">
            <div className="bg-indigo-100 p-2 rounded text-indigo-600">
                <ScanEye size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800">Comment l'IA "regarde" une vidéo ?</h3>
                <p className="text-sm text-slate-500">Le processus de tokenisation visuelle.</p>
            </div>
        </div>

        {/* Visualisation du Sampling */}
        <div className="relative">
            {/* La bande vidéo */}
            <div className="flex items-center gap-4 overflow-x-auto pb-6 scrollbar-hide">
                
                {/* Input File */}
                <div className="flex flex-col items-center shrink-0 mr-4">
                    <div className="w-16 h-20 bg-slate-800 rounded flex items-center justify-center text-white mb-2 shadow-lg">
                        <Video size={32} />
                    </div>
                    <span className="text-xs font-bold text-slate-600">Fichier MP4</span>
                </div>

                {/* Arrow */}
                <div className="h-1 w-8 bg-slate-300 shrink-0"></div>

                {/* Frames Extraction */}
                <div className="flex gap-2 bg-slate-100 p-4 rounded-xl border border-slate-200 relative">
                    <span className="absolute -top-3 left-4 bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-full">1 frame / seconde</span>
                    
                    {/* Frame 1: Personnage */}
                    <div className="w-24 h-16 bg-white border border-slate-300 shadow-sm rounded flex flex-col items-center justify-center shrink-0 relative group hover:scale-105 transition-transform">
                        <div className="bg-blue-50 w-full h-full flex items-center justify-center text-blue-500">
                            <User size={24} />
                        </div>
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white text-[8px] px-1 rounded-tr">t=1s</div>
                    </div>

                    {/* Frame 2: Action */}
                    <div className="w-24 h-16 bg-white border border-slate-300 shadow-sm rounded flex flex-col items-center justify-center shrink-0 relative group hover:scale-105 transition-transform">
                        <div className="bg-red-50 w-full h-full flex items-center justify-center text-red-500">
                            <Car size={24} />
                        </div>
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white text-[8px] px-1 rounded-tr">t=2s</div>
                    </div>

                    {/* Frame 3: Paysage */}
                    <div className="w-24 h-16 bg-white border border-slate-300 shadow-sm rounded flex flex-col items-center justify-center shrink-0 relative group hover:scale-105 transition-transform">
                        <div className="bg-green-50 w-full h-full flex items-center justify-center text-green-500">
                            <Mountain size={24} />
                        </div>
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white text-[8px] px-1 rounded-tr">t=3s</div>
                    </div>

                    {/* Frame 4: Impact */}
                    <div className="w-24 h-16 bg-white border border-slate-300 shadow-sm rounded flex flex-col items-center justify-center shrink-0 relative group hover:scale-105 transition-transform">
                        <div className="bg-yellow-50 w-full h-full flex items-center justify-center text-yellow-600">
                            <Zap size={24} />
                        </div>
                        <div className="absolute bottom-0 left-0 bg-black/50 text-white text-[8px] px-1 rounded-tr">t=4s</div>
                    </div>

                    <div className="w-24 h-16 border-2 border-dashed border-slate-300 rounded flex items-center justify-center shrink-0 text-slate-400 text-xs">
                        ...
                    </div>
                </div>

                {/* Plus sign */}
                <div className="text-slate-400 font-bold text-xl shrink-0">+</div>

                {/* Audio Track */}
                <div className="w-32 h-16 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center flex-col shrink-0">
                    <div className="flex gap-0.5 items-end h-6 mb-1">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-1 bg-orange-400 rounded-t" style={{height: `${Math.random() * 100}%`}}></div>
                        ))}
                    </div>
                    <span className="text-[10px] text-orange-700 font-bold">Piste Audio</span>
                </div>

                {/* Arrow */}
                <div className="h-1 w-8 bg-slate-300 shrink-0"></div>

                {/* Brain/Context */}
                <div className="flex flex-col items-center shrink-0 ml-4">
                     <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-2 shadow-xl animate-pulse">
                        <BrainCircuit size={36} />
                    </div>
                    <span className="text-xs font-bold text-indigo-900">Contexte IA</span>
                </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 mt-2 border border-slate-200">
                <p>
                    <strong>L'interprétation :</strong> Le modèle reçoit simultanément les images (découpées en patchs visuels) et l'audio. 
                    Il n'a pas besoin de "lire" une description de la vidéo, il analyse les pixels et les ondes sonores directement dans son énorme fenêtre de contexte (jusqu'à 2M de tokens pour Gemini).
                </p>
            </div>
        </div>
      </section>

      {/* Comparatif Audio vs Video */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pourquoi l'Audio seul est difficile */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-4 text-orange-600">
                <FileAudio size={24} />
                <h3 className="text-lg font-bold">Pourquoi l'Audio est limité ?</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                    <div className="w-1 h-full bg-orange-200 shrink-0 rounded"></div>
                    <p>
                        <strong>Ambiguïté contextuelle :</strong> Un bruit de "craquement" peut être un feu de bois, un pas sur une branche, ou un biscuit qu'on casse. Sans l'image, l'IA doit deviner.
                    </p>
                </li>
                <li className="flex gap-3">
                    <div className="w-1 h-full bg-orange-200 shrink-0 rounded"></div>
                    <p>
                        <strong>Linéarité :</strong> L'audio est purement temporel. Il est difficile pour un modèle de "sauter" d'un concept à l'autre sans repère visuel spatial.
                    </p>
                </li>
                <li className="flex gap-3">
                    <div className="w-1 h-full bg-orange-200 shrink-0 rounded"></div>
                    <p>
                        <strong>Dépendance au texte :</strong> Souvent, l'audio est d'abord converti en texte (Whisper), perdant l'intonation, l'émotion ou les bruits de fond non verbaux.
                    </p>
                </li>
            </ul>
        </div>

        {/* Pourquoi la Vidéo (Multimodal) est supérieure */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-4 text-indigo-600">
                <Layers size={24} />
                <h3 className="text-lg font-bold">L'avantage Multimodal</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                    <div className="w-1 h-full bg-indigo-200 shrink-0 rounded"></div>
                    <p>
                        <strong>Désambiguïsation visuelle :</strong> L'IA voit le feu de bois. Le bruit de "craquement" est immédiatement identifié correctement grâce à l'image.
                    </p>
                </li>
                <li className="flex gap-3">
                    <div className="w-1 h-full bg-indigo-200 shrink-0 rounded"></div>
                    <p>
                        <strong>Densité d'information :</strong> Une image vaut 1000 mots. En échantillonnant 1 image/seconde, le modèle absorbe une quantité massive d'informations contextuelles que le texte seul ne pourrait décrire.
                    </p>
                </li>
                <li className="flex gap-3">
                    <div className="w-1 h-full bg-indigo-200 shrink-0 rounded"></div>
                    <p>
                        <strong>Tokenisation native :</strong> Les modèles comme Gemini ont été entraînés dès le départ avec des vidéos. Ils traitent les images comme un langage à part entière, pas comme une traduction.
                    </p>
                </li>
            </ul>
        </div>
      </section>

      {/* Use Case Example */}
      <section className="bg-slate-900 text-white rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
            <Eye size={24} className="text-green-400" />
            <h3 className="text-xl font-bold">Exemple Concret : Analyse de Sécurité</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
                <img 
                    src="https://image.pollinations.ai/prompt/CCTV%20camera%20footage%20factory%20worker%20without%20helmet%20warning?width=400&height=400&nologo=true" 
                    alt="CCTV Footage" 
                    className="rounded-lg border border-slate-700 opacity-80"
                />
            </div>
            <div className="col-span-2 flex flex-col justify-center space-y-4">
                <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-2">Prompt Utilisateur</p>
                    <p className="font-mono text-sm text-green-300">
                        "Analyse cette vidéo de surveillance de 10 minutes. Indique les timestamps précis où un ouvrier entre dans la zone B sans son casque de sécurité."
                    </p>
                </div>
                <div className="flex items-start gap-3">
                    <MessageSquare className="text-blue-400 shrink-0 mt-1" size={20} />
                    <div>
                        <p className="font-bold text-blue-400 text-sm">Réponse de l'IA :</p>
                        <p className="text-sm text-slate-300 mt-1">
                            "J'ai détecté deux incidents :<br/>
                            - <strong>02:14</strong> : Une personne en veste bleue traverse la zone sans casque.<br/>
                            - <strong>08:45</strong> : La même personne revient, toujours sans équipement de tête."
                        </p>
                        <p className="text-xs text-slate-500 mt-2 italic">
                            L'IA a corrélé la reconnaissance d'objet (casque manquant) avec la continuité temporelle (timestamps) sans aucun code Python complexe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default VideoView;