import React, { useState } from 'react';
import { Image as ImageIcon, Download, Wand2, Layers, ArrowRight, ScanLine, Maximize, Palette, Sparkles, Loader2 } from 'lucide-react';

// Composant helper pour gérer le chargement progressif des images
const ImageWithLoader: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className} bg-slate-100`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
           <Loader2 className="animate-spin text-slate-400" size={24} />
        </div>
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">
            Erreur chargement
        </div>
      ) : (
        <img 
            src={src} 
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => { setIsLoading(false); setHasError(true); }}
            loading="lazy"
        />
      )}
    </div>
  );
};

const ImageView: React.FC = () => {
  // Optimisation : On fixe une taille modérée (ex: 512px) pour accélérer la génération sur l'API
  const baseSize = "width=300&height=300";
  const landscapeSize = "width=768&height=432"; // 16:9 approx

  return (
    <div className="animate-in fade-in duration-500 space-y-12 pb-12">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Génération d'Images</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
            Comprendre comment contrôler la génération : du choix des mots (Prompting) aux techniques de retouche (Inpainting/Outpainting).
        </p>
      </div>

      {/* Section 1: L'Impact du Prompt */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-6">
            <div className="bg-orange-100 p-2 rounded text-orange-600">
                <Wand2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">1. L'Impact du Prompt</h3>
        </div>
        <p className="text-slate-600 mb-6 text-sm">
            La précision du vocabulaire détermine la qualité. Comparons une demande basique avec une demande enrichie (style, lumière, caméra).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Basic Prompt */}
            <div className="space-y-3">
                <div className="bg-slate-100 p-3 rounded-lg text-xs font-mono text-slate-500 border border-slate-200">
                    <span className="font-bold text-red-500">Prompt Basique :</span><br/>
                    "A cat in the street"
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-slate-200 relative group">
                     <ImageWithLoader
                        src={`https://image.pollinations.ai/prompt/a%20cat%20in%20the%20street?${baseSize}&nologo=true&seed=42`}
                        alt="Chat basique"
                    />
                    <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-slate-700 z-20">
                        Résultat générique
                    </div>
                </div>
            </div>

            {/* Advanced Prompt */}
            <div className="space-y-3">
                 <div className="bg-indigo-50 p-3 rounded-lg text-xs font-mono text-indigo-800 border border-indigo-100">
                    <span className="font-bold text-indigo-600">Prompt Avancé :</span><br/>
                    "A majestic cat sitting on a cobblestone street in Paris at sunset, warm lighting, cinematic bokeh, 8k, highly detailed fur"
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-indigo-200 shadow-lg relative group">
                     <ImageWithLoader
                        src={`https://image.pollinations.ai/prompt/a%20majestic%20cat%20sitting%20on%20a%20cobblestone%20street%20in%20Paris%20at%20sunset%20warm%20lighting%20cinematic%20bokeh%208k%20highly%20detailed%20fur?${baseSize}&nologo=true&seed=42`}
                        alt="Chat avancé"
                    />
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1 z-20">
                        <Sparkles size={12} /> Amélioré
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: Inpainting & Outpainting */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
         <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-100 p-2 rounded text-blue-600">
                <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">2. Retouche et Extension</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Inpainting */}
            <div>
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <ScanLine size={18} className="text-blue-500"/> Inpainting
                    <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Modifier l'intérieur</span>
                </h4>
                <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                        <p className="text-xs text-center text-slate-500">Original</p>
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border border-slate-200">
                            <ImageWithLoader
                                src={`https://image.pollinations.ai/prompt/empty%20wooden%20table%20in%20a%20sunny%20garden%20photography?width=300&height=400&nologo=true&seed=10`}
                                alt="Table vide"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-slate-400">
                        <ArrowRight size={24} />
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-xs text-center text-blue-600 font-medium">Avec Inpainting</p>
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-blue-400 relative">
                             <ImageWithLoader
                                src={`https://image.pollinations.ai/prompt/wooden%20table%20in%20a%20sunny%20garden%20with%20a%20delicious%20fancy%20chocolate%20cake%20on%20it%20photography?width=300&height=400&nologo=true&seed=10`}
                                alt="Table avec gâteau"
                            />
                            <div className="absolute inset-0 border-4 border-blue-400/50 animate-pulse rounded-lg pointer-events-none z-20"></div>
                            <div className="absolute bottom-2 left-0 right-0 text-center z-20">
                                <span className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full shadow-sm">Ajout: Gâteau</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-slate-500 mt-4 italic">
                    L'IA redessine uniquement la zone sélectionnée (la table) pour y intégrer un nouvel objet, tout en conservant la lumière et la perspective.
                </p>
            </div>

            {/* Outpainting */}
            <div>
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Maximize size={18} className="text-purple-500"/> Outpainting
                    <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Agrandir le cadre</span>
                </h4>
                 <div className="flex flex-col items-center gap-4">
                    
                    <div className="relative w-full max-w-sm">
                         {/* The "Original" Image centered inside */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 z-10 shadow-2xl border-2 border-white">
                             <ImageWithLoader
                                src={`https://image.pollinations.ai/prompt/close%20up%20portrait%20face%20of%20a%20female%20astronaut%20helmet%20detailed?width=250&height=250&nologo=true&seed=55`}
                                alt="Zoom astronaute"
                            />
                            <div className="absolute top-1 left-1 bg-black/50 text-white text-[8px] px-1 rounded z-20">Original</div>
                         </div>

                         {/* The "Outpainted" Background */}
                         <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-purple-400 opacity-80 filter blur-[1px]">
                            <ImageWithLoader
                                src={`https://image.pollinations.ai/prompt/wide%20shot%20female%20astronaut%20standing%20on%20mars%20surface%20red%20planet%20landscape?${landscapeSize}&nologo=true&seed=55`}
                                alt="Wide astronaute"
                            />
                         </div>

                         {/* Connection Lines */}
                         <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-purple-300 rounded-lg pointer-events-none flex items-center justify-center z-20">
                            <div className="w-1/2 h-full border-x border-dashed border-purple-300/50"></div>
                         </div>
                    </div>

                 </div>
                  <p className="text-xs text-slate-500 mt-4 italic">
                    L'IA imagine ce qui existe au-delà des bords de l'image originale (le paysage martien autour du visage).
                </p>
            </div>

        </div>
      </section>

      {/* Section 3: Styles & Références */}
      <section>
         <div className="flex items-center gap-2 mb-6">
            <div className="bg-pink-100 p-2 rounded text-pink-600">
                <Palette size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">3. Styles Artistiques</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { name: "Photoréalisme", prompt: "professional portrait photography of a woman, studio lighting, 8k", color: "bg-blue-500" },
                { name: "Anime / Manga", prompt: "anime style illustration of a warrior woman, vibrant colors, studio ghibli style", color: "bg-pink-500" },
                { name: "Low Poly 3D", prompt: "low poly 3d render of a cute character, isometric view, blender", color: "bg-green-500" },
                { name: "Huile sur toile", prompt: "oil painting impressionist style landscape, van gogh style, thick brushstrokes", color: "bg-orange-500" }
            ].map((style, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl aspect-square shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <ImageWithLoader
                        src={`https://image.pollinations.ai/prompt/${encodeURIComponent(style.prompt)}?${baseSize}&nologo=true`}
                        alt={style.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 z-20">
                        <span className="text-white font-medium text-sm">{style.name}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">
            <Download size={16} /> Télécharger les exemples
        </button>
      </div>
    </div>
  );
};

export default ImageView;