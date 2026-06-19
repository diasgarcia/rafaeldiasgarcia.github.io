// ========================================
// Sistema de Internacionalização (i18n)
// ========================================

const translations = {
    'pt-BR': {
        // Navbar
        'nav.about': 'Sobre',
        'nav.technologies': 'Tecnologias',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.blog': 'Artigos',
        'nav.contact': 'Contato',
        'blog.loading': 'Carregando conteúdo...',
        'blog.fetching': 'Buscando artigos...',
        'blog.latestTitle': 'Últimos Artigos',
        'blog.latestSubtitle': 'Os artigos mais recentes sobre estudos, projetos e aprendizados da minha jornada em software.',
        'blog.readPost': 'Ler artigo',
        'blog.viewAll': 'Ver todos os artigos',
        'blog.showMore': 'Ver Mais Artigos',
        'blog.showLess': 'Ver Menos',

        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Software Development Intern | QA, Automação e Backend',
        'hero.description': 'Estudante de Engenharia de Software com foco em QA, automação de testes e backend, atuando com Playwright, Spring Boot e PostgreSQL.',
        'hero.viewProjects': 'Ver Projetos',
        'hero.contact': 'Entrar em Contato',

        // About Section
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou estagiário de QA na CWI, com foco em testes automatizados e qualidade de software. No CWI Crescer Level 2, aprofundei minha base em desenvolvimento e testes, e hoje direciono meus estudos para Playwright, Node-RED, Chroma DB e Spring Boot.',
        'about.p2': 'Antes da tecnologia, estudei Violão Clássico no Conservatório de Tatuí, experiência que fortaleceu minha disciplina, atenção aos detalhes e constância no aprendizado. Busco evoluir profissionalmente contribuindo com qualidade, organização e melhoria contínua em projetos reais de software.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Eng. Software (2028)',
        'about.certificates': 'Certificados & Cursos',
        'about.viewCertificates': 'Ver Lista Completa',
        'about.englishLevel': 'INGLÊS AVANÇADO',
        'about.degree': 'SEMESTRE DE ENG. SOFTWARE',
        'about.quote': '"Tarde, uma nuvem rósea lenta e transparente, sobre o espaço sonhadora e bela..."',
        'about.quoteAuthor': '— Villa-Lobos',

        // Tech Stack Section
        'tech.title': 'Stack Tecnológico',
        'tech.subtitle': 'Ferramentas que utilizo no dia a dia. Passe o mouse para saber mais.',
        'tech.showMore': 'Ver Mais Tecnologias',
        'tech.showLess': 'Ver Menos',
        'tech.divider': 'Aprendendo Agora',
        'tech.java': 'Linguagem robusta para sistemas backend corporativos.',
        'tech.php': 'Desenvolvimento web dinâmico e veloz para servidores.',
        'tech.javascript': 'Interatividade no frontend e lógica no backend.',
        'tech.playwright': 'Testes E2E em navegadores com API estável e paralelização.',
        'tech.html': 'Estrutura semântica e estilização visual responsiva.',
        'tech.sql': 'Modelagem e consulta eficiente de bancos de dados.',
        'tech.python': 'Automação, processamento de dados e IA.',
        'tech.git': 'Controle de versão e colaboração em equipe.',
        'tech.docker': 'Containerização para ambientes de deploy consistentes.',
        'tech.spring': 'Framework Spring Boot para APIs REST e serviços backend escaláveis.',
        'tech.go': 'Linguagem moderna para sistemas de alta performance.',
        'tech.angular': 'Framework SPA do Google para aplicações web escaláveis.',
        'tech.nodered': 'Automação em fluxos para integrações, APIs e orquestração low-code.',
        'tech.chromadb': 'Banco vetorial para embeddings, busca semântica e memória em apps com IA.',
        'tech.kubernetes': 'Orquestração de containers com deploy, escalabilidade e resiliência.',
        'tech.azuredevops': 'Pipelines, boards e entrega contínua no ecossistema Azure.',
        'tech.gitflow': 'Estratégia de branching para organizar features, releases e hotfixes.',
        'tech.devops': 'Integração contínua (CI/CD) e infraestrutura ágil.',
        'tech.security': 'Proteção de dados, vulnerabilidades e OWASP.',
        'tech.ai': 'Integração com LLMs e ferramentas de GenAI.',
        'tech.agile': 'Metodologias ágeis (Scrum/Kanban) para projetos.',

        // Projects
        'projects.title': 'Projetos',
        'projects.showMore': 'Ver Mais Projetos',
        'projects.showLess': 'Ver Menos',
        'projects.realworld.title': 'RealWorld Automation',
        'projects.realworld.description': 'Full-stack automation lab: testes E2E com Playwright para o app RealWorld Conduit (Angular + Spring Boot + PostgreSQL), containerizado com Docker.',
        'projects.meveum.title': 'MeVeUm',
        'projects.meveum.description': 'Sistema operacional para restaurantes com cardápio digital, checkout por WhatsApp, CRM, pedidos, pagamentos e automações. Fui responsável pelo backend completo em Spring Boot e pela camada de automações com Playwright.',
        'projects.partituras.title': 'Partituras API',
        'projects.partituras.description': 'API REST em Spring Boot para gerenciar partituras, praticando arquitetura em camadas, validações e boas práticas do programa Crescer.',
        'projects.portfolio.title': 'Portfólio & Blog',
        'projects.portfolio.description': 'Código-fonte deste site. Desenvolvido com HTML, CSS e JavaScript Vanilla, com sistema de multi-idiomas nativo e geração de blog estático.',

        // Experience Section
        'experience.title': 'Experiência Profissional',
        'experience.current': 'Atual',
        'experience.showMore': 'Ver Mais Experiências',
        'experience.showLess': 'Ver Menos',
        'experience.cwi.company': 'CWI Software',
        'experience.cwi.position': 'QA Intern',
        'experience.cwi.description': 'Atuo como QA Intern na CWI, no projeto Rocket, com foco em qualidade de software e testes automatizados.',
        'experience.crescer.title': 'Crescer Level 2',
        'experience.crescer.position': 'Estágio',
        'experience.crescer.description': 'Level 2 do Programa Crescer, onde segui a trilha de especialização em QA (Quality Assurance), com foco em testes de software, automação e garantia de qualidade.',
        'experience.conservatory.company': 'Conservatório de Tatuí',
        'experience.conservatory.position': 'Bolsista - Camerata de Violões',
        'experience.conservatory.description': 'Atuação profissional como músico, desenvolvendo disciplina rigorosa, trabalho em equipe e gestão de tempo sob pressão de apresentações públicas.',
        'experience.microtec.company': 'Microtec Papelaria e Informática',
        'experience.microtec.position': 'Estagiário de TI',
        'experience.microtec.description': 'Suporte técnico (hardware/software), gestão de inventário e atendimento ao cliente.',

        // Footer
        'footer.title': 'Vamos conversar?',
        'footer.description': 'Estou aberto a oportunidades em desenvolvimento web (Backend/Fullstack).',
        'footer.sendEmail': 'Enviar Email',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Código do site',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',

        // Contact Modal
        'contact.title': 'Enviar Mensagem',
        'contact.emailLabel': 'Seu Email',
        'contact.emailPlaceholder': 'nome@exemplo.com',
        'contact.messageLabel': 'Mensagem',
        'contact.messagePlaceholder': 'Como posso ajudar?',
        'contact.sendButton': 'Enviar Agora',
        'contact.successTitle': 'Mensagem Enviada!',
        'contact.successMessage': 'Obrigado pelo contato. Retornarei em breve.',
        'contact.errorTitle': 'Erro ao enviar',
        'contact.errorMessage': 'Houve um problema. Tente novamente ou use meu email direto.',
        'contact.tryAgain': 'Tentar Novamente',
        'contact.close': 'Fechar',

        // Certificates Modal
        'certs.title': 'Certificados & Cursos',
        'certs.cs50': 'CS50: Introduction to Computer Science',
        'certs.cs50.org': 'Harvard University',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Advanced',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Advanced English (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Creser',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Maratona Java & Spring Boot',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Clique no ícone para visualizar o certificado',

        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navegação',
        'mobile.contactButton': 'Vamos conversar',
        'mobile.language': 'Idioma',

        // Tooltips
        'tooltip.university': 'Centro Universitário das Faculdades Integradas de Ourinhos',
        'tooltip.englishLevel': 'Nível avançado de inglês segundo o Quadro Europeu Comum de Referência para Línguas',
        'tooltip.degree': 'Cursando o 4º semestre de Engenharia de Software na UNIFIO',
        'tooltip.viewCertificate': 'Clique no ícone para visualizar o certificado',
    },

    'en': {
        // Navbar
        'nav.about': 'About',
        'nav.technologies': 'Technologies',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.blog': 'Articles',
        'nav.contact': 'Contact',
        'blog.loading': 'Loading content...',
        'blog.fetching': 'Fetching articles...',
        'blog.latestTitle': 'Latest Articles',
        'blog.latestSubtitle': 'The newest posts about studies, projects, and lessons from my software journey.',
        'blog.readPost': 'Read article',
        'blog.viewAll': 'View all articles',
        'blog.showMore': 'Show More Articles',
        'blog.showLess': 'Show Less',

        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Software Development Intern | QA, Automation, and Backend',
        'hero.description': 'Software Engineering student focused on QA, test automation, and backend development, working with Playwright, Spring Boot, and PostgreSQL.',
        'hero.viewProjects': 'View Projects',
        'hero.contact': 'Get in Touch',

        // About Section
        'about.title': 'About Me',
        'about.p1': 'I am a QA Intern at CWI, focused on automated testing and software quality. In CWI Crescer Level 2, I strengthened my foundation in development and testing, and I now focus my studies on Playwright, Node-RED, Chroma DB, and Spring Boot.',
        'about.p2': 'Before technology, I studied Classical Guitar at the Tatuí Conservatory, an experience that strengthened my discipline, attention to detail, and consistency in learning. I aim to grow professionally by contributing quality, organization, and continuous improvement to real software projects.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Software Eng. (2028)',
        'about.certificates': 'Certificates & Courses',
        'about.viewCertificates': 'View Full List',
        'about.englishLevel': 'ADVANCED ENGLISH',
        'about.degree': 'SOFTWARE ENG. SEMESTER',
        'about.quote': '"Tarde, uma nuvem rósea lenta e transparente, sobre o espaço sonhadora e bela..."',
        'about.quoteAuthor': '— Villa-Lobos',

        // Tech Stack Section
        'tech.title': 'Tech Stack',
        'tech.subtitle': 'Tools I use on a daily basis. Hover to learn more.',
        'tech.showMore': 'Show More Technologies',
        'tech.showLess': 'Show Less',
        'tech.divider': 'Currently Learning',
        'tech.java': 'Robust language for corporate backend systems.',
        'tech.php': 'Dynamic and fast web development for servers.',
        'tech.javascript': 'Frontend interactivity and backend logic.',
        'tech.playwright': 'End-to-end browser testing with a stable API and parallel runs.',
        'tech.html': 'Semantic structure and responsive visual styling.',
        'tech.sql': 'Efficient database modeling and querying.',
        'tech.python': 'Automation, data processing, and AI.',
        'tech.git': 'Version control and team collaboration.',
        'tech.docker': 'Containerization for consistent deployment environments.',
        'tech.spring': 'Spring Boot framework for REST APIs and scalable backend services.',
        'tech.go': 'Modern language for high-performance systems.',
        'tech.angular': 'Google\'s SPA framework for scalable web applications.',
        'tech.nodered': 'Flow-based automation for integrations, APIs, and low-code orchestration.',
        'tech.chromadb': 'Vector database for embeddings, semantic search, and memory in AI apps.',
        'tech.kubernetes': 'Container orchestration with deployment, scalability, and resilience.',
        'tech.azuredevops': 'Pipelines, boards, and continuous delivery in the Azure ecosystem.',
        'tech.gitflow': 'Branching strategy for organizing features, releases, and hotfixes.',
        'tech.devops': 'Continuous integration (CI/CD) and agile infrastructure.',
        'tech.security': 'Data protection, vulnerabilities, and OWASP.',
        'tech.ai': 'Integration with LLMs and GenAI tools.',
        'tech.agile': 'Agile methodologies (Scrum/Kanban) for projects.',

        // Projects
        'projects.title': 'Projects',
        'projects.showMore': 'Show More Projects',
        'projects.showLess': 'Show Less',
        'projects.realworld.title': 'RealWorld Automation',
        'projects.realworld.description': 'Full-stack automation lab: E2E testing with Playwright for the RealWorld Conduit app (Angular + Spring Boot + PostgreSQL), containerized with Docker.',
        'projects.meveum.title': 'MeVeUm',
        'projects.meveum.description': 'Restaurant operating system with digital menu, WhatsApp checkout, CRM, orders, payments, and automations. I built the complete Spring Boot backend and the Playwright automation layer.',
        'projects.partituras.title': 'Partituras API',
        'projects.partituras.description': 'Spring Boot REST API for managing sheet music, practicing layered architecture, validations, and Crescer best practices.',
        'projects.portfolio.title': 'Portfolio & Blog',
        'projects.portfolio.description': 'Source code for this website. Built with HTML, CSS, and Vanilla JavaScript, featuring a native multi-language system and static blog generation.',

        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.current': 'Current',
        'experience.showMore': 'Show More Experience',
        'experience.showLess': 'Show Less',
        'experience.cwi.company': 'CWI Software',
        'experience.cwi.position': 'QA Intern',
        'experience.cwi.description': 'I work as a QA Intern at CWI, on the Rocket project, with a focus on software quality and automated testing.',
        'experience.crescer.title': 'Crescer Level 2',
        'experience.crescer.position': 'Internship',
        'experience.crescer.description': 'Level 2 of the Crescer Program, where I followed the QA specialization track, focusing on software testing, automation, and quality assurance.',
        'experience.conservatory.company': 'Tatuí Conservatory',
        'experience.conservatory.position': 'Scholar - Guitar Chamber',
        'experience.conservatory.description': 'Professional performance as a musician, developing rigorous discipline, teamwork, and time management under the pressure of public presentations.',
        'experience.microtec.company': 'Microtec Office Supplies and IT',
        'experience.microtec.position': 'IT Intern',
        'experience.microtec.description': 'Technical support (hardware/software), inventory management, and customer service.',

        // Footer
        'footer.title': 'Let\'s talk?',
        'footer.description': 'I am open to opportunities in web development (Backend/Fullstack).',
        'footer.sendEmail': 'Send Email',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Site source code',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',

        // Contact Modal
        'contact.title': 'Send Message',
        'contact.emailLabel': 'Your Email',
        'contact.emailPlaceholder': 'name@example.com',
        'contact.messageLabel': 'Message',
        'contact.messagePlaceholder': 'How can I help?',
        'contact.sendButton': 'Send Now',
        'contact.successTitle': 'Message Sent!',
        'contact.successMessage': 'Thank you for contacting me. I will get back to you soon.',
        'contact.errorTitle': 'Error sending',
        'contact.errorMessage': 'There was a problem. Please try again or use my direct email.',
        'contact.tryAgain': 'Try Again',
        'contact.close': 'Close',

        // Certificates Modal
        'certs.title': 'Certificates & Courses',
        'certs.cs50': 'CS50: Introduction to Computer Science',
        'certs.cs50.org': 'Harvard University',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Advanced',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Advanced English (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Creser',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Java & Spring Boot Bootcamp',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Click the icon to view the certificate',

        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Let\'s talk',
        'mobile.language': 'Language',

        // Tooltips
        'tooltip.university': 'University Center of the Integrated Faculties of Ourinhos',
        'tooltip.englishLevel': 'Advanced English level according to the Common European Framework of Reference for Languages',
        'tooltip.degree': 'Currently in the 4th semester of Software Engineering at UNIFIO',
        'tooltip.viewCertificate': 'Click the icon to view the certificate',
    },

    'es': {
        // Navbar
        'nav.about': 'Sobre Mí',
        'nav.technologies': 'Tecnologías',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.blog': 'Artículos',
        'nav.contact': 'Contacto',

        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Software Development Intern | QA, Automatización y Backend',
        'hero.description': 'Estudiante de Ingeniería de Software con foco en QA, automatización de pruebas y backend, trabajando con Playwright, Spring Boot y PostgreSQL.',
        'hero.viewProjects': 'Ver Proyectos',
        'hero.contact': 'Ponerse en Contacto',

        // About Section
        'about.title': 'Sobre Mí',
        'about.p1': 'Soy QA Intern en CWI, con foco en pruebas automatizadas y calidad de software. En CWI Crescer Level 2, reforcé mi base en desarrollo y pruebas, y hoy dirijo mis estudios hacia Playwright, Node-RED, Chroma DB y Spring Boot.',
        'about.p2': 'Antes de la tecnología, estudié Guitarra Clásica en el Conservatorio de Tatuí, una experiencia que fortaleció mi disciplina, atención al detalle y constancia en el aprendizaje. Busco crecer profesionalmente contribuyendo con calidad, organización y mejora continua en proyectos reales de software.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Ing. Software (2028)',
        'about.certificates': 'Certificados y Cursos',
        'about.viewCertificates': 'Ver Lista Completa',
        'about.englishLevel': 'INGLÉS AVANZADO',
        'about.degree': 'SEMESTRE DE ING. SOFTWARE',
        'about.quote': '"Tarde, uma nuvem rósea lenta e transparente, sobre o espaço sonhadora e bela..."',
        'about.quoteAuthor': '— Villa-Lobos',

        // Tech Stack Section
        'tech.title': 'Stack Tecnológico',
        'tech.subtitle': 'Herramientas que uso a diario. Pasa el cursor para saber más.',
        'tech.showMore': 'Ver Más Tecnologías',
        'tech.showLess': 'Ver Menos',
        'tech.divider': 'Aprendiendo Ahora',
        'tech.java': 'Lenguaje robusto para sistemas backend corporativos.',
        'tech.php': 'Desarrollo web dinámico y rápido para servidores.',
        'tech.javascript': 'Interactividad en frontend y lógica en backend.',
        'tech.playwright': 'Pruebas E2E en navegadores con API estable y ejecución en paralelo.',
        'tech.html': 'Estructura semántica y estilización visual responsiva.',
        'tech.sql': 'Modelado y consulta eficiente de bases de datos.',
        'tech.python': 'Automatización, procesamiento de datos e IA.',
        'tech.git': 'Control de versiones y colaboración en equipo.',
        'tech.docker': 'Contenedorización para entornos de despliegue consistentes.',
        'tech.angular': 'Framework SPA de Google para aplicaciones web escalables.',
        'tech.nodered': 'Automatización basada en flujos para integraciones, APIs y orquestación low-code.',
        'tech.chromadb': 'Base de datos vectorial para embeddings, búsqueda semántica y memoria en apps de IA.',
        'tech.kubernetes': 'Orquestación de contenedores con despliegue, escalabilidad y resiliencia.',
        'tech.azuredevops': 'Pipelines, boards y entrega continua en el ecosistema Azure.',
        'tech.gitflow': 'Estrategia de ramas para organizar features, releases y hotfixes.',
        'tech.devops': 'Integración continua (CI/CD) e infraestructura ágil.',
        'tech.security': 'Protección de datos, vulnerabilidades y OWASP.',
        'tech.ai': 'Integración con LLMs y herramientas de GenAI.',
        'tech.agile': 'Metodologías ágiles (Scrum/Kanban) para proyectos.',

        // Projects
        'projects.title': 'Proyectos',
        'projects.showMore': 'Ver Más Proyectos',
        'projects.showLess': 'Ver Menos',
        'projects.realworld.title': 'RealWorld Automation',
        'projects.realworld.description': 'Laboratorio de automatización full-stack: pruebas E2E con Playwright para la app RealWorld Conduit (Angular + Spring Boot + PostgreSQL), en contenedores con Docker.',
        'projects.meveum.title': 'MeVeUm',
        'projects.meveum.description': 'Sistema operativo para restaurantes con menú digital, checkout por WhatsApp, CRM, pedidos, pagos y automatizaciones. Fui responsable del backend completo en Spring Boot y de la capa de automatizaciones con Playwright.',
        'projects.partituras.title': 'Partituras API',
        'projects.partituras.description': 'API REST en Spring Boot para gestionar partituras, practicando arquitectura en capas, validaciones y buenas prácticas del programa Crescer.',
        'projects.portfolio.title': 'Portafolio y Blog',
        'projects.portfolio.description': 'Código fuente de este sitio web. Desarrollado con HTML, CSS y JavaScript Vanilla, con un sistema nativo de múltiples idiomas y generación de blog estático.',

        // Experience Section
        'experience.title': 'Experiencia Profesional',
        'experience.current': 'Actual',
        'experience.cwi.company': 'CWI Software',
        'experience.cwi.position': 'QA Intern',
        'experience.cwi.description': 'Trabajo como QA Intern en CWI, en el proyecto Rocket, con foco en calidad de software y pruebas automatizadas.',
        'experience.crescer.title': 'Crescer Level 2',
        'experience.crescer.position': 'Pasantía',
        'experience.crescer.description': 'Nivel 2 del Programa Crescer, donde seguí la ruta de especialización en QA (Quality Assurance), con foco en pruebas de software, automatización y garantía de calidad.',
        'experience.conservatory.company': 'Conservatorio de Tatuí',
        'experience.conservatory.position': 'Becario - Camerata de Guitarras',
        'experience.conservatory.description': 'Actuación profesional como músico, desarrollando disciplina rigurosa, trabajo en equipo y gestión del tiempo bajo la presión de presentaciones públicas.',
        'experience.microtec.company': 'Microtec Papelería e Informática',
        'experience.microtec.position': 'Pasante de TI',
        'experience.microtec.description': 'Soporte técnico (hardware/software), gestión de inventario y atención al cliente.',

        // Footer
        'footer.title': '¿Hablamos?',
        'footer.description': 'Estoy abierto a oportunidades en desarrollo web (Backend/Fullstack).',
        'footer.sendEmail': 'Enviar Email',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Código del sitio',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',

        // Contact Modal
        'contact.title': 'Enviar Mensaje',
        'contact.emailLabel': 'Tu Email',
        'contact.emailPlaceholder': 'nombre@ejemplo.com',
        'contact.messageLabel': 'Mensaje',
        'contact.messagePlaceholder': '¿Cómo puedo ayudarte?',
        'contact.sendButton': 'Enviar Ahora',
        'contact.successTitle': '¡Mensaje Enviado!',
        'contact.successMessage': 'Gracias por contactar. Te responderé pronto.',
        'contact.errorTitle': 'Error al enviar',
        'contact.errorMessage': 'Hubo un problema. Inténtalo de nuevo o usa mi email directo.',
        'contact.tryAgain': 'Intentar de Nuevo',
        'contact.close': 'Cerrar',

        // Certificates Modal
        'certs.title': 'Certificados y Cursos',
        'certs.cs50': 'CS50: Introducción a la Ciencia de la Computación',
        'certs.cs50.org': 'Universidad de Harvard',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Avanzado',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Inglés Avanzado (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Creser',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Bootcamp de Java y Spring Boot',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Haz clic en el icono para ver el certificado',

        // Mobile Menu
        'mobile.menu': 'Menú',
        'mobile.navigation': 'Navegación',
        'mobile.contactButton': 'Hablemos',
        'mobile.language': 'Idioma',

        // Tooltips
        'tooltip.university': 'Centro Universitario de las Facultades Integradas de Ourinhos',
        'tooltip.englishLevel': 'Nivel avanzado de inglés según el Marco Común Europeo de Referencia para las Lenguas',
        'tooltip.degree': 'Cursando el 4.º semestre de Ingeniería de Software en UNIFIO',
        'tooltip.viewCertificate': 'Haz clic en el icono para ver el certificado',
    },

    'zh': {
        // Navbar
        'nav.about': '关于',
        'nav.technologies': '技术',
        'nav.projects': '项目',
        'nav.experience': '经验',
        'nav.blog': '文章',
        'nav.contact': '联系',

        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': '软件开发实习生 | QA、测试自动化与后端',
        'hero.description': '软件工程学生，专注于 QA、测试自动化和后端开发，使用 Playwright、Spring Boot 和 PostgreSQL。',
        'hero.viewProjects': '查看项目',
        'hero.contact': '联系我',

        // About Section
        'about.title': '关于我',
        'about.p1': '我是 CWI 的 QA Intern，专注于自动化测试和软件质量。在 CWI Crescer Level 2 中，我巩固了开发与测试基础，并将学习重点放在 Playwright、Node-RED、Chroma DB 和 Spring Boot 上。',
        'about.p2': '在进入技术领域之前，我曾在 Tatuí 音乐学院学习古典吉他，这段经历强化了我的纪律性、对细节的关注以及持续学习的能力。我希望通过在真实软件项目中贡献质量、组织性和持续改进来实现职业成长。',
        'about.university': 'UNIFIO',
        'about.universityDesc': '软件工程 (2028)',
        'about.certificates': '证书与课程',
        'about.viewCertificates': '查看完整列表',
        'about.englishLevel': '高级英语',
        'about.degree': '软件工程学期',
        'about.quote': '"Tarde, uma nuvem rósea lenta e transparente, sobre o espaço sonhadora e bela..."',
        'about.quoteAuthor': '— Villa-Lobos',

        // Tech Stack Section
        'tech.title': '技术栈',
        'tech.subtitle': '我日常使用的工具。悬停以了解更多。',
        'tech.showMore': '查看更多技术',
        'tech.showLess': '收起',
        'tech.divider': '正在学习',
        'tech.java': '用于企业后端系统的强大语言。',
        'tech.php': '为服务器提供动态快速的 Web 开发。',
        'tech.javascript': '前端交互和后端逻辑。',
        'tech.playwright': '基于稳定 API 与并行执行的浏览器端到端测试。',
        'tech.html': '语义结构和响应式视觉样式。',
        'tech.sql': '高效的数据库建模和查询。',
        'tech.python': '自动化、数据处理和人工智能。',
        'tech.git': '版本控制和团队协作。',
        'tech.docker': '容器化以获得一致的部署环境。',
        'tech.angular': 'Google 的 SPA 框架，用于可扩展的 Web 应用程序。',
        'tech.nodered': '基于流程的自动化，用于集成、API 和低代码编排。',
        'tech.chromadb': '面向 Embeddings、语义搜索和 AI 应用记忆的向量数据库。',
        'tech.kubernetes': '用于部署、扩缩容和弹性保障的容器编排。',
        'tech.azuredevops': 'Azure 生态中的流水线、Boards 与持续交付。',
        'tech.gitflow': '用于组织功能分支、发布和热修复的分支策略。',
        'tech.devops': '持续集成 (CI/CD) 和敏捷基础设施。',
        'tech.security': '数据保护、漏洞和 OWASP。',
        'tech.ai': '与 LLM 和 GenAI 工具集成。',
        'tech.agile': '项目的敏捷方法论（Scrum/Kanban）。',

        // Projects
        'projects.title': '项目',
        'projects.showMore': '查看更多项目',
        'projects.showLess': '收起',
        'projects.realworld.title': 'RealWorld Automation',
        'projects.realworld.description': '全栈自动化实验室：使用 Playwright 为 RealWorld Conduit 应用程序（Angular + Spring Boot + PostgreSQL）进行 E2E 测试，并使用 Docker 容器化。',
        'projects.meveum.title': 'MeVeUm',
        'projects.meveum.description': '面向餐厅的运营系统，包含数字菜单、WhatsApp 结账、CRM、订单、支付和自动化。我负责完整的 Spring Boot 后端以及基于 Playwright 的自动化层。',
        'projects.partituras.title': 'Partituras API',
        'projects.partituras.description': '使用 Spring Boot 的 REST API，用于管理乐谱，练习分层架构、验证和 Crescer 最佳实践。',
        'projects.portfolio.title': '作品集与博客',
        'projects.portfolio.description': '本网站的源代码。使用 HTML、CSS 和原生 JavaScript 开发，具有原生多语言系统和静态博客生成功能。',

        // Experience Section
        'experience.title': '专业经验',
        'experience.current': '当前',
        'experience.cwi.company': 'CWI Software',
        'experience.cwi.position': 'QA Intern',
        'experience.cwi.description': '我在 CWI 担任 QA Intern，在 Rocket 项目中专注于软件质量和自动化测试。',
        'experience.crescer.title': 'Crescer Level 2',
        'experience.crescer.position': '实习',
        'experience.crescer.description': 'Crescer 项目二级阶段，我沿着 QA（质量保证）专业方向学习，专注于软件测试、自动化和质量保障。',
        'experience.conservatory.company': 'Tatuí 音乐学院',
        'experience.conservatory.position': '学者 - 吉他室内乐',
        'experience.conservatory.description': '作为音乐家的专业表演，在公开演出的压力下培养严格的纪律、团队合作和时间管理。',
        'experience.microtec.company': 'Microtec 办公用品和 IT',
        'experience.microtec.position': 'IT 实习生',
        'experience.microtec.description': '技术支持（硬件/软件）、库存管理和客户服务。',

        // Footer
        'footer.title': '让我们谈谈？',
        'footer.description': '我愿意接受 Web 开发（后端/全栈）方面的机会。',
        'footer.sendEmail': '发送电子邮件',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': '网站源码',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',

        // Contact Modal
        'contact.title': '发送消息',
        'contact.emailLabel': '您的电子邮件',
        'contact.emailPlaceholder': 'name@example.com',
        'contact.messageLabel': '消息',
        'contact.messagePlaceholder': '我能帮您什么？',
        'contact.sendButton': '立即发送',
        'contact.successTitle': '消息已发送！',
        'contact.successMessage': '感谢您的联系。我会尽快回复您。',
        'contact.errorTitle': '发送错误',
        'contact.errorMessage': '出现问题。请重试或使用我的直接电子邮件。',
        'contact.tryAgain': '重试',
        'contact.close': '关闭',

        // Certificates Modal
        'certs.title': '证书与课程',
        'certs.cs50': 'CS50：计算机科学导论',
        'certs.cs50.org': '哈佛大学',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python 高级',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': '高级英语 (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Creser',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Java 与 Spring Boot 训练营',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': '点击图标查看证书',

        // Mobile Menu
        'mobile.menu': '菜单',
        'mobile.navigation': '导航',
        'mobile.contactButton': '让我们谈谈',
        'mobile.language': '语言',

        // Tooltips
        'tooltip.university': 'Ourinhos 综合学院大学中心',
        'tooltip.englishLevel': '根据欧洲语言共同参考框架的高级英语水平',
        'tooltip.degree': '目前在 UNIFIO 就读软件工程第 4 学期',
        'tooltip.viewCertificate': '点击图标查看证书',
    },

    'de': {
        // Navbar
        'nav.about': 'Über',
        'nav.technologies': 'Technologien',
        'nav.projects': 'Projekte',
        'nav.experience': 'Erfahrung',
        'nav.blog': 'Artikel',
        'nav.contact': 'Kontakt',

        // Hero Section
        'hero.name': 'Rafael Dias Garcia',
        'hero.title': 'Software Development Intern | QA, Automatisierung und Backend',
        'hero.description': 'Software-Engineering-Student mit Fokus auf QA, Testautomatisierung und Backend-Entwicklung mit Playwright, Spring Boot und PostgreSQL.',
        'hero.viewProjects': 'Projekte ansehen',
        'hero.contact': 'Kontakt aufnehmen',

        // About Section
        'about.title': 'Über mich',
        'about.p1': 'Ich bin QA Intern bei CWI mit Fokus auf automatisierte Tests und Softwarequalität. Im CWI Crescer Level 2 habe ich meine Grundlagen in Entwicklung und Testing gestärkt und richte mein Lernen heute auf Playwright, Node-RED, Chroma DB und Spring Boot aus.',
        'about.p2': 'Vor der Technologie studierte ich klassische Gitarre am Konservatorium von Tatuí, eine Erfahrung, die meine Disziplin, meine Liebe zum Detail und meine Beständigkeit im Lernen gestärkt hat. Ich möchte mich beruflich weiterentwickeln, indem ich Qualität, Organisation und kontinuierliche Verbesserung in reale Softwareprojekte einbringe.',
        'about.university': 'UNIFIO',
        'about.universityDesc': 'Software-Eng. (2028)',
        'about.certificates': 'Zertifikate & Kurse',
        'about.viewCertificates': 'Vollständige Liste anzeigen',
        'about.englishLevel': 'FORTGESCHRITTENES ENGLISCH',
        'about.degree': 'SEMESTER SOFTWARE-ENG.',
        'about.quote': '"Tarde, uma nuvem rósea lenta e transparente, sobre o espaço sonhadora e bela..."',
        'about.quoteAuthor': '— Villa-Lobos',

        // Tech Stack Section
        'tech.title': 'Tech-Stack',
        'tech.subtitle': 'Tools, die ich täglich verwende. Fahren Sie mit der Maus darüber, um mehr zu erfahren.',
        'tech.showMore': 'Mehr Technologien anzeigen',
        'tech.showLess': 'Weniger anzeigen',
        'tech.divider': 'Derzeit lerne ich',
        'tech.java': 'Robuste Sprache für Unternehmens-Backend-Systeme.',
        'tech.php': 'Dynamische und schnelle Webentwicklung für Server.',
        'tech.javascript': 'Frontend-Interaktivität und Backend-Logik.',
        'tech.playwright': 'End-to-End-Browsertests mit stabiler API und Parallelisierung.',
        'tech.html': 'Semantische Struktur und responsives visuelles Styling.',
        'tech.sql': 'Effiziente Datenbankmodellierung und -abfrage.',
        'tech.python': 'Automatisierung, Datenverarbeitung und KI.',
        'tech.git': 'Versionskontrolle und Teamzusammenarbeit.',
        'tech.docker': 'Containerisierung für konsistente Bereitstellungsumgebungen.',
        'tech.angular': 'Googles SPA-Framework für skalierbare Webanwendungen.',
        'tech.nodered': 'Flow-basierte Automatisierung für Integrationen, APIs und Low-Code-Orchestrierung.',
        'tech.chromadb': 'Vektordatenbank für Embeddings, semantische Suche und Speicher in KI-Apps.',
        'tech.kubernetes': 'Container-Orchestrierung mit Deployment, Skalierung und Resilienz.',
        'tech.azuredevops': 'Pipelines, Boards und Continuous Delivery im Azure-Ökosystem.',
        'tech.gitflow': 'Branching-Strategie zur Organisation von Features, Releases und Hotfixes.',
        'tech.devops': 'Kontinuierliche Integration (CI/CD) und agile Infrastruktur.',
        'tech.security': 'Datenschutz, Schwachstellen und OWASP.',
        'tech.ai': 'Integration mit LLMs und GenAI-Tools.',
        'tech.agile': 'Agile Methoden (Scrum/Kanban) für Projekte.',

        // Projects
        'projects.title': 'Projekte',
        'projects.showMore': 'Mehr Projekte anzeigen',
        'projects.showLess': 'Weniger anzeigen',
        'projects.realworld.title': 'RealWorld Automation',
        'projects.realworld.description': 'Full-Stack-Automatisierungslabor: E2E-Tests mit Playwright für die RealWorld Conduit-App (Angular + Spring Boot + PostgreSQL), containerisiert mit Docker.',
        'projects.meveum.title': 'MeVeUm',
        'projects.meveum.description': 'Betriebssystem für Restaurants mit digitaler Speisekarte, WhatsApp-Checkout, CRM, Bestellungen, Zahlungen und Automatisierungen. Ich war für das komplette Spring-Boot-Backend und die Automatisierungsschicht mit Playwright verantwortlich.',
        'projects.partituras.title': 'Partituras API',
        'projects.partituras.description': 'Spring Boot REST-API zur Verwaltung von Noten, zum Üben von Schichtenarchitektur, Validierungen und Crescer-Best Practices.',
        'projects.portfolio.title': 'Portfolio & Blog',
        'projects.portfolio.description': 'Quellcode dieser Website. Entwickelt mit HTML, CSS und Vanilla JavaScript, mit nativem Mehrsprachensystem und statischer Blog-Generierung.',

        // Experience Section
        'experience.title': 'Berufserfahrung',
        'experience.current': 'Aktuell',
        'experience.cwi.company': 'CWI Software',
        'experience.cwi.position': 'QA Intern',
        'experience.cwi.description': 'Ich arbeite als QA Intern bei CWI im Rocket-Projekt mit Fokus auf Softwarequalität und automatisierte Tests.',
        'experience.crescer.title': 'Crescer Level 2',
        'experience.crescer.position': 'Praktikum',
        'experience.crescer.description': 'Level 2 des Crescer-Programms, in dem ich den QA-Schwerpunkt verfolgt habe, mit Fokus auf Softwaretests, Automatisierung und Qualitätssicherung.',
        'experience.conservatory.company': 'Tatuí-Konservatorium',
        'experience.conservatory.position': 'Stipendiat - Gitarrenkammer',
        'experience.conservatory.description': 'Professionelle Auftritte als Musiker, Entwicklung strenger Disziplin, Teamarbeit und Zeitmanagement unter dem Druck öffentlicher Auftritte.',
        'experience.microtec.company': 'Microtec Bürobedarf und IT',
        'experience.microtec.position': 'IT-Praktikant',
        'experience.microtec.description': 'Technischer Support (Hardware/Software), Bestandsverwaltung und Kundenservice.',

        // Footer
        'footer.title': 'Lass uns reden?',
        'footer.description': 'Ich bin offen für Möglichkeiten in der Webentwicklung (Backend/Fullstack).',
        'footer.sendEmail': 'E-Mail senden',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Quellcode der Website',
        'footer.copyright': '© 2025-2026 Rafael Dias Garcia - All Rights Reserved',

        // Contact Modal
        'contact.title': 'Nachricht senden',
        'contact.emailLabel': 'Ihre E-Mail',
        'contact.emailPlaceholder': 'name@beispiel.com',
        'contact.messageLabel': 'Nachricht',
        'contact.messagePlaceholder': 'Wie kann ich helfen?',
        'contact.sendButton': 'Jetzt senden',
        'contact.successTitle': 'Nachricht gesendet!',
        'contact.successMessage': 'Vielen Dank für Ihre Kontaktaufnahme. Ich werde mich in Kürze bei Ihnen melden.',
        'contact.errorTitle': 'Fehler beim Senden',
        'contact.errorMessage': 'Es gab ein Problem. Bitte versuchen Sie es erneut oder verwenden Sie meine direkte E-Mail.',
        'contact.tryAgain': 'Erneut versuchen',
        'contact.close': 'Schließen',

        // Certificates Modal
        'certs.title': 'Zertifikate & Kurse',
        'certs.cs50': 'CS50: Einführung in die Informatik',
        'certs.cs50.org': 'Harvard-Universität',
        'certs.cisco': 'JavaScript Essentials',
        'certs.cisco.org': 'Cisco Networking Academy',
        'certs.huawei': 'Python Fortgeschritten',
        'certs.huawei.org': 'Huawei Talent Online',
        'certs.english': 'Fortgeschrittenes Englisch (C1)',
        'certs.english.org': 'UNINTER - U-BEST',
        'certs.cwi': 'CWI Creser',
        'certs.cwi.org': 'CWI Crescer',
        'certs.devdojo': 'Java & Spring Boot Bootcamp',
        'certs.devdojo.org': 'DevDojo',
        'certs.info': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',

        // Mobile Menu
        'mobile.menu': 'Menü',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Lass uns reden',
        'mobile.language': 'Sprache',

        // Tooltips
        'tooltip.university': 'Universitätszentrum der Integrierten Fakultäten von Ourinhos',
        'tooltip.englishLevel': 'Fortgeschrittenes Englischniveau nach dem Gemeinsamen Europäischen Referenzrahmen für Sprachen',
        'tooltip.degree': 'Derzeit im 4. Semester Software-Engineering an der UNIFIO',
        'tooltip.viewCertificate': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',
    }
};

