
import LOGOCONGBOCA from "../LOGO/1.png"
import LOGOQUOCGIA from "../LOGO/2.png"
import LOGOVNeID from "../LOGO/3.png"
import LOGOVSSID from "../LOGO/4.png"
import LOGOSV360 from "../LOGO/5.png"
import LOGOTNVN from "../LOGO/6.jpg"
import LOGOTuoiTreThanhPhoBac from "../LOGO/7.jpg"
import LOGOYOUTH from "../LOGO/8.png"
import LOGOBUSMAP from "../LOGO/9.png"
import LOGOCHUYENDOISO from "../LOGO/10.png"
import LOGOSOSUCKHOEDIENTU from "../LOGO/11.png"
import LOGOVNEXPRESS from "../LOGO/12.png"
import LOGOMOMO from "../LOGO/13.png"
import LOGOVNPAY from "../LOGO/14.png"
import LOGOVIETTELMONEY from "../LOGO/15.png"
import LOGOZALOPAY from "../LOGO/16.png"

import QRCONGBOCA from "../QR/BCAQR.png"
import QRQUOCGIA from "../QR/QHQR.png"
import QRVNeIDCH from "../QR/VNeIDCHQR.png"
import QRVNeIDIOS from "../QR/VNeIDIOSQR.png"
import QRVSSIDCH from "../QR/VSSIDCHQR.png"
import QRVSSIDIOS from "../QR/VSSIDIOSQR.png"
import QRSV360 from "../QR/SV360QR.png"
import QRTNVNCH from "../QR/TNVNCHQR.png"
import QRTNVNIOS from "../QR/TNVNIOSQR.png"
import QRTuoiTreThanhPhoBac from "../QR/TTTPBQR.png"
import QRYOUTH from "../QR/YOUTHQR.png"
import QRBUSMAPCH from "../QR/BUSMAPCHQR.png"
import QRBUSMAPIOS from "../QR/BUSMAPIOSQR.png"
import QRCHUYENDOISO from "../QR/CHUYENDOISOQR.png"
import QRSOSUCKHOEDIENTUCH from "../QR/SOSUCKHOEDIENTUCHQR.png"
import QRSOSUCKHOEDIENTUIOS from "../QR/SOSUCKHOEDIENTUIOSQR.png"
import QRVNEXPRESS from "../QR/VNEXPRESSQR.png"
import QRMOMO from "../QR/MOMOQR.png"
import QRVNPAY from "../QR/VNPAYQR.png"
import QRVIETTELMONEY from "../QR/VIETTELMONEYQR.png"
import QRZALOPAY from "../QR/ZALOPAYQR.png"

const LOGO = {
    LOGOCONGBOCA: LOGOCONGBOCA,
    LOGOQUOCGIA: LOGOQUOCGIA,
    LOGOVNEID: LOGOVNeID,
    LOGOVSSID: LOGOVSSID,
    LOGOSV360: LOGOSV360,
    LOGOTNVN: LOGOTNVN,
    LOGOTUOITRETHANHPHOBAC: LOGOTuoiTreThanhPhoBac,
    LOGOYOUTH: LOGOYOUTH,
    LOGOBUSMAP: LOGOBUSMAP,
    LOGOCHUYENDOISO: LOGOCHUYENDOISO,
    LOGOSOSUCKHOEDIENTU: LOGOSOSUCKHOEDIENTU,
    LOGOVNEXPRESS: LOGOVNEXPRESS,
    LOGOMOMO: LOGOMOMO,
    LOGOVNPAY: LOGOVNPAY,
    LOGOVIETTELMONEY: LOGOVIETTELMONEY,
    LOGOZALOPAY: LOGOZALOPAY,
};
const QR = {
    QRCONGBOCA: [QRCONGBOCA],
    QRQUOCGIA: [QRQUOCGIA],
    QRVNEID: [QRVNeIDCH, QRVNeIDIOS],
    QRVSSID: [QRVSSIDCH, QRVSSIDIOS],
    QRSV360: [QRSV360],
    QRTNVN: [QRTNVNCH, QRTNVNIOS],
    QRTUOITRETHANHPHOBAC: [QRTuoiTreThanhPhoBac],
    QRYOUTH: [QRYOUTH],
    QRBUSMAP: [QRBUSMAPCH, QRBUSMAPIOS],
    QRCHUYENDOISO: [QRCHUYENDOISO],
    QRSOSUCKHOEDIENTU: [QRSOSUCKHOEDIENTUCH, QRSOSUCKHOEDIENTUIOS],
    QRVNEXPRESS: [QRVNEXPRESS],
    QRMOMO: [QRMOMO],
    QRVNPAY: [QRVNPAY],
    QRVIETTELMONEY: [QRVIETTELMONEY],
    QRZALOPAY: [QRZALOPAY],
}



