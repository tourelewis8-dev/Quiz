// Base de données : 7 catégories x 30 questions = 210 questions
const quizData = {
    "Manga": {
        icon: "🎌",
        questions: [
            { q: "Quel est le rêve principal de Monkey D. Luffy dans One Piece ?", o: ["Devenir Hokage", "Devenir le Roi des Pirates", "Trouver les 7 Dragon Balls", "Devenir le meilleur chasseur"], a: 1 },
            { q: "Quel démon est scellé en Naruto Uzumaki ?", o: ["Shukaku", "Kurama (Kyûbi)", "Gyûki", "Matatabi"], a: 1 },
            { q: "Dans Dragon Ball Z, qui tue Freezer sur Terre ?", o: ["Son Goku", "Vegeta", "Trunks du futur", "Son Gohan"], a: 2 },
            { q: "Comment s'appelle le carnet qui tue les gens dont le nom y est écrit ?", o: ["Life Note", "Soul Book", "Death Note", "Dark Diary"], a: 2 },
            { q: "Dans L'Attaque des Titans, quel titan Eren Jäger possède-t-il en premier ?", o: ["Titan Colossal", "Titan Cuirassé", "Titan Assaillant", "Titan Bestial"], a: 2 },
            { q: "Quel est le nom de l'épée d'Ichigo Kurosaki dans Bleach ?", o: ["Zangetsu", "Senbonzakura", "Hyorinmaru", "Benihime"], a: 0 },
            { q: "Dans My Hero Academia, quel est l'Alter d'Izuku Midoriya ?", o: ["All For One", "One For All", "Explosion", "Half-Cold Half-Hot"], a: 1 },
            { q: "Qui est le frère cadet d'Edward Elric dans Fullmetal Alchemist ?", o: ["Roy Mustang", "Alphonse Elric", "Scar", "Greed"], a: 1 },
            { q: "Dans Demon Slayer, quelle est la respiration utilisée par Zenitsu Agatsuma ?", o: ["Respiration de l'Eau", "Respiration de la Flamme", "Respiration de la Foudre", "Respiration de la Bête"], a: 2 },
            { q: "Quel personnage de Hunter x Hunter utilise une chaîne avec des pouvoirs liés aux araignées ?", o: ["Gon", "Killua", "Kurapika", "Leorio"], a: 2 },
            { q: "Dans Jujutsu Kaisen, quel objet maudit Yuji Itadori avale-t-il ?", o: ["Un œil de démon", "Un doigt de Ryomen Sukuna", "Une dent de dragon", "Un cœur maudit"], a: 1 },
            { q: "Comment s'appelle le protagoniste de One Punch Man ?", o: ["Genos", "Saitama", "King", "Bang"], a: 1 },
            { q: "Dans Fairy Tail, quelle magie utilise Natsu Dragneel ?", o: ["Chasseur de Dragon de Feu", "Magie des Constellations", "Magie de Glace", "Magie des Armures"], a: 0 },
            { q: "Qui est l'auteur du manga Berserk ?", o: ["Eiichiro Oda", "Kentaro Miura", "Masashi Kishimoto", "Akira Toriyama"], a: 1 },
            { q: "Dans Tokyo Ghoul, que mangent les goules pour survivre ?", o: ["Des animaux crus", "De la chair humaine", "Des âmes", "Des pierres précieuses"], a: 1 },
            { q: "Quel est le nom du Titan de Bertholdt Hoover ?", o: ["Titan Cuirassé", "Titan Féminin", "Titan Colossal", "Titan Charrette"], a: 2 },
            { q: "Dans Sword Art Online, quel est le pseudonyme du héros Kazuto Kirigaya ?", o: ["Asuna", "Klein", "Kirito", "Agil"], a: 2 },
            { q: "Combien de Dragon Balls faut-il réunir pour invoquer Shenron ?", o: ["5", "6", "7", "9"], a: 2 },
            { q: "Quel membre de l'équipage de Luffy est le navigateur ?", o: ["Robin", "Nami", "Usopp", "Sanji"], a: 1 },
            { q: "Dans Chainsaw Man, comment s'appelle le démon-tronçonneuse qui fusionne avec Denji ?", o: ["Pochita", "Power", "Makima", "Aki"], a: 0 },
            { q: "Quel est le clan de Sasuke dans Naruto ?", o: ["Hyûga", "Uchiwa", "Nara", "Akimichi"], a: 1 },
            { q: "Dans JoJo's Bizarre Adventure, quel est le Stand de Jotaro Kujo ?", o: ["The World", "Star Platinum", "Crazy Diamond", "Gold Experience"], a: 1 },
            { q: "Quel sport est au cœur du manga Haikyuu!! ?", o: ["Basketball", "Football", "Volleyball", "Tennis"], a: 2 },
            { q: "Dans Black Clover, quelle magie possède Asta ?", o: ["Magie du Vent", "Magie de Feu", "Anti-Magie", "Magie de Lumière"], a: 2 },
            { q: "Qui a créé le manga Dragon Ball ?", o: ["Yoshihiro Togashi", "Akira Toriyama", "Tite Kubo", "Takehiko Inoue"], a: 1 },
            { q: "Dans Saint Seiya (Les Chevaliers du Zodiaque), quelle est la constellation de Seiya ?", o: ["Le Dragon", "Le Cygne", "Pégase", "Andromède"], a: 2 },
            { q: "Quel est le nom du Shinigami qui accompagne Light Yagami ?", o: ["Rem", "Ryuk", "Gelus", "Sidoh"], a: 1 },
            { q: "Dans Spy x Family, quel pouvoir possède la petite Anya ?", o: ["Super force", "Télépathie", "Invisibilité", "Téléportation"], a: 1 },
            { q: "Quelle est la prime initiale de Luffy dans One Piece ?", o: ["10 millions", "30 millions", "100 millions", "500 millions"], a: 1 },
            { q: "Dans Dr. Stone, que se passe-t-il à toute l'humanité au début de l'histoire ?", o: ["Elle est pétrifiée en pierre", "Elle perd la mémoire", "Elle est téléportée", "Elle devient invisible"], a: 0 }
        ]
    },
    "Capitales des pays": {
        icon: "🌍",
        questions: [
            { q: "Quelle est la capitale de l'Australie ?", o: ["Sydney", "Melbourne", "Canberra", "Perth"], a: 2 },
            { q: "Quelle est la capitale du Canada ?", o: ["Toronto", "Vancouver", "Montréal", "Ottawa"], a: 3 },
            { q: "Quelle est la capitale du Brésil ?", o: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], a: 2 },
            { q: "Quelle est la capitale du Japon ?", o: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], a: 2 },
            { q: "Quelle est la capitale de la Suisse ?", o: ["Genève", "Zurich", "Berne", "Bâle"], a: 2 },
            { q: "Quelle est la capitale de la Turquie ?", o: ["Istanbul", "Ankara", "Izmir", "Antalya"], a: 1 },
            { q: "Quelle est la capitale du Maroc ?", o: ["Casablanca", "Marrakech", "Rabat", "Fès"], a: 2 },
            { q: "Quelle est la capitale de la Côte d'Ivoire (capitale politique) ?", o: ["Abidjan", "Yamoussoukro", "Bouaké", "San-Pédro"], a: 1 },
            { q: "Quelle est la capitale de l'Inde ?", o: ["Mumbai", "New Delhi", "Calcutta", "Bangalore"], a: 1 },
            { q: "Quelle est la capitale de l'Égypte ?", o: ["Alexandrie", "Louxor", "Le Caire", "Gizeh"], a: 2 },
            { q: "Quelle est la capitale de la Norvège ?", o: ["Stockholm", "Helsinki", "Oslo", "Copenhague"], a: 2 },
            { q: "Quelle est la capitale de l'Argentine ?", o: ["Santiago", "Buenos Aires", "Montevideo", "Lima"], a: 1 },
            { q: "Quelle est la capitale de la Corée du Sud ?", o: ["Busan", "Pyongyang", "Séoul", "Incheon"], a: 2 },
            { q: "Quelle est la capitale de la Nouvelle-Zélande ?", o: ["Auckland", "Wellington", "Christchurch", "Queenstown"], a: 1 },
            { q: "Quelle est la capitale de l'Espagne ?", o: ["Barcelone", "Séville", "Madrid", "Valence"], a: 2 },
            { q: "Quelle est la capitale du Kenya ?", o: ["Mombasa", "Nairobi", "Kampala", "Dar es Salam"], a: 1 },
            { q: "Quelle est la capitale de la Pologne ?", o: ["Cracovie", "Varsovie", "Gdansk", "Wroclaw"], a: 1 },
            { q: "Quelle est la capitale du Pérou ?", o: ["Cusco", "Bogota", "Quito", "Lima"], a: 3 },
            { q: "Quelle est la capitale de la Thaïlande ?", o: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"], a: 2 },
            { q: "Quelle est la capitale de l'Islande ?", o: ["Reykjavik", "Oslo", "Dublin", "Tallinn"], a: 0 },
            { q: "Quelle est la capitale de la Grèce ?", o: ["Sparte", "Thessalonique", "Athènes", "Corinthe"], a: 2 },
            { q: "Quelle est la capitale du Sénégal ?", o: ["Saint-Louis", "Dakar", "Touba", "Thiès"], a: 1 },
            { q: "Quelle est la capitale du Mexique ?", o: ["Cancún", "Guadalajara", "Monterrey", "Mexico"], a: 3 },
            { q: "Quelle est la capitale de la Suède ?", o: ["Oslo", "Stockholm", "Göteborg", "Malmö"], a: 1 },
            { q: "Quelle est la capitale du Vietnam ?", o: ["Hô Chi Minh-Ville", "Hanoï", "Da Nang", "Hué"], a: 1 },
            { q: "Quelle est la capitale de la Colombie ?", o: ["Medellín", "Cali", "Bogota", "Carthagène"], a: 2 },
            { q: "Quelle est la capitale de la Hongrie ?", o: ["Bucarest", "Prague", "Budapest", "Sofia"], a: 2 },
            { q: "Quelle est la capitale de l'Irlande ?", o: ["Belfast", "Dublin", "Cork", "Galway"], a: 1 },
            { q: "Quelle est la capitale de la Chine ?", o: ["Shanghai", "Pékin (Beijing)", "Hong Kong", "Canton"], a: 1 },
            { q: "Quelle est la capitale du Portugal ?", o: ["Porto", "Faro", "Lisbonne", "Coimbra"], a: 2 }
        ]
    },
    "Animaux": {
        icon: "🦁",
        questions: [
            { q: "Quel est l'animal terrestre le plus rapide au monde ?", o: ["Le lion", "Le guépard", "L'antilope", "Le cheval"], a: 1 },
            { q: "Combien de cœurs possède une pieuvre ?", o: ["1", "2", "3", "4"], a: 2 },
            { q: "Quel est le plus grand animal vivant sur Terre ?", o: ["L'éléphant d'Afrique", "La baleine bleue", "Le requin-baleine", "Le calmar géant"], a: 1 },
            { q: "Quel oiseau est capable de voler à reculons ?", o: ["L'aigle", "Le colibri", "Le faucon", "Le martin-pêcheur"], a: 1 },
            { q: "De quelle couleur est la peau d'un ours polaire sous sa fourrure blanche ?", o: ["Rose", "Blanche", "Noire", "Grise"], a: 2 },
            { q: "Quel mammifère est capable de voler ?", o: ["L'écureuil volant", "La chauve-souris", "Le lémurien", "Le koala"], a: 1 },
            { q: "Combien de pattes possède une araignée ?", o: ["6", "8", "10", "12"], a: 1 },
            { q: "Quel animal dort debout ?", o: ["Le chien", "Le cheval", "Le chat", "Le lapin"], a: 1 },
            { q: "Quel est le seul continent où l'on ne trouve pas de serpents sauvages ?", o: ["L'Europe", "L'Antarctique", "L'Océanie", "L'Amérique du Sud"], a: 1 },
            { q: "Comment appelle-t-on le petit du kangourou ?", o: ["Le faon", "Le joey", "Le louveteau", "Le marcassin"], a: 1 },
            { q: "Quel animal a la langue la plus longue par rapport à sa taille ?", o: ["La girafe", "Le caméléon", "Le fourmilier", "La grenouille"], a: 1 },
            { q: "Quel poisson n'a pas d'arêtes mais un squelette de cartilage ?", o: ["Le saumon", "Le requin", "Le thon", "La truite"], a: 1 },
            { q: "Combien d'estomacs possède une vache ?", o: ["1", "2", "3", "4"], a: 3 },
            { q: "Quel est l'oiseau le plus grand et le plus lourd du monde ?", o: ["L'albatros", "L'autruche", "Le condor", "Le pélican"], a: 1 },
            { q: "Quel animal est surnommé le « roi de la jungle » ?", o: ["Le tigre", "Le lion", "Le gorille", "Le léopard"], a: 1 },
            { q: "De quoi se nourrit principalement le panda géant ?", o: ["D'eucalyptus", "De bambou", "De poisson", "De baies"], a: 1 },
            { q: "Quel animal produit le lait rose ?", o: ["Le flamant rose", "L'hippopotame", "Le cochon", "Aucun animal"], a: 3 },
            { q: "Quel insecte produit du miel ?", o: ["La guêpe", "Le frelon", "L'abeille", "Le bourdon"], a: 2 },
            { q: "Combien d'années peut vivre une tortue géante des Galápagos ?", o: ["30 ans", "60 ans", "Plus de 100 ans", "20 ans"], a: 2 },
            { q: "Quel animal change de couleur pour se camoufler et communiquer ?", o: ["L'iguane", "Le caméléon", "Le gecko", "Le varan"], a: 1 },
            { q: "Comment s'appelle le cri du renard ?", o: ["Le glapissement", "Le mugissement", "Le barrissement", "Le hennissement"], a: 0 },
            { q: "Quel animal marin porte les œufs dans une poche ventrale (chez le mâle) ?", o: ["Le dauphin", "L'hippocampe", "La raie", "L'étoile de mer"], a: 1 },
            { q: "Quel est le serpent venimeux le plus long du monde ?", o: ["La vipère", "Le cobra royal", "Le mamba noir", "Le serpent à sonnette"], a: 1 },
            { q: "Quelle est la vitesse maximale d'un escargot environ ?", o: ["0,05 km/h", "1 km/h", "5 km/h", "10 km/h"], a: 0 },
            { q: "Quel primate est génétiquement le plus proche de l'être humain ?", o: ["Le gorille", "L'orang-outan", "Le chimpanzé", "Le babouin"], a: 2 },
            { q: "Où vit naturellement le manchot ?", o: ["Uniquement au Pôle Nord", "Dans l'hémisphère Sud", "En Europe", "En Asie"], a: 1 },
            { q: "Combien d'yeux possède une abeille ?", o: ["2", "3", "5", "8"], a: 2 },
            { q: "Quel mammifère pond des œufs ?", o: ["Le tatou", "L'ornithorynque", "Le paresseux", "Le castor"], a: 1 },
            { q: "Quel animal a les yeux plus gros que son cerveau ?", o: ["Le hibou", "L'autruche", "La baleine", "Le chat"], a: 1 },
            { q: "Comment appelle-t-on un groupe de loups ?", o: ["Un troupeau", "Une meute", "Une harde", "Un essaim"], a: 1 }
        ]
    },
    "Technologie": {
        icon: "💻",
        questions: [
            { q: "Que signifie l'acronyme CPU en informatique ?", o: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Core Program Utility"], a: 0 },
            { q: "Qui a cofondé Apple avec Steve Jobs et Ronald Wayne ?", o: ["Bill Gates", "Steve Wozniak", "Elon Musk", "Mark Zuckerberg"], a: 1 },
            { q: "Quel langage est principalement utilisé pour styliser les pages web ?", o: ["HTML", "Python", "CSS", "SQL"], a: 2 },
            { q: "Que signifie HTTP ?", o: ["HyperText Transfer Protocol", "High Tech Transmission Process", "Hyperlink Text Transfer Program", "Host Transfer Text Protocol"], a: 0 },
            { q: "Combien de bits composent un octet (byte) ?", o: ["4", "8", "16", "32"], a: 1 },
            { q: "Quel système d'exploitation utilise un manchot nommé Tux comme mascotte ?", o: ["Windows", "macOS", "Linux", "Android"], a: 2 },
            { q: "En quelle année le premier iPhone a-t-il été lancé ?", o: ["2005", "2007", "2009", "2010"], a: 1 },
            { q: "Que signifie RAM ?", o: ["Read Access Memory", "Random Access Memory", "Run All Memory", "Rapid Action Module"], a: 1 },
            { q: "Quelle entreprise a développé le système d'exploitation Android ?", o: ["Apple", "Microsoft", "Google", "Samsung"], a: 2 },
            { q: "Quel protocole sécurise la navigation web avec un cadenas (HTTPS) ?", o: ["FTP", "TLS / SSL", "SMTP", "DHCP"], a: 1 },
            { q: "Qui est considéré comme l'inventeur du World Wide Web (WWW) ?", o: ["Alan Turing", "Tim Berners-Lee", "Vint Cerf", "Linus Torvalds"], a: 1 },
            { q: "Quel composant stocke les données de manière permanente même sans électricité ?", o: ["La RAM", "Le processeur", "Le SSD / Disque dur", "La carte mère"], a: 2 },
            { q: "Que signifie l'acronyme IA ?", o: ["Informatique Avancée", "Intelligence Artificielle", "Interface Automatique", "Internet Actif"], a: 1 },
            { q: "Quel langage de programmation porte le nom d'une troupe d'humoristes britanniques ?", o: ["Java", "Ruby", "Python", "C++"], a: 2 },
            { q: "Quelle technologie permet de payer sans contact avec un smartphone ?", o: ["GPS", "NFC", "VGA", "HDMI"], a: 1 },
            { q: "Quel est le nom du supercalculateur d'IBM qui a battu Garry Kasparov aux échecs en 1997 ?", o: ["Watson", "Deep Blue", "AlphaGo", "Hal 9000"], a: 1 },
            { q: "Que signifie USB ?", o: ["Universal Serial Bus", "United System Base", "Ultra Speed Bandwidth", "Universal Storage Block"], a: 0 },
            { q: "Quelle base numérique utilise uniquement les chiffres 0 et 1 ?", o: ["Décimale", "Hexadécimale", "Binaire", "Octale"], a: 2 },
            { q: "Quel réseau social a été fondé par Mark Zuckerberg en 2004 ?", o: ["Twitter", "Instagram", "Facebook", "LinkedIn"], a: 2 },
            { q: "Que signifie VPN ?", o: ["Virtual Private Network", "Very Protected Net", "Visual Protocol Node", "Virtual Public Network"], a: 0 },
            { q: "Quel type d'écran offre des noirs parfaits car chaque pixel émet sa propre lumière ?", o: ["LCD", "OLED", "TN", "Cathodique"], a: 1 },
            { q: "Quelle entreprise fabrique les cartes graphiques GeForce ?", o: ["AMD", "Intel", "NVIDIA", "Qualcomm"], a: 2 },
            { q: "Quel raccourci clavier permet de copier un élément sous Windows/Linux ?", o: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"], a: 2 },
            { q: "Qu'est-ce que le « phishing » (hameçonnage) ?", o: ["Un virus matériel", "Une arnaque visant à voler des identifiants", "Un logiciel antivirus", "Une mise à jour système"], a: 1 },
            { q: "Quel format d'image permet de conserver la transparence ?", o: ["JPEG", "PNG", "BMP", "TXT"], a: 1 },
            { q: "Combien de mégaoctets (Mo) y a-t-il approximativement dans 1 gigaoctet (Go) ?", o: ["100", "512", "1000 / 1024", "10 000"], a: 2 },
            { q: "Quel outil de gestion de versions a été créé par Linus Torvalds ?", o: ["Docker", "Git", "Kubernetes", "Jenkins"], a: 1 },
            { q: "Que signifie Wi-Fi à l'origine (nom commercial) ?", o: ["Wireless Fidelity", "Wide Fiber", "Web Finder", "Wireless File"], a: 0 },
            { q: "Quel est le nom de l'assistant vocal d'Amazon ?", o: ["Siri", "Cortana", "Alexa", "Bixby"], a: 2 },
            { q: "Quelle unité mesure la fréquence d'un processeur ?", o: ["Octet", "Hertz (GHz)", "Watt", "Pixel"], a: 1 }
        ]
    },
    "Nature": {
        icon: "🌿",
        questions: [
            { q: "Quel est le plus long fleuve du monde ?", o: ["La Seine", "L'Amazone / Le Nil", "Le Danube", "Le Mississippi"], a: 1 },
            { q: "Quel gaz les plantes absorbent-elles lors de la photosynthèse ?", o: ["L'oxygène", "L'azote", "Le dioxyde de carbone (CO2)", "L'hélium"], a: 2 },
            { q: "Quelle est la plus haute montagne du monde au-dessus du niveau de la mer ?", o: ["Le K2", "Le Mont Blanc", "L'Everest", "Le Kilimandjaro"], a: 2 },
            { q: "Quel est le plus grand océan de la planète ?", o: ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"], a: 2 },
            { q: "Quel pigment donne aux feuilles leur couleur verte ?", o: ["La mélanine", "La chlorophylle", "Le carotène", "L'hémoglobine"], a: 1 },
            { q: "Quel est le plus grand désert chaud du monde ?", o: ["Le désert de Gobi", "Le Sahara", "Le désert d'Atacama", "Le Kalahari"], a: 1 },
            { q: "Quelle roche liquide sort d'un volcan en éruption ?", o: ["Le granite", "La lave", "Le basalte froid", "Le quartz"], a: 1 },
            { q: "Combien de couleurs compte traditionnellement un arc-en-ciel ?", o: ["5", "6", "7", "8"], a: 2 },
            { q: "Quel arbre produit des glands ?", o: ["Le pin", "Le chêne", "Le bouleau", "L'érable"], a: 1 },
            { q: "Quelle est la planète la plus proche du Soleil ?", o: ["Vénus", "Mars", "Mercure", "La Terre"], a: 2 },
            { q: "Comment appelle-t-on le passage de l'eau de l'état liquide à l'état gazeux ?", o: ["La condensation", "L'évaporation", "La solidification", "La fusion"], a: 1 },
            { q: "Dans quel pays se trouve la majeure partie de la forêt amazonienne ?", o: ["Le Pérou", "La Colombie", "Le Brésil", "Le Venezuela"], a: 2 },
            { q: "Quel minéral naturel est le plus dur sur l'échelle de Mohs ?", o: ["L'or", "Le quartz", "Le diamant", "Le fer"], a: 2 },
            { q: "Quel phénomène naturel se mesure avec l'échelle de Richter ?", o: ["Les ouragans", "Les tremblements de terre", "Les températures", "Les marées"], a: 1 },
            { q: "Quelle couche de l'atmosphère nous protège des rayons ultraviolets du Soleil ?", o: ["La couche d'ozone", "La lithosphère", "L'hydrosphère", "La croûte terrestre"], a: 0 },
            { q: "Quel est le métal le plus abondant dans la croûte terrestre ?", o: ["L'or", "L'aluminium", "Le cuivre", "Le plomb"], a: 1 },
            { q: "Comment appelle-t-on une plante qui vit plus de deux ans ?", o: ["Annuelle", "Bisannuelle", "Vivace", "Éphémère"], a: 2 },
            { q: "Quelle mer est si salée que l'on y flotte sans effort ?", o: ["La mer Rouge", "La mer Morte", "La mer Noire", "La mer Baltique"], a: 1 },
            { q: "Quel phénomène provoque les marées sur Terre ?", o: ["Le vent", "L'attraction gravitationnelle de la Lune et du Soleil", "La rotation des volcans", "Les courants chauds"], a: 1 },
            { q: "Quelle est la fleur nationale du Japon au printemps ?", o: ["La rose", "La fleur de cerisier (Sakura)", "La tulipe", "Le tournesol"], a: 1 },
            { q: "Quel type de nuage est associé aux orages violents ?", o: ["Cirrus", "Stratus", "Cumulonimbus", "Brouillard"], a: 2 },
            { q: "Quel pourcentage de la surface de la Terre est recouvert d'eau ?", o: ["Environ 30%", "Environ 50%", "Environ 71%", "Environ 90%"], a: 2 },
            { q: "Quel arbre est l'emblème du Canada ?", o: ["Le sapin", "L'érable", "Le séquoia", "Le palmier"], a: 1 },
            { q: "Comment appelle-t-on un volcan qui n'est plus entré en éruption depuis des milliers d'années ?", o: ["Actif", "Éteint", "En éruption", "Sous-marin"], a: 1 },
            { q: "Quelle est la principale cause des saisons sur Terre ?", o: ["La distance Terre-Soleil", "L'inclinaison de l'axe de rotation de la Terre", "Les phases de la Lune", "Les marées"], a: 1 },
            { q: "Quel est l'arbre le plus haut du monde ?", o: ["Le baobab", "Le séquoia géant / à feuilles d'if", "Le chêne blanc", "L'eucalyptus"], a: 1 },
            { q: "Comment appelle-t-on la science qui étudie les champignons ?", o: ["La botanique", "La mycologie", "La zoologie", "La géologie"], a: 1 },
            { q: "Quel gaz compose environ 78 % de l'atmosphère terrestre ?", o: ["L'oxygène", "L'azote (diazote)", "Le dioxyde de carbone", "L'hydrogène"], a: 1 },
            { q: "Où se trouve la Grande Barrière de Corail ?", o: ["En Afrique du Sud", "En Australie", "Au Brésil", "En Inde"], a: 1 },
            { q: "Comment s'appelle le point de la surface terrestre situé juste au-dessus du foyer d'un séisme ?", o: ["Le cratère", "L'épicentre", "Le méridien", "Le plateau"], a: 1 }
        ]
    },
    "Sport": {
        icon: "⚽",
        questions: [
            { q: "Combien de joueurs composent une équipe de football sur le terrain ?", o: ["9", "10", "11", "12"], a: 2 },
            { q: "Tous les combien d'années ont lieu les Jeux Olympiques d'été ?", o: ["2 ans", "3 ans", "4 ans", "5 ans"], a: 2 },
            { q: "Dans quel sport utilise-t-on un volant ?", o: ["Le tennis", "Le badminton", "Le squash", "Le ping-pong"], a: 1 },
            { q: "Quel pays a remporté le plus de Coupes du Monde de football ?", o: ["L'Allemagne", "L'Argentine", "Le Brésil", "La France"], a: 2 },
            { q: "Quelle est la distance officielle d'un marathon ?", o: ["21,1 km", "42,195 km", "50 km", "10 km"], a: 1 },
            { q: "Combien de points vaut un lancer franc au basketball ?", o: ["1 point", "2 points", "3 points", "4 points"], a: 0 },
            { q: "Quel joueur de tennis détient le record de titres à Roland-Garros ?", o: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Carlos Alcaraz"], a: 2 },
            { q: "Dans quel sport s'est illustré Usain Bolt ?", o: ["La natation", "Le sprint (athlétisme)", "Le cyclisme", "La boxe"], a: 1 },
            { q: "Combien de joueurs y a-t-il dans une équipe de rugby à XV ?", o: ["11", "13", "15", "7"], a: 2 },
            { q: "Quelle couleur de maillot porte le leader du classement général du Tour de France ?", o: ["Vert", "Jaune", "Blanc", "À pois"], a: 1 },
            { q: "Dans quel sport utilise-t-on les termes « strike » et « spare » ?", o: ["Le golf", "Le bowling", "Le baseball", "Le billard"], a: 1 },
            { q: "Combien de sets faut-il gagner pour remporter un match masculin en Grand Chelem au tennis ?", o: ["2", "3", "4", "5"], a: 1 },
            { q: "Quel nageur détient le record absolu de médailles olympiques ?", o: ["Ian Thorpe", "Michael Phelps", "Léon Marchand", "Caeleb Dressel"], a: 1 },
            { q: "Quelle est la longueur d'une piscine olympique ?", o: ["25 mètres", "50 mètres", "75 mètres", "100 mètres"], a: 1 },
            { q: "Dans quel sport Michael Jordan est-il une légende ?", o: ["Football américain", "Baseball", "Basketball", "Hockey sur glace"], a: 2 },
            { q: "Combien de joueurs par équipe sont sur le terrain au volleyball ?", o: ["5", "6", "7", "8"], a: 1 },
            { q: "Que signifie K.O. en boxe ?", o: ["Keep Out", "Knock Out", "Kick Off", "King Order"], a: 1 },
            { q: "Quel pays a remporté la Coupe du Monde de football 2022 ?", o: ["La France", "Le Brésil", "L'Argentine", "La Croatie"], a: 2 },
            { q: "Dans quel sport utilise-t-on un palet (puck) ?", o: ["Le curling", "Le hockey sur glace", "Le polo", "Le cricket"], a: 1 },
            { q: "Combien d'anneaux figurent sur le drapeau olympique ?", o: ["4", "5", "6", "7"], a: 1 },
            { q: "Quel club de football a remporté le plus de Ligues des Champions de l'UEFA ?", o: ["FC Barcelone", "AC Milan", "Real Madrid", "Bayern Munich"], a: 2 },
            { q: "Quelle est la durée réglementaire d'un match de football (hors prolongations) ?", o: ["60 minutes", "80 minutes", "90 minutes", "100 minutes"], a: 2 },
            { q: "Dans quel art martial porte-t-on un judogi et cherche-t-on à marquer un « ippon » ?", o: ["Karaté", "Taekwondo", "Judo", "Aïkido"], a: 2 },
            { q: "Combien de trous comporte un parcours standard de golf ?", o: ["9", "12", "18", "24"], a: 2 },
            { q: "Quel pilote de Formule 1 a remporté 7 titres mondiaux avec Ferrari et Benetton ?", o: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Max Verstappen"], a: 1 },
            { q: "Quel pays a remporté la Coupe d'Afrique des Nations (CAN) 2023 (jouée en 2024) ?", o: ["Nigeria", "Sénégal", "Côte d'Ivoire", "Maroc"], a: 2 },
            { q: "Dans quel sport tire-t-on avec un fleuret, une épée ou un sabre ?", o: ["Le tir à l'arc", "L'escrime", "Le pentathlon", "Le kendo"], a: 1 },
            { q: "Combien de points vaut un essai au rugby à XV ?", o: ["3 points", "5 points", "6 points", "7 points"], a: 1 },
            { q: "Quelle compétition de tennis se joue sur gazon à Londres ?", o: ["US Open", "Open d'Australie", "Wimbledon", "Roland-Garros"], a: 2 },
            { q: "Dans quel sport le terme « albatros » signifie-t-il jouer 3 coups sous le par ?", o: ["Le tennis", "Le golf", "Le snooker", "Le tir"], a: 1 }
        ]
    },
    "Marques de voitures": {
        icon: "🚗",
        questions: [
            { q: "De quel pays est originaire la marque Ferrari ?", o: ["France", "Allemagne", "Italie", "Espagne"], a: 2 },
            { q: "Combien d'anneaux composent le logo de la marque Audi ?", o: ["3", "4", "5", "6"], a: 1 },
            { q: "Quel constructeur produit le modèle « Mustang » ?", o: ["Chevrolet", "Ford", "Dodge", "Cadillac"], a: 1 },
            { q: "De quel pays vient la marque Toyota ?", o: ["Corée du Sud", "Chine", "Japon", "États-Unis"], a: 2 },
            { q: "Quel animal figure sur le logo de Porsche ?", o: ["Un taureau", "Un cheval cabré", "Un lion", "Un aigle"], a: 1 },
            { q: "Quelle marque est célèbre pour ses voitures électriques Model S, Model 3 et Model Y ?", o: ["Rivian", "Tesla", "Lucid", "BYD"], a: 1 },
            { q: "Quel constructeur français a pour emblème un lion ?", o: ["Renault", "Citroën", "Peugeot", "Bugatti"], a: 2 },
            { q: "De quel pays est originaire la marque Volvo ?", o: ["Norvège", "Suède", "Danemark", "Finlande"], a: 1 },
            { q: "Que signifie l'acronyme BMW ?", o: ["Berlin Motor Works", "Bayerische Motoren Werke", "Bavarian Machine World", "Best Motor Way"], a: 1 },
            { q: "Quel animal orne le logo de Lamborghini ?", o: ["Un cheval", "Un taureau", "Un serpent", "Un jaguar"], a: 1 },
            { q: "De quel pays vient le constructeur Hyundai ?", o: ["Japon", "Chine", "Corée du Sud", "Taïwan"], a: 2 },
            { q: "Quelle marque automobile britannique produit les modèles Phantom et Ghost ?", o: ["Bentley", "Aston Martin", "Rolls-Royce", "Jaguar"], a: 2 },
            { q: "Quel symbole compose le logo de Citroën ?", o: ["Un losange", "Un double chevron", "Une étoile", "Un trident"], a: 1 },
            { q: "Quelle marque allemande signifie littéralement « voiture du peuple » ?", o: ["Opel", "Mercedes-Benz", "Volkswagen", "Porsche"], a: 2 },
            { q: "De quel pays est originaire la marque Dacia ?", o: ["France", "Roumanie", "Pologne", "Hongrie"], a: 1 },
            { q: "Quel constructeur produit la célèbre sportive « 911 » ?", o: ["Ferrari", "Porsche", "Maserati", "McLaren"], a: 1 },
            { q: "Quel emblème porte la marque Maserati ?", o: ["Une étoile à 3 branches", "Un trident", "Une couronne", "Un éclair"], a: 1 },
            { q: "Quelle marque automobile est associée à James Bond (notamment le modèle DB5) ?", o: ["Lotus", "Aston Martin", "Land Rover", "Mini"], a: 1 },
            { q: "De quel pays vient la marque Skoda ?", o: ["République tchèque", "Autriche", "Slovaquie", "Allemagne"], a: 0 },
            { q: "Quel constructeur japonais fabrique la Civic et l'Accord ?", o: ["Nissan", "Mazda", "Honda", "Subaru"], a: 2 },
            { q: "Que représente l'étoile à trois branches de Mercedes-Benz ?", o: ["Trois frères fondateurs", "La terre, la mer et les airs", "Trois villes allemandes", "Trois victoires en course"], a: 1 },
            { q: "Quelle marque italienne produit les modèles Panda, 500 et Punto ?", o: ["Alfa Romeo", "Lancia", "Fiat", "Pagani"], a: 2 },
            { q: "De quel pays est originaire la marque Seat ?", o: ["Italie", "Portugal", "Espagne", "Mexique"], a: 2 },
            { q: "Quel constructeur produit le célèbre 4x4 « Wrangler » ?", o: ["Land Rover", "Jeep", "Hummer", "Suzuki"], a: 1 },
            { q: "Quelle est la marque de luxe du groupe Toyota ?", o: ["Infiniti", "Acura", "Lexus", "Genesis"], a: 2 },
            { q: "Dans quelle ville française la marque Bugatti a-t-elle été fondée ?", o: ["Paris", "Lyon", "Molsheim", "Sochaux"], a: 2 },
            { q: "Quel constructeur produit la « Clio » et la « Mégane » ?", o: ["Peugeot", "Renault", "Citroën", "DS"], a: 1 },
            { q: "De quel pays vient la marque Kia ?", o: ["Japon", "Corée du Sud", "Chine", "Malaisie"], a: 1 },
            { q: "Quel constructeur britannique est spécialisé dans les véhicules tout-terrain comme le Defender ?", o: ["McLaren", "Land Rover", "Vauxhall", "MG"], a: 1 },
            { q: "Quelle marque américaine a pour logo un nœud papillon doré ?", o: ["Ford", "Chevrolet", "Dodge", "Chrysler"], a: 1 }
        ]
    }
};

// Variables d'état du jeu
let currentCategory = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 15;
const TIME_PER_QUESTION = 15;

// Éléments du DOM
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const categoriesContainer = document.getElementById("categories-container");
const categoryTitle = document.getElementById("category-title");
const questionCounter = document.getElementById("question-counter");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score-display");
const progressFill = document.getElementById("progress-fill");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const resultCategory = document.getElementById("result-category");
const resultMessage = document.getElementById("result-message");

// Initialisation de la page d'accueil
function initHome() {
    categoriesContainer.innerHTML = "";
    Object.keys(quizData).forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "category-card";
        btn.innerHTML = `
            <span class="icon">${quizData[cat].icon}</span>
            <span>${cat}</span>
        `;
        btn.addEventListener("click", () => startQuiz(cat));
        categoriesContainer.appendChild(btn);
    });
}

// Changer d'écran
function showScreen(screen) {
    homeScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    screen.classList.add("active");
}

// Démarrer un quiz
function startQuiz(category) {
    currentCategory = category;
    // Copie des 30 questions de la catégorie
    currentQuestions = [...quizData[category].questions];
    currentQuestionIndex = 0;
    score = 0;

    categoryTitle.textContent = `${quizData[category].icon} ${category}`;
    scoreDisplay.textContent = `Score: 0`;

    showScreen(quizScreen);
    loadQuestion();
}

// Charger une question
function loadQuestion() {
    clearInterval(timerInterval);
    feedbackBox.classList.add("hidden");
    optionsContainer.innerHTML = "";

    const qData = currentQuestions[currentQuestionIndex];
    const total = currentQuestions.length;

    questionCounter.textContent = `${currentQuestionIndex + 1} / ${total}`;
    progressFill.style.width = `${((currentQuestionIndex) / total) * 100}%`;
    questionText.textContent = qData.q;

    // Création des 4 boutons de réponse
    qData.o.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option;
        btn.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });

    startTimer();
}

