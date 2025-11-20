import React from 'react';
import { Workflow, FileText, Code, ArrowRight, Braces, Network, FileCheck } from 'lucide-react';

const ProcessView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 space-y-12 pb-12">
      
      {/* Header */}
      <div>
         <h2 className="text-2xl font-bold text-slate-900 mb-2">Processus & Documentation</h2>
         <p className="text-slate-600">
           Comment l'IA facilite la création de diagrammes complexes et de documents structurés via le code.
         </p>
      </div>

      {/* Section Mermaid */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
          <div className="bg-purple-100 p-2 rounded text-purple-600">
            <Network size={20} />
          </div>
          <h3 className="font-bold text-slate-800">Génération de Diagrammes (Mermaid)</h3>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Le Problème / Solution */}
            <div className="space-y-6">
                <p className="text-slate-600">
                    Dessiner un diagramme à la souris (Visio, PowerPoint) est long et difficile à maintenir. 
                    L'approche moderne est le <strong>"Diagram as Code"</strong>.
                </p>
                <p className="text-slate-600">
                    L'IA excelle pour transformer une description textuelle en code <strong>Mermaid.js</strong>, qui génère instantanément le visuel.
                </p>

                <div className="bg-slate-800 rounded-lg p-4 relative group">
                     <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">Prompt</div>
                     <p className="text-slate-300 font-mono text-sm italic">
                        "Crée un diagramme de flux pour la validation d'un projet : 
                        Idée -{'>'} Validation Manager. Si OK -{'>'} Dev. Si Non -{'>'} Rejet. 
                        Après Dev -{'>'} Test. Si Test OK -{'>'} Prod."
                     </p>
                </div>

                <div className="flex justify-center text-slate-300">
                    <ArrowRight className="rotate-90 lg:rotate-0" />
                </div>

                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-blue-300 border border-slate-800 overflow-x-auto">
                    <div className="text-slate-500 mb-2 select-none flex items-center gap-2">
                        <Code size={12}/> Code Mermaid généré
                    </div>
                    <p>graph TD</p>
                    <p className="pl-4">A[Nouvelle Idée] --&gt; B{"{Manager OK?}"}</p>
                    <p className="pl-4">B -- Oui --&gt; C[Développement]</p>
                    <p className="pl-4">B -- Non --&gt; Z[Rejet]</p>
                    <p className="pl-4">C --&gt; D{"{Tests Passés?}"}</p>
                    <p className="pl-4">D -- Oui --&gt; E[Production]</p>
                    <p className="pl-4">D -- Non --&gt; C</p>
                    <p className="pl-4 text-green-400">style E fill:#bbf7d0,stroke:#22c55e</p>
                    <p className="pl-4 text-red-400">style Z fill:#fecaca,stroke:#ef4444</p>
                </div>
            </div>

            {/* Le Rendu Visuel Simulé */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 flex items-center justify-center">
                <div className="flex flex-col items-center gap-6 relative">
                    
                    {/* Node A */}
                    <div className="bg-white border-2 border-slate-300 px-4 py-2 rounded shadow-sm text-sm font-bold text-slate-800">Nouvelle Idée</div>
                    
                    {/* Arrow */}
                    <div className="h-6 w-0.5 bg-slate-300"></div>

                    {/* Node B (Diamond) */}
                    <div className="relative w-24 h-12">
                         <div className="absolute inset-0 bg-purple-50 border-2 border-purple-400 transform skew-x-[-20deg] rounded shadow-sm flex items-center justify-center">
                             <span className="transform skew-x-[20deg] text-xs font-bold text-purple-800">Manager OK?</span>
                         </div>
                    </div>

                    {/* Branching */}
                    <div className="flex justify-between w-48 relative h-8">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300"></div>
                        
                        {/* Left Branch (Non) */}
                        <div className="absolute left-0 top-8 flex flex-col items-center">
                             <div className="h-4 w-0.5 bg-slate-300 absolute -top-4 right-[-2px] rotate-45 origin-bottom"></div>
                             <span className="bg-white text-[10px] text-red-500 border border-red-200 px-1 rounded absolute -top-4 -left-4">Non</span>
                             <div className="bg-red-50 border-2 border-red-400 px-3 py-1 rounded text-red-800 text-xs font-bold mt-4">Rejet</div>
                        </div>

                         {/* Right Branch (Oui) */}
                        <div className="absolute right-0 top-8 flex flex-col items-center">
                             <div className="h-4 w-0.5 bg-slate-300 absolute -top-4 left-[-2px] -rotate-45 origin-bottom"></div>
                             <span className="bg-white text-[10px] text-green-500 border border-green-200 px-1 rounded absolute -top-4 -right-4">Oui</span>
                             
                             {/* Sub Process */}
                             <div className="bg-white border-2 border-slate-300 px-3 py-1 rounded text-xs font-bold mt-4 text-slate-800">Développement</div>
                             <div className="h-4 w-0.5 bg-slate-300 mx-auto my-1"></div>
                             <div className="bg-green-100 border-2 border-green-500 px-3 py-1 rounded text-green-800 text-xs font-bold">Production</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section Latex */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded text-blue-600">
            <Braces size={20} />
          </div>
          <h3 className="font-bold text-slate-800">Documents Scientifiques (LaTeX)</h3>
        </div>

        <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                     <p className="text-slate-600">
                        LaTeX est le standard pour les documents scientifiques, mais sa syntaxe est lourde. 
                        L'IA permet d'écrire la formule en langage naturel et d'obtenir le code parfait.
                    </p>
                    <div className="bg-slate-100 p-3 rounded border-l-4 border-blue-500 italic text-slate-600 text-sm">
                        "Écris-moi la formule de l'intégrale de Gauss en syntaxe LaTeX."
                    </div>
                    <div className="bg-slate-900 text-yellow-300 font-mono p-3 rounded text-sm overflow-x-auto">
                        {`\\int_{-\\infty}^{+\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}`}
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="bg-white p-8 rounded shadow-lg border border-slate-200 w-full max-w-md text-center">
                        <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest">Rendu Document</p>
                        <div className="text-3xl font-serif text-slate-800">
                            {/* Simulation visuelle de la formule */}
                            <span className="inline-block text-4xl mr-2">∫</span>
                            <span className="relative -top-3 text-xs mr-1">−∞</span>
                            <span className="relative top-4 text-xs -ml-4 mr-2">+∞</span>
                            <span className="italic mr-1">e</span>
                            <sup className="text-sm mr-2">−x²</sup>
                            <span className="italic mr-4">dx</span>
                            <span className="mr-4">=</span>
                            <span className="font-bold">√π</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

       {/* Résumé Avantages */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
             <Workflow className="text-indigo-500 mt-1" size={20}/>
             <div>
                 <h4 className="font-bold text-slate-800 text-sm">Standardisation</h4>
                 <p className="text-xs text-slate-500 mt-1">Génère des formats universels (Markdown, Mermaid, LaTeX) compatibles partout.</p>
             </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
             <FileCheck className="text-green-500 mt-1" size={20}/>
             <div>
                 <h4 className="font-bold text-slate-800 text-sm">Zéro Erreur de Syntaxe</h4>
                 <p className="text-xs text-slate-500 mt-1">Plus besoin de debugger une accolade manquante dans un tableau LaTeX.</p>
             </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
             <FileText className="text-blue-500 mt-1" size={20}/>
             <div>
                 <h4 className="font-bold text-slate-800 text-sm">Documentation Vivante</h4>
                 <p className="text-xs text-slate-500 mt-1">Mettre à jour un diagramme se fait en une phrase ("Ajoute une étape de validation").</p>
             </div>
          </div>
       </div>

    </div>
  );
};

export default ProcessView;