// Language configurations
const languages = {
    'pt-BR': { name: 'Português', flag: '🇧🇷' },
    'en': { name: 'English', flag: '🇺🇸' },
    'es': { name: 'Español', flag: '🇪🇸' },
    'zh': { name: '中文', flag: '🇨🇳' },
    'de': { name: 'Deutsch', flag: '🇩🇪' }
};

// Initialize i18n
let currentLanguage = localStorage.getItem('language') || 'pt-BR';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageSelector();
}

function updatePageLanguage() {
    const t = translations[currentLanguage];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Check if the element should use innerHTML (for elements with HTML tags)
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });

    // Update tooltips only if Bootstrap is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        // Update tooltips - dispose all first, then recreate
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => {
            const tooltipInstance = bootstrap.Tooltip.getInstance(element);
            if (tooltipInstance) {
                tooltipInstance.dispose();
            }
        });

        // Now update tooltip text and recreate them
        document.querySelectorAll('[data-i18n-tooltip]').forEach(element => {
            const key = element.getAttribute('data-i18n-tooltip');
            if (t[key]) {
                // Update the data-bs-title attribute
                element.setAttribute('data-bs-title', t[key]);
            }
        });

        // Reinitialize all tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].forEach(tooltipTriggerEl => {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

function updateLanguageSelector() {
    const currentLang = languages[currentLanguage];

    // Update desktop selector
    const desktopBtn = document.getElementById('languageSelectorBtn');
    if (desktopBtn) {
        desktopBtn.innerHTML = `${currentLang.flag} <i class="fas fa-chevron-down ms-1"></i>`;
    }

    // Update mobile selector
    const mobileBtn = document.getElementById('mobileLanguageBtn');
    if (mobileBtn) {
        mobileBtn.innerHTML = `<span class="flag-emoji">${currentLang.flag}</span>`;
    }

    // Update active state in dropdowns
    document.querySelectorAll('[data-lang]').forEach(item => {
        const lang = item.getAttribute('data-lang');
        if (lang === currentLanguage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Small delay to ensure Bootstrap tooltips are initialized first
    setTimeout(function () {
        // Set initial language
        updatePageLanguage();
        updateLanguageSelector();
    }, 50);

    // Add click handlers for language selection
    document.querySelectorAll('[data-lang]').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);

            // Close dropdowns after selection
            const desktopDropdown = document.getElementById('languageDropdown');
            const mobileDropdown = document.getElementById('mobileLanguageDropdown');

            if (desktopDropdown) {
                desktopDropdown.classList.remove('show');
            }
            if (mobileDropdown) {
                mobileDropdown.classList.remove('show');
            }
        });
    });
});

// Export for global use
window.i18n = {
    setLanguage,
    currentLanguage: () => currentLanguage,
    translate: (key) => translations[currentLanguage][key] || key
};

