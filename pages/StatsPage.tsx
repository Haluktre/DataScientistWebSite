import React, { useState, useEffect } from 'react';
import { ExternalLink, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { StatCardData } from '../types';

// Interesting statistical facts data
const statsData: StatCardData[] = [
  {
    id: 1,
    title: "Simpson Paradoksu",
    subtitle: "Trendler Gruplarda Tersine Dönebilir",
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "https://en.wikipedia.org/wiki/Simpson%27s_paradox",
    description: "Bir eğilim, verilerin farklı gruplarında görünürken, bu gruplar birleştirildiğinde eğilimin kaybolması veya tersine dönmesi olayıdır. Örneğin, iki hastanenin başarı oranlarını karşılaştırırken, ağır vakaları kabul eden hastane genel toplamda daha başarısız görünebilir, ancak vaka zorluğuna göre gruplandığında aslında daha başarılı olabilir. Bu, nedensellik ilişkilerini yanlış yorumlamaya yol açabilir.",
    color: "text-orange-400"
  },
  {
    id: 2,
    title: "Benford Yasası",
    subtitle: "İlk Rakamların Gizemi",
    imageUrl: "https://picsum.photos/600/600?random=2",
    link: "https://en.wikipedia.org/wiki/Benford%27s_law",
    description: "Gerçek hayattaki pek çok sayısal veri setinde (nüfus sayıları, fatura tutarları, nehir uzunlukları), ilk basamağın '1' olma olasılığı yaklaşık %30'dur. '9' olma olasılığı ise %5'ten azdır. Rakamlar rastgele dağılmaz. Bu yasa, vergi dolandırıcılığı veya muhasebe hilelerini tespit etmek için adli muhasebede sıkça kullanılır.",
    color: "text-blue-400"
  },
  {
    id: 3,
    title: "Büyük Sayılar Yasası",
    subtitle: "Uzun Vadede Denge",
    imageUrl: "https://picsum.photos/600/350?random=3",
    link: "https://en.wikipedia.org/wiki/Law_of_large_numbers",
    description: "Bir deney defalarca tekrarlandığında, sonuçların ortalamasının beklenen değere yaklaşacağını belirtir. Bir madeni parayı 10 kez attığınızda %70 tura gelebilir, ancak 1 milyon kez attığınızda oran %50'ye çok yaklaşır. Kumarhaneler bu yasa sayesinde kısa vadede kaybetse bile uzun vadede her zaman kazanır.",
    color: "text-green-400"
  },
  {
    id: 4,
    title: "Doğum Günü Paradoksu",
    subtitle: "23 Kişide %50 İhtimal",
    imageUrl: "https://picsum.photos/600/500?random=4",
    link: "https://en.wikipedia.org/wiki/Birthday_problem",
    description: "Sadece 23 kişilik bir odada, en az iki kişinin aynı doğum gününe sahip olma olasılığı %50'nin üzerindedir. 70 kişide bu oran %99.9'a çıkar. İnsan beyni bu olasılığı doğrusal düşünmeye eğilimlidir, ancak olası çiftlerin sayısı (kombinasyon) kişi sayısıyla birlikte üssel olarak artar.",
    color: "text-purple-400"
  },
  {
    id: 5,
    title: "Anscombe'un Dörtlüsü",
    subtitle: "Görselleştirmenin Gücü",
    imageUrl: "https://picsum.photos/600/401?random=10",
    link: "https://en.wikipedia.org/wiki/Anscombe%27s_quartet",
    description: "Dört farklı veri seti düşünün. Ortalamaları, varyansları ve korelasyonları neredeyse aynı. Ancak grafiğe döküldüğünde biri doğrusal, biri eğrisel, biri dik, diğeri tamamen dağınık görünür. Sayısal özetlerin (summary statistics) veriyi anlamak için asla yeterli olmadığını, veriyi görselleştirmenin şart olduğunu kanıtlar.",
    color: "text-pink-400"
  },
  {
    id: 6,
    title: "Monty Hall Problemi",
    subtitle: "Kapıyı Değiştirmeli misiniz?",
    imageUrl: "https://picsum.photos/600/402?random=11",
    link: "https://en.wikipedia.org/wiki/Monty_Hall_problem",
    description: "Bir yarışmadasınız, 3 kapı var. Birinin ardında araba, ikisinde keçi var. Bir kapı seçersiniz. Sunucu diğer kapılardan arkasında keçi olan birini açar. Seçiminizi değiştirmeli misiniz? Sezgileriniz 'fark etmez' der ama istatistiksel olarak değiştirmek kazanma şansınızı %33'ten %66'ya çıkarır.",
    color: "text-yellow-400"
  },
  {
    id: 7,
    title: "Kumarbaz Yanılgısı",
    subtitle: "Bağımsız Olayları Yanlış Anlamak",
    imageUrl: "https://picsum.photos/600/450?random=5",
    link: "https://en.wikipedia.org/wiki/Gambler%27s_fallacy",
    description: "Bir madeni para 10 kez tura geldiyse, bir sonrakinin yazı gelme ihtimalinin daha yüksek olduğunu düşünmek yanlıştır. Olasılık hala %50'dir. Olaylar bağımsızdır; madeni paranın hafızası yoktur. Rulette üst üste siyah gelmesi, kırmızının gelme olasılığını artırmaz.",
    color: "text-red-400"
  },
  {
    id: 8,
    title: "Goodhart Yasası",
    subtitle: "Ölçüm Hedef Olursa",
    imageUrl: "https://picsum.photos/600/403?random=12",
    link: "https://en.wikipedia.org/wiki/Goodhart%27s_law",
    description: "'Bir ölçüm hedef haline geldiğinde, iyi bir ölçüm olmaktan çıkar.' Örneğin, bir çağrı merkezinde başarı kriteri 'kısa görüşme süresi' olursa, çalışanlar müşterilerin sorununu çözmeden telefonu kapatmaya başlar. Veri biliminde yanlış metrik seçimi (metric hacking) bu yüzden tehlikelidir.",
    color: "text-indigo-400"
  },
  {
    id: 9,
    title: "Korelasyon ≠ Nedensellik",
    subtitle: "Dondurma ve Boğulma",
    imageUrl: "https://picsum.photos/600/404?random=13",
    link: "https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation",
    description: "Yaz aylarında dondurma satışları artar, aynı zamanda boğulma vakaları da artar. İkisi arasında yüksek bir korelasyon vardır. Ancak dondurma yemek boğulmaya neden olmaz. Gizli değişken (confounding variable) sıcak havadır. İki değişkenin birlikte hareket etmesi, birinin diğerine neden olduğu anlamına gelmez.",
    color: "text-emerald-400"
  },
  {
    id: 10,
    title: "Ortalamaya Dönüş",
    subtitle: "Aşırılıklar Kalıcı Değildir",
    imageUrl: "https://picsum.photos/600/300?random=6",
    link: "https://en.wikipedia.org/wiki/Regression_toward_the_mean",
    description: "Eğer bir değişken ilk ölçümde aşırı bir değer alıyorsa, ikinci ölçümde genellikle ortalamaya daha yakın olacaktır. Örneğin, sınavda şans eseri çok yüksek not alan bir öğrenci, bir sonraki sınavda muhtemelen daha düşük not alacaktır. Bu durum bazen 'ceza işe yaradı' veya 'ödül işe yaramadı' gibi yanlış yorumlara neden olur.",
    color: "text-yellow-400"
  },
  {
    id: 11,
    title: "Kobra Etkisi",
    subtitle: "Teşviklerin Ters Tepmesi",
    imageUrl: "https://picsum.photos/600/405?random=14",
    link: "https://en.wikipedia.org/wiki/Cobra_effect",
    description: "İngiliz yönetimi Hindistan'da kobra yılanlarını azaltmak için ölü kobra getirene ödül verir. Halk ödül için kobra yetiştirmeye başlar. Yönetim bunu fark edip ödülü kaldırınca, yetiştiriciler yılanları salar ve kobra nüfusu eskisinden daha fazla olur. Veriye dayalı kötü tasarlanmış teşvik sistemlerinin yan etkilerini gösterir.",
    color: "text-rose-400"
  },
  {
    id: 12,
    title: "Veri Tarama (Data Dredging)",
    subtitle: "Tesadüfi Korelasyonlar",
    imageUrl: "https://picsum.photos/600/550?random=7",
    link: "https://en.wikipedia.org/wiki/Data_dredging",
    description: "Yeterince büyük bir veri setinde, istatistiksel olarak anlamlı görünen ancak tamamen şans eseri oluşmuş ilişkiler bulmak kaçınılmazdır. ABD'deki peynir tüketimi ile yatak çarşaflarına dolanarak ölme sayısı arasında %95 korelasyon vardır. Bu, 'p-hacking' olarak da bilinir.",
    color: "text-teal-400"
  },
  {
    id: 13,
    title: "Teksaslı Keskin Nişancı",
    subtitle: "Rastgelelikte Desen Görmek",
    imageUrl: "https://picsum.photos/600/406?random=15",
    link: "https://en.wikipedia.org/wiki/Texas_sharpshooter_fallacy",
    description: "Bir adam ahıra rastgele ateş eder, sonra kurşun deliklerinin en yoğun olduğu yere bir hedef tahtası çizer ve 'keskin nişancı' olduğunu iddia eder. Veri analizinde, önce veriye bakıp sonra hipotez kurmak (HARKing) benzer bir hatadır.",
    color: "text-amber-400"
  },
  {
    id: 14,
    title: "Yanlış Pozitif Paradoksu",
    subtitle: "Test Doğruluğu vs. Gerçeklik",
    imageUrl: "https://picsum.photos/600/420?random=8",
    link: "https://en.wikipedia.org/wiki/Base_rate_fallacy",
    description: "Çok nadir görülen bir hastalık için yapılan test %99 doğru olsa bile, pozitif çıkan bir sonucun yanlış olma ihtimali şaşırtıcı derecede yüksek olabilir. Çünkü hastalığın toplumdaki yaygınlığı (base rate) çok düşüktür. Bayes teoremi bu durumu açıklar.",
    color: "text-cyan-400"
  },
  {
    id: 15,
    title: "Abraham Wald ve Uçaklar",
    subtitle: "Hayatta Kalan Yanılgısı",
    imageUrl: "https://picsum.photos/600/380?random=9",
    link: "https://en.wikipedia.org/wiki/Survivorship_bias",
    description: "2. Dünya Savaşı'nda geri dönen uçakların en çok hasar alan yerlerine zırh takılmak istendi. Wald, tam tersini önerdi: Geri dönmeyen uçaklar muhtemelen hasarsız görünen yerlerden (motor) vurulmuştu. Biz sadece 'hayatta kalanları' gördüğümüz için veri setimiz yanlıdır.",
    color: "text-indigo-400"
  },
  {
    id: 16,
    title: "Ekolojik Yanılgı",
    subtitle: "Gruptan Bireye Hata",
    imageUrl: "https://picsum.photos/600/407?random=16",
    link: "https://en.wikipedia.org/wiki/Ecological_fallacy",
    description: "Zengin ülkelerde intihar oranlarının yüksek olması, zengin bireylerin daha çok intihar ettiği anlamına gelmez. Belki de zengin ülkelerdeki fakirler intihar ediyordur. Grup düzeyindeki ortalama verilerden birey düzeyinde çıkarım yapmak yanıltıcıdır.",
    color: "text-lime-400"
  },
  {
    id: 17,
    title: "McNamara Yanılgısı",
    subtitle: "Sadece Ölçülebileni Saymak",
    imageUrl: "https://picsum.photos/600/408?random=17",
    link: "https://en.wikipedia.org/wiki/McNamara_fallacy",
    description: "Vietnam Savaşı'nda başarı sadece 'öldürülen düşman sayısı' ile ölçüldü, çünkü bu kolayca sayılabiliyordu. Halkın desteği gibi ölçülemeyen faktörler yok sayıldı ve savaş kaybedildi. Veri biliminde 'elimde veri yoksa o faktör önemsizdir' demek felakete yol açar.",
    color: "text-slate-400"
  },
  {
    id: 18,
    title: "Sokak Lambası Etkisi",
    subtitle: "Kolay Veriyi Aramak",
    imageUrl: "https://picsum.photos/600/409?random=18",
    link: "https://en.wikipedia.org/wiki/Streetlight_effect",
    description: "Adam gece anahtarlarını kaybeder ama sokak lambasının altında arar. 'Neden?' diye sorulunca 'Çünkü ışık burada' der. Veri bilimciler bazen doğru soruyu cevaplayacak zor veriyi toplamak yerine, ellerindeki kolay (ama ilgisiz) veriyi analiz etme tuzağına düşerler.",
    color: "text-fuchsia-400"
  },
  {
    id: 19,
    title: "Berkson Paradoksu",
    subtitle: "Seçim Yanlılığı",
    imageUrl: "https://picsum.photos/600/410?random=19",
    link: "https://en.wikipedia.org/wiki/Berkson%27s_paradox",
    description: "Hastanede yapılan bir araştırmada, diyabet ile başka bir hastalık arasında negatif ilişki bulunabilir. Diyabeti olanın diğer hastalığı yok gibidir. Neden? Çünkü sadece hastaneye yatanlara bakılmıştır. İki hastalığı da olmayanlar hastaneye gelmez. Örneklem seçimi korelasyonu çarptırır.",
    color: "text-violet-400"
  },
  {
    id: 20,
    title: "Dunning-Kruger Etkisi",
    subtitle: "Cahil Cesareti",
    imageUrl: "https://picsum.photos/600/411?random=20",
    link: "https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect",
    description: "Bir konuda yetkinliği düşük olan kişiler, yetkinliklerini aşırı abartma eğilimindedir. Veri biliminde 'modelim %100 doğru çalışıyor' diyen bir aceminin muhtemelen overfitting (aşırı öğrenme) yaptığının veya veri sızıntısı (data leakage) olduğunun farkında olmaması buna örnektir.",
    color: "text-orange-500"
  },
  {
    id: 21,
    title: "Will Rogers Fenomeni",
    subtitle: "Ortalamayı Sihirle Artırmak",
    imageUrl: "https://picsum.photos/600/412?random=21",
    link: "https://en.wikipedia.org/wiki/Will_Rogers_phenomenon",
    description: "Bir kümeyi (A) terk edip diğer kümeye (B) geçen bir eleman, eğer A'nın ortalamasının altındaysa A'nın ortalamasını yükseltir. Eğer aynı zamanda B'nin mevcut ortalamasının da altındaysa, B'nin ortalamasını düşürür. Ancak tıbbi teşhislerde (evre kayması) her iki grubun da prognozunu iyileştiriyor gibi görünebilir.",
    color: "text-sky-400"
  },
  {
    id: 22,
    title: "Çoklu Karşılaştırma Sorunu",
    subtitle: "Yeterince Ararsan Bulursun",
    imageUrl: "https://picsum.photos/600/413?random=22",
    link: "https://en.wikipedia.org/wiki/Multiple_comparisons_problem",
    description: "Eğer 100 farklı hipotezi test ederseniz, %5 anlamlılık düzeyinde bile şans eseri 5 tane 'anlamlı' sonuç bulursunuz. Bu, 'biri tutana kadar test et' yaklaşımıdır ve bilimsel olarak geçersizdir. Bonferroni düzeltmesi gibi yöntemler gerekir.",
    color: "text-rose-500"
  },
  {
    id: 23,
    title: "Amara Yasası",
    subtitle: "Teknolojiye Aşırı Tepki",
    imageUrl: "https://picsum.photos/600/414?random=23",
    link: "https://en.wikipedia.org/wiki/Roy_Amara",
    description: "'Bir teknolojinin etkisini kısa vadede abartma, uzun vadede ise küçümseme eğilimindeyiz.' Yapay zeka projelerinde sıkça görülür. İlk başta 'dünyayı ele geçirecek' denir, sonra 'bir işe yaramıyor' denir, ama arka planda dünyayı sessizce ve kökten değiştirir.",
    color: "text-teal-300"
  },
  {
    id: 24,
    title: "Lindy Etkisi",
    subtitle: "Eskimeyen Bilgi",
    imageUrl: "https://picsum.photos/600/415?random=24",
    link: "https://en.wikipedia.org/wiki/Lindy_effect",
    description: "Teknolojik olmayan bir şeyin (örneğin bir kitabın veya teorinin) gelecekteki yaşam beklentisi, bugüne kadar hayatta kaldığı süre ile orantılıdır. Bayes teoremi 250 yıldır kullanılıyorsa, muhtemelen 250 yıl daha kullanılacaktır. Yeni çıkan 'devrimsel' bir algoritmanın ömrü ise muhtemelen kısadır.",
    color: "text-amber-300"
  },
  {
    id: 25,
    title: "Pareto İlkesi (80/20)",
    subtitle: "Azınlığın Gücü",
    imageUrl: "https://picsum.photos/600/416?random=25",
    link: "https://en.wikipedia.org/wiki/Pareto_principle",
    description: "Sonuçların %80'i, nedenlerin %20'sinden kaynaklanır. Veri biliminde: Projenin %80'i veri temizliği (%20 zaman alır gibi görünür ama almaz), hataların %80'i kodun %20'sinden çıkar. Özelliklerin (features) %20'si, modelin tahmin gücünün %80'ini sağlar.",
    color: "text-blue-500"
  }
];

const StatCard = ({ data }: { data: StatCardData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`w-full rounded-2xl overflow-hidden shadow-lg border border-slate-700 bg-slate-800 transition-all duration-500 ease-in-out hover:shadow-indigo-500/10 hover:border-slate-600 ${isOpen ? 'ring-1 ring-indigo-500/50' : ''}`}
    >
      <div 
        className="relative cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative overflow-hidden h-48 md:h-56">
            <img 
              src={data.imageUrl} 
              alt={data.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-6 right-16">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded text-[10px] font-bold uppercase tracking-wider border border-indigo-500/30 backdrop-blur-sm">
                        İstatistik
                    </span>
                </div>
                <h3 className={`text-xl font-bold text-white mb-0.5 group-hover:text-indigo-300 transition-colors`}>
                    {data.title}
                </h3>
                <h4 className={`text-sm font-medium ${data.color} font-mono opacity-90`}>
                    {data.subtitle}
                </h4>
            </div>

             <div className="absolute bottom-4 right-4 bg-slate-900/50 backdrop-blur-md p-2 rounded-full text-white border border-slate-700 transition-transform duration-300">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
             </div>
        </div>
      </div>
      
      <div 
        className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-2 border-t border-slate-700/50">
           <p className="text-slate-300 leading-relaxed text-sm mb-4">
            {data.description}
          </p>
          
          <a 
            href={data.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
          >
            Daha Fazla Oku <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function StatsPage() {
  // Logic to determine column count based on window width
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(3); // lg
      else if (window.innerWidth >= 768) setColumns(2); // md
      else setColumns(1); // sm
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Distribute items into columns
  const columnData = Array.from({ length: columns }, () => [] as StatCardData[]);
  statsData.forEach((item, index) => {
    columnData[index % columns].push(item);
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
          İlginç <span className="underline decoration-wavy decoration-indigo-500 decoration-4 underline-offset-8 text-slate-100">İstatistikler</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          Veri dünyasının sezgilerimize meydan okuyan, şaşırtıcı ve öğretici paradoksları. Detayları görmek için kartlara tıklayın.
        </p>
      </div>

      {/* Masonry Layout Implementation with Flexbox */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {columnData.map((colItems, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-6 w-full">
            {colItems.map((stat) => (
              <StatCard key={stat.id} data={stat} />
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <div className="inline-block p-8 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 justify-center mb-3">
                <Brain className="text-indigo-400 w-8 h-8" />
                <h3 className="font-bold text-xl text-white">Biliyor muydunuz?</h3>
            </div>
            <p className="text-slate-400 max-w-lg italic text-lg">
                "İstatistik, doğru söylendiğinde en büyük yalan, yanlış söylendiğinde en büyük gerçektir."
            </p>
        </div>
      </div>
    </div>
  );
}