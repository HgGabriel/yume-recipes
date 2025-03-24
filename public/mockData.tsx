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
    tags: ["japonês", "sushi", "comida japonesa", "peixe fresco"],
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
    title: "Sashimi",
    description:
      "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
    imageH:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageV:
      "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["tag1", "tag2"],
    ingredients: ["ingredient1", "ingredient2"],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Step 1",
        description: "Description 1",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Step 2",
        description: "Description 2",
      },
    ],
    rating: 4.5,
  },
  {
    id: 3,
    title: "Lámen Japonês",
    description:
      "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
    imageH:
      "https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageV:
      "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["tag1", "tag2"],
    ingredients: ["ingredient1", "ingredient2"],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Step 1",
        description: "Description 1",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Step 2",
        description: "Description 2",
      },
    ],
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sushi Tradicional",
    description:
      "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
    imageH:
      "https://images.unsplash.com/photo-1617196905100-216ffe128142?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageV:
      "https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["tag1", "tag2"],
    ingredients: ["ingredient1", "ingredient2"],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Step 1",
        description: "Description 1",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Step 2",
        description: "Description 2",
      },
    ],
    rating: 4.5,
  },
  {
    id: 5,
    title: "Sashimi",
    description:
      "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
    imageH:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageV:
      "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["tag1", "tag2"],
    ingredients: ["ingredient1", "ingredient2"],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Step 1",
        description: "Description 1",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Step 2",
        description: "Description 2",
      },
    ],
    rating: 4.5,
  },
  {
    id: 6,
    title: "Lámen Japonês",
    description:
      "Uma combinação perfeita de arroz temperado e ingredientes frescos, preparados com maestria para oferecer uma experiência autêntica da culinária japonesa. Desfrute de opções clássicas como nigiri, delicadas fatias de peixe sobre arroz, sashimi, cortes selecionados de peixe fresco, e makis, rolinhos envoltos em alga nori, recheados com peixe, frutos do mar ou vegetais.",
    imageH:
      "https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageV:
      "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["tag1", "tag2"],
    ingredients: ["ingredient1", "ingredient2"],
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Step 1",
        description: "Description 1",
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Step 2",
        description: "Description 2",
      },
    ],
    rating: 4.5,
  },
];
