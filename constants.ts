import { InfoCardData, StructuredAnalysis } from './types';
import { Users, Building2, TrendingDown, Scale, Lightbulb, Smartphone, Globe, BarChart3, GraduationCap, School, BookOpen, Laptop, Briefcase, Home, Utensils, Zap, HeartHandshake } from 'lucide-react';

type Lang = 'es' | 'en' | 'ca';

// --- DATA STRUCTURES FOR TRANSLATIONS ---

const DATA_ES: Record<string, InfoCardData[]> = {
  social: [
    {
      id: 's1',
      title: "Impacto Social",
      detail: "Los ricos son cada vez más ricos, mientras que a la clase trabajadora le cuesta mucho llegar a fin de mes y progresar.",
      icon: Users,
      imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Oxfam: Beneficios y Pobreza", url: "https://www.oxfam.org/es" }, { title: "Informe Desigualdad Mundial", url: "https://wid.world/es/" }],
      statValue: "48%",
      statLabel: "Riqueza de los más ricos",
      statPercentage: 48,
      longDescription: "La sociedad se está rompiendo en dos grupos muy separados. Antes, si trabajabas duro, podías mejorar tu vida (ascensor social), pero ahora ese ascensor parece estropeado.",
      keyPoints: ["Ricos más ricos, pobres más pobres.", "Mucha gente con ansiedad por dinero.", "Servicios públicos saturados."],
      analysis: {
        peopleImpact: "La gente vive estresada y triste porque el dinero no alcanza. Muchos sienten que, por mucho que se esfuercen, no van a tener una casa propia o una vida tranquila.",
        companyImpact: "Las empresas normales venden menos porque la gente no tiene dinero para gastar. Solo les va bien a las marcas de ultra-lujo o a las muy baratas (low-cost).",
        economicImpact: "La economía se estanca. El dinero se queda guardado en cuentas de millonarios en vez de circular en tiendas y negocios de barrio, que es lo que da vida al país.",
        measuresTaken: "Ayudas mínimas para comer o pagar la luz, y pequeñas subidas del salario mínimo.",
        measuresNeeded: "Que los que tienen muchísimo dinero paguen más impuestos para mejorar hospitales y escuelas para todos."
      }
    },
    {
      id: 's2',
      title: "Brecha Digital",
      detail: "Quien no sepa usar la Inteligencia Artificial (IA) podría ganar un 15% menos de sueldo o perder su empleo pronto.",
      icon: Smartphone,
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Foro Económico Mundial", url: "https://es.weforum.org/" }],
      statValue: "-15%",
      statLabel: "Riesgo bajada de sueldo",
      statPercentage: 15,
      longDescription: "La tecnología avanza muy rápido. Las personas que saben usar las nuevas herramientas digitales tienen ventaja, mientras que las que no, se quedan atrás.",
      keyPoints: ["Trabajos de oficina en peligro.", "Saber usar IA es vital.", "Falta formación para adultos."],
      analysis: {
        peopleImpact: "Miedo a perder el trabajo. Los jóvenes que saben de tecnología cobran más, y los mayores o con menos estudios se ven desplazados.",
        companyImpact: "Las empresas que usan tecnología ganan mucho más dinero con menos esfuerzo. Las pequeñas empresas que no pueden pagarla, cierran.",
        economicImpact: "Unas pocas empresas tecnológicas gigantes dominan todo el mercado y tienen demasiado poder.",
        measuresTaken: "Cursos gratuitos del paro (SEPE) y ayudas para poner internet en empresas (Kit Digital).",
        measuresNeeded: "Clases de tecnología gratis y obligatorias para trabajadores, pagadas por las empresas que más ganan con la IA."
      }
    },
    {
      id: 's3',
      title: "Freno Económico",
      detail: "Cuando hay mucha desigualdad, el país funciona peor y se pierde dinero porque no aprovechamos el talento de todos.",
      icon: BarChart3,
      imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Fondo Monetario Internacional", url: "https://www.imf.org/es/Home" }],
      statValue: "0.8%",
      statLabel: "Dinero perdido cada año",
      statPercentage: 25,
      longDescription: "Imagina un equipo de fútbol donde solo juegan 2 jugadores y el resto mira. Eso pasa en la economía cuando los pobres no pueden estudiar ni emprendre.",
      keyPoints: ["Menos consumo en tiendas.", "Talento joven desperdiciado.", "Crisis financieras frecuentes."],
      analysis: {
        peopleImpact: "Si naces pobre, es casi seguro que morirás pobre, tengas talento o no. Eso desanima a la gente a esforzarse.",
        companyImpact: "Tienen menos clientes. Si la mayoría de la gente solo tiene para comer, no compran muebles, ropa o viajes.",
        economicImpact: "El país crece más lento. Nos perdemos grandes médicos o ingenieros solo porque sus padres no podían pagarles la carrera.",
        measuresTaken: "Controlar que los precios no suban demasiado rápido (inflación).",
        measuresNeeded: "Invertir en la gente: buena educación y sanidad para que cualquiera con talento pueda triunfar y generar riqueza para el país."
      }
    },
    {
      id: 's4',
      title: "Impuestos Verdes",
      detail: "La idea es cobrar más impuestos a quien contamina mucho (jets privados, grandes fábricas) para pagar cosas ecológicas.",
      icon: Globe,
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
      category: 'measure',
      sourceLinks: [{ title: "Observatorio Fiscal UE", url: "https://www.taxobservatory.eu/" }],
      statValue: "Billonario",
      statLabel: "Dinero recaudable",
      statPercentage: 65,
      longDescription: "No es justo que paguemos todos igual por el cambio climático. Quien más ensucia el planeta, debería pagar más para limpiarlo.",
      keyPoints: ["Quien contamina, paga.", "Dinero para energía solar.", "Castigo al lujo contaminante."],
      analysis: {
        peopleImpact: "La gente normal sufre olas de calor y luz cara. Estos impuestos servirían para bajar el precio de la energía y mejorar el transporte público.",
        companyImpact: "Las empresas que cuidan el planeta pagarían menos impuestos. Las sucias tendrían que cambiar o pagar multas.",
        economicImpact: "Se crearían muchos empleos nuevos poniendo placas solares, arreglando casas para que guarden calor, etc.",
        measuresTaken: "Impuestos a las bolsas de plástico y al combustible.",
        measuresNeeded: "Prohibir jets privados y poner impuestos muy altos a las empresas petroleras para hacer el tren y el bus casi gratuitos."
      }
    },
    {
      id: 's5',
      title: "Renta Básica",
      detail: "Dar un dinero fijo mensual a cada persona para asegurar que nadie pase hambre y puedan estudiar o emprender.",
      icon: Lightbulb,
      imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000",
      category: 'measure',
      sourceLinks: [{ title: "Red Renta Básica", url: "https://www.redrentabasica.org/" }],
      statValue: "+22%",
      statLabel: "Más gente estudiando",
      statPercentage: 22,
      longDescription: "Es un sueldo base del Estado para todos. Así, nadie tiene miedo a quedarse en la calle y la gente puede arriesgarse a montar negocios o estudiar.",
      keyPoints: ["Fin de la pobreza extrema.", "Menos estrés por dinero.", "Más libertad para elegir trabajo."],
      analysis: {
        peopleImpact: "Tranquilidad mental. Sabes que, pase lo que pase, tendrás para comer. Puedes rechazar trabajos donde te explotan.",
        companyImpact: "La gente tendría más dinero para comprar. Los jefes tendrían que tratar mejor a los empleados para que no se vayan.",
        economicImpact: "Se acabaría la pobreza severa de golpe. Ahorraríamos mucho dinero en burocracia de gestionar mil ayudas distintas.",
        measuresTaken: "El Ingreso Mínimo Vital (IMV), pero tiene mucho papeleo y no llega a todos.",
        measuresNeeded: "Una Renta Universal automática para todos, pagada con los impuestos de las grandes fortunas y tecnológicas."
      }
    }
  ],
  education: [
    {
      id: 'e1',
      title: "Brecha Digital Escolar",
      detail: "Muchos niños no tienen ordenador ni internet rápido en casa, por lo que sacan peores notas que los demás.",
      icon: Laptop,
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Save the Children", url: "https://www.savethechildren.es/" }],
      statValue: "1 de 5",
      statLabel: "Niños sin ordenador propio",
      statPercentage: 20,
      longDescription: "Hoy en día, estudiar sin internet es casi imposible. Los deberes se mandan online. Si un niño no tiene WiFi, se queda atrás.",
      keyPoints: ["Falta de WiFi en casa.", "Padres que no saben informática.", "Desventaja en deberes."],
      analysis: {
        peopleImpact: "Frustración en los niños que no pueden seguir el ritmo. Sentimiento de inferioridad.",
        companyImpact: "En el futuro, habrá menos trabajadores preparados para puestos digitales.",
        economicImpact: "Perdemos talento tecnológico.",
        measuresTaken: "Préstamo de portátiles en algunos colegios públicos.",
        measuresNeeded: "Internet gratuito garantizado por ley para familias con estudiantes y dispositivos para todos."
      }
    },
    {
      id: 'e2',
      title: "Coste Universidad",
      detail: "Aunque hay becas, vivir fuera de casa para estudiar es carísimo. Muchos jóvenes listos no van a la universidad por dinero.",
      icon: GraduationCap,
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Ministerio Universidades", url: "https://www.universidades.gob.es/" }],
      statValue: "€5.000+",
      statLabel: "Gasto anual por hijo fuera",
      statPercentage: 60,
      longDescription: "La matrícula ha bajado un poco, pero el alquiler de un piso de estudiantes es impagable para una familia obrera.",
      keyPoints: ["Alquileres inasumibles.", "Becas que llegan tarde.", "Trabajar mientras estudias."],
      analysis: {
        peopleImpact: "Jóvenes agobiados trabajando y estudiando a la vez. Muchos abandonan.",
        companyImpact: "Faltan ingenieros y médicos porque solo estudian los que pueden pagárselo.",
        economicImpact: "Menos profesionales cualificados significa un país menos avanzado.",
        measuresTaken: "Aumento de la cuantía de las becas MEC.",
        measuresNeeded: "Residencias públicas gratuitas masivas y becas salario que cubran todo el coste de vida."
      }
    },
    {
        id: 'e3',
        title: "Escuelas Infantiles",
        detail: "Las guarderías (0-3 años) son muy caras o hay pocas plazas públicas. Esto perjudica el desarrollo temprano de los niños pobres.",
        icon: School,
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "UNICEF Educación", url: "https://www.unicef.es/" }],
        statValue: "40%",
        statLabel: "Niños sin escolarizar (0-3)",
        statPercentage: 40,
        longDescription: "Los primeros años son vitales para el cerebro. Si un niño va a una buena guardería, aprende mejor luego. Los pobres no pueden pagarla.",
        keyPoints: ["Plazas públicas insuficientes.", "Desarrollo cerebral clave.", "Conciliación familiar imposible."],
        analysis: {
          peopleImpact: "Madres que dejan de trabajar para cuidar niños. Niños que entran al cole menos preparados.",
          companyImpact: "Absentismo laboral de los padres por no tener dónde dejar a los hijos.",
          economicImpact: "Menor participación de la mujer en el trabajo.",
          measuresTaken: "Algunas comunidades han hecho gratuitas las guarderías, pero faltan plazas.",
          measuresNeeded: "Universalizar el ciclo 0-3 años: plaza pública gratuita garantizada para cada bebé."
        }
      },
      {
        id: 'e4',
        title: "Abandono Escolar",
        detail: "España es de los países donde más jóvenes dejan de estudiar pronto para trabajar en empleos malos.",
        icon: Briefcase,
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Datos Eurostat", url: "https://ec.europa.eu/eurostat" }],
        statValue: "13.9%",
        statLabel: "Tasa de abandono temprano",
        statPercentage: 30,
        longDescription: "Muchos chicos se aburren en clase o necesitan dinero ya, así que se van a trabajar de camareros o peones, sin formarse más.",
        keyPoints: ["Fracaso escolar alto.", "Empleos precarios.", "Falta de motivación."],
        analysis: {
          peopleImpact: "Condenados a trabajos mal pagados toda la vida. Mayor riesgo de paro.",
          companyImpact: "Trabajadores con poca formación técnica.",
          economicImpact: "Economía de bajo valor (turismo barato y construcción) en vez de industria potente.",
          measuresTaken: "Programas de refuerzo (PROA+) en institutos.",
          measuresNeeded: "Cambiar la forma de enseñar para que sea más práctica y motivadora. Potenciar la FP."
        }
      },
      {
        id: 'e5',
        title: "Formación Profesional",
        detail: "La FP es la mejor vía para encontrar trabajo rápido y bueno, pero sigue estando mal vista por algunas familias.",
        icon: BookOpen,
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
        category: 'measure',
        sourceLinks: [{ title: "TodoFP", url: "https://www.todofp.es/" }],
        statValue: "x3",
        statLabel: "Empleabilidad vs Sin estudios",
        statPercentage: 80,
        longDescription: "Aprender un oficio (electricista, informático, sanitario) tiene casi paro cero. Hay que darle el prestigio que merece.",
        keyPoints: ["Empleo casi seguro.", "Sueldos dignos.", "Falta de plazas en informática."],
        analysis: {
          peopleImpact: "Jóvenes que encuentran su vocación y ganan dinero pronto.",
          companyImpact: "Empresas felices porque encuentran trabajadores que saben hacer cosas prácticas.",
          economicImpact: "Mejora la industria del país.",
          measuresTaken: "Nueva Ley de FP y creación de más plazas.",
          measuresNeeded: "Más inversión en talleres y maquinaria moderna en los institutos de FP."
        }
      }
  ],
  poverty: [
    {
      id: 'p1',
      title: "Pobreza Infantil",
      detail: "Es un escándalo: 1 de cada 3 niños en nuestro país vive en casas donde falta dinero para lo básico.",
      icon: HeartHandshake,
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Alto Comisionado Pobreza", url: "https://www.comisionadopobreza.gob.es/" }],
      statValue: "28%",
      statLabel: "Niños en riesgo de pobreza",
      statPercentage: 28,
      longDescription: "No es solo pasar hambre. Es no ir al dentista, no tener gafas si las necesitas, o no ir de excursión con el cole.",
      keyPoints: ["Mala alimentación.", "Problemas de vista/boca.", "Vergüenza social."],
      analysis: {
        peopleImpact: "Niños que crecen con problemas de salud y tristeza. De mayores suelen tener peores trabajos.",
        companyImpact: "Futuros trabajadores con peor salud.",
        economicImpact: "Gasto enorme en sanidad en el futuro para curar problemas que se podían prevenir.",
        measuresTaken: "Ayuda por hijo a cargo y becas comedor.",
        measuresNeeded: "Comedor escolar gratis y universal para asegurar que todo niño come bien al menos una vez al día."
      }
    },
    {
      id: 'p2',
      title: "Trabajadores Pobres",
      detail: "Tener trabajo ya no te salva de ser pobre. Los sueldos son tan bajos y la vida tan cara que no llega.",
      icon: Briefcase,
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Informes Cáritas", url: "https://www.caritas.es/" }],
      statValue: "12%",
      statLabel: "Trabajadores bajo umbral pobreza",
      statPercentage: 12,
      longDescription: "Gente que madruga, trabaja 8 horas o más, y aun así tiene que pedir comida en la iglesia o compartir piso con 3 extraños.",
      keyPoints: ["Sueldos precarios.", "Temporalidad.", "Vivir al día."],
      analysis: {
        peopleImpact: "Agotamiento físico y mental. Sensación de que el esfuerzo no vale la pena.",
        companyImpact: "Empleados cansados, desmotivados y que rinden poco.",
        economicImpact: "Baja productividad del país.",
        measuresTaken: "Reforma laboral para hacer contratos fijos.",
        measuresNeeded: "Subir más el salario mínimo y perseguir a las empresas que explotan a la gente."
      }
    },
    {
      id: 'p3',
      title: "Vivienda Imposible",
      detail: "El precio de los alquileres ha subido muchísimo más que los sueldos. La vivienda se come todo el salario.",
      icon: Home,
      imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Observatorio Vivienda", url: "https://www.mitma.gob.es/" }],
      statValue: "50%+",
      statLabel: "Sueldo gastado en alquiler",
      statPercentage: 50,
      longDescription: "Pagar un techo es el mayor problema. O pagas el alquiler, o comes. No hay término medio para muchas familias.",
      keyPoints: ["Alquileres abusivos.", "Desahucios.", "Jóvenes sin emanciparse."],
      analysis: {
        peopleImpact: "Miedo constante a perder la casa. Jóvenes viviendo con sus padres hasta los 30 años.",
        companyImpact: "Dificultad para mover trabajadores a ciudades caras (como Madrid o Barcelona).",
        economicImpact: "Burbuja inmobiliaria que puede explotar.",
        measuresTaken: "Ley de Vivienda y bonos alquiler joven.",
        measuresNeeded: "Construir mucha vivienda pública barata y limitar por ley los precios del alquiler abusivos."
      }
    },
    {
      id: 'p4',
      title: "Pobreza Energética",
      detail: "Pasar frío en invierno porque no puedes pagar la calefacción o la luz. Afecta a la salud y al estudio.",
      icon: Zap,
      imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Cruz Roja Energía", url: "https://www2.cruzroja.es/" }],
      statValue: "4.5M",
      statLabel: "Personas con frío en casa",
      statPercentage: 15,
      longDescription: "Elegir entre encender la estufa o comprar carne. Esa es la realidad de muchos ancianos y familias.",
      keyPoints: ["Casas mal aisladas.", "Facturas de luz caras.", "Enfermedades respiratorias."],
      analysis: {
        peopleImpact: "Bronquitis, artrosis y malestar general por el frío y la humedad.",
        companyImpact: "Las eléctricas ganan mucho, pero la gente gasta menos en otras cosas.",
        economicImpact: "Costes sanitarios por enfermedades causadas por el frío.",
        measuresTaken: "Bono Social Eléctrico (descuento en la factura).",
        measuresNeeded: "Rehabilitar las casas viejas para que guarden el calor gratis y prohibir cortar la luz a vulnerables."
      }
    },
    {
      id: 'p5',
      title: "Alimentación",
      detail: "Comer sano (fruta, pescado) es caro. La gente pobre se ve obligada a comer comida procesada barata.",
      icon: Utensils,
      imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
      category: 'impact',
      sourceLinks: [{ title: "Bancos de Alimentos", url: "https://www.fesbal.org.es/" }],
      statValue: "+15%",
      statLabel: "Subida precio cesta compra",
      statPercentage: 15,
      longDescription: "La inflación ha disparat el precio del aceite, la fruta y la carne. Las dietas pobres causan obesidad.",
      keyPoints: ["Comida basura barata.", "Obesidad infantil.", "Colas del hambre."],
      analysis: {
        peopleImpact: "Mala salud, obesidad y diabetes en barrios pobres.",
        companyImpact: "Los supermercados ganan, pero los pequeños agricultores sufren.",
        economicImpact: "Gasto sanitario futuro por mala alimentación.",
        measuresTaken: "Bajada del IVA en alimentos básicos.",
        measuresNeeded: "Controlar los precios de los alimentos básicos para que nadie se lucre con el hambre."
      }
    }
  ]
};

