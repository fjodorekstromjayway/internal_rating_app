import DS from 'ember-data';

//////////////////////////////////
////// LIVE DATA /////////////////
//////////////////////////////////

/*export default DS.Model.extend({
  title: DS.attr('string'),
  presenter: DS.attr('string'),
  description: DS.attr('string'),
  area: DS.attr(),
  rating: DS.attr('number'),
  recommendation: DS.attr('number')
});*/

///////////////////////////////////
/////////// FIXTURE DATA //////////
///////////////////////////////////
var Session = DS.Model.extend({
  title: DS.attr('string'),
  abstract: DS.attr('string'),
  start_time: DS.attr('string'),
  end_time: DS.attr('string'),
  speakers: DS.attr('string'),
  space_name: DS.attr('string'),
  ratings: DS.attr(),
  unixtime_start: function(){
    var dateString = this.get('start_time');
    if(dateString){
    dateString = dateString.split(' ').join('T');
    }
    document.write(dateString);
    var date = new Date(dateString);
    document.write('<br />' + date);
    date = date.getTime() / 1000;
    return date;
  }.property('start_time'),
  day: function(){
    var date = this.get('start_time');
    var datetime = date.substr(8,8);
    var day = datetime.substr(0,2);
    var days = ['Tuesday','Wednesday', 'Thursday', 'Friday'];
    if(day == '04'){
      return days[0];
    }
    if(day=='05'){
      return days[1];
    }
    if(day=='06'){
      return days[2];
    }
    if(day == '07'){
      return days[3];
    }
    return day;
  }.property('start_time'),
  time: function(){
    var date = this.get('start_time');
    var datetime = date.substr(10,12);
    return datetime.substr(0,6);
  }.property('start_time'),
  time_end: function(){
    var date = this.get('end_time');
    var datetime = date.substr(10,12);
    return datetime.substr(0,6);
  }.property('start_time'),
  total_rating: function(){
    var ratings = this.get('ratings');
    var rates = [];
    ratings.forEach(function(ratingItem){
      if(ratingItem.rating == ''){
        rates.push(0);
      } else {
        var rate = parseInt(ratingItem.rating);
        rates.push(rate);
      }
    });
    var sum = 0;
    rates.forEach(function(rat){
      sum = sum + rat;
    });

    console.log(sum);
    var max = rates.length * 5;
    var p = sum/max;
    var percent = p * 100;
    return percent;
  }.property('ratings')
});