const NHOMDICHVU = {
    NHOM1: "NHÓM ỨNG DỤNG CỔNG DỊCH VỤ CÔNG",
    NHOM2: "NHÓM ỨNG DỤNG ĐOÀN VIÊN - HỘI VIÊN - SINH VIÊN",
    NHOM3: "NHÓM ỨNG DỤNG ĐỜI SỐNG, SỨC KHỎE, TINH THẦN",
    NHOM4: "NHÓM ỨNG DỤNG THANH TOÁN ĐIỆN TỬ"
};
const NHOMDICHVUFULL = [
    {
        ID: 1,
        name: "THE E-PAYMENT APPLICATION Group",
        url: 'ttdt',
        children: [
            {
                name: "Momo",
                url: 'Momo'
            },
            {
                name: "VNPay",
                url: 'VNPay'
            },
            {
                name: "ViettelMoney",
                url: 'VIETTELMONEY'
            },
            {
                name: "ZaloPay",
                url: 'ZaloPay'
            }
        ]
    },
    {
        ID: 2,
        name: "THE ONLINE PUBLIC SERVICE application group",
        url: 'dvcong',
        children: [
            {
                name: "The Public Service Portal of the Ministry of Public Securityn",
                url: 'congboca'
            },
            {
                name: "National Public Services Portal",
                url: 'quocgia'
            },
            {
                name: "VNeID",
                url: 'VNeID'
            },
            {
                name: "VSSID",
                url: 'VSSID'
            },
        ]
    },
    {
        ID: 4,
        name: "Group of APPS FOR HCYU MEMBER – VNUS MEMBER – STUDENT",
        url: 'dhsv',
        children: [
            {
                name: "SV360",
                url: 'SV360'
            },
            {
                name: "Youth of Viet Nam",
                url: 'TNVN'
            },
            {
                name: "Youth of Ho Chi Minh City",
                url: 'TuoiTreThanhPhoBac'
            },
            {
                name: "YOUTH",
                url: 'YOUTH'
            }
        ]
    },
    {
        ID: 3,
        name: "Apps GROUP FOR LIFESTYLE, HEALTH AND WELLBEING",
        url: 'dssktt',
        children: [
            {
                name: "BusMap",
                url: 'BusMap'
            },
            {
                name: "Digital Transformation Handbook",
                url: 'CHUYENDOISO'
            },
            {
                name: "Electronic health record",
                url: 'SOSUCKHOEDIENTU'
            },
            {
                name: "VNExpress",
                url: 'VNExpress'
            }
        ]
    },

]


const TENDICHVU = {
    CONGBOCA: "The Public Service Portal of the Ministry of Public Securityn",
    QUOCGIA: "National Public Services Portal",
    VNEID: "VNeID",
    VSSID: "VSSID",
    SV360: "SV360",
    TNVN: "Youth of Viet Nam",
    TUOITRETHANHPHOBAC: "Youth of Ho Chi Minh City",
    YOUTH: "YOUTH",
    BUSMAP: "BusMap",
    CHUYENDOISO: "Digital Transformation Handbook",
    SOSUCKHOEDIENTU: "Electronic health record ",
    VNEXPRESS: "VNExpress",
    MOMO: "Momo",
    VNPAY: "VNPay",
    VIETTELMONEY: "Viettel Money",
    ZALOPAY: "ZaloPay"
}

const DESCRIPTION = {
    congbocaDescription: `1) According to the Immigration Management Department, individuals eligible for the online passport application process through the Public Service Portal are:
    - Vietnamese citizens with chip-embedded citizen identification cards, non-embedded citizen identification cards, or 12-digit identification numbers.
    - Users with valid accounts on the national public service portal (note that citizens must use their registered mobile phone number associated with their citizen identification card or 12-digit identification number. If the mobile phone number is registered under a 9-digit identification number, users need to contact their mobile network provider to update their information to the latest chip-embedded citizen identification card number).
    - Individuals with the ability to make online payments using the government's payment system.
    
    2) The process for applying for a level 4 online passport through the Public Service Portal includes the following steps:
    Step 1: Visit the online public service portal of the Ministry of Public Security at https://dichvucong.bocongan.gov.vn or the national public service portal.
    Step 2: Log in to the system using a successfully registered account.
    Step 3: Search and select the non-chip-embedded standard passport service, and select the "online submission" option.
    Step 4: Fill in all requested passport application information, including email address and uploading a passport photo (to be printed on the passport). The passport photo must follow certain criteria, such as being taken on a white background, taken within the last 6 months, with a 4x6 ratio, 75% of the photo's area should be the person's face, and other requirements stated in the application. The software will verify the quality of the uploaded photo automatically.
    Step 5: Select the submission location at either the Immigration Management Department of the Ministry of Public Security or a branch of the province/city-level Immigration Management Department, depending on preference.
    Step 6: Choose whether to receive the passport directly at the Immigration Management Department or through the postal system.
    `,
    quocgiaDescription: `1) Register and immediately receive an account with the National Public Services Portal to log in.
    2) Lookup information and public services across industries and regions in the national database on administrative procedures; submit feedback and suggestions regarding the resolution of administrative procedures and public services.
    3) Request support to carry out administrative procedures and public services through the hotline 18001096 or online in the Support section; evaluate satisfaction with the resolution of administrative procedures.
    4) Monitor the entire process of resolving administrative procedures and handling feedback and suggestions by providing the record code, including the record code of administrative procedures not carried out through the National Public Services Portal, and portals of respective ministries, branches, and localities.
    5) Log in using the National Public Services Portal account to access portals of respective ministries, branches, and localities; no need to update information fields or documents already stored in the National Public Services Portal account.
    6) Access personal and organizational information stored in databases and information systems integrated with the National Public Services Portal, such as business registration, tax, insurance, etc.
    `,
    vneidDescription: `1) Integration of electronic personal documents to replace paper files
VNeID app integrates all personal documents of citizens on the digital platform and this is the most important feature. All residential systems have been deployed and connected on the application. The documents on this app are: ID card, Health Insurance card, Social Insurance, driver's license, etc.
2) Declaration of domestic travel and population movement 
Thanks to the VNeID app, citizens in Vietnam can easily declare domestic travel and population movement to quickly scan QR codes at disease control checkpoints. Therefore, you will save a considerable amount of time for declaration and minimize the risk of COVID-19 transmission.
3) Integration of QR code for passing disease control checkpoints
During the epidemic, we need to declare domestic travel using the VNeID app before going out on the street. Once the declaration is made, the system will send a QR code to your device. We will take them to show when passing through disease control checkpoints.
4) National health declaration
The VNeID app allows all citizens in Vietnam to declare their health status anywhere. This makes it easier to trace patients F0, F1, and F2 and limit the outbreak of COVID-19.
5) Reviewing the history of QR codes at disease checkpoints
On VNeID, citizens can review their history of domestic travel declaration at disease checkpoints to see where they have been. Therefore, it helps us know if we have been to places with F0 and F1 cases.
6) Registration of permanent, temporary residence, and temporary absence
Previously, registering for temporary or permanent residence or absence required citizens to go to the police station. However, thanks to the powerful support of the VNeID app, you can do it right at home. All operations are fast and extremely easy.
`,

    vssidDescription: `1) Easy information lookup: social insurance number, social insurance agency, healthcare facility.
With the VssID application, citizens can easily look up information such as their social insurance number, social insurance agency, and healthcare facility. This is much easier than previous methods of searching. In addition, users can log in to their social insurance account to access more detailed information about their social insurance and healthcare benefits.
2) Track participation progress, history of benefits in the social insurance and healthcare system
Previously, citizens had difficulty tracking their participation in the social insurance system. With the VssID application, users can easily track their participation progress, as well as their history of receiving social insurance and healthcare benefits.
3) Log in to social insurance account to manage information online
Users can now manage their social insurance and healthcare information directly on the VssID application with the secure and convenient feature of logging in via fingerprint or facial recognition.
4) 24/7 hotline customer service, feedback submission
Citizens can seek assistance for social insurance-related issues through the 24/7 hotline available on the application. In addition, the application also features a chatbot that can provide support messages to users. Citizens can also submit feedback and suggestions to improve the quality of the service.
5) Stay up-to-date with the latest news in the social insurance and healthcare field
The VssID application is also a direct communication channel to provide comprehensive and timely information on social insurance, healthcare policies, and other relevant news updates. This showcases the humanistic values of the policies for the citizens from the Communist Party and the State.
`,

    sv360Description: `1) Some key features:
- Connecting the student community
- Improving skills and physical fitness
- Receiving certificates of participation in activities
- Receiving information and support for students, such as job opportunities, housing options, scholarships, etc.
- Receiving thousands of discount vouchers
- Collecting points to redeem rewards
2) Mission and Vision:
Taking students as the center and aiming to provide comprehensive training for both students and young intellectuals, Sv360 application carries the mission of developing an energetic and healthy community of young intellectuals with high capacity, mindset and physical condition, aiming to provide high-quality labor force with good direction for society. Therefore, the goal is to connect diverse needs for comprehensive development training for students such as physical fitness, skills training, and social experience training through cooperation with all student associations, organizations and suitable businesses.
`,


    tnvnDescription: `1) Make calls and send messages for free:
The Thanh Nien Viet Nam app allows you to make free voice calls and send messages to friends in your phonebook or new contacts. This feature is convenient for users who can multitask while enjoying other app features such as reading news or learning while easily messaging their friends.
2) Conveniently join online contests by the Ho Chi Minh Communist Youth Union:
The app allows you to learn and participate in weekly online contests with different topics about the Communist Youth Union, allowing members, students, and young people to improve and reinforce their knowledge about the organization.
3) Accurately provide news and activities of the Ho Chi Minh Communist Youth Union:
If you are a fan of the organization's activities, Thanh Nien Viet Nam is a useful app for you as it provides accurate news, representative programs, shining examples, and information about the youth of the organization, helping you to easily understand and follow their activities.
4) Search for information related to education, career, and employment:
The app also allows users to search for information related to education, technology, healthcare, and prominent job announcements, helping them to keep updated with the latest news and events of the youth in various provinces, while assisting young people in finding meaningful and suitable jobs for themselves.
5) Conveniently pay bills for utilities, tuition fees, transportation tickets, and more:
In addition to content related to the Communist Youth Union, Thanh Nien Viet Nam also supports users to make online payments for electricity, water, internet, tuition fees, transportation tickets, flights, and more through
`,
    tuoitrethanhphobacDescription: `Tuoi tre Thanh pho Bac Application is a tool serving all levels of the Youth Union Congress with the following features: scanning QR codes for attendance, creating and automatically arranging meeting rooms and seating, digitizing voting procedures and automatically generating result statistics, digitizing and disseminating conference materials, digitizing information exchange and registration for delegate speeches... The application also allows for printing delegate lists, reports on delegate eligibility reviews, and other reports automatically upon request. The application provides a map of past, current, and upcoming Youth Union Congresses.
    In addition, the application serves as a management channel for union members within the city, contributing to digital transformation efforts within the Youth Union and children's movements in the city. Moreover, the application serves information dissemination and communication exchange between union members and young people in the city.
`,
    youthDescription: `The main features of the website are:
- User-friendly interface with student accounts.
- Tracking and registering for training programs and activities for students.
- Fast updates on academic results.
- "Creative Ideas" information portal at HCMUTE - where creativity is nurtured and ideas are born.`,

    busmapDescription: `1) Retrieve specific route information
BusMap allows users to easily access detailed information for each route, including departure schedules, stopping stations, fare prices, and operating hours. Additionally, users can quickly locate detailed information for any nearby stops.
2) Smart route planning
BusMap suggests the most convenient and fast routes based on local public transportation systems. These recommendations are based on real-time data of the operating routes at the time of search.
3) Check bus waiting times
Users can track the arrival times of buses at each stop provided by real-time GPS data.
4) Track bus routes and receive stop reminders
BusMap provides a feature to track the bus route and read the names of upcoming stations, which can help users avoid getting off at the wrong stop, making commuting easier and more manageable.
5) Provide feedback
Users can rate the quality of each route and provide feedback on the application's features. BusMap's team is always ready to listen to feedback and continually improve the application.
6) Real-time data updates
The real-time data update feature allows users to proactively access and monitor the latest information instantly.
7) City information updates
BusMap updates continuous information about the weather, epidemiological situation, and other important local news.
`,

    chuyendoisoDescription: `1) What is digital transformation for a country?
Digital transformation consists of 3 main components: transforming operations of the state agencies to develop a digital government, transforming operations of businesses to develop a digital economy, and transforming operations of citizens to develop a digital society.
2) Why does Vietnam need digital transformation?
Digital transformation presents unprecedented opportunities for Vietnam. A digital government improves the efficiency, effectiveness, and transparency of government operation, while reducing corruption. A digital economy fosters innovation, creates new value, increases labor productivity, and drives new growth. A digital society promotes equal access to services, education, and knowledge, narrowing development gaps and reducing inequality. Industries and sectors are optimized and smartened to enhance the quality of life for citizens.
3) Does Vietnam have opportunities for digital transformation?
Digital transformation creates opportunities for all countries, even for those in developing stages. Vietnam has an opportunity to climb up the national rankings with its strong leadership from the Party, which can quickly respond and concentrate on taking bold actions. Vietnam does not need to wait for anyone else; it should be innovative and agile to solve its own problems and pioneer its own way forward. Being ahead will attract new technologies to Vietnam, and new global technology talents will come to Vietnam. These resources always follow where markets are.
4) Why is digital transformation a big opportunity?
Digital transformation is an invaluable opportunity for us. It is a great opportunity for the next few decades. Breakthroughs in digital technologies have been brewing for decades, and only become mainstream in a few years, or even once every few decades. We cannot afford to fall behind while others move ahead
`,

    sosuckhoedientuDescription: `1) Registering for Covid-19 vaccine on the Electronic Health Record app 
The standout advantage of the app is that it allows citizens to easily register for the Covid-19 vaccine online with just 3 simple steps, making it suitable for everyone of all ages to register quickly from home. Therefore, the Electronic Health Record app is currently one of the most essential apps available.
2) Quick reporting of unusual symptoms after Covid-19 vaccination 
The Electronic Health Record app helps you connect with the healthcare agency's hotline to report unusual symptoms after receiving the Covid-19 vaccine through the "Call Now" button on the app's main page. In addition, you can complete a survey on post-vaccination reactions so that healthcare facilities can monitor the situation and take necessary actions.
3) Finding doctors and healthcare facilities near you quickly 
You can easily find the nearest healthcare facilities and hospitals to choose where to get medical services quickly.
4) Providing vaccination confirmation certificate for Covid-19 
After receiving the Covid-19 vaccine, you will receive a certificate of vaccination to serve the purpose of travel when necessary.
5) Connecting body index measuring devices such as heart rate and blood pressure on the app 
A special feature of the app is that it can connect with body index measuring devices such as heart rate and blood pressure, allowing you to proactively monitor your health status and easily view your history of health measurements.`,

    vnexpressDescription: `1) Stay updated 24/7 with the latest news and topics including current events, sports, world news, health, and technology
On VnExpress, where readers can quickly access valuable information across multiple fields.
2) Customize your newsfeed by selecting specific topics to receive recommended articles, enhancing your reading experience. VnExpress allows users to choose specific topics of interest, where the related news will be featured separately in the "My News" section. This function helps promote user selection, limit topic interest, and provide suggested and relevant news articles for an enjoyable reading experience.
3) Join an active reader community and freely share feedback and comments on each article. 
Express your opinions and participate in discussions with VnExpress's diverse reader community in the comment section under each article. This user-friendly feature allows readers to communicate freely and share personal viewpoints on topics of interest.
4) Access video news coverage for the most clear and vivid insight into current events such as politics, lifestyle, sports, etc. 
With video reporting, VnExpress provides readers with a broader view of current events, making it easier to comprehend the entire context of a particular topic thoroughly.
5) Receive real-time notifications for breaking news and trending stories. 
Targeting readers with a busy lifestyle, VnExpress allows users to receive notifications immediately for the latest and most trending news, acting as a reminder to stay up-to-date on the most important developments.
6) Utilize smart features such as swiping left or right to browse articles and save favorite articles. 
VnExpress offers useful and convenient tools to simplify the reading experience. For example, users can switch between articles quickly with a left or right swipe, and save articles they wish to review later by clicking the "Save" button located at the bottom of an article.
7) Access your reading history and quickly find articles you've read before with the "Viewed Articles" function. 
The viewing history is a crucial function in VnExpress's news application, allowing users to locate articles they have already read. This feature saves time by presenting a list of previously viewed articles, avoiding the need to search for them again.`,

    momoDescription: `1) Making bill payment and servicing transactions quickly and conveniently.
MoMo e-wallet allows users to easily pay for necessary services in daily life such as electricity, water, internet bills, cable TV, insurance, flight and transportation tickets, and more.
2)  Scanning QR code and easily making payments while shopping.
MoMo e-wallet also allows payments through QR code scanning when shopping at convenience stores and supermarkets.
3)  Fast money transfering and receiving.
Transferring money to the MoMo e-wallet is completely free, only requiring the recipient's phone number; free withdrawal to linked bank accounts.
Conveniently transfer money to 45 domestic banks, instant receipt 24/7 (including weekends and holidays) while maintaining security and privacy.
4)  Simple top-up and withdrawal from domestic banks.
Top up your MoMo e-wallet account from more than 20 domestic banks such as Vietcombank, Agribank, Sacombank, VietinBank, VPBank, OCB, etc. 
Additionally, top up from local ATM cards via the Napas gateway of all banks & international payment cards like Visa, MasterCard, JCB.
5) Secure and absolute confidentiality.
MoMo e-wallet is licensed and managed by the State Bank of Vietnam as a strategic partner of the country's 25 largest banks. `,

    vnpayDescription: `1) Easily open a wallet for yourself and your relatives 
The VNPAY electronic wallet is developed by Vietnam Payment Solution Joint Stock Company (VNPAY) - the leading electronic payment solution provider in Vietnam. The latest version of VNPAY was launched in early March 2021, known as a family electronic wallet. 
With a beautiful and user-friendly interface, the layout is scientifically arranged with professional utilities that users can easily use the VNPAY electronic wallet.
To create a family wallet for loved ones, users choose the family wallet feature and create a new member wallet for their loved ones on the application. Member wallets can use a variety of features and utilities on VNPAY wallets including payment transactions, online shopping, and many other features.
2) Diverse utility ecosystem from payment to ticket booking…
As users increasingly prefer modern living styles with convenient services, preferring digital services from payment, transportation to shopping... VNPAY is developing a diverse service ecosystem associated with everyday needs. The utility ecosystem on VNPAY wallets extends from money transfer, payment of monthly bills such as electricity, water, internet, mobile phone, cable TV, tuition fees...; mobile phone top-up; shopping on VnShop channel with diversified goods; a series of ticket booking features such as airline tickets, bus tickets, train tickets, movie tickets, hotel rooms, and taxi services.
3) Scan VNPAY-QR code at over 100,000 payment acceptance points
Especially, the scanning feature helps VNPAY wallet users pay for goods and services with the VNPAY-QR payment method at over 100,000 acceptance points. For customers who use applications without VNPAY-QR payment methods, this is the optimal choice. 
VNPAY-QR is present in all sectors and services from supermarkets, transportation, telecommunications, healthcare, education, food services, movie theaters... providing exciting shopping experiences for customers. This is also the only QR payment code on the market that meets the "QR Code Basic Standards" of the State Bank.
`,

    viettelmoneyDescription: `1. Simple registration process
Our registration process is simple and quick, applicable to all customer types and can be done on any mobile device without incurring any maintenance fees.
2. Unlimited and free money transfers 
After registering with Viettel Money, users will be given access to an account with MBBank. Additionally, when visiting Viettel's nationwide transaction points, customers will be provided with a Viettel Pay physical card with all the functions of a bank card. 
What's more, you can quickly transfer money to more than 40 domestic banks for free, even for amounts as small as 1,000 VND.
3. Multiple service payments
With the Viettel Money app, you can easily pay bills, buy tickets for movies and transportation, shop, and access hundreds of other services with ease. Moreover, 
for Viettel's services such as mobile top-ups or internet payment, customers will receive a discount of up to 20%.
4. Easy deposit/withdrawal 
ou can deposit and withdraw money limitlessly from any linked bank without incurring any additional fees. Additionally, you can withdraw money at trusted locations like Viettel Store, MB Bank, or any Thế Giới Di Động or Điện Máy Xanh nationwide.
5. Secure transactions
Viettel Money employs 3DS technology and a PCI DSS security system comprising two layers - PIN code and OTP that are sent directly to the customer's contact each time a transaction is made. All customer information and accounts are protected from increasingly sophisticated criminal activity.
`,

    zalopayDescription: `1. Convenient and fast money transfers
ZaloPay's money transfer service on the app is completely free. You can easily transfer money in 2 seconds with three options: transfer to friends (Zalo, phone number, contacts), transfer to accounts of 42 domestic banks, transfer to cards of 43 domestic banks. You can transfer money anytime, anywhere without time constraints, 24/7 transactions are supported. 
2.  Save money on mobile phone top-up
You can easily top up your phone through the ZaloPay app quickly with just a few touches. Especially, the app always offers high discounts for users when topping up. 
3.  Easy bill payment 
You can make quick and easy payments for electricity, water, internet, television bills, etc. with just a few actions. With the automatic feature of saving customer codes and reminding payment schedules, it helps you not to forget to pay on time. 
4.  Scan QR code for payment at the store 
he application supports you to scan QR codes when making payments at stores, allowing you to shop without cash. In addition, you may receive discounted offers from stores when using ZaloPay for payment. 
5.  High level of safety and security 
  Through the use of Payment Card Industry Data Security Standards (PCI DSS), the application is surely protected.`

}

export { LOGO, TENDICHVU, NHOMDICHVU, DESCRIPTION, QR, NHOMDICHVUFULL }