const DATA_EN: Record<string, InfoCardData[]> = {
    social: [
      {
        id: 's1',
        title: "Social Impact",
        detail: "The rich are getting richer, while the working class struggles to make ends meet and move up.",
        icon: Users,
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Oxfam: Profit & Poverty", url: "https://www.oxfam.org/en" }, { title: "World Inequality Report", url: "https://wid.world/" }],
        statValue: "48%",
        statLabel: "Wealth of the richest",
        statPercentage: 48,
        longDescription: "Society is breaking into two very separate groups. Before, if you worked hard, you could improve your life (social elevator), but now that elevator seems broken.",
        keyPoints: ["Rich get richer, poor get poorer.", "High financial anxiety.", "Saturated public services."],
        analysis: {
          peopleImpact: "People live stressed and sad because money isn't enough. Many feel that no matter how hard they try, they won't own a home or have a peaceful life.",
          companyImpact: "Standard businesses sell less because people have no money to spend. Only ultra-luxury or low-cost brands thrive.",
          economicImpact: "The economy stagnates. Money stays in millionaire accounts instead of circulating in local shops and businesses, which brings life to the country.",
          measuresTaken: "Minimal aid for food or bills, and small minimum wage increases.",
          measuresNeeded: "The ultra-wealthy must pay more taxes to improve hospitals and schools for everyone."
        }
      },
      // ... (Continuing with simplified EN translation for other items)
      {
        id: 's2',
        title: "Digital Divide",
        detail: "Those who don't know how to use AI could earn 15% less or lose their job soon.",
        icon: Smartphone,
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "World Economic Forum", url: "https://www.weforum.org/" }],
        statValue: "-15%",
        statLabel: "Salary risk",
        statPercentage: 15,
        longDescription: "Technology moves fast. People who know how to use new digital tools have an advantage, while those who don't are left behind.",
        keyPoints: ["Office jobs at risk.", "AI skills are vital.", "Lack of adult training."],
        analysis: {
          peopleImpact: "Fear of losing jobs. Tech-savvy youth earn more, while older or less educated workers are displaced.",
          companyImpact: "Tech-using companies earn much more with less effort. Small businesses that can't afford it close down.",
          economicImpact: "A few giant tech companies dominate the entire market and have too much power.",
          measuresTaken: "Free unemployment courses and aid for business internet.",
          measuresNeeded: "Free, mandatory tech classes for workers, funded by companies profiting most from AI."
        }
      },
      {
        id: 's3',
        title: "Economic Brake",
        detail: "When there is high inequality, the country functions worse and money is lost because we don't use everyone's talent.",
        icon: BarChart3,
        imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "IMF", url: "https://www.imf.org/en/Home" }],
        statValue: "0.8%",
        statLabel: "Money lost per year",
        statPercentage: 25,
        longDescription: "Imagine a soccer team where only 2 players play and the rest watch. That happens in the economy when the poor can't study or start businesses.",
        keyPoints: ["Less consumption in stores.", "Wasted young talent.", "Frequent financial crises."],
        analysis: {
          peopleImpact: "If you're born poor, you'll likely die poor, talent or not. This discourages effort.",
          companyImpact: "Fewer customers. If most people only have enough for food, they don't buy furniture, clothes, or trips.",
          economicImpact: "The country grows slower. We miss out on great doctors or engineers just because their parents couldn't afford college.",
          measuresTaken: "Controlling price increases (inflation).",
          measuresNeeded: "Invest in people: good education and health so anyone with talent can succeed and generate wealth."
        }
      },
      {
        id: 's4',
        title: "Green Taxes",
        detail: "The idea is to tax heavy polluters (private jets, big factories) more to pay for eco-friendly things.",
        icon: Globe,
        imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
        category: 'measure',
        sourceLinks: [{ title: "EU Tax Observatory", url: "https://www.taxobservatory.eu/" }],
        statValue: "Billions",
        statLabel: "Revenue potential",
        statPercentage: 65,
        longDescription: "It's not fair we all pay the same for climate change. Polluters should pay to clean it up.",
        keyPoints: ["Polluter pays.", "Money for solar energy.", "Tax on polluting luxury."],
        analysis: {
          peopleImpact: "Normal people suffer heatwaves and expensive energy. These taxes would lower energy prices and improve public transport.",
          companyImpact: "Eco-friendly companies pay less tax. Dirty ones must change or pay fines.",
          economicImpact: "Many new jobs created installing solar panels, insulating homes, etc.",
          measuresTaken: "Taxes on plastic bags and fuel.",
          measuresNeeded: "Ban private jets and tax oil companies heavily to make trains and buses almost free."
        }
      },
      {
        id: 's5',
        title: "Basic Income",
        detail: "Giving a fixed monthly amount to everyone to ensure no one goes hungry and can study or start a business.",
        icon: Lightbulb,
        imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000",
        category: 'measure',
        sourceLinks: [{ title: "Basic Income Network", url: "https://basicincome.org/" }],
        statValue: "+22%",
        statLabel: "More people studying",
        statPercentage: 22,
        longDescription: "A state base salary for all. No one fears homelessness, and people can take risks to start businesses or study.",
        keyPoints: ["End extreme poverty.", "Less money stress.", "Freedom to choose jobs."],
        analysis: {
          peopleImpact: "Mental peace. Knowing you'll eat no matter what. You can reject exploitative jobs.",
          companyImpact: "People would have more money to buy. Bosses would treat employees better so they don't leave.",
          economicImpact: "Severe poverty ends instantly. Huge savings on bureaucracy managing varied aid.",
          measuresTaken: "Minimum Vital Income, but it has lots of paperwork and doesn't reach everyone.",
          measuresNeeded: "Automatic Universal Rent for all, paid by taxes on large fortunes and tech."
        }
      }
    ],
    education: [
      {
        id: 'e1',
        title: "School Digital Divide",
        detail: "Many kids lack computers or fast internet at home, leading to worse grades than others.",
        icon: Laptop,
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Save the Children", url: "https://www.savethechildren.net/" }],
        statValue: "1 in 5",
        statLabel: "Kids without own PC",
        statPercentage: 20,
        longDescription: "Studying without internet is nearly impossible today. Homework is online. Without WiFi, kids fall behind.",
        keyPoints: ["No home WiFi.", "Parents lack tech skills.", "Homework disadvantage."],
        analysis: {
          peopleImpact: "Frustration in kids who can't keep up. Feeling inferior.",
          companyImpact: "Fewer prepared workers for digital jobs in the future.",
          economicImpact: "Loss of tech talent.",
          measuresTaken: "Laptop loans in some public schools.",
          measuresNeeded: "Free internet guaranteed by law for student families and devices for all."
        }
      },
      {
        id: 'e2',
        title: "University Cost",
        detail: "Even with scholarships, living away for college is expensive. Many bright youths don't go due to money.",
        icon: GraduationCap,
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "University Ministry", url: "https://www.universidades.gob.es/" }],
        statValue: "€5,000+",
        statLabel: "Annual cost away from home",
        statPercentage: 60,
        longDescription: "Tuition is lower, but rent for students is unaffordable for working families.",
        keyPoints: ["Unaffordable rent.", "Late scholarships.", "Working while studying."],
        analysis: {
          peopleImpact: "Stressed youth working and studying. Many drop out.",
          companyImpact: "Shortage of engineers and doctors because only the wealthy study.",
          economicImpact: "Fewer qualified professionals mean a less advanced country.",
          measuresTaken: "Increased scholarship amounts.",
          measuresNeeded: "Massive free public residences and salary-scholarships covering all living costs."
        }
      },
      {
        id: 'e3',
        title: "Nursery Schools",
        detail: "Daycares (0-3 years) are expensive or lack public spots. This hurts poor children's early development.",
        icon: School,
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "UNICEF Education", url: "https://www.unicef.org/" }],
        statValue: "40%",
        statLabel: "Kids out of school (0-3)",
        statPercentage: 40,
        longDescription: "Early years are vital for the brain. Good daycare leads to better learning later. The poor can't afford it.",
        keyPoints: ["Not enough public spots.", "Key brain development.", "Family balance impossible."],
        analysis: {
          peopleImpact: "Mothers stop working to care for kids. Kids enter school less prepared.",
          companyImpact: "Parental absenteeism due to childcare issues.",
          economicImpact: "Lower female workforce participation.",
          measuresTaken: "Some regions made daycares free, but spots are lacking.",
          measuresNeeded: "Universal 0-3 cycle: guaranteed free public spot for every baby."
        }
      },
      {
        id: 'e4',
        title: "School Dropout",
        detail: "Spain has high rates of youth leaving school early for bad jobs.",
        icon: Briefcase,
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Eurostat Data", url: "https://ec.europa.eu/eurostat" }],
        statValue: "13.9%",
        statLabel: "Early dropout rate",
        statPercentage: 30,
        longDescription: "Many kids get bored or need money, so they work as waiters or laborers without further training.",
        keyPoints: ["High school failure.", "Precarious jobs.", "Lack of motivation."],
        analysis: {
          peopleImpact: "Condemned to low-wage jobs for life. Higher unemployment risk.",
          companyImpact: "Workers with little technical training.",
          economicImpact: "Low-value economy (cheap tourism/construction) instead of strong industry.",
          measuresTaken: "Reinforcement programs in schools.",
          measuresNeeded: "Change teaching methods to be practical and motivating. Boost Vocational Training."
        }
      },
      {
        id: 'e5',
        title: "Vocational Training",
        detail: "Vocational Training is the best way to find good work fast, but some families still look down on it.",
        icon: BookOpen,
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
        category: 'measure',
        sourceLinks: [{ title: "TodoFP", url: "https://www.todofp.es/" }],
        statValue: "x3",
        statLabel: "Employability vs No studies",
        statPercentage: 80,
        longDescription: "Learning a trade (electrician, IT, health) has near-zero unemployment. It needs respect.",
        keyPoints: ["Secure employment.", "Decent wages.", "Lack of IT spots."],
        analysis: {
          peopleImpact: "Youth finding vocation and earning money soon.",
          companyImpact: "Happy companies finding skilled practical workers.",
          economicImpact: "Improves country's industry.",
          measuresTaken: "New Vocational Law and more spots.",
          measuresNeeded: "More investment in modern workshops and machinery in schools."
        }
      }
    ],
    poverty: [
      {
        id: 'p1',
        title: "Child Poverty",
        detail: "It's a scandal: 1 in 3 kids live in homes lacking money for basics.",
        icon: HeartHandshake,
        imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "High Comm. Poverty", url: "https://www.comisionadopobreza.gob.es/" }],
        statValue: "28%",
        statLabel: "Kids at poverty risk",
        statPercentage: 28,
        longDescription: "Not just hunger. It's no dentist, no glasses, no school trips.",
        keyPoints: ["Poor diet.", "Vision/dental issues.", "Social shame."],
        analysis: {
          peopleImpact: "Kids grow up with health issues and sadness. Often get worse jobs later.",
          companyImpact: "Future workers with worse health.",
          economicImpact: "Huge future health costs for preventable issues.",
          measuresTaken: "Child aid and lunch scholarships.",
          measuresNeeded: "Free universal school lunch to ensure every kid eats well once a day."
        }
      },
      {
        id: 'p2',
        title: "Working Poor",
        detail: "Having a job doesn't save you from poverty. Wages are too low and life too expensive.",
        icon: Briefcase,
        imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Caritas Reports", url: "https://www.caritas.es/" }],
        statValue: "12%",
        statLabel: "Workers below poverty line",
        statPercentage: 12,
        longDescription: "People working 8+ hours and still needing food banks or sharing flats with strangers.",
        keyPoints: ["Precarious wages.", "Temporary jobs.", "Living day to day."],
        analysis: {
          peopleImpact: "Physical/mental exhaustion. Feeling effort is useless.",
          companyImpact: "Tired, unmotivated employees performing poorly.",
          economicImpact: "Low country productivity.",
          measuresTaken: "Labor reform for permanent contracts.",
          measuresNeeded: "Raise minimum wage further and prosecute exploitative companies."
        }
      },
      {
        id: 'p3',
        title: "Impossible Housing",
        detail: "Rents rose much more than wages. Housing eats the whole salary.",
        icon: Home,
        imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Housing Observatory", url: "https://www.mitma.gob.es/" }],
        statValue: "50%+",
        statLabel: "Salary spent on rent",
        statPercentage: 50,
        longDescription: "Paying for a roof is the biggest problem. Pay rent or eat. No middle ground.",
        keyPoints: ["Abusive rents.", "Evictions.", "Youth can't move out."],
        analysis: {
          peopleImpact: "Constant fear of losing home. Youth living with parents until 30.",
          companyImpact: "Hard to move workers to expensive cities.",
          economicImpact: "Real estate bubble risk.",
          measuresTaken: "Housing Law and youth rent bonds.",
          measuresNeeded: "Build massive cheap public housing and limit abusive rents by law."
        }
      },
      {
        id: 'p4',
        title: "Energy Poverty",
        detail: "Being cold in winter because you can't pay heat or light. Affects health and study.",
        icon: Zap,
        imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Red Cross Energy", url: "https://www2.cruzroja.es/" }],
        statValue: "4.5M",
        statLabel: "People cold at home",
        statPercentage: 15,
        longDescription: "Choosing between heat or meat. Reality for many elderly and families.",
        keyPoints: ["Poorly insulated homes.", "Expensive bills.", "Respiratory illness."],
        analysis: {
          peopleImpact: "Bronchitis, arthritis, discomfort from cold/damp.",
          companyImpact: "Electric companies profit, people spend less elsewhere.",
          economicImpact: "Health costs from cold-related illness.",
          measuresTaken: "Social Electric Bond (bill discount).",
          measuresNeeded: "Rehab old homes for warmth and ban cutoffs for vulnerable."
        }
      },
      {
        id: 'p5',
        title: "Nutrition",
        detail: "Healthy food (fruit, fish) is expensive. Poor people are forced to eat cheap processed food.",
        icon: Utensils,
        imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Food Banks", url: "https://www.fesbal.org.es/" }],
        statValue: "+15%",
        statLabel: "Grocery price hike",
        statPercentage: 15,
        longDescription: "Inflation spiked oil, fruit, meat prices. Poor diets cause obesity.",
        keyPoints: ["Cheap junk food.", "Child obesity.", "Hunger queues."],
        analysis: {
          peopleImpact: "Poor health, obesity, diabetes in poor areas.",
          companyImpact: "Supermarkets profit, small farmers suffer.",
          economicImpact: "Future health costs due to bad diet.",
          measuresTaken: "VAT cut on basic foods.",
          measuresNeeded: "Control basic food prices so no one profits from hunger."
        }
      }
    ]
};

