// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub profiles and my interesting GitHub repos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Describe fully myself without specializing in any fields.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-mixture-of-experts-first-diggin-39",
        
          title: "Mixture-of-Experts - first diggin&#39;",
        
        description: "my first take when discovering MoE",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/moe-overview/";
          
        },
      },{id: "post-i-am-done-my-thesis-so-what-39-s-next",
        
          title: "I am done my Thesis, so what&#39;s next?",
        
        description: "my sharing after finishing my thesis",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/thesis-reflection/";
          
        },
      },{id: "post-i-use-arch-btw",
        
          title: "I use Arch, btw",
        
        description: "a brief story of my try on archlinux",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/arch/";
          
        },
      },{id: "post-đại-đội-trưởng-của-tôi-của-anh-của-chúng-ta",
        
          title: "Đại đội trưởng của tôi - của anh, của chúng ta",
        
        description: "Cảm nhận về vở chèo Đại đội trưởng của tôi",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/dai-doi-truong-cua-toi/";
          
        },
      },{id: "post-khăn-piêu-rơi-ở-chốn-nào-để-người-khách-cũ-lao-xao-trong-lòng",
        
          title: "Khăn Piêu rơi ở chốn nào - Để người khách cũ lao xao...",
        
        description: "Cảm nhận về tiết mục Chiếc Khăn Piêu của nhà Cá Lớn trong chương trình ATVNCG 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chiec-khan-pieu-ca-lon/";
          
        },
      },{id: "post-quantum-first-reflection",
        
          title: "Quantum first reflection",
        
        description: "my first feeling when get into HPQC Team",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/quantum-first-reflection/";
          
        },
      },{id: "post-my-neovim-kickstart-new-tool-that-i-love",
        
          title: "my neovim kickstart - new tool that I love",
        
        description: "a brief story of my try on archlinux",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/nvim-kickstart/";
          
        },
      },{id: "post-from-first-interview-to-first-internship",
        
          title: "From First Interview to First Internship",
        
        description: "my story and some sharings when I get into intership hunt",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/first-interview-first-internship/";
          
        },
      },{id: "post-my-ielts-journey",
        
          title: "My IELTS Journey",
        
        description: "an honest review and my preparation for the exam",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ielts-review/";
          
        },
      },{id: "news-start-my-internship-at-vierobot",
          title: 'Start my internship at Vierobot',
          description: "",
          section: "News",},{id: "news-join-hpqc-team-hcmut",
          title: 'Join HPQC Team - HCMUT',
          description: "",
          section: "News",},{id: "news-start-my-internship-at-bgsv",
          title: 'Start my internship at BGSV',
          description: "",
          section: "News",},{id: "news-submit-the-hardcover-version-of-my-thesis-to-the-faculty",
          title: 'Submit the hardcover version of my Thesis to the Faculty',
          description: "",
          section: "News",},{id: "projects-ar-photocards",
          title: 'AR Photocards',
          description: "a support project for NSND Tu Long at ATVNCG Concert Day3, 4 with Augmented Reality technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AR_photocards/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/vtrnnhlinh", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%74%72%6E%6E%68%6C%69%6E%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/vtrnnhlinh", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/vtrnnhlinh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vtrnnhlinh", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
