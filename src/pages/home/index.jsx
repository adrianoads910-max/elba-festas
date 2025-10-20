import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import BannerSlider from "../../components/slider";
import { Footer } from "../../components/footer";
import { Target, Lightbulb, Sparkles } from "lucide-react";


const SHOWCASE = [
    {
        img: {
            src: "./paineis.png",
            alt: "Paineis"
        },
        category: "Paineis"
        

    },
    {
        img: {
            src: "./pecas.png",
            alt: "Peças"
        },
        category: "Peças"
    },
    {
        img: {
            src: "./toalhas.png",
            alt: "Toalhas"
        },
        category: "Toalhas"
    },
    {
        img: {
            src: "./montagem.jpg",
            alt: "Design de adesivos"
        },
        category: "Design de adesivos"
    }
]

const VALUES = [
  {
    icon: <Target size={48} className="text-brand-gray" />,
    title: "MISSÃO",
    bgColor: "bg-brand-dark",
    items: [
      "Encantar pessoas e transformar comemorações em momentos inesquecíveis, oferecendo locação de painéis, peças decorativas, toalhas e estruturas com qualidade, cuidado nos detalhes e carinho em cada evento."
    ],
  },
  {
    icon: <Lightbulb size={48} className="text-brand-metal-light" />,
    title: "VISÃO",
    bgColor: "bg-brand-dark",
    items: [
      "Ser referência no Maranhão e região em decoração e locação para festas, reconhecida pela criatividade, excelência no atendimento e por tornar sonhos possíveis, desde o simples ao sofisticado."
    ],
  },
  {
    icon: <Sparkles size={48} className="text-brand-metal-light" />,
    title: "VALORES",
    bgColor: "bg-brand-dark",
    items: [
      "Encantamento: cada evento é único e tratado com carinho e dedicação.",
      "Qualidade: trabalhamos com peças bem cuidadas, limpas e prontas para brilhar na sua festa.",
      "Pontualidade e Responsabilidade: compromisso com prazos e com a confiança dos nossos clientes.",
      "Criatividade: buscamos constantemente novas ideias, tendências e composições.",
      "Respeito e Ética: valorizamos nossos clientes, parceiros e colaboradores.",
      "Amor pelo que fazemos: acreditamos que celebrar é uma forma de viver momentos com o coração."
    ],
  },
];

const GROUP = [
    {
        img: {
            src: "./elba.jpeg",
            alt: "Elba Camilo"
        },
        text: "CEO - Elba Camilo"
        

    },
    {
        img: {
            src: "./andre.png",
            alt: "andre"
        },
        text: "Peão - André Souza"
        

    },
    {
        img: {
            src: "./adrielle.png",
            alt: "adrielle"
        },
        text: "Peão - Adrielle Alline"
    },
    {
        img: {
            src: "./adriano.jpeg",
            alt: "web design"
        },
        text: "Design Web - Adriano Souza"
    }
]

export const HomePage = () => {

    return (
        <main className="bg-brand-gray">
            <header>
                <Navbar/>
            </header>
            <div className="pt-20">
                <BannerSlider />
      
            </div>
            <section className="bg-brand-pink-light">
                <article>
                    <h2 className="text-xl md:text-5xl lg:text-left font-bold text-brand-blue-dark  p-6">Nossos Serviços</h2>
                </article>   
                 <picture className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SHOWCASE.map((item) => (
                        <section key={item.img.src} className="text-brand-blue-dark p-3">
                        <div className="relative overflow-hidden group rounded-2xl">
                            <img
                                src={item.img.src}
                                alt={item.img.alt}
                                className="rounded-2xl w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-amber-50 py-2 text-center transition-colors duration-300 group-hover:bg-brand-purple">
                                <p className="text-brand-blue-dark  text-lg font-extrabold tracking-wide uppercase">
                                {item.category}
                                </p>
                            </div>
                        </div>
                        </section>
                    ))}
                </picture>
                  <section className="right-6 sm:right-10 flex justify-items-start p-4">
                    <button className="text-amber-50 bg-brand-blue-light hover:bg-brand-blue-dark text-lg font-medium border-2 rounded-full p-6">Entre em contato</button>
                  </section>
            </section>      
            <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mx-auto p-8 gap-12">
                <section className="lg:w-1/2">
                    <h3 className="text-xl md:text-5xl lg:text-center font-bold text-brand-blue-dark  p-6">Construindo sonhos desde 2000</h3>
                     <p className="text-xl md:text-xl text-center lg:text-center text-brand-blue-dark font-semibold p-2">Transformamos momentos especiais em memórias inesquecíveis. Com painéis personalizados, peças decorativas e toalhas que encantam, damos vida a cada detalhe da sua celebração.</p>
                </section>
                 <section className="lg:w-1/2">
                        <div className="relative overflow-hidden group rounded-2xl">
                            <img
                            className="aspect-square w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-2xl"
                            src="./about.png"
                            alt="baby shark"
                            />
                        </div>
                    </section>
             </div>     
                 <section className="w-full p-8 bg-brand-blue-light">
        
           <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 ">
                {VALUES.map((item) => (
                    <section key={item.title} className={`flex flex-col items-center text-center text-amber-50 border p-6 rounded-2xl space-y-4 border-amber-50 ${item.bgColor}  hover:bg-brand-blue-dark`}>
                     <div className="mb-4">
                        {item.icon}
                    </div>

                    <h3 className="text-3xl font-semibold">{item.title}</h3>

                    <ul className="flex flex-col items-center space-y-2">
                        {item.items.map((feature) => (
                        <li key={feature}>{feature}</li>
                        ))}
                    </ul>

                    <article className="text-center"></article>
                    </section>
                ))}
                </div>

        </section>
            <div>
                <article>
                    <h3 className="text-xl md:text-5xl lg:text-left font-bold text-brand-blue-dark p-6">Conheça nossa equipe:</h3>
                </article>
                <picture className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {GROUP.map((item) => (
                        <section key={item.img.src} className="text-brand-blue-dark p-3">
                        <div className="relative overflow-hidden group rounded-2xl">
                            <img
                                src={item.img.src}
                                alt={item.img.alt}
                                className="rounded-2xl w-full h-64 object-cover"/>
                                <p className="text-brand-blue-dark text-lg font-extrabold tracking-wide uppercase p-4">
                                {item.text}
                                </p>
                        </div>
                        </section>
                    ))}
                </picture>


            </div>            

            <footer>
                <Footer />
            </footer>
        </main>
    )
}