// Gestion du chronomètre
function startTimer() {
    timeLeft = TIME_PER_QUESTION;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 5) {
        timerDisplay.classList.add("danger");
    } else {
        timerDisplay.classList.remove("danger");
    }
}

// Lorsque le temps est écoulé
function handleTimeOut() {
    const qData = currentQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === qData.a) {
            btn.classList.add("correct");
        }
    });

    feedbackText.textContent = `⏰ Temps écoulé ! La bonne réponse était : ${qData.o[qData.a]}`;
    feedbackBox.classList.remove("hidden");
    updateNextButtonText();
}

// Lorsqu'un utilisateur choisit une réponse
function selectAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const qData = currentQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === qData.a) {
            btn.classList.add("correct");
        } else if (idx === selectedIndex) {
            btn.classList.add("wrong");
        }
    });

    if (selectedIndex === qData.a) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        feedbackText.textContent = "✅ Bonne réponse !";
    } else {
        feedbackText.textContent = `❌ Mauvaise réponse. La bonne réponse était : ${qData.o[qData.a]}`;
    }

    feedbackBox.classList.remove("hidden");
    updateNextButtonText();
}

function updateNextButtonText() {
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = "Voir les résultats 🏆";
    } else {
        nextBtn.textContent = "Question suivante →";
    }
}

// Question suivante ou fin du quiz
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Afficher l'écran final
function showResults() {
    clearInterval(timerInterval);
    progressFill.style.width = "100%";
    showScreen(resultScreen);

    resultCategory.textContent = `Catégorie : ${currentCategory}`;
    finalScore.textContent = score;

    if (score >= 25) {
        resultMessage.textContent = "Incroyable ! Tu es un véritable expert dans ce domaine ! 🌟";
    } else if (score >= 15) {
        resultMessage.textContent = "Bien joué ! Tu as de très bonnes connaissances. 👏";
    } else {
        resultMessage.textContent = "Pas mal, mais tu peux encore t'améliorer ! 💪";
    }
}

// Boutons de navigation
document.getElementById("quit-btn").addEventListener("click", () => {
    clearInterval(timerInterval);
    showScreen(homeScreen);
});

document.getElementById("restart-btn").addEventListener("click", () => {
    startQuiz(currentCategory);
});

document.getElementById("change-cat-btn").addEventListener("click", () => {
    showScreen(homeScreen);
});

// Lancement au chargement de la page
initHome();