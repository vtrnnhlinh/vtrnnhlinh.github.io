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
        },{id: "post-hallucination-in-nlg-hallelujah-yappin-39-ya",
        
          title: "Hallucination in NLG - Hallelujah yappin&#39; ya",
        
        description: "in this post we will discover the world of hallucination in NLG",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nlg-hallucination/";
          
        },
      },{id: "post-aug-2025-reading-log",
        
          title: "Aug 2025 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/aug-2025-reading-log/";
          
        },
      },{id: "post-ithya-magic-studies-joins-the-gang",
        
          title: "Ithya Magic Studies joins the gang",
        
        description: "my new recommend tool for studying",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ithya-in-system/";
          
        },
      },{id: "post-đất-nước-trọn-niềm-vui-đăng-dương-và-chuyện-xưa",
        
          title: "Đất nước trọn niềm vui, Đăng Dương và chuyện xưa",
        
        description: "ngẫu nhiên về nhạc đỏ",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/dat-nuoc-tron-niem-vui/";
          
        },
      },{id: "post-obsidian-tour-august-2025",
        
          title: "Obsidian Tour - August 2025",
        
        description: "my obsidian theme and setup at August 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/obsidian-aug-2025/";
          
        },
      },{id: "post-graphrag-and-linh-theory-and-practice",
        
          title: "GraphRAG and Linh - theory and practice",
        
        description: "in this post I am on my way to battle with the datasets",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/graphrag-theory-and-practice/";
          
        },
      },{id: "post-graph-of-models-literature-review-4-embracing-the-kgs",
        
          title: "Graph-of-Models - Literature Review 4 - embracing the KGs",
        
        description: "in this post I reflect my understanding in shaping the KGs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gom-literature-review-3/";
          
        },
      },{id: "post-july-2025-reading-log",
        
          title: "July 2025 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/july-25-reading-log/";
          
        },
      },{id: "post-codelynn-fantasies-and-mlops",
        
          title: "codeLynn - fantasies and MLOps",
        
        description: "in this post I will land another project",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/codeLynn-0/";
          
        },
      },{id: "post-graph-of-models-a-journey-of-a-thousand-miles-begins-with-a-single-step",
        
          title: "Graph-of-Models - a journey of a thousand miles begins with a single step...",
        
        description: "the results and reflection of cosine similarity graph and first attempt to fine-tune",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gom-action-0/";
          
        },
      },{id: "post-graph-of-models-first-sketch",
        
          title: "Graph-of-Models - First Sketch",
        
        description: "the first step in developing GoM, to sketch what I will do and the most abstract ideas",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gom-design-0/";
          
        },
      },{id: "post-graph-of-models-literature-review-3-and-they-call-llm-and-kg",
        
          title: "Graph-of-Models - Literature Review 3 - and they call LLM and KG",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gom-literature-review-2/";
          
        },
      },{id: "post-june-2025-reading-log",
        
          title: "June 2025 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/june-25-reading-log/";
          
        },
      },{id: "post-my-first-ereader-kobo-clara-colour",
        
          title: "my first ereader - Kobo Clara Colour",
        
        description: "some random thoughts about my first ereader",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-first-ereader/";
          
        },
      },{id: "post-graph-of-models-literature-review-2-gacllm",
        
          title: "Graph-of-Models - Literature Review 2 - GaCLLM",
        
        description: "the second literature review of my series writting about my work I called Graph-of-Models",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gom-literature-review-1/";
          
        },
      },{id: "post-graph-of-models-literature-review-1-transformer-and-moh",
        
          title: "Graph-of-Models - Literature Review 1 - Transformer and MoH",
        
        description: "the first literature review of my series writting about my work I called Graph-of-Models",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/gom-literature-review-0/";
          
        },
      },{id: "post-my-life-setup-summer-2025",
        
          title: "My Life Setup - Summer 2025",
        
        description: "my routines and tools used for summer 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-life-setup-summer-25/";
          
        },
      },{id: "post-tutorial-megatron-swift-and-qwen2-5-installation",
        
          title: "Tutorial - Megatron-SWIFT and Qwen2.5 Installation",
        
        description: "my tutorial to install Megatron-SWIFT to train Qwen2.5 locally",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/megatron-swift-installation/";
          
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
      },{id: "post-january-2025-reading-log",
        
          title: "January 2025 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/jan-25-reading-log/";
          
        },
      },{id: "post-deccember-24-reading-log",
        
          title: "Deccember 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/dec-24-reading-log/";
          
        },
      },{id: "post-november-24-reading-log",
        
          title: "November 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/nov-24-reading-log/";
          
        },
      },{id: "post-october-24-reading-log",
        
          title: "October 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/oct-24-reading-log/";
          
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
      },{id: "post-august-24-reading-log",
        
          title: "August 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/aug-24-reading-log/";
          
        },
      },{id: "post-july-24-reading-log",
        
          title: "July 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/july-24-reading-log/";
          
        },
      },{id: "post-june-24-reading-log",
        
          title: "June 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/june-24-reading-log/";
          
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
      },{id: "post-may-24-reading-log",
        
          title: "May 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/may-24-reading-log/";
          
        },
      },{id: "post-april-24-reading-log",
        
          title: "April 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/apr-24-reading-log/";
          
        },
      },{id: "post-from-first-interview-to-first-internship",
        
          title: "From First Interview to First Internship",
        
        description: "my story and some sharings when I get into intership hunt",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/first-interview-first-internship/";
          
        },
      },{id: "post-march-24-reading-log",
        
          title: "March 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mar-24-reading-log/";
          
        },
      },{id: "post-february-24-reading-log",
        
          title: "February 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/feb-24-reading-log/";
          
        },
      },{id: "post-january-24-reading-log",
        
          title: "January 24 Reading Log",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/jan-24-reading-log/";
          
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
          section: "News",},{id: "projects-ar-augmented-reality-for-photocards",
          title: 'AR - Augmented Reality for Photocards',
          description: "a support project for NSND Tu Long at ATVNCG Concert Day3, 4 with Augmented Reality technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AR/";
            },},{id: "projects-graphrag-mini-pipeline",
          title: 'graphrag-mini-pipeline',
          description: "an implementation of GraphRAG",
          section: "Projects",handler: () => {
              window.location.href = "/projects/graphrag-mini-pipeline/";
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
