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
