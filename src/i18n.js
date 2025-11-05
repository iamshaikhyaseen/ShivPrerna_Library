import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          landingPage: {
            navbar: {
              title: "Shivprerna Library",
              history: "History",
              allBooks: "All_Books",
              rareBooks: "Rare_Books",
              events: "Events",
              management: "Management",
            },
            categories: {
              heading: "Categories",
              novel: "Novel",
              drama: "Drama",
              experienceStatement: "Exp_Statement",
              historical: "Historical",
              religious: "Religious",
              autobiography: "Autobiography",
              poem: "Poem",
              literature: "Literature",
              spiritual: "Spiritual",
              health: "Health",
              story: "Story",
              viewMore: "View more...",
              enrollNow: "Enroll Now",
            },
            laws: {
              law1: "Books are for use",
              law2: "Every reader his/her book",
              law3: "Save the time of the reader",
              law4: "A library is a growing organism",
              law5: "Every book its reader",
              authorName: "Dr. S. R. Ranganathan (1892-1972)",
              authorNote:
                "known as the Father of Library Science in India, formulated the Five Laws of Library Science and developed the Colon Classification system, shaping modern library practices worldwide.",
            },
            counter: {
              books: "Books",
              yearsOfTrust: "Years of Trust",
              readers: "Readers",
            },
            newArrival: {
              title: "New Arrival",
              cards: [
                {
                  bookName: "To Kill a Mockingbird",
                  author: "Author: Harper Lee",
                  description:
                    "Set in the racially segregated American South during the 1930s, To Kill a Mockingbird tells the story of young Scout Finch, her brother Jem, and their father, Atticus Finch, a principled lawyer who defends a Black man falsely accused of a crime. Through Scout's innocent perspective, the novel explores deep themes of justice, empathy, moral courage, and the loss of childhood innocence.",
                },
                {
                  bookName: "1984",
                  author: "Author: George Orwell",
                  description:
                    "George Orwell's 1984 is a chilling portrayal of a totalitarian society ruled by Big Brother, where every action, word, and thought is monitored. The protagonist, Winston Smith, works for the Party but secretly rebels against its oppressive control. The novel warns against the dangers of absolute power, loss of privacy, manipulation of truth, and the destruction of individuality in the name of order.",
                },
                {
                  bookName: "Pride and Prejudice",
                  author: "Author: Jane Austen",
                  description:
                    "A timeless masterpiece, Pride and Prejudice follows the intelligent and independent Elizabeth Bennet as she navigates issues of love, marriage, and social expectations in 19th-century England. Her evolving relationship with the proud yet honorable Mr. Darcy reveals themes of misunderstanding, self-realization, and the triumph of true affection over pride and prejudice.",
                },
              ],
            },
            footer: {
              title: "Shivprerna Library",
              description: "Your trusted place for knowledge and community",
              adminButton: "Admin",
              contact: {
                title: "Contact Us",
                phone: "Phone: 9226127316",
                email: "Email: anspgranthalay@gmail.com",
              },
              address: {
                title: "Address",
                details:
                  "Room no. 403, Navre Residency, Navare Park Rd, near Fire Station, Narayan Nagar, West, Ambernath, Maharashtra – 421505",
              },
              joinUs: {
                title: "Join us",
                facebook: "Facebook",
                whatsapp: "Whatsapp",
              },
              copyright: "© 2025 YS Tech Solution Pvt Ltd",
            },
          },

          historyPage: {
            header: {
              title: "History",
              subHeader: "Where Stories of the Past Inspire the Future",
              description:
                "Though new, our library is dedicated to growing a vibrant community of readers and learners. Explore our journey as we build a space for discovery and connection.",
            },
            cards: [
              {
                id: "card1",
                header: "Hon. Dr. Shrikant Eknath Shinde",
                subHeader: "Member of Parliament",
                description:
                  "We are deeply grateful to the Honorable Minister, whose generous contribution of ₹80 lakhs and unwavering support played a vital role in the establishment of our library. His vision and encouragement continue to inspire our mission of spreading knowledge and learning.",
              },
              {
                id: "card2",
                header: "Prof. Dr. Biswaroop Mehera",
                subHeader: 'Pro Vice-Chancellor -"Visionary"',
                description:
                  "We gratefully acknowledge the vision and dedication of Prof. Dr. Biswaroop Mehera, whose unwavering support and contribution laid the foundation of our library. His belief in knowledge as a guiding light continues to inspire and nurture generations of learners.",
              },
              {
                id: "card3",
                header: "Prof. Shireesh Kedare",
                subHeader: 'Director of IIT Bombay -"Guest"',
                description:
                  "We are deeply grateful to our esteemed Chief Guest, whose generous contribution and unwavering support played a pivotal role in establishing this library. Their vision and commitment have laid the foundation for a space that will nurture knowledge, learning, and growth for generations to come.",
              },
            ],
          },

          rareBooksPage: {
            title: "Rare Books",
            description:
              "Discover timeless treasures from our collection of rare books preserved editions that hold historical, cultural, and literary significance",
            book1: {
              title: "The Catcher in the Rye",
              author: "Author - J.D. Salinger",
              description:
                "Salinger, known for being strict about his book's presentation, allowed his neighbor and friend E. Michael Mitchell to design the only cover featuring an image for his most famous work. The cover has since been widely reproduced on merchandise and is a popular dorm room decoration.",
            },
            book2: {
              title: "To Kill a Mockingbird",
              author: "Author - Harper Lee",
              description:
                "Set in the racially segregated American South during the 1930s, To Kill a Mockingbird tells the story of young Scout Finch, her brother Jem, and their father, Atticus Finch, a principled lawyer who defends a Black man falsely accused of a crime. Through Scout's innocent perspective, the novel explores deep themes of justice, empathy, moral courage, and the loss of childhood innocence.",
            },
            book3: {
              title: "1984",
              author: "Author - George Orwell",
              description:
                "George Orwell's 1984 is a chilling portrayal of a totalitarian society ruled by Big Brother, where every action, word, and thought is monitored. The protagonist, Winston Smith, works for the Party but secretly rebels against its oppressive control. The novel warns against the dangers of absolute power, loss of privacy, manipulation of truth, and the destruction of individuality in the name of order.",
            },
            book4: {
              title: "Pride and Prejudice",
              author: "Author - Jane Austen",
              description:
                "A timeless masterpiece, Pride and Prejudice follows the intelligent and independent Elizabeth Bennet as she navigates issues of love, marriage, and social expectations in 19th-century England. Her evolving relationship with the proud yet honorable Mr. Darcy reveals themes of misunderstanding, self-realization, and the triumph of true affection over pride and prejudice.",
            },
          },
          eventsPage: {
            headerSection: {
              header: "Events",
              subHeader: "Connecting Minds Celebrating Community",
              description:
                "Libraries are more than repositories of books—they are living spaces where minds connect through stories, culture, and knowledge, and where communities come together to celebrate their vibrant diversity and unity.",
            },
            cards: [
              {
                id: "card1",
                description:
                  "The foundation of ShivPrerna Library was a momentous occasion marked by the gracious presence of Dr. Shrikant Eknath Shinde, Hon’ble Member of Parliament, who inaugurated the library. His support and vision for promoting education and reading culture inspired the establishment of this knowledge hub. The event celebrated the beginning of a new chapter in community learning, aimed at providing students and readers with a space to explore, grow, and stay motivated through the power of books.",
              },
              {
                id: "card2",
                description:
                  "ShivPrerna Library had the honor of welcoming renowned Marathi actor Praveen Tarde for a special visit. His presence brought great enthusiasm and inspiration to the members and visitors of the library. During his visit, he interacted with readers, shared his thoughts on the importance of education, culture, and literature, and encouraged the youth to stay connected with books and learning. The event created a memorable and motivating experience for everyone present.",
              },
              {
                id: "card3",
                description:
                  "On the occasion of International Women’s Day, ShivPrerna Library organized a special event dedicated to empowering young girls through education. School girls from the local community were invited to the library, where they participated in engaging discussions and activities highlighting the importance of learning and personal growth. The event aimed to inspire confidence, nurture curiosity, and motivate these young students to pursue their dreams through the power of knowledge.",
              },
              {
                id: "card4",
                description:
                  "On 5th June 2025, the library celebrated World Environment Day Green Reading Session. The purpose was to engage readers with books on ecology, conservation, and sustainable practices, while also arranging a tree-plantation activity in the library premises.",
              },
            ],
            subHeader: {
              header: "Stay Updated With Our Events!",
              subHeader:
                "Don't miss out on exciting library programs, reading circles, and cultural events.",
              description:
                "Join our WhatsApp Community today and be the first to know about upcoming events, reminders, and exclusive updates.",
            },
          },

          managementPage: {
            headerSection: {
              header: "Managing Resources\nEmpowering Readers",
              description:
                "Effectively managing our resources to provide readers with access, knowledge, and opportunities to grow.",
            },
            cards: [
              {
                name: "Mrs. Tapasya Neve",
                designation: "Chief Librarian",
                description:
                  "We sincerely thank our management for their constant support and guidance in running the library smoothly. Their valuable contribution and commitment play a vital role in creating a welcoming space for readers and learners.",
              },
              { name: "Smt. Meenakshi Sen", designation: "Chief Librarian" },
              { name: "Mrs. Jayshree Patil", designation: "Receptionist" },
              { name: "Shri Mohan Das", designation: "Member" },
            ],
            subHeader: {
              name: "Mr. Arjun Verma",
              designation: "Helper",
            },
          },

          enrollNowPage: {
            headerSection: {
              header: "Enroll Now",
              description:
                "Enroll now to become a valued member of our library and gain access to a vast collection of books, digital resources, and learning programs.",
            },
            details: [
              {
                header: "Getting started is simple!",
                description:
                  "1. Just visit the library and request your Library ID Card.\n2. Membership comes with a daily fee of only ₹10.\nNote: Monday-Sunday 9.30Am to 9.00Pm",
              },
              {
                header: "Book Rent Charges!",
                description:
                  "Monthly Plan: ₹100 per Month\nYearly Plan: ₹1000 per year\nNote: Monday-Sunday 9.30Am to 9.00Pm\nSecurity Deposit: ₹500",
              },
            ],
            subHeader: {
              title: "Reviews",
            },
            reviews: [
              {
                feedback:
                  "A well-organized library with a wide range of books and helpful staff. Perfect place for both study and leisure reading.",
                name: "- Ananya Mehta, B.A. English Literature Student",
              },
              {
                feedback:
                  "The membership plans are affordable, and the collection is updated regularly. Highly recommended for students and book lovers.",
                name: "- Rahul Verma, Preparing for UPSC Exams",
              },
              {
                feedback:
                  "Quiet, clean, and resourceful. This library creates the perfect environment for focused learning.",
                name: "- Sneha Kulkarni, M.Sc. Computer Science",
              },
              {
                feedback:
                  "From novels to reference materials, the variety here is impressive. The reading programs and events make it even more engaging.",
                name: "- Arjun Deshmukh, MBA Pursuing",
              },
            ],
            tagLine: {
              title:
                "Join us today and open the door to knowledge, culture, and community.",
            },
          },

          AllBooks: {
            title: "Book List",
            category: "All Categories",
            BookId: "Book_ID",
            BookTitle: "Book Title",
            Author: "Author",
            Category: "Category",
            RackNo:"Rack_No",
            searchPlaceholder: "Search by book title...",
            noBookFound: "No book found",
          },
        },
      },

      mr: {
        translation: {
          landingPage: {
            navbar: {
              title: "शिवप्रेरणा वाचनालय",
              history: "इतिहास",
              allBooks: "सर्व_पुस्तके",
              rareBooks: "दुर्मी_पुस्तके",
              events: "कार्यक्रम",
              management: "व्यवस्थापन",
            },
            categories: {
              heading: "श्रेणी",
              novel: "कादंबरी",
              drama: "नाटक",
              experienceStatement: "अनुभव विधान",
              historical: "ऐतिहासिक",
              religious: "धार्मिक",
              autobiography: "आत्मचरित्र",
              poem: "कविता",
              literature: "साहित्य",
              spiritual: "आध्यात्मिक",
              health: "आरोग्य",
              story: "कथा",
              viewMore: "आणखी पहा...",
              enrollNow: "नोंदणी करा",
            },
            laws: {
              law1: "पुस्तके वापरासाठी असतात",
              law2: "प्रत्येक वाचकाला त्याचे पुस्तक",
              law3: "वाचकाचा वेळ वाचवा",
              law4: "ग्रंथालय हे वाढणारे सजीव आहे",
              law5: "प्रत्येक पुस्तकाला त्याचा वाचक",
              authorName: "डॉ. एस. आर. रंगनाथन (१८९२–१९७२)",
              authorNote:
                "भारतातील ग्रंथालय शास्त्राचे जनक म्हणून ओळखले जाणारे, त्यांनी ग्रंथालय शास्त्राचे पाच नियम तयार केले आणि कोलन वर्गीकरण प्रणाली विकसित केली, ज्यामुळे जगभरातील आधुनिक ग्रंथालय पद्धतींना आकार मिळाला.",
            },
            counter: {
              books: "पुस्तके",
              yearsOfTrust: "विश्वासाचे वर्ष",
              readers: "वाचक",
            },
            newArrival: {
              title: "नवीन आगमन",
              cards: [
                {
                  bookName: "टू किल अ मॉकिंगबर्ड",
                  author: "लेखक: हार्पर ली",
                  description:
                    "१९३० च्या दशकातील अमेरिकेच्या दक्षिण भागातील वांशिक भेदभावाच्या पार्श्वभूमीवर आधारित ही कथा स्काउट फिंच, तिचा भाऊ जेम आणि त्यांचे वडील अॅटिकस फिंच यांच्या भोवती फिरते. अॅटिकस हा एक प्रामाणिक वकील असून तो एका कृष्णवर्णीय व्यक्तीचा अन्यायकारक खटल्यात बचाव करतो. स्काउटच्या निरागस नजरेतून ही कादंबरी न्याय, सहानुभूती, नैतिक धैर्य आणि बाल्यनिर्दोषपणाच्या हरवण्याच्या विषयांवर प्रकाश टाकते.",
                },
                {
                  bookName: "१९८४",
                  author: "लेखक: जॉर्ज ऑर्वेल",
                  description:
                    "जॉर्ज ऑर्वेलची १९८४ ही एक भीषण काल्पनिक कादंबरी आहे, ज्यात “बिग ब्रदर” नावाच्या सर्वसत्ताधारी सत्तेखालील समाजाचे चित्रण आहे. प्रत्येक व्यक्तीचे विचार, कृती आणि शब्द यांवर सतत देखरेख ठेवली जाते. नायक विन्स्टन स्मिथ पक्षासाठी काम करत असला तरी आतून तो या अत्याचारी नियंत्रणाविरुद्ध बंड करतो. ही कादंबरी सर्वाधिकारशाही, गोपनीयतेचा अभाव, सत्याचे विकृतीकरण आणि व्यक्तिमत्वाच्या नाशाच्या धोक्याविषयी चेतावणी देते.",
                },
                {
                  bookName: "प्राइड अँड प्रेजुडिस",
                  author: "लेखक: जेन ऑस्टेन",
                  description:
                    "प्राईड अँड प्रेजुडिस ही १९व्या शतकातील इंग्लंडमधील सामाजिक वास्तवावर आधारित एक शाश्वत प्रेमकथा आहे. बुद्धिमान आणि स्वावलंबी एलिझाबेथ बेनेट हिच्या जीवनातून प्रेम, विवाह आणि समाजाच्या अपेक्षा या विषयांचा शोध घेतला जातो. गर्विष्ठ पण प्रामाणिक मिस्टर डार्सी यांच्याशी तिचे बदलणारे नाते गैरसमज, आत्मओळख आणि खऱ्या प्रेमाच्या विजयाची कहाणी सांगते.",
                },
              ],
            },
            footer: {
              title: "शिवप्रेरणा वाचनालय",
              description: "ज्ञान आणि समुदायासाठी तुमचे विश्वासू ठिकाण",
              adminButton: "अ‍ॅडमिन",
              contact: {
                title: "संपर्क",
                phone: "फोन: ९२२६१२७३१६",
                email: "ईमेल: anspgranthalay@gmail.com",
              },
              address: {
                title: "पत्ता",
                details:
                  "रूम नं. ४०३, नवरे रेसिडेन्सी, नवरे पार्क रोड, फायर स्टेशन जवळ, नारायण नगर, पश्चिम, अंबरनाथ, महाराष्ट्र – ४२१५०५",
              },
              joinUs: {
                title: "सहभागी व्हा",
                facebook: "फेसबुक",
                whatsapp: "व्हॉट्सअॅप",
              },
              copyright: "© २०२५ टेक सोल्यूशन प्रा. लि.",
            },
          },
          historyPage: {
            header: {
              title: "इतिहास",
              subHeader: "जिथे भूतकाळाच्या कथा भविष्याला प्रेरणा देतात",
              description:
                "नवीन असूनही, आमचे वाचनालय वाचक आणि शिकणाऱ्यांचा सशक्त समुदाय घडविण्यास समर्पित आहे. शोध, ज्ञान आणि जोडणी यांचे केंद्र म्हणून आम्ही उभे करत असलेल्या या प्रवासाचा भाग व्हा.",
            },
            cards: [
              {
                id: "card1",
                header: "मा. डॉ. श्रीकांत एकनाथ शिंदे",
                subHeader: "सांसद",
                description:
                  "मा. मंत्र्यांचे मनःपूर्वक आभार, ज्यांच्या उदार ₹८० लाखांच्या योगदानामुळे आणि अखंड पाठिंब्यामुळे आमचे वाचनालय स्थापन करण्यात आले. त्यांचे दूरदृष्टीपूर्ण नेतृत्व आमच्या ज्ञानप्रसाराच्या ध्येयाला सतत प्रेरणा देते.",
              },
              {
                id: "card2",
                header: "प्रो. डॉ. विश्वरूप मेहरा",
                subHeader: 'प्रो-व्हाईस चान्सलर - "दूरदर्शी"',
                description:
                  "प्रो. डॉ. विश्वरूप मेहरा यांचे आम्ही मनःपूर्वक आभारी आहोत, ज्यांच्या पाठिंब्यामुळे आणि योगदानामुळे वाचनालयाची पायाभरणी झाली. ज्ञान हे मार्गदर्शनाचे दीपक आहे या त्यांच्या विचाराने आम्हाला सतत प्रेरणा मिळते.",
              },
              {
                id: "card3",
                header: "प्रो. शिरीष केदारे",
                subHeader: 'संचालक, आयआयटी मुंबई - "मुख्य पाहुणे"',
                description:
                  "आमच्या मुख्य पाहुण्यांचे आम्ही आभार मानतो, ज्यांच्या उदार योगदानामुळे आणि पाठिंब्यामुळे हे वाचनालय स्थापन झाले. त्यांची दूरदृष्टी आणि बांधिलकी ज्ञान आणि शिकण्यासाठी दीर्घकाळ टिकणारी परंपरा निर्माण करेल.",
              },
            ],
          },

          rareBooksPage: {
            title: "दुर्मीळ पुस्तके",
            description:
              "आमच्या दुर्मिळ पुस्तकांच्या संग्रहातील अमूल्य रत्न शोधा — ज्या आवृत्त्यांमध्ये ऐतिहासिक, सांस्कृतिक आणि साहित्यिक महत्त्व जपले गेले आहे.",
            book1: {
              title: "द कॅचर इन द राय",
              author: "लेखक - जे. डी. सॅलिंजर",
              description:
                "सॅलिंजर यांनी त्यांच्या पुस्तकाच्या सादरीकरणासाठी कठोर असताना, शेजारी आणि मित्र ई. मायकेल मिशेल यांना एकमेव आवरण तयार करण्याची परवानगी दिली. ते आवरण नंतर अनेकदा वस्तूंवर पुनर्निर्मित झाले आणि विद्यार्थ्यांच्या खोलीसाठी लोकप्रिय ठरले.",
            },
            book2: {
              title: "टू किल अ मॉकिंगबर्ड",
              author: "लेखक - हार्पर ली",
              description:
                "१९३० च्या दशकातील अमेरिकेच्या दक्षिण भागातील वांशिक भेदभावाच्या पार्श्वभूमीवर आधारित ही कथा स्काउट फिंच, तिचा भाऊ जेम आणि त्यांचे वडील अॅटिकस फिंच यांच्या भोवती फिरते. अॅटिकस हा एक प्रामाणिक वकील असून तो एका कृष्णवर्णीय व्यक्तीचा अन्यायकारक खटल्यात बचाव करतो. स्काउटच्या निरागस नजरेतून ही कादंबरी न्याय, सहानुभूती, नैतिक धैर्य आणि बाल्यनिर्दोषपणाच्या हरवण्याच्या विषयांवर प्रकाश टाकते.",
            },
            book3: {
              title: "१९८४",
              author: "लेखक - जॉर्ज ऑर्वेल",
              description:
                "जॉर्ज ऑर्वेलची १९८४ ही एक भीषण काल्पनिक कादंबरी आहे, ज्यात “बिग ब्रदर” नावाच्या सर्वसत्ताधारी सत्तेखालील समाजाचे चित्रण आहे. प्रत्येक व्यक्तीचे विचार, कृती आणि शब्द यांवर सतत देखरेख ठेवली जाते. नायक विन्स्टन स्मिथ पक्षासाठी काम करत असला तरी आतून तो या अत्याचारी नियंत्रणाविरुद्ध बंड करतो. ही कादंबरी सर्वाधिकारशाही, गोपनीयतेचा अभाव, सत्याचे विकृतीकरण आणि व्यक्तिमत्वाच्या नाशाच्या धोक्याविषयी चेतावणी देते.",
            },
            book4: {
              title: "प्राइड अँड प्रेजुडिस",
              author: "लेखक - जेन ऑस्टेन",
              description:
                "प्राईड अँड प्रेजुडिस ही १९व्या शतकातील इंग्लंडमधील सामाजिक वास्तवावर आधारित एक शाश्वत प्रेमकथा आहे. बुद्धिमान आणि स्वावलंबी एलिझाबेथ बेनेट हिच्या जीवनातून प्रेम, विवाह आणि समाजाच्या अपेक्षा या विषयांचा शोध घेतला जातो. गर्विष्ठ पण प्रामाणिक मिस्टर डार्सी यांच्याशी तिचे बदलणारे नाते गैरसमज, आत्मओळख आणि खऱ्या प्रेमाच्या विजयाची कहाणी सांगते.",
            },
          },
          eventsPage: {
            headerSection: {
              header: "कार्यक्रम",
              subHeader: "मनांची जोडणी, समुदायाचा उत्सव",
              description:
                "वाचनालयं फक्त पुस्तकांचा संग्रह नाहीत — ही अशी जिवंत जागा आहे जिथे कथा, संस्कृती आणि ज्ञानाच्या माध्यमातून मनं एकमेकांशी जोडतात, आणि जिथे समुदाय एकत्र येऊन त्यांच्या वैविध्यपूर्ण आणि एकात्मिक संस्कृतीचा उत्सव साजरा करतात.",
            },
            cards: [
              {
                id: "card1",
                description:
                  "शिवप्रेरणा लायब्ररीच्या स्थापनेचा ऐतिहासिक क्षण मा. डॉ. श्रीकांत एकनाथ शिंदे, खासदार यांच्या उपस्थितीत साजरा करण्यात आला. त्यांच्या हस्ते लायब्ररीचे उद्घाटन करण्यात आले. शिक्षण आणि वाचनसंस्कृतीला प्रोत्साहन देण्याच्या त्यांच्या दृष्टीकोनामुळे या ज्ञानकेंद्राची निर्मिती प्रेरित झाली. या कार्यक्रमाने समाजातील शिक्षण आणि वाचनासाठी नव्या पर्वाची सुरुवात केली, ज्याचा उद्देश विद्यार्थ्यांना आणि वाचकांना ज्ञानाच्या माध्यमातून प्रगती करण्यासाठी प्रेरणा देणे हा आहे.",
              },
              {
                id: "card2",
                description:
                  "शिवप्रेरणा लायब्ररीला सुप्रसिद्ध मराठी अभिनेते प्रवीण तर्डे यांच्या विशेष भेटीचा मान मिळाला. त्यांच्या उपस्थितीने लायब्ररीतील सदस्य आणि पाहुण्यांमध्ये उत्साह आणि प्रेरणा निर्माण झाली. भेटीदरम्यान त्यांनी वाचकांशी संवाद साधला, शिक्षण, संस्कृती आणि साहित्याच्या महत्त्वावर विचार मांडले आणि तरुणांना पुस्तकांशी वाचनाची नाळ कायम ठेवण्यासाठी प्रोत्साहित केले. हा कार्यक्रम सर्वांसाठी संस्मरणीय आणि प्रेरणादायी ठरला.",
              },
              {
                id: "card3",
                description:
                  "आंतरराष्ट्रीय महिला दिनाच्या निमित्ताने शिवप्रेरणा लायब्ररीत मुलींच्या सक्षमीकरणासाठी विशेष कार्यक्रम आयोजित करण्यात आला. परिसरातील शाळकरी मुलींना लायब्ररीत आमंत्रित करण्यात आले होते, जिथे त्यांनी शिक्षण आणि वैयक्तिक विकासाचे महत्त्व अधोरेखित करणाऱ्या चर्चांमध्ये आणि उपक्रमांमध्ये भाग घेतला. या कार्यक्रमाचा उद्देश आत्मविश्वास वाढवणे, जिज्ञासा प्रोत्साहित करणे आणि ज्ञानाच्या शक्तीच्या माध्यमातून त्यांच्या स्वप्नांच्या दिशेने वाटचाल करण्यासाठी त्यांना प्रेरित करणे हा होता.",
              },
              {
                id: "card4",
                description:
                  "५ जून २०२५ रोजी वाचनालयात ‘जागतिक पर्यावरण दिन हरित वाचन सत्र’ साजरा करण्यात आला. या कार्यक्रमाचा उद्देश वाचकांना पर्यावरणशास्त्र, संवर्धन आणि शाश्वत पद्धतींवरील पुस्तकांच्या माध्यमातून जागरूक करणे होता, तसेच वाचनालयाच्या परिसरात वृक्षारोपण उपक्रमाचे आयोजनही करण्यात आले.",
              },
            ],
            subHeader: {
              header: "आमच्या प्रत्येक कार्यक्रमाचा अनुभव घ्या!",
              subHeader:
                "रोमांचक वाचनालय कार्यक्रम, वाचन मंडळे आणि सांस्कृतिक कार्यक्रमांसोबत अद्ययावत राहा. एकही उपक्रम चुकवू नका.",
              description:
                "आजच आमच्या WhatsApp समुदायात सामील व्हा आणि येणाऱ्या कार्यक्रमांची, स्मरणिकांची आणि विशेष अपडेट्सची माहिती पहिल्यांपैकी मिळवा.",
            },
          },

          managementPage: {
            headerSection: {
              header: "संसाधनांचे नीट व्यवस्थापन,\n वाचकांसाठी नवीन शक्ती",
              description:
                "ग्रंथालय सुरळीत चालविण्यासाठी कायमस्वरूपी पाठबळ आणि मार्गदर्शन प्रदान केल्याबद्दल आम्ही आमच्या व्यवस्थापनाचे मनःपूर्वक आभार मानतो. त्यांचे मौल्यवान योगदान आणि प्रतिबद्धता वाचक आणि शिक्षार्थ्यांसाठी स्वागतार्ह वातावरण निर्माण करण्यात अत्यंत महत्त्वाची भूमिका बजावतात.",
            },
            cards: [
              {
                name: "श्रीमती तपस्या नेवे",
                designation: "मुख्य ग्रंथपाल",
                description:
                  "आमच्या व्यवस्थापनाचे मनःपूर्वक आभार मानतो, कारण त्यांच्या सततच्या पाठिंबा आणि मार्गदर्शनामुळे ग्रंथालय सुरळीतपणे चालविणे शक्य झाले आहे. त्यांचे मौल्यवान योगदान आणि बांधिलकी वाचक व शिकणाऱ्यांसाठी स्वागतार्ह वातावरण निर्माण करण्यात अत्यंत महत्त्वाची भूमिका बजावतात.",
              },
              { name: "श्रीमती. मीनाक्षी सेन", designation: "मुख्य ग्रंथपाल" },
              { name: "श्रीमती जयश्री पाटील", designation: "स्वागतिका" },
              { name: "श्री. मोहन दास", designation: "सदस्य" },
            ],
            subHeader: {
              name: "श्री. अर्जुन वर्मा",
              designation: "सहाय्यक",
            },
          },

          enrollNowPage: {
            headerSection: {
              header: "नोंदणी करा",
              description:
                "आमच्या वाचनालयाचे सदस्य व्हा आणि विस्तृत पुस्तकसंग्रह, डिजिटल साधने आणि शैक्षणिक उपक्रमांचा लाभ घ्या.",
            },
            details: [
              {
                header: "सुरुवात करणे अगदी सोपे आहे!",
                description:
                  "१. फक्त वाचनालयाला भेट द्या आणि आपले आयडी कार्ड घ्या.\n२. सभासदत्वासाठी रोज केवळ ₹१० शुल्क आहे.\nनोंद: सोमवार-रविवार, सकाळी ९.३० ते रात्री ९.००",
              },
              {
                header: "पुस्तक भाडे योजना!",
                description:
                  "मासिक योजना: ₹१००\nवार्षिक योजना: ₹१०००\nनोंद: सोमवार-रविवार, सकाळी ९.३० ते रात्री ९.००\nजामीन: ₹५००",
              },
            ],
            subHeader: {
              title: "अनुभव कथन",
            },
            reviews: [
              {
                feedback:
                  "विस्तृत पुस्तकसंग्रह आणि मदत करणारा कर्मचारी असलेले एक सुव्यवस्थित ग्रंथालय. अभ्यास आणि मनोरंजनासाठी परिपूर्ण स्थान.",
                name: "- अनन्या मेहता, B.A. इंग्रजी साहित्य विद्यार्थी",
              },
              {
                feedback:
                  "सदस्यत्व योजना परवडणाऱ्या आहेत आणि संग्रह नियमितपणे अद्ययावत केला जातो. विद्यार्थ्यांसाठी आणि पुस्तकप्रेमींसाठी अत्यंत शिफारसीय.",
                name: "- राहुल वर्मा, UPSC परीक्षेसाठी तयारी करत आहेत",
              },
              {
                feedback:
                  "शांत, स्वच्छ आणि संसाधनपूर्ण. हे ग्रंथालय लक्ष केंद्रित करून शिकण्यासाठी परिपूर्ण वातावरण निर्माण करते.",
                name: "- स्नेहा कुलकर्णी, M.Sc. संगणक विज्ञान",
              },
              {
                feedback:
                  "कादंबऱ्यांपासून संदर्भ साहित्यापर्यंत, येथे विविधता प्रभावी आहे. वाचन कार्यक्रम आणि इव्हेंट्स हे अधिक आकर्षक बनवतात.",
                name: "- अर्जुन देशमुख, MBA करत आहेत",
              },
            ],
            tagLine: {
              title:
                "आजच सामील व्हा आणि ज्ञान, संस्कृती आणि समुदायाचे दार उघडा.",
            },
          },

          AllBooks: {
            title: "पुस्तकांची यादी",
            category: "सर्व श्रेण्या",
            BookId: "पुस्तक_आयडी",
            BookTitle: "पुस्तकाचे नाव",
            Author: "लेखक",
            Category: "श्रेणी",
            RackNo:"रॅक_क्र",
            searchPlaceholder: "पुस्तकाचे नाव शोधा...",
            noBookFound: "कोणतेही पुस्तक सापडले नाही",
          },
        },
      },
    },
  });
