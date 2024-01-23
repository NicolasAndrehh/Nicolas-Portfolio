// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: {
          home: 'Home',
          about: 'About',
          projects: 'Projects',
          contact: 'Contact',
        },
        home: {
          title1: 'Full-Stack',
          title2: 'Web Developer',
          subtitle: {
            normalText: 'I enjoy building web applications with',
            highlight: ' React, Redux, and Ruby on Rails',
          },
          socialsText: 'Find me on',
          downloadText: 'Download CV',
        },
        projects: {
          title: 'My Recent Projects',
          subtitle: 'Here are a few of the things I\'ve been working on lately.',
          liveDemo: 'Live Demo',
          sourceCode: 'Source Code',
          descriptions: {
            1: 'Website that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
            2: 'Website that displays a list of books and allows you to add and remove books from that list. UI created from a Medium-fidelity wireframe.',
            3: 'Website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
            4: 'Website that provides a complete database of characters from the show, accessed through the Rick and Morty API.',
            5: 'Website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
            6: 'Open-source platform for exploring anime by genre, powered by the Jikan API. It aims to make discovering new titles based on preferred genres easy and accessible for anime lovers.',
            7: 'Mobile web app for budget management. Track your transactions, categorize expenses, and gain insights into your spending habits. Stay in control of your finances with ease.',
            8: 'Website project created with React, Ruby on Rails, Postgresql and Redux that offers videogames for rent. The user can create a new account and log in with email and password.',
          },
          seeLess: 'See less',
          seeMore: 'See more',
        },
        about: {
          experienceAndEducation: {
            title: 'Experience & Education',
            microverse: {
              timeline: 'Now',
              title: 'Full-Stack Web Development',
              date: 'Jan 2023 - Aug 2023',
              description: 'Accumulated over 1300 hours dedicated to mastering algorithms, data structures, and full-stack development. Simultaneously, I crafted projects using Ruby, Rails, JavaScript, React, and Redux. Gained expertise in remote pair programming through GitHub, employing industry-standard git-flow and participating in daily standups for seamless communication and collaboration with international remote developers.',
            },
            rappi: {
              timeline: '2023',
              professionalHighlight: 'Professional Experience',
              title: 'Back-End Developer',
              date: 'July 2022 - July 2023 (1 Year)',
              description: {
                paragraphs: {
                  1: 'Collaborated with senior developers to design and implement RESTful APIs using ',
                  2: ' and ',
                  3: ' Notably, I contributed to creating the authentication and authorization endpoint for the \'About Rappi page\'. Managing HTTP ',
                  4: ' and handling ',
                  5: ' refined my backend development skills and provided insights into maintaining a robust tech ecosystem at Rappi.',
                },
                highlights: {
                  1: 'Spring Boot',
                  2: 'Kotlin.',
                  3: 'requests / responses',
                  4: 'excetions / errors',
                },
              },
            },
            sena: {
              timeline: '2022',
              title: 'Software Analysis and Development',
              date: 'Jan 2021 - June 2022',
              description: 'Introduced to programming here, I built a strong base for a software analyst and developer role. This career involves mastering software application tasks like analysis, design, development, and maintenance. Proficiency in programming languages, collaboration, and crafting efficient solutions are crucial. In today\'s tech-focused world, software analysis and development offer substantial growth and innovation opportunities.',
            },
          },
          aboutMe: {
            title: 'About Me',
            description: {
              paragraphs: {
                1: '👋 Hey there! I\'m Nicolas Olaya, a Full Stack Web Developer with ',
                2: 'Specialized in ',
                3: ' for dynamic front-end experiences and ',
                4: ' for robust back-end solutions and proficient in ',
                5: ' for effective database management.',
                6: 'I\'ve had the privilege of contributing to diverse projects, ensuring both ',
                7: ' and a great ',
                8: 'Let\'s connect and explore how my skills can elevate your next web development endeavor!',
              },
              highlights: {
                1: '1 year of hands-on experience.',
                2: 'React',
                3: 'Ruby on Rails',
                4: 'SQL',
                5: 'functionality',
                6: 'user experience.',
              },
            },
          },
        },
        contact: {
          title: 'Contact Me.',
          form: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            submit: 'Send',
          },
        },
      },
    },
    es: {
      translation: {
        header: {
          home: 'Inicio',
          about: 'Sobre mí',
          projects: 'Proyectos',
          contact: 'Contacto',
        },
        home: {
          title1: 'Desarrollador',
          title2: 'Web Full-Stack',
          subtitle: {
            normalText: 'Disfruto construir aplicaciones web con',
            highlight: ' React, Redux y Ruby on Rails',
          },
          socialsText: 'Encuéntrame en',
          downloadText: 'Descargar CV',
        },
        projects: {
          title: 'Mis Proyectos Recientes',
          subtitle: 'Aquí hay algunas de las cosas en las que he estado trabajando últimamente.',
          liveDemo: 'Ver demo',
          sourceCode: 'Código fuente',
          descriptions: {
            1: 'Sitio web que ayuda a organizar tu día. Simplemente enumera las cosas que necesitas hacer y te permite marcarlas como completas.',
            2: 'Sitio web que muestra una lista de libros y te permite agregar y quitar libros de esa lista. IU creada a partir de un wireframe de fidelidad media.',
            3: 'Sitio web que muestra puntajes enviados por diferentes jugadores. También te permite enviar tu puntaje. Todos los datos se conservan gracias al servicio externo de API de Leaderboard.',
            4: 'Sitio web que proporciona una base de datos completa de personajes del programa, accedida a través de la API de Rick and Morty.',
            5: 'Sitio web para todos los fanáticos de las matemáticas. Es una Single Page App (SPA) que permite a los usuarios realizar cálculos simples y leer una cita relacionada con las matemáticas al azar.',
            6: 'Plataforma de código abierto para explorar anime por género, impulsada por la API Jikan. Su objetivo es facilitar y hacer accesible a los amantes del anime el descubrimiento de nuevos títulos basados en géneros preferidos.',
            7: 'Aplicación web móvil para la gestión de presupuestos. Realiza un seguimiento de tus transacciones, categoriza gastos y obtén información sobre tus hábitos de gasto. Mantente en control de tus finanzas con facilidad.',
            8: 'Proyecto de sitio web creado con React, Ruby on Rails, Postgresql y Redux que ofrece videojuegos en alquiler. El usuario puede crear una cuenta nueva e iniciar sesión con correo electrónico y contraseña.',
          },
          seeLess: 'Ver menos',
          seeMore: 'Ver más',
        },
        about: {
          experienceAndEducation: {
            title: 'Experiencia y Educación',
            microverse: {
              timeline: 'Ahora',
              title: 'Desarrollo Web Full-Stack',
              date: 'Enero 2023 - Agosto 2023',
              description: 'Acumulé más de 1300 horas dedicadas a dominar algoritmos, estructuras de datos y desarrollo full-stack. Al mismo tiempo, creé proyectos utilizando Ruby, Rails, JavaScript, React y Redux. Adquirí experiencia en programación en pareja remota a través de GitHub, empleando git-flow estándar de la industria y participando en reuniones diarias para una comunicación y colaboración perfectas con desarrolladores remotos internacionales.',
            },
            rappi: {
              timeline: '2023',
              professionalHighlight: 'Experiencia Profesional',
              title: 'Desarrollador Back-End',
              date: 'Julio 2022 - Julio 2023 (1 Año)',
              description: {
                paragraphs: {
                  1: 'Colaboré con desarrolladores senior para diseñar e implementar APIs RESTful utilizando ',
                  2: ' y ',
                  3: ' Destacablemente, contribuí a crear el endpoint de autenticación y autorización para la página \'Acerca de Rappi\'. Manejar HTTP ',
                  4: ' y manejar ',
                  5: ' refinó mis habilidades de desarrollo backend y proporcionó información sobre cómo mantener un ecosistema tecnológico sólido en Rappi.',
                },
                highlights: {
                  1: 'Spring Boot',
                  2: 'Kotlin.',
                  3: 'solicitudes / respuestas',
                  4: 'excepciones / errores',
                },
              },
            },
            sena: {
              timeline: '2022',
              title: 'Análisis y Desarrollo de Software',
              date: 'Enero 2021 - Junio 2022',
              description: 'Introducido a la programación aquí, construí una base sólida para un rol de analista y desarrollador de software. Esta carrera implica dominar tareas de aplicaciones de software como análisis, diseño, desarrollo y mantenimiento. La competencia en lenguajes de programación, la colaboración y la elaboración de soluciones eficientes son cruciales. En el mundo actual centrado en la tecnología, el análisis y desarrollo de software ofrecen oportunidades sustanciales de crecimiento e innovación.',
            },
          },
          aboutMe: {
            title: 'Sobre mí',
            description: {
              paragraphs: {
                1: '👋 ¡Hola! Soy Nicolas Olaya, un desarrollador web Full Stack con ',
                2: 'Especializado en ',
                3: ' para experiencias front-end dinámicas, ',
                4: ' para soluciones back-end robustas y experto en ',
                5: ' para una gestión eficaz de bases de datos.',
                6: 'He tenido el privilegio de contribuir a diversos proyectos, asegurando tanto ',
                7: ' como una gran ',
                8: '¡Conectemos y exploremos cómo mis habilidades pueden elevar tu próximo emprendimiento de desarrollo web!',
              },
              highlights: {
                1: '1 año de experiencia práctica.',
                2: 'React',
                3: 'Ruby on Rails',
                4: 'SQL',
                5: 'funcionalidad',
                6: 'experiencia de usuario.',
              },
            },
          },
        },
        contact: {
          title: 'Contáctame.',
          form: {
            name: 'Nombre',
            email: 'Correo',
            message: 'Mensaje',
            submit: 'Enviar',
          },
        },
      },
    },
  },
  lng: 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
