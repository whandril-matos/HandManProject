"use client"

import  './style.scss'
import { useEffect, useState } from "react";

import FullPageCard from "../componets/FullPageCard/TypeOne/FullPageCard";
import List from "../componets/list/type1/list";
import ListIImage from "../componets/list/type2/CardList";
import ListT3 from '../componets/list/type3/AccordionList';
import SceenLoading from "../componets/screenLoading/type1/LoadingScreen"
import FeatureSection from "../componets/textbutonImage/sectioFerature"
import Footer from "../componets/footer/type1/Footer"


const fetchData = async () => {
  return new Promise<void>((resolve) => setTimeout(resolve, 3000)); // Simula um delay de 3 segundos
};

 let informationsApi = {
    "componets":{
      "cardImageText":[
        {
          id: 1,
          title: "Carpinteiro",
          description: "Vamos ser responsáveis por construir, instalar e reparar estruturas de madeira em casas e apartamentos. Incluindo a montagem de telhados, vigas, escadas, pisos, portas, janelas, armários embutidos e outros acabamentos em madeira.",
          image: "https://allmadloja.com.br/wp-content/uploads/2023/01/O-que-e-carpintaria.png",
        },
        {
          id: 2,
          title: "Encanador",
          description: "Faremos a instalação, manutenção e reparo de sistemas hidráulicos, incluindo tubulações de água, esgoto e gás em residências, edifícios e indústrias, garantindo o funcionamento seguro e eficiente das redes de abastecimento e drenagem.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScapMl9J6dYYTTUFHztXE21S3w5mzApj-XCg&s",
        },
        {
          id: 3,
          title: "Eletricista",
          description: "Vamos ser responsáveis pela instalação, manutenção e reparo de sistemas elétricos trabalhando com fiação, disjuntores, quadros de energia, tomadas, iluminação e outros componentes elétricos, garantindo o funcionamento seguro e eficiente das instalações. ",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhrYs5LLllwEBm7Oxo10B0q45ppJDYCVH2Q&s",
        },
        {
          id: 4,
          title: "Jardinagem",
          description: "Vamos cultivar e cuidar de plantas em jardins, canteiros, vasos ou outros espaços, seja por lazer, estética ou produção de alimentos. A jardinagem envolve diversas atividades, como preparar o solo, semear, plantar, podar, regar e controlar pragas.",
          image: "https://medeage.com.br/images/servico-de-jardinagem.jpg",
        },
      ],
      "questions": [
        { id: 1, title: "Fazer um orçamento é pago?", content: "Não custa nada, orçamentos são gratuitos! E além de tudo são bem detalhados e completos.  " },
        { id: 2, title: "Onde atendemos?", content: "Atendemos no Gama e redondezas." },
        { id: 3, title: "Os materiais usados nos reparos são de qualidade?", content: "Sim! Apenas o melhor para os nossos clientes" },
      ],
      "lisItem": [
        { id: 1, title: "🛠️ Qualidade do Trabalho", description: `🔹 Na Speed Repair, entregamos serviços bem-feitos, duráveis e com acabamento profissional. Nada de "gambiarras" ou soluções temporárias – aqui o trabalho é feito para durar!` },
        { id: 2, title: "⏳ Pontualidade e Compromisso", description: `🔹 Valorizamos seu tempo! Chegamos no horário combinado e cumprimos prazos, porque sabemos que ninguém gosta de ficar esperando por um serviço que nunca começa.` },
        { id: 3, title: "🗪 Atendimento e Comunicação", description: `🔹 Explicamos cada detalhe do serviço, sem enrolação. Você sempre sabe exatamente o que está sendo feito, quanto vai custar e qual será o resultado final.` },
        { id: 4, title: "🧹 Organização e Limpeza", description: `🔹 Nada de bagunça depois do serviço! Trabalhamos com cuidado e deixamos seu espaço limpo e organizado, porque respeitamos seu lar como se fosse o nosso.`},
      ],
      "titles":{
        title1:"Trabalhamos como:", 
        title2:"Como trabalhamos:", 
        title3:"Dúvidas frequentes:"
      
      
      },
      "wallCard":{
        title:"Reparos Residenciais",
        subTitle:"De pequenos a grandes reparos!",
        listItems1:"Qualidade",
        listItems2:"Transparência",
        listItems3:"Garantia do Serviço",
        description:"Manutenção e Reparos Residenciais! Qualidade, agilidade e preço justo para deixar sua casa impecável. 📲 Chame no WhatsApp ou ligue para: 9999-9999!",
        buttonText:"WhatsApp",
        buttonText2:"Telefone",
        imageUrl:"https://blog.taqi.com.br/wp-content/uploads/2019/11/ferramentas-para-consertos-CRED-iStock_AndreyPopov.jpg"
      }
    }
 }

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500)); // Simula um carregamento de 3s
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <SceenLoading />;
  }
  return (
    <> <a id='start'></a>
      <FullPageCard />
      <a id='weWork'></a>
      <div>
        <h2 className='title'>{informationsApi.componets.titles.title1}</h2>
      </div>
      <ListIImage items={informationsApi.componets.cardImageText}/>
      <a id='HowToWork'></a>
      <div>
        <h2 className='title'>{informationsApi.componets.titles.title2}</h2>
      </div>
      <List items={informationsApi.componets.lisItem} />
      <a id='contact'></a>
      <FeatureSection
        title={informationsApi.componets.wallCard.title}
        subtitle={informationsApi.componets.wallCard.subTitle}
        listItems={[
          informationsApi.componets.wallCard.listItems1,
          informationsApi.componets.wallCard.listItems2,
          informationsApi.componets.wallCard.listItems3,
        ]}
        description={informationsApi.componets.wallCard.description}
        buttonText={informationsApi.componets.wallCard.buttonText}
        buttonText2={informationsApi.componets.wallCard.buttonText2}
        imageUrl={informationsApi.componets.wallCard.imageUrl}
      />
      <div>
        <h2 className='title'>{informationsApi.componets.titles.title3}</h2>
      </div>
      <ListT3 items={informationsApi.componets.questions} />
      <Footer></Footer>
    </>   
  );
}
