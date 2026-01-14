import React from 'react';
import { 
  Search, 
  Database, 
  Filter, 
  BarChart2, 
  Cpu, 
  GitBranch, 
  CheckCircle, 
  Rocket,
  ChevronDown,
  ArrowDown,
  Code,
  Settings,
  List
} from 'lucide-react';
import { RoadmapStep } from '../types';

const steps: RoadmapStep[] = [
  {
    id: 1,
    title: "Sorun Tanımı",
    description: "İş problemini analitik bir probleme dönüştürme ve başarı kriterlerini belirleme.",
    icon: "search",
    methodCategories: [
        { name: "Hedef Belirleme", items: ["SMART Hedefler", "OKR", "KPI Ağacı"] },
        { name: "Fizibilite", items: ["Veri Yeterliliği", "Etki Analizi", "Risk Değerlendirmesi"] },
        { name: "Planlama", items: ["Proje Kapsamı (Scope)", "Zaman Çizelgesi"] }
    ],
    libraries: ["pandas", "numpy"]
  },
  {
    id: 2,
    title: "Veri Toplama",
    description: "Gerekli verilerin veritabanlarından, API'lerden veya web sitelerinden temini.",
    icon: "database",
    methodCategories: [
        { name: "Veritabanı", items: ["SQL (Select, Join, CTE)", "NoSQL Sorguları"] },
        { name: "Web Scraping", items: ["Statik Scraping", "Dinamik Scraping (Selenium)", "API Entegrasyonu"] },
        { name: "Büyük Veri", items: ["Hadoop HDFS", "Spark RDD/Dataframes"] }
    ],
    libraries: ["requests", "BeautifulSoup", "selenium", "sqlalchemy", "psycopg2"]
  },
  {
    id: 3,
    title: "Veri Temizleme",
    description: "Eksik, hatalı veya tutarsız verilerin ayıklanması ve analize hazır hale getirilmesi.",
    icon: "filter",
    methodCategories: [
        { name: "Eksik Veri (Imputation)", items: ["Mean/Median Imputation", "Mode Imputation", "KNN Imputation", "Iterative Imputer", "Sabit Değer Atama"] },
        { name: "Aykırı Değerler", items: ["Z-Score Yöntemi", "IQR (Çeyrekler Aralığı)", "Isolation Forest", "DBSCAN"] },
        { name: "Veri Dönüşümü", items: ["Tip Dönüşümü", "String Manipülasyonu", "Tarih/Saat Ayrıştırma"] }
    ],
    libraries: ["pandas", "numpy", "missingno", "ydata-profiling", "janitor"]
  },
  {
    id: 4,
    title: "Keşifçi Veri Analizi (EDA)",
    description: "Veriyi anlamak için görselleştirme ve istatistiksel özetlerin çıkarılması.",
    icon: "chart",
    methodCategories: [
        { name: "Tek Değişkenli (Univariate)", items: ["Histogram", "Box Plot", "Bar Chart", "Frequency Tables"] },
        { name: "Çok Değişkenli", items: ["Scatter Plot", "Heatmap (Korelasyon)", "Pair Plot", "Violin Plot"] },
        { name: "İstatistiksel Testler", items: ["T-Test", "ANOVA", "Chi-Square", "Normallik Testleri"] }
    ],
    libraries: ["matplotlib", "seaborn", "plotly", "scipy", "statsmodels"]
  },
  {
    id: 5,
    title: "Özellik Mühendisliği",
    description: "Model performansını artıracak anlamlı değişkenlerin üretilmesi.",
    icon: "cpu",
    methodCategories: [
        { name: "Encoding (Kategorik)", items: ["One-Hot Encoding", "Label Encoding", "Target Encoding", "Ordinal Encoding", "Binary Encoding"] },
        { name: "Scaling (Ölçekleme)", items: ["Standard Scaler (Z-Score)", "Min-Max Scaler", "Robust Scaler", "Log Transformation"] },
        { name: "Seçim (Selection)", items: ["RFE (Recursive Feature Elimination)", "Lasso (L1 Regularization)", "Feature Importance (Tree-based)"] }
    ],
    libraries: ["scikit-learn", "category_encoders", "feature-engine"]
  },
  {
    id: 6,
    title: "Modelleme",
    description: "Makine öğrenmesi algoritmalarının eğitilmesi ve optimize edilmesi.",
    icon: "branch",
    methodCategories: [
        { name: "Sınıflandırma", items: ["Logistic Regression", "Random Forest Classifier", "XGBoost", "Support Vector Machines (SVM)", "Naive Bayes"] },
        { name: "Regresyon", items: ["Linear Regression", "Ridge/Lasso Regression", "Decision Tree Regressor"] },
        { name: "Optimizasyon", items: ["Grid Search", "Random Search", "Bayesian Optimization"] }
    ],
    libraries: ["scikit-learn", "xgboost", "lightgbm", "catboost", "tensorflow"]
  },
  {
    id: 7,
    title: "Değerlendirme",
    description: "Model başarısının test verisi üzerinde metriklerle ölçülmesi.",
    icon: "check",
    methodCategories: [
        { name: "Sınıflandırma Metrikleri", items: ["Accuracy", "Precision", "Recall", "F1-Score", "AUC-ROC Curve", "Confusion Matrix"] },
        { name: "Regresyon Metrikleri", items: ["MSE (Mean Squared Error)", "RMSE", "MAE (Mean Absolute Error)", "R-Squared"] },
        { name: "Validasyon", items: ["K-Fold Cross Validation", "Stratified K-Fold", "Leave-One-Out"] }
    ],
    libraries: ["scikit-learn", "yellowbrick", "matplotlib"]
  },
  {
    id: 8,
    title: "Dağıtım (Deployment)",
    description: "Modelin canlı sisteme alınması, API olarak sunulması ve izlenmesi.",
    icon: "rocket",
    methodCategories: [
        { name: "Servis Etme", items: ["REST API (FastAPI/Flask)", "Batch Prediction", "Streamlit Dashboard"] },
        { name: "Konteynerizasyon", items: ["Docker Image Oluşturma", "Docker Compose", "Kubernetes Pods"] },
        { name: "MLOps", items: ["Model Registry", "Experiment Tracking (MLflow)", "Data Drift Monitoring"] }
    ],
    libraries: ["flask", "fastapi", "streamlit", "docker-py", "mlflow"]
  }
];