/*Session.reopenClass({
	FIXTURES: [
  {
    "crowdsource_ref": "2014/340C210441BED6E6C1257D62003CDEDF",
    "title": "The Gradle Build System In Depth",
    "abstract": "This workshop will be a hands on deep dive into building software with Gradle. \nWe will go beyond compilation and testing of simple JVM based projects and look at how Gradle supports the needs of build, release and delivery engineers in building both complex projects and dealing with software production at scale.\nAttendees will perform practical lab exercises that provide a deep understanding of Gradle fundamentals that enables solving of complex problems.\nTopics include:\n* Dependency management\n* Gradle plugin use and development\n* Exploration of the larger Gradle ecosystem\n* Multi project builds\n* Migration strategies\n* Custom build logic\n* Build performance",
    "url": "http://oredev.org/2014/sessions/the-gradle-build-system-in-depth",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/9611815032EFD06FC1257D620034776B",
        "name": "Peter Niederwieser",
        "role": "Gradleware",
        "bio": "Peter is a Principal Engineer at Gradleware, and the creator of the Spock Testing Framework. When not in front of his computer, he can often be found speaking at a conference, playing a game of chess, or eating chocolate."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/5CA7E98F9EFE5C44C1257CAC003821B2",
    "title": "Continuous Delivery Workshop",
    "abstract": "Getting software released to users is often a painful, risky, and time-consuming process. This workshop sets out the principles and technical practices that enable rapid, incremental delivery of high quality, valuable new functionality to users. Through automation of the build, deployment, and testing process, and improved collaboration between developers, testers and operations, delivery teams can get changes released in a matter of hours â€“ sometimes even minutes â€“ no matter what the size of a project or the complexity of its code base. The workshop materials are derived from the best selling book Continuous Delivery and creating in collaboration with the authors and other of my ThoughtWorks colleagues.\nPart 1: Deployment Pipelines\nIn this workshop I move from release back through testing to development practices, analyzing at each stage how to improve collaboration and increase feedback so as to make the delivery process as fast and efficient as possible. At the heart of the workshop is a pattern called the deployment pipeline, which involves the creation of a living system that models your organizationâ€™s value stream for delivering software. I spend the first half of the workshop introducing this pattern, and discussing how to incrementally automate the build, test and deployment process, culminating in continuous deployment.\nPart 2: Agile Infrastructure\nIn the second half of the workshop, I introduce agile infrastructure, including the use of Puppet to automate the management of testing and production environments. We discuss automating data management, including migrations. Development practices that enable incremental development and delivery will be covered at length, including a discussion of why branching is inimical to continuous delivery, and how practices such as branch by abstraction and componentization provide superior alternatives that enable large and distributed teams to deliver incrementally.\n",
    "url": "http://oredev.org/2014/sessions/continuous-delivery-workshop",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/AC1CE075351BC0A7C1257CAC003751A9",
        "name": "Neal Ford",
        "role": "ThoughtWorks, Inc",
        "bio": "Neal Ford is Director, Software Architect, and Meme Wrangler at ThoughtWorks, a global IT consultancy with an exclusive focus on end-to-end software development and delivery. He is also the designer and developer of applications, magazine articles, video/DVD presentations, and author and/or editor of eight books spanning a variety of subjects and technologies, including the most recent Presentation Patterns. He focuses on designing and building of large-scale enterprise applications. He is also an internationally acclaimed speaker, speaking at over 300 developer conferences worldwide, delivering more than 2000 presentations. Check out his web site at nealford.com. He welcomes feedback and can be reached at nford@thoughtworks.com.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/684F9A7004F4631AC1257CAB000A44B6",
    "title": "Drawing Without Fear - Give Yourself Permission to Create",
    "abstract": "Do you want to create art, capture ideas or take notes in sketches, or simply have fun drawing but are afraid to get started? Have you tried to express yourself through sketching or drawing but feel like you just can't do it? Are you worried that you are not &quot;good enough&quot; or what people might say about you or your art?\nIn this workshop we will explore what it really means to create art by doing it, and how to free your mind so you can draw without fear. Many people who have tried these simple techniques have learned to capture their ideas, moods, and thoughts in line drawings and sketches.\nThis is a 100% hands on experience where you will follow some easy exercises and learn how to:\n- Make simple yet expressive drawings\n- Get ideas and find new ways of thinking\n- Reduce or eliminate your fear of failure\nAndrea has given this workshop to children and adults (including software folks) and many have found these easy and fun exercises and techniques to be a big help in going from &quot;I wish I could&quot; to &quot;wow, I can!&quot; in just a day or so. You ARE good enough, you CAN draw.",
    "url": "http://oredev.org/2014/sessions/drawing-without-fear--give-yourself-permission-to-create",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/5D3418B7E0CFC74DC1257CA7000C2334",
        "name": "Andrea Zuill",
        "role": "Andrea Zuill, Author and Illustrator",
        "bio": "Andrea was born in the agricultural town of Bakersfield, CA and moved to the San Diego area when she married. For 20 years she owned and ran a sign and graphics company. At the same time Andrea created oil paintings, serigraphs, watercolors, and digital prints. Sheâ€™s still painting and her work shows in galleries in California, Texas and New York. \n\nAndreaâ€™s work has been exhibited in the San Diego Museum of Art and the Brand Library gallery, where she won the Disney Imagineering award. In 2006 she started a series of art prints which portrayed funny and somewhat cranky characters. \n\nAndrea's blog has given her a forum where she can exercise her funny bone. Besides writing articles about crafting, she writes and illustrates some very goofy stories. With everything she has learned from her blog, and her love of creating silly artwork, Andrea knew that she wanted to be involved in childrenâ€™s books, and has published a number of books used in educational programs.\n\nA member of the SCBWI, she won the 2010 SCBWI Mentorship award. Andrea Zuill is the 2013 Golden Gate Portfolio Award winner, and is the author and illustrator of a children's book being published in 2016 by Schwartz and Wade, an imprint of Random House. She is represented by Hen Ink, A Literary Studio. \n\nAndrea enjoys teaching and helping people learn to create art and release their art talents. She has taught art classes for children, educators, software developers and techies, and others.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/73878CA7FD319318C1257CED004BD7F9",
    "title": "Writing software using Java 8",
    "abstract": "Java 8 is the biggest update the the Java platform ever. New features include: lambdas, the streams API, default methods, a new date and time API, and various updates to annotations.\nIn this session you will learn how to use the new Java 8 features: lambdas and method references, the streams API and how to easily parallelize your code, and the new date and time API. You will also learn how to troubleshoot your code with Java Mission Control and the low overhead profiler Java Flight Recorder.",
    "url": "http://oredev.org/2014/sessions/writing-software-using-java-8",
    "space_name": "Optimus Prime",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/77EC9B25A19B938BC1257CED004A3262",
        "name": "Joel BorggrÃ©n-Franck",
        "role": "Oracle",
        "bio": "Language hacker/compiler engineer working on Java 9 and 10 at the Java Platform Group, Oracle"
      },
      {
        "crowdsource_ref": "2014/A7AB4487370E5385C1257D0B00409D1A",
        "name": "Klara Ward",
        "role": "Oracle",
        "bio": "Klara is a senior developer in the Java Mission Control team at Oracle, coding GUIs and hacking the build system. She has been working with Java/JRockit Mission Control and the JRockit JVM since 2002. If you ask a question on the Mission Control forum, chances are Klara will give you an answer. You can also get hold of her on twitter to get the crochet pattern for the JDuchess mascot."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/7B87B980D34EF1F5C1257CF2003DF378",
    "title": "Neo4j - How to work with a graph database",
    "abstract": "With the newest version of Neo4j out in the wild as a final release, we have a lot of new things to talk about: from changes to our core data model to new language concepts and keywords as well as all new interactive use-cases.\nThis training offers the first step in building a good knowledge of graph databases, and covers the core functionality of the open source Neo4j graph database. With a mixture of theory and hands-on practice sessions, you will quickly learn how easy it is to work with a powerful graph database using Cypher as the query language. \nThings you will learn:\nAn understanding of graph databases \nInstall and operate Neo4j\nUse the Neo4j development tools productively\nExploit the strengths of the Property Graph model and the Cypher query language\nBuild confidence in building a graph enabled application\nWhich topics will we cover?\nIntroduction to Neo4j\nOverview of Cypher graph query language\nSocial, logistics, recommendation, scientific and other use-cases in real world domains\nOpportunity to consult first hand with concrete questions on current projects, possible implementations and proof of concepts\nAttendees wonâ€™t need any previous experience with Neo4j, NOSQL databases or specific development languages, but will need their own laptop with Neo4j 2.x installed.\n",
    "url": "http://oredev.org/2014/sessions/neo4j--how-to-work-with-a-graph-database",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/6AB76927A02D49BFC1257CF2003D2971",
        "name": "David Montag",
        "role": "Neo Technology",
        "bio": "David Montag has been passionate about software ever since he was given his first Amiga 500 (with the RAM upgrade) at age seven. Now, many years later, he heads up pre-sales for Neo Technology, commercial backer of Neo4j, the most widely deployed graph database in the world."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/A1899E6F7D0E8384C1257D120071792A",
    "title": "Zero to a Beautiful Web App with Dart and Polymer",
    "abstract": "Dart and Polymer are a great combination â€“ they both aim to make developers more productive when writing code and building user experiences. This lab will provide an introduction to web developers with experience in Javascript. We will start with an introduction to the Dart language and tools and quickly move into building a simple, single-page web application using Polymer, data-binding, and &quot;Material Design&quot; with Paper Elements.",
    "url": "http://oredev.org/2014/sessions/zero-to-a-beautiful-web-app-with-dart-and-polymer",
    "space_name": "Mega Man",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3CD644A5333F2B59C1257CC800444862",
        "name": "Kevin Moore",
        "role": "Google",
        "bio": "Kevin is a Product Manager at Google working on the Dart language, libraries, and tools. Before joining Google, he was a contributor to the Dart project and a consultant specializing in open source web technologies."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/AB365EF8F5CAE414C1257CD9000B1E71",
    "title": "Mob Programming Hands-On Workshop - A Whole Team Approach",
    "abstract": "This one day workshop will allow participants to experience a full day of Mob Programming. We will share not only the mechanics of how to work together as a Mob, but also explore the underlying theory we have found make this form of development so effective for my team. Throughout the day we will be tackling a sample project and working on it using a full â€œextreme programmingâ€ approach - User stories, prioritization, test-driven development, refactoring, and retrospectives.\nÂ \nAt the end of the day you will come away from this class having experienced the joy and effectiveness of Mob Programming, as well as being equipped to continue on your own path and perhaps try it in your workplace with your team mates.\nPart of this experience is gathering what the individual participants most want to learn and adapting the experience to enable those outcomes.\nWe will probably use either C# or Java as the programming language for this session. However, the language is not important as long as at least several of the attendees are competent in the language we choose. It is not required that you join in the programming if you prefer to simply observe.\n",
    "url": "http://oredev.org/2014/sessions/mob-programming-hands-on-workshop--a-whole-team-approach",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/CCA74C459508ED29C1257CD8007D8FB8",
        "name": "Woody Zuill",
        "role": "Hunter Industries",
        "bio": "Woody Zuill has been programming computers for 30 years, and works as an Agile Coach/Development Manager. Over the last 15 years he has worked as an Agile Coach, Trainer, and Extreme Programmer. He believes code must be simple, clean, and maintainable to realize the Agile promise of Responding to Change. He spent many years as an artist/designer/manufacturer of graphics for televised sporting events where deadlines are for real. Loves Mob Programming."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/CC4304707D138718C1257CAE004BBC0D",
    "title": "AngularJS Bootcamp",
    "abstract": "Want to get started with AngularJS? This workshop will immerse you in the basics, the fundamentals, of AngularJS development.\n* project setup\n* binding\n* filters\n* directives\n* controllers\n* routing\n* ... and more\nAttendees should have solid knowledge of JavaScript and HTML.\n[I can work on a better long description]",
    "url": "http://oredev.org/2014/sessions/angularjs-bootcamp",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/FAD8E7F1F2E136C4C1257CAE004B278F",
        "name": "Joel Hooks",
        "role": "egghead.io",
        "bio": "Joel is a front end web developer that enjoys tackling the problems of the enterprise. He's passionate about teaching and is a co-founder of egghead.io, a website devoted to delivering bite-sized developer training videos. When he's not enjoying JavaScript (at least the Good Parts), he's home educating his 4 children deep in the heart of Texas."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D5EA6E2CF73F3FE0C1257CF4004756CC",
    "title": "See and Change: introduction to visual management",
    "abstract": "Creating great products we day by day collect and process huge amount of information. Have you ever felt lost in details without seeing a big picture? \nAdding more functionality we can miss hidden dependencies, connections and associations between work items. Words are often inaccurate and are freely interpreted by team members, which means that the meetings are longer and it is more difficult to find the definition of the problem and proper solutions. \nWe donâ€™t have to let the growing data-flow and work complexity overwhelm us. We can be spend less times in meetings and create fewer reports, we can see and act faster. \nVisual Management is what we can call a set of knowledge, skills and visual techniques to work with information visually. During the workshop we will grab the real data that is tasks and bugs pull from an open source project, and train on visualising it in all phases of the work under a product. \nSo we will work a lot, and in the end you will:\n- Get outside of the basics of Visual Management and Visual Thinking concepts\n- Take-away with the ready-made templates that you could use later for \n  brainstorming ideas when designing your product\n explaining concepts to your colleagues\n  organising information on kanban boards\n creating work plans for your team\n prioritising work items in a product backlog\n  visualising dependencies between work items\n- Understand how people think visually to know when and how you should use a specific visual approach\n- Try concrete techniques to work with relations, timelines, mind maps and boards.",
    "url": "http://oredev.org/2014/sessions/see-and-change-introduction-to-visual-management",
    "space_name": "KITT 2",
    "venue": "vfzb",
    "start_time": "2014-11-04 08:30:00",
    "end_time": "2014-11-04 17:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/107BA3FE8F36F5D2C1257CF40046C4DB",
        "name": "Natalie Yadrentseva",
        "role": "Targetprocess",
        "bio": "Natalie is a product specialist with Targetprocess and a passionate researcher in information visualisation. Previously she was involved in projects of various domains and was lucky to have an inner view being a developer, a business analyst and a project manager. Then she joined Targetprocess - an active software innovator in visual project management, and now consulting more than 150 companies around the world on the questions of work with the system, process optimization and agile transformation through the project life cycle. While having a strong technical background, nowadays she enjoys working at the complex people side and focuses on using data visualization techniques to speed up understanding and further actions dealing with the large amount of information."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2159ADD3E9004BBAC1257CDD00262D52",
    "title": "Cloud Pattern",
    "abstract": "Do we need to rethink how we architect our solutions when we move them to the cloud? How do cost, scaling, infinitive resources and other factors affects our application architecture?",
    "url": "http://oredev.org/2014/sessions/cloud-pattern",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/124D491762671ED0C1257CA100451F7C",
        "name": "Dag KÃ¶nig",
        "role": "Microsoft",
        "bio": "I am a developer that have been writing code since 1986. Since 2006, I have been working for Microsoft Sweden as a technical evangelist. I still like to learn new stuff, and I feel that I still is a beginner in many ways. Today I Work mainly with Windows Azure and Open Source."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/42B199A506AB41BEC1257D82004AF9B9",
    "title": "Beyond Smartphones",
    "abstract": "The era of SmartWear and Internet of Things is upon us - technological development is never at a standstill. This session will walk through 8000 years of human innovation and extrapolate scenarios for our near future. With a multitude of wearable devices not in our pocket, and augmented reality finally being placed in front of our eyes, what kind of disruption should we expect to see in the mobile development arena â€“ and what can be done already today?",
    "url": "http://oredev.org/2014/sessions/beyond-smartphones",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/95E2864242E7DD6CC1257D82004AE539",
        "name": "Troed Sangberg",
        "role": "Sony",
        "bio": "Troed SÃ¥ngberg is a developer advocate with Sony Developer Relations. With a core technical background in the home computer scene of the 80s heâ€™s been a professional telecom developer since the late 90s. Most recently he has worked in research, with an interest in the intersection between disruptive technology and the culture of society. Troed considers decentralisation of creation - how anyone anywhere can invent, distribute and disrupt - to be the major game changer of our times."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/80785283DCD39DFFC1257CAC0037B87F",
    "title": "Continuous Delivery for Architects",
    "abstract": "Continuous Delivery is a process for automating the production readiness of your application every time a change occurs â€“ to code, infrastructure, or configuration. It turns out that some architectures and practices yield code that works better in this environment. This session takes a deep dive into the intersection of the architect role and the engineering practices in Continuous Delivery. In the Continuous Delivery world, rather than hone skills at predicting the future via Big Design Up Front, the emphasis lies with techniques for understand and changing code with less cost during the process. I discuss the role of metrics to understand code, how Domain Driven Designâ€™s Bounded Context reifies in architecture, how to reduce intra-component/service coupling, and microservices architectures, and other engineering techniques.\n",
    "url": "http://oredev.org/2014/sessions/continuous-delivery-for-architects",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/AC1CE075351BC0A7C1257CAC003751A9",
        "name": "Neal Ford",
        "role": "ThoughtWorks, Inc",
        "bio": "Neal Ford is Director, Software Architect, and Meme Wrangler at ThoughtWorks, a global IT consultancy with an exclusive focus on end-to-end software development and delivery. He is also the designer and developer of applications, magazine articles, video/DVD presentations, and author and/or editor of eight books spanning a variety of subjects and technologies, including the most recent Presentation Patterns. He focuses on designing and building of large-scale enterprise applications. He is also an internationally acclaimed speaker, speaking at over 300 developer conferences worldwide, delivering more than 2000 presentations. Check out his web site at nealford.com. He welcomes feedback and can be reached at nford@thoughtworks.com.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B2652D4C1C1295C8C1257D5E0052019F",
    "title": "Web Components: Drunk on the Panacea",
    "abstract": "Web components are lauded as the 'Next Big Thing' in front-end web development, but as with most changes in life there are wonderful parts and... less than wonderful parts. Let's take a look at what it means to write a maintainable web application using only Javascript, these new browser APIs (Shadow DOM, HTML templates, HTML imports, and custom elements), and a polyfill for browsers that can't handle the awesome force of the future. How far can we get before we're writing our own framework with web components? What code are we writing over and over again that we can DRY up? We will examine this topic with some stories from web components experiments at Mozilla.",
    "url": "http://oredev.org/2014/sessions/web-components-drunk-on-the-panacea",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3B5D7259070D9F89C1257D5E00519298",
        "name": "Angelina Fabbro",
        "role": "Mozilla",
        "bio": "Angelina Fabbro is a long time web developer on the Developer Tools team at Mozilla."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/BAD358BFD4E8BF2EC1257CED005F42E5",
    "title": "Swift, swiftly",
    "abstract": "Revealed by Apple in June of this year, the Swift programming language has already established itself as a huge leap forward for iOS and OS X developers. Learn the ins and outs of this new language, see how it compares to other modern OO languages, and hear about how Apple developers are using Swift to achieve new levels of productivity and efficiency.",
    "url": "http://oredev.org/2014/sessions/swift-swiftly",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/F887B27706869DD5C1257CAB0005FDED",
        "name": "Jack Nutting",
        "role": "thoughtbot",
        "bio": "Jack Nutting has been using Cocoa since the olden days (long before it was even called Cocoa) to develop software for a wide range of industries and applications, including gaming, graphic design, online digital distribution, telecommunications, finance, publishing, and travel. Jack has written several books on iOS and OS X development, and currently works as a consultant on various iOS and OS X projects."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/CF80A0B7C4E1C4FDC1257CAC000F8547",
    "title": "Careful with those People Skills: You'll Poke Somebody's Eye Out!",
    "abstract": "&quot;People skills&quot; are offered up as a way to get along with people better, to get them to do what you want, and to generally make your life easier. But often, a simple technique can backfire and produce the opposite response. How do you know you're doing it right? Why do people get mad when you give your feedback exactly like the book says to do it?\nLao Tzu said &quot;The world is won by those who let it go.&quot; Giving up the steps and practices -- focusing instead on the underlying ideas and values -- can guide you to better relationships and better collaboration. Dig deep and learn how empathetic listening, authentic connection, and embodying compassion can fit naturally into your life and your work.",
    "url": "http://oredev.org/2014/sessions/careful-with-those-people-skills-youll-poke-somebodys-eye-out",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/DB6A8C5FA39DD9FFC1257CAC000E2134",
        "name": "Angela Harms",
        "role": "Maitria.com",
        "bio": "Angela Harms is an agile developer, coach, facilitator, and instigator. She loves beautiful code that emerges from collaboration, and learning new ways to make it work. When sheâ€™s not pairing on tests and the code they inspire, you can find her at conferences speaking about what sheâ€™s learned (so far), facilitating kick-ass retrospectives, or discussing the intersection of software and love in open space."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D275FEF1F28AB9AAC1257D2B006BD97D",
    "title": "Biohacking and bodyhacking",
    "abstract": "The age of cyborgs is already here. Already, millions of individuals are living their lives enhanced with smart implants and wearables.\nWhen med-tech implants and wearable information devices are increasingly adopted by the health and fitness industry as well as hacker gamer communities to develop and improve performance we have an incredibly powerful movement.\nIt gathers its power in corporate board rooms, gyms and health clubs, startup networks and basement tattoo parlours. It is the biohacker revolution and it is in the process of changing mankind forever.",
    "url": "http://oredev.org/2014/sessions/biohacking-and-bodyhacking",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3F8FABA2FCB7846BC1257D2B006B2AB7",
        "name": "Hannes SjÃ¶blad",
        "role": "Singularity University",
        "bio": "* Ambassador for Singularity University in Sweden (singularityu.org)\n* Founder of the Swedish biohackercommunity BioNyfiken (bionyfiken.se)\n* Chairman of MÃ¤nniska+, the Swedish transhumanist association (manniskaplus.nu)\n* Distinguished international business career across media, finance and agribusiness in the UK, Russia and the Nordics\n* MSc in Business and Economics from the Stockholm School of Economics (2003)"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/ED3AD6A3B345953BC1257CDA004E6B5F",
    "title": "A Venn Diagram of UX Software Testing",
    "abstract": "The team needs to build a product. The team readily recognizes the testers need to work with the developers but the same team often doesnâ€™t consider that the testers also need to work with the UX staff. Often the UX staff is tucked away in a different part of the office, working with multiple teams and yet, rarely working directly with the testers. Why? How can testers review a product without a good understanding of the design? Testers need closer access to UX and UX would benefit from working directly with the testers. Karen highlights specific design areas where UX and testing pair well. She offers ideas on how UX and testing benefit each other for a better overall product.\nThis talk looks at seven areas that illustrate the overlap between testing and UX.\n1. Browsers\n2. Mobile \n3. Accessibility\n4. Personas\n5. Personalization\n6. A/B testing\n7. Navigation",
    "url": "http://oredev.org/2014/sessions/a-venn-diagram-of-ux-and-software-testing",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-05 10:20:00",
    "end_time": "2014-11-05 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/786013B35E1DC967C1257CDA004E463F",
        "name": "Karen Johnson",
        "role": "Software Test Management Inc.",
        "bio": "Karen N. Johnson is a software test consultant. She is frequent speaker at conferences. Karen is a contributing author to the book, Beautiful Testing by Oâ€™Reilly publishers. She has published numerous articles and blogs about her experiences with software testing. She is the co-founder of the WREST workshop, more information on WREST can be found at: http://www.wrestworkshop.com/Home.html Visit her website at: http://www.karennjohnson.com"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/30F39B861844EE46C1257CAC003E25A0",
    "title": "Be brave and vulnerable",
    "abstract": "Be brave and vulnerable\nYou have to be brave in order to change the world! This holds true professionally and personally. \nSo what does this have to do with me? You might think; I just want to do my job â€“ not change the world.\nAt work we face challenges all the time that require courage; from asking for help to quitting your job; from admitting a mistake to saying that you did something good. Being brave and vulnerable is necessary.\nStanding by who you are, having the courage to be different, making yourself vulnerable, speaking up when there is something important to you, sharing your fears and joys requires courage.\nCourage is individual and there is no such thing as a little courage.\nBeing brave is not about removing fear or not being afraid â€“ it is about doing what is necessary even when you are afraid. \nI live this personally; I have to be brave (even have a tattoo with it). And it is a big learning I try to pass on to the people, I coach. In my session I will talk about why I have to be brave and vulnerable, give examples of how I am courageous, and why being brave is a big part of my worklife and of being agileâ€¦",
    "url": "http://oredev.org/2014/sessions/be-brave-and-vulnerable",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/291240FC4434CF94C1257CAC003D0563",
        "name": "Gitte Klitgaard",
        "role": "Native Wired",
        "bio": "Gitte Klitgaard is an Agile Coach, Pirate, Dragon Lady, Hugger, friend, and much much more. She is agile; live it and love it. Preferred starting point is scrum and then adapting is the key. She has taken the oath of non-allegiance because she beliefs that processes and methods are tools; a tool has different value in different context. And she hates when people spend time fighting over which is the best tool instead of using that energy to help people.\n Gitte has more than 10 years experience in different aspects of software development from testing, analysis, and processes to currently working with Agile and people. She wants to change the world by helping people in their work life; getting more work done, making the right product, doing it right and very important: have fun doing it. \nToday she has a great interest in how people function, how the brain works, what motivates us, how we can feel better about our selves, how to be perfect in all our imperfections.\nShe is also a geek and very passionate about a lot of stuff :)"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/3F229C1B11648E3CC1257D5B004B1725",
    "title": "Java update and roadmap",
    "abstract": "Whatâ€™s new in Java 8, and what's coming in Java 9? This presentation will cover new features in Java 8, like streams and lambda's, look at what's coming soon in Java 9 and talk about some new and upcoming capabilities in the Oracle Java implementation.",
    "url": "http://oredev.org/2014/sessions/java-update-and-roadmap",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/FE35B908557CB1BDC1257D5B0049BB83",
        "name": "Henrik StÃ¥hl",
        "role": "Oracle",
        "bio": "Henrik Stahl is VP of Product Management for Java and Internet of Things for Oracle, responsible for product vision and strategy for these areas. He joined Oracle as part of the BEA Systems acquisition, where he served in a similar capacity for the JRockit family of products, which sums up to over 10 years working with JVM and Java strategy and development. During his time at Oracle, Henrik lead the effort getting the Exalogic engineered system out of the door, and for the past three years he has been driving Internet of Things strategy across Oracle focused on intelligent devices and value from business processes and data analytics. Mr. Stahl holds a Master of Science in Engineering Physics from the Royal Institute of Technology in Sweden. He lives with his family in Sweden and spends his spare time doing random sports, gardening and playing flamenco guitar."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/45901C802312E3A3C1257D65003558CE",
    "title": "Yes, browsers can do that - don't be shy and use it",
    "abstract": "The evolution of web technologies happens at breakneck speed. Almost weekly there is something new to play with in browsers. As developers in non-startup environments many of these things can look fancy but pointless and there is a high chance you won't be able to use them with your clients. Wrong! Chris Heilmann of Mozilla is going to show you a few things that are available now in browsers that your clients will love you for having. Don't hold back the web.",
    "url": "http://oredev.org/2014/sessions/yes-browsers-can-do-that--dont-be-shy-and-use-it",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/68DF7EB53417D82FC1257D650034573B",
        "name": "Christian Heilmann",
        "role": "Mozilla",
        "bio": "Chris Heilmann has dedicated a lot of his time making the web better. Originally coming from a radio journalism background, he built his first web site from scratch around 1997 and spent the following years working on lots of large, international web sites. He then spent a few years in Yahoo building products and explaining and training people and is now at Mozilla. Chris wrote and contributed to six books on web development and wrote many articles and hundreds of blog posts for Ajaxian, Smashing Magazine, Yahoo, Mozilla, ScriptJunkie and many more."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/6C7013903366D6C0C1257CBA0043CC1D",
    "title": "Dude, Where's My Data?",
    "abstract": "In this talk weâ€™ll look at the myriad options for storing data in Microsoft Azure, both first-party and third-party, and how a real application will likely use a mixture of data stores to achieve performance, scalability and cost-effectiveness.\nThe talk will cover:\nWindows Azure Storage\nService Bus \nWindows Azure SQL Database (Web, Business Premium) \nSQL Server VMs \nCaching options \n3rd-party options such as MongoHQ and ClearDB MySQL\nThere may be more, if NDAs have been lifted. By the end, youâ€™ll know which options work best for which scenarios and application areas, and be ready to build new applications that target Azure, or migrate existing ones to the platform.",
    "url": "http://oredev.org/2014/sessions/dude-wheres-my-data",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A53A9D7A30E9AFB1C1257CB90079C8E8",
        "name": "Mark Rendle",
        "role": "Zudio",
        "bio": "Mark is the Founder and CEO of Zudio, a startup providing tools for managing your data in public clouds. Zudio launched in April 2013, and provides an in-browser suite of tools for working with Windows Azure Storage. Before starting Zudio, Mark worked for a variety of companies from start-ups to large ISVs and consultancies, and has written applications from character-based UNIX tools to desktop GUI applications to modern web and mobile apps. He likes web app development best these days."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/771139EE225CE292C1257CBD002D4C5E",
    "title": "Starting up: building great products with small teams",
    "abstract": "This talk will share experiences from starting tech companies and building global products with small teams and few resources. Lessons learned from the early days of Polar Rose and Mapillary. How to get started, find great talent, setup your organization, tools, using community resources, and much more.",
    "url": "http://oredev.org/2014/sessions/starting-up-building-great-products-with-small-teams",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/433AEF53517744D5C1257CBD002CB0D8",
        "name": "Jan Erik Solem",
        "role": "Mapillary",
        "bio": "Computer vision guy, researcher and startuper, python enthusiast, author. Co-founder Mapillary, previous founder Polar Rose."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8A2D3896FDD49993C1257CB30003C00D",
    "title": "Confessions Of A Rookie [Delivery] Manager",
    "abstract": "For the last 10 years I have been either a team of one or been responsible for the day-to-day tasks of one or two other testers, but by the time Ã˜redev rolls around I'll have been big-M Manager of not just a Testing team but of the Support one as well. On two different continents just to make things interesting. The learning curve has been rough at time and some of the things I have tried have worked, while others have not. This will be a no-holds barred look at what I have learned over the past year to help others not make the same mistakes and to steal from my successes.",
    "url": "http://oredev.org/2014/sessions/confessions-of-a-rookie-delivery-manager",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/2DF7D14BE357EA53C1257CB300038B09",
        "name": "Adam Goucher",
        "role": "360incentives",
        "bio": "Tester. Writer. Ironic Gatekeeper. Holder of Opinions. Automator of things that should be automated. Manual doer of things that should be done by hand. Reforming Consultant.\n\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C576E5682B88467CC1257D70004E5051",
    "title": "Telemetry and Data Flow at Hyper-Scale: Azure Event Hub",
    "abstract": "In this session you will learn about and see the capabilities of the newest addition to the Azure Service Bus messaging infrastructure: Event Hub. Event Hub allows ingestion of application telemetry, diagnostics data, and device telemetry and environment data from the â€œInternet of Thingsâ€ at very high scale of thousands of different event sources and at very high data ingress rates, while providing a very simple management and programming model that supports HTTPS, as well as the highly efficient AMQP 1.0 messaging protocol.",
    "url": "http://oredev.org/2014/sessions/telemetry-and-data-flow-at-hyper-scale-azure-event-hub",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4C51903DF86BADCCC1257D70004DF75C",
        "name": "Clemens Vasters",
        "role": "Microsoft Corporation",
        "bio": "Clemens Vasters (@clemensv on Twitter) holds a Product Architect position in the Azure Engineering Group at Microsoft Corporation in Redmond, WA. In his role, he drives technical strategy around Microsoftâ€™s cloud and on-premises messaging middleware platform â€žService Busâ€œ. His current focus is on guidance around and improvement of capabilities for connecting special-purpose devices from vehicles to environmental sensors to and through the cloud in a trustworthy fashion and at consumer product and utility scale. Mr. Vasters has worked on middleware technology at Microsoft for 8 years. Before joining Microsoft heâ€™s worked on financial solutions and in business developer consulting for well over 15 years, has written several books, and has spoken at nearly 1000 events in over 50 countries."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C8756A2E2DCA6AA9C1257D770033A69C",
    "title": "OpenSeason on OpenSource? Why it's time for a SW Supply Chain",
    "abstract": "Is OpenSource more secure?&quot; is the wrong question. Also, who needs opinion when we have data... This session will provide new quantitative and qualitative analysis of the modern SW Supply Chain. There's been a dramatic shift from writing code to assembling it, with open-source and third-party components providing the innovation and efficiency developers need. This dependence on components is growing faster than the ability to secure them. As with Heartbleed, Struts, and the like, shared components are increasingly shared risk. Worse, components are increasingly the preferred attack surface in todayâ€™s applications. Growing dependence, coupled with poor security visibility, requires small but important adjustments to application development. Join us for fresh analysis and practical ways to minimize avoidable risk and rework.",
    "url": "http://oredev.org/2014/sessions/openseason-on-opensource-why-its-time-for-a-sw-supply-chain",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-05 11:20:00",
    "end_time": "2014-11-05 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/610F2DC3DDED3E55C1257D3C00762DA7",
        "name": "Joshua Corman",
        "role": "Sonatype || I am The Cavalry",
        "bio": "Joshua Corman is the Chief Technology Officer for Sonatype. Previously, Corman served as a security researcher and strategist at Akamai Technologies, The 451 Group, and IBM Internet Security Systems. A respected innovator, he co-founded Rugged Software and IamTheCavalry to encourage new security approaches in response to the worldâ€™s increasing dependence on digital infrastructure. Josh's unique approach to security in the context of human factors, adversary motivations and social impact has helped position him as one of the most trusted names in security. He is also an adjunct faculty for Carnegie Mellonâ€™s Heinze College, IANS Research, and a Fellow at the Ponemon Institute.\nJosh received his bachelor's degree in philosophy, graduating summa cum laude, from the University of New Hampshire.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/81D8A46F0AE8F543C1257CAC005CE14D",
    "title": "What Makes Mobile Websites Tick? How Do We Make Them Faster? Insights from WebPagetest and HTTPArchive",
    "abstract": "The HTTP Archive allows us to research trends in mobile website development. How are websites changing over time? How do these changes affect performance? What sites are keeping with the latest designs AND keeping ahead of the performance curve? In this presentation, weâ€™ll look to discover the fastest designs for mobile performance in use on the web today.",
    "url": "http://oredev.org/2014/sessions/what-makes-mobile-websites-tick-how-do-we-make-them-faster-insights-from-webpagetest-and-httparchive",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-05 12:20:00",
    "end_time": "2014-11-05 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/60966F358456C9D4C1257CAC00571441",
        "name": "Doug Sillars",
        "role": "ATT",
        "bio": "Doug Sillars, Ph.D., is an industry leader in mobile application performance, and is a member of the ATT Developer Advocacy team. He and his team of outreach engineers work with mobile developers to help make mobile apps that are more efficient, faster, and use less battery. A veteran of many mobile projects over the last 10 years, Doug received his PhD in Inorganic Chemistry from the University of Wisconsin-Madison."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/92900484361B1B99C1257C900081F920",
    "title": "Amazing log management with ElasticSearch and Kibana in .net",
    "abstract": "There is a lot of information worth logging in an application, everything from errors to user behavior. First we put it on disk and if we are lucky it might end up in a database where we can do queries, aggregated statistic or find specific errors, usually that is more cumbersome or expensive than we like. With Elasticsearch and Kibana we have an easy to use open source stack that gives us both great aggregation and search capabilities with a user friendly UI.\nI will start the session by implementing logging in an .net web application to get the most out the logged data in ElasticSearch. Next step will be to move the data from file to Elasticsearch with LogFlow a .net replacement to LogStash, a log manager. Last I will show how to manage, aggregate and search the logs with Kibana by setting up a personalized dashboard. \nIf you havenâ€™t seen Elasticsearch and Kibana before. Be prepare to be amazed.",
    "url": "http://oredev.org/2014/sessions/amazing-log-management-with-elasticsearch-and-kibana-in-net",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-05 12:20:00",
    "end_time": "2014-11-05 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4958C13443ABB0B6C1257C900080FDB6",
        "name": "Emil Cardell",
        "role": "Thomas Cook Northen Europe",
        "bio": "Always looking for ways to find developer happiness, he looks outside the box and works actively to encourage developers to step out of their comfort zone to grow their love for creating amazing web applications. He is engaged in the developer community, speaking at conferences and contributing to multiple open source projects.\n\nEmil Cardell has been working on large public websites, communities and intranets for more than a decade, currently at Thomas Cook in Stockholm."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/93429252024ECB18C1257CA2002BB81A",
    "title": "Enabling Emergent Technologies",
    "abstract": "The latest new, cool tool comes along. Will you be allowed to use it? Probably not! So how can\nyou change that\nThis presentation looks at the introduction of new technologies at two companies, The Forward Internet Group in London (a startÂ­up originally, now grown to 400+) and MailOnline, the online version of the Daily Mail newspaper from London (a very old organization with an existing IT shop).\nIn both cases, Programmer Anarchy was introduced. This managerless process (not unlike GitHub in its value propositions) empowered the programmers to make technology choices and to freely experiment with new technology. In the case of Forward, massive growth and profits ensued. In the case of MailOnline, reÂ­development of core systems into new technology has been launched, and expectations significantly exceeded.\nThis presentation will touch on the various aspects of implementing Programmer Anarchy at MailOnline:\n* Team building through programmer training\n* Pilot project without managers, BAâ€™s or dedicated testers\n* Reinforce the model with new HR structure emphasizing skills over titles\n* Create selfÂ­organizing teams of 5Â­8 developers (multiple such teams)\n* Charter teams with a specific project, and let them deliver\n* Avoid artificial schedule pressure\nThe intent is to provide a possible roadmap to get your latest technical toys moved into production systems.",
    "url": "http://oredev.org/2014/sessions/enabling-emergent-technologies",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-05 12:20:00",
    "end_time": "2014-11-05 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/FEE6E5CA9BFD8B4AC1257C91002CB62D",
        "name": "Fred George",
        "role": "Outpace Systems",
        "bio": "Fred George is a developer at Outpace Systems with over 45 years experience in the industry including over twenty years doing object programming and over a dozen years doing Agile/XP. He counts at least 70 languages with which he has written code. Most recently, he is the leading advocate of Programmer Anarchy, a postÂ­-Agile process that is proving extremely effective and reactive to client needs, and also advocates MicroÂ­Service Architectures, the creations of systems with hundreds of tiny, looselyÂ­ coupled services. A veteran of the IBMÂ­Microsoft wars, Fred did early work in computer networking, LAN's, GUI's and objects for IBM. As an independent consultant from 1991Â­2003, he counted HP, Morgan-Â­Stanley, American Express, IBM, and USAA among his clients. He gave the first Agile/XP experience report at OOPSLA in 1999 about an embedded system done in Java, and has mentored many clients in use of objects in Java under an XP process. He has shared the stage at JavaOne with Martin Fowler, acting as his foil, and assisted in XP Immersion sessions with Kent Beck, Ron Jeffries, and Robert Martin. Fred spent a year as a visiting lecturer at N.C. State University teaching Java programming to over 800 undergraduates, with a generous dose of object design, patterns, and XP practices thrown in. Fred joined ThoughtWorks in 2003, delivering yet more projects using agile processes. He has worked with clients in four countries since then, including a ten-Â­month assignment in India (where he founded ThoughtWorks University), four months of projects in China, and a post in the London office. In 2007, he joined the London Internet advertising firm, Forward, bringing Agile practices to all aspects of the business, leaving to pursue industry change at the end of 2011. He next was the Chief Architect at MailOnline, the online version of the Daily Mail and the worldâ€™s most popular online newspaper. There he completely restructured the IT team along the lines of Anarchy, which has now delivered a completely re-Â­engineered rendering of the MailOnline. He currently is a co-Â­founder of Outpace Systems in the US, a firm building solutions for large businesses that exploits MicroServices and a Fractal development process derived from the concepts of Programmer Anarchy. He believes in objects, Lean processes, fun in programming, and the client's successes. He holds a bachelors degree from N. C. State University in Computer Science, and a masters degree from MIT in the Management of Technology. Oh, and he still writes code!"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/96FFBED89B402E84C1257CC600782DE9",
    "title": "Reactive Programming - Why the Hype?",
    "abstract": "The concept of Reactive Programming is hardly new. It started in 1975 as event-driven programming--which is nothing more than designing software to respond to event stimuli rather than invoking methods in an imperative way. Modern architectures--especially those dealing with mobile applications or devices--have such high throughput and such low latency demands that imperative architectures have proven to be inadequate to accommodate the load placed on applications by high-volume user traffic as well as an exponential increase in data exchanged between network peers as applications have had to become â€œsmarterâ€ to adapt to changing business patterns.\nThis session will introduce the concept of Reactive Programming as it has developed over the decades and how it addresses the demands of modern architectures by making more efficient use of a relatively small number system threads by not blocking them but by instead providing ways to respond to events. The community project called Reactive Streams will be introduced. Reactive Streams is an engineering cooperative between a number of industry leaders to define and implement a standardized asynchronous contract to build reactive applications that benefit from non-blocking backpressure to provide predictable performance characteristics and low latency for high-volume applications.",
    "url": "http://oredev.org/2014/sessions/reactive-programming--why-the-hype",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-05 12:20:00",
    "end_time": "2014-11-05 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4D6B2AEAE2749D97C1257CC3006D116A",
        "name": "Jon Brisbin",
        "role": "Pivotal",
        "bio": "Jon is a Senior Software Engineer at Pivotal, where he leads the Reactor Project. Jon started his career with Sun and DEC workstations in an air-conditioned trailer in the deserts of Saudi Arabia as an Intelligence Analyst. From mainframes to AS/400's to UNIX and now in the cloud, Jon has helped to architect and develop next-generation libraries to assist developers in solving the big and fast data problems of today's agile businesses."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/99BDF01FED326A91C1257CE40016C972",
    "title": "The tool that helps to be powerful influencers on projects",
    "abstract": "In Oredev 2011, a young energetic man, Pradeep Soundararajan, opened Twitter during his talk and showed the audience how they could use Twitter and social media to understand what users really want versus what they were given. He keeps coming to Oredev to tell stories of how he walks the talk. He has transformed the idea from using social media to understand users to using what the users say to help Engineering and Business make powerful important decisions. He is going to demo his tool and show you how testers and other stakeholders are going to become more powerful influencers on projects. The power of user is such.",
    "url": "http://oredev.org/2014/sessions/the-tool-that-helps-to-be-powerful-influencers-on-projects",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-05 12:20:00",
    "end_time": "2014-11-05 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/18D2DC9D1F352BACC1257CA500239BF6",
        "name": "Pradeep Soundararajan",
        "role": "Moolya Software Testing",
        "bio": "Pradeep Soundararajan co-founded Moolya, a company that specializes in exploratory testing and context driven test approaches whilst doing automation the way it best can be. His journey as a tester has been one of the finest â€“ from a tester, to an independent consultant (without work) to an independent consultant (with loads of work) to a mentor and then to a businessman (with loads of work, of course) while being a hands on tester. He facilitates his colleagues to do awesome testing and is working towards creative solutions that can change the way people test software. He writes two testing blogs: www.moolya.com/blog and http://testertested.blogspot.com and speaks around the world on changing the testing space. Never before has a panda been so feared and so loved!"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/A245577AFCE95F8DC1257C920046D89F",
    "title": "Trust - the essence of Agile",
    "abstract": "If Agile is Scrum or if Agile is Kanban, I'd rather have a trusting team. \nI'm going to talk about trust - trying to sort out why we'd let a stranger watch over our children but we'd never lend them our car. I'll show examples of successfull projects that ran solely on trust.\nMost likely I will dip into a favourite topic - the confusion that Agility is a result of a method or a set of tools. We need to understand trust so we can harnace its great powers.\nIn teams where there is trust - great things will happen.",
    "url": "http://oredev.org/2014/sessions/trust--the-essence-of-agile",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-05 12:20:00",
    "end_time": "2014-11-05 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A7ED13C198AEEB0FC1257C9200460B5C",
        "name": "Anders LÃ¶wenborg",
        "role": "Aptitud",
        "bio": "Anders is a father of three, a sailor and an information junkie. He is a developer turned entrepreneur or vice versa depending on the viewers angle. Anders truly believes that trust and passion will take you all the way and can't understand the concept of not mixing business and pleasure.\n\nHe has started companies in Stockholm, New Dehli and Malta and if he were to adopt the agile manifesto to a business manifesto it would probably be something like this:\n\nTrust in people over ... Everything!"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E91420916EB94616C1257CC6000AC68D",
    "title": "Taking your craft seriously with F#",
    "abstract": "Many standard F# libraries and tools, including the compiler itself, are developed as open-source and have a large number of contributors. To successfully build such projects, you need to be serious about your craft. This includes comprehensive testing, using automated build tools, continuous integration, as well as creating great documentation and tutorials. In this talk, I'll speak about what I learned as an open-source F# contributor.\nAlong the way, we'll also look at a number of risk-free ways of introducing F# into your workflow:\n * How to use F# Interactive for explorative programming and writing code that works on the first try\n * Using FAKE - an F# build tool - to automate everything in your build process\n * Writing readable unit tests with F# and using FsCheck for property-based testing\n * Generating great documentation using F# Formatting tools\nIn summary, this talk is a walkthrough covering some of the software engineering aspects of programming that have been working extremely well for the F# open-source ecosystem. After the talk, you'll have a good idea how to use some of the techniques in your daily job - but you may as well become an F# contributor!",
    "url": "http://oredev.org/2014/sessions/taking-your-craft-seriously-with-f-",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-05 12:20:00",
    "end_time": "2014-11-05 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/31F3255A32D7D1B4C1257CBB0067F374",
        "name": "Tomas Petricek",
        "role": "F# Works",
        "bio": "Tomas is a long-term F# enthusiast, author of &quot;Real World Functional Programming&quot;, frequent conference speaker and Microsoft MVP. He contributed to the development of F# as a contractor at Microsoft Research and helped to create explorative data manipulation library Deedle while at BlueMountain Capital in New York. He is finishing PhD in Cambridge, working on types for functional programming languages."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/087FA53AB86395DEC1257CEC004FB814",
    "title": "Wearable apps that people want",
    "abstract": "We've been living with Android wear all summer and Google Glass for a few years now. What have we learned? And how can we apply those lessons to the wearable apps we are planning? These are important discussions to be a part of before investing your time and resources into a wearables strategy.\nIn this talk, we are going to cover some of the popular use cases for wearables, reasons why wearable apps don't always work out, and finally discuss some of the architectural decisions that were made to accomplish the success stories.",
    "url": "http://oredev.org/2014/sessions/wearable-apps-that-people-want",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3CCE639538D1B5DDC1257CEC004EF950",
        "name": "Kevin Grant",
        "role": "Tumblr",
        "bio": "KEVIN GRANT is an Android Engineer at tumblr, a creative blogging platform in New York City, where he focuses on application design, implementing the latest design and user interaction paradigms and pushing the boundaries of the Android framework. \n\nHe began developing for Android in 2009, performing research at the University of Nevada, Reno. After graduating he moved to MalmÃ¶, Sweden where he took part in the Scandinavian startup scene."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/1D92E9D2AB51084EC1257CAC001F29E6",
    "title": "Ember Components Make My Heart Sing",
    "abstract": "Iâ€™d like to give you all a basic understanding of Ember, the client side MVC framework. Once you have a small foundation of how Ember works, and how it can help you develop applications within a browser, Iâ€™ll explain how Ember Components are awesome, unbelievably useful, and unparalleled in expressiveness. Ember Components are a basic building block and primitive in the Ember universe that gives us the power of Web Components, before they are actually implemented in all modern browsers. Ember gives us the ability to use these features of the future right now in our applications. \n",
    "url": "http://oredev.org/2014/sessions/ember-components-make-my-heart-sing",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/D1BED39210342F66C1257CAC001D34E1",
        "name": "John K. Paul",
        "role": "Penton Media",
        "bio": "John K. Paul is the VP of engineering at Penton Media and former lead technical architect of CondÃ© Nast's platform engineering team. He is a contributor to numerous open source projects including promethify, requireify, jquery-ajax-retry, and js-beautify. He is also the organizer of the NYC HTML5 meetup group."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/56BB4FFF62D6FC2EC1257CD8005445CA",
    "title": "Waiter, there's test in my dev",
    "abstract": "An experiential report detailing the successes and frustrations of introducing a software tester to an Agile programming team, how programmers and testers view each other, their work and their responsibilities",
    "url": "http://oredev.org/2014/sessions/waiter-theres-test-in-my-dev",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3B889DBDF69B342DC1257CA20041AE0B",
        "name": "Ben Kelly",
        "role": "eBay",
        "bio": "Ben has been in the software testing industry for over a decade and is a regular speaker at conferences worldwide. He is currently based in London, but has spent time in various industries and companies in Australia and Japan. He works for eBay and is involved in both Agile testing and software testing workshops. He writes sporadically at http://testjutsu.com and is on twitter @benjaminkelly"
      },
      {
        "crowdsource_ref": "2014/D45EC2EF517E43C0C1257CD800536198",
        "name": "Steve Bennett",
        "role": "eBay",
        "bio": "I'm a full stack web developer leading a product development team for eBay Inc Europe in Richmond, London.\n\nI started my career as a graduate software engineer at British Telecom before moving on to hibu (formally known a Yell Group) to lead agile development teams building products for Yell.com. \n\nI have an interest in agile development and how the way we work influence the products we build."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/598A4678F63A5856C1257CAC007C6908",
    "title": "What Developers Need To Know About Design",
    "abstract": "The world has become a very design sensitive meaning itâ€™s now even more critical that developers build products that look amazing. Sadly frameworks like twitterâ€™s bootstrap can only take us so far and even with designers on the team developers need to understand the key principals of good design to make effective decisions.In this session Ben will explore the five key topics around design that can make or break an application and website. The key topics are Layout and the golden ratio, Typography, Imaginary, Colours and User Feedback. With these topics attendees will come away with a deeper understanding about why certain elements look good while others donâ€™t and what developers really should know about design. It will explore the cognitive science and research to move beyond personal options about design to data and research driven insights.",
    "url": "http://oredev.org/2014/sessions/what-developers-need-to-know-about-design",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/87D6DDF62BD6EAC3C1257CAB00472E67",
        "name": "Ben Hall",
        "role": "Ocelot Uproar",
        "bio": "Startup founder, polyglot programmer developing using a combination of Node.js, JavaScript, Ruby, iOS and C#. Passionate about exploring, sharing and educating others in new and emerging technologies and development practices. Frequently found tweeting (@Ben_Hall) and drinking tea while trying to look busy."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8C029816DDA3DF0CC1257D02002CEB1F",
    "title": "Lego serious play",
    "abstract": "To be successful, Teams need a shared purpose, a shared identity, and a shared way of working together. We will explore ways how to build this shared understanding by using LEGO SERIOUS PLAYâ„¢. We will learn how to make powerful shared stories with our hands and use them to bridge the gap among different ways of thinking, and communicating. And if this isn't great alone, we will have LEGO and we use it in the workshop!",
    "url": "http://oredev.org/2014/sessions/lego-serious-play",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/600B0B8153B53B28C1257D02002CC49B",
        "name": "Jens Hoffman",
        "role": "StrategicPlay",
        "bio": "As a certified LEGO SERIOUS PLAYâ„¢ facilitator and certified Management Coach he works with managers from the executive to the department level in company and team transformation efforts and is a specialist in designing and facilitating large-scale interventions with LEGO SERIOUS PLAYâ„¢, World CafÃ©, Open Space, Real-Time Strategic Change and Future Conference."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B19B5171EE851BB6C1257CAE006DD8E6",
    "title": "Project Orleans",
    "abstract": "This talk will do a deep dive into Project Orleans, a runtime and programming model for building distributed systems, based on the actor model. This session will go over the basics of the actor model, and the Orleans implementation of it. It will include an overview of the programming model, and patterns and best practices on how to architect distributed state-full systems using Orleans.",
    "url": "http://oredev.org/2014/sessions/project-orleans",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/E172537D70CE4A9AC1257CAD00554740",
        "name": "Caitie McCaffrey",
        "role": "HBO",
        "bio": "Caitie McCaffrey is a Backend Brat, Distributed Systems Diva, and Tech Lover. She is currently a Software Engineer at HBO, and prior to that worked at 343 Industries. Her focus is on Web Services, Distributed Systems, and Big Data. She is passionate about creating fun, social, and collaborative entertainment experiences. \n\nCaitie has a degree in Computer Science from Cornell University, and has worked on several video games including Gears of War 2, Gears of War 3, and most recently Halo 4. She currently is working at HBO on the HBO Go services. She maintains a blog at CaitieM.com and frequently discusses technology and entertainment on Twitter @CaitieM20"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C6792C4DC9457F5BC1257D78003E5FD5",
    "title": "Crowd-developing on the Cloud with Bluemix",
    "abstract": "Todayâ€™s clouds are about more than expanding reach, they're about expanding possibility. Once, cloud was simply the tool you used to access your files from anywhere and to make your IT operations more efficient. Today, itâ€™s an incubator of ideas that can help you continually test, adjust and deploy new innovations more nimbly than ever before. This session will introduce you to the next wave of platforms where you can easily collaborate across the globe, or be a hero, to build, test, deploy and manage new solutions in the cloud rapidly. To achieve this IBM continues to contribute and embrace open-standards, and has built a cloud-based platform for building, managing, and running apps of all types, such as web, mobile, big data, cognitive tasks and smart devices. Announcing Bluemix - a brand new cloud platform enabling development on the cloud, for the cloud, by the crowd!",
    "url": "http://oredev.org/2014/sessions/crowd-developing-on-the-cloud-with-bluemix",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/415CFC625169C96BC1257D78003E210A",
        "name": "Brandon Jones",
        "role": "IBM",
        "bio": "Brandon currently runs the European technical field organization for WebSphere at IBM. Prior to helping clients optimize their enterprise IT outcomes he worked in development at Telelogic building tools to improve organizations ability to deliver software. He's worked on everything from real-time systems and protocols to high-scale enterprise banking and defense systems across the globe. He is also a huge fan of advancing the usage of software to solve today's challenges."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D8CFEA2764A34EC0C1257CEE007F617F",
    "title": "How to predict a serial arsonist â€“ a case study with relationship analysis using graph-based data",
    "abstract": "Sweden's worst serial arsonist is suspected of burning down more than 200 buildings over the last 20 years but has only been convicted for two. How could that be possible? Analysis and profiling as tools in investigation is not a new invention. Several countries apply these on a routine basis. \n â€¢ You will learn of a new approach to understanding the datasets available and the method used.\nInvestigators have been restricted to play by the tunes of the arsonist; with our work, we will now be able to act proactively by establishing close coordination among all responsible parties involved in the investigation. The ability to predict a serial arsonist is a vital tool in the arsenal of both Police and Fire Service arson investigators. Questions of the ability to accurately make predictions remain.\n â€¢ You will learn how experienced arson investigators combine their skills with the similar tool that is used by Facebook and LinkedIn to analyze their users.\n â€¢ You will learn how you prepare a Relationship analysis of serial arsonists, using graph-based data.\n â€¢ And most important of all, you will learn how to get the best of two nerds - one on programming and the other on fire!\n",
    "url": "http://oredev.org/2014/sessions/how-to-predict-a-serial-arsonist--a-case-study-with-relationship-analysis-using-graph-based-data",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-05 13:20:00",
    "end_time": "2014-11-05 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/B7F02E0EBA18F3DCC1257CEE007E614F",
        "name": "BjÃ¶rn Granvik",
        "role": "Webstep",
        "bio": "BjÃ¶rn Granvik has more than two decades of experience as a developer, architect, project leader and manager to mention just a few roles. \n\nBorn in Pascal, fostered in C/C++ and reborn in Java, he still believes that &quot;code matters&quot; - second only to people and competence. \nBjÃ¶rn is a recurring speaker and expert panel facilitator usually around subjects like programming and agile methodologies. \n\nHe can be found speaking in everything from user groups to conferences like JavaOne."
      },
      {
        "crowdsource_ref": "2014/2D8706AB1C677FDDC1257CEE0082410D",
        "name": "Eva Ljungkvist",
        "role": "Oceanus",
        "bio": "Eva Ljungkvist has more than two decades of experience as a fire protection engineer (Bachelor of Science/LTH), arson investigator (SKL) and Senior Fire Officer at Swedish Fire Service. She has assignments for several Fire Services and for the Police.Over the years as Eva has responded to many fires set by arsonists. One of them was Sweden's worst serial arsonist and during the investigations, she worked closely with Dan Granvik, the Detective Inspector in charge. Together they wanted to put their experience into use and they developed, during that process, a method with the purpose of predicting a serial arsonist.It is in this mix of â€“ fire protection, arson investigation and incident response - that Eva excels. The factor that is more important to her is people. This can explain her love of interacting and sharing knowledge. Eva is a recurring speaker and exercise leader both in Sweden and internationally. Over the years reports, articles and blogs have found their way to international readers.Eva Ljungkvist is also the Vice President of IAAIs sub chapter in Sweden."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/019204D186800162C1257CAC0017B520",
    "title": "Fun with Android Shaders and Filters",
    "abstract": "What does it take to make an app from good to great? Attention to detail. In this session we will dive into advanced techniques to customize Paint, the core of Android rendering. With Shaders and Filters, you can fine tune the look-and-feel of your app and delight your user with a polished UI.",
    "url": "http://oredev.org/2014/sessions/fun-with-android-shaders-and-filters",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/07413BB827A2DE4EC1257CA80060A905",
        "name": "Chiu-Ki Chan",
        "role": "Square Island LLC",
        "bio": "Chiu-Ki is a mobile developer with a passion in speaking and teaching. Her mother tongue for mobile is Android, acquired while working on Android Maps at Google. Now she runs her own mobile development company, producing delightful apps such as &quot;Monkey Write&quot; for learning Chinese writing and &quot;Heart Collage&quot; for snapping photos to stitch into a heart.\n\nWhen she is not writing apps, she can be found travelling the world, sometimes sightseeing, sometimes dispensing Android tips on stage at various tech conferences."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/22CC3B44CEAC08E5C1257CCA003BCEB5",
    "title": "The Wearable Application Server and Other Adventures in Software Engineering",
    "abstract": "Mobile technology has so far mostly been confined to the client side, for fairly obvious reasons - traditionally, clients are mobile, and servers are not. However, not only is hardware getting smaller, servers are too. When your application server can run on pocket-sized Â£25 hardware it opens up some pretty cool possibilities - your server is literally lightweight. Not only can you have location-based services, you can have locatable servers. Servers can run on phones, they can run on the Raspberry Pi, and so they can go almost anywhere you can think of. Modularity gives software the flexibility it needs to cram into these tight spaces without sacrificing power. This talk will demonstrate developing and deploying a web application to an application server embedded in a silly hat.",
    "url": "http://oredev.org/2014/sessions/the-wearable-application-server-and-other-adventures-in-software-engineering",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A7FD0BB503354A4EC1257CCA003B72AF",
        "name": "Holly Cummins",
        "role": "IBM",
        "bio": "Holly Cummins is a senior software engineer developing enterprise middleware with the IBM WebSphere, and a committer on the Apache Aries project. She is a co-author of Enterprise OSGi in Action and has spoken at Devoxx, JavaZone, The ServerSide Java Symposium, JAX London, GeeCon, and the Great Indian Developer Summit, as well as a number of user groups."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2786F107A8537B81C1257D02002CF67E",
    "title": "Lego serious play continued",
    "abstract": "TBA",
    "url": "http://oredev.org/2014/sessions/lego-serious-play-continued",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/600B0B8153B53B28C1257D02002CC49B",
        "name": "Jens Hoffman",
        "role": "StrategicPlay",
        "bio": "As a certified LEGO SERIOUS PLAYâ„¢ facilitator and certified Management Coach he works with managers from the executive to the department level in company and team transformation efforts and is a specialist in designing and facilitating large-scale interventions with LEGO SERIOUS PLAYâ„¢, World CafÃ©, Open Space, Real-Time Strategic Change and Future Conference."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B66DE2BE7CD7EED6C1257CA000607253",
    "title": "Lessons learned writing a database in Clojure",
    "abstract": "Learning functional programming was never going to be easy, so after attempting to write Space Invaders for the fifteenth time I opted for something simple and familar to me - the task of writing a database.\nSpecifically I chose to re-implement the document database RavenDB (a C# project) in Clojure on top of LevelDB and Lucene and focus on how a system like this could and should be put together and tested reasonably as well as providing a good development experience to anybody foolish enough to consume this in a project.\nThis involved constant code review from the Clojure community in London, and many corrections and re-writes over the course of six months and during the course of writing this project I ended up in the top 100 committers on Github!\nLessons learned? Interop is hard. Controlling access to resources is hard. Testing is easy but isn't always the best way. The REPL is your friend. Data oriented design is important. Core.async is a great way of managing complicated processes but needs managing carefully.\nIn this session I aim to go through a step by step point of showing tangible examples of each lesson learned, and how this has influenced the code I write both in Clojure and other language such as Erlang and JS.\nNote: This database is not a commercial or even usable product, and as such is not the subject of the talk - more it is a collection of interesting code examples and challenges that needed solving.",
    "url": "http://oredev.org/2014/sessions/lessons-learned-writing-a-database-in-clojure",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/E0AB2C98BF7FBB09C1257CA0005EFB97",
        "name": "Rob Ashton",
        "role": "freelance",
        "bio": "No longer a part of the system, Rob left his last enterprise development two years ago and spent a year doing two-week contracts for a combination of food, shelter and occasionally money in any technology at hand.\n\nHe is an aficionado of Clojure, in a love/hate relationship with JS and now works as an Erlang developer on a 100% remote basis.\n\nRob can be found coding in coffee shops across Europe."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C66291D93E8D4007C1257D2B006B7F16",
    "title": "Exponential technological development and the Singularity",
    "abstract": "What was the worldâ€™s fastest supercomputer in 1997 is today a plaything for any average teenager and can be bought online for less than 100 USD. The processing power of computers is growing exponentially - giving machines the ability to perform an increasing number of tasks once seen as exclusive to highly skilled humans.\nLooking at these trends, prominent tech thinkers are discussing the concept of the technological singularity, a day when computers profoundly outsmart humans. What are the implications of this incredibly fast and powerful technological change? Is human civilisation about to be transformed beyond recognition already in our lifetimes?",
    "url": "http://oredev.org/2014/sessions/exponential-technological-development-and-the-singularity",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3F8FABA2FCB7846BC1257D2B006B2AB7",
        "name": "Hannes SjÃ¶blad",
        "role": "Singularity University",
        "bio": "* Ambassador for Singularity University in Sweden (singularityu.org)\n* Founder of the Swedish biohackercommunity BioNyfiken (bionyfiken.se)\n* Chairman of MÃ¤nniska+, the Swedish transhumanist association (manniskaplus.nu)\n* Distinguished international business career across media, finance and agribusiness in the UK, Russia and the Nordics\n* MSc in Business and Economics from the Stockholm School of Economics (2003)"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D0B7DB8B92F8756EC1257CAC0036D866",
    "title": "Measuring Social Networks. Building a living lab to study human social interactions on a massive scale.",
    "abstract": "Over the past decade, we have made tremendous progress in understanding the complex networks in the world around us. In terms of social systems, we have recently developed the technological ability to measure the dynamics such networks with unprecedented accuracy, using smartphones as sensors. For the past two years, my group has worked towards creating a dataset of unparalleled quality and size, working to develop a starting point that will allow us to make a true leap in the quantitative understanding of social systems. \nWe use top-of-the-line smartphones as measurement devices to capture the complete network (face-to-face, telecommunication, online social networks, geolocation, etc). We just competed rolling out the study to a group of approximately 1000 individuals. In terms of size, this increases the number of study participants by a full order of magnitude compared to similar studies in the field. The talk focuses on the reasoning behind- and challenges related to establishing an experiment on this scale, but I also share some of our results so far.",
    "url": "http://oredev.org/2014/sessions/measuring-social-networks-building-a-living-lab-to-study-human-social-interactions-on-a-massive-scale-",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/F76AEB695F7BFB0EC1257CAC0035CFD6",
        "name": "Sune Lehmann",
        "role": "Technical University of Denmark",
        "bio": "Iâ€™m an Associate Professor at DTU Compute. Iâ€™ve worked as a postdoc at the Institute for Quantitative Social Science at Harvard University and before that, I was at the Center for Complex Network Research at Northeastern University.\n\nMy current research is about dynamic social networks. Currently we've handed out free cell phones to 1000 students at DTU and we're studying their interactions face-to-face, via telecommunications, and social networks. The most detailed social dataset in the world."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/DE4323E0A30C9092C1257D4F00254A4A",
    "title": "Building web applications with ASP.NET vNext",
    "abstract": "The next version of ASP.NET has been redesigned from the ground up. Come join us to see how to make ASP.NET MVC, Web API, SignalR, and Entity Framework all play together with a shiny new unified programming model. Add a dash of cloud, a pinch of cross platform support, and a smidgen of NuGet - and you have the future of .NET on the server.\n",
    "url": "http://oredev.org/2014/sessions/building-web-applications-with-asp-net-vnext",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/422E19DD44223FBBC1257D460074FB03",
        "name": "Justin Beckwith",
        "role": "Microsoft",
        "bio": "Justin is a Program Manager, web developer, and geek dad workingÂ on tooling and the developer experience for Microsoft Azure.Â  He writes code, speaks at events, and stirs up trouble. Before joining Microsoft, he filled various developer and architect roles with startups, healthcare companies, and universities. He blogs at http://jbeckwith.com and twitters as @justinbeckwith.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E7478559C6649B4EC1257CC8004E357C",
    "title": "Owning Browser Standards",
    "abstract": "The web owes much of its success to the ability of its core technologies to evolve over time. In recent years we've seen an explosion of new browser technologies and standards. In this talk we'll look at the general trends as well as a few significant specs in more detail. We'll look at the good that's coming as well as some of the new problems we may face. Finally, we'll conclude by talking about how you can get involved in the process by providing some resources, advice, warnings and more.",
    "url": "http://oredev.org/2014/sessions/owning-browser-standards",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-05 14:20:00",
    "end_time": "2014-11-05 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/74F7319C5A08B205C1257CC80049F92D",
        "name": "Rob Eisenberg",
        "role": "Blue Spire",
        "bio": "Rob Eisenberg is a JavaScript expert working out of Tallahassee, FL and is the President of Blue Spire. He is the founder of the Durandal and Caliburn.Micro projects. Rob currently works as a member of both the AngularJS 2.0 Core Team and the AngularJS Material Design team, helping to develop the next generation of web application frameworks and tooling."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/04CCB5A597915EA7C1257CE0002DC691",
    "title": "Confessions of an accidental Security Tester - &quot;I didn't break in, you left the door open&quot;",
    "abstract": "Alan Richardson does not describe himself as a security tester. He's read the books so he knows enough to know he doesn't know or do that stuff properly. But he has found security issues, on projects, and on live sites that he depends on for his business.\nYou want to know user details? Yup, found those. You want to download the paid for assets from the site without paying for them? Yup, can do. You want to see the payment details for other people? OK, here they are. All of this, and more, as Alan stumbled, shocked, from one security issue to the next, \nIn this session Alan describes examples of security issues, and how he found them: the tools he used, why he used them, what he observed and what that triggered in his thought processes.\nPerhaps most shocking, is not that the issues were live, and relatively easy to find and exploit. But that the companies were so uninterested in them. So this talk also covers how to 'advocate' for these issues. It also warns you not to expect rewards and gratitude. Companies with these type of issues typically do not have bug bounty schemes.\nNowadays, many of the tools you need to find and exploit these issues are built in to the browser. Anyone could find them. But testers have a head start. So in this session Alan shows how you can build on the knowledge and thought processes you already have, to find these types of issues.\nThis is a talk about pushing your functional testing further, deeper, and with more technical observation, so you too can 'accidentally' discover security issues.\n",
    "url": "http://oredev.org/2014/sessions/confessions-of-an-accidental-security-tester--i-didnt-break-in-you-left-the-door-open",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/9FE600A4CA28CE53C1257CDD005F6C42",
        "name": "Alan Richardson",
        "role": "Compendium Developments",
        "bio": "Alan Richardson has more than twenty years of professional IT experience, working as a programmer and at every level of the testing hierarchy from tester through head of testing. Author of the books Selenium Simplified and Java For Testers, Alan also has created online training courses to help people learn technical web testing and Selenium WebDriver with Java. He works as an independent consultant, helping companies improve their use of automation, agile, and exploratory technical testing. Alan posts his writing and training videos on SeleniumSimplified.com, EvilTester.com, JavaForTesters.com, and CompendiumDev.co.uk."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/23034F7CE4BD5678C1257CE8006F262F",
    "title": "UX Design in an Agile world: challenges and mitigations",
    "abstract": "Integrating user experience (UX) design into agile working is a challenge. Although the work\nof UX designers and developers complements each other, their different goals, processes and \nworking practices can lead to tensions. This talk will discuss a range of approaches to Agile/\nUX integration, and draw on the experience of one technical development organization to \nsuggest practical ways in which challenges and tensions may be overcome. Specifically, the \nchallenges addressed include: timely, adequate and clear communication between developers \nand designers; the level of detail needed in upfront design; design documentation; and user \ntesting.",
    "url": "http://oredev.org/2014/sessions/ux-design-in-an-agile-world-challenges-and-mitigations",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/CF69DE9574C09425C1257CD80062F0A0",
        "name": "Helen Sharp",
        "role": "The Open University",
        "bio": "Helen Sharp is Professor of Software Engineering at the Open University, UK. Her research focuses on the study of professional software practice, specifically human and social aspects of software development. She is very active in both the software engineering and interaction design (HCI) communities, and has had a long association with practitioner-related conferences. She is on the Board of IEEE Software, and Transactions of Software Engineering, and reviews for many journals and conferences."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/38E808A4AD2B6BEDC1257D1C005EC717",
    "title": "Cope with changes in everyday life",
    "abstract": "Changes in organizations are nowadays a common process. But what is normal reactions in individuals and groups. How cope with change and how can acceptance be the greatest method to apply.",
    "url": "http://oredev.org/2014/sessions/cope-with-changes-in-everyday-life",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3E4A217F366620CDC1257D1C005E27BF",
        "name": "Helena Kubicek Boye",
        "role": "Psykologic",
        "bio": "lic psychologist, CBT-therapeut, priced Newthinker 2010, nominated Psychology Awards 2010, author, projectleader in a research study on inosomnia treatment, content provider &quot;Sov BÃ¤ttre&quot; e-learning for internetbased insomnia"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/50CE4C5854EBE639C1257CD10048A106",
    "title": "8 Simple TDD Rules",
    "abstract": "After using TDD for over 10 years to build software, I've seen and used every anti-pattern in the book. From brittle tests, over-mocked tests and everything in between.\nTests are supposed to improve maintainability, drive design decision and uncover code smells. Tests can do all these things, but only if weâ€™re writing good tests. In this session, weâ€™ll cover eight simple rules for writing good tests, from what to embrace and what to avoid. Nothing is sacred in this session, as Iâ€™ll cover all the ways Iâ€™ve failed with testing and where I find success in testing today.",
    "url": "http://oredev.org/2014/sessions/8-simple-tdd-rules",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/9ACD6A368BE653C3C1257CAC006CF836",
        "name": "Jimmy Bogard",
        "role": "Headspring",
        "bio": "Jimmy is an active member in the .NET community, leading open source projects, giving technical presentations, and facilitating technical book clubs. Jimmy is a member of the ASPInsiders group, the C# Insiders group, and received the &quot;Microsoft Most Valuable Professional&quot; (MVP) award for ASP.NET in 2009-2013. Jimmy is also the creator and lead developer of the popular OSS library AutoMapper."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/77686C26B1646B44C1257D0B0036CA1B",
    "title": "Personal Reflection on Neo4j's Journey from Launch at Ã–redev 2007 to Today",
    "abstract": "Neo4j was launched at Ã–redev 2007 to a room of 50 developers, and has grown from there to the worldâ€™s most popular graph database, with over a million downloads and companies like Walmart, Telenor, Cisco and eBay using it for mission critical applications. A company has been wrapped around the open source project, and it has gone on to raise 25 million dollars in investments, over a hundred customers and tens of thousands of users. Neo4j is now headquartered in Silicon Valley with 60+ employees, but engineering HQ and the heart of the product is still MalmÃ¶.\nThis talk will be a personal reflection on a journey that started here at Oredev seven years ago. This is the raw and uncut version of all the ups and downs of a high growth startup, and lessons learned to date.",
    "url": "http://oredev.org/2014/sessions/personal-reflection-on-neo4js-journey-from-launch-at-oredev-2007-to-today",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/ABB04FEEF2088E44C1257D0B00362A2F",
        "name": "Emil Eifrem",
        "role": "Neo Technology",
        "bio": "Emil is the founder of Neo4j, the most widely deployed graph database on the planet, CEO of its commercial sponsor Neo Technology and a co-author of the O'Reilly book Graph Databases. He plans to save the world with graphs and own Larry's yacht by the end of the decade."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/7CAF54F170EBB48CC1257CA50080B646",
    "title": "Machine Learning Smackdown",
    "abstract": "In head-to-head comparisons, see various machine learning tools and products that best integrate with the Microsoft Business Intelligence and Analytics stack. We will cover techniques that include clustering, time series prediction and other common ML algorithms. In addition, we will cover real-world data preparation for model building, including outlier detection and removal, discretization, and other common machine learning techniques. You will take away practical experience with machine learning processes that you can use in common business scenarios.",
    "url": "http://oredev.org/2014/sessions/machine-learning-smackdown",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A1CF3649C7D76BE1C1257CA500803F6A",
        "name": "Lynn Langit",
        "role": "Lynn Langit Consulting",
        "bio": "Lynn Langit is a Big Data and Cloud architect. She's built solutions for customers in education, manufacturing and bio-tech and other verticals. Lynn's published three books on SQL Server Business Intelligence. Read her blog at www.LynnLangit.com. She also creates technical screencasts on YouTube at https://www.youtube.com/user/SoCalDevGal. She is also the co-founder of the non-profit 'Teaching Kids Programming' which is part of the MONA Foundation."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/A3E24CC195670843C1257D43003FE3CA",
    "title": "Lighting the way for the Internet of Things",
    "abstract": "What happens when the fast-paced world of the web meets the resource limited world of distributed embedded systems? During our time putting the internet in the Philips Hue lightbulbs, we encountered interesting challenges. How do you create a cost-effective IoT architecture that scales? What changes when your product has both a local and a remote API, each with different capabilities? An architectural overview, war stories and passing on some key learnings.",
    "url": "http://oredev.org/2014/sessions/lighting-the-way-for-the-internet-of-things",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/51B79E9232A9F087C1257D43003F0302",
        "name": "Lukas van Driel",
        "role": "Q42",
        "bio": "In the 9 years Lukas has been working at Q42 he's gathered lots of titles: Chief Happiness Officer, Google Cloud developer, &quot;Yes I will fix your computer&quot;, and Captain Healthy.\n\nFor the past two years he's been the core developer of the Internet of Things platform that the Philips Hue lightbulbs run on. And he loves to talk about it :)"
      },
      {
        "crowdsource_ref": "2014/A1EA55052EF9960AC1257D430046DAC1",
        "name": "Arian van Gend",
        "role": "Q42",
        "bio": ""
      }
    ]
  },
  {
    "crowdsource_ref": "2014/ED5EA1F08C745BC1C1257CC6007FE96B",
    "title": "Debugging: The Science of Deduction",
    "abstract": "Software never works exactly the way we expect or intend it to, at least at first. Something inevitably goes wrong! What then? We are here for problem-solving, and every bug we encounter is a mystery, a wonderment, and a puzzle which upon resolution lets us move on to bigger, more interesting problems. Let's clear our heads and stop throwing spaghetti against the wall to see what sticks! We'll discuss how to systematically approach diagnosing the root causes of unexpected behavior in our code.",
    "url": "http://oredev.org/2014/sessions/debugging-the-science-of-deduction",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-05 15:40:00",
    "end_time": "2014-11-05 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/983F6EEECD074D4DC1257CC30055668E",
        "name": "Danielle Sucher",
        "role": "Stripe",
        "bio": "Danielle Sucher loves to spend her free time contributing patches to open source projects in languages she doesn't even know. When she was a kid, Danielle wanted to grow up to live in a library in a lighthouse and spend all her time learning and solving puzzles and creating things. Except for the lighthouse (so far), that's pretty much what her grown-up life has become. She loves digging into the guts of software and building tools and toys, because it's way easier than sitting still."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2D2A01DE0144797EC1257D14005EB447",
    "title": "What Development Teams Can Learn From Experience Designers",
    "abstract": "",
    "url": "http://oredev.org/2014/sessions/what-development-teams-can-learn-from-experience-designers",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-05 16:40:00",
    "end_time": "2014-11-05 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4BC673DAF4EDD553C1257CB8005ED00E",
        "name": "Kimberly Blessing",
        "role": "Think Brownstone",
        "bio": "In her nearly 20-year career on the Web, Kimberly Blessing has evangelized design, code, and accessibility best practices while holding senior engineering and management roles at Comcast Interactive Media, PayPal, and AOL. She has served on the W3C HTML and CSS Working Groups and was a co-lead and member of the Web Standards Project, the grass roots organization that helped the web standards movement get beyond the â€œbrowser warsâ€. Currently, Kimberly is a director at Think Brownstone, an experience design consultancy in the Philadelphia, USA area.\n\nA graduate of Bryn Mawr College (B.A., Computer Science) and The George Washington University (M.Sc., Computer Science), Kimberly is also a passionate advocate for increasing the number of women in computing and technology fields."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/864DC5F6B26F43AFC1257CC80044CAB5",
    "title": "An Introduction to the Dart Language, Libraries, and Tools",
    "abstract": "Dart provides a productive, end-to-end development experience for the web. This introduction will discuss the motivation for Dart along with a walk-through of language, libraries, and tools. Learn why Google is investing in Dart and how Dart targets all modern web browsers. You will see projects inside and outside of Google using Dart today and how to evaluate Dart for your next project.",
    "url": "http://oredev.org/2014/sessions/an-introduction-to-the-dart-language-libraries-and-tools",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-05 16:40:00",
    "end_time": "2014-11-05 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3CD644A5333F2B59C1257CC800444862",
        "name": "Kevin Moore",
        "role": "Google",
        "bio": "Kevin is a Product Manager at Google working on the Dart language, libraries, and tools. Before joining Google, he was a contributor to the Dart project and a consultant specializing in open source web technologies."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8EA585DD1F373782C1257CB800450246",
    "title": "Twins: FP and OOP",
    "abstract": "Object-Oriented Programming has well established design principles, such as SOLID. For many developers architecture and functional programming are at odds with each other: they donâ€™t know how their existing tricks of the trade convert into functional design. This problem becomes worse as hybrid languages such as Java 8 or Scala become common. Weâ€™ll talk about how functional programming helps you implement the SOLID principles, and how a functional mindset can actually help you achieve cleaner and simpler OO design.",
    "url": "http://oredev.org/2014/sessions/twins-fp-and-oop",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-05 16:40:00",
    "end_time": "2014-11-05 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/369B449297EECE53C1257CB70063908E",
        "name": "Richard Warburton",
        "role": "Me",
        "bio": "Richard is an empirical technologist and solver of deep-dive technical problems. Recently he has been working on data analytics for high performance computing and has written a book on Java 8 Lambdas for Oâ€™Reilly. He is a leader in the London Java Community and organised the Adopt-a-JSR programs for Java 8 and runs the Openjdk Hackdays. Richard is also a known conference speaker, having talked at JavaOne, JFokus, Devoxx, Geecon and JAX London. Previously he worked on static analysis problems and compilers and has obtained a PhD in Computer Science from The University of Warwick."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/90CBB74707565E87C1257CE60005A970",
    "title": "Splunk, a smorgasbord for developing big data solutions",
    "abstract": "Splunk offers a leading product for ingestion and query of massive amounts of data in disparate formats. It is used by some of the largest organizations in the world to manage their big data workloads. In addition it offers a killer developer platform with a smorgasbord of options. You can easily integrate as a backend to your existing server solutions, use it for mobile (Xamarin)/device development (Rasberry PI anyone), or extend it with custom applications. It offers SDKs in 6 different languages and a full underlying API. Come to this talk and weâ€™ll look at the platform and whatâ€™s possible with its delectable menu. You do not need to have any prerequisite knowledge of Splunk to benefit.",
    "url": "http://oredev.org/2014/sessions/splunk-a-smorgasbord-for-developing-big-data-solutions",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-05 16:40:00",
    "end_time": "2014-11-05 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/E8A36F8EF2C60478C1257CE6000179FC",
        "name": "Glenn Block",
        "role": "Splunk",
        "bio": "Glenn is a product manager for Splunkâ€™s developer experience. In his spare time he is also the author and a maintainer of scriptcs, an OSS tool for C# scripting. A hardcore coder professionally for almost 20 years, he cares deeply about making developersâ€™ lives easier.\n\nPreviously Glenn worked at Microsoft where he kickstarted ASP.NET Web API and spearheaded Microsoftâ€™s node.js story on Azure. Glenn is an active contributor to Node.js and .NET OSS projects, a supporter of the community, and a frequent speaker internationally on software development.\n\nHe is also a bit of a Web API fanatic and author of a new OReilly book on the subject. He lives with his wife and daughter in Seattle where rain and caffeine are a plenty."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/95DD0A1827FD4D05C1257CF1006AB74F",
    "title": "Approaches to Developing Cross-Platform Software",
    "abstract": "Flipboard has grown from a single iPad app to being available on a multitude of platforms and devices in just 3 short years. In this session you'll learn about a number of the different approaches Flipboard takes to sharing its resources and keeping things in sync across those differing platforms. Topics will include\n- Localization\n- App configuration\n- Article and content rendering\n- Backwards compatibility and versioning\n- Release planning and management\n- Examples of things that explicitly aren't shared and the reasons for not sharing them",
    "url": "http://oredev.org/2014/sessions/approaches-to-developing-cross-platform-software",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-05 16:40:00",
    "end_time": "2014-11-05 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/827D9973A397A30EC1257CF10067DBA3",
        "name": "Tim Johnsen",
        "role": "Flipboard, Inc.",
        "bio": "I've been developing software for iOS since 2009 and for Android since early 2014. I've been working hard on advancing digital reading products at Flipboard since January 2012 on both platforms. I also maintain a set of independent hobby apps on the App Store which I love updating regularly."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B080EA4A73B2BFF5C1257CB3006B0B0A",
    "title": "The inevitability of Smart Dust",
    "abstract": "Over the next decade we will see the death of the general purpose computer. Everyday objects are already becoming smarter and in 10 years time, every piece of clothing you own, every piece of jewelry, and every thing you carry with you will be measuring, weighing and calculating. In 10 years, the worldâ€”your worldâ€”will be full of sensors. Those sensors will necessarily need computing power, and computing will almost inevitably diffuse out into our environment along with those sensors. We've been talking about smart dustâ€”general purpose computing, sensors, and wireless networking, all bundled up in millimeter-scale motes drifting in the air currents, flecks of computing power, settling on your skin, ingested, monitoring you inside and outâ€”since the late 90's. Technology is finally catching upâ€”the major stumbling block is powering the systemsâ€”passive power generation techniques, like vibration harvesters, have already been scaled down quite nicely, and their meager energy output is well-suited to the equally tiny energy requirements of the new smart dust. But the ubiquity of smart dustâ€”the instant availability of computing power and the blanket sensor coverageâ€”means that this technological change will drive social change. The diffusion of computing into the environment will mean not just that computing power is always available, but that this computing power will drive ubiquitous monitoring and surveillance. The only real question is who will have access to the sensors, computing power, and to the data it generates. Whether the architectures for the smart dust networks will be peer-to-peer and make that computing power and sensing available to individuals, or whether the network architectures will centralise command-and-control into a few hands. In the first case the sociological changes that will drive are enormous, in the past we've seen that quantifying things, informing us, quantifying the world, allows us to make better decisions. Data leads to data led decisions. In the later caseâ€”whether those hands are governmental or corporateâ€”we could end up in the middle of a smart dust war, where competing networks battle for groundâ€”in the air around you, even on your skin. We stand at the edge of another paradigm shift in computing, which like the smart phone, and the desktop computer before that, will drive social change. How that change affects us is still to be seen.",
    "url": "http://oredev.org/2014/sessions/the-inevitability-of-smart-dust",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-05 16:40:00",
    "end_time": "2014-11-05 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/40C9E0240D144932C1257CB000551A33",
        "name": "Alasdair Allan",
        "role": "The Thing System",
        "bio": "http://alasdairallan.com/"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D77292D4AFB80409C1257CD300393F28",
    "title": "How to improve estimates for software projects, the #NoEstimates view",
    "abstract": "Often we hear that estimating a project is a must. &quot;We can't make decisions without them&quot; we hear often. In this session I'll present examples of how we can predict a release date of a project without any estimates, only relying on easily available data.\nI'll show how we can follow progress on a project at all times without having to rely on guesswork, and we will review how large, very large and small projects have already benefited from this in the past. At the end of the session you will be ready to start your own #NoEstimates journey.",
    "url": "http://oredev.org/2014/sessions/how-to-improve-estimates-for-software-projects-the-noestimates-view",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-05 16:40:00",
    "end_time": "2014-11-05 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/67BFB6BAFD4EC128C1257CC20031A085",
        "name": "Vasco Duarte",
        "role": "Oikosofy",
        "bio": "Product Manager, Scrum Master, Project Manager, Director, Agile Coach are only some of the roles that I've taken in software development organizations. Having worked in the software industry since 1997, and Agile practitioner since 2004. I've worked in small, medium and large software organizations as an Agile Coach or leader in agile adoption at those organizations.\nPrincipal Consultant and Managing partner at Oikosofy.com"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/0B51390C27E442E7C1257D150082002A",
    "title": "Deconstructing HER",
    "abstract": "Christopher Noessel is keeper of the blog scifiinterfaces.com, and co-author of a book from the same project, Make It So: Interaction Design Lessons from Science Fiction (Rosenfeld Media 2012). On his site he publishes deep analyses and critiques of interfaces seen in science fiction films and television.\nFor Ã˜redevâ€™s Man Love Machine theme, Noessel will deconstruct one of the most compelling and yet flawed technologies seen in recent sci-fi cinema: The eponymous OS1 in Spike Jonzeâ€™ Her. Heâ€™ll walk step by step through the narrative in which Theodore Twombly uses and falls in love with Samantha, an artificial intelligence sold as an operating system. In analyzing OS1 as an interface, interactions, a wearable computer, and a service, weâ€™ll see how Jonzeâ€™s vision illustrates the edges of a design problem for the future of artificial intelligence, as well as the existential problems of falling in love with a machine.\nFinally, Noessel will conclude by talking about the future of technologists, designers, and lovers in a world where artificial intelligence exists.",
    "url": "http://oredev.org/2014/sessions/deconstructing-her",
    "space_name": "Keynote",
    "venue": "vfzb",
    "start_time": "2014-11-05 09:00:00",
    "end_time": "2014-11-05 10:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4AE183E45C7B786DC1257CEB001E9C22",
        "name": "Chris Noessel",
        "role": "Cooper",
        "bio": "Christopher Noessel, in his day job as Design Fellow at the pioneering interaction design firm Cooper, designs products, services, and strategy for the health, financial, and consumer domains, among others. In his role as practice lead, he helps manage the &quot;generator&quot; type of interaction designers, helping them build their skills and lead client projects to greatness. Christopher has been doing interaction design for more than 20 years (longer than we've even been calling it that). He co-founded a small interaction design agency where he developed interactive exhibitions and environments for museums, and he worked as a director of information design at international Web consultancy marchFIRST, where he also helped establish the interaction design Center of Excellence.\n \nChristopher was one of the founding graduates of the now-passing-into legend Interaction Design Institute Ivrea in Ivrea, Italy, where his thesis project was a comprehensive service design for lifelong learners called Fresh. The project was presented at the MLearn conference in London in 2003. He has since helped to visualize the future of counterterrorism as a freelancer, built prototypes of coming technologies for Microsoft, and designed telehealth devices to accommodate the crazy facts of modern health care in his role at Cooper.\n \nChristopher has written for online publications for many years, and was first published in print as co-author of the interaction design pattern chapter in the textbook edited by Simson Garfinkel, RFID: Applications, Security, and Privacy. His Spidey sense goes off at random topics, and this has led him to speak at conferences around the world about a wide range of things, including interactive narrative, ethnographic user research, interaction design, sex-related interactive technologies, free-range learning, the future of technology and interaction design, and the relationship between science fiction and interface design with his 2012 coauthored book Make It So: Interaction Design Lessons from Science Fiction."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/9B3687091C19BEA0C1257D1000412FCE",
    "title": "Deliberate Advice from an Accidental Career",
    "abstract": "Dan North shares some of the interactions that have shaped his accidental career: the time he killed the production database, the time the team was imploding, the time the boss was wrong, the time he was the boss who was wrong, the time he tried to quit and failed, and a few others, outlining the impact that interactions with people can have on someone.",
    "url": "http://oredev.org/2014/sessions/deliberate-advice-from-an-accidental-career",
    "space_name": "Keynote",
    "venue": "vfzb",
    "start_time": "2014-11-05 17:40:00",
    "end_time": "2014-11-05 18:40:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/F9568546ED01A4F9C1257D0F00564AF6",
        "name": "Dan North",
        "role": "",
        "bio": "Dan North uses his deep technical and organisational knowledge to help CIOs, business and software teams to deliver quickly and successfully. He puts people first and finds simple, pragmatic solutions to business and technical problems, often using lean and agile techniques. With over twenty years of experience in IT, Dan is a frequent speaker at technology conferences worldwide. The originator of Behaviour-Driven Development (BDD) and Deliberate Discovery, Dan has published feature articles in numerous software and business publications, and contributed to The RSpec Book: Behaviour Driven Development with RSpec, Cucumber, and Friends and 97 Things Every Programmer Should Know: Collective Wisdom from the Experts. He occasionally blogs at http://dannorth.net/blog."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2FC730A0B95A37A3C1257CD90009FA07",
    "title": "Continuous Discovery, The Power of Pure Agile",
    "abstract": "Continuous Discovery: The future is for us to discover, one moment at a time.\nThe strength of Agile lies in the simplicity and clarity of the Values and Principles expressed in theÂ  Agile Manifesto.Â  I have found that if we take this philosophy to heart it can empower the people doing software development in any organization to make rapid strides to the &quot;land of better&quot;.\nÂ \nAs leaders, activators, and influencers of change in the companies we work with, we must take responsibility to understand the philosophy of Agile, and learn to invite and draw people to share that understanding.Â  Sometimes it seems like an impossible task, and we see &quot;Agile adoptions&quot; that merely overlay the broken and failing &quot;same old, same old&quot; with new words. \nÂ \nWe need change, we want change, and we know we must influence change for the better.\nI'll share with you how I apply and use &quot;Pure Agile&quot; in my daily work, and encourage Continuous Discovery, Learning, and Growth in the teams and companies I work with.Â  Let's explore together and discoverÂ the path to future we want to create.\n",
    "url": "http://oredev.org/2014/sessions/continuous-discovery-the-power-of-pure-agile",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 10:20:00",
    "end_time": "2014-11-06 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/CCA74C459508ED29C1257CD8007D8FB8",
        "name": "Woody Zuill",
        "role": "Hunter Industries",
        "bio": "Woody Zuill has been programming computers for 30 years, and works as an Agile Coach/Development Manager. Over the last 15 years he has worked as an Agile Coach, Trainer, and Extreme Programmer. He believes code must be simple, clean, and maintainable to realize the Agile promise of Responding to Change. He spent many years as an artist/designer/manufacturer of graphics for televised sporting events where deadlines are for real. Loves Mob Programming."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/3374F279DBF7BB39C1257CF50002CE67",
    "title": "Ingredients of Successful Java EE 7 Applications",
    "abstract": "Depending how to tackle it, Java EE 7 can be hell or heaven. From a scary enterprise monster to a nimble startup killer app. \nWhat makes Java EE applications succeed? In this session I would like to introduce you to the â€œBest of Breedâ€ Java EE 7 and Java 8 APIs, approaches\nand techniques of â€œsuccessfulâ€ Java EE applications. â€œSuccessfulâ€ means: the application works and the developers enjoy the building and the maintenance process.",
    "url": "http://oredev.org/2014/sessions/ingredients-of-successful-java-ee-7-applications",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 10:20:00",
    "end_time": "2014-11-06 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/B6ED45804D4C57D2C1257CF500021948",
        "name": "Adam Bien",
        "role": "adam-bien.comg",
        "bio": "Consultant and author Adam Bien is an Expert Group member for the Java EE 6 and 7, EJB 3.X, JAX-RS, and JPA 2.X JSRs. He has worked with Java technology since JDK 1.0 and with Servlets/EJB 1.0 and is now an architect and developer for Java SE and Java EE projects. He has edited several books about JavaFX, J2EE, and Java EE, and he is the author of Real World Java EE Patternsâ€”Rethinking Best Practices and Real World Java EE Night Hacksâ€”Dissecting the Business Tier. Adam is also a Java Champion, Top Java Ambassador 2012, and JavaOne 2009, 2011, 2012 and 2013 Rock Star. Adam occasionally organizes Java EE workshops at Munichâ€™s airport (http://airhacks.com)."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8AF24A7457817484C1257CE600047497",
    "title": "Using scriptcs as part of your API development workflow",
    "abstract": "This talk will combine two things that I am extremely passionate about, API development and scriptcs. I am sure youâ€™ve heard of APIs, but what is scriptcs? Itâ€™s a lightweight way to develop C# which offers a less-montonous C# experience and fully supports nuget. You can develop with it using a simple text editor like Sublime, or using its interactive REPL environment. As of recent, itâ€™s cross platform, so you can use it on Mac, and Linux as well Windows. In this talk I am going to show you you can use scriptcs to offer a programmatic fiddleresque experience for interacting with APIs as your developing, including and most importantly working with Hypermedia. Not only that but you can use scriptcs to quickly get an API up and running as well.",
    "url": "http://oredev.org/2014/sessions/using-scriptcs-as-part-of-your-api-development-workflow",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 10:20:00",
    "end_time": "2014-11-06 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/E8A36F8EF2C60478C1257CE6000179FC",
        "name": "Glenn Block",
        "role": "Splunk",
        "bio": "Glenn is a product manager for Splunkâ€™s developer experience. In his spare time he is also the author and a maintainer of scriptcs, an OSS tool for C# scripting. A hardcore coder professionally for almost 20 years, he cares deeply about making developersâ€™ lives easier.\n\nPreviously Glenn worked at Microsoft where he kickstarted ASP.NET Web API and spearheaded Microsoftâ€™s node.js story on Azure. Glenn is an active contributor to Node.js and .NET OSS projects, a supporter of the community, and a frequent speaker internationally on software development.\n\nHe is also a bit of a Web API fanatic and author of a new OReilly book on the subject. He lives with his wife and daughter in Seattle where rain and caffeine are a plenty."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/95EFED2C9CAF36A7C1257CAC006CBD3D",
    "title": "Beyond responsive design - UI for the modern web application",
    "abstract": "Applications written for the modern web are being consumed not just on desktop browsers, but also on a myriad of other devices... even watches and glasses. If you design your application with a pc screen in mind, at worst you're either cutting your user base in half or setting yourself up for an expensive redesign.\nIn this talk I'll introduce you to some modern web design constructs, and the technologies that bring them to life. This is not just grid layouts or twitter bootstrap... learn how to create apps that work intrinsically on phone, mobile and desktop with no extra effort or frameworks. When implemented correctly, we'll see that the web is no longer that far behind native applications. The future of the web is now.",
    "url": "http://oredev.org/2014/sessions/beyond-responsive-design--ui-for-the-modern-web-application",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 10:20:00",
    "end_time": "2014-11-06 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/B37BEE6F3E2DD778C1257CAC002987A4",
        "name": "Peter Smith",
        "role": "One and Three Consulting",
        "bio": "Pete is a software consultant based in London with almost 10 years of experience making web applications with Asp.Net, specialising in API design and Javascript browser-based applications. He is the author of Superscribe - a graph based routing framework, and the OData library Linq to Querystring.\n\nHis favourite C# keyword is 'explicit'."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D97335875F754BF5C1257CEA001D7225",
    "title": "Don't Take It For Granted: How would we code if programming was worse in various ways?",
    "abstract": "In order to better understand the choices and tradeoffs we make, it can be interesting to look at how various constraints might cause us program in other ways. We'll walk through how a small program would have to be implemented differently in a bunch of darker, angrier worlds - for example, what if we had no variables? If there was no stack? If there were no pointers? What can we learn by exploring a set of dangerous and tricksy alternate realities?",
    "url": "http://oredev.org/2014/sessions/dont-take-it-for-granted-how-would-we-code-if-programming-was-worse-in-various-ways",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-06 10:20:00",
    "end_time": "2014-11-06 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/983F6EEECD074D4DC1257CC30055668E",
        "name": "Danielle Sucher",
        "role": "Stripe",
        "bio": "Danielle Sucher loves to spend her free time contributing patches to open source projects in languages she doesn't even know. When she was a kid, Danielle wanted to grow up to live in a library in a lighthouse and spend all her time learning and solving puzzles and creating things. Except for the lighthouse (so far), that's pretty much what her grown-up life has become. She loves digging into the guts of software and building tools and toys, because it's way easier than sitting still."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E3BFDF9DB41B0369C1257D7E005847A5",
    "title": "Continuous Delivery with OpenShift",
    "abstract": "Building software is hard. Building the supporting environments and processes are even harder. OpenShift PaaS hides much of that complexity and provides a quick way towards delivering software quickly and continuously so that you can focus on building software rather than all the boring stuff. This talk will introduce OpenShift and demonstrate how to do Continuous Delivery though building a delivery pipeline on top of OpenShift. We will be pushing code to live servers within minutes.",
    "url": "http://oredev.org/2014/sessions/continuous-delivery-with-openshift",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 10:20:00",
    "end_time": "2014-11-06 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/FD65EBF9BA4C48C7C1257D7400337881",
        "name": "Siamak Sadeghianfar",
        "role": "Red Hat AB",
        "bio": "Siamak Sadeghianfar is a Solution Architect at Red Hat working across the Nordics and helping customers adapting open source and Red Hat technologies. He has deep experience and knowledge in the middleware area and has been working with Java, Java EE and related technologies for his entire professional life."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/EB30539FE1C894DCC1257CAC00352BAA",
    "title": "Refactoring to Functional",
    "abstract": "How many times have been told how functional programming is so much better than imperative, and then being presented with a functional approach to calculating a fibonacci sequence, leaving you wondering how that can be even remotely useful when working in real world applications? Yep, weâ€™ve all been there. It seems that every time someone wants to explain functional programming to us, itâ€™s around how to solve some mathematical problem. But how does that provide us value? How do we deal with things like grouping functionality, loose coupling and consequently dependency injection?",
    "url": "http://oredev.org/2014/sessions/refactoring-to-functional",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 10:20:00",
    "end_time": "2014-11-06 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/00D4CDCE5DE9E258C1257CAC0034D137",
        "name": "Hadi Hariri",
        "role": "JetBrains",
        "bio": "Iâ€™m a Software Developer, currently working at JetBrains. My passions include Web Development and Software Architecture. Iâ€™ve written a few books and have been speaking at conferences for over a decade, on things Iâ€™m passionate about."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/139CAF1A2C3375F1C1257CAC0029C323",
    "title": "Advanced Android TextView",
    "abstract": "The humble TextView was there when you wrote your Hello World app. You know how to change its text size and color, perhaps its font too. But do you know that you can also put multiple font sizes in the same TextView? Highlight individual words? Embed inline images? Come and learn how to unleash the power of TextView with Span, Paint, and much more.",
    "url": "http://oredev.org/2014/sessions/advanced-android-textview",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/07413BB827A2DE4EC1257CA80060A905",
        "name": "Chiu-Ki Chan",
        "role": "Square Island LLC",
        "bio": "Chiu-Ki is a mobile developer with a passion in speaking and teaching. Her mother tongue for mobile is Android, acquired while working on Android Maps at Google. Now she runs her own mobile development company, producing delightful apps such as &quot;Monkey Write&quot; for learning Chinese writing and &quot;Heart Collage&quot; for snapping photos to stitch into a heart.\n\nWhen she is not writing apps, she can be found travelling the world, sometimes sightseeing, sometimes dispensing Android tips on stage at various tech conferences."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/27051EA586F943A2C1257CAC005301B1",
    "title": "Build a Better Bootstrap",
    "abstract": "The influence of Twitter's Bootstrap framework is undeniable, but it brings with it a steep learning curve and a great many features the average web app simply doesn't need. In this session, you'll learn how easy it is to build your own web framework from the ground up, so you can tailor it to yourâ€”and only yourâ€”needs. We'll start with a solid CSS foundation, add on some component scaffolding for your most common use cases, and top it off by discussing how to share your new web framework with your team. Grab your hard hat and come learn how to build a better Bootstrap!",
    "url": "http://oredev.org/2014/sessions/build-a-better-bootstrap",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/5CE32EE72694400EC1257CAC0052DB48",
        "name": "Tim G. Thomas",
        "role": "frog",
        "bio": "Tim G. Thomas is a Software Engineer at frog in Austin, Texas, where he applies holistic design principles to make the web both usable and beautiful. He speaks on various topics at technology user groups, conferences, and meet-ups, blogs about Web, game, and mobile design at http://timgthomas.com, and shares his thoughts via Twitter at @timgthomas."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/81C240ADB2CB0384C1257CEC004316E3",
    "title": "Generation 64 - the Shaping of a Successful IT and Gaming Nation",
    "abstract": "&quot;Generation 64&quot; is a coffee table book that will be released in September and I would be happy to give a presentation of how Sweden was transformed from a nation that was suspicious of personal computer in 1983 - to a nation that loved and embraced them ten years later. What happened during the decade between 83 and 93? The C64 scene happened. Jimmy Wilhelmsson have interviewed some 25 known and unknown Swedes who tell their fantastic story about how the Commodore 64 - the world's best selling computer ever - changed their life. And eventually a whole nation.",
    "url": "http://oredev.org/2014/sessions/generation-64--the-shaping-of-a-successful-it-and-gaming-nation",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/C358608D317263CEC1257CEC0042E428",
        "name": "Jimmy Wilhelmsson",
        "role": "Spelpappan.se",
        "bio": "Editor of Spelpappan.se - a retro blog that compares the present with the past. Author of &quot;Generation 64: Commodore 64 Made Me Who I Am&quot; - a coffee table book about the young Swedes who grew up with the Commodore 64 and laid the foundation of a successful IT and Gaming nation."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/849A40C02B3EDE1DC1257D6E00667AD6",
    "title": "ClojureScript for the web",
    "abstract": "Over the last few years we have seen the rise of browser\napplications. Instead of rendering all UI server side, JavaScript\ndriven client applications are now being widely adopted. While\nJavaScript is a flexible and powerful language, it has its\nshortcomings. This is where languages that compile to\nJavaScript step in. ClojureScript is one of them and offers its own\npowerful features to the front end developer. In this talk you will\nget an overview of what ClojureScript development looks like and how\nit may simplify your application.",
    "url": "http://oredev.org/2014/sessions/clojurescript-for-the-web",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/13FEE6081E07947BC1257D6B005295BA",
        "name": "Michiel Borkent",
        "role": "Finalist",
        "bio": "Michiel Borkent is a software developer with an interest in functional\nprogramming, especially Clojure. He has a masterâ€™s degree in\nInformatics from the University of Twente. Michiel currently works at Finalist as a Clojure and Java developer. In his former job as a lecturer he enjoyed developing and teaching programming courses (C#, Clojure and others). Michiel's hobbies include vegan cooking, drinking coffee and listening to progressive rock and metal."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C031F5105CC1FECCC1257CAC007C332B",
    "title": "Real World Lessons on the Anti-Patterns of Node.js Applications",
    "abstract": "The Node.js is a vibrant and passionate community, pushing the boundaries and exploring the best ways to build applications. This has resulted in some amazing frameworks but has also made it difficult for people to understand how to best architecture and build Node.js applications. \nIn this session, Ben will take his experience of building Node.js applications and discuss the anti-patterns, many of which heâ€™s implemented before, and the alternative approaches heâ€™s taking to build maintainable and reliable APIs and Web Applications.\nThe key discussion points will include:\nControlling an asynchronous world of Callbacks, Async and Promises. \nSOA/MicroServices and keeping things small\nError handling, monitoring and deploying to production \nTesting and debugging to move beyond console.log",
    "url": "http://oredev.org/2014/sessions/real-world-lessons-on-the-anti-patterns-of-node-js-applications",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/87D6DDF62BD6EAC3C1257CAB00472E67",
        "name": "Ben Hall",
        "role": "Ocelot Uproar",
        "bio": "Startup founder, polyglot programmer developing using a combination of Node.js, JavaScript, Ruby, iOS and C#. Passionate about exploring, sharing and educating others in new and emerging technologies and development practices. Frequently found tweeting (@Ben_Hall) and drinking tea while trying to look busy."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D4669B9A1A806343C1257CEA006B483F",
    "title": "Retrospectives are boring and useless â€“ or are they?",
    "abstract": "Way to often I hear people say that retrospectives are useless, boring and take too long.\n \nWhat I have learned is that if this is your experience, your retrospective is not done right â€“ do it right and get some value from it :)\n \nSo what is the difference between a good and a bad retrospective?\nThe structure and the facilitation.\n \nRetrospectives are the strongest tools in the agile toolbox. They help make your team/project/company better. They are an important part of the process to continuously inspect and adapt.\n \nIn this session I will talk about the structure of a good retrospective and the important principles to follow to get a good retrospective every time.",
    "url": "http://oredev.org/2014/sessions/retrospectives-are-boring-and-useless--or-are-they",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/291240FC4434CF94C1257CAC003D0563",
        "name": "Gitte Klitgaard",
        "role": "Native Wired",
        "bio": "Gitte Klitgaard is an Agile Coach, Pirate, Dragon Lady, Hugger, friend, and much much more. She is agile; live it and love it. Preferred starting point is scrum and then adapting is the key. She has taken the oath of non-allegiance because she beliefs that processes and methods are tools; a tool has different value in different context. And she hates when people spend time fighting over which is the best tool instead of using that energy to help people.\n Gitte has more than 10 years experience in different aspects of software development from testing, analysis, and processes to currently working with Agile and people. She wants to change the world by helping people in their work life; getting more work done, making the right product, doing it right and very important: have fun doing it. \nToday she has a great interest in how people function, how the brain works, what motivates us, how we can feel better about our selves, how to be perfect in all our imperfections.\nShe is also a geek and very passionate about a lot of stuff :)"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E8529928968F24D6C1257CC8004BE10A",
    "title": "AngularJS 2.0",
    "abstract": "Have burning questions about AngularJS 2.0? Want to know what we're up to, what's planned or get a status update? This is the place. In this talk we'll start by looking at the fundamental motivators and design goals of AngularJS 2.0. Next, we'll talk about specific features such as Dependency Injection, Templating, Binding and Routing. You'll gain a solid understanding of what AngularJS 2.0 comprises and have a feel for what the next generation of JS client development will be like.",
    "url": "http://oredev.org/2014/sessions/angularjs-2-0",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/74F7319C5A08B205C1257CC80049F92D",
        "name": "Rob Eisenberg",
        "role": "Blue Spire",
        "bio": "Rob Eisenberg is a JavaScript expert working out of Tallahassee, FL and is the President of Blue Spire. He is the founder of the Durandal and Caliburn.Micro projects. Rob currently works as a member of both the AngularJS 2.0 Core Team and the AngularJS Material Design team, helping to develop the next generation of web application frameworks and tooling."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/EB3B664841132FEAC1257CB80048798B",
    "title": "A sign of the Times: Dates and Times in Java 8",
    "abstract": "A long standing thorn in the side of Java developers is the set of problems associated\nwith java.util.Date and Calendar. Inconsistencies such as whether numbers start at 0, 1\nor 1900. Poor design decisions such as inherently thread unsafe formatters.\nThankfully Java 8 introduces a new API for date and time values based on domain modelling, thread safety and fluency. If you want to learn about how to use the API and how to integrate it into your existing projects then this is the talk for you!",
    "url": "http://oredev.org/2014/sessions/a-sign-of-the-times-dates-and-times-in-java-8",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 11:20:00",
    "end_time": "2014-11-06 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/369B449297EECE53C1257CB70063908E",
        "name": "Richard Warburton",
        "role": "Me",
        "bio": "Richard is an empirical technologist and solver of deep-dive technical problems. Recently he has been working on data analytics for high performance computing and has written a book on Java 8 Lambdas for Oâ€™Reilly. He is a leader in the London Java Community and organised the Adopt-a-JSR programs for Java 8 and runs the Openjdk Hackdays. Richard is also a known conference speaker, having talked at JavaOne, JFokus, Devoxx, Geecon and JAX London. Previously he worked on static analysis problems and compilers and has obtained a PhD in Computer Science from The University of Warwick."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/38C019D2EBEFF012C1257CAC0037D182",
    "title": "Functional Thinking",
    "abstract": "Learning the syntax of a new language is easy, but learning to think under a different paradigm is hard. This session helps you transition from a Java writing imperative programmer to a functional programmer, using Java, Clojure and Scala for examples. This session takes common topics from imperative languages and looks at alternative ways of solving those problems in functional languages. As a Java developer, you know how to achieve code-reuse via mechanisms like inheritance and polymorphism. Code reuse is possible in functional languages as well, using high-order functions, composition, and multi-methods. I take a variety of common practices in OOP languages and show the corresponding mechanisms in functional languages. Expect your mind to be bent, but youâ€™ll leave with a much better understanding of both the syntax and semantics of functional languages.\n",
    "url": "http://oredev.org/2014/sessions/functional-thinking",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 12:20:00",
    "end_time": "2014-11-06 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/AC1CE075351BC0A7C1257CAC003751A9",
        "name": "Neal Ford",
        "role": "ThoughtWorks, Inc",
        "bio": "Neal Ford is Director, Software Architect, and Meme Wrangler at ThoughtWorks, a global IT consultancy with an exclusive focus on end-to-end software development and delivery. He is also the designer and developer of applications, magazine articles, video/DVD presentations, and author and/or editor of eight books spanning a variety of subjects and technologies, including the most recent Presentation Patterns. He focuses on designing and building of large-scale enterprise applications. He is also an internationally acclaimed speaker, speaking at over 300 developer conferences worldwide, delivering more than 2000 presentations. Check out his web site at nealford.com. He welcomes feedback and can be reached at nford@thoughtworks.com.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/90F05B5A2F1FB6DDC1257CE50065478C",
    "title": "Evolving the NuGet.org Architecture",
    "abstract": "After 3 years of usage growth though, NuGet.org needs to be more reliable, scalable, and maintainable, with the goal of 99.999% availability of package downloads. To achieve this, weâ€™re evolving the architecture away from a monolithic website/service into several independent services, connected purely through HTTP. Come learn how weâ€™re starting to use Command Query Responsibility Segregation (CQRS), JSON-LD/Linked Data, and event sourcing.",
    "url": "http://oredev.org/2014/sessions/evolving-the-nuget-org-architecture",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 12:20:00",
    "end_time": "2014-11-06 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/6C5C990352ED78C4C1257CE50064C7EB",
        "name": "Jeff Handley",
        "role": "Microsoft",
        "bio": "Jeff Handley works at Microsoft and is the Development Lead for NuGet. Jeff has been building and maturing software projects for over 15 years. Prior to working on NuGet, his largest projects covered education, healthcare waste management, fantasy football, credit/mortgage, and point of sale. Jeff loves that NuGet is an open-source project and is trying to enable more ecosystem growth around the project while improving the core product's features and reliability."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/9CAFFABD127B6340C1257CE0002BED2A",
    "title": "Automation Abstractions - Page Objects and Beyond",
    "abstract": "When you start to write automation for your projects you quickly realise that you need to organise and design the code. You will write far more than 'test' code, you also write abstraction code because you want to make 'tests' easier to read and maintain. \nBut how do you design all this code? How do you organise and structure it? Should you use a Domain Specific Language? Should you go Keyword Driven or use Gherkin? Should you use Page Objects with POJO or Factories? Do you create DOM Level abstractions? Where do Domain Models fit in? \nIn this session Alan Richardson will provide an overview of some options available to you when modeling abstraction layers. Based on experience of using many approaches, on real-world commercial projects, Alan will help you understand how to think about the modeling of abstraction layers. And in a talk illustrated with code examples, Alan will show you a variety of approaches and discuss the pros and cons associated with them.",
    "url": "http://oredev.org/2014/sessions/automation-abstractions--page-objects-and-beyond",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 12:20:00",
    "end_time": "2014-11-06 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/9FE600A4CA28CE53C1257CDD005F6C42",
        "name": "Alan Richardson",
        "role": "Compendium Developments",
        "bio": "Alan Richardson has more than twenty years of professional IT experience, working as a programmer and at every level of the testing hierarchy from tester through head of testing. Author of the books Selenium Simplified and Java For Testers, Alan also has created online training courses to help people learn technical web testing and Selenium WebDriver with Java. He works as an independent consultant, helping companies improve their use of automation, agile, and exploratory technical testing. Alan posts his writing and training videos on SeleniumSimplified.com, EvilTester.com, JavaForTesters.com, and CompendiumDev.co.uk."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C19A0B2347678B40C1257CE4005703EC",
    "title": "Witness TDD with real, live REFACTORING MANIACS",
    "abstract": "Classic old-school TDD recommends refactoring as part of every cycle -- red, green, refactor. In fact, it recommends refactoring mercilessly. Relentlessly. To succeed at classic TDD, you have to be some kind of refactoring maniac!\nRefactoring maniacs are an endangered species, but you're in luck: we have one of the last remaining pairs. See for yourself how refactoring fits into the TDD cycle, and when practiced mercilessly, allows beautiful, simple code to emerge.",
    "url": "http://oredev.org/2014/sessions/witness-tdd-with-real-live-refactoring-maniacs",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 12:20:00",
    "end_time": "2014-11-06 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/DB6A8C5FA39DD9FFC1257CAC000E2134",
        "name": "Angela Harms",
        "role": "Maitria.com",
        "bio": "Angela Harms is an agile developer, coach, facilitator, and instigator. She loves beautiful code that emerges from collaboration, and learning new ways to make it work. When sheâ€™s not pairing on tests and the code they inspire, you can find her at conferences speaking about what sheâ€™s learned (so far), facilitating kick-ass retrospectives, or discussing the intersection of software and love in open space."
      },
      {
        "crowdsource_ref": "2014/2F174018DB3B15BDC1257CAC0007EC3C",
        "name": "Jason Felice",
        "role": "Groupon",
        "bio": "Jason Felice is an XP developer from Cleveland, Ohio (USA).Â Â  He's been coding since he discovered level 99 just keeps repeating on Space Invaders on the Atari 800. He loves fostering geek joy, the flow of coding, beautiful algorithms, and showing people that things can be simpler than they imagine.\n\nHe currently has a major crush on Clojure and is working on avi, a lively vim. Â Learn more about what lights him up at maitria.com."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C4100342E76A4BD8C1257CC30081BF35",
    "title": "JavaFX on your wall, in your car, or on a plane!",
    "abstract": "Fast and sexy, JavaFX is the perfect toolkit for creating cool UIs for embedded applications such as on wall displays, in car dashboards, or in flight entertainment systems. For embedded development, performance and size are key, and with JavaSE Embedded 8 it is possible to deploy a smaller, faster subset of Java to embedded systems. This session will explore techniques for building such UIs. Weâ€™ll demonstrate such UI deployed to systems ranging from a $30 700mhz Raspberry Pi all the way up to a $60 1.7Ghz quad-core ODROID-U3. IoT is driving device connections, to make that useful we will need to connect humans to those devices as well with all kinds of UIs.",
    "url": "http://oredev.org/2014/sessions/javafx-on-your-wall-in-your-car-or-on-a-plane",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 12:20:00",
    "end_time": "2014-11-06 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/7E319C1C536EC5C5C1257CB7006864EB",
        "name": "Richard Bair",
        "role": "Oracle",
        "bio": "Richard Bair is the architect for the client Java platform at Oracle. He was an influential lead in the development of JavaFX UI controls and associated APIs. Prior to that he was the lead of the SwingLabs project, which was an open source community supported by Sun with a focus on enhancing and extending Swing. Before working at Sun, Blair was an application developer with a focus on data-oriented rich client applications backed by databases. He has a passion for graphics, performance, and developer productivity."
      },
      {
        "crowdsource_ref": "2014/5006E0491C05CA83C1257CB70070103E",
        "name": "Jasper Potts",
        "role": "Oracle",
        "bio": "Jasper Potts is a IoT Client Architect at Oracle. Working on upcoming Oracle IoT products and responsible for making Java Client Cool. Formally a lead engineer on the JavaFX Swing teams working on the new JavaFX UI Controls and Graphics frameworks. Also responsible for designing, developing and presenting demos during the keynotes at JavaOne and Devoxx. A JavaOne Rockstar presenter having presented many sessions on JavaFX and Swing at many conferences. Prior to Sun he founded Xerto a desktop applications company developing Imagery a Java professional photo management application."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C7E79D5BD51FE9A1C1257C990030EAB5",
    "title": "OAuth 2.0 for JavaScript-Applications",
    "abstract": "OAuth 2.0 brings several variations, called flows. But which of them can be used for JavaScript-Applications and what are the consequences in view of security? This session gives an answer to this question. It shows which flows are suitable in which situations, how to implement them with JavaScript as well as the pros and cons of the existing options.",
    "url": "http://oredev.org/2014/sessions/oauth-2-0-for-javascript-applications",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 12:20:00",
    "end_time": "2014-11-06 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/7E0E7BB3CE2FA254C1257C94006DCCF5",
        "name": "Manfred Steyer",
        "role": "IT Visions | CAMPUS 02",
        "bio": "Manfred Steyer (www.softwarearchitekt.at) is a free-lance trainer, consultant and author at IT-Visions (www.it-visions.de) as well as responsible for the specialist division &quot;Software-Engineering&quot; at the university of applied science Campus 02 (www.campus02.at) in Graz (Austria). Before, he was in charge of a team concentrating on software development in the area of web- and database-based solutions. Manfred writes for O'Reilly, Microsoft Press, Hanser Presss, the german windows.developer and Heise Developer. Furthermore, he regularly speaks at conferences about software development."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D5577925789AC10CC1257CDE0074A769",
    "title": "Julia â€“Â a fast dynamic language for technical computing",
    "abstract": "As a programming language, Julia has some unusual features. Itâ€™s a fully dynamic language, yet rather than the â€œno talking about typesâ€ approach that many dynamic languages have adopted, Julia has an expressive type system, complete with parametric and dependent types. This is no accident â€“ talking about types is unavoidable in technical computing. But types arenâ€™t just used to describing the structure and layout of data in Julia â€“ they are also essential for expressing behavior. Programs are organized around multiple dispatch â€“ generic functions can be defined piecewise for various combinations of argument types. This allows the polymorphic behaviors rampant in mathematical code â€“ arithmetic operators, numeric promotions, array indexing â€“ to be expressed clearly, extensibly, and in a way that the compiler can reason about. Traditionally, this kind of flexibility and abstraction have come at the cost of performance. But by a combination of dynamic data-flow type inference (not Hindley-Milner!), and just-in-time code generation with aggressive specialization on runtime types, Juliaâ€™s compiler manages to generate efficient, low-level code despite all the abstraction. This talk will include lots of live coding to demonstrate concepts and provide on-the-spot examples to help answer questions.",
    "url": "http://oredev.org/2014/sessions/julia--a-fast-dynamic-language-for-technical-computing",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-06 12:20:00",
    "end_time": "2014-11-06 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3FD14A38F61AD0D7C1257CC9001FD1F7",
        "name": "Stefan Karpinski",
        "role": "MIT / Julia",
        "bio": "Stefan Karpinski is one of the co-creators and core developers of the Julia language. He is an applied mathematician and data scientist by trade, having worked at Akamai, Citrix Online, and Etsy, but currently is employed as a researcher at MIT, focused on advancing Juliaâ€™s design, implementation, documentation, and community."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/3F6BE3C9C25C9294C1257CE8006F0975",
    "title": "Your Agile challenges",
    "abstract": "Agile development has become increasingly popular in practice and while many aspects of \nteam-level agile development are well-understood, challenges still exist. This talk will be \nbased on an industry-academic partnership (Agile Research Network (ARN)) that has been \nrunning for nearly two years. ARN aims to work with industrial collaborators to identify and \ninvestigate agile challenges, identify existing research that may help address the challenge in \ncontext, and disseminate the findings. In this talk I will describe how the Network operates, \npresent an overview of the many different challenges that have been identified through \nour work, and discuss our experiences (challenges and their mitigations) with at least two \ndifferent collaborators. During the conference we will be running an â€œagile challenges wallâ€ \nwhere you will be able to post YOUR agile challenges. These will be collected and addressed \nduring talk.",
    "url": "http://oredev.org/2014/sessions/your-agile-challenges",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 13:20:00",
    "end_time": "2014-11-06 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/CF69DE9574C09425C1257CD80062F0A0",
        "name": "Helen Sharp",
        "role": "The Open University",
        "bio": "Helen Sharp is Professor of Software Engineering at the Open University, UK. Her research focuses on the study of professional software practice, specifically human and social aspects of software development. She is very active in both the software engineering and interaction design (HCI) communities, and has had a long association with practitioner-related conferences. She is on the Board of IEEE Software, and Transactions of Software Engineering, and reviews for many journals and conferences."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/7124967E7A52DF76C1257CD1004971A3",
    "title": "ORMs - you're doing it wrong",
    "abstract": "Nothing gets DBAs more riled up than a developer infatuated with an Object-Relational Mapper. ORMs work great at mapping from relational to objects, but can be a crutch. If you want to make your DBA (and your users happy), youâ€™ll want to use your ORM intelligently.\nIn this session, weâ€™ll look at application patterns, ORM features and more to discover the right way of using your ORM. Weâ€™ll also look at when to ditch your heavyweight ORM and reach for a lighter one. Finally, weâ€™ll cover why abstracting your ORM is evil and alternatives that give us more flexibility and maintainability in the long run.\n",
    "url": "http://oredev.org/2014/sessions/orms--youre-doing-it-wrong",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 13:20:00",
    "end_time": "2014-11-06 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/9ACD6A368BE653C3C1257CAC006CF836",
        "name": "Jimmy Bogard",
        "role": "Headspring",
        "bio": "Jimmy is an active member in the .NET community, leading open source projects, giving technical presentations, and facilitating technical book clubs. Jimmy is a member of the ASPInsiders group, the C# Insiders group, and received the &quot;Microsoft Most Valuable Professional&quot; (MVP) award for ASP.NET in 2009-2013. Jimmy is also the creator and lead developer of the popular OSS library AutoMapper."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/7AE7A668E689E46DC1257CAC005B5944",
    "title": "Testing Your Mobile App for Real-World Network Conditions",
    "abstract": "The rise of mobile devices has spawned new issues in developing websites and applications (e.g., screen size). Often overlooked in the complexity of mobile development is the network connection speed of your end user. Most mobile developers live in highly connected areas â€“ with fast 3-4G/Wi-Fi connections. How does your app perform in areas with less coverage? How about in areas of high congestion (conferences/sporting events)? What steps can you take to improve performance (or even change the UI for low network availability)? Iâ€™ll discuss tools to simulate various networking environments and development techniques to overcome these challenges.",
    "url": "http://oredev.org/2014/sessions/testing-your-mobile-app-for-real-world-network-conditions",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 13:20:00",
    "end_time": "2014-11-06 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/60966F358456C9D4C1257CAC00571441",
        "name": "Doug Sillars",
        "role": "ATT",
        "bio": "Doug Sillars, Ph.D., is an industry leader in mobile application performance, and is a member of the ATT Developer Advocacy team. He and his team of outreach engineers work with mobile developers to help make mobile apps that are more efficient, faster, and use less battery. A veteran of many mobile projects over the last 10 years, Doug received his PhD in Inorganic Chemistry from the University of Wisconsin-Madison."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8ADE96F7E7FC6899C1257CFC0019F4B1",
    "title": "Classical Typography and Digital Interfaces",
    "abstract": "What does 500 to 50 year old teaching on typography have to do with making a good digital interface today? This session will look at Gutenberg, Garamond, Bodoni, on up to early 20th century typographers such as Tschichold, Frutiger and the relevance of their work in designing better interfaces and digital experiences now in 2014.",
    "url": "http://oredev.org/2014/sessions/classical-typography-and-digital-interfaces",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-06 13:20:00",
    "end_time": "2014-11-06 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/7034E82AF0834DEFC1257CDF001C1FD5",
        "name": "Sean Wolcott",
        "role": "Microsoft",
        "bio": "Sean Wolcott is a Seattle-based graphic designer, currently working as Senior Art Director at Microsoft. Besides creating user interfaces and experiences for products used by millions, Mr. Wolcott runs his own practice, Rationale, where he designs identities, packaging, signage, publications, websites, and user interfaces for a wide array of clients.\n\nHis work reflects a holistic philosophy of design and a visual language, which aims at rational, objective expression that can appropriately convey clients' values. For Mr. Wolcott, design is not a matter of style, but rather a logical, problem-solving process that leads to timeless solutions.\n\nMr. Wolcott had the privilege of studying under Massimo Vignelli, whose teachings continue to inform his philosophy and propel his craft to higher standards of excellence.\n\nHis work is often featured in online and printed publications, and he has been nominated by Mr. Vignelli as one of the six top American graphic designers today under the age of 50, for which his works will be exhibited in the US and Italy in the fall of 2015.\n\nMr. Wolcott is also a teacher at the School of Visual Concepts (SVC) in Seattle, where he teaches corporate identity and user interface design courses. His efforts to inform and promote a better design culture are also reflected in his lecturing activity as an international speaker, having lectured several times in the United States, as well as in European countries.\n\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B0850FD9B7F82F04C1257D820036F73B",
    "title": "Mobile apps that work, even when your network doesn't",
    "abstract": "A deep dive on the new cross-platform offline data sync feature in Azure Mobile Services and how to data sync in existing apps.",
    "url": "http://oredev.org/2014/sessions/mobile-apps-that-work-even-when-your-network-doesnt",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 13:20:00",
    "end_time": "2014-11-06 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/57BFF58F44475F1CC1257D6900650E56",
        "name": "Yavor Georgiev",
        "role": "Microsoft",
        "bio": "Yavor is a Program Manager on the Azure team at Microsoft, focusing on building connected mobile apps. He spent the last couple of years building open-source frameworks to make the cloud accessible from any device. You can find him at http://hashtagfail.com and @theYavor on Twitter. In his spare time, Yavor is an avid outdoor enthusiast, mountaineer, and skier."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C695282B2999AF91C1257CA5003BD9F4",
    "title": "NoSQL: An introduction to polyglot persistence",
    "abstract": "The world of data is changing and becoming yet more important as data has become a significant competitive advantage. We are collecting increasing amounts of data, but wanting to process it in decreasing time. This demands new techniques in data storage, enabling the raise of NoSQL technologies. In this talk Pramod will talk about NoSQL in two phases.\nIn the first phase, the talk will focus on core concepts needed to understand NoSQL databases, NoSQL data models, in particular the role of aggregates and the consequences of schema-less models, options for distribution and the consequences of maintaining consistency.\nIn the second phase the talk will focus on implementation details and look at some representative databases so you can get a feel for how real NoSQL databases work using Riak, MongoDB, Cassandra, and Neo4J and also look at how to implement evolutionary design with schema migration -- an essential requirement even with schema-less databases.",
    "url": "http://oredev.org/2014/sessions/nosql-an-introduction-to-polyglot-persistence",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 13:20:00",
    "end_time": "2014-11-06 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/89A0F4E65863E06FC1257C91003AEDAA",
        "name": "Pramod Sadalage",
        "role": "ThoughtWorks",
        "bio": "Pramod Sadalage enjoys the rare role of bridging the divide between database professionals and application developers. In the early 00â€™s he developed techniques to allow relational databases to be designed in an evolutionary manner based on version-controlled schema migrations. He is the co-author of Refactoring Databases, co-author of NoSQL Distilled, author of Recipes for Continuous Database Integration and continues to speak and write about the insights he and his clients learn."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/CB9200CDDAC75FCAC1257CB70017855D",
    "title": "Life is Terrible: Let's Talk About the Web",
    "abstract": "Itâ€™s been known for years that JavaScript is a dangerous, unholy language that is banned in 27 countries and most fine restaurants. In this talk, I will use deeply personal and completely biased examples to describe why I hate JavaScript, and why you should hate it too. I will then provide additional reasons why the entire web stack is a thing that should not be tolerated by moral human beings. I will describe some of my futile research efforts to make web browsers moderately less the worse thing ever. Time permitting, I will also unify quantum mechanics and general relativity.",
    "url": "http://oredev.org/2014/sessions/life-is-terrible-lets-talk-about-the-web",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 13:20:00",
    "end_time": "2014-11-06 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/F5B62E07C5BEF496C1257CB70016A078",
        "name": "James Mickens",
        "role": "Microsoft Research",
        "bio": "James Mickens is a researcher in the Distributed Systems group at Microsoftâ€™s Redmond lab. Often described as The Hardest Working Man In Computer Science, his research spans genres, fields, and verb tenses. His seminal work on byzantine fault tolerant proofreading has been mistakenly cited over 3000 times, and his 1987 paper â€œWe Need More and Better Computersâ€ provided the foundation for cloud computing, mobile computing, and any type of computing that benefits from more and/or better computers. A self-renowned scholar, Mickens has published papers at many conferences, including several conferences that were not located in Hawaiian resorts. In his spare time, Mickens thinks about how to improve society, and whether this would require him to use only eight butlers instead of nine."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/012C70C6FBA8D508C1257D02005607AD",
    "title": "IoT Magic Show",
    "abstract": "What do magicians and programmers have in common? They are good at juggling, have very nimble fingertips, often make things vanish, and have lovely assistants! Ok, so maybe not all of those describe your average hacker (unless your pair programmer partner happens to be Penny), but we are going to try to put on the most spectacular magic show that has ever been seen on the stage at a tech conference! [geeks only]\nAs proper geeks, we are going to make heavy use of embedded wearable and internet connected devices to make up for our lack of dexterity and supernatural powers. Also, all tricks will be revealed with the designs available to reproduce in the spirit of open source and creative commons. Come join us to see for yourself what real [hacker] magic looks like!",
    "url": "http://oredev.org/2014/sessions/iot-magic-show",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 14:20:00",
    "end_time": "2014-11-06 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/658EFBF468DDAA03C1257CFB007D4A75",
        "name": "Stephen Chin",
        "role": "Oracle",
        "bio": "Stephen Chin is a Java Ambassador at Oracle specializing in embedded and UI technology, co-author of the Pro JavaFX Platform 2 title, and the JavaOne Content Chair. He has been featured at Java conferences around the world including Devoxx, JFokus, OSCON, JFall, GeeCON, JustJava, and JavaOne, where he thrice received a Rock Star Award. Stephen can be followed on twitter @steveonjava, reached via his blog: http://steveonjava.com/, and his hacking adventures can be seen on http://nighthacking.com/"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2056CA8B154DB36EC1257D4A002FA35B",
    "title": "UX behind the steering wheel",
    "abstract": "The next generation of cars are being designed with digital systems integrated to the in-car experience. This presentation will introduce key aspects of designing UX for cars and will provide examples from Volvo Carsâ€™ new SPA-platform.",
    "url": "http://oredev.org/2014/sessions/ux-behind-the-steering-wheel",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 14:20:00",
    "end_time": "2014-11-06 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/453A975E93B3EC21C1257D49004EF06E",
        "name": "Steffen Kramer Valsted",
        "role": "Volvo Cars",
        "bio": "Steffen has been a UX professional since year 2000, designing for mobile phones, websites and most recently for cars. He joined Volvo Cars in 2012 to bring UX practices into the automotive business."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2C84730409924086C1257CB30004698A",
    "title": "Continuous Delivery in a .NET world",
    "abstract": "Continuous Delivery is not new. I've been talking to about it for at least 5 or 6 years and there were those doing it before me. But it seems that it always is around Ruby [on Rails] or Python on Javascript. On Unix. Not about .NET or Windows. Which is exactly where I find myself these days not just running Delivery, but owning the whole pipeline [to some degree of irony...] of an .NET company. In this session I'll lay our delivery pipeline out for you not only the 'what worked' parts, but more importantly the 'what didn't work' parts as those are really the key takeaways from a talk like this. .NET is certainly full of its own 'snowflakes' but I suspect that the ones we encountered while wiring this all up are very similar to ones you will experience when you go down this route as well.",
    "url": "http://oredev.org/2014/sessions/continuous-delivery-in-a-net-world",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 14:20:00",
    "end_time": "2014-11-06 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/2DF7D14BE357EA53C1257CB300038B09",
        "name": "Adam Goucher",
        "role": "360incentives",
        "bio": "Tester. Writer. Ironic Gatekeeper. Holder of Opinions. Automator of things that should be automated. Manual doer of things that should be done by hand. Reforming Consultant.\n\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8C8FFD98B345B117C1257CE500304FC3",
    "title": "#NoEstimates Unplugged - A conversation about Agile as-if-you-meant-it",
    "abstract": "Woody Zuill and Vasco Duarte share their experiences with #NoEstimates and describe how #NoEstimates is just one small part of getting back to Agile-as-if-you-meant-it\nWe tackle: #NoEstimates implications on teams, stakeholders, product management and even business. But most of all we talk about the implications to us as human beings.\n#NoEstimates is just one of many conversations about what are the next steps for application of Agile concepts and ideas. #NoEstimates is, in Woody's and Vasco's opinion just one small aspect of a much wider discussion.",
    "url": "http://oredev.org/2014/sessions/-noestimates-unplugged--a-conversation-about-agile-as-if-you-meant-it",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 14:20:00",
    "end_time": "2014-11-06 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/67BFB6BAFD4EC128C1257CC20031A085",
        "name": "Vasco Duarte",
        "role": "Oikosofy",
        "bio": "Product Manager, Scrum Master, Project Manager, Director, Agile Coach are only some of the roles that I've taken in software development organizations. Having worked in the software industry since 1997, and Agile practitioner since 2004. I've worked in small, medium and large software organizations as an Agile Coach or leader in agile adoption at those organizations.\nPrincipal Consultant and Managing partner at Oikosofy.com"
      },
      {
        "crowdsource_ref": "2014/CCA74C459508ED29C1257CD8007D8FB8",
        "name": "Woody Zuill",
        "role": "Hunter Industries",
        "bio": "Woody Zuill has been programming computers for 30 years, and works as an Agile Coach/Development Manager. Over the last 15 years he has worked as an Agile Coach, Trainer, and Extreme Programmer. He believes code must be simple, clean, and maintainable to realize the Agile promise of Responding to Change. He spent many years as an artist/designer/manufacturer of graphics for televised sporting events where deadlines are for real. Loves Mob Programming."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/AE922EDBF61CB5D6C1257C90008242FB",
    "title": "How Sons of Anarchy can teach your organisation to be more effective",
    "abstract": "The programmer anarchy movement has showed that team autonomy is one of the key factor to create an effective organisation. But how do create such an environment? In the series Sons of Anarchy we get to know southern California chapter of the Sons of Anarchy and how they operate in a world of chaos. Many of the concepts in the series like chapter, table, prospect and the nomads can be used to give teams more autonomy help your organisation to become more effective.",
    "url": "http://oredev.org/2014/sessions/how-sons-of-anarchy-can-teach-your-organisation-to-be-more-effective",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-06 14:20:00",
    "end_time": "2014-11-06 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4958C13443ABB0B6C1257C900080FDB6",
        "name": "Emil Cardell",
        "role": "Thomas Cook Northen Europe",
        "bio": "Always looking for ways to find developer happiness, he looks outside the box and works actively to encourage developers to step out of their comfort zone to grow their love for creating amazing web applications. He is engaged in the developer community, speaking at conferences and contributing to multiple open source projects.\n\nEmil Cardell has been working on large public websites, communities and intranets for more than a decade, currently at Thomas Cook in Stockholm."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B8CA5642C7CCFC4EC1257CAE00729C45",
    "title": "Vagrant - the essence of DevOps in a tool",
    "abstract": "Traditionally, developers would write their applications without any thought as to what system it was going to be deployed on in production. It was also very difficult for them to understand how their software would react when releasing it into a production environment as they didn't really understand how that environment was configured. What if there was a way that developers could create the scripts needed to install dependencies and get the software running as it is developed? Vagrant does exactly this, it is a tool to create and configure lightweight, reproducible, and portable development environments. In this session, I will show you how to create a development work flow that will allow developers to use Vagrant to create a real continuous delivery pipeline. This means understanding the environment needs as well as what is needed to run the software. I will also show how we, at OpenTable, integrate Vagrant into our pipeline to allow us to create a good acceptance testing environment against known data sets rather than having brittle test.",
    "url": "http://oredev.org/2014/sessions/vagrant--the-essence-of-devops-in-a-tool",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 14:20:00",
    "end_time": "2014-11-06 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/5AA98874EAEB8C83C1257CAE007215BE",
        "name": "Paul Stack",
        "role": "OpenTable",
        "bio": "Paul Stack is a London infrastructure coder working for OpenTable. Paul has spoken at various events throughout the world, as well as extensively in the UK, about his passion for continuous integration and continuous delivery and why they should be part of what developers do on a day to day basis. He believes that reliably delivering software is just as important as its development. Paulâ€™s newest passion is the DevOps movement and how this helps not just development and operations but the entire business and itâ€™s customers."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D0AD604B3A29071EC1257CAC001DC6C9",
    "title": "Bridging the Gap of the Module Wars",
    "abstract": "RequireJS is for â€œclient sideâ€ developers and browserify is for â€œnode developers.â€ Bower is for â€œclient sideâ€ developers and npm is for â€œnode developers.â€ Or so the popular tweets and blog posts would make you think. Iâ€™d like to tear down these walls with you and show you how the two sides arenâ€™t that different after all. \nPractically, Iâ€™ll show you not only how to use bower dependencies in your browserify project, and npm dependencies in your RequireJS project, but Iâ€™ll be introducing you to new tools that gloss over even more of the differences. We can stand on the shoulders of both giants to build awesome software for the browser.",
    "url": "http://oredev.org/2014/sessions/bridging-the-gap-of-the-module-wars",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 14:20:00",
    "end_time": "2014-11-06 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/D1BED39210342F66C1257CAC001D34E1",
        "name": "John K. Paul",
        "role": "Penton Media",
        "bio": "John K. Paul is the VP of engineering at Penton Media and former lead technical architect of CondÃ© Nast's platform engineering team. He is a contributor to numerous open source projects including promethify, requireify, jquery-ajax-retry, and js-beautify. He is also the organizer of the NYC HTML5 meetup group."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/10D1284520AD24EDC1257D510050CFF5",
    "title": "Bridging the gap between developers and operations creating multi tier application blueprints for easy consumption",
    "abstract": "The session will be on how developers and application architects can begin the journey to DevOps by automating the end-to-end delivery and management of infrastructure and accelerate the application deployment and releases.\nThrough a library of VMware and partner blueprints middleware and integrated multi-tier applications can be rapidly deployed either in the public or private cloud.",
    "url": "http://oredev.org/2014/sessions/bridging-the-gap-between-developers-and-operations-creating-multi-tier-application-blueprints-for-easy-consumption",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/B3667535E0DD8188C1257D510050583B",
        "name": "Magnus Bergman",
        "role": "VMware",
        "bio": ""
      }
    ]
  },
  {
    "crowdsource_ref": "2014/27D01E0343792F6DC1257CDA004E87CA",
    "title": "Tester Love Developer",
    "abstract": "Want tighter collaboration and a better working rapport between testers and developers? Enough of the antagonistic images and comments of the tester and developer relationship, sure testers find code issues and point out the flaws of developerâ€™s work but testers are also â€œhelpmatesâ€ to developers. Karen identifies seven specific areas to build collaboration during the development and testing of a product. And, in addition to seven specific areas, Karen also explains how having an empathic approach can improve the tester/developer relationship.\nSeven specific areas testers can help developers\n1. Pair testing\n2. Data sets\n3. SQL Stored Procedure review\n4. Error Handling Boundary Testing\n5. What If Scenarios\n6. Test lab access\n7. Design Gaps",
    "url": "http://oredev.org/2014/sessions/tester-love-developer",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/786013B35E1DC967C1257CDA004E463F",
        "name": "Karen Johnson",
        "role": "Software Test Management Inc.",
        "bio": "Karen N. Johnson is a software test consultant. She is frequent speaker at conferences. Karen is a contributing author to the book, Beautiful Testing by Oâ€™Reilly publishers. She has published numerous articles and blogs about her experiences with software testing. She is the co-founder of the WREST workshop, more information on WREST can be found at: http://www.wrestworkshop.com/Home.html Visit her website at: http://www.karennjohnson.com"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/378CB88A1D3FD63FC1257CBA0052D627",
    "title": "Building Web Apps for the Cloud",
    "abstract": "Modern cloud platforms are very different to traditional hosting environments, and applications need to be designed differently to take advantage of those differences. In this talk, using Azure as a reference and my own experiences with Zudio as an example, I'll explain some of the things you can do when designing, building, deploying and supporting a global web application in the cloud.\nTopics include:\nPartitioning sites and services across servers;\nTesting applications in an as-live environment;\nRouting and load-balancing for performance and stability;\nContinuous deployment;\nAvailable hosting options - Platform or Infrastructure as a Service;\nCost-cutting tips.",
    "url": "http://oredev.org/2014/sessions/building-web-apps-for-the-cloud",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A53A9D7A30E9AFB1C1257CB90079C8E8",
        "name": "Mark Rendle",
        "role": "Zudio",
        "bio": "Mark is the Founder and CEO of Zudio, a startup providing tools for managing your data in public clouds. Zudio launched in April 2013, and provides an in-browser suite of tools for working with Windows Azure Storage. Before starting Zudio, Mark worked for a variety of companies from start-ups to large ISVs and consultancies, and has written applications from character-based UNIX tools to desktop GUI applications to modern web and mobile apps. He likes web app development best these days."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8EAC493A88414502C1257CEF0017198C",
    "title": "The Three Kinds of Code(rs)",
    "abstract": "There seems to be a spectrum of legitimacy when it comes to being a software developer. On the one end you have our discipline's version of a performance artistâ€”the prototyper, the design technologist. They're frequently accused of being more artist than programmer. They'll use beta software. They'll even use alpha software. They'll use a bloated library that gets them them what they need, and add enough RAM that it won't matter. On the other end of the spectrum you have the engineer, the one with the greatest legitimacy. They know optimization. They know security. They know uptime. They know all the right methodologies, and where the curly braces are supposed to go. They scoff at the prototypers, who don't even write unit tests. Between them is the design implementorâ€”someone who knows enough of production-readiness to get something productized, but enough of the prototyper's magic to be able to produce something that actually resembles the fairy tale the designers came up with. Software wouldn't be what it is today without all three of these programmers, yet they misunderstand one another, judge one another and, strangest of all, often don't know to which group they belong, or which tools are best used by which groups.",
    "url": "http://oredev.org/2014/sessions/the-three-kinds-of-code-rs-",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/B0DF73E7286893F8C1257CA50051D821",
        "name": "Thomas Q Brady",
        "role": "Reaction, Inc.",
        "bio": "Thomas Q Brady started, as so many did, with a Commodore computer as a child(Vic 20, though, not 64), teaching himself BASIC from the book that came with it. It became a life-long-hobby-turned-career, when his degrees in Psychology and Philosophy turned out to be the real hobbies. He's a hardware hacker, interaction designer and developer, currently working as Technology Director at Reaction, Inc., makers of the Exo short-term housing system."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C51A9148F17CAA8CC1257D1C005E9330",
    "title": "Stress and insomnia - the increasing Public Health Diseases",
    "abstract": "Today 25 percent suffer from sleeping problems. What are the symptoms and consequences. And how can you deal better with stress and insomnia.",
    "url": "http://oredev.org/2014/sessions/stress-and-insomnia--the-increasing-public-health-diseases",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3E4A217F366620CDC1257D1C005E27BF",
        "name": "Helena Kubicek Boye",
        "role": "Psykologic",
        "bio": "lic psychologist, CBT-therapeut, priced Newthinker 2010, nominated Psychology Awards 2010, author, projectleader in a research study on inosomnia treatment, content provider &quot;Sov BÃ¤ttre&quot; e-learning for internetbased insomnia"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/DD6F35BAB5445CE1C1257CAC0071ECF1",
    "title": "The Quantum Physics of Java",
    "abstract": "If we were able to take a microscope and observe how our programs work on the lowest level, we would be surprised and shocked. Close to the wire, programs behave very differently from what we expect.\nIn this session we will go through code examples that show the counter-intuitive behavior of Java on the microscopic scale. We will take a detailed look at how the underlying technology works that causes the surprising behavior and how we can measure our programs on the lowest level. Topics covered will be the cache hierarchy, false sharing, pipelining, branch prediction, and out-of-order execution. \nAfter this talk you will have a good understanding of how modern CPUs work and how this can affect the performance of your programs.",
    "url": "http://oredev.org/2014/sessions/the-quantum-physics-of-java",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/2028C590FA4F3CA0C1257CAC00717B3A",
        "name": "Michael Heinrichs",
        "role": "Canoo Engineering AG",
        "bio": "Michael is a user interface creator by passion. He is convinced: no matter which technology and which device, if it has a screen, one can build a truly amazing experience. And pure magic.\n\nHe works at Canoo as a software engineer on next generation user interfaces. Before that, he was responsible for performance optimizations in JavaFX Mobile at Sun Microsystems and later became the technical lead of the JavaFX core components at Oracle. He then worked on a low-latency trading platform written almost entirely in Java at Barclays Capital.\n\nMichael loves to spend time with his family and cooking. You can find him on Twitter @net0pyr and occasionally he blogs at http://blog.netopyr.com.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E670C823E34A8DDCC1257D4F0027C78E",
    "title": "ES6: Getting ready for JavaScript vNext",
    "abstract": "The latest version of JavaScript - ES6 - has arrived. There's a lot to be excited about - class syntax, generators, arrow functions, modules, promises, and enough syntactic sugar to keep you up past bedtime. The latest drops of Chrome and node.js make it easier than ever to start building ES6 applications both on the client and the server. This talk is going to go in depth on the most important features, and show you how to use many of them today in an ES5 kind of world.",
    "url": "http://oredev.org/2014/sessions/es6-getting-ready-for-javascript-vnext",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/422E19DD44223FBBC1257D460074FB03",
        "name": "Justin Beckwith",
        "role": "Microsoft",
        "bio": "Justin is a Program Manager, web developer, and geek dad workingÂ on tooling and the developer experience for Microsoft Azure.Â  He writes code, speaks at events, and stirs up trouble. Before joining Microsoft, he filled various developer and architect roles with startups, healthcare companies, and universities. He blogs at http://jbeckwith.com and twitters as @justinbeckwith.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/F17DE74169F88866C1257C99005D7FAD",
    "title": "Datomic for the 96 Percent",
    "abstract": "## Motivation\nTraditional SQL databases have great power, via ACID transactions and\nvia a declarative, logic-based query language (SQL). But SQL\ndatabases encounter problems on the web:\n* SQL databases have a rigid information model, and typically a rigid\n deployment model. This rigidity creates impedance mismatches both with\n development languages and with emerging cloud strategies.\n* SQL databases are update-in-place, and forget the history of your data.\n* SQL databases struggle with the extremely high write and/or data volumes \n that characterize the largest four percent of databases.\nMuch of the effort of the NoSQL movement has gone to solve the third\nproblem, the problem of the four percent, under the mantra &quot;web scale&quot;.\nDatomic solves the first two problems -- with a flexible information model\nand a deployment model suited to the dynamic web, and to the cloud.\nDatomic is for the ninety-six percent.\n## What We Will Cover\nDatomic's information model is based on a universal relation, and an\nentity abstraction over that relation. The universal relation\neliminates the join keys and join tables imposed by SQL's plethora of\n*specific* relations, making queries easier to write, read, and\nunderstand. Entities expose the universal relation as associative\ncollections, which correspond directly to the navigable, associative\nstyle of OO, eliminating the impedance mismatch and the need for\nlibraries such as ActiveRecord and Hibernate.\nDatomic stores information immutably, and remembers the past. This has \ntwo key benefits:\n* You can query as-of now, or as-of other points in time, or across\n a range of time.\n* The database is an immutable, distributed, cache-friendly value that\n can be queried *locally* from any peer process. Queries run &quot;over\n here&quot;, in your application process space, not &quot;over there&quot; in a\n special database process. As a result, query scales horizontally.\nDatomic's deployment model is designed for a virtualized world. All\ncomponents of the system are designed from the ground up to be\nephemeral. More importantly, Datomic treats storage as a separate\nservice. You can store your data on the local filesystem during\ndevelopment, and upgrade to using a SQL database for storage for\nproduction. When you are ready for the cloud, you can store your data\nin a distributed storage such as Amazon's DynamoDB, CouchBase, or\nRiak.\nDatomic's flexibility comes with the expressive power you know and\nlove in SQL databases. Where the four percent need &quot;web scale&quot;, and\nthe complex programming model imposed by eventual consistency, most\nprograms would be better off with the traditional values: ACID\ntransactions and powerful queries. Datomic gives you these in spades:\ntransactions always run at the highest isolation level (serialized),\nand the Datalog query language has greater expressive power than the\nrelational algebra at the foundation of SQL.\nIf you are among the ninety-six percent, and manage transactional data\nof record on the web, Datomic may be a good fit for you.\n## Resources\n* 2013 [NFJS slides](https://github.com/stuarthalloway/presentations/blob/master/NFJS_Nov_2013/datomic_for_the_96_percent/DatomicForThe96Percent.pdf?raw=true)",
    "url": "http://oredev.org/2014/sessions/datomic-for-the-96-percent",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 15:40:00",
    "end_time": "2014-11-06 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/97D958DDB1B16882C1257C98004B84E1",
        "name": "Ryan Neufeld",
        "role": "Independent",
        "bio": "Ryan is a polyglot software developer and budding architect. Whether it's a tough technical issue or one of the softer elements of software engineering, Ryan relishes the opportunity to deliver results for clients.\n\nRyan is also an author, having recently finished co-writing and editing the crowd-sourced Clojure Cookbook."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/21EAC2526124BAF9C1257D7A0042C313",
    "title": "Democratize data by igniting a crowd powered global movement.",
    "abstract": "How do we democratize data by igniting a crowd powered global movement with the aim of building a collaborative social fabric-enabling layer across diverse cultures and markets? \nTo do this during times of unprecedented social, economic, environmental, demographic, and political uncertainty will require us to take a bold approach and step outside of the way we normally do things. \nWhat we need is a radical change in attitudes in the society of which we are a part. What we really need is a cultural revolution. \nWe're suffering from a compassion and integrity deficit. And this matters a lot more to most of us than we dare to admit.\n",
    "url": "http://oredev.org/2014/sessions/democratize-data-by-igniting-a-crowd-powered-global-movement-",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/32814105768E8F1EC1257D79007819B8",
        "name": "Steve Jennings",
        "role": "NordicDEi",
        "bio": "Steve is an entrepreneur, with a varied and original background. From a former professional road racing cyclist, to an investment broker, to the founder of Maxim one of Europeâ€™s leading sports nutrition companies, to being a member of the founder team of the Canadian open-source non profit organisation Bicycles for Humanity, and a co founder of iEmpowerment an education and healthcare technology solution for remote rural areas in developing world regions.\n\nHe was one of the founding members of PepsiCoâ€™s global good-for-you nutrition innovation team, and also helped to develop PepsiCoâ€™s initial social media, and cause marketing strategy.\n\nHe was the co-founder and CEO of GoodCred a Swedish company focused on customer journey engagement, and complementary currency innovation.\n\nSteve is one of the founding partners of the Nordic Data Empowerment Initiative (NordicDEi), a collaborative-data enabling layer which brings together empowered people and enlightened organisations to deliver measurable social impact and sustainable citizen prosperity."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/238517FDC5B5124EC1257D120042E345",
    "title": "Teaching Our CSS To Play Nice",
    "abstract": "As our websites, applications and teams grow larger and more complicated, so does our CSS. Before we know it, we find ourselves no longer with cute little stylesheets, but sprawling, surly teenaged CSS that doesnâ€™t always play nice with others. We need to learn how to manage and optimize our CSS no matter how large the project or diverse the team. If we start early, we can use best practices for organization, formatting and syntax, along with tools like pre-compilers, frameworks and style guides to raise full-grown stylesheets any designer or developer would be happy to work with.",
    "url": "http://oredev.org/2014/sessions/teaching-our-css-to-play-nice",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/46DF8DBF55595C64C1257CA50056E27B",
        "name": "Jen Myers",
        "role": "Independent web designer/developer",
        "bio": "Jen Myers is a web designer/developer, teacher and speaker in Chicago. In 2011, she founded the Columbus, Ohio chapter of Girl Develop It, an organization that provides introductory coding classes aimed at women, and currently works with Girl Develop It Chicago as a teacher and an advisor. She speaks regularly about design, development and diversity, and focuses on finding new ways to make both technology and technology education accessible to everyone."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/4A344FD9AD3C4B6EC1257CCA003BEAD1",
    "title": "Do more of what you love, less of what you don't love with Cloud Foundry",
    "abstract": "Developers are getting excited about Cloud Foundry, the multi-vendor Platform as a Service (PaaS). Cloud Foundry eliminates a lot of the more boring aspects of our job - no more installing middleware, sorting out databases, and banging heads against complex deployments. This leaves us with more time for the fun stuff - writing code and getting stuff out to users fast. \nWith Cloud Foundry, an application can easily be deployed to a variety of managed clouds and scaled up and down as required. This talk will demonstrate how to get started with Cloud Foundry by live-coding an application (with a front-end, a back-end, and even a middle-bit) and then live-deploying it to the web.",
    "url": "http://oredev.org/2014/sessions/do-more-of-what-you-love-less-of-what-you-dont-love-with-cloud-foundry",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A7FD0BB503354A4EC1257CCA003B72AF",
        "name": "Holly Cummins",
        "role": "IBM",
        "bio": "Holly Cummins is a senior software engineer developing enterprise middleware with the IBM WebSphere, and a committer on the Apache Aries project. She is a co-author of Enterprise OSGi in Action and has spoken at Devoxx, JavaZone, The ServerSide Java Symposium, JAX London, GeeCon, and the Great Indian Developer Summit, as well as a number of user groups."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/763096A6061D580AC1257CAC00667824",
    "title": "Distractedly Intimate - Your Users on Mobile",
    "abstract": "This talk will explore three themes: We Are In Love, We Have Changed, We Are Not Really Here.\nWe Are In Love\nHumans often hate their computers, but they love their phones. It is truly our most intimate device. We take it everywhere we go, including to bed. We share all the moments of our lives with it, sometimes on camera. It connects us constantly to the people we love the most. The keyboard separates us from the computer, but touch brings us closer to our mobile device(s). From how we spend our time (many of the most popular applications are games) to the natural extension of a custom ringtone to a dedicated space on the device for our partner, love is a design consideration.\nWe Have Changed\nFrom personal tracking devices to selling sheep via instagram, these devices have changed the way we live. Whilst we are more in control of, and have more information than ever before, increasingly people feel overwhelmed, suffer from decision fatigue, and seek out solutions like the â€œdisconnected vacationâ€. A decade ago, such a thing was just â€œvacationâ€. \nWe Are Not Really Here\nWhilst we carry out devices with us constantly, our attention is split between them and the world around us. They are the accompaniment to our commute, whilst we wait in line, whilst we watch TV. Our attention is intermittent, and incomplete. Multitasking has a cognitive overhead comparable to being intoxicated (see the effects of texting whilst driving). Ideas like â€œphone stackingâ€ aim to address this lack of presence in our human interactions, but when we design we must design for the distracted user. What does this mean?",
    "url": "http://oredev.org/2014/sessions/distractedly-intimate--your-users-on-mobile",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/FA8AA8AFC962167CC1257CAC00662B13",
        "name": "Cate Huston",
        "role": "",
        "bio": "Cate escaped from graduate school to be a Software Engineer at Google, where she's focused on a variety of mobile experiences over the last 3 years including GMail, Google Docs, Maps and now Ads. She used to be an international hobo, teaching programming in the US and in Shanghai, training in martial arts in China, qualifying as a ski instructor in Canada, and aimlessly wandering around Europe. After nearly 7 years as an expat, she's now readjusting to life in London."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/7C681318391DC25EC1257CA1007D2987",
    "title": "Security for developers",
    "abstract": "Security and integrity are on many developers mind today. Developers know that security is important, although sometimes it's still a challenge to convince decision makers. Security is often built on multiple levels such as network/infrastructure, OS/middleware (e.g. SSL/TLS) and application logic (e.g. authentication/authorization).\nWhat makes SSL secure, and when is it not? How do we handle sensitive data in our apps/systems? Is encrypted data always protected (and protected against what)? Can we trust the code just because we wrote and/or compiled it ourselves? How do we protect our application logic?\nThese and similar questions are discussed (with demos) in this session. Whether you work on mobile/desktop apps or web/backend systems - if you want to learn more about security - this is the session for you.",
    "url": "http://oredev.org/2014/sessions/security-for-developers",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/144E3EE25700FAAFC1257CA1007C2FF9",
        "name": "Emil Kvarnhammar",
        "role": "TrueSec",
        "bio": "Emil is a Security Software Engineer at TrueSec, a leading-edge company in IT security and development. He's been involved in several security-critical projects, developing applications and components that are used by millions of users on a regular basis. His areas of interest include secure design patterns, secure communications, security in mobile platforms, cryptography and smart cards."
      },
      {
        "crowdsource_ref": "2014/63BF6EC59A3AEEA1C1257CEC006AFCF0",
        "name": "Sebastian Olsson",
        "role": "TrueSec",
        "bio": "Sebastian is a Security Software Engineer at TrueSec, a leading-edge company in IT security and development. He spends most of his time at work developing and auditing security critical code. Sebastian loves working on projects where security is a core requirement and especially if that includes working on cryptography and secure communications. He believes that security is an important aspect that must be considered throughout the whole development process and that developers must start paying more attention to security in their design choices."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C0DFE061799111E4C1257D6E004022B1",
    "title": "Scaled Agile @ Spotify",
    "abstract": "",
    "url": "http://oredev.org/2014/sessions/scaled-agile--spotify",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/E584D70D2B9C087BC1257D6D0050986F",
        "name": "Joakim SundÃ©n",
        "role": "Spotify",
        "bio": "Joakim is an Agile Coach at Spotify, making music available and accessible to the world. He helps people improve through mentoring and coaching at individual, team and organizational levels, often using Agile and Lean thinking and methods such as Kanban, Scrum and XP. He is an organizer of, and active participant in, conferences, networks and user groups in the Agile and Lean communities. Joakim is also the author of â€œKanban in Actionâ€ (Manning, 2014)."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D75919BF246730E6C1257D8200315ACA",
    "title": "Microservices with Dart, Polymer and Hypermedia",
    "abstract": "This talk is a feedback about developing OpenSnap, a SnapChat clone based on Dart end to end (client, server, tooling). I will explain how this application is structured, what code can be shared, and how Dart makes it easier to develop modular applications.\nWe will also see a concrete example of a Microservices architecture based on JSON, HAL (Hypermedia) and STOMP. On the client side, we will talk about Web Components, Polymer, Material Design and Paper Elements.",
    "url": "http://oredev.org/2014/sessions/microservices-with-dart-polymer-and-hypermedia",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/012FB601BFFD719DC1257D8200312F40",
        "name": "SÃ©bastien Deleuze",
        "role": "Pivotal",
        "bio": "SÃ©bastien is a Spring Framework commiter at Pivotal and also a Dart Google Developer Expert."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/F0F3C902A6E7113DC1257CAE006D93B4",
    "title": "Building the Halo 4 Services with Orleans",
    "abstract": "Halo 4 is a first-person shooter on the Xbox 360, with fast-paced, competitive gameplay. To complement the code on disc a set of services were developed and deployed in Azure to store player statistics, display player presence information, deliver daily challenges, modify playlists, catch cheaters and more. These services needed to support high demand, with low latency, and high availability. In this session will discuss some of the challenges faced while building this services, and how Orleans, Distributed Virtual Actors for Programmability and Scalability, was utilized to solve these problems. \nOrleans paper link: http://research.microsoft.com/pubs/210931/Orleans-MSR-TR-2014-41.pdf",
    "url": "http://oredev.org/2014/sessions/building-the-halo-4-services-with-orleans",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 16:40:00",
    "end_time": "2014-11-06 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/E172537D70CE4A9AC1257CAD00554740",
        "name": "Caitie McCaffrey",
        "role": "HBO",
        "bio": "Caitie McCaffrey is a Backend Brat, Distributed Systems Diva, and Tech Lover. She is currently a Software Engineer at HBO, and prior to that worked at 343 Industries. Her focus is on Web Services, Distributed Systems, and Big Data. She is passionate about creating fun, social, and collaborative entertainment experiences. \n\nCaitie has a degree in Computer Science from Cornell University, and has worked on several video games including Gears of War 2, Gears of War 3, and most recently Halo 4. She currently is working at HBO on the HBO Go services. She maintains a blog at CaitieM.com and frequently discusses technology and entertainment on Twitter @CaitieM20"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/3CF257522E1EDE03C1257D6E00669696",
    "title": "ClojureScript interfaces to React",
    "abstract": "React is a JavaScript library for creating declarative UIs. It was\ncreated by Facebook to simplify writing applications consisting of\nmany components. React allows you to describe how the UI should look and renders\nit automatically via one way data binding. It achieves good\nperformance by using a virtual DOM that prevents unnecessary and\nexpensive DOM manipulations. Even better performance can be achieved\nby leveraging the immutable data structures of ClojureScript. This is\nan approach taken by Om and Reagent. In this talk you will get an\nimpression of using ClojureScript together with React in practice.\n",
    "url": "http://oredev.org/2014/sessions/clojurescript-interfaces-to-react",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/13FEE6081E07947BC1257D6B005295BA",
        "name": "Michiel Borkent",
        "role": "Finalist",
        "bio": "Michiel Borkent is a software developer with an interest in functional\nprogramming, especially Clojure. He has a masterâ€™s degree in\nInformatics from the University of Twente. Michiel currently works at Finalist as a Clojure and Java developer. In his former job as a lecturer he enjoyed developing and teaching programming courses (C#, Clojure and others). Michiel's hobbies include vegan cooking, drinking coffee and listening to progressive rock and metal."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/418CE9D38197EA0DC1257D650034F8FA",
    "title": "A cold hard look at the world of Mobile Apps and where they may go",
    "abstract": "There's an app for that! The craze about apps and their usefulness as a form factor for mobile phones has been going on for a few years now and there are many beautiful success stories in the press about them. In this talk Chris Heilmann is going to give an overview of how the app market is doing, where you should invest and what may just be marketing instead of true facts. If you are into apps and you wonder where to go with yours, check this talk. Chris Heilmann from Mozilla is going to show trends, debunk myths and show you where the next big change is happening. Hint: it is not on our fancy high-end devices.\n",
    "url": "http://oredev.org/2014/sessions/a-cold-hard-look-at-the-world-of-mobile-apps-and-where-they-may-go",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/68DF7EB53417D82FC1257D650034573B",
        "name": "Christian Heilmann",
        "role": "Mozilla",
        "bio": "Chris Heilmann has dedicated a lot of his time making the web better. Originally coming from a radio journalism background, he built his first web site from scratch around 1997 and spent the following years working on lots of large, international web sites. He then spent a few years in Yahoo building products and explaining and training people and is now at Mozilla. Chris wrote and contributed to six books on web development and wrote many articles and hundreds of blog posts for Ajaxian, Smashing Magazine, Yahoo, Mozilla, ScriptJunkie and many more."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/BABC3D7C745B3382C1257D030045B424",
    "title": "Imagining the touchless generation move beyond glass",
    "abstract": "Preferable a live demo as well with touchless interaction in mobile devices. Camera remote control and perhaps drag and drop in the air (touchless clip board). Discussing interaction possibilities using touchless interaction in the mobile / wearable arena. Preferably to hold this session late in the last day of Ã–resdev since arriving directly from The Summit in dublin.",
    "url": "http://oredev.org/2014/sessions/imagining-the-touchless-generation-move-beyond-glass",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/ED1D1B1A75530940C1257D0300455EDD",
        "name": "Paul Cronholm",
        "role": "Crunchfish",
        "bio": "Crunchfish enables touchless interaction on mobile devices without any hardware changes utilising the web camera data. We build a software platform that brings touchless user experience across various mobile operating systems."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/BB39E8B41E43BEE3C1257CC600055895",
    "title": "FsLab: Doing data science with F#",
    "abstract": "How to get knowledge from data? We need to access CSV files and REST services, combine the data while handling missing values, try different analyses and machine learning algorithms and then build visualizations to make our point. We need to explore data interactively, but end up with reproducible scripts that can be easily deployed in production. \nÂ \nIâ€™ll demonstrate end-to-end data analysis using FsLab â€“ a cross-platform set of data science libraries and tools based on F# that make it easy to perform the entire process with a single tool. Type providers turn external data sources into inherent part of your language; integration with tools like R gives you immediate access to professional packages and HTML5-based visualization tools produce beautiful results.\nÂ \nAlong the way, weâ€™ll explore correlations between countries using the WorldBank, weâ€™ll look at survival rate of different passengers on Titanic and weâ€™ll look how different political parties contribute to countryâ€™s debt.\n",
    "url": "http://oredev.org/2014/sessions/fslab-doing-data-science-with-f-",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/31F3255A32D7D1B4C1257CBB0067F374",
        "name": "Tomas Petricek",
        "role": "F# Works",
        "bio": "Tomas is a long-term F# enthusiast, author of &quot;Real World Functional Programming&quot;, frequent conference speaker and Microsoft MVP. He contributed to the development of F# as a contractor at Microsoft Research and helped to create explorative data manipulation library Deedle while at BlueMountain Capital in New York. He is finishing PhD in Cambridge, working on types for functional programming languages."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D18FF0B8DD608751C1257CBC003EAD55",
    "title": "Analyzing and searching data using Elasticsearch",
    "abstract": "In this talk I would like to show you a few real-life use-cases where Elasticsearch can enhance the user experience of your applications. We will start with the most basic use case with a seemingly simple problem of searching for documents and move on to more advanced topics such as faceted navigation and structured search.\nI would like to demonstrate that the very same tool and dataset can be used for real-time analytics (topic distribution, publishing frequency, most popular or commented on content) and data mining in a distributed environment capable of handling terabyte-sized datasets.\nFinally we will demonstrate how Elasticsearch can provide the infrastructure for features beyond search, such as automatic content categorization, user-defined categories or even real-time alerts.\nAttendees should walk away with a good understanding of what Elasticsearch can bring them and where it is a good fit.",
    "url": "http://oredev.org/2014/sessions/analyzing-and-searching-data-using-elasticsearch",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/94E39491B90A294BC1257CBC003E49F6",
        "name": "Honza Kral",
        "role": "Elasticsearch",
        "bio": "Honza is a Python programmer and Django core developer â€“ since he is scared of the bright and shiny world of browsers, designers, and users he prefers to stay buried deep in the infrastructure code and just provides others with tools to do the actual site-building.\n\nSince 2008 Honza has been building content web sites for fun and profit. During this time he discovered Elasticsearch which lead to him joining the company behind it in 2013 to work on the Python drivers."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/DAD858552CDCC16BC1257D0100649774",
    "title": "How To Market Yourself To Boost Your Career",
    "abstract": "Let's face it.\nIf you want to have a successful career in software development today, being a good coder doesn't just cut it anymore.\nSure, writing good code will help you keep your job, but there are plenty of good and great coders out there that you've never heard of, either looking for jobs, or unsatisfied with their current jobs.\nIf you really want to stand out and get noticed, you've got to learn how to promote yourself.\nGreat software developers can make as much as 4 to 5 times the salary of a good programmer. But, what makes a software developer great?\nThe problem is most companies don't know, so they go based on name and recognition.\nIf you have a solid brand and know how to market yourself correctly, employers, co-workers, and potential clients will view you as GREAT, not just good.\nBillions of dollars are spent on marketing each year. Celebrities of all sorts enjoy fame and fortune that isn't necessarily related to theirs skills. Why?\nBecause marketing works, and like it or not, if you want move beyond a basic career and really open up opportunities for yourself, you've got to learn how to market yourself as a software developer.\nIn this session, I'll teach you some quick and easy things you can do to enhance the marketability of your skills and personal brand immediately and talk about some long term plans you can put into action so that everyone will know your name.\nAnd this session isn't just for software developers. Any IT professional can benefit from learning these important skills for this rapidly changing game.\n",
    "url": "http://oredev.org/2014/sessions/how-to-market-yourself-to-boost-your-career",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4ACB66564E75A242C1257D0100646F50",
        "name": "John Sonmez",
        "role": "Simple Programmer LLC",
        "bio": "John Sonmez is the founder of Simple Programmer (http://simpleprogrammer.com), where he tirelessly pursues his vision of transforming complex issues into simple solutions. John has published over 50 courses on topics such as iOS, Android, .NET, Java, and game development for the online developer training resource, Pluralsight. He also hosts the GetUp and CODE podcast, where he talks about fitness for programmers (http://getupandcode.com). John is a life coach for software developers, and helps software engineers, programmers and other technical professionals boost their careers and live a more fulfilled life. He empowers them to accomplish their goals by making the complex simple."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E20E2C667AE1D259C1257D70003A54D4",
    "title": "Framework and smoke machines - true story",
    "abstract": "In this session I will share the story of our framework; how it started, the wins, the fails, our daily workflow and how we plan to take it to the next level by making it a crucial part of our Design, UX and Development processes.\nLast but not least I will try to explain why a framework and smoke machines are a great match! Why they are a must have in every workplace and why/how they need to become bigger and more powerful.",
    "url": "http://oredev.org/2014/sessions/framework-and-smoke-machines--true-story",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/86D43161B76CEA34C1257D6A002E5213",
        "name": "Mads Hensel",
        "role": "Falcon Social",
        "bio": "Mads Hensel is the Head of Design at Copenhagen-based Falcon Social. He leads a small team of graphic and product designers to develop the UI/UX of Falcon's enterprise software. Before joining the technology world Mads worked as an art director at several Danish advertising agencies. He enjoys working at the messy intersection of hardcore dev, fuzzy design, and stubborn UX â€” but it's all a playground to him."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/F28B681B5555D19CC1257CF50041965C",
    "title": "Teaching Kids Programming using the Intentional Method",
    "abstract": "TKP has created and uses a new method of teaching children programming. We call this the intentional method. TKP output consists of customized courseware and teaching techniques. All of TKP material is freely available to use and improve.\nThe Intentional Method simply stated is teaching by guiding pairs of children from English comments (the intention) to code those comments correctly into some other programming language. The core programming language that we use is Java. We have also developed Intentional teaching materials for Microsoft SmallBasic, T-SQL and for Microsoft Kodu (visual programming). Come to this session to learn more TKP teaching methods and to get a sample of the courseware.\n",
    "url": "http://oredev.org/2014/sessions/teaching-kids-programming-using-the-intentional-method",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-06 17:40:00",
    "end_time": "2014-11-06 18:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A1CF3649C7D76BE1C1257CA500803F6A",
        "name": "Lynn Langit",
        "role": "Lynn Langit Consulting",
        "bio": "Lynn Langit is a Big Data and Cloud architect. She's built solutions for customers in education, manufacturing and bio-tech and other verticals. Lynn's published three books on SQL Server Business Intelligence. Read her blog at www.LynnLangit.com. She also creates technical screencasts on YouTube at https://www.youtube.com/user/SoCalDevGal. She is also the co-founder of the non-profit 'Teaching Kids Programming' which is part of the MONA Foundation."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/829D02B0B6763339C1257D4D0027AC2D",
    "title": "Getting comfortable being uncomfortable",
    "abstract": "How do we stay focused day to day, working towards a big future goal? How do we come to meet the challenges? How do we handle the unknown, the uncomfortable, the crisis?\nKeavy McMinn shares some of her experiences dealing with these issues in her life.",
    "url": "http://oredev.org/2014/sessions/getting-comfortable-being-uncomfortable",
    "space_name": "Keynote",
    "venue": "vfzb",
    "start_time": "2014-11-06 09:00:00",
    "end_time": "2014-11-06 10:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/FBABF4A8C6D35B60C1257D1D002229C9",
        "name": "Keavy McMinn",
        "role": "",
        "bio": "Keavy works developing software at Github.\n\nAs an independent consultant, over the previous decade, she has enjoyed pairing up with some of the top development shops across Europe and the U.S.\n\nLike many of her fellow Irishmen, Keavy enjoys telling a good story. Unlike many, she trains for Ironman triathlons and is not a fan of whiskey. Cosmo, anyone?"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C8C5717FCB892745C1257D41001BF58D",
    "title": "About Passion and Collaboration",
    "abstract": "Sharing knowledge, cross-pollinating for mutual enrichment is what Ã˜redev is all about. We learn so much from each other. To celebrate a decade of Sharing Knowledge, we invited a person from who we thought you would learn from, a person who's life has been about Passion and Collaboration. Tony Ernst will be the one interviewing Nile Rodgers during the evening. Do not miss it!",
    "url": "http://oredev.org/2014/sessions/about-passion-and-collaboration",
    "space_name": "Keynote",
    "venue": "vfzb",
    "start_time": "2014-11-06 20:00:00",
    "end_time": "2014-11-06 22:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/BD924BB500DEC1CAC1257D39005420AB",
        "name": "Nile Rodgers",
        "role": "",
        "bio": "Nile Rodgers is one of the most influential producers in the history of popular music. He co-founded the band CHIC, scored numerous smashes including Atlantic Recordsâ€™ only triple platinum selling single â€œLe Freak.â€ Heâ€™s produced, written and/or played on the albums We Are Family, Like A Virgin, Letâ€™s Dance, Diana, Notorious, Cosmic Thing, and in 2014 was awarded three Grammy awards for his work on Daft Punk's &quot;Random Access Memories,&quot; and song of the year, &quot;Get Lucky.&quot;"
      },
      {
        "crowdsource_ref": "2014/83CAB2559248B2AFC1257D62003B9D56",
        "name": "Tony Ernst",
        "role": "",
        "bio": "Born 1966 in MalmÃ¶. Music journalist, writer and editor. Started the first Swedish music magazine (in the 90's) solely about african-american music, called Â»Gidappa!Â« (yes, try shouting it like James Brown!) Has written about music for 20 years and met every one of his idols, bar Scarface and Aretha Franklin."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/34F695CF44F4B603C1257D010064C2F7",
    "title": "How To Create An Test Automation Framework Architecture With Selenium",
    "abstract": "Learning how to use a tool like Selenium to create automated tests is not enough to be successful with an automation effort. You also need to know how to build an automation framework that can support creating tests that are not so fragile that they constantly break. This is the real key to success in any automation effort. In this session, I will reveal every secret I know from creating several successful automation frameworks and consulting on the creation of others. I will show you exactly, step-by-step how to create your own automation framework and I will explain to you the reasoning behind everything we are doing, so you can apply what you learn to your own framework. Weâ€™ll start off this session by going over the basics of automation and talking about why it is so important as well as discuss some of the common reasons for success and failure. Then, Iâ€™ll take you into the architecture of an automation framework and show you why you need to pay careful attention to the structure of any framework you build and give you some of the underlying design principles I use when creating an automation framework.",
    "url": "http://oredev.org/2014/sessions/how-to-create-an-test-automation-framework-architecture-with-selenium",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4ACB66564E75A242C1257D0100646F50",
        "name": "John Sonmez",
        "role": "Simple Programmer LLC",
        "bio": "John Sonmez is the founder of Simple Programmer (http://simpleprogrammer.com), where he tirelessly pursues his vision of transforming complex issues into simple solutions. John has published over 50 courses on topics such as iOS, Android, .NET, Java, and game development for the online developer training resource, Pluralsight. He also hosts the GetUp and CODE podcast, where he talks about fitness for programmers (http://getupandcode.com). John is a life coach for software developers, and helps software engineers, programmers and other technical professionals boost their careers and live a more fulfilled life. He empowers them to accomplish their goals by making the complex simple."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/474DE06F4DC0B424C1257CEC004F7D3E",
    "title": "Advanced animation in Android",
    "abstract": "Materials' is a beautiful new design framework in which we can re-think some fundamental design choices we've made in our applications, across multiple platforms. \nBut what part of Material design is right for you? Where do you start? Your company just made a huge investment in redesigning your product for iOS7, and now you want to change it again? Who is really in control of your product here? \nCome to this talk, and we will cover real ways to implements tasteful and meaningful material design paradigms, without sacrificing all of the hard work you've put in until now, and without compromising on your company's design integrity.",
    "url": "http://oredev.org/2014/sessions/advanced-animation-in-android",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3CCE639538D1B5DDC1257CEC004EF950",
        "name": "Kevin Grant",
        "role": "Tumblr",
        "bio": "KEVIN GRANT is an Android Engineer at tumblr, a creative blogging platform in New York City, where he focuses on application design, implementing the latest design and user interaction paradigms and pushing the boundaries of the Android framework. \n\nHe began developing for Android in 2009, performing research at the University of Nevada, Reno. After graduating he moved to MalmÃ¶, Sweden where he took part in the Scandinavian startup scene."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/4D18310E5469F7CDC1257C9700526055",
    "title": "Introduction to Docker: Containerization is the new Virtualization",
    "abstract": "Docker is an open source container virtualization framework that was released in March 2013. It makes it easy to create lightweight, portable, and self-sufficient containers. Containers which you can use to test applications, build and run services or even to build your own platform-as-a-service. Learn why Docker matters, how to get started with it and see some cool examples of Docker in action. This talk will explain: \n* Why Docker? \n* Installing Docker \n* Getting started with Docker \n* Demo some cool Docker use cases\nIt'll also discuss the right places to use Docker and try to answer some of the questions around using Docker with other tools like Puppet and Chef. By the end of the talk you'll see both how Docker is useful and how to make use of it.",
    "url": "http://oredev.org/2014/sessions/introduction-to-docker-containerization-is-the-new-virtualization",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3B437CAD468BD24CC1257C97005216DE",
        "name": "James Turnbull",
        "role": "Docker",
        "bio": "James Turnbull is the author of six technical books about open source software, including a book on Docker. James works for Docker as VP of Services and Support. He was previously at Puppet Labs running Operations and Professional Services. James speaks regularly at conferences including OSCON, Velocity, Linux.conf.au, FOSDEM and a number of others. He is a past president of Linux Australia, a former committee member of Linux Victoria, was Treasurer for LCA 2008, and serves on the program committee of LCA and OSCON."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8893675EAB49B1C7C1257D7E004646BA",
    "title": "Make applications responsive and easier to scale with light weight messaging",
    "abstract": "Application developers of today frequently try new apps and concepts that exist outside of their companiesâ€™ core business systems. They pick technologies best-suited for their unique circumstances and favor quick access to tools. When it comes to application delivery, you canâ€™t ignore the importance of messaging runtime. Attend this webcast to find out how IBM MQ Light and IBM MQ Light for Bluemixâ€” the new lightweight messaging solution that can make applications more responsive and easier to scaleâ€” provide a simple messaging API that developers can install, configure, and use to write applications in just a few minutes. Learn more from the creators of this tool on how it will help all developers accelerate application delivery and contribute to the evolution of MQ messaging.",
    "url": "http://oredev.org/2014/sessions/make-applications-responsive-and-easier-to-scale-with-light-weight-messaging",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3A7F8BE2D316A49AC1257D78003FFD52",
        "name": "Paul Smith",
        "role": "IBM",
        "bio": "Paul is an IT Architect working with IBM Clients in Europe on WebSphere. Paul's expertise is in the development of applications and proofs of concept for customer engagements encompassing multiple parts of the WebSphere brand with the Smarter Process suite, IBM Integration Bus, IBM messaging technologies and emerging platforms such as Bluemix. Paul is based at IBM Hursley and previously worked in the development organization within the strategy team for IBM's integration products."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8D126AD6022B8B3FC1257CAC0075E6C7",
    "title": "You really should organise that codebase. No, really!",
    "abstract": "Just like a company, a codebase comprises many elemental components with countless interdependencies. At the elemental level, this is far too complex for human comprehension, and developers are after all human. If they cannot comprehend a codebase, they cannot develop it efficiently. To understand and evolve all the detail, it is necessary to organize the functions, files, classes, etc. into well-structured, higher-level containers, which can be understood without understanding all the detail, and whoâ€™s relationships with other containers is clearly defined. This is the basic principle of abstraction, divide-and-conquer, modularity.\nComprehension is just the beginning of what is at stake here. A well-structured containment model serves as a blue-print or roadmap for developers; allows for phased testing and release of subsystems; enables the division of labor across organizations, teams, and individual developers; shelters components from changes to the internals of other components; allows subsystems or layers to completely replaced; helps new developers become productive quickly; etc. etc. etc. In short we are talking about a spectrum from chaotic, ad-hoc development, through to true agile software engineering. \nThe talk will show why poor structure has such a negative effect on the various aspects of production listed above, and quantify the complexity behind this effect.\nJust as a company with 6 employees requires a drastically simpler org chart and inter-departmental controls than a company of 600 employees, structure is less critical in the early stages of a software development. At a certain size however, the explosive increase in complexity caused by the exponential growth of dependencies makes it essential to continued development velocity. Almost invariably this point is overshot and projects find themselves in very deep complexity debt before the need is realized. \nThe talk then shows how to organize the files in the codebase into a cogent containment model (or architecture) with minimal impact on the working code. There are 3 angles of attack. First, if there are any large groups of cyclically dependent classes, these should be disentangled, and the process for doing this is explained. Second, existing physical arrangements of source files into e.g. packages, folders, namespaces, etc. can serve as a start point. Thirdly, it is possible to discover cohesive groups of classes and organize them recursively into a containment hierarchy. \nThe architectural discovery cannot be achieved without the help of â€œcode-firstâ€ modeling tools such as Structure101, Lattix, and SonarGraph. Short examples using Structure101 will be shown so as to make the principles more concrete. All the main tool options in this space will be briefly mentioned. \nThe clearly articulated connection between quantifiable complexity and the efficiency of development activities, and specific practical steps to reduce complexity and drive up development agility, is new, and offers potentially huge savings to our industry. \n",
    "url": "http://oredev.org/2014/sessions/you-really-should-organise-that-codebase-no-really",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/195CE726D8B43A09C1257CAC006CEFCD",
        "name": "Chris Chedgey",
        "role": "Structure101",
        "bio": "Chris cut his development teeth on monster military and aerospace projects in Europe and Canada (including 5 years on the International Space Station program). Smart developers cutting clean code is a given ingredient for success. But he noticed another factor that made all the difference. Without an organised codebase, teams drowned in a sea of complexity. For over 10 years since he has developed and promoted techniques and technology to transform tangled codebases into beautiful architectures."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B62F9867B80DFC43C1257D3B001B6CFB",
    "title": "Integrating Skilled Testing with Agile Development",
    "abstract": "Skilled software testing has not fit well into the culture of Agile development. Agile was not created by testers, or with testers, or with deep testing in mind. As a result, people who study and practice the testing discipline have done so largely outside of Agile culture. To help fix this, Michael Bolton and I have created a new version of the &quot;Agile Testing Quadrants&quot; that helps us explain a better way for testing and development to coexist.",
    "url": "http://oredev.org/2014/sessions/integrating-skilled-testing-with-agile-development",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/344D091975EE37E5C1257D39006D172F",
        "name": "James Bach",
        "role": "Satisfice, Inc.",
        "bio": "I started in this business as a programmer. I like programming. But I find the problems of software quality analysis and improvement more interesting than those of software production. For me, there's something very compelling about the question &quot;How do I know my work is good?&quot; Indeed, how do I know anything is good? What does good mean? That's why I got into SQA, in 1987.\nToday, I work with project teams and individual engineers to help them plan SQA, change control, and testing processes that allow them to understand and control the risks of product failure. I also assist in product risk analysis, test design, and in the design and implementation of computer-supported testing. Most of my experience is with market-driven Silicon Valley software companies like Apple Computer and Borland, so the techniques I've gathered and developed are designed for use under conditions of compressed schedules, high rates of change, component-based technology and poor specification."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C92FA39C19472CAEC1257D7E004B1AD4",
    "title": "The story of Simris: How we wanted to fuel the world and ended up saving the oceans",
    "abstract": "Global warming. Oceans suffocating from eutrophication. The urgent need for renewable energy. Our generation is facing some of the hardest and most complex challenges in the history of mankind. Modern technology is one part of the solution. The other one is billions of years old: algae.\nAlgae belong to the earthâ€™s most ancient organisms. They are natureâ€™s way of harnessing solar energy. Algae can grow on CO2 emissions and wastewater, and produce crude oil for drop-in fuels. Today, algae farming has developed into a frontier engineering science at the intersection of biotech and agribusiness, and the budding algae industry resembles what it was like in IT in the early nineties. Algae have become the green darlings of thought leaders such as president Obama, Arnold Schwarzenegger and Richard Branson, but also global corporations such as Exxon and Unilever. \nComing from biotech, this was the most exciting field I had heard about since the discovery of DNA. In a post-runnerâ€™s high bliss after a long run, I scrabbled a simple goal on a piece of paper: â€Build Swedenâ€™s first algae plant for oil productionâ€. This was in 2009. In October last year, Simris proudly presented the first commercial batch of algae oil made in Sweden. \nIn this session, I will share what itâ€™s like to build a new industry from scratch (hint: play the startup game in hard mode), how market-pull really drives innovation, why environmental capitalism is a great thing, and why you shouldnâ€™t invest in algae for fuels.\nBe prepared to fall in love with algae.",
    "url": "http://oredev.org/2014/sessions/the-story-of-simris-how-we-wanted-to-fuel-the-world-and-ended-up-saving-the-oceans",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/DBD9A8EB85CF34CCC1257D32004311FB",
        "name": "Fredrika Gullfot",
        "role": "Simris Alg",
        "bio": "Fredrika Gullfot is passionate about bio-based solutions as key technologies for a sustainable future. She is the CEO and founder of Simris Alg, a pioneering agribusiness growing algae in Southern Sweden. \n\nFredrika holds a PhD in Biotechnology from the Royal Institute of Technology, and is the first female awarded with the Swedish Chemical Engineering Prize. Her professional history spans over a variety of industries, including investment banking, national security, entertainment and telecom.\n\nFredrika is actively involved in the global development of industrial algae technology and blue biotech. She is a member of the Management Team of AlgaePARC, Europe's largest pilot facility for large-scale cultivation of algae. She is also member of the International Advisory Group to the ERA-NET Marine Biotechnology, a consortium of 19 national RD funding bodies in the EU."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D8D9313B7BD84915C1257D5E00475B56",
    "title": "Behind the smiling face of a sales droid",
    "abstract": "Online retail is increasing every year. The salesperson is replaced by a sales droid - a set of adaptive algorithms with the purpose to predict interest and inspire the visitor to buy more. In this talk we show you the reality behind some of the biggest online retailers in the Nordics, and reveal the algorithms behind the polished storefronts. We also debunk a few beliefs that hold back the academic research community.",
    "url": "http://oredev.org/2014/sessions/behind-the-smiling-face-of-a-sales-droid",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-07 10:20:00",
    "end_time": "2014-11-07 11:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/760895B57A655D57C1257D5E0041BE82",
        "name": "Thomas Raneland",
        "role": "Apptus Technologies",
        "bio": "Thomas is the CTO at Apptus, the company that helps online retailers such as CDON.COM, Bygghemma, Adlibris, Kjell Co, and Nelly to increase relevance on their site by learning from user behavior. A devoted programmer since 1993 with a M.Sc in Computer Science Engineering from LTH, Thomas joined Apptus in 2004. Ten years later, with experience from more than 50 customer projects, Thomas has become and expert on performance and relevance in the online retail business."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/4A7291E77E6B3243C1257CAC002BF471",
    "title": "The Lost Art of Assembly Programming: Unraveling a Childhood Mystery",
    "abstract": "Many of us started out using computers that were much less sophisticated than what we have today. Now that we're used to object-oriented development environments and fast machines, thinking about how software was made decades ago can make your brain ache. However, the systems of yesteryear still have lessons to teach today's developers. This session will dig into the strange world of 6502 assembly language, with particular focus on the Atari 2600 videogame system from 1977. Common idioms will be explained, and most of the rules of software development that you live by will be turned upside-down. You will come away with a new appreciation for the tools you have today, as well as some new insights into the inner workings of all your computing devices.",
    "url": "http://oredev.org/2014/sessions/the-lost-art-of-assembly-programming-unraveling-a-childhood-mystery",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/F887B27706869DD5C1257CAB0005FDED",
        "name": "Jack Nutting",
        "role": "thoughtbot",
        "bio": "Jack Nutting has been using Cocoa since the olden days (long before it was even called Cocoa) to develop software for a wide range of industries and applications, including gaming, graphic design, online digital distribution, telecommunications, finance, publishing, and travel. Jack has written several books on iOS and OS X development, and currently works as a consultant on various iOS and OS X projects."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/6D633FD089A51777C1257CA5003B7C53",
    "title": "Enabling Continuous Delivery with Database Practices",
    "abstract": "To get full benefits of Continuous Delivery, all aspects of the software development need to be delivered and at the same time be able to handle multiple versions. Pramod will focus on techniques to enable continuous delivery of changes to database without downtime. Techniques such as Database Refactoring, Database Migrations, Automated Deployment, Continuous Integration with databases and Version Controlling Databases techniques that allow to manage changes in the database.\n",
    "url": "http://oredev.org/2014/sessions/enabling-continuous-delivery-with-database-practices",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/89A0F4E65863E06FC1257C91003AEDAA",
        "name": "Pramod Sadalage",
        "role": "ThoughtWorks",
        "bio": "Pramod Sadalage enjoys the rare role of bridging the divide between database professionals and application developers. In the early 00â€™s he developed techniques to allow relational databases to be designed in an evolutionary manner based on version-controlled schema migrations. He is the co-author of Refactoring Databases, co-author of NoSQL Distilled, author of Recipes for Continuous Database Integration and continues to speak and write about the insights he and his clients learn."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/77494B9F3223A8FCC1257CA5006EC6D5",
    "title": "Internet of Things: An entertaining and mostly correct reflection on where we are, and how we got here.",
    "abstract": "A number of disruptive ideas have over the last few years emerged to create what can only be described as a perfect storm for enabling the concept of 'Internet of Things'. The term coined just at the turn of the century describes a way to let our Internet connected computers harvest and process information not only from humans, but also from the things around us.\nToday new technologies like near ubiquitous Internet access, super cheap and accessible computing hardware and sensors, low-power wireless networks, cloud computing, miniaturization and the smartphone revolution combined with phenomena like the maker movement and an openness of innovation, APIs and data enable a slew of exciting opportunities.\nIn this inspirational overview session we will explore the quite breathtaking developments that led us to where we are today. We will have a look at the software and hardware technologies that are available to us, how they work, and most importantly, how you can program the things around you to do do what you want!\nHaven't you dreamt of making your connected lightning turn angrily red in the mornings when the train service is delayed? Or why not let the sound system wake you up to Garbage's &quot;Only happy when it rains?&quot; when it's pouring down? Oh, what if the washer could send you a Tweet when the cycle is done? Then this session is for you!",
    "url": "http://oredev.org/2014/sessions/internet-of-things-an-entertaining-and-mostly-correct-reflection-on-where-we-are-and-how-we-got-here-",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/38683DF3E202CBE9C1257CA5006C1E15",
        "name": "Patrik Fredriksson",
        "role": "Citerus AB",
        "bio": "As a co-founder and consultant with Citerus I have been doing professional software development and mentoring for more than ten years. I have a particular passion for agile software design and architecture, software development productivity and developer craftsmanship. I am highly motivated to improve the way software is produced and maintained; good software is fun to use and fun to create, bad software and lost projects make me sad."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/819B22AED738890EC1257CA50045A937",
    "title": "Creating great systems with the help of Olympic athletes, agile and pretotypes",
    "abstract": "When Alan Kay first coined the term object orientation he saw an object as an independent computer and a system as a network of interconnected objects. A lot of water has passed under the bridge since then and now what most people think of when talking about object orientation, is in the words of the father of MVC class-orientation. The distinction between object orientation and class orientation being that objects as Kay envisioned them, a are dynamic runtime entities, to the extent that they from a type theoretic perspective might change their type during execution. Class orientation is a limited view of the system and makes it hard to impossible to reason about runtime behavior by looking at the code. \nA system is only as good as the end users value it and a common obstacle in software development is the communication gap between end users and developers. End users have a mental model of the system and as human beings we are better at using tools if the underlying model of the world resembles our own. But most contemporary architectural schools based in the class oriented world violate the users mental model, e.g. an operation that the user sees as a whole might be distributed across several classes, where each class describes an entity that the user knows but also operations that can be performed on that entity, which to the user might very well be external to the entity.\n \nEvolution has equipped us with the ability to learn by example and we are programmed to base our learnings on previous learnings. That is why it is not difficult to learn English as a mother tongue but inherently so if your mother tongue is French and the real important fact is that it doesn't really matter how long you've lived in England, if your mother tongue is French most people will be able to tell until the day you die. Learning a computer system is the same. If the model used in the system fits your view of the domain you will be better at using the system and for complex systems that advantage does not go away over time. This all comes back to the communication gap. If we are capable of capturing the mental model of the end users we reduce the communication gap and might even be able to talk more successfully to end users about architecture if not code artifacts.\nWhen coaching Olympic athletes or business professionals you learn among other things how to illicit the underlying motivations, hopes and dreams of the individual and by that help the individual to figure out their own needs and through the process commit to a plan of actions to reach the dream.When you help them formulate the dream, you will help them formulate goals on the way to the dream. If the dream is participation at the Olympics you might have a goal of qualifying for the world championship the preceding season and to learn a specific technical detail prior to participation in the worlds . This process is repeated until you have set first goals to accomplish this year, this month and in the end you have a (set) of goals for today. In this way you as a coach can work together with the athlete to find the path of least resistance that leads to the dream. This process has been researched extensively. The sole factor that sets all high achievers a part, is dedication to refine goals and subgoals to the extent that while practicing, new goals for the next drill might be based the execution of the current drill.This is also referred to as dedicated practice and has been shown to be the important factor in a variety of fields such as sports, music, chess and business. \nIf we view the development of a complete system as reaching the dream we could use the same approach. We start by formulating a dream for our software. It should be formulated in functional terms. Several goals and dreams might be fulfilled with the same piece of software. E.g. a word processor might be used to write a book or love letter but we start with one, just like the athlete we start with the one we believe has the highest value. We divide the dream into goals which we might call milestones or major releases and each of these into minor releases and we continue till we reach sprints and tasks. However doing this top down and asking the right questions, we capture the user mental model in the process and if we ask smart questions we not only capture the requirements and the mental model, we also find the path of least resistance to the most elegant solution. We will for each goal end up with a distinct system (or object in the Alan kay model) and each of these systems will be a distinct artifact in code as well as in documentation and be part of the user mental model. \nThe resulting structure of the documentation when following this approach is a network of interconnected goals, and if we view each goal as a distinct system then said network is very much like Alan Kay's view of an object oriented system.\nIn the spirit of Lean, we should strive to only produce what we need and since each of these systems makes for a pretotyping candidate it would be a perfectly valid approach to treat the entire development life cycle as incrementally building new pretotypes.\nWhat proponents such as the farther of MVC, Trygve Reenskauge or one of the founders of the software patterns discipline James &quot;Cope&quot; Coplien calls full OO are extremely good at expressing this kind of systems. DDD would lead us to divide the system based on the entities of the end user mental model and attach the parts of the system operation that are related to each entity to the same class. That destroys the ability to reason about the code unless you are able to construct the call graph mentally. If parts of the system are polymorphic, trying to do so will be futile. Full OO enables us to build complex systems where each complete system operation is located in the same code entity while still dividing the domain into the entities of the real world as they are represented in the end user mental model. This results in the ability to reason about runtime behavior of a specific and complete system operation and since the code entity will be directly related to a specific part of the requirements, it is possible to review these in union and possible to review the correctness together with the end users.\nThe talk will go through the steps in the process of creating great systems and will describe the design and requirements process along with giving examples of how to structure and implement the system based on the DCI paradigm. The concept of pretotyping will also be touched upon but the talk is not as such a talk on pretotyping.\nThe delegates can expect to be able to comfortably use the design approach when the talk is over and to have a sufficient understanding of the DCI to be able to try it out themselves. \n",
    "url": "http://oredev.org/2014/sessions/creating-great-systems-with-the-help-of-olympic-athletes-agile-and-pretotypes",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/F5F4253B7BD91933C1257CA5003536E0",
        "name": "Rune Funch SÃ¸ltoft",
        "role": "Asseco Danmark",
        "bio": "I was born in 1975 an raised without computers. I did my first programming at the age of ten in a youth club and my first program for a &quot;client&quot; at my high school when I accidentally discovered a security loop hole and was asked if I could kindly fix it. I have for the past 10 years worked as an architect primarily of safety critical or at least mission critical systems."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/89C5ECD7C0493313C1257CE50054F5AC",
    "title": "Functional Reactive Programming with Bacon.js",
    "abstract": "What is Bacon.js? A small functional reactive programming lib for JavaScript. Turns your event spaghetti into clean and declarative feng shui bacon, by switching from imperative to functional. It's like replacing nested for-loops with functional programming concepts like map and filter. Stop working on individual events and work with event-streams instead. Transform your data with map and filter. Combine your data with merge and combine. Then switch to the heavier weapons and wield flatMap and combineTemplate like a boss. It's the _ of Events. Too bad the symbol ~ is not allowed in Javascript.",
    "url": "http://oredev.org/2014/sessions/functional-reactive-programming-with-bacon-js",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/740B33596A8671FDC1257CC2003E8CDE",
        "name": "Juha Paananen",
        "role": "reaktor.fi",
        "bio": "Software craftsman since the late 90s. Ex-javasaur turned into cool FRP guru and Monad enthusiast. Author of the Bacon.js FRP library. Teaches programming to kids with varying success."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/9EA3C3CFA301B7F8C1257CFC001A205B",
    "title": "Good Design Is a Language",
    "abstract": "Much as programming languages teach behavior to a machine and aid in expressing a particular outcome, can design be approached with simple, flexible, and teachable best practices of language? For both computer language well as natural language, this session will look at ways of thinking about design experiences through consistent and cohesive â€œlanguageâ€.",
    "url": "http://oredev.org/2014/sessions/good-design-is-a-language",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/7034E82AF0834DEFC1257CDF001C1FD5",
        "name": "Sean Wolcott",
        "role": "Microsoft",
        "bio": "Sean Wolcott is a Seattle-based graphic designer, currently working as Senior Art Director at Microsoft. Besides creating user interfaces and experiences for products used by millions, Mr. Wolcott runs his own practice, Rationale, where he designs identities, packaging, signage, publications, websites, and user interfaces for a wide array of clients.\n\nHis work reflects a holistic philosophy of design and a visual language, which aims at rational, objective expression that can appropriately convey clients' values. For Mr. Wolcott, design is not a matter of style, but rather a logical, problem-solving process that leads to timeless solutions.\n\nMr. Wolcott had the privilege of studying under Massimo Vignelli, whose teachings continue to inform his philosophy and propel his craft to higher standards of excellence.\n\nHis work is often featured in online and printed publications, and he has been nominated by Mr. Vignelli as one of the six top American graphic designers today under the age of 50, for which his works will be exhibited in the US and Italy in the fall of 2015.\n\nMr. Wolcott is also a teacher at the School of Visual Concepts (SVC) in Seattle, where he teaches corporate identity and user interface design courses. His efforts to inform and promote a better design culture are also reflected in his lecturing activity as an international speaker, having lectured several times in the United States, as well as in European countries.\n\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/A2C6BC5F96207837C1257CF200364431",
    "title": "Homebrewing beer",
    "abstract": "A day-long event showing how to brew beer at home (or in this case at a developers conference). The beer that will be brewed is a double india pale ale with huge amounts of american hops. The presentation will provide theoretical and practical information to get you ready to start brewing yourself.",
    "url": "http://oredev.org/2014/sessions/homebrewing-beer",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/8145B83FDA0E4DFDC1257CF20035EA59",
        "name": "Hannes Gruber",
        "role": "Jayway",
        "bio": "Hannes is a Jayway android consultant with a big interest in beer. But not just drinking it. Homebrewing beer has been his major hobby since 2010 and his brews has won a fair share of medals at the Swedish homebrewing championships and other homebrewing competitions."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/A835504D1B32474AC1257CEC002B31C3",
    "title": "Testing in Continuous Deployment",
    "abstract": "What kind of testing do we need to have in a CD pipeline? What does it take to push a commit all the way to deployment? Fully automated. Several times a day.\nModel-based testing has played a key factor at Spotify as a part of the automated end-user acceptance testing. Kristian will talk about how Spotify built the Continuous Deployment pipeline for its web player, and changed the way manual testing was performed. Also, the tools involved which mostly are open source (Gerrit, Selenium, GraphWalker) will be discussed.",
    "url": "http://oredev.org/2014/sessions/testing-in-continuous-deployment",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-07 11:20:00",
    "end_time": "2014-11-07 12:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/DAAB419196611903C1257CA200562603",
        "name": "Kristian Karl",
        "role": "Spotify",
        "bio": "Kristian Karl has 20 years of experience in the testing business, and has during that time been given the chance to work in Telecom, Finance, Government and start-ups. Even though Kristian has done White Box Testing, Functional Testing, System and Integration Testing, Acceptance Testing, his heart beats strongest for Test Automation using Model-based Testing and Performance Testing.\nFounder of graphwalker.org\nTest manager at Spotify since 2010."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/091D4D4AC518CA36C1257D7400226B10",
    "title": "API - The hidden UI",
    "abstract": "Developers are also users. Instead of interacting with buttons and other graphical elements we use APIs. Just as a GUI can be more or less usable, so can an API. What makes an API more or less usable? Fredrik MÃ¶rk takes a fairly non-technical look at some useful thought patterns that can help you design a better API.",
    "url": "http://oredev.org/2014/sessions/api--the-hidden-ui",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-07 12:20:00",
    "end_time": "2014-11-07 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/F7B4C35A4EDFDF2AC1257D74002152FD",
        "name": "Fredrik MÃ¶rk",
        "role": "Webstep",
        "bio": "Fredrik works as a software development consultant for Webstep in Sweden. His assignments often contain a mix of being a developer, an architect and a mentor. He often works through all of the stack from the user experience down to the backend. He is also passionate about sharing his knowledge within as well as outside of his team and has spoken at both internal and external conferences."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2EE8101156FF3B9CC1257CB500334E49",
    "title": "Coding Culture",
    "abstract": "One day we woke up and realized that our days are filled with all kind of stuff unrelated to code or product, that our goals are driven by product owners, and that our code design is dictated by architects trying to tell us how we should solve problems. A strong coding culture gives the power back to the developer to concentrate on one thing: Create awesome stuff!\nImagine a culture where the input of the whole organization turns an individual idea into a user story in just a couple of hours; where everybody's goal is to make the customer awesome, and where you work on stuff you love instead stuff you loathe. A great coding culture concentrates on making developers productive and happy by removing unnecessary overhead, bringing autonomous teams together, helping the individual programmer to innovate, and raising the awareness among the developers to create better code. \nI will talk about how to establish and foster a strong engineering-focused culture that scales from a small team to a huge organization with hundreds of developers. I'll give lots of examples from our experience at Atlassian to show that once you're working in a great coding culture, you won't want to work anywhere else.",
    "url": "http://oredev.org/2014/sessions/coding-culture",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-07 12:20:00",
    "end_time": "2014-11-07 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4B1AAA3817B5957EC1257CB500326B95",
        "name": "Sven Peters",
        "role": "Atlassian",
        "bio": "Sven Peters is a software geek working as an Ambassador for Atlassian. He started with Java development in 1998 and has been programming for longer that he'd like to admit. Besides coding his passion is effective software development, keeping developers motivated, and helping them kick-ass. Sven has extensive speaking experience in 20+ countries on myriad topics."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/32A0B6D3B5CBA1B3C1257D2C0053DB73",
    "title": "Bitcoin",
    "abstract": "Coming soon",
    "url": "http://oredev.org/2014/sessions/bitcoin",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-07 12:20:00",
    "end_time": "2014-11-07 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/99641494E8BE6C9DC1257D2C0053BBB1",
        "name": "Jeff Garzik",
        "role": "BitPay",
        "bio": "Jeff Garzik is a software engineer, blogger, futurist and entrepreneur. \n\nIn July 2010, while reading slashdot.org, Jeff stumbled across a post describing bitcoin. Immediately recognizing the potential of a concept previously thought impossible -- decentralized digital money -- Jeff did what came naturally: developed bitcoin open source software, and started micro-businesses with bitcoin at their foundation. Almost by accident, Jeff found himself square in the middle of the global, disruptive, amazing hurricane of a technological phenomenon known as bitcoin.\n\nJeff now works as a bitcoin core developer and open source evangelist at BitPay. Jeff is also the CEO of Dunvegan Space Systems and Sleepy Dragon Properties, both one-man micro-businesses. Dunvegan Space Systems is the manager of the BitSat project."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/592A3427B49AA975C1257CE000222B3A",
    "title": "What do you mean &quot;Agile Tester&quot;?",
    "abstract": "I donâ€™t make a distinction between Agile Tester and Context Driven Tester. Iâ€™m a tester. I just happen to work with a team running a Scrum-ish flavour of Agile. We have our various rituals that are observed, standup, demos, sprints, retrospectives.\nâ€˜Where does testing fit into Agileâ€™ seems to be an oft heard query.\nA short and flippant answer might be â€“ everywhere and it happens naturally. If youâ€™re being snarky, you might add â€˜unless youâ€™re a tester who is locked into an incompatible set of testing ritualsâ€™.\nThe truth is that there are as many variables in team dynamics as there are in the projects they work on. Where you fit might differ based on things like the skills the group already has, how long the group has existed before you arrived, their openness to having a new team member and your skill set relative to theirs (to name a few).\nIâ€™d like to spend some time talking about my experiences with the group I work with at eBay, the challenges we face, what works and what weâ€™re working to improve.\nI like to think it will be illustrative for those who have never worked in an Agile context before and possible enlightening for other testers who do work in an Agile context, but who differ in their approach.",
    "url": "http://oredev.org/2014/sessions/what-do-you-mean-agile-tester",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-07 12:20:00",
    "end_time": "2014-11-07 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/3B889DBDF69B342DC1257CA20041AE0B",
        "name": "Ben Kelly",
        "role": "eBay",
        "bio": "Ben has been in the software testing industry for over a decade and is a regular speaker at conferences worldwide. He is currently based in London, but has spent time in various industries and companies in Australia and Japan. He works for eBay and is involved in both Agile testing and software testing workshops. He writes sporadically at http://testjutsu.com and is on twitter @benjaminkelly"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/8F1D4EA9A1A0719BC1257C9F0039D298",
    "title": "Using the right tools to get back into the driver's seat of your JVM",
    "abstract": "Java is continuously evolving and each release brings new features. For sure you heard about Lambdas for Java 8, right? Who hasnâ€™t?\nUnfortunately, despite all new language features developers still often struggle with performance issues and memory leaks. How do you go about solving these problems? Luckily, Java tooling support is evolving as well, but much more hidden for many. When was the last time you looked into the bin directory of your JDK? Ever heard of tools like jps, jstack or jmap? Whatâ€™s about Mission Control and Flight Recorder? Java together with a few simple system tools provide everything you need to track down performance and memory problems. \nIn this session we are having a closer look at the above mentioned tools. Where do I find them? How do I start? What do they tell me? And of course how can they be used to solve my problems? To keep things real, we will use real world examples from various Hibernate projects.\nBuckle up and get learn how to get back into control of your JVM.",
    "url": "http://oredev.org/2014/sessions/using-the-right-tools-to-get-back-into-the-drivers-seat-of-your-jvm",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-07 12:20:00",
    "end_time": "2014-11-07 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/90A6D0999D5B794CC1257C9F00391FC1",
        "name": "Hardy Ferentschik",
        "role": "Red Hat",
        "bio": "Hardy Ferentschik is Senior Developer at JBoss and member of the Hibernate development team. He is the project lead of Hibernate Validator, core developer for Hibernate ORM and Search and Bean Validation expert group member. Hardy is a frequent speaker at JUGs and leading software development conferences."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/C02C9ED4966DFD1BC1257CC60078D1A7",
    "title": "Building Fast Data Applications with Project Reactor",
    "abstract": "This session will introduce the Reactor fast data framework. Reactor is a library for building low-latency, high-throughput reactive applications on the JVM. The core concepts and abstractions will be introduced through plentiful code samples and live coding.",
    "url": "http://oredev.org/2014/sessions/building-fast-data-applications-with-project-reactor",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-07 12:20:00",
    "end_time": "2014-11-07 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4D6B2AEAE2749D97C1257CC3006D116A",
        "name": "Jon Brisbin",
        "role": "Pivotal",
        "bio": "Jon is a Senior Software Engineer at Pivotal, where he leads the Reactor Project. Jon started his career with Sun and DEC workstations in an air-conditioned trailer in the deserts of Saudi Arabia as an Intelligence Analyst. From mainframes to AS/400's to UNIX and now in the cloud, Jon has helped to architect and develop next-generation libraries to assist developers in solving the big and fast data problems of today's agile businesses."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/D3FE0FB29E8C8000C1257CB000554CFE",
    "title": "Open source protocols and architectures to fix the Internet of Things",
    "abstract": "Everyday objects are becoming smarter. In ten yearsâ€™ time, every piece of clothing you own, every piece of jewellery you wear, and every thing you carry with you will be measuring, weighing and calculating your life. In ten years, the world â€” your world â€” will be full of sensors.\nThe problem? The things are becoming smarter, but theyâ€™re also becoming selfish. Your lightbulbs arenâ€™t talking to your media centre, your media centre isnâ€™t talking to your blinds, and nobody is talking to the thermostat. Instead of talking to each other, everything is talking to youâ€”youâ€™ve ended up as a mechanical turk inside someone elseâ€™s software.\nThat situation canâ€™t continue, we need to fix the Internet of Things. As our computing continues its diffusion out into the environment we need our things to work together. The things have to become not just smarter, but more co-operative, they need to become anticipatory rather than reactive.\nRight now we have not so much an Internet of Things, but a series of Islands of Things. I present open source protocols and architectures that will help solve this trouble with the Internet of Things.",
    "url": "http://oredev.org/2014/sessions/open-source-protocols-and-architectures-to-fix-the-internet-of-things",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-07 12:20:00",
    "end_time": "2014-11-07 13:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/40C9E0240D144932C1257CB000551A33",
        "name": "Alasdair Allan",
        "role": "The Thing System",
        "bio": "http://alasdairallan.com/"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/14859D198CDB4E9CC1257CAC0029C991",
    "title": "&quot;It doesn't work that way in enterprise&quot;",
    "abstract": "We've all heard it... or something similar. There's probably one senior guy at work who tells you this at least once a month. You've got an idea for an amazing new feature or practice that's going to save your company both time and money, but it's too 'cutting edge'; your management fears the unfamiliar and you are cruelly stifled.\n&quot;It doesn't work like that in Enterprise&quot; is a passionate and motivational story about my journey as a developer in the face of one of the worst fallacies in our industry. The extremes of my experience will make you laugh cry in equal measure, and maybe help put your own frustrations into perspective. Just remember, it does get better... and you probably got off very f***g lightly!",
    "url": "http://oredev.org/2014/sessions/it-doesnt-work-that-way-in-enterprise",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/B37BEE6F3E2DD778C1257CAC002987A4",
        "name": "Peter Smith",
        "role": "One and Three Consulting",
        "bio": "Pete is a software consultant based in London with almost 10 years of experience making web applications with Asp.Net, specialising in API design and Javascript browser-based applications. He is the author of Superscribe - a graph based routing framework, and the OData library Linq to Querystring.\n\nHis favourite C# keyword is 'explicit'."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/2B2F0EC787217A08C1257CAC00724F24",
    "title": "Do-it-yourself Usability Design for Developers",
    "abstract": "Good user experience (UX) is essential in modern software. It is a must-have in consumer oriented applications and even in business applications good user experience becomes increasingly important. Therefore proper UX design should be embedded into the development of any user facing software.\nUnfortunately only few teams are equipped with a UX expert and it is up to the developers to incorporate good usability. This talk covers the basics of UX design. We will take a look at several concrete and simple techniques that every team can use, even with small budget, and that will enable you to increase the usability of your software tremendously.",
    "url": "http://oredev.org/2014/sessions/do-it-yourself-usability-design-for-developers",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/2028C590FA4F3CA0C1257CAC00717B3A",
        "name": "Michael Heinrichs",
        "role": "Canoo Engineering AG",
        "bio": "Michael is a user interface creator by passion. He is convinced: no matter which technology and which device, if it has a screen, one can build a truly amazing experience. And pure magic.\n\nHe works at Canoo as a software engineer on next generation user interfaces. Before that, he was responsible for performance optimizations in JavaFX Mobile at Sun Microsystems and later became the technical lead of the JavaFX core components at Oracle. He then worked on a low-latency trading platform written almost entirely in Java at Barclays Capital.\n\nMichael loves to spend time with his family and cooking. You can find him on Twitter @net0pyr and occasionally he blogs at http://blog.netopyr.com.\n"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/322AD659E8936CADC1257CE40016E30E",
    "title": "Testing to improve app store ratings for mobile apps",
    "abstract": "You would love this. Pradeep and his colleagues have helped customers worldwide improve app store rating for their apps. He will be showing real work done. He would love to explain how his team understood existing user reviews, how they interact with users, understanding user emotions and equally important, how they test and report.",
    "url": "http://oredev.org/2014/sessions/testing-to-improve-app-store-ratings-for-mobile-apps",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/18D2DC9D1F352BACC1257CA500239BF6",
        "name": "Pradeep Soundararajan",
        "role": "Moolya Software Testing",
        "bio": "Pradeep Soundararajan co-founded Moolya, a company that specializes in exploratory testing and context driven test approaches whilst doing automation the way it best can be. His journey as a tester has been one of the finest â€“ from a tester, to an independent consultant (without work) to an independent consultant (with loads of work) to a mentor and then to a businessman (with loads of work, of course) while being a hands on tester. He facilitates his colleagues to do awesome testing and is working towards creative solutions that can change the way people test software. He writes two testing blogs: www.moolya.com/blog and http://testertested.blogspot.com and speaks around the world on changing the testing space. Never before has a panda been so feared and so loved!"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/98F804EAFF2B6A95C1257CA00049D414",
    "title": "MicroServices: Lessons from 3 Companies",
    "abstract": "MicroService Architecture adroitly exploits cloud environments. In this session, we will address the lessons learned in 3 companies (so far). The lessons cover overcoming the programmer bias to build &quot;big&quot; services; asynchronous vs. synchronous service flows; successful languages, environments, and frameworks; and impact on development processes. Also addressed is the necessary shift from acceptance test to active system monitoring of business KPI's.",
    "url": "http://oredev.org/2014/sessions/microservices-lessons-from-3-companies",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/FEE6E5CA9BFD8B4AC1257C91002CB62D",
        "name": "Fred George",
        "role": "Outpace Systems",
        "bio": "Fred George is a developer at Outpace Systems with over 45 years experience in the industry including over twenty years doing object programming and over a dozen years doing Agile/XP. He counts at least 70 languages with which he has written code. Most recently, he is the leading advocate of Programmer Anarchy, a postÂ­-Agile process that is proving extremely effective and reactive to client needs, and also advocates MicroÂ­Service Architectures, the creations of systems with hundreds of tiny, looselyÂ­ coupled services. A veteran of the IBMÂ­Microsoft wars, Fred did early work in computer networking, LAN's, GUI's and objects for IBM. As an independent consultant from 1991Â­2003, he counted HP, Morgan-Â­Stanley, American Express, IBM, and USAA among his clients. He gave the first Agile/XP experience report at OOPSLA in 1999 about an embedded system done in Java, and has mentored many clients in use of objects in Java under an XP process. He has shared the stage at JavaOne with Martin Fowler, acting as his foil, and assisted in XP Immersion sessions with Kent Beck, Ron Jeffries, and Robert Martin. Fred spent a year as a visiting lecturer at N.C. State University teaching Java programming to over 800 undergraduates, with a generous dose of object design, patterns, and XP practices thrown in. Fred joined ThoughtWorks in 2003, delivering yet more projects using agile processes. He has worked with clients in four countries since then, including a ten-Â­month assignment in India (where he founded ThoughtWorks University), four months of projects in China, and a post in the London office. In 2007, he joined the London Internet advertising firm, Forward, bringing Agile practices to all aspects of the business, leaving to pursue industry change at the end of 2011. He next was the Chief Architect at MailOnline, the online version of the Daily Mail and the worldâ€™s most popular online newspaper. There he completely restructured the IT team along the lines of Anarchy, which has now delivered a completely re-Â­engineered rendering of the MailOnline. He currently is a co-Â­founder of Outpace Systems in the US, a firm building solutions for large businesses that exploits MicroServices and a Fractal development process derived from the concepts of Programmer Anarchy. He believes in objects, Lean processes, fun in programming, and the client's successes. He holds a bachelors degree from N. C. State University in Computer Science, and a masters degree from MIT in the Management of Technology. Oh, and he still writes code!"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/A715C4C03E2F03A2C1257CF8004A2307",
    "title": "Reactive Streaming RESTful Applications with Akka HTTP",
    "abstract": "In this session you will learn how to leverage the features introduced in akka-http and akka-stream to write fully back pressured streaming REST services. We will show you how to use the client and server APIs to add resilient and reactive REST services to your architecture, as well as give you an overview of what RESTful programming with akka-http and actors look like.\nAkka is a toolkit for writing reactive, fault tolerant, distributed and scalable applications in Java or Scala.",
    "url": "http://oredev.org/2014/sessions/reactive-streaming-restful-applications-with-akka-http",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4C9B143C28A54484C1257CF80049A41B",
        "name": "BjÃ¶rn Antonsson",
        "role": "Typesafe",
        "bio": "BjÃ¶rn is a passionate software engineer whose experience ranges from the lowest levels of hardware memory models right through the operating system and the JVM as a founder and long time developer of JRockit, and straight up into high volume financial data systems and large traffic website. He is currently working in the team that is building the Akka toolkit, that powers many reactive systems."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/CA22E93C02430005C1257CAA0040A75F",
    "title": "Spring4, Java EE 7 or Both?",
    "abstract": "Problems choosing between Java EE and Spring? Or do you want to use both in combination? Then this session is something for you.\nIn this session I will build an application using Spring 4, then build the same application using Java EE 7 and at last build it again using a combination of the two.\nStrengths and weaknesses with the three approaches will then be explored and lessons learned summarized.\nThe objectives of this session are:\n1. See three different approaches to solving the same problem\n2. Highlight the strengths and weaknesses of the approaches\n3. Learn how to choose which approach fits your project\nThe slides for this session will be backed up by a demo to show the key concepts.\nThe demo will be performed using NetBeans, Glassfish, Wildfly and Tomcat.",
    "url": "http://oredev.org/2014/sessions/spring4-java-ee-7-or-both",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/7A195B3C29666FF1C1257CAA003FD342",
        "name": "Ivar Grimstad",
        "role": "Cybercom Sweden",
        "bio": "Ivar Grimstad is an experienced software architect with a strong focus on Enterprise Java.\n\nHe has been working with Java since the beginning and has over the years tried out everything from lightweight mobile applications to large scale enterprise applications. His experience covers all aspects of designing architectures based on a variety of technologies including standard Java EE as well as more lightweight frameworks such as Spring and a variety of open source products.\n\nIvar is always focusing on quality and on using the right tools and technologies for the right task to optimize the software development process.\n\nIvar is a frequent speaker at conferences, locally as well as internationally."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/DDE458060B72EA7CC1257C980075F02A",
    "title": "Developing Web Applications with Clojure",
    "abstract": "In this session youâ€™ll get a whirlwind tour of what it is like developing web applications in Clojure. \nTopics include:\n- Setting up a webserver with Pedestal\n- Routing requests to controller handlers\n- Rendering templates and views\n- Persisting information to a database (Datomic)\n- General editing and project organization tips\n",
    "url": "http://oredev.org/2014/sessions/developing-web-applications-with-clojure",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/97D958DDB1B16882C1257C98004B84E1",
        "name": "Ryan Neufeld",
        "role": "Independent",
        "bio": "Ryan is a polyglot software developer and budding architect. Whether it's a tough technical issue or one of the softer elements of software engineering, Ryan relishes the opportunity to deliver results for clients.\n\nRyan is also an author, having recently finished co-writing and editing the crowd-sourced Clojure Cookbook."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/EDC71DA6F8F7DBD3C1257CA50070495C",
    "title": "Do YOU want to be a superhero?",
    "abstract": "Software developers are the magicians of this age. With the information and technology available to us today, we can do pretty much anything we put our minds to. \nWhat mark will you leave behind in this world? \nIn this short lightning talk you will find out how to use your powers for the greater good!",
    "url": "http://oredev.org/2014/sessions/do-you-want-to-be-a-superhero",
    "space_name": "Johnny Five",
    "venue": "vfzb",
    "start_time": "2014-11-07 13:20:00",
    "end_time": "2014-11-07 14:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/10A50FE1DCCAD9B9C1257CA5006E56A3",
        "name": "Ola Karlsson",
        "role": "users code",
        "bio": "After spending the majority of the last decade on the big continent down under, Ola Karlsson is now back in Sweden, his chilly homeland in the north. Ola is a senior developer focusing primarily on front end development in XAML and for the web.\n\nFor a quite a while he trekked deep into Silverlight land, but over the last year or so, he returns to his first passion of &quot;real&quot; web development. &quot;It is exciting to see the .Net web development community, slowly adopting and embracing things like Web standards, JavaScript, HTML5 and CSS3 on a bigger scale!&quot; \n\nOla is also a fan of UX. &quot;It is long overdue that we move away from the mentality where developers create something, which is â€œgood enoughâ€ and if things don't behave like the user expects them to, then its a &quot;user error&quot;! It is time that developers realize, that it is part of our job, to think about who the users of our products are and how the products we build will be used!\n\nThe user should not have to spend time trying to understand how something works, it should just well, work!&quot;\n\nWhile living in Australia he was much involved in the .Net and Silverlight community, &quot;I love talking to people both about technology and other fun things. And I'm now excited to continue my community involvement here in Sweden and at Ã˜redev!&quot;"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/155ED6264037AFB4C1257CF30016F805",
    "title": "Don't Chase Innovationâ€”Chase Forgotten People",
    "abstract": "As an industry, we spend a lot of time chasing innovation, only to end up chasing our tails. Innovation can't be a goal. It has to be a result of achieving your goal. How, then, to set the right goal? I'll share two personal case studiesâ€”designing an Internet-of-Grandmas and building rapidly deployed houses for refugeesâ€”demonstrating that focusing on accessibility can lead you down and keep you on the right path to true innovation, as well as good design and even, *gasp*, profit.",
    "url": "http://oredev.org/2014/sessions/dont-chase-innovation-chase-forgotten-people",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-07 14:20:00",
    "end_time": "2014-11-07 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/B0DF73E7286893F8C1257CA50051D821",
        "name": "Thomas Q Brady",
        "role": "Reaction, Inc.",
        "bio": "Thomas Q Brady started, as so many did, with a Commodore computer as a child(Vic 20, though, not 64), teaching himself BASIC from the book that came with it. It became a life-long-hobby-turned-career, when his degrees in Psychology and Philosophy turned out to be the real hobbies. He's a hardware hacker, interaction designer and developer, currently working as Technology Director at Reaction, Inc., makers of the Exo short-term housing system."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/285EFE481EBC94CBC1257CE50057D4DC",
    "title": "LIQUi|&gt;: A Software Architecture for Quantum Computing",
    "abstract": "Languages, compilers, and computer-aided design tools will be essential for scalable quantum computing, which promises an exponential leap in our ability to execute complex tasks. LIQUi|&gt; contains an embedded, domain-specific language designed for programming quantum algorithms. It is also fully modular and independent of a specific quantum architecture. LIQUi|&gt; allows the extraction of a circuit data structure that can be used for optimization, rendering, or translation. The circuit can also be exported to external hardware and software environments. Two different simulation environments are available to the user which allow a trade-off between number of qubits and class of operations. LIQUi|&gt; can be executed in a wide range of run-times from the desktop to the cloud. In this session, I will describe the significant components of the design architecture and show how to express any given quantum algorithm. LIQUi|&gt; enables easy programming, compilation, and simulation of quantum algorithms and circuits.",
    "url": "http://oredev.org/2014/sessions/liqui--a-software-architecture-for-quantum-computing",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-07 14:20:00",
    "end_time": "2014-11-07 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/358B317F62827F79C1257CC20033B63E",
        "name": "Krysta Svore",
        "role": "Microsoft",
        "bio": "Dr. Krysta Svore co-founded and manages the Quantum Architectures and Computation Group (QuArC) at Microsoft Research in Redmond, Washington. She has deep expertise in machine learning and quantum computing, one of the hottest fields in science today. Her group has developed applications for quantum computers, that should a quantum computer emerge, will utterly transform what we can compute today. She has co-created a unique software environment for this new computational paradigm, and will be ready to program quantum computers using entirely different methods than we use in the present digital computer world. Dr. Svore received her Ph.D. in Computer Science with highest distinction from Columbia University in 2006 and a B.A. from Princeton University in Mathematics, with a minor in Computer Science and French in 2001. Dr. Svore received the ACM Best of 2013 Notable Article award and won the Yahoo! Learning to Rank Challenge in 2010. She serves as a representative for the Academic Alliance of the National Center for Women and Information Technology (NCWIT) and is an active member of the American Physical Society (APS) and the Association for Computing Machinery (ACM)."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/3598C12B66923723C1257CF10069798C",
    "title": "Queueing Network Tasks When Offline",
    "abstract": "In an upcoming release of Flipboard for iOS a feature will be introduced that queues network requests under poor connectivity and retries them automatically at a later time. This session will cover in depth many of the considerations and difficulties of implementing this feature, including\n- Integration into Flipboard's network stack\n- The client-facing API and example of usage\n- Request types applicable to the system\n- Useful debugging tools\n- Avoiding duplicate retrying of requests\n- Preventing requests from being permanently stuck\n- Ensuring replayed requests have expected results\n- Error handling and user feedback\n- Appearance to end users",
    "url": "http://oredev.org/2014/sessions/queueing-network-tasks-when-offline",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-07 14:20:00",
    "end_time": "2014-11-07 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/827D9973A397A30EC1257CF10067DBA3",
        "name": "Tim Johnsen",
        "role": "Flipboard, Inc.",
        "bio": "I've been developing software for iOS since 2009 and for Android since early 2014. I've been working hard on advancing digital reading products at Flipboard since January 2012 on both platforms. I also maintain a set of independent hobby apps on the App Store which I love updating regularly."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/4C7C3DFF8559CE31C1257CC30081CE34",
    "title": "Rapid IoT UI with JavaFX and SceneBuilder",
    "abstract": "This sessions shows how to use SceneBuilder and JavaFX to rapidly prototype, evolve, and deploy exciting embedded UIs for the Internet of Things. We will explore using SceneBuilderâ€™s integration with your favorite IDE to enable quick and seamless UI development and deployment to OSGi-based embedded systems, no wires, no muss, no fuss, just beautiful UI and developing with pleasure!",
    "url": "http://oredev.org/2014/sessions/rapid-iot-ui-with-javafx-and-scenebuilder",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-07 14:20:00",
    "end_time": "2014-11-07 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/7E319C1C536EC5C5C1257CB7006864EB",
        "name": "Richard Bair",
        "role": "Oracle",
        "bio": "Richard Bair is the architect for the client Java platform at Oracle. He was an influential lead in the development of JavaFX UI controls and associated APIs. Prior to that he was the lead of the SwingLabs project, which was an open source community supported by Sun with a focus on enhancing and extending Swing. Before working at Sun, Blair was an application developer with a focus on data-oriented rich client applications backed by databases. He has a passion for graphics, performance, and developer productivity."
      },
      {
        "crowdsource_ref": "2014/5006E0491C05CA83C1257CB70070103E",
        "name": "Jasper Potts",
        "role": "Oracle",
        "bio": "Jasper Potts is a IoT Client Architect at Oracle. Working on upcoming Oracle IoT products and responsible for making Java Client Cool. Formally a lead engineer on the JavaFX Swing teams working on the new JavaFX UI Controls and Graphics frameworks. Also responsible for designing, developing and presenting demos during the keynotes at JavaOne and Devoxx. A JavaOne Rockstar presenter having presented many sessions on JavaFX and Swing at many conferences. Prior to Sun he founded Xerto a desktop applications company developing Imagery a Java professional photo management application."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/948B2A88522F464AC1257D32005A3CE7",
    "title": "Make It So (Sexy)",
    "abstract": "The last chapter in the book Make It So: Interaction Design Lessons from Science Fiction (Rosenfeld, 2012) is simply titled &quot;Sex.&quot; In this tour de force review of sex-related interfaces in sci-fi (and there are more than you probably think) Christopher Noessel discusses matchmaking interfaces, augmented coupling, mediated coupling, and yes, even sex with technology. Along the way he shares practical lessons that the sometimes surprising, sometimes hilarious interfaces inspire for those of us designing for the real world.",
    "url": "http://oredev.org/2014/sessions/make-it-so-sexy-",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-07 14:20:00",
    "end_time": "2014-11-07 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/4AE183E45C7B786DC1257CEB001E9C22",
        "name": "Chris Noessel",
        "role": "Cooper",
        "bio": "Christopher Noessel, in his day job as Design Fellow at the pioneering interaction design firm Cooper, designs products, services, and strategy for the health, financial, and consumer domains, among others. In his role as practice lead, he helps manage the &quot;generator&quot; type of interaction designers, helping them build their skills and lead client projects to greatness. Christopher has been doing interaction design for more than 20 years (longer than we've even been calling it that). He co-founded a small interaction design agency where he developed interactive exhibitions and environments for museums, and he worked as a director of information design at international Web consultancy marchFIRST, where he also helped establish the interaction design Center of Excellence.\n \nChristopher was one of the founding graduates of the now-passing-into legend Interaction Design Institute Ivrea in Ivrea, Italy, where his thesis project was a comprehensive service design for lifelong learners called Fresh. The project was presented at the MLearn conference in London in 2003. He has since helped to visualize the future of counterterrorism as a freelancer, built prototypes of coming technologies for Microsoft, and designed telehealth devices to accommodate the crazy facts of modern health care in his role at Cooper.\n \nChristopher has written for online publications for many years, and was first published in print as co-author of the interaction design pattern chapter in the textbook edited by Simson Garfinkel, RFID: Applications, Security, and Privacy. His Spidey sense goes off at random topics, and this has led him to speak at conferences around the world about a wide range of things, including interactive narrative, ethnographic user research, interaction design, sex-related interactive technologies, free-range learning, the future of technology and interaction design, and the relationship between science fiction and interface design with his 2012 coauthored book Make It So: Interaction Design Lessons from Science Fiction."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/AEE00902A2D4CFC0C1257CE50065E160",
    "title": "NuGet 3.0 â€“ Transitioning from OData to JSON-LD",
    "abstract": "The NuGet team has spent most of 2014 working on NuGet 3.0. Youâ€™ll get a tour of NuGet 3.0, its features, and the direction weâ€™re headed. But then weâ€™ll get to the fun stuff we can all learn from: the challenges weâ€™ve faced, and how weâ€™re overcoming them. Youâ€™ll hear chilling tales about how interfaces, LINQ, and general-purpose server APIs have caused us so much grief. But youâ€™ll also see how we broke a cycle of endless design and started making progress when it seemed like none could be made, allowing us to transition from OData to JSON-LD.",
    "url": "http://oredev.org/2014/sessions/nuget-3-0--transitioning-from-odata-to-json-ld",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-07 14:20:00",
    "end_time": "2014-11-07 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/6C5C990352ED78C4C1257CE50064C7EB",
        "name": "Jeff Handley",
        "role": "Microsoft",
        "bio": "Jeff Handley works at Microsoft and is the Development Lead for NuGet. Jeff has been building and maturing software projects for over 15 years. Prior to working on NuGet, his largest projects covered education, healthcare waste management, fantasy football, credit/mortgage, and point of sale. Jeff loves that NuGet is an open-source project and is trying to enable more ecosystem growth around the project while improving the core product's features and reliability."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E6B06F16D5AC525BC1257CAE00743F9D",
    "title": "Building a Monitoring Infrastructure with Puppet",
    "abstract": "Continuous Delivery has taught us to move fast and deliver incremental value into our production environment. To make sure that we are not degrading the user experience, we should make sure that any issues are monitored or alerted. Monitoring can be painful and tedious. There are some fantastic tools out there (nagios, icinga etc.) but these feel like operational tools.\nDuring this session, Paul will show you that a developer can use Puppet (an infrastructure management tool) and automate their system checks. This will include how to centrally log errors and how to throw these errors to specific alerting systems based on their criticality. Monitoring should be simple and easy to maintain. I hope that by the end of this talk, Paul will have demonstrated that\n",
    "url": "http://oredev.org/2014/sessions/building-a-monitoring-infrastructure-with-puppet",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-07 14:20:00",
    "end_time": "2014-11-07 15:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/5AA98874EAEB8C83C1257CAE007215BE",
        "name": "Paul Stack",
        "role": "OpenTable",
        "bio": "Paul Stack is a London infrastructure coder working for OpenTable. Paul has spoken at various events throughout the world, as well as extensively in the UK, about his passion for continuous integration and continuous delivery and why they should be part of what developers do on a day to day basis. He believes that reliably delivering software is just as important as its development. Paulâ€™s newest passion is the DevOps movement and how this helps not just development and operations but the entire business and itâ€™s customers."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/321AD494E9CCE720C1257CE5005632FE",
    "title": "How to Build a Quantum Computer",
    "abstract": "The challenge of building a quantum computer is that the states of the machine cannot be measured before the computation has run its course. Any such measurement destroys the fragile superposition of states that characterize the quantum world (but not the classical world). At the same time, these quantum states have to be controlled so that initialization, computation, and, eventually, readout, can be performed. This talk will consider a few candidate systems and report on progress in the lab (including the speakerâ€™s). The quantum bits operate near absolute zero and self destruct in less than a millisecond. When will this be a technology? Is a quantum computer around the corner, already here, or 50 years away (and always will be)? And, once here, whatâ€™s it good for?",
    "url": "http://oredev.org/2014/sessions/how-to-build-a-quantum-computer",
    "space_name": "R2D2",
    "venue": "vfzb",
    "start_time": "2014-11-07 15:40:00",
    "end_time": "2014-11-07 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/33CA5B9DD2E2F34DC1257CC200347126",
        "name": "Charlie Marcus",
        "role": "University of Copenhagen",
        "bio": "Charlie Marcus is the Villum Kann Rasmussen Professor at the Niels Bohr Institute and Center Director of QDev. Before coming to Copenhagen in 2011, he also taught Physics at Stanford University (92-99) and Harvard University (00-10). His research interests include neural networks, quantum chaos, mesoscopic physics, fractional quantum Hall systems, quantum information, spin qubits and topological quantum states in condensed matter."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/33C4C41901E3107BC1257CAC0053610A",
    "title": "Web Usability on a Budget",
    "abstract": "Not all projects have the budget for UX designers; as a result, experience in disciplines such as user research, interaction design, and information architecture are often expected of all developers on a team. Fortunately, these arcane-sounding topics are far from impossible to grasp for mere programmer mortals. In this session, you'll learn some easy tricks to make your sites more approachable, discover ways to help develop an emotional connection between your apps and your users, and see some tools that can assist you with planning and designing your next masterpiece of usability.",
    "url": "http://oredev.org/2014/sessions/web-usability-on-a-budget",
    "space_name": "KITT",
    "venue": "vfzb",
    "start_time": "2014-11-07 15:40:00",
    "end_time": "2014-11-07 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/5CE32EE72694400EC1257CAC0052DB48",
        "name": "Tim G. Thomas",
        "role": "frog",
        "bio": "Tim G. Thomas is a Software Engineer at frog in Austin, Texas, where he applies holistic design principles to make the web both usable and beautiful. He speaks on various topics at technology user groups, conferences, and meet-ups, blogs about Web, game, and mobile design at http://timgthomas.com, and shares his thoughts via Twitter at @timgthomas."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/34043A239B542B30C1257CAB006E0271",
    "title": "Bring out your dead",
    "abstract": "This is your ticket to go on a journey with us how we persuaded a client to let us renovate an officially failed project while keeping most of the legacy code. \nI will talk about analyzing and measuring an architecture using ATAM. I will share insights on reverse engineering JSF portlets to AngularJS + REST, a proprietary DMS to a CMIS connected cloud service and how to operate this solution. \nFinally you will grasp why it's more fun to start on a brown field.",
    "url": "http://oredev.org/2014/sessions/bring-out-your-dead",
    "space_name": "HAL9000",
    "venue": "vfzb",
    "start_time": "2014-11-07 15:40:00",
    "end_time": "2014-11-07 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/EAF293AE1FB65439C1257CAB006B2AD5",
        "name": "Oliver Pehnke",
        "role": "eXXcellent Solutions GmbH",
        "bio": "Oliver Pehnke is a project leader and a passionate developer working for a swabian company in Ulm - crafting &quot;exxcellent solutions&quot; for various clients in the German industry. \nAlthough the toolbox contains usually Java solutions he is in love with JavaScript and its &quot;vital&quot; web community since 2008 and accepts Douglas Crockford as one true prophet."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B4A62E9350E6B1C7C1257D71001E4ED9",
    "title": "Virtual reality overview with oculus rift",
    "abstract": "Oculus Rift has been a hot topic since their Kickstarter campaign in 2012. This summer the second version of the development kit was released, and it is expected to be released as a commercial version early 2015. Parallel to this a number of large brands, such as Samsung, Sony and Zeiss, are bringing their own VR solutions to the market.\nIn this talk we will give a introduction to what Oculus Rift is and how it works. We will also talk about the current state and future opportunities that comes with the rebirth of virtual reality.",
    "url": "http://oredev.org/2014/sessions/virtual-reality-overview-with-oculus-rift",
    "space_name": "T-800",
    "venue": "vfzb",
    "start_time": "2014-11-07 15:40:00",
    "end_time": "2014-11-07 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/382549F4BB915EB7C1257D30004471DF",
        "name": "Mattias Ask",
        "role": "Jayway",
        "bio": "In everything Mattias does he believes in the power of people and ideas. He believes that engaging people with the right ideas is what creates real business value and development joy. Mattias has a wide range of experiences from lean startups, innovation and online marketing solutions and combine these with decent coding skills. Simply put; Mattias develop products."
      },
      {
        "crowdsource_ref": "2014/40B35FF183E834DBC1257D700066AB8F",
        "name": "Petar Mataic",
        "role": "Jayway",
        "bio": "Petar is an ambitious young developer who hungers for new technology. Because new technology often means that his work becomes easier and allow him to do things faster, better, cooler.\n\nExperienced in .NET, he is currently focused on the iOS platform.\n\nBorn in a country that doesn't exist anymore, he aspires to make the whole world his home, sharing his passion with other software developers attending and speaking at international conferences.\n\nWhen Petar is not pranking his colleagues, he uses his insatiable motivation and determination to improve his programming, skydiving and longboarding skills."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/B70E7B2B3C5D6D5CC1257C990050ADE7",
    "title": "The Architecture of Stack Overflow",
    "abstract": "Stack Overflow, and its QA network Stack Exchange, have been growing exponentially for the last five years. They now encompass:\n~120 QA sites\n~5 million users\n~10 million questions\n~15 million answers\nIn this talk, I will describe:\nThe physical architecture of Stack Overflow. How many servers are there? What is their purpose and what are their specs?\nThe logical architecture of the software. How do we scale up? What are the main building blocks of our software?\nThe tooling system. What supports our extreme optimization philosophy?\nThe development team. What are our core values? What footprint do we want to leave as developers?",
    "url": "http://oredev.org/2014/sessions/the-architecture-of-stack-overflow",
    "space_name": "Marvin",
    "venue": "vfzb",
    "start_time": "2014-11-07 15:40:00",
    "end_time": "2014-11-07 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/0EEA4C5E9766A6F2C1257C9900502D45",
        "name": "Marco Cecconi",
        "role": "Stack Exchange",
        "bio": "Marco Cecconi is a core team software developer at Stack Overflow and a public speaker focused on architecture and development. Originally from Milan, Italy, he has been traveling around the world for some years. He studied in Singapore, then worked in France, Portugal, and finally settled in the UK for the past years where he lives in Kent with his wife and kid. \n\nAs a speaker he has participated to, or is scheduled at, DevDay 2013 (Poland), Webtech.de 2013 and Developer Conference 13 (Germany), Hacker News London, How To Web 2013 (Romania), Community Days 2014 (keynote, Italy), QCon China 2014 (keynote), QCon Japan 2014 and other international conferences.\n\nHe goes by the handle of `Sklivvz` on the Stack Exchange network, where he has been a proud contributor since the beginning and moderator on Skeptics since 2011. In his previous life, he has been a senior architect at Sophos and Fullsix."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/BC3E562AAA06B1E7C1257CF2003FB371",
    "title": "Rust programming language",
    "abstract": "Rust is a new programming language for building systems that are both reliable and efficient. It combines the performance model of C++ with memory safety and security guarantees of high level languages.\nIn this talk I will introduce the powerful modern programming constructs that Rust offers, its expressive static type system, concurrency model and metaprogramming features. I will showcase some of the first open source projects written in Rust and give a tour of its rapidly growing ecosystem.",
    "url": "http://oredev.org/2014/sessions/rust-programming-language",
    "space_name": "Wall-E",
    "venue": "vfzb",
    "start_time": "2014-11-07 15:40:00",
    "end_time": "2014-11-07 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/5245A0C09540DFFCC1257CF20041C15F",
        "name": "Jakub Wieczorek",
        "role": "Neo Technology",
        "bio": "Jakub Wieczorek is an engineer at Neo Technology working on Neo4j, an open source graph database project, with a focus on its query language and making sure queries run fast.\n\nAside from databases, his areas of interest include distributed systems of all kinds, compilers and functional programming. He's also interested in the socio-economic impact of technology."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/CE7BAC59B7AD1A89C1257CC5001F5AB2",
    "title": "RavenDB: Wow! features - the things that you didn't know that your database can do for you",
    "abstract": "In this talk we'll focus on looking at the distinct features RavenDB has, that can take your application to the next level. We'll discuss the Changes API, Transformers, 2nd stage map/reduce and much more.",
    "url": "http://oredev.org/2014/sessions/ravendb-wow-features--the-things-that-you-didnt-know-that-your-database-can-do-for-you",
    "space_name": "Roomba",
    "venue": "vfzb",
    "start_time": "2014-11-07 15:40:00",
    "end_time": "2014-11-07 16:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/A6D5900B5E352B81C1257CC5001A4ABA",
        "name": "Oren Eini / Ayende Rahien",
        "role": "Hibernating Rhinos",
        "bio": "http://ayende.com/wiki/bio.ashx"
      }
    ]
  },
  {
    "crowdsource_ref": "2014/A5CD2A4692039FE8C1257D51002BB904",
    "title": "The most Human Human",
    "abstract": "For the first time in history, we are routinely mistaking computer interactions for human ones. This is a remarkable testament to human ingenuity, but what does it say about us? Over the last several years, software mimicking human conversation has finally come within reach of the Turing test, a threshold beyond which â€“ or so it's argued â€“ a machine can be said to be thinking.\nPoet, philosopher, and computer scientist Brian Christian set out to become one of the Turing test's &quot;human confederates,&quot; competing not only against machines but against his fellow humans to persuade the judges that he was, in fact, human. Preparing to compete for the coveted, if bizarre, &quot;Most Human Human&quot; award sent him on a wide-ranging investigation into science, philosophy, literature and the arts, to learn what he could about just what it is that makes us human, anyway. As we enter a time where it's ever more difficult to tell the difference between genuine human connection and its many imitations, computers â€“ far from being a threat to our humanity â€“ provide a better means than ever before of understanding what it is.",
    "url": "http://oredev.org/2014/sessions/the-most-human-human",
    "space_name": "Keynote",
    "venue": "vfzb",
    "start_time": "2014-11-07 09:00:00",
    "end_time": "2014-11-07 10:00:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/E6A3BC0972EE0BA8C1257CF2005F4DC5",
        "name": "Brian Christian",
        "role": "",
        "bio": "Brian Christian is the author of The Most Human Human, which was named a Wall Street Journal bestseller and a New Yorker favorite book of 2011, and has been translated into ten languages.\n\nHis writing has appeared in The New Yorker, The Atlantic, Wired, The Wall Street Journal, The Guardian, The Paris Review, and in scientific journals such as Cognitive Science. Christian has been featured on The Charlie Rose Show and The Daily Show with Jon Stewart and has lectured at Google, Microsoft, the Santa Fe Institute, and the London School of Economics. His work has won several awards, including fellowships at Yaddo and the MacDowell Colony, publication in Best American Science Nature Writing, and an award from the Academy of American Poets.\n\nBorn in Wilmington, Delaware, Christian holds degrees in philosophy, computer science, and poetry from Brown University and the University of Washington. He lives in San Francisco."
      }
    ]
  },
  {
    "crowdsource_ref": "2014/E400FC6B32D573B4C1257D410048F58C",
    "title": "Turning The Design Clock Back",
    "abstract": "Object-oriented design principles haven't had the effect we hoped for. The SOLID principles are excellent design guidelines, but experience shows that programmers find them difficult to follow. What do we do about this? Surprisingly, the Structured Design literature of forty years ago contains compelling solutions to many current design problems. They're simple and easy to understand, but were lost in the noise as OO rose to popularity. We'll reinterpret these simple design ideas in a modern context, finding that many of our most promising new design ideas resemble them. Rapid web application development, the area of professional programming in most dire need of design improvements, will serve as an example.",
    "url": "http://oredev.org/2014/sessions/turning-the-design-clock-back",
    "space_name": "Keynote",
    "venue": "vfzb",
    "start_time": "2014-11-07 16:40:00",
    "end_time": "2014-11-07 17:20:00",
    "speakers": [
      {
        "crowdsource_ref": "2014/728CFDF1C90674FCC1257D0F0027401C",
        "name": "Gary Bernhardt",
        "role": "Destroy All Software LLC",
        "bio": "Gary Bernhardt is a creator and destroyer of software compelled to understand both sides of heated software debates: Vim and Emacs; Python and Ruby; Git and Mercurial. He runs Destroy All Software, which publishes advanced screencasts for serious developers covering Unix, OO design, TDD, and dynamic languages."
      }
    ]
  }
]
});

var i = 0;
Session.FIXTURES.forEach(function(fixture){
	fixture['id'] = i.toString();
	i++;
	fixture.ratings = [{rating: '', comment: ''}];
  fixture = {
    "session": fixture
  }
	console.log(JSON.stringify(fixture));
});
//console.log(JSON.stringify(Session.FIXTURES));*/

export default Session;