const DATA_CA: Record<string, InfoCardData[]> = {
    social: [
      {
        id: 's1',
        title: "Impacte Social",
        detail: "Els rics són cada cop més rics, mentre la classe treballadora pateix per arribar a final de mes i progressar.",
        icon: Users,
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Oxfam: Beneficis i Pobresa", url: "https://www.oxfam.org/es" }, { title: "Informe Desigualtat Mundial", url: "https://wid.world/es/" }],
        statValue: "48%",
        statLabel: "Riquesa dels més rics",
        statPercentage: 48,
        longDescription: "La societat s'està trencant en dos grups. Abans, si treballaves dur, podies millorar la teva vida (ascensor social), però ara sembla espatllat.",
        keyPoints: ["Rics més rics, pobres més pobres.", "Ansietat financera.", "Serveis públics saturats."],
        analysis: {
          peopleImpact: "La gent viu estressada i trista perquè els diners no arriben. Molts senten que no tindran mai casa pròpia.",
          companyImpact: "Les empreses normals venen menys perquè la gent no té diners. Només va bé al luxe o al low-cost.",
          economicImpact: "L'economia s'estanca. Els diners es queden en comptes de milionaris en lloc de circular a les botigues del barri.",
          measuresTaken: "Ajuts mínims per menjar o llum, i petites pujades del salari mínim.",
          measuresNeeded: "Que les grans fortunes paguin més impostos per millorar hospitals i escoles per a tothom."
        }
      },
      {
        id: 's2',
        title: "Bretxa Digital",
        detail: "Qui no sàpiga fer servir la IA podria guanyar un 15% menys o perdre la feina aviat.",
        icon: Smartphone,
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Fòrum Econòmic Mundial", url: "https://es.weforum.org/" }],
        statValue: "-15%",
        statLabel: "Risc baixada sou",
        statPercentage: 15,
        longDescription: "La tecnologia avança ràpid. Qui sap usar les noves eines digitals té avantatge, la resta es queda enrere.",
        keyPoints: ["Feines d'oficina en perill.", "Saber IA és vital.", "Falta formació adults."],
        analysis: {
          peopleImpact: "Por a perdre la feina. Els joves tecnològics cobren més, els grans es veuen desplaçats.",
          companyImpact: "Les empreses tecnològiques guanyen molt més amb menys esforç. Les petites tanquen.",
          economicImpact: "Poques empreses gegants dominen tot el mercat i tenen massa poder.",
          measuresTaken: "Cursos gratuïts del SEPE i Kit Digital.",
          measuresNeeded: "Classes de tecnologia gratis i obligatòries per a treballadors, pagades per qui més guanya amb la IA."
        }
      },
      {
        id: 's3',
        title: "Fre Econòmic",
        detail: "Amb molta desigualtat, el país funciona pitjor i es perden diners perquè no aprofitem el talent de tots.",
        icon: BarChart3,
        imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Fons Monetari Internacional", url: "https://www.imf.org/es/Home" }],
        statValue: "0.8%",
        statLabel: "Diners perduts l'any",
        statPercentage: 25,
        longDescription: "Imagina un equip de futbol on només juguen 2 i la resta mira. Això passa quan els pobres no poden estudiar ni emprendre.",
        keyPoints: ["Menys consum a botigues.", "Talent jove desaprofitat.", "Crisis freqüents."],
        analysis: {
          peopleImpact: "Si neixes pobre, segurament moriràs pobre, tinguis talent o no. Això desanima.",
          companyImpact: "Tenen menys clients. Si la gent només té per menjar, no compren mobles o viatges.",
          economicImpact: "El país creix lent. Ens perdem grans metges o enginyers perquè els pares no podien pagar la carrera.",
          measuresTaken: "Controlar la inflació.",
          measuresNeeded: "Invertir en la gent: bona educació i sanitat perquè qualsevol amb talent pugui triomfar."
        }
      },
      {
        id: 's4',
        title: "Impostos Verds",
        detail: "La idea és cobrar més a qui contamina molt (jets privats, grans fàbriques) per pagar coses ecològiques.",
        icon: Globe,
        imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
        category: 'measure',
        sourceLinks: [{ title: "Observatori Fiscal UE", url: "https://www.taxobservatory.eu/" }],
        statValue: "Bilions",
        statLabel: "Diners recaptables",
        statPercentage: 65,
        longDescription: "No és just pagar tots igual pel canvi climàtic. Qui més embruta, hauria de pagar més per netejar.",
        keyPoints: ["Qui contamina, paga.", "Diners per energia solar.", "Càstig al luxe contaminant."],
        analysis: {
          peopleImpact: "La gent pateix calor i llum cara. Aquests impostos baixarien el preu de l'energia i millorarien el transport.",
          companyImpact: "Les empreses netes pagarien menys. Les brutes haurien de canviar o pagar multes.",
          economicImpact: "Es crearien moltes feines posant plaques solars, aïllant cases, etc.",
          measuresTaken: "Impostos a bosses plàstic i combustible.",
          measuresNeeded: "Prohibir jets privats i impostos alts a petrolieres per fer tren i bus gairebé gratis."
        }
      },
      {
        id: 's5',
        title: "Renda Bàsica",
        detail: "Donar diners fixos mensuals a tothom per assegurar que ningú passi gana i puguin estudiar o emprendre.",
        icon: Lightbulb,
        imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000",
        category: 'measure',
        sourceLinks: [{ title: "Xarxa Renda Bàsica", url: "https://www.redrentabasica.org/" }],
        statValue: "+22%",
        statLabel: "Més gent estudiant",
        statPercentage: 22,
        longDescription: "Un sou base de l'Estat per a tots. Així ningú té por de quedar al carrer i la gent pot arriscar-se.",
        keyPoints: ["Fi pobresa extrema.", "Menys estrès.", "Més llibertat laboral."],
        analysis: {
          peopleImpact: "Tranquil·litat mental. Saps que menjaràs. Pots rebutjar feines on t'exploten.",
          companyImpact: "La gent tindria més diners per comprar. Els caps tractarien millor els empleats.",
          economicImpact: "S'acabaria la pobresa severa de cop. Estalvi en burocràcia d'ajuts.",
          measuresTaken: "L'Ingrés Mínim Vital (IMV), però té molta paperassa.",
          measuresNeeded: "Una Renda Universal automàtica, pagada amb impostos a grans fortunes."
        }
      }
    ],
    education: [
      {
        id: 'e1',
        title: "Bretxa Digital Escolar",
        detail: "Molts nens no tenen ordinador ni internet ràpid a casa, i treuen pitjors notes.",
        icon: Laptop,
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Save the Children", url: "https://www.savethechildren.es/" }],
        statValue: "1 de 5",
        statLabel: "Nens sense PC propi",
        statPercentage: 20,
        longDescription: "Estudiar sense internet és impossible avui. Els deures són online. Sense WiFi, et quedes enrere.",
        keyPoints: ["Sense WiFi a casa.", "Pares sense saber informàtica.", "Desavantatge deures."],
        analysis: {
          peopleImpact: "Frustració en nens que no poden seguir el ritme. Sentiment d'inferioritat.",
          companyImpact: "Menys treballadors preparats per a llocs digitals en el futur.",
          economicImpact: "Perdem talent tecnològic.",
          measuresTaken: "Préstec de portàtils a escoles públiques.",
          measuresNeeded: "Internet gratuït garantit per llei per a estudiants i dispositius per a tothom."
        }
      },
      {
        id: 'e2',
        title: "Cost Universitat",
        detail: "Encara que hi ha beques, viure fora per estudiar és caríssim. Molts joves llestos no hi van per diners.",
        icon: GraduationCap,
        imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Ministeri Universitats", url: "https://www.universidades.gob.es/" }],
        statValue: "€5.000+",
        statLabel: "Cost anual fora casa",
        statPercentage: 60,
        longDescription: "La matrícula ha baixat, però el lloguer és impagable per a una família obrera.",
        keyPoints: ["Lloguers inassumibles.", "Beques arriben tard.", "Treballar mentre estudies."],
        analysis: {
          peopleImpact: "Joves ofegats treballant i estudiant. Molts abandonen.",
          companyImpact: "Falten enginyers i metges perquè només estudien els que poden pagar-ho.",
          economicImpact: "Menys professionals qualificats vol dir un país menys avançat.",
          measuresTaken: "Augment quantia beques MEC.",
          measuresNeeded: "Residències públiques gratuïtes massives i beques salari que cobreixin el cost de vida."
        }
      },
      {
        id: 'e3',
        title: "Escoles Bressol",
        detail: "Les llars d'infants (0-3 anys) són cares o hi ha poques places. Això perjudica el desenvolupament dels nens pobres.",
        icon: School,
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "UNICEF Educació", url: "https://www.unicef.es/" }],
        statValue: "40%",
        statLabel: "Nens sense escolaritzar (0-3)",
        statPercentage: 40,
        longDescription: "Els primers anys són vitals pel cervell. Una bona llar d'infants ajuda a aprendre millor. Els pobres no poden pagar-la.",
        keyPoints: ["Places públiques insuficients.", "Desenvolupament clau.", "Conciliació impossible."],
        analysis: {
          peopleImpact: "Mares deixen de treballar per cuidar nens. Nens entren a l'escola menys preparats.",
          companyImpact: "Absentisme laboral de pares per no tenir on deixar fills.",
          economicImpact: "Menor participació dona al treball.",
          measuresTaken: "Algunes comunitats han fet gratuïtes les llars d'infants, però falten places.",
          measuresNeeded: "Universalitzar cicle 0-3: plaça pública gratuïta garantida."
        }
      },
      {
        id: 'e4',
        title: "Abandonament Escolar",
        detail: "Som dels països on més joves deixen d'estudiar aviat per treballar en feines dolentes.",
        icon: Briefcase,
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Dades Eurostat", url: "https://ec.europa.eu/eurostat" }],
        statValue: "13.9%",
        statLabel: "Taxa abandonament",
        statPercentage: 30,
        longDescription: "Molts nois s'avorreixen o necessiten diners ja, i van a treballar de cambrers o peons.",
        keyPoints: ["Fracàs escolar alt.", "Feines precàries.", "Falta motivació."],
        analysis: {
          peopleImpact: "Condemnats a feines mal pagades tota la vida. Risc d'atur.",
          companyImpact: "Treballadors amb poca formació tècnica.",
          economicImpact: "Economia de baix valor (turisme barat i construcció).",
          measuresTaken: "Programes de reforç (PROA+).",
          measuresNeeded: "Canviar la manera d'ensenyar perquè sigui més pràctica. Potenciar la FP."
        }
      },
      {
        id: 'e5',
        title: "Formació Professional",
        detail: "La FP és la millor via per trobar feina ràpid i bona, però està mal vista per algunes famílies.",
        icon: BookOpen,
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
        category: 'measure',
        sourceLinks: [{ title: "TotFP", url: "https://www.todofp.es/" }],
        statValue: "x3",
        statLabel: "Ocupabilitat vs Sense estudis",
        statPercentage: 80,
        longDescription: "Aprendre un ofici (electricista, informàtic, sanitari) té atur gairebé zero. Cal donar-li prestigi.",
        keyPoints: ["Feina segura.", "Sous dignes.", "Falta places informàtica."],
        analysis: {
          peopleImpact: "Joves que troben vocació i guanyen diners aviat.",
          companyImpact: "Empreses felices perquè troben treballadors pràctics.",
          economicImpact: "Millora la indústria del país.",
          measuresTaken: "Nova Llei FP i més places.",
          measuresNeeded: "Més inversió en tallers i maquinària moderna als instituts."
        }
      }
    ],
    poverty: [
      {
        id: 'p1',
        title: "Pobresa Infantil",
        detail: "És un escàndol: 1 de cada 3 nens al nostre país vive a cases on falten diners pel bàsic.",
        icon: HeartHandshake,
        imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Alt Comissionat Pobresa", url: "https://www.comisionadopobreza.gob.es/" }],
        statValue: "28%",
        statLabel: "Nens risc pobresa",
        statPercentage: 28,
        longDescription: "No és només gana. És no anar al dentista, no tenir ulleres, o no anar d'excursió.",
        keyPoints: ["Mala alimentació.", "Problemes vista/boca.", "Vergonya social."],
        analysis: {
          peopleImpact: "Nens que creixen amb problemes de salut i tristor. De grans solen tenir pitjors feines.",
          companyImpact: "Futurs treballadors amb pitjor salut.",
          economicImpact: "Despesa enorme en sanitat futura per curar problemes prevenibles.",
          measuresTaken: "Ajut per fill i beques menjador.",
          measuresNeeded: "Menjador escolar gratis i universal per assegurar un àpat bo al dia."
        }
      },
      {
        id: 'p2',
        title: "Treballadors Pobres",
        detail: "Tenir feina ja no et salva de ser pobre. Els sous són baixos i la vida cara.",
        icon: Briefcase,
        imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Informes Càritas", url: "https://www.caritas.es/" }],
        statValue: "12%",
        statLabel: "Treballadors sota llindar",
        statPercentage: 12,
        longDescription: "Gent que treballa 8 hores i ha de demanar menjar o compartir pis amb 3 desconeguts.",
        keyPoints: ["Sous precaris.", "Temporalitat.", "Viure al dia."],
        analysis: {
          peopleImpact: "Esgotament físic i mental. Sensació que l'esforç no val la pena.",
          companyImpact: "Empleats cansats, desmotivats i que rendeixen poc.",
          economicImpact: "Baixa productivitat del país.",
          measuresTaken: "Reforma laboral contractes fixos.",
          measuresNeeded: "Pujar més el salari mínim i perseguir l'explotació."
        }
      },
      {
        id: 'p3',
        title: "Habitatge Impossible",
        detail: "El lloguer ha pujat molt més que els sous. La casa es menja tot el salari.",
        icon: Home,
        imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Observatori Habitatge", url: "https://www.mitma.gob.es/" }],
        statValue: "50%+",
        statLabel: "Sou gastat en lloguer",
        statPercentage: 50,
        longDescription: "Pagar un sostre és el gran problema. O pagues o menges.",
        keyPoints: ["Lloguers abusius.", "Desnonaments.", "Joves sense marxar de casa."],
        analysis: {
          peopleImpact: "Por a perdre la casa. Joves vivint amb pares fins als 30 anys.",
          companyImpact: "Dificultat per moure treballadors a ciutats cares.",
          economicImpact: "Bombolla immobiliària.",
          measuresTaken: "Llei Habitatge i bons lloguer.",
          measuresNeeded: "Construir molt habitatge públic barat i limitar preus lloguer per llei."
        }
      },
      {
        id: 'p4',
        title: "Pobresa Energètica",
        detail: "Passar fred a l'hivern per no poder pagar calefacció. Afecta salut i estudi.",
        icon: Zap,
        imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Creu Roja Energia", url: "https://www2.cruzroja.es/" }],
        statValue: "4.5M",
        statLabel: "Persones amb fred",
        statPercentage: 15,
        longDescription: "Triar entre estufa o carn. Realitat de molts avis i famílies.",
        keyPoints: ["Cases mal aïllades.", "Llum cara.", "Malalties respiratòries."],
        analysis: {
          peopleImpact: "Bronquitis, artrosi i malestar pel fred i humitat.",
          companyImpact: "Les elèctriques guanyen, la gent gasta menys en altres coses.",
          economicImpact: "Costos sanitaris pel fred.",
          measuresTaken: "Bo Social Elèctric.",
          measuresNeeded: "Rehabilitar cases velles gratis i prohibir tallar la llum a vulnerables."
        }
      },
      {
        id: 'p5',
        title: "Alimentació",
        detail: "Menjar sa (fruita, peix) és car. Els pobres mengen processats barats.",
        icon: Utensils,
        imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
        category: 'impact',
        sourceLinks: [{ title: "Bancs d'Aliments", url: "https://www.fesbal.org.es/" }],
        statValue: "+15%",
        statLabel: "Pujada preu cistella",
        statPercentage: 15,
        longDescription: "La inflació ha disparat oli, fruita i carn. Les dietes pobres causen obesitat.",
        keyPoints: ["Menjar escombraries barat.", "Obesitat infantil.", "Cues de la gana."],
        analysis: {
          peopleImpact: "Mala salut, obesitat i diabetis en barris pobres.",
          companyImpact: "Els supermercats guanyen, els pagesos pateixen.",
          economicImpact: "Despesa sanitària futura per mala alimentació.",
          measuresTaken: "Baixada IVA aliments.",
          measuresNeeded: "Controlar preus bàsics perquè ningú es lucri amb la gana."
        }
      }
    ]
};

