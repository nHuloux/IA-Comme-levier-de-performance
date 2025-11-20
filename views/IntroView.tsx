import React from 'react';
import { Brain, History, Scale, FileText, AlertTriangle, ShieldCheck, GitFork, Sparkles, Code, ArrowRight, Database, Network, Cpu, BarChart3 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const IntroView: React.FC = () => {
  
  const usageData = [
    { name: 'Non (Sans projet)', value: 25, color: '#94a3b8' },
    { name: 'Non (Projet en cours)', value: 33, color: '#60a5fa' },
    { name: 'Oui (Expérimental)', value: 17, color: '#3b82f6' },
    { name: 'Oui (Régulier)', value: 25, color: '#f59e0b' },
  ];

  const skillsData = [
    { name: 'Aucune compétence', value: 50, color: '#ef4444' }, // Red for alert
    { name: 'Prestataire externe', value: 25, color: '#cbd5e1' },
    { name: 'Compétences internes', value: 25, color: '#10b981' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">L'IA comme levier de performance</h2>
            <p className="text-slate-300 max-w-xl">
              Comprendre les fondamentaux, l'historique et les enjeux éthiques de l'Intelligence Artificielle en entreprise.
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
            <p className="text-sm font-semibold">Définition (Parlement Européen)</p>
            <p className="text-xs text-slate-300 mt-1 italic">
              "Tout outil utilisé par une machine capable de reproduire des comportements liés aux humains, tels que le raisonnement, la planification et la créativité."
            </p>
          </div>
        </div>
      </div>

      {/* Top Section Grid: History + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* History Timeline (Takes 3 cols) */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center gap-2 mb-6 text-blue-600">
            <History size={24} />
            <h3 className="text-lg font-bold">Dates Clés</h3>
          </div>
          <div className="flex-1 flex flex-col justify-center">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-4 left-4 right-4 h-0.5 bg-slate-100 z-0"></div>

                <div className="relative z-10 bg-white p-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm mb-2"></div>
                  <p className="font-bold text-slate-900 text-lg">1956</p>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Naissance du terme</span><br/>
                    "Artificial Intelligence" formalisé par McCarthy, Minsky, et Shannon.
                  </p>
                </div>
                <div className="relative z-10 bg-white p-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full border-4 border-white shadow-sm mb-2"></div>
                  <p className="font-bold text-slate-900 text-lg">2012</p>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Révolution Deep Learning</span><br/>
                    Publication d'AlexNet (Classification d'images par réseaux de neurones).
                  </p>
                </div>
                <div className="relative z-10 bg-white p-2">
                  <div className="w-4 h-4 bg-blue-200 rounded-full border-4 border-white shadow-sm mb-2"></div>
                  <p className="font-bold text-slate-900 text-lg">2022</p>
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Ère Générative</span><br/>
                    Essor public des LLM. ChatGPT atteint 100M d'utilisateurs en 2 mois.
                  </p>
                </div>
            </div>
          </div>
        </div>

        {/* Survey Stats (Takes 2 cols) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
          <div className="flex items-center gap-2 mb-4 text-orange-600">
             <BarChart3 size={24} />
             <h3 className="text-lg font-bold">Réalité Entreprise</h3>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Chart 1 */}
            <div className="flex flex-col items-center">
              <p className="text-xs font-semibold text-slate-700 mb-2 text-center">Utilisation actuelle</p>
              <div className="h-32 w-32 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={usageData}
                      innerRadius={35}
                      outerRadius={55}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {usageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{borderRadius: '8px', fontSize: '12px'}} />
                  </PieChart>
                </ResponsiveContainer>
                {/* Centered Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[10px] font-bold text-slate-400 leading-tight text-center">25%<br/>Régulier</span>
                </div>
              </div>
            </div>

            {/* Chart 2 */}
            <div className="flex flex-col items-center border-l border-slate-100 pl-6">
              <p className="text-xs font-semibold text-slate-700 mb-2 text-center">Compétences Interne</p>
              <div className="h-32 w-32 relative mb-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={skillsData}
                        innerRadius={35}
                        outerRadius={55}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {skillsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{borderRadius: '8px', fontSize: '12px'}} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-xl font-bold text-red-500">50%</span>
                  </div>
              </div>
               <div className="bg-red-50 text-red-700 text-[10px] px-2 py-1 rounded font-bold uppercase text-center w-full">
                  Besoin de formation
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Paradigm Shift Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-6">
        <div className="flex items-center gap-2 mb-2 text-slate-800">
          <GitFork size={24} className="text-indigo-600" />
          <h3 className="text-lg font-bold">Le changement de paradigme</h3>
        </div>
        <p className="text-slate-600 text-sm">
          Passage d'une logique de règles explicites ("Si... Alors...") à une logique d'apprentissage par l'exemple (Statistique).
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Classical */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col h-full">
             <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
               <Code size={18} /> Algorithme Classique
             </h4>
             <div className="flex flex-col items-center justify-center text-sm gap-2 text-slate-600 mb-6 flex-1">
                <div className="flex items-center gap-2 w-full justify-center">
                   <div className="bg-white px-3 py-2 rounded shadow-sm border w-24 text-center">Données</div>
                   <span className="font-bold text-slate-400">+</span>
                   <div className="bg-white px-3 py-2 rounded shadow-sm border border-blue-200 text-blue-700 w-24 text-center">Règles</div>
                </div>
                <ArrowRight size={20} className="rotate-90 my-1 text-slate-400" />
                <div className="bg-green-100 px-4 py-2 rounded shadow-sm border border-green-200 text-green-700 font-medium w-32 text-center">Réponse</div>
             </div>
             <p className="text-xs text-slate-500 italic text-center mt-auto pt-4 border-t border-slate-200">
               "L'humain code les règles explicitement. Incapacité d'interprétation hors des règles."
             </p>
          </div>

          {/* AI */}
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex flex-col h-full">
             <h4 className="font-semibold text-indigo-900 mb-4 flex items-center gap-2">
               <Sparkles size={18} /> Intelligence Artificielle
             </h4>
              <div className="flex flex-col items-center justify-center text-sm gap-2 text-slate-600 mb-6 flex-1">
                <div className="flex items-center gap-2 w-full justify-center">
                   <div className="bg-white px-3 py-2 rounded shadow-sm border w-24 text-center">Données</div>
                   <span className="font-bold text-indigo-400">+</span>
                   <div className="bg-white px-3 py-2 rounded shadow-sm border border-green-200 text-green-700 w-24 text-center">Réponses (Exemples)</div>
                </div>
                <ArrowRight size={20} className="rotate-90 my-1 text-indigo-400" />
                <div className="bg-indigo-100 px-4 py-2 rounded shadow-sm border border-indigo-200 text-indigo-700 font-medium w-32 text-center">Modèle (Règles)</div>
             </div>
             <p className="text-xs text-indigo-800 italic text-center mt-auto pt-4 border-t border-indigo-200">
               "La machine déduit ses propres règles (le Modèle) en s'entraînant sur des exemples."
             </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 w-1/4">Critère</th>
                <th className="px-4 py-3 w-1/3">Algorithme Classique</th>
                <th className="px-4 py-3 w-1/3 text-indigo-700">Intelligence Artificielle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
               <tr>
                 <td className="px-4 py-3 font-medium text-slate-900">Règles</td>
                 <td className="px-4 py-3 text-slate-500">Définies manuellement (Code)</td>
                 <td className="px-4 py-3 text-indigo-700 font-medium">Apprises à partir de données</td>
               </tr>
               <tr>
                 <td className="px-4 py-3 font-medium text-slate-900">Données nécessaires</td>
                 <td className="px-4 py-3 text-slate-500">Faible volume</td>
                 <td className="px-4 py-3 text-indigo-700 font-medium">Grand volume d'exemples</td>
               </tr>
               <tr>
                 <td className="px-4 py-3 font-medium text-slate-900">Adaptabilité</td>
                 <td className="px-4 py-3 text-slate-500">Faible (Rigide)</td>
                 <td className="px-4 py-3 text-indigo-700 font-medium">Forte (Probabiliste)</td>
               </tr>
               <tr>
                 <td className="px-4 py-3 font-medium text-slate-900">Interprétabilité</td>
                 <td className="px-4 py-3 text-slate-500">Totale</td>
                 <td className="px-4 py-3 text-indigo-700 font-medium">Souvent limitée (Boîte noire)</td>
               </tr>
               <tr>
                 <td className="px-4 py-3 font-medium text-slate-900">Exemples</td>
                 <td className="px-4 py-3 text-slate-500">Calculs fiscaux, tri alphabétique</td>
                 <td className="px-4 py-3 text-indigo-700 font-medium">Retranscription audio, Détection de tumeur cancéreuse</td>
               </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* NOUVELLE SECTION : Fonctionnement des LLM (Inspiré PDF Pages 17-19) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-8">
         <div className="flex items-center gap-2 text-slate-800">
            <Network size={24} className="text-teal-600" />
            <h3 className="text-lg font-bold">Fonctionnement : Les Large Language Models (LLM)</h3>
        </div>

        <div className="flex flex-col gap-12">
            
            {/* Phase 1 : Apprentissage */}
            <div className="space-y-4">
                <h4 className="font-semibold text-teal-800 flex items-center gap-2">
                    <Database size={18} /> Phase 1 : Apprentissage
                </h4>
                <p className="text-sm text-slate-600">
                    Le modèle ingère une quantité massive de données (le web, des livres, Wikipédia). Il apprend à générer du texte en devinant la suite d'une phrase.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col md:flex-row items-center justify-around gap-4 text-xs">
                    <div className="text-center">
                        <div className="bg-white text-black p-3 rounded border mb-2 shadow-md">Téraoctets de Texte</div>
                        <div className="text-slate-400">Données d'entrée</div>
                    </div>
                    <ArrowRight size={20} className="text-slate-400 rotate-90 md:rotate-0" />
                    <div className="text-center">
                        <div className="bg-slate-800 text-white p-3 rounded mb-2 shadow-md">Modèle</div>
                        <div className="text-slate-400">Entraînement</div>
                    </div>
                    <ArrowRight size={20} className="text-slate-400 rotate-90 md:rotate-0" />
                     <div className="text-center">
                        <div className="bg-teal-50 text-teal-700 border border-teal-200 p-3 rounded mb-2 shadow-md">Texte Cohérent</div>
                        <div className="text-slate-400">Sortie</div>
                    </div>
                </div>
            </div>

             {/* Phase 2 : Utilisation (Prédiction) */}
            <div className="space-y-4">
                <h4 className="font-semibold text-teal-800 flex items-center gap-2">
                    <Cpu size={18} /> Phase 2 : Utilisation (Prédiction)
                </h4>
                <p className="text-sm text-slate-600">
                    Le modèle ne "réfléchit" pas. Il calcule <strong>le mot suivant le plus probable</strong> statistiquement.
                </p>
                
                {/* Arbre de probabilité style Mermaid simulé - Version Large */}
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 overflow-x-auto flex justify-center">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Prompt Input - Texte Noir */}
                        <div className="bg-white border-2 border-slate-300 px-4 py-3 rounded text-sm font-mono shadow-sm min-w-[200px] text-slate-900">
                            <span className="text-slate-500 font-bold uppercase text-xs block mb-1">Prompt:</span>
                            "Le Mont-Saint-Michel est"
                        </div>

                        <ArrowRight size={24} className="text-slate-400 rotate-90 md:rotate-0" />

                        {/* Model Node */}
                        <div className="bg-teal-600 text-white px-4 py-3 rounded font-bold shadow-md whitespace-nowrap">
                            GPT / Gemini
                        </div>

                        <ArrowRight size={24} className="text-slate-400 rotate-90 md:rotate-0" />

                        {/* Branches */}
                        <div className="flex flex-col gap-3 text-sm">
                            {/* Branch 1 */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-0.5 bg-slate-300"></div>
                                <div className="bg-white border border-slate-200 px-3 py-1 rounded opacity-50 text-slate-500">
                                    "une" <span className="text-slate-400 text-xs">(20%)</span>
                                </div>
                            </div>
                            {/* Branch 2 (Selected) */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-0.5 bg-teal-500"></div>
                                <div className="bg-teal-50 border border-teal-300 px-3 py-1 rounded font-bold text-teal-800 shadow-sm ring-2 ring-teal-100">
                                    "situé" <span className="text-teal-600 text-xs">(65%)</span>
                                </div>
                                <ArrowRight size={16} className="text-teal-500" />
                                <span className="italic text-slate-500 text-xs">en Normandie...</span>
                            </div>
                            {/* Branch 3 */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-0.5 bg-slate-300"></div>
                                <div className="bg-white border border-slate-200 px-3 py-1 rounded opacity-50 text-slate-500">
                                    "merveille" <span className="text-slate-400 text-xs">(15%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-center text-slate-400 mt-1 italic">
                    Exemple: L'arbre de décision probabiliste pour le mot suivant.
                </p>
            </div>
        </div>
      </div>

      {/* LLM & RAG (Déplacé ici) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-6 text-purple-600">
            <Brain size={24} />
            <h3 className="text-lg font-bold">Architecture Avancée : RAG</h3>
          </div>
          <div className="space-y-4">
             <p className="text-sm text-slate-600 mb-4">
                 Comment rendre le modèle plus précis et expert sur <strong>vos</strong> données ?
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-semibold text-purple-900 mb-2">LLM Standard</h4>
                <p className="text-xs text-purple-800">
                    Connaissances figées à sa date d'entraînement. Risque d'hallucination si on lui demande des détails sur une procédure interne récente.
                </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-indigo-200 text-indigo-800 text-[10px] px-2 py-1 rounded-bl font-bold">Recommandé</div>
                <h4 className="font-semibold text-indigo-900 mb-2">RAG (Retrieval Augmented Generation)</h4>
                <p className="text-xs text-indigo-800">
                    Le modèle va d'abord chercher l'info dans <strong>votre base documentaire</strong> (PDF, Word) avant de répondre.
                </p>
                <ul className="mt-2 space-y-1 text-[10px] text-indigo-700 list-disc list-inside">
                    <li>Moins d'hallucinations</li>
                    <li>Source citée</li>
                    <li>Données à jour</li>
                </ul>
                </div>
            </div>
          </div>
        </div>

      {/* Ethics & RGPD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4 text-red-600">
            <Scale size={24} />
            <h3 className="text-lg font-bold">Éthique et Législation</h3>
          </div>
          <p className="text-slate-600 mb-4">
            L'IA n'est pas neutre. Elle automatise les biais si elle n'est pas contrôlée.
            <br/><span className="italic text-slate-500">"Les algorithmes n'éliminent pas les biais, ils les automatisent." - Cathy O'Neil</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-3">
              <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2">
                <ShieldCheck size={18} />
                IA Act (UE)
              </div>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                <li>Risque inacceptable (Scoring social) : Interdit</li>
                <li>Risque élevé (Santé, RH) : Conformité stricte</li>
                <li>Risque modéré (Chatbots) : Transparence</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-3">
               <div className="flex items-center gap-2 font-semibold text-slate-800 mb-2">
                <FileText size={18} />
                RGPD
              </div>
              <ul className="text-sm text-slate-600 list-disc list-inside">
                <li>Consentement éclairé</li>
                <li>Droit à l'explication</li>
                <li>Attention aux modèles pré-entraînés</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risques */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4 text-orange-600">
            <AlertTriangle size={24} />
            <h3 className="text-lg font-bold">Risques Principaux</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0"></span>
              Biais algorithmiques (recrutement, justice)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0"></span>
              Boîtes noires (manque de transparence)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0"></span>
              Hallucinations (surconfiance)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0"></span>
              Confidentialité des données
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroView;