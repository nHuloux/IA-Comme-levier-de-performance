import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw, Check, Eraser, Play, Loader2 } from 'lucide-react';
import { PromptExercise } from '../types';
import { GoogleGenAI, Type } from "@google/genai";

// Data from the provided JS code as fallback
const staticPrompts: PromptExercise[] = [ // J'inclus ici une sélection de prompts pour que le code soit fonctionnel

    // --- GROUPE 2 : PROMPTS DE QUALITÉ MOYENNE ---
    // Ces prompts sont fonctionnels mais manquent d'éléments clés (Rôle, Ton, Format précis) pour un résultat optimal.
    {
        text: "Donne-moi une recette de crêpes.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Donne-moi"], "highlight-4": ["une recette"], "highlight-1": ["de crêpes."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Rédige une histoire sur un dragon et une princesse.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Rédige"], "highlight-4": ["une histoire"], "highlight-1": ["sur un dragon et une princesse."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Explique la photosynthèse.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Explique"], "highlight-1": ["la photosynthèse."], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Quels sont les avantages du sport ?",
        quality: "Moyenne",
        solution: { "highlight-3": ["Quels sont"], "highlight-1": ["les avantages du sport ?"], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Écris un e-mail pour annuler un rendez-vous.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Écris"], "highlight-4": ["un e-mail"], "highlight-1": ["pour annuler un rendez-vous."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Compare le télétravail et le travail au bureau.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Compare"], "highlight-1": ["le télétravail et le travail au bureau."], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Crée une liste de 5 films de science-fiction à voir.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Crée"], "highlight-4": ["une liste de 5 films"], "highlight-1": ["de science-fiction à voir."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Traduis 'La confiance n'exclut pas le contrôle' en anglais.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Traduis"], "highlight-1": ["'La confiance n'exclut pas le contrôle'"], "highlight-4": ["en anglais."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Résume l'intrigue du film 'Inception'.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Résume"], "highlight-1": ["l'intrigue du film 'Inception'."], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },

    {
        text: "Donne-moi 3 idées de cadeaux pour un passionné de jardinage.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Donne-moi"], "highlight-4": ["3 idées de cadeaux"], "highlight-1": ["pour un passionné de jardinage."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Comment fonctionne un moteur électrique ?",
        quality: "Moyenne",
        solution: { "highlight-3": ["Comment fonctionne"], "highlight-1": ["un moteur électrique ?"], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Écris une courte biographie de Marie Curie.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Écris"], "highlight-4": ["une courte biographie"], "highlight-1": ["de Marie Curie."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Liste les principaux fleuves d'Europe.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Liste"], "highlight-1": ["les principaux fleuves d'Europe."], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Crée une description pour une vidéo YouTube sur un voyage en Italie.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Crée"], "highlight-4": ["une description"], "highlight-1": ["pour une vidéo YouTube sur un voyage en Italie."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Rédige une conclusion pour un essai sur le changement climatique.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Rédige"], "highlight-4": ["une conclusion"], "highlight-1": ["pour un essai sur le changement climatique."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Quelles sont les différences entre un roman et une nouvelle ?",
        quality: "Moyenne",
        solution: { "highlight-3": ["Quelles sont"], "highlight-1": ["les différences entre un roman et une nouvelle ?"], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Propose un titre pour un article de blog sur la productivité.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Propose"], "highlight-4": ["un titre"], "highlight-1": ["pour un article de blog sur la productivité."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Fais une liste de courses pour faire des lasagnes.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Fais"], "highlight-4": ["une liste de courses"], "highlight-1": ["pour faire des lasagnes."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Explique ce qu'est la blockchain.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Explique"], "highlight-1": ["ce qu'est la blockchain."], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Donne-moi un plan pour une présentation sur l'histoire d'Internet.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Donne-moi"], "highlight-4": ["un plan"], "highlight-1": ["pour une présentation sur l'histoire d'Internet."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Écris un paragraphe sur l'importance de l'éducation.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Écris"], "highlight-4": ["un paragraphe"], "highlight-1": ["sur l'importance de l'éducation."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Invente un nom pour une nouvelle marque de café.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Invente"], "highlight-4": ["un nom"], "highlight-1": ["pour une nouvelle marque de café."], "highlight-2": [], "highlight-5": [] }
    },
    {
        text: "Comment puis-je améliorer mon sommeil ?",
        quality: "Moyenne",
        solution: { "highlight-3": ["Comment puis-je améliorer"], "highlight-1": ["mon sommeil ?"], "highlight-2": [], "highlight-4": [], "highlight-5": [] }
    },
    {
        text: "Génère 5 hashtags pour une photo de paysage sur Instagram.",
        quality: "Moyenne",
        solution: { "highlight-3": ["Génère"], "highlight-4": ["5 hashtags"], "highlight-1": ["pour une photo de paysage sur Instagram."], "highlight-2": [], "highlight-5": [] }
    },


    // --- GROUPE 3 : BONS PROMPTS ---
    // Ces prompts sont clairs, spécifiques et contiennent la plupart des éléments du CRAFT.
    {
        text: "Tu es un professeur d'histoire jovial. Résume les causes de la Révolution française en une liste de 4 points.",
        quality: "Bonne",
        solution: {
            "highlight-1": ["les causes de la Révolution française"],
            "highlight-2": ["Tu es un professeur d'histoire"],
            "highlight-3": ["Résume"],
            "highlight-4": ["en une liste de 4 points."],
            "highlight-5": ["jovial."]
        }
    },
    {
        text: "Agis en tant que coach sportif motivant. Propose un programme d'entraînement de 3 jours pour un débutant souhaitant se remettre en forme.",
        quality: "Bonne",
        solution: {
            "highlight-1": ["pour un débutant souhaitant se remettre en forme."],
            "highlight-2": ["Agis en tant que coach sportif"],
            "highlight-3": ["Propose"],
            "highlight-4": ["un programme d'entraînement de 3 jours"],
            "highlight-5": ["motivant."]
        }
    },
    {
        text: "En tant que critique culinaire enthousiaste, écris une courte critique (environ 150 mots) du dernier restaurant que tu as visité.",
        quality: "Bonne",
        solution: {
            "highlight-1": ["du dernier restaurant que tu as visité."],
            "highlight-2": ["En tant que critique culinaire"],
            "highlight-3": ["écris"],
            "highlight-4": ["une courte critique (environ 150 mots)"],
            "highlight-5": ["enthousiaste,"]
        }
    },
    {
        text: "Tu es un expert en cybersécurité. Explique en termes simples ce qu'est le 'phishing' à un public non technique. Le format doit être une liste à puces de 3 conseils pour l'éviter.",
        quality: "Bonne",
        solution: {
            "highlight-1": ["ce qu'est le 'phishing'", "à un public non technique."],
            "highlight-2": ["Tu es un expert en cybersécurité."],
            "highlight-3": ["Explique"],
            "highlight-4": ["une liste à puces de 3 conseils pour l'éviter."],
            "highlight-5": ["en termes simples"]
        }
    },
    {
        text: "Adopte la persona d'un guide de voyage passionné. Décris une journée parfaite à Ajaccio pour des touristes aimant la nature et l'histoire. Ton texte doit être présenté sous forme de trois paragraphes (matin, après-midi, soir).",
        quality: "Bonne",
        solution: {
            "highlight-1": ["une journée parfaite à Ajaccio", "pour des touristes aimant la nature et l'histoire."],
            "highlight-2": ["Adopte la persona d'un guide de voyage"],
            "highlight-3": ["Décris"],
            "highlight-4": ["sous forme de trois paragraphes (matin, après-midi, soir)."],
            "highlight-5": ["passionné."]
        }
    },
    {
        text: "Rédige une offre d'emploi pour un 'Community Manager'. Le ton doit être professionnel mais accueillant. Liste 5 missions clés et 3 compétences requises.",
        quality: "Bonne",
        solution: {
            "highlight-1": ["pour un 'Community Manager'."],
            "highlight-2": [],
            "highlight-3": ["Rédige", "Liste"],
            "highlight-4": ["une offre d'emploi", "5 missions clés", "3 compétences requises."],
            "highlight-5": ["professionnel mais accueillant."]
        }
    },
    {
        text: "Tu es un scénariste. Crée une scène de dialogue de 200 mots entre un détective fatigué et un témoin mystérieux. Le ton doit être plein de suspense.",
        quality: "Bonne",
        solution: {
            "highlight-1": ["entre un détective et un témoin"],
            "highlight-2": ["Tu es un scénariste."],
            "highlight-3": ["Crée"],
            "highlight-4": ["une scène de dialogue de 200 mots"],
            "highlight-5": ["fatigué", "mystérieux.", "plein de suspense."]
        }
    },


    // --- GROUPE 4 : PROMPTS COMPLEXES ---
    // Ces prompts exigent plusieurs étapes, une analyse approfondie ou la gestion de contraintes multiples.
    {
        text: "Agis en tant qu'analyste stratégique. D'abord, résume les forces et faiblesses de l'entreprise Tesla. Ensuite, propose trois axes de diversification futurs, en justifiant chaque proposition. Le tout doit tenir dans une note de synthèse de 400 mots au ton formel.",
        quality: "Complexe",
        solution: {
            "highlight-1": ["de l'entreprise Tesla"],
            "highlight-2": ["Agis en tant qu'analyste stratégique."],
            "highlight-3": ["résume", "propose", "justifiant"],
            "highlight-4": ["les forces et faiblesses", "trois axes de diversification futurs", "une note de synthèse de 400 mots"],
            "highlight-5": ["formel."]
        }
    },
    {
        text: "Tu es un urbaniste visionnaire. Imagine la ville de Paris en 2077, en te concentrant sur les transports, l'écologie et l'habitat. Rédige un article de blog prospectif de 500 mots, avec un ton optimiste mais réaliste. Termine par une liste à puces de 3 défis majeurs à surmonter.",
        quality: "Complexe",
        solution: {
            "highlight-1": ["la ville de Paris en 2077", "en te concentrant sur les transports, l'écologie et l'habitat."],
            "highlight-2": ["Tu es un urbaniste visionnaire."],
            "highlight-3": ["Imagine", "Rédige", "Termine"],
            "highlight-4": ["un article de blog prospectif de 500 mots", "une liste à puces de 3 défis majeurs à surmonter."],
            "highlight-5": ["optimiste mais réaliste."]
        }
    },
    {
        text: "En tant que médiateur de conflit, rédige un dialogue entre deux collègues en désaccord sur un projet. Le premier, 'Alex', est axé sur la créativité et les idées nouvelles, tandis que le second, 'Sam', est pragmatique et soucieux du budget. Ton objectif est de les amener à un compromis. Le dialogue doit se conclure sur une solution mutuellement acceptable.",
        quality: "Complexe",
        solution: {
            "highlight-1": ["entre deux collègues en désaccord sur un projet.", "Le premier, 'Alex', est axé sur la créativité...", "le second, 'Sam', est pragmatique..."],
            "highlight-2": ["En tant que médiateur de conflit,"],
            "highlight-3": ["rédige", "amener"],
            "highlight-4": ["un dialogue", "une solution mutuellement acceptable."],
            "highlight-5": []
        }
    },
    {
        text: "Analyse ce poème de Baudelaire ('L'Albatros'). Identifie d'abord le champ lexical principal dans chaque strophe. Ensuite, explique la figure de l'albatros en 200 mots. Finalement, propose un autre titre pour le poème. Le ton doit être académique.",
        quality: "Complexe",
        solution: {
            "highlight-1": ["ce poème de Baudelaire ('L'Albatros').", "la figure de l'albatros"],
            "highlight-2": [],
            "highlight-3": ["Analyse", "Identifie", "explique", "propose"],
            "highlight-4": ["le champ lexical principal dans chaque strophe.", "en 200 mots.", "un autre titre pour le poème."],
            "highlight-5": ["académique."]
        }
    }
];