// --- UI TEXT TRANSLATIONS ---

export const UI_TEXT = {
  es: {
    reportTitle: "Informe 2025",
    socialTitle: "Desigualdad Social",
    educationTitle: "Acceso a Educación",
    povertyTitle: "Pobreza y Carencia",
    navTitle: "Navegación",
    clickToExpand: "Click para expandir",
    problemDetected: "Problema Detectado",
    possibleSolution: "Posible Solución",
    dataSource: "Fuente del Dato",
    deepDive: "A fondo",
    dimensions: "Dimensiones",
    solutions: "Soluciones",
    people: "Personas",
    companies: "Empresas",
    economy: "Economía",
    done: "Se ha hecho",
    needed: "Debería hacerse",
    socialShort: "Social",
    eduShort: "Edu",
    povertyShort: "Pobreza"
  },
  en: {
    reportTitle: "2025 Report",
    socialTitle: "Social Inequality",
    educationTitle: "Access to Education",
    povertyTitle: "Poverty & Deprivation",
    navTitle: "Navigation",
    clickToExpand: "Click to expand",
    problemDetected: "Problem Detected",
    possibleSolution: "Possible Solution",
    dataSource: "Data Source",
    deepDive: "Deep Dive",
    dimensions: "Dimensions",
    solutions: "Solutions",
    people: "People",
    companies: "Companies",
    economy: "Economy",
    done: "What's been done",
    needed: "What should be done",
    socialShort: "Social",
    eduShort: "Edu",
    povertyShort: "Poverty"
  },
  ca: {
    reportTitle: "Informe 2025",
    socialTitle: "Desigualtat Social",
    educationTitle: "Accés a l'Educació",
    povertyTitle: "Pobresa i Carència",
    navTitle: "Navegació",
    clickToExpand: "Clic per expandir",
    problemDetected: "Problema Detectat",
    possibleSolution: "Solució Possible",
    dataSource: "Font de Dades",
    deepDive: "A fons",
    dimensions: "Dimensions",
    solutions: "Solucions",
    people: "Persones",
    companies: "Empreses",
    economy: "Economia",
    done: "S'ha fet",
    needed: "S'hauria de fer",
    socialShort: "Social",
    eduShort: "Edu",
    povertyShort: "Pobresa"
  }
};

