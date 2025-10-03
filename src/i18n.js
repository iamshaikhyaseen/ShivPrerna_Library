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
              magazine: "Magazine",
              historical: "Historical",
              religious: "Religious",
              political: "Political",
              poem: "Poem",
              literature: "Literature",
              fiction: "Fiction",
              nonFiction: "Non-Fiction",
              recipe: "Recipe",
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
                    "A story about justice, morality, and racial prejudice in the American South",
                  explore: "Explore",
                },
                {
                  bookName: "1984",
                  author: "Author: George Orwell",
                  description:
                    "A dystopian novel about surveillance, totalitarianism, and resistance",
                  explore: "Explore",
                },
                {
                  bookName: "Pride and Prejudice",
                  author: "Author: Jane Austen",
                  description:
                    "A romantic novel exploring love, class, and family in Georgian England",
                  explore: "Explore",
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
              explore: "Explore",
            },
            book2: {
              title: "To Kill a Mockingbird",
              author: "Author - Harper Lee",
              description:
                "A story about justice, morality, and racial prejudice in the American South.",
              explore: "Explore",
            },
            book3: {
              title: "1984",
              author: "Author - George Orwell",
              description:
                "A dystopian novel about surveillance, totalitarianism, and resistance.",
              explore: "Explore",
            },
            book4: {
              title: "Pride and Prejudice",
              author: "Author - Jane Austen",
              description:
                "A romantic novel exploring love, class, and family in Georgian England.",
              explore: "Explore",
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
                  "On 12th January 2025, the library organized National Youth Day Reading Circle to celebrate Swami Vivekananda's birth anniversary. The event drew more than fifty students and local youth who gathered to read and discuss his writings. The highlight was a group discussion on how his principles could be applied in modern times. The outcome was highly positive, as participants expressed a renewed sense of motivation and pledged to continue regular reading circles. translate this in Marathi.",
              },
              {
                id: "card2",
                description:
                  "On 21st February 2025, the library conducted International Mother Language Day Celebrations with over a hundred community members. The event featured storytelling sessions in Marathi, Hindi, and Urdu, along with a poetry recital by school children. A highlight was the multilingual reading contest, which encouraged young participants to present short passages in their mother tongue. The outcome reflected deeper awareness of linguistic diversity and pride in cultural roots.",
              },
              {
                id: "card3",
                description:
                  "On 7th March 2025, the library hosted Women's Literature Exhibition as part of International Women's Day. The purpose was to highlight works authored by Indian women writers, thereby inspiring readers to appreciate their contribution to literature and social reforms.",
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
                "Unlock a world of books, knowledge, and endless learning opportunities.",
            },
            cards: [
              {
                name: "Shri Rajesh Kulkarni",
                designation: "Government Officer",
                description:
                  "We sincerely thank our management for their constant support and guidance in running the library smoothly. Their valuable contribution and commitment play a vital role in creating a welcoming space for readers and learners.",
              },
              { name: "Smt. Meenakshi Sen", designation: "Chief Librarian" },
              { name: "Smt. Anjali Patel", designation: "Receptionist" },
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
              magazine: "मासिक",
              historical: "ऐतिहासिक",
              religious: "धार्मिक",
              political: "राजकीय",
              poem: "कविता",
              literature: "साहित्य",
              fiction: "काल्पनिक",
              nonFiction: "अकाल्पनिक",
              recipe: "पाककृती",
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
                  description: "न्याय, नैतिकता आणि वर्णभेद यांवर आधारित एक कथा",
                  explore: "पहा",
                },
                {
                  bookName: "१९८४",
                  author: "लेखक: जॉर्ज ऑर्वेल",
                  description:
                    "नियंत्रण, अधिनायकवाद आणि प्रतिकारावर आधारित एक डायस्टोपियन कादंबरी",
                  explore: "पहा",
                },
                {
                  bookName: "प्राइड अँड प्रेजुडिस",
                  author: "लेखक: जेन ऑस्टेन",
                  description:
                    "जॉर्जियन इंग्लंडमधील प्रेम, वर्ग आणि कुटुंब यांचा अभ्यास करणारी रोमँटिक कादंबरी",
                  explore: "पहा",
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
              subHeader: "भूतकाळातील कथा भविष्याला प्रेरणा देतात",
              description:
                "आमचे वाचनालय नवीन असले तरी वाचक आणि शिकणाऱ्यांचा समुदाय वाढविण्याचे उद्दिष्ट आहे. आमच्या प्रवासाचा शोध घ्या जिथे आम्ही शोध आणि ज्ञानासाठी एक व्यासपीठ उभारत आहोत.",
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
              "आमच्या संग्रहातील ऐतिहासिक, सांस्कृतिक आणि साहित्यिक दृष्ट्या महत्त्वपूर्ण दुर्मीळ पुस्तके येथे शोधा.",
            book1: {
              title: "द कॅचर इन द राय",
              author: "लेखक - जे. डी. सॅलिंजर",
              description:
                "सॅलिंजर यांनी त्यांच्या पुस्तकाच्या सादरीकरणासाठी कठोर असताना, शेजारी आणि मित्र ई. मायकेल मिशेल यांना एकमेव आवरण तयार करण्याची परवानगी दिली. ते आवरण नंतर अनेकदा वस्तूंवर पुनर्निर्मित झाले आणि विद्यार्थ्यांच्या खोलीसाठी लोकप्रिय ठरले.",
              explore: "पहा",
            },
            book2: {
              title: "टू किल अ मॉकिंगबर्ड",
              author: "लेखक - हार्पर ली",
              description: "न्याय, नैतिकता आणि वर्णभेद यांवर आधारित एक कथा.",
              explore: "पहा",
            },
            book3: {
              title: "१९८४",
              author: "लेखक - जॉर्ज ऑर्वेल",
              description:
                "नियंत्रण, अधिनायकवाद आणि प्रतिकारावर आधारित एक डायस्टोपियन कादंबरी.",
              explore: "पहा",
            },
            book4: {
              title: "प्राइड अँड प्रेजुडिस",
              author: "लेखक - जेन ऑस्टेन",
              description:
                "जॉर्जियन इंग्लंडमधील प्रेम, वर्ग आणि कुटुंब यांचा अभ्यास करणारी रोमँटिक कादंबरी.",
              explore: "पहा",
            },
          },
          eventsPage: {
            headerSection: {
              header: "कार्यक्रम",
              subHeader: "ज्ञानाच्या भेटी आणि समुदायाचा उत्सव",
              description:
                "ग्रंथालये ही केवळ पुस्तके साठवण्याची जागा नसून विचारांची देवाणघेवाण आणि सांस्कृतिक एकतेचे केंद्र असतात.",
            },
            cards: [
              {
                id: "card1",
                description:
                  "१२ जानेवारी २०२५ रोजी, वाचनालयाने स्वामी विवेकानंदांच्या जन्मदिनानिमित्त राष्ट्रीय युवा दिन वाचन सत्राचे आयोजन केले. या कार्यक्रमात पन्नासहून अधिक विद्यार्थी आणि स्थानिक युवक उपस्थित होते, जे त्यांच्या लेखनांचा अभ्यास करण्यासाठी आणि चर्चा करण्यासाठी एकत्र आले. विशेष म्हणजे, त्यांच्या तत्त्वांचा आधुनिक काळात कसा उपयोग करता येईल यावर गट चर्चेचे आयोजन करण्यात आले. कार्यक्रमाचा परिणाम अत्यंत सकारात्मक होता, कारण सहभागीनी नव्याने प्रेरणा मिळाल्याचे व्यक्त केले आणि नियमित वाचन सत्र सुरू ठेवण्याची प्रतिज्ञा केली.",
              },
              {
                id: "card2",
                description:
                  "२१ फेब्रुवारी २०२५ रोजी वाचनालयात आंतरराष्ट्रीय मातृभाषा दिन उत्सवाचे आयोजन करण्यात आले, ज्यामध्ये शंभराहून अधिक समुदाय सदस्य सहभागी झाले. कार्यक्रमात मराठी, हिंदी आणि उर्दू भाषेत कथा सांगण्याचे सत्र तसेच शाळकरी मुलांनी सादर केलेले कविता वाचन होते. विशेष आकर्षण ठरलेले बहुभाषिक वाचन स्पर्धेत लहान सहभागीनी त्यांच्या मातृभाषेत छोटे उतारे सादर केले. या कार्यक्रमाचा परिणाम म्हणजे भाषिक विविधतेबद्दल अधिक सखोल जागरूकता आणि सांस्कृतिक मुळांविषयीचा अभिमान प्रकट झाला.",
              },
              {
                id: "card3",
                description:
                  "७ मार्च २०२५ रोजी वाचनालयात आंतरराष्ट्रीय महिला दिनानिमित्त ‘महिला साहित्य प्रदर्शनी’चे आयोजन करण्यात आले. या कार्यक्रमाचा उद्देश भारतीय महिला लेखिकांनी लिहिलेल्या साहित्यकृतींचे दर्शन घडवणे होता, ज्यामुळे वाचकांना त्यांच्या साहित्य आणि सामाजिक सुधारणा क्षेत्रातील योगदानाची जाण व प्रेरणा मिळाली.",
              },
              {
                id: "card4",
                description:
                  "५ जून २०२५ रोजी वाचनालयात ‘जागतिक पर्यावरण दिन हरित वाचन सत्र’ साजरा करण्यात आला. या कार्यक्रमाचा उद्देश वाचकांना पर्यावरणशास्त्र, संवर्धन आणि शाश्वत पद्धतींवरील पुस्तकांच्या माध्यमातून जागरूक करणे होता, तसेच वाचनालयाच्या परिसरात वृक्षारोपण उपक्रमाचे आयोजनही करण्यात आले.",
              },
            ],
            subHeader: {
              header: "आमच्या कार्यक्रमांबरोबर अद्ययावत रहा!",
              subHeader:
                "ग्रंथालयाचे रोमांचक कार्यक्रम, वाचन सत्रे आणि सांस्कृतिक उपक्रम चुकवू नका.",
              description:
                "आजच आमच्या WhatsApp समुदायात सामील व्हा आणि येणाऱ्या कार्यक्रमांबद्दल सर्वात आधी माहिती मिळवा.",
            },
          },

          managementPage: {
            headerSection: {
              header: "संसाधनांचे व्यवस्थापन\nवाचकांना सक्षम करणे",
              description:
                "ज्ञान, पुस्तके आणि शिकण्याच्या अनंत संधींचे दार उघडा.",
            },
            cards: [
              {
                name: "श्री. राजेश कुलकर्णी",
                designation: "शासकीय अधिकारी",
                description:
                  "आमच्या व्यवस्थापनाचे मनःपूर्वक आभार मानतो, कारण त्यांच्या सततच्या पाठिंबा आणि मार्गदर्शनामुळे ग्रंथालय सुरळीतपणे चालविणे शक्य झाले आहे. त्यांचे मौल्यवान योगदान आणि बांधिलकी वाचक व शिकणाऱ्यांसाठी स्वागतार्ह वातावरण निर्माण करण्यात अत्यंत महत्त्वाची भूमिका बजावतात.",
              },
              { name: "श्रीमती. मीनाक्षी सेन", designation: "मुख्य ग्रंथपाल" },
              { name: "श्रीमती. अंजली पटेल", designation: "स्वागतिका" },
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
        },
      },
    },
  });