const IconMap: Record<string, React.ReactNode> = {
  search: <Search size={24} />,
  database: <Database size={24} />,
  filter: <Filter size={24} />,
  chart: <BarChart2 size={24} />,
  cpu: <Cpu size={24} />,
  branch: <GitBranch size={24} />,
  check: <CheckCircle size={24} />,
  rocket: <Rocket size={24} />
};

const RoadmapCard = ({ step, index, isLeft }: { step: RoadmapStep; index: number; isLeft: boolean }) => {
  return (
    <div className={`mb-8 flex justify-between items-start w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="w-5/12 hidden md:block" />
      
      {/* Center Point */}
      <div className="z-20 w-8 h-8 absolute left-1/2 -translate-x-1/2 mt-6 rounded-full bg-slate-900 border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center justify-center">
        <div className="w-2 h-2 bg-indigo-400 rounded-full" />
      </div>

      {/* Card */}
      <div className={`w-full md:w-5/12 bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group relative z-10 overflow-hidden`}>
        
        {/* Connector Line for Desktop */}
        <div className={`hidden md:block absolute top-10 w-8 h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent ${isLeft ? '-right-8 rotate-180' : '-left-8'}`} />

        <div className="p-6">
          <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse md:text-right' : ''}`}>
            <div className={`p-3 rounded-xl bg-slate-900 border border-slate-700 text-indigo-400 shadow-inner group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-300 shrink-0`}>
              {IconMap[step.icon]}
            </div>
            <div className="flex-grow">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1 opacity-80">Adım 0{step.id}</span>
              <h3 className="text-xl font-bold text-slate-100 leading-tight group-hover:text-indigo-300 transition-colors">{step.title}</h3>
            </div>
          </div>
          
          <p className={`text-slate-400 text-sm leading-relaxed mb-6 ${isLeft ? 'md:text-right' : ''}`}>
            {step.description}
          </p>

          <div className="space-y-5">
            {/* Methods Section */}
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
              <div className={`flex items-center gap-2 mb-3 text-indigo-300/80 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                <Settings size={14} />
                <h4 className="text-xs font-bold uppercase tracking-wider">Yöntemler ve Teknikler</h4>
              </div>
              <div className="space-y-3">
                {step.methodCategories.map((category, idx) => (
                    <div key={idx} className={`${isLeft ? 'md:text-right' : ''}`}>
                        <div className={`text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                           {!isLeft && <div className="w-1 h-1 rounded-full bg-indigo-500"></div>}
                           {category.name}
                           {isLeft && <div className="w-1 h-1 rounded-full bg-indigo-500"></div>}
                        </div>
                        <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                            {category.items.map((item, i) => (
                                <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] md:text-xs rounded border border-slate-700 hover:text-slate-200 hover:border-slate-600 transition-colors">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Libraries Section */}
            <div>
              <div className={`flex items-center gap-2 mb-2 text-emerald-400/80 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                <Code size={14} />
                <h4 className="text-xs font-bold uppercase tracking-wider">Python Kütüphaneleri</h4>
              </div>
              <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                {step.libraries.map((lib, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-900 text-emerald-400 text-xs font-mono rounded border border-emerald-900/30 shadow-sm hover:shadow hover:bg-slate-900/80 transition-all">
                    {lib}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
          Veri Bilimi <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Yol Haritası</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Ham veriden değer yaratmaya giden yolda bir veri bilimcinin takip ettiği standart yaşam döngüsü, detaylı yöntemler ve kütüphaneler.
        </p>
        <div className="flex justify-center mt-6">
           <div className="animate-bounce p-2 bg-slate-800 rounded-full shadow-lg border border-slate-700 text-slate-400">
             <ChevronDown size={24} />
           </div>
        </div>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500/20 via-purple-500/20 to-slate-800/20 rounded-full z-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-700">
                <ArrowDown size={32} />
            </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 md:space-y-0 pl-12 md:pl-0">
          {steps.map((step, index) => (
            <RoadmapCard 
              key={step.id} 
              step={step} 
              index={index} 
              isLeft={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>
      
      <div className="mt-24 p-8 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl text-center text-white shadow-2xl border border-indigo-500/30 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-indigo-100">Veri Dünyasına Adım Atın</h2>
            <p className="text-indigo-200/80 mb-8 max-w-xl mx-auto">Bu rehberdeki her bir adımı uygulayarak, karmaşık veri setlerini anlamlı içgörülere dönüştürmeye başlayabilirsiniz.</p>
            <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Projeye Başla
            </button>
        </div>
      </div>
    </div>
  );
}