// --- SIMULATOR TRANSLATIONS ---

export const SIMULATOR_TEXT = {
  es: {
    social: {
        title: "Simulador Equidad",
        inputLabel: "Esfuerzo Inversión",
        inputDef: "PIB (Producto Interior Bruto): Es toda la riqueza que genera el país en un año.",
        outputLabel: "Coeficiente Gini",
        outputDef: "El 'termómetro' de la desigualdad. 0 significa igualdad perfecta y 1 es desigualdad total.",
        displayLabel: "Inversión (% PIB)",
        topLine: "1% Riqueza",
        botLine: "Salario Medio",
        alert: "Aumentar la inversión social reduce la brecha entre ricos y pobres."
    },
    education: {
        title: "Simulador Futuro",
        inputLabel: "Esfuerzo en Becas",
        inputDef: "Dinero destinado a pagar estudios, transporte y material a quien no puede permitírselo.",
        outputLabel: "Tasa Éxito Escolar",
        outputDef: "Porcentaje de alumnos que terminan sus estudios obligatorios y consiguen un título.",
        displayLabel: "Alumnos Becados",
        topLine: "Demanda Laboral",
        botLine: "Nivel Habilidades",
        alert: "Invertir en educación digital reduce el abandono escolar y asegura mejores empleos."
    },
    poverty: {
        title: "Cobertura Vital",
        inputLabel: "Esfuerzo en Ayudas",
        inputDef: "Nivel de protección del gobierno para asegurar que nadie se quede sin comer o sin casa.",
        outputLabel: "Cobertura Necesidades",
        outputDef: "Porcentaje de los gastos básicos (luz, comida, alquiler) que una familia pobre logra pagar.",
        displayLabel: "Necesidades Cubiertas",
        topLine: "Coste de Vida",
        botLine: "Ingresos Familiares",
        alert: "Las ayudas directas son la forma más rápida de sacar a los niños de la pobreza extrema."
    },
    projectedImpact: "Impacto Proyectado",
    positive: "Positivo",
    insufficient: "Insuficient",
    note: "Nota: El porcentaje de la barra indica el <strong>nivel de prioridad política</strong> y esfuerzo presupuestario asignado."
  },
  en: {
    social: {
        title: "Equity Simulator",
        inputLabel: "Investment Effort",
        inputDef: "GDP (Gross Domestic Product): The total wealth generated by the country in a year.",
        outputLabel: "Gini Coefficient",
        outputDef: "The inequality 'thermometer'. 0 means perfect equality and 1 is total inequality.",
        displayLabel: "Investment (% GDP)",
        topLine: "1% Wealth",
        botLine: "Avg Salary",
        alert: "Increasing social investment reduces the gap between rich and poor."
    },
    education: {
        title: "Future Simulator",
        inputLabel: "Scholarship Effort",
        inputDef: "Money allocated to pay for studies, transport, and supplies for those who can't afford it.",
        outputLabel: "School Success Rate",
        outputDef: "Percentage of students who finish mandatory studies and get a degree.",
        displayLabel: "Students on Scholarship",
        topLine: "Labor Demand",
        botLine: "Skill Level",
        alert: "Investing in digital education reduces dropout rates and ensures better jobs."
    },
    poverty: {
        title: "Vital Coverage",
        inputLabel: "Aid Effort",
        inputDef: "Government protection level to ensure no one goes hungry or homeless.",
        outputLabel: "Needs Coverage",
        outputDef: "Percentage of basic expenses (light, food, rent) a poor family can pay.",
        displayLabel: "Needs Covered",
        topLine: "Cost of Living",
        botLine: "Family Income",
        alert: "Direct aid is the fastest way to lift children out of extreme poverty."
    },
    projectedImpact: "Projected Impact",
    positive: "Positive",
    insufficient: "Insufficient",
    note: "Note: The bar percentage indicates the <strong>political priority level</strong> and budget effort assigned."
  },
  ca: {
    social: {
        title: "Simulador Equitat",
        inputLabel: "Esforç Inversió",
        inputDef: "PIB (Producte Interior Brut): Tota la riquesa que genera el país en un any.",
        outputLabel: "Coeficient Gini",
        outputDef: "El 'termòmetre' de la desigualtat. 0 és igualtat perfecta i 1 desigualtat total.",
        displayLabel: "Inversió (% PIB)",
        topLine: "1% Riquesa",
        botLine: "Salari Mitjà",
        alert: "Augmentar la inversió social redueix la bretxa entre rics i pobres."
    },
    education: {
        title: "Simulador Futur",
        inputLabel: "Esforç en Beques",
        inputDef: "Diners destinats a pagar estudis, transport i material a qui no s'ho pot permetre.",
        outputLabel: "Èxit Escolar",
        outputDef: "Percentatge d'alumnes que acaben els estudis obligatoris i aconsegueixen títol.",
        displayLabel: "Alumnes Becats",
        topLine: "Demanda Laboral",
        botLine: "Nivell Habilitats",
        alert: "Invertir en educació digital redueix l'abandonament i assegura millors feines."
    },
    poverty: {
        title: "Cobertura Vital",
        inputLabel: "Esforç en Ajuts",
        inputDef: "Nivell de protecció del govern per assegurar que ningú es quedi sense menjar o casa.",
        outputLabel: "Cobertura Necessitats",
        outputDef: "Percentatge de despeses bàsiques (llum, menjar, lloguer) que una família pot pagar.",
        displayLabel: "Necessitats Cobertes",
        topLine: "Cost de Vida",
        botLine: "Ingressos Familiars",
        alert: "Els ajuts directes són la forma més ràpida de treure els nens de la pobresa extrema."
    },
    projectedImpact: "Impacte Projectat",
    positive: "Positiu",
    insufficient: "Insuficient",
    note: "Nota: El percentatge indica el <strong>nivell de prioritat política</strong> i esforç pressupostari assignat."
  }
};

// --- DATA ACCESS ---

export const getSectionData = (lang: Lang) => {
  const data = lang === 'en' ? DATA_EN : lang === 'ca' ? DATA_CA : DATA_ES;
  return {
    social: { title: UI_TEXT[lang].socialTitle, data: data.social, color: "#D4AF37" },
    education: { title: UI_TEXT[lang].educationTitle, data: data.education, color: "#3B82F6" },
    poverty: { title: UI_TEXT[lang].povertyTitle, data: data.poverty, color: "#EF4444" }
  };
};

// Default export for initial load
export const INFO_DATA = DATA_ES.social;