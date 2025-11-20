import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { 
  FileSpreadsheet, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  TrendingUp, 
  DollarSign,
  Target,
  Activity
} from 'lucide-react';

// Données "propres" pour les graphiques
const cleanData = [
  { month: 'Jan', sales: 4000, region: 'Nord', growth: 12 },
  { month: 'Fév', sales: 3000, region: 'Nord', growth: -5 },
  { month: 'Mar', sales: 2000, region: 'Sud', growth: -10 },
  { month: 'Avr', sales: 2780, region: 'Sud', growth: 15 },
  { month: 'Mai', sales: 1890, region: 'Est', growth: 8 },
  { month: 'Juin', sales: 2390, region: 'Est', growth: 20 },
];

const regionData = [
  { name: 'Nord', value: 7000 },
  { name: 'Sud', value: 4780 },
  { name: 'Est', value: 4280 },
];

const DataView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 space-y-12 pb-12">
      
      {/* Header */}
      <div>
         <h2 className="text-2xl font-bold text-slate-900 mb-2">Data & Dashboard</h2>
         <p className="text-slate-600">
           De la donnée brute au tableau de bord décisionnel : le workflow augmenté par l'IA.
         </p>
      </div>

      {/* Etape 1 : Nettoyage de Données */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
          <div className="bg-red-100 p-2 rounded text-red-600">
            <FileSpreadsheet size={20} />
          </div>
          <h3 className="font-bold text-slate-800">Étape 1 : Nettoyage de données brutes</h3>
        </div>
        
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tableau Sale */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Fichier Source (CSV)</h4>
            <div className="overflow-hidden rounded-lg border border-red-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-red-50 text-red-900">
                  <tr>
                    <th className="px-3 py-2">Date</th>
                    <th className="px-3 py-2">Produit</th>
                    <th className="px-3 py-2">Ventes</th>
                    <th className="px-3 py-2">Région</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-100 bg-white">
                  <tr>
                    <td className="px-3 py-2 font-mono text-slate-600">01/01/2023</td>
                    <td className="px-3 py-2">Widget A</td>
                    <td className="px-3 py-2">4000€</td>
                    <td className="px-3 py-2">Nord</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="px-3 py-2 font-mono text-red-600 font-bold">Jan-02-23</td>
                    <td className="px-3 py-2">widget A</td>
                    <td className="px-3 py-2 text-red-600 font-bold">NULL</td>
                    <td className="px-3 py-2 text-red-600 font-bold">nord</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-slate-600">2023-03-01</td>
                    <td className="px-3 py-2">Widget B</td>
                    <td className="px-3 py-2">2000</td>
                    <td className="px-3 py-2">Sud</td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="px-3 py-2 font-mono text-slate-600">04/01/2023</td>
                    <td className="px-3 py-2 text-red-600 font-bold">unknown</td>
                    <td className="px-3 py-2">2780</td>
                    <td className="px-3 py-2">Sud</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-red-500 italic flex items-center gap-1">
              *Formats de dates hétérogènes, casses incohérentes, valeurs manquantes.
            </p>
          </div>

          {/* Prompt de nettoyage */}
          <div className="flex flex-col h-full justify-center space-y-3">
            <div className="bg-slate-800 text-slate-200 p-4 rounded-lg rounded-tl-none relative text-sm font-mono shadow-lg">
              <div className="absolute -top-3 left-0 bg-slate-800 text-blue-400 text-xs px-2 py-1 rounded-t">
                Prompt Utilisateur
              </div>
              <p>
                "Agis comme un Data Analyst Senior. Voici un extrait de fichier CSV brut. <br/>
                1. Uniformise les dates au format ISO (YYYY-MM-DD).<br/>
                2. Corrige la casse des régions (ex: 'nord' -{'>'} 'Nord').<br/>
                3. Remplace les valeurs 'NULL' par la moyenne de la colonne.<br/>
                Renvoie uniquement le tableau propre."
              </p>
            </div>
            <div className="flex justify-center">
              <ArrowRight className="text-slate-300 rotate-90 lg:rotate-0" size={24} />
            </div>
            <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg text-sm flex items-center gap-2">
              <Sparkles size={16} className="shrink-0" />
              <span>Résultat : Un dataset structuré prêt pour l'analyse.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Etape 2 : Visualisation / Dashboard */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="bg-blue-100 p-2 rounded text-blue-600">
                <TrendingUp size={20} />
             </div>
             <h3 className="font-bold text-slate-800">Étape 2 : Tableau de Bord Final</h3>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200">
             <MessageSquare size={12} />
             Généré via code Python/JS par l'IA
          </div>
        </div>

        <div className="p-6 bg-slate-50/50">
           
           {/* Prompt Section */}
           <div className="mb-8 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3">
                    <div className="mt-1 bg-indigo-100 p-2 rounded text-indigo-600 shrink-0">
                        <MessageSquare size={18} />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-700 mb-2">Exemple de Prompt pour générer ce dashboard :</h4>
                        <div className="bg-slate-800 text-slate-300 p-3 rounded text-xs font-mono leading-relaxed">
                            "Agis en tant qu'expert Data Visualization. À partir du fichier CSV nettoyé, génère le code React/Recharts pour un tableau de bord commercial.<br/><br/>
                            1. Calcule et affiche 3 KPIs clés (CA Total, % Objectif, Meilleure Région).<br/>
                            2. Crée un graphique linéaire montrant l'évolution mensuelle des ventes.<br/>
                            3. Crée un graphique en barres comparant la performance des régions (Nord, Sud, Est).<br/>
                            4. Utilise une palette de couleurs professionnelle (Indigo/Blue) et Tailwind CSS pour le style."
                        </div>
                    </div>
                </div>
           </div>

           {/* KPI Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                  <div>
                      <p className="text-xs font-medium text-slate-500 uppercase">Chiffre d'Affaires</p>
                      <p className="text-2xl font-bold text-slate-900">16,060 €</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                      <DollarSign size={20} />
                  </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                  <div>
                      <p className="text-xs font-medium text-slate-500 uppercase">Objectif Trimestre</p>
                      <p className="text-2xl font-bold text-slate-900">85%</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-full text-green-600">
                      <Target size={20} />
                  </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                  <div>
                      <p className="text-xs font-medium text-slate-500 uppercase">Région Top Perf.</p>
                      <p className="text-2xl font-bold text-slate-900">Nord</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-full text-purple-600">
                      <Activity size={20} />
                  </div>
              </div>
           </div>

           {/* Charts Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart 1: Evolution */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-700 mb-4">Évolution des Ventes (S1)</h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cleanData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                        <YAxis stroke="#94a3b8" fontSize={12} />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line type="monotone" dataKey="sales" name="CA (€)" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff'}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
              </div>

              {/* Chart 2: Repartition */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-700 mb-4">Performance par Région</h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={regionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Bar dataKey="value" name="Total Ventes" fill="#8b5cf6" radius={[6, 6, 6, 6]} barSize={40} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default DataView;