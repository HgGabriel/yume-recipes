import { Recipe } from "../src/types/recipe";

export const mockData: Recipe[] = [
  {
    id: 1,
    title: "Sushi Tradicional",
    imageH:
      "https://images.unsplash.com/photo-1617196905100-216ffe128142?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageV:
      "https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "O sushi tradicional é uma obra-prima da culinária japonesa, que combina simplicidade e sofisticação em cada pedaço. Feito com arroz temperado com uma mistura delicada de vinagre, açúcar e sal, ele é cuidadosamente preparado para atingir o equilíbrio perfeito de sabor e textura. O sushi pode ser apreciado de diversas formas: o nigiri, onde finas fatias de peixe fresco repousam sobre pequenos montes de arroz; o sashimi, que celebra a pureza do peixe cru, cortado com precisão e servido sem arroz; e o maki, rolinhos envoltos em alga nori, recheados com uma variedade de ingredientes como salmão, atum, pepino, abacate ou até mesmo frutos do mar. Cada tipo de sushi é uma experiência única, que ressalta a frescura dos ingredientes e a habilidade do chef. Acompanhado de wasabi, molho de soja (shoyu) e gengibre em conserva, o sushi não só encanta o paladar, mas também oferece uma jornada cultural pela tradição japonesa. Ideal para quem busca uma refeição leve, saudável e repleta de sabores autênticos, o sushi é mais do que um prato—é uma celebração da arte culinária.",
    tags: [
      "japonês",
      "sushi",
      "comida japonesa",
      "peixe fresco",
      "verão",
      "primavera",
      "outono",
      "inverno",
    ],
    ingredients: [
      "2 xícaras de arroz japonês (grão curto)",
      "2 1/2 xícaras de água",
      "1/3 xícara de vinagre de arroz",
      "2 colheres de sopa de açúcar",
      "1 colher de chá de sal",
      "Folhas de alga nori",
      "200g de salmão fresco (ou outro peixe de sua preferência)",
      "1 pepino japonês",
      "1 abacate",
      "Wasabi a gosto",
      "Molho de soja (shoyu) a gosto",
      "Gengibre em conserva (opcional)",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar o arroz",
        description:
          "Lave o arroz japonês em água fria até a água ficar clara. Cozinhe o arroz com a água em fogo médio até que esteja cozido e macio. Enquanto isso, aqueça o vinagre de arroz, o açúcar e o sal em uma panela pequena até dissolver. Misture o vinagre temperado ao arroz cozido e reserve.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Cortar os ingredientes",
        description:
          "Corte o salmão em fatias finas para o nigiri ou em tiras para o maki. Descasque e corte o pepino e o abacate em tiras finas.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Montar o sushi",
        description:
          "Para o maki, coloque uma folha de alga nori sobre uma esteira de bambu. Espalhe uma camada fina de arroz sobre a alga, deixando uma borda livre. Coloque as tiras de salmão, pepino e abacate no centro. Enrole com cuidado usando a esteira de bambu. Para o nigiri, molde pequenas porções de arroz com as mãos úmidas e coloque uma fatia de salmão sobre cada uma, pressionando levemente.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Cortar e servir",
        description:
          "Corte os rolos de maki em pedaços de 2-3 cm com uma faca afiada e úmida. Sirva o sushi com wasabi, molho de soja e gengibre em conserva, se desejar.",
      },
    ],
    rating: 4.5,
  },
  {
    id: 2,
    title: "Ramen Tradicional",
    imageH:
      "https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageV:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "O ramen é um prato clássico da culinária japonesa, composto por macarrão servido em um caldo rico e aromático, acompanhado de diversos ingredientes como carne de porco, ovos marinados, cebolinha e broto de bambu. Existem diversas variações do prato, como o shoyu ramen (caldo à base de molho de soja), miso ramen (caldo com pasta de soja) e tonkotsu ramen (caldo feito de ossos de porco). Esse prato quente e reconfortante é perfeito para os dias mais frios do ano.",
    tags: ["japonês", "ramen", "sopa", "caldo", "inverno", "outono"],
    ingredients: [
      "200g de macarrão para ramen",
      "1 litro de caldo de frango ou porco",
      "2 colheres de sopa de molho de soja",
      "1 colher de sopa de pasta de miso",
      "100g de barriga de porco fatiada",
      "1 ovo cozido e marinado",
      "Cebolinha picada a gosto",
      "Broto de bambu a gosto",
      "Alga nori para decorar",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar o caldo",
        description:
          "Em uma panela grande, aqueça o caldo de frango ou porco, adicionando o molho de soja e a pasta de miso. Cozinhe em fogo médio por 15 minutos.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Cozinhar o macarrão",
        description:
          "Cozinhe o macarrão de ramen conforme as instruções da embalagem. Escorra e reserve.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Montagem",
        description:
          "Em uma tigela grande, adicione o macarrão cozido e despeje o caldo quente por cima. Acrescente as fatias de barriga de porco, o ovo marinado cortado ao meio, a cebolinha e o broto de bambu. Finalize com uma folha de nori.",
      },
    ],
    rating: 4.7,
  },
  {
    id: 3,
    title: "Mochi de Morango",
    imageH:
      "https://foodisafourletterword.com/wp-content/uploads/2021/04/Strawberry_Mochi_Recipe_for_Instant_Pot_or_Steamer.jpg",
    imageV:
      "https://www.aimadeitforyou.com/wp-content/uploads/2023/09/Ichigo-daifuku-5.jpg",
    description:
      "O Ichigo Daifuku é uma variação do tradicional mochi japonês, recheado com pasta de feijão doce (anko) e um morango inteiro. Essa sobremesa é especialmente apreciada na primavera, quando os morangos estão na sua melhor safra.",
    tags: ["japonês", "mochi", "sobremesa", "doce", "primavera"],
    ingredients: [
      "100g de farinha de arroz glutinoso",
      "50g de açúcar",
      "150ml de água",
      "4 morangos frescos",
      "100g de pasta de feijão doce (anko)",
      "Amido de milho para polvilhar",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar a massa de mochi",
        description:
          "Misture a farinha de arroz glutinoso, o açúcar e a água em uma tigela. Cozinhe no vapor ou no micro-ondas até obter uma massa pegajosa.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Modelar os mochis",
        description:
          "Polvilhe uma superfície com amido de milho e divida a massa em quatro partes. Achate cada parte e recheie com um pouco de anko e um morango inteiro.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Finalização",
        description:
          "Feche a massa ao redor do recheio e modele em formato de bolinha. Sirva fresco.",
      },
    ],
    rating: 4.6,
  },
  {
    id: 4,
    title: "Ramen de Inverno",
    imageH:
      "https://blogsakura.com.br/wp-content/uploads/2019/06/IMG_5432t2.jpg",
    imageV:
      "https://vousair.pt/wp-content/uploads/2023/06/20230522AJITAMA16241-819x1024.jpg",
    description:
      "O ramen é o conforto perfeito para os dias frios de inverno. Esta versão tradicional apresenta um caldo rico e encorpado, feito com ossos de porco cozidos por horas até liberarem todo seu sabor, combinado com macarrão artesanal al dente. Acompanhado de fatias de lombo de porco caramelizado (chashu), ovo marinado molengo, cebolinha fresca e nori, este prato aquece a alma e o corpo. O toque final de óleo de alho e pimenta shichimi traz um aroma irresistível que convida a saborear cada colherada.",
    tags: ["japonês", "ramen", "inverno", "macarrão", "comfort food"],
    ingredients: [
      "400g de macarrão para ramen",
      "1kg de ossos de porco",
      "200g de lombo de porco",
      "4 ovos",
      "2 dentes de alho",
      "1 pedaço de gengibre",
      "2 cebolas",
      "4 colheres de sopa de molho shoyu",
      "2 colheres de sopa de mirin",
      "1 colher de sopa de óleo de gergelim",
      "Algas nori",
      "Cebolinha picada",
      "Pimenta shichimi a gosto",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar o caldo",
        description:
          "Ferva os ossos de porco em água por 6-8 horas em fogo baixo, removendo as impurezas que subirem à superfície. Adicione alho, gengibre e cebola nos últimos 30 minutos.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Preparar o chashu",
        description:
          "Cozinhe o lombo de porco no molho shoyu, mirin e água por 2 horas até ficar macio. Depois de frio, corte em fatias finas.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Ovos marinados",
        description:
          "Cozinhe os ovos por 6 minutos e mergulhe em água gelada. Descasque e marine no molho do chashu por 4 horas.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Montagem",
        description:
          "Cozinhe o macarrão, coloque no caldo quente. Adicione as fatias de chashu, ovo cortado ao meio, nori e cebolinha. Finalize com óleo de gergelim e shichimi.",
      },
    ],
    rating: 4.7,
  },
  {
    id: 5,
    title: "Hiyashi Chuka",
    imageH:
      "https://www.seriouseats.com/thmb/bLULeUCLpIQqdULWbjmxuG3oWeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__06__20150529-cold-ramen-hiyashi-chuka-shao-zhong-4-899b239879484c05bff9139b0f1cd88c.jpg",
    imageV:
      "https://japan.recipetineats.com/wp-content/uploads/2017/08/Hiyashi_Chuka_0414.jpg",
    description:
      "Refrescante e vibrante, o Hiyashi Chuka é o prato ideal para os dias quentes de verão. Macarrão chinês servido gelado, acompanhado de uma variedade de ingredientes coloridos como pepino, tomate, presunto e ovo em tiras, tudo regado com um molho agridoce à base de vinagre e gergelim. A apresentação em cores vivas e a textura refrescante fazem deste prato uma verdadeira celebração do verão japonês. Tradicionalmente servido de maio a setembro, é uma opção leve mas satisfatória que combina perfeitamente com cerveja gelada.",
    tags: ["japonês", "verão", "macarrão", "refrescante", "prato frio"],
    ingredients: [
      "300g de macarrão chuka",
      "1 pepino japonês",
      "2 tomates",
      "100g de presunto cozido",
      "2 ovos",
      "1 colher de sopa de óleo de gergelim",
      "3 colheres de sopa de vinagre de arroz",
      "2 colheres de sopa de molho shoyu",
      "1 colher de sopa de açúcar",
      "1 colher de chá de mostarda",
      "Gergelim torrado",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Cozinhar o macarrão",
        description:
          "Cozinhe o macarrão conforme as instruções da embalagem. Escorra e lave com água fria para parar o cozimento. Reserve na geladeira.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Preparar os acompanhamentos",
        description:
          "Corte o pepino, tomate e presunto em tiras finas. Bata os ovos e faça uma omelete fina, depois corte em tiras.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Fazer o molho",
        description:
          "Misture vinagre, shoyu, açúcar, mostarda e óleo de gergelim até obter um molho homogêneo.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Montar o prato",
        description:
          "Distribua o macarrão gelado em tigelas, arrume os ingredientes por cima de forma decorativa. Regue com o molho e finalize com gergelim torrado.",
      },
    ],
    rating: 4.4,
  },
  {
    id: 6,
    title: "Sakura Mochi",
    imageH:
      "https://www3.nhk.or.jp/nhkworld/en/radio/cooking/update/meal_130301_l.jpg",
    imageV:
      "https://preview.redd.it/ty1v0psi2rk31.jpg?auto=webp&s=0b2d1984733218a6a6b3281462dc1a5589fa81dc",
    description:
      "O Sakura Mochi é um doce tradicional que anuncia a chegada da primavera no Japão. Feito com massa de arroz mochi cor-de-rosa delicadamente perfumada com folhas de cerejeira em conserva, envolve um recheio doce de pasta de feijão vermelho. Cada mordida revela a harmonia entre a suavidade do mochi, a doçura do anko e o sabor levemente salgado das folhas de sakura que envolvem o doce. Este wagashi é especialmente apreciado durante o hanami (a contemplação das cerejeiras em flor), simbolizando a beleza efêmera da natureza que tanto inspira a cultura japonesa.",
    tags: ["japonês", "doce", "primavera", "sakura", "mochi", "hanami"],
    ingredients: [
      "1 xícara de farinha de arroz mochigome",
      "1/4 xícara de açúcar",
      "3/4 xícara de água",
      "Corante alimentar rosa",
      "1/2 xícara de anko (pasta de feijão vermelho doce)",
      "Folhas de sakura em conserva",
      "Amido de batata para polvilhar",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar a massa",
        description:
          "Misture a farinha de arroz, açúcar e água até formar uma pasta lisa. Adicione corante rosa até obter um tom suave. Cubra e leve ao microondas por 3 minutos, mexendo a cada minuto.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Trabalhar o mochi",
        description:
          "Polvilhe uma superfície com amido de batata. Sove a massa quente até ficar maleável. Divida em porções iguais.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Montar os doces",
        description:
          "Achate cada porção, coloque uma colher de anko no centro e feche formando bolinhas. Envolva cada mochi com uma folha de sakura.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Servir",
        description:
          "Deixe descansar por 30 minutos antes de servir. Combina perfeitamente com chá verde.",
      },
    ],
    rating: 4.6,
  },
  {
    id: 7,
    title: "Oden",
    imageH: "https://sabores-new.s3.amazonaws.com/public/2024/11/oden.jpg",
    imageV: "https://www.edibleseattle.com/wp-content/uploads/2024/12/oden-recipe.jpg",
    description:
      "O oden é um prato reconfortante que marca a transição para o outono no Japão. Uma variedade de ingredientes como daikon, konnyaku, ovos cozidos e bolinhos de peixe são cozidos lentamente em um dashi aromático, criando uma refeição nutritiva que aquece nos dias mais frios. Vendido em barracas de rua e lojas de conveniência durante toda a estação, o oden tem o poder de evocar memórias nostálgicas com seus sabores profundos e reconfortantes. Cada ingrediente absorve o sabor do caldo, resultando em uma experiência culinária simples mas profundamente satisfatória que celebra os ingredientes da estação.",
    tags: ["japonês", "outono", "ensopado", "comfort food", "dashi"],
    ingredients: [
      "1 daikon grande",
      "4 ovos",
      "2 blocos de konnyaku",
      "4 bolinhos de peixe (chikuwa e hanpen)",
      "2 batatas",
      "8cm de kombu",
      "30g de katsuobushi",
      "4 colheres de sopa de shoyu",
      "2 colheres de sopa de mirin",
      "1 colher de sopa de açúcar",
      "1 colher de chá de sal",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar o dashi",
        description:
          "Ferva 2 litros de água com o kombu por 10 minutos. Adicione o katsuobushi, desligue e deixe infusionar por 10 minutos. Coe.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Preparar os ingredientes",
        description:
          "Descasque e corte o daikon em rodelas grossas. Cozinhe os ovos até ficarem duros e descasque. Corte o konnyaku em triângulos.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Cozinhar",
        description:
          "Coloque todos os ingredientes no dashi com shoyu, mirin, açúcar e sal. Cozinhe em fogo baixo por 1-2 horas.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Servir",
        description:
          "Sirva quente em tigelas individuais, garantindo que cada porção tenha variedade de ingredientes. Acompanhe com mostarda karashi.",
      },
    ],
    rating: 4.3,
  },
  {
    id: 8,
    title: "Yakitori",
    imageH: "https://i.ytimg.com/vi/VVxXbCa2ljg/maxresdefault.jpg",
    imageV: "https://www.receiteria.com.br/wp-content/uploads/espetinho-japones-de-frango.jpg",
    description:
      "Yakitori é um prato japonês clássico de espetinhos de frango grelhados sobre carvão e pincelados com um molho agridoce à base de shoyu e mirin. Comum nos festivais de verão, esse prato é perfeito para churrascos e encontros ao ar livre.",
    tags: ["japonês", "yakitori", "churrasco", "espetinho", "verão"],
    ingredients: [
      "500g de peito de frango cortado em cubos",
      "1/2 xícara de molho de soja",
      "1/4 xícara de mirin",
      "2 colheres de sopa de açúcar",
      "1 colher de sopa de saquê",
      "Cebolinha picada a gosto",
      "Espetos de bambu",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar o molho",
        description:
          "Em uma panela, misture o molho de soja, mirin, açúcar e saquê. Cozinhe em fogo baixo até reduzir levemente.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Montar os espetinhos",
        description:
          "Espete os cubos de frango nos espetos de bambu e pincele o molho por cima.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Grelhar",
        description:
          "Grelhe os espetinhos em fogo médio, virando e pincelando mais molho até ficarem dourados e caramelizados. Sirva quente.",
      },
    ],
    rating: 4.8,
  },
  {
    id: 9,
    title: "Kaki Fry",
    imageH: "https://www3.nhk.or.jp/nhkworld/en/radio/cooking/update/meal_200228_l.jpg",
    imageV: "https://www.justonecookbook.com/wp-content/uploads/2021/04/Japanese-Fried-Oysters-Kaki-Fry-2118.jpg",
    description:
      "As ostras no inverno atingem seu ápice de sabor e cremosidade, e o Kaki Fry é a forma mais deliciosa de apreciá-las. Ostras frescas são empanadas em panko (farinha de rosca japonesa) e fritas até ficarem douradas e crocantes por fora, mantendo seu interior suculento. Servidas com molho tonkatsu e uma fatia de limão, estas ostras empanadas são acompanhadas tradicionalmente por repolho finamente fatiado, que ajuda a equilibrar a riqueza do prato. Uma especialidade das regiões costeiras do Japão, perfeita para aquecer as noites frias de inverno.",
    tags: ["japonês", "frutos do mar", "inverno", "frito", "ostras"],
    ingredients: [
      "12 ostras frescas",
      "1 xícara de farinha de trigo",
      "2 ovos batidos",
      "2 xícaras de panko",
      "Óleo para fritar",
      "Repolho roxo fatiado finamente",
      "Molho tonkatsu",
      "Fatias de limão",
      "Sal e pimenta a gosto",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar as ostras",
        description:
          "Lave bem as ostras e seque com papel toalha. Tempere levemente com sal e pimenta.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Empanar",
        description:
          "Passe cada ostra na farinha, depois no ovo batido e finalmente no panko, pressionando para grudar bem.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Fritar",
        description:
          "Frite em óleo quente (180°C) por 2-3 minutos até dourar. Escorra em papel absorvente.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Servir",
        description:
          "Sirva com repolho fatiado, molho tonkatsu e limão. Acompanha bem com cerveja gelada.",
      },
    ],
    rating: 4.5,
  },
  {
    id: 10,
    title: "Dango de Três Cores",
    imageH: "https://escolaeducacao.com.br/wp-content/uploads/2022/07/Hanami-Dango.jpg",
    imageV: "https://previews.123rf.com/images/jreika/jreika1309/jreika130900176/22499818-confeitaria-japonesa-tr%C3%AAs-cores-mochi-dango-com-flor-no-fundo.jpg",
    description:
      "O mitarashi dango de três cores é um doce icônico da primavera japonesa, frequentemente apreciado durante os festivais de hanami. Estes bolinhos de arroz espetados em espetos de bambu apresentam as cores tradicionais rosa (sakura), branco (pureza) e verde (nova folhagem), simbolizando a chegada da primavera. Banhados em um delicioso molho doce de soja, estes dangos têm textura mastigável característica e um sabor que equilibra perfeitamente o doce e o salgado. Uma tradição que remonta ao período Heian, perfeita para contemplar as cerejeiras em flor.",
    tags: ["japonês", "doce", "primavera", "dango", "hanami", "sobremesa"],
    ingredients: [
      "1 xícara de farinha de arroz mochiko",
      "1/4 xícara de açúcar",
      "1/2 xícara de água morna",
      "Corante alimentar rosa e verde",
      "1/4 xícara de shoyu",
      "2 colheres de sopa de açúcar",
      "1 colher de sopa de amido de milho",
      "1/2 xícara de água",
      "Palitos de bambu",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar a massa",
        description:
          "Misture farinha de arroz, açúcar e água até formar uma massa lisa. Divida em três partes, tingindo uma de rosa, outra de verde e deixando uma branca.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Formar os dangos",
        description:
          "Faça pequenas bolinhas com cada massa. Cozinhe em água fervente até flutuarem (cerca de 3-4 minutos). Resfrie em água gelada.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Montar os espetos",
        description:
          "Espete três bolinhas (uma de cada cor) em cada palito de bambu, na ordem tradicional: rosa, branco, verde.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Preparar o molho",
        description:
          "Misture shoyu, açúcar, amido e água em uma panela. Leve ao fogo até engrossar. Pincele sobre os dangos antes de servir.",
      },
    ],
    rating: 4.6,
  },
  {
    id: 11,
    title: "Hamo no Sakamushi",
    imageH: "https://bebeloveokazu.wordpress.com/wp-content/uploads/2011/05/img_5560.jpg",
    imageV: "https://bebeloveokazu.wordpress.com/wp-content/uploads/2011/05/img_5560.jpg",
    description:
      "O Hamo (enguia-do-mar) é o ingrediente estrela do verão em Kyoto, especialmente preparado como sakamushi - cozido no vapor com sake. Esta técnica especial de corte (que pode envolver até 26 cortes por polegada) permite que os numerosos ossos pequenos da enguia se tornem comestíveis durante o cozimento. O resultado é uma carne branca e delicada, perfumada com sake e gengibre, que derrete na boca. Tradicionalmente servido em banquetes de verão, este prato refinado representa a elegância da culinária kaiseki e a sabedoria ancestral em transformar ingredientes difíceis em verdadeiras iguarias.",
    tags: ["japonês", "peixe", "verão", "kyoto", "kaiseki", "cozido no vapor"],
    ingredients: [
      "1 hamo (enguia-do-mar) de cerca de 1kg",
      "1 xícara de sake",
      "1 pedaço de gengibre (cerca de 5cm)",
      "2 colheres de sopa de shoyu",
      "1 colher de sopa de mirin",
      "1 cebolinha verde",
      "Casca de yuzu (opcional)",
      "Sal a gosto",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar o peixe",
        description:
          "Peça ao peixeiro para fazer o corte especial (bone-cutting technique) no hamo. Limpe bem e corte em porções.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Marinar",
        description:
          "Tempere o peixe com sal e deixe descansar por 15 minutos. Enxágue e seque com papel toalha.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Cozinhar no vapor",
        description:
          "Coloque o peixe em uma tigela resistente ao vapor, adicione sake, gengibre fatiado. Cozinhe no vapor por 15-20 minutos.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Finalizar",
        description:
          "Misture shoyu e mirin, regue sobre o peixe. Decore com cebolinha e yuzu. Sirva imediatamente.",
      },
    ],
    rating: 4.7,
  },
  {
    id: 12,
    title: "Sanma no Shioyaki ",
    imageH: "https://www.justonecookbook.com/wp-content/uploads/2012/10/Grilled-Sanma-III.jpg",
    imageV: "https://www.justonecookbook.com/wp-content/uploads/2024/07/image.jpeg",
    description:
      "O sanma (cavalinha-do-pacífico) é conhecido como o peixe do outono no Japão, quando está no seu pico de gordura e sabor. Preparado simplesmente com sal e grelhado inteiro, este prato celebra a essência do washoku (culinária tradicional japonesa). A pele fica crocante enquanto a carne mantém sua suculência, podendo ser acompanhada por rabanete daikon ralado, shoyu e uma rodela de limão. Tradicionalmente grelhado sobre carvão, o aroma do sanma no shioyaki é considerado um dos cheiros mais nostálgicos do outono japonês, evocando memórias de festivais locais e refeições familiares.",
    tags: ["japonês", "peixe", "outono", "grelhado", "washoku", "tradicional"],
    ingredients: [
      "2 sanma (cavalinhas) inteiros",
      "Sal grosso a gosto",
      "Rabanete daikon ralado",
      "Fatias de limão",
      "Shoyu a gosto",
      "1 limão siciliano",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar o peixe",
        description:
          "Limpe os peixes, removendo as vísceras. Lave bem e seque com papel toalha.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Salgar",
        description:
          "Salpique generosamente com sal grosso em ambos os lados. Deixe descansar por 10 minutos.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Grelhar",
        description:
          "Grelhe em fogo médio-alto por cerca de 4-5 minutos de cada lado, até a pele ficar crocante.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Servir",
        description:
          "Sirva inteiro com daikon ralado, limão e shoyu à parte. Coma com arroz branco e missoshiru.",
      },
    ],
    rating: 4.4,
  },
  {
    id: 13,
    title: "Nabe de Cogumelos",
    imageH: "https://gogonihon.com/wp-content/uploads/2023/11/Japanese-hot-pot-izakaya.jpg",
    imageV: "https://preview.redd.it/f0df59hvpolb1.png?auto=webp&s=68720948bb6daf3570e5ad1aea951fed3d3e5757",
    description:
      "Quando o outono chega ao Japão, os mercados se enchem de variedades sazonais de cogumelos, e o nabe (ensopado japonês) é a forma perfeita de celebrá-los. Esta versão vegetariana apresenta uma seleção de shiitake, enoki, maitake e shimeji, cozidos suavemente em um dashi de kombu com tofu, verduras e konnyaku. O caldo leve permite que os sabores terrosos e umami dos cogumelos brilhem, enquanto o ponzu com pimenta yuzu-kosho oferece um contraste refrescante. Servido diretamente na panela de barro donabe, este prato é uma experiência social e gastronômica que aquece o corpo e o espírito nas noites mais frias.",
    tags: ["japonês", "vegetariano", "outono", "nabe", "cogumelos", "ensopado"],
    ingredients: [
      "200g de cogumelos mistos (shiitake, enoki, maitake, shimeji)",
      "4 xícaras de dashi de kombu",
      "1 bloco de tofu firme",
      "1 pacote de konnyaku",
      "1 cebolinha grande",
      "2 colheres de sopa de shoyu",
      "1 colher de sopa de mirin",
      "1 colher de chá de sal",
      "Ponzu e yuzu-kosho para servir",
    ],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Preparar os ingredientes",
        description:
          "Limpe os cogumelos (shiitake inteiros com talo, outros separados). Corte o tofu em cubos e o konnyaku em triângulos.",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Montar o nabe",
        description:
          "Em uma panela donabe, arrume os ingredientes de forma decorativa. Adicione o dashi frio.",
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Cozinhar",
        description:
          "Leve para ferver em fogo médio. Reduza o fogo e cozinhe por 10-15 minutos. Tempere com shoyu, mirin e sal.",
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Servir",
        description:
          "Sirva na panela com ponzu e yuzu-kosho à parte. Pode-se adicionar udon no final para aproveitar o caldo.",
      },
    ],
    rating: 4.5,
  },
];
