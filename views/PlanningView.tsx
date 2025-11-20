import React from 'react';
import { Calendar, Cpu, GitMerge, CheckCircle2, XCircle, ArrowRight, Table as TableIcon } from 'lucide-react';

const PlanningView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 pb-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Génération de Planning</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* The Concept */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4 text-blue-600">
            <Calendar size={24} />
            <h3 className="text-lg font-bold">Le Défi</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Créer des plannings optimisés sous contraintes (congés, compétences, horaires légaux) est un problème mathématique complexe.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-2">
            <p className="font-semibold text-slate-800">Objectifs de l'atelier :</p>
            <ul className="list-disc list-inside text-slate-600">
              <li>Optimiser l'organisation des équipes.</li>
              <li>Respecter les contraintes (pauses, temps de travail).</li>
              <li>Comparer l'approche IA vs Algorithme classique.</li>
            </ul>
          </div>
        </div>

        {/* The Tools */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
           <div className="flex items-center gap-2 mb-4 text-purple-600">
            <Cpu size={24} />
            <h3 className="text-lg font-bold">Les Outils Testés</h3>
          </div>
          <div className="space-y-4">
             <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-2 rounded text-green-600">
                    <GitMerge size={18} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800">OR-Tools (Google)</h4>
                    <p className="text-sm text-slate-600">
                        Bibliothèque open-source pour l'optimisation combinatoire. 
                        <span className="block mt-1 text-green-700 font-medium flex items-center gap-1">
                            <CheckCircle2 size={14}/> Résultats précis et mathématiquement optimaux.
                        </span>
                    </p>
                </div>
             </div>

             <div className="border-t border-slate-100 pt-4 flex items-start gap-3">
                <div className="mt-1 bg-orange-100 p-2 rounded text-orange-600">
                    <Cpu size={18} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800">LLM Direct (Prompting)</h4>
                    <p className="text-sm text-slate-600">
                        Tentative de générer un planning juste en décrivant les contraintes à ChatGPT/Gemini.
                        <span className="block mt-1 text-red-600 font-medium flex items-center gap-1">
                            <XCircle size={14}/> Souvent non fonctionnel pour des calculs stricts (hallucinations).
                        </span>
                    </p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Visualization of the Process */}
      <div className="bg-slate-900 text-white rounded-xl p-8 overflow-hidden relative mb-8">
        <h3 className="text-xl font-bold mb-6 z-10 relative">Workflow Hybride Recommandé</h3>
        
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 relative z-10">
            
            {/* Step 1 */}
            <div className="bg-slate-800 p-4 rounded-lg flex-1 border border-slate-700 flex flex-col">
                <span className="text-blue-400 font-bold block mb-3 text-sm uppercase tracking-wider">1. Langage Naturel</span>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                    "J'ai besoin d'un planning pour 5 infirmières, tu vas m'aider à réaliser l'optimisation à travers l'outil OR-Tools, pose moi toutes les questions qui te seront nécessaire pour déterminer l'environnement, les tâches et les collaborateurs disponibles."
                </p>
            </div>

            <div className="hidden md:flex flex-col justify-center text-slate-600">
                <ArrowRight size={20} />
            </div>
            <div className="md:hidden h-6 w-0.5 bg-slate-700 mx-auto"></div>

            {/* Step 2 */}
            <div className="bg-slate-800 p-4 rounded-lg flex-1 border border-slate-700 flex flex-col">
                 <span className="text-purple-400 font-bold block mb-3 text-sm uppercase tracking-wider">2. LLM (Code Gen)</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                    L'IA génère le code Python utilisant OR-Tools, elle ne peut pas l'exécuter dans son environnement directement.
                </p>
            </div>

            <div className="hidden md:flex flex-col justify-center text-slate-600">
                <ArrowRight size={20} />
            </div>
            <div className="md:hidden h-6 w-0.5 bg-slate-700 mx-auto"></div>

            {/* Step 3 */}
            <div className="bg-slate-800 p-4 rounded-lg flex-1 border border-slate-700 flex flex-col">
                 <span className="text-orange-400 font-bold block mb-3 text-sm uppercase tracking-wider">3. Env. Python</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                    Dans un environnement Python comme Google Colab, on transfère le code Python généré par l'IA.
                </p>
            </div>

            <div className="hidden md:flex flex-col justify-center text-slate-600">
                <ArrowRight size={20} />
            </div>
            <div className="md:hidden h-6 w-0.5 bg-slate-700 mx-auto"></div>

            {/* Step 4 */}
            <div className="bg-slate-800 p-4 rounded-lg flex-1 border border-slate-700 border-b-4 border-b-green-500 flex flex-col">
                 <span className="text-green-400 font-bold block mb-3 text-sm uppercase tracking-wider">4. Exécution</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                    Le script est exécuté dans l'environnement Python et donne le planning optimal au regard des contraintes renseignées.
                </p>
            </div>
        </div>
      </div>

      {/* Example Result Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 mb-6 text-slate-800">
            <TableIcon size={24} className="text-green-600" />
            <h3 className="text-lg font-bold">Exemple de Résultat (OR-Tools)</h3>
        </div>
        
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                        <th className="p-3 whitespace-nowrap">Collaborateur</th>
                        <th className="p-3 text-center">Lundi</th>
                        <th className="p-3 text-center">Mardi</th>
                        <th className="p-3 text-center">Mercredi</th>
                        <th className="p-3 text-center">Jeudi</th>
                        <th className="p-3 text-center">Vendredi</th>
                        <th className="p-3 text-right">Total</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-medium text-slate-900 whitespace-nowrap">Infirmière A</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold block">Matin (7-15)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold block">Matin (7-15)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-slate-100 text-slate-400 text-xs font-bold block">Repos</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-bold block">Nuit (21-7)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-slate-100 text-slate-400 text-xs font-bold block">Repos</span></td>
                        <td className="p-3 text-right text-slate-600 font-mono">26h</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-medium text-slate-900 whitespace-nowrap">Infirmière B</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-bold block">Soir (15-23)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-bold block">Soir (15-23)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold block">Matin (7-15)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-slate-100 text-slate-400 text-xs font-bold block">Repos</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-bold block">Nuit (21-7)</span></td>
                         <td className="p-3 text-right text-slate-600 font-mono">34h</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-medium text-slate-900 whitespace-nowrap">Infirmière C</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-slate-100 text-slate-400 text-xs font-bold block">Repos</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-bold block">Nuit (21-7)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-slate-100 text-slate-400 text-xs font-bold block">Repos</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold block">Matin (7-15)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold block">Matin (7-15)</span></td>
                         <td className="p-3 text-right text-slate-600 font-mono">26h</td>
                    </tr>
                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-medium text-slate-900 whitespace-nowrap">Infirmière D</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold block">Matin (7-15)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-slate-100 text-slate-400 text-xs font-bold block">Repos</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-bold block">Soir (15-23)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-purple-100 text-purple-700 text-xs font-bold block">Soir (15-23)</span></td>
                        <td className="p-3 text-center"><span className="px-2 py-1 rounded bg-slate-100 text-slate-400 text-xs font-bold block">Repos</span></td>
                         <td className="p-3 text-right text-slate-600 font-mono">24h</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mt-4 flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded border border-slate-100">
            <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
            <p>
                Ce planning est mathématiquement optimisé pour respecter les contraintes strictes : 
                <strong> 11h de repos minimum</strong> entre deux quarts, interdiction d'enchaîner Nuit et Matin, 
                et équilibrage équitable des heures travaillées sur la semaine.
            </p>
        </div>
      </div>
    </div>
  );
};

export default PlanningView;