const CRAFT_COLORS = [
  { id: 'highlight-context', label: 'Contexte (C)', color: 'bg-yellow-200 border-yellow-500', letter: 'C' },
  { id: 'highlight-role', label: 'Rôle (R)', color: 'bg-green-200 border-green-500', letter: 'R' },
  { id: 'highlight-action', label: 'Action (A)', color: 'bg-blue-200 border-blue-500', letter: 'A' },
  { id: 'highlight-format', label: 'Format (F)', color: 'bg-red-200 border-red-500', letter: 'F' },
  { id: 'highlight-tone', label: 'Ton (T)', color: 'bg-purple-200 border-purple-500', letter: 'T' },
];

const PromptView: React.FC = () => {
  const [currentPrompt, setCurrentPrompt] = useState<PromptExercise | null>(staticPrompts[2]);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    if (currentPrompt) {
      setHtmlContent(currentPrompt.text);
      setShowSolution(false);
    }
  }, [currentPrompt]);

  const generateNewPrompt = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const qualities = ["Médiocre", "Moyenne", "Bonne", "Complexe"];
      const randomQuality = qualities[Math.floor(Math.random() * qualities.length)];

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Génère un exercice de prompt engineering.
        Le but est de créer un prompt (texte court ou long selon la qualité) de qualité "${randomQuality}".
        Ensuite, analyse-le selon la méthode CRAFT (Contexte, Rôle, Action, Format, Ton).
        Si la qualité est Médiocre, le prompt doit être vague et manquer d'éléments.
        Si la qualité est Bonne ou Complexe, le prompt doit être détaillé.
        Pour la solution, extrais EXACTEMENT les morceaux de texte du prompt qui correspondent à chaque catégorie.
        Si une catégorie n'est pas présente dans le texte, renvoie une liste vide pour cette catégorie.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING, description: "Le texte du prompt généré" },
              quality: { type: Type.STRING, enum: ["Médiocre", "Moyenne", "Bonne", "Complexe"] },
              analysis: {
                type: Type.OBJECT,
                properties: {
                  context: { type: Type.ARRAY, items: { type: Type.STRING } },
                  role: { type: Type.ARRAY, items: { type: Type.STRING } },
                  action: { type: Type.ARRAY, items: { type: Type.STRING } },
                  format: { type: Type.ARRAY, items: { type: Type.STRING } },
                  tone: { type: Type.ARRAY, items: { type: Type.STRING } }
                },
                required: ["context", "role", "action", "format", "tone"]
              }
            },
            required: ["text", "quality", "analysis"]
          }
        }
      });

      const data = JSON.parse(response.text!);
      
      const newExercise: PromptExercise = {
        text: data.text,
        quality: data.quality,
        solution: {
          "highlight-context": data.analysis.context,
          "highlight-role": data.analysis.role,
          "highlight-action": data.analysis.action,
          "highlight-format": data.analysis.format,
          "highlight-tone": data.analysis.tone,
        }
      };

      setCurrentPrompt(newExercise);

    } catch (error) {
      console.error("Error generating prompt:", error);
      // Fallback to static prompts
      const randomIndex = Math.floor(Math.random() * staticPrompts.length);
      setCurrentPrompt(staticPrompts[randomIndex]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetHighlight = () => {
    if (currentPrompt) setHtmlContent(currentPrompt.text);
    setShowSolution(false);
  };

  const applyHighlight = (className: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = className;
    
    try {
      span.appendChild(range.extractContents());
      range.insertNode(span);
      
      if (contentRef.current) {
        setHtmlContent(contentRef.current.innerHTML);
      }
      selection.removeAllRanges();
    } catch (e) {
      console.error("Selection cross-boundary issue", e);
    }
  };

  const checkSolution = () => {
    if (!currentPrompt || !currentPrompt.solution) return;
    
    let solvedHtml = currentPrompt.text;
    const solution = currentPrompt.solution;

    // Support both new keys (highlight-context/role/...) and legacy numeric keys (highlight-1..highlight-5)
    const keyMapping: Record<string, string> = {
      'highlight-1': 'highlight-context',
      'highlight-2': 'highlight-role',
      'highlight-3': 'highlight-action',
      'highlight-4': 'highlight-format',
      'highlight-5': 'highlight-tone',
      'highlight-context': 'highlight-context',
      'highlight-role': 'highlight-role',
      'highlight-action': 'highlight-action',
      'highlight-format': 'highlight-format',
      'highlight-tone': 'highlight-tone'
    };

    // Tailwind classes to make highlights visible when inserted as spans
    const highlightClasses: Record<string, string> = {
      'highlight-context': 'bg-yellow-100 ring-1 ring-yellow-300 px-1 rounded',
      'highlight-role': 'bg-green-100 ring-1 ring-green-300 px-1 rounded',
      'highlight-action': 'bg-blue-100 ring-1 ring-blue-300 px-1 rounded',
      'highlight-format': 'bg-red-100 ring-1 ring-red-300 px-1 rounded',
      'highlight-tone': 'bg-purple-100 ring-1 ring-purple-300 px-1 rounded'
    };

    // Sort keys to handle potential overlaps nicely (longer phrases first)
    const entries: Array<[string, string[]]> = Object.entries(solution).map(([k, v]) => [keyMapping[k] || k, v as string[]]);
    // Flatten phrases with their mapped class
    const flat: Array<{ cls: string; phrase: string }> = [];
    entries.forEach(([cls, phrases]) => {
      if (!phrases) return;
      (phrases as string[]).forEach(p => { if (p) flat.push({ cls, phrase: p }); });
    });
    // Sort by phrase length desc to avoid partial overlaps
    flat.sort((a, b) => b.phrase.length - a.phrase.length);

    flat.forEach(({ cls, phrase }) => {
      if (!phrase) return;
      const mapped = keyMapping[cls] || cls;
      const css = highlightClasses[mapped] || '';
      // Escape regex special chars
      const escapedPhrase = phrase.replace(/[.*+?^${}()|[\\]\\]/g, '\\\\$&');
      const regex = new RegExp(escapedPhrase, 'g');
      solvedHtml = solvedHtml.replace(regex, `<span class="${mapped} ${css}">${phrase}</span>`);
    });
    setHtmlContent(solvedHtml);
    setShowSolution(true);
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Atelier Prompt Engineering</h2>
        <p className="text-slate-600">
          Méthode <strong>CRAFT</strong> : Identifiez le <span className="text-yellow-600 font-bold">C</span>ontexte, 
          le <span className="text-green-600 font-bold">R</span>ôle, l'<span className="text-blue-600 font-bold">A</span>ction, 
          le <span className="text-red-600 font-bold">F</span>ormat et le <span className="text-purple-600 font-bold">T</span>on.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${currentPrompt?.quality === 'Bonne' ? 'bg-green-100 text-green-800' : 
              currentPrompt?.quality === 'Complexe' ? 'bg-purple-100 text-purple-800' : 
              currentPrompt?.quality === 'Moyenne' ? 'bg-blue-100 text-blue-800' :
              'bg-orange-100 text-orange-800'}`}>
            Qualité: {currentPrompt?.quality}
          </span>
          <div className="space-x-2">
             <button 
                onClick={generateNewPrompt} 
                disabled={isLoading}
                className="text-sm text-blue-600 hover:underline flex items-center gap-1 inline-flex disabled:opacity-50 disabled:cursor-not-allowed"
             >
                {isLoading ? <Loader2 size={14} className="animate-spin"/> : <RefreshCw size={14} />} 
                {isLoading ? 'Génération IA...' : 'Nouveau Prompt (IA)'}
             </button>
          </div>
        </div>

        {/* Interaction Area */}
        <div 
            ref={contentRef}
            className="min-h-[150px] p-6 text-lg leading-relaxed border rounded-lg bg-slate-50 text-slate-900 select-text cursor-text mb-6"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Controls */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {CRAFT_COLORS.map((btn) => (
             <button
               key={btn.id}
               onMouseDown={(e) => { e.preventDefault(); applyHighlight(btn.id); }}
               className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-slate-700 border-b-4 active:border-b-0 active:translate-y-1 transition-all hover:scale-110 ${btn.color}`}
               title={btn.label}
             >
               {btn.letter}
             </button>
          ))}
        </div>

        <div className="flex justify-center gap-4 border-t border-slate-100 pt-6">
            <button 
                onClick={resetHighlight}
                className="flex items-center gap-2 px-4 py-2 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
                <Eraser size={18} /> Effacer
            </button>
            <button 
                onClick={checkSolution}
                disabled={!currentPrompt?.solution || isLoading}
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {showSolution ? <Check size={18} /> : <Play size={18} />} 
                {showSolution ? 'Solution Affichée' : 'Vérifier / Solution'}
            </button>
        </div>
      </div>

      {showSolution && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-center">
              Voici la solution idéale générée par l'IA.
          </div>
      )}
    </div>
  );
};

export default PromptView;