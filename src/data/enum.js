
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
 QRCONGBOCA : [QRCONGBOCA],
 QRQUOCGIA : [QRQUOCGIA],
 QRVNEID : [QRVNeIDCH,QRVNeIDIOS],
 QRVSSID :[ QRVSSIDCH, QRVSSIDIOS],
 QRSV360 : [QRSV360],
 QRTNVN :[QRTNVNCH,QRTNVNIOS] ,
 QRTUOITRETHANHPHOBAC :[QRTuoiTreThanhPhoBac] ,
 QRYOUTH :[QRYOUTH] ,
 QRBUSMAP : [QRBUSMAPCH,QRBUSMAPIOS],
 QRCHUYENDOISO :[QRCHUYENDOISO] ,
 QRSOSUCKHOEDIENTU :[QRSOSUCKHOEDIENTUCH,QRSOSUCKHOEDIENTUIOS],
 QRVNEXPRESS :[QRVNEXPRESS] ,
 QRMOMO :[QRMOMO] ,
 QRVNPAY :[QRVNPAY] ,
 QRVIETTELMONEY :[QRVIETTELMONEY] ,
 QRZALOPAY :[QRZALOPAY] ,
}



const NHOMDICHVU = {
    NHOM1: "NHÓM ỨNG DỤNG CỔNG DỊCH VỤ CÔNG",
    NHOM2: "NHÓM ỨNG DỤNG ĐOÀN VIÊN - HỘI VIÊN - SINH VIÊN",
    NHOM3: "NHÓM ỨNG DỤNG ĐỜI SỐNG, SỨC KHỎE, TINH THẦN",
    NHOM4: "NHÓM ỨNG DỤNG THANH TOÁN ĐIỆN TỬ"
};
const NHOMDICHVUFULL = [
    {
        ID:1,
        name:"NHÓM ỨNG DỤNG THANH TOÁN ĐIỆN TỬ",
        url:'ttdt',
        children:[
            {
                name:"Momo",
                url:'Momo'
            },
            {
                name:"VNPay",
                url:'VNPay'
            },
            {
                name:"Viettel Money",
                url:'VIETTELMONEY'
            },
            {
                name:"ZaloPay",
                url:'ZaloPay'
            }
        ]
    },
    {
        ID:2,
        name:"NHÓM ỨNG DỤNG CỔNG DỊCH VỤ CÔNG",
        url:'dvcong',
        children:[
            {
                name:"Cổng thông tin Dịch vụ Công Bộ Công An",
                url:'congboca'
            },
            {
                name:"Cổng thông tin Dịch vụ Công Quốc gia",
                url:'quocgia'
            },
            {
                name:"VNeID",
                url:'VNeID'
            },
            {
                name:"VSSID",
                url:'VSSID'
            },
        ]
    },
    {
        ID:4,
        name:"NHÓM ỨNG DỤNG ĐOÀN VIÊN - HỘI VIÊN - SINH VIÊN",
        url:'dhsv',
        children:[
            {
                name:"SV360",
                url:'SV360'
            },
            {
                name:"Thanh niên Việt Nam",
                url:'TNVN'
            },
            {
                name:"Tuổi trẻ thành phố Bác",
                url:'TuoiTreThanhPhoBac'
            },
            {
                name:"YOUTH",
                url:'YOUTH'
            }
        ]
    },
    {
        ID:3,
        name:"NHÓM ỨNG DỤNG ĐỜI SỐNG, SỨC KHỎE, TINH THẦN",
        url:'dssktt',
        children:[
            {
                name:"BusMap",
                url:'BusMap'
            },
            {
                name:"Chuyển đổi số",
                url:'CHUYENDOISO'
            },
            {
                name:"Sổ sức khỏe điện tử",
                url:'SOSUCKHOEDIENTU'
            },
            {
                name:"VNExpress",
                url:'VNExpress'
            }
        ]
    },
    
]


const TENDICHVU = {
    CONGBOCA: "Cổng thông tin Dịch vụ Công Bộ Công An",
    QUOCGIA: "Cổng thông tin Dịch vụ Công Quốc gia",
    VNEID: "VNeID",
    VSSID: "VSSID",
    SV360: "SV360",
    TNVN: "Thanh niên Việt Nam",
    TUOITRETHANHPHOBAC: "Tuổi trẻ thành phố Bác",
    YOUTH: "YOUTH",
    BUSMAP: "BusMap",
    CHUYENDOISO: "Chuyển đổi số",
    SOSUCKHOEDIENTU: "Sổ sức khỏe điện tử",
    VNEXPRESS: "VNExpress",
    MOMO: "Momo",
    VNPAY: "VNPay",
    VIETTELMONEY: "Viettel Money",
    ZALOPAY: "ZaloPay"
}

const DESCRIPTION = {
    congbocaDescription: `Hiện nay, công dân có thể chủ động khai tờ khai đề nghị cấp hộ chiếu qua mạng Internet mà không phải đến trực tiếp cơ quan xuất nhập cảnh để xếp hàng nộp tờ khai, chụp ảnh nhờ truy cập vào Website Cổng dịch vụ công của Bộ Công an  https://dichvucong.bocongan.gov.vn 
1) Theo Cục Quản lý xuất nhập cảnh, đối tượng áp dụng thủ tục làm hộ chiếu online trên Cổng dịch vụ công là:
- Công dân Việt Nam trong nước có Căn cước công dân gắn chip, Căn cước công dân không gắn chip hoặc Chứng minh nhân dân 12 số còn giá trị;
- Có tài khoản hợp lệ trên Cổng dịch vụ công quốc gia (lưu ý, công dân phải sử dụng thuê bao di động chính chủ, đăng ký theo căn cước công dân hoặc chứng minh nhân dân 12 số. Trường hợp thuê bao di động đăng ký theo chứng minh nhân dân 9 số cần liên hệ nhà mạng để cập nhật thông tin theo căn cước công dân có gắn chip điện tử mới nhất).
- Có khả năng thanh toán lệ phí trực tuyến qua hệ thống thanh toán của Chính phủ.
2) Quy trình cấp hộ chiếu phổ thông trực tuyến mức độ 4 qua Cổng dịch vụ công bao gồm các bước:
Bước 1: Truy cập Cổng dịch vụ công trực tuyến của Bộ Công an tại địa chỉ https://dichvucong.bocongan.gov.vn hoặc Cổng dịch vụ công quốc gia.
Bước 2: Công dân đăng nhập vào hệ thống theo tài khoản đã thành công.
Bước 3: Công dân tìm kiếm và lựa chọn dịch vụ cấp hộ chiếu phổ thông không gắn chip điện tử, chọn mục nộp trực tuyến.
Bước 4: Điền đầy đủ các thông tin đề nghị cấp hộ chiếu theo mẫu, bao gồm cả địa chỉ email và upload ảnh chân dung (để in trên hộ chiếu). 
Tiêu chuẩn ảnh chân dung cần tuân thủ theo quy định, như chụp trên phông nền trắng, thời gian không quá 6 tháng; tỉ lệ ảnh 4x6; tỉ lệ diện tích khuôn mặt chiếm 75% diện tích ảnh; chiều cao từ mắt lên mép trên của ảnh xấp xỉ 2/3 chiều cao từ mắt xuống mép dưới của ảnh; mắt nhìn thẳng, lộ 2 tai, đầu trần, không kính; trang phục lịch sự; độ phân giải tối thiểu 300dpi… Ảnh sau khi tải lên sẽ được phần mềm tự động kiểm tra chất lượng...
Bước 5: Lựa chọn nơi nộp hồ sơ tại Cục Quản lý Xuất nhập cảnh Bộ Công an hoặc cơ quan quản lý xuất nhập cảnh thuộc tỉnh, thành phố trực thuộc trung ương ở nơi thuận lợi.
Bước 6: Lựa chọn hình thức nhận hộ chiếu trực tiếp tại cơ quan quản lý xuất nhập cảnh hoặc qua đường bưu điện. 
Bước 7: Chọn mục đồng ý và tiếp tục, kiểm tra lại thông tin hồ sơ đã khai báo, nhập mã xác nhận và chọn mục nộp hồ sơ. Công dân sẽ nhận tin nhắn của cơ quan quản lý xuất nhập cảnh. Trường hợp hồ sơ được chấp nhận, công dân tiến hành thanh toán lệ phí theo hướng dẫn trong tin nhắn hoặc thư điện tử. 
Thời gian xử lý hồ sơ trực tuyến là 5 ngày làm việc đối với hồ sơ nộp tại cấp trung ương và 8 ngày làm việc với hồ sơ nộp tại cấp tỉnh.
`,
    quocgiaDescription: `Với quan điểm công khai, minh bạch, lấy người dân, doanh nghiệp làm trung tâm phục vụ, Cổng Dịch vụ công Quốc gia kết nối, cung cấp thông tin về thủ tục hành chính và dịch vụ công trực tuyến; hỗ trợ thực hiện, giám sát, đánh giá việc giải quyết thủ tục hành chính, dịch vụ công trực tuyến và tiếp nhận, xử lý phản ánh, kiến nghị của cá nhân, tổ chức trên toàn quốc.  Cá nhân, tổ chức dễ dàng truy cập Cổng Dịch vụ công Quốc gia tại địa chỉ duy nhất www.dichvucong.gov.vn theo nhu cầu người dùng từ máy tính, máy tính bảng hoặc điện thoại di động được kết nối internet để hưởng nhiều lợi ích từ Cổng Dịch vụ công Quốc gia
1) Đăng ký và được cấp ngay một tài khoản của Cổng dịch vụ công Quốc gia để đăng nhập.
2)  Tra cứu thông tin, dịch vụ công các ngành, lĩnh vực, các địa phương tại Cơ sở dữ liệu quốc gia về thủ tục hành chính; Gửi phản ánh kiến nghị liên quan đến việc giải quyết thủ tục hành chính, dịch vụ công.
3)  Đề nghị hỗ trợ thực hiện thủ tục hành chính, dịch vụ công qua Tổng đài điện thoại 18001096 hoặc trực tuyến tại mục Hỗ trợ;  Đánh giá sự hài lòng trong giải quyết thủ tục hành chính.
4)  Theo dõi toàn bộ quá trình giải quyết thủ tục hành chính và xử lý phản ánh kiến nghị của mình bằng cách cung cấp mã hồ sơ, kể cả mã hồ sơ thủ tục hành chính không thực hiện qua Cổng Dịch vụ công Quốc gia, Cổng Dịch vụ công của Bộ, ngành, địa phương.
5)  Đăng nhập bằng tài khoản Cổng dịch vụ công Quốc gia để đăng nhập các Cổng Dịch vụ công của Bộ, ngành, địa phương; không phải cập nhật các trường thông tin, tài liệu đã được lưu trữ trong tài khoản Cổng Dịch vụ công Quốc gia. 
6)  Được hỗ trợ truy vấn thông tin của cá nhân, tổ chức lưu trữ tại các Cơ sở dữ liệu, Hệ thống thông tin đã tích hợp với Cổng Dịch vụ công Quốc gia như đăng ký kinh doanh, thuế, bảo hiểm,…
7)  Thực hiện thủ tục hành chính tại nhiều tỉnh, thành phố chỉ cần khai báo 1 lần trên Cổng Dịch vụ công Quốc gia.
8)  Sử dụng tài khoản của các ngân hàng, trung gian thanh toán để thanh toán trực tuyến phí, lệ phí thực hiện thủ tục hành chính; dịch vụ công;
`,
vneidDescription :`VNeID là một ứng dụng trên các thiết bị di động được phát triển bởi Trung tâm dữ liệu quốc gia về dân cư của Bộ Công An Việt Nam trên nền tảng cơ sở dữ liệu về định danh, dân cư cũng như xác thực điện tử. Đây là phần mềm được dùng trên kỹ thuật số đầu tiên được phát hành cho những cư dân đang sinh sống hoặc người nước ngoài đang đi du lịch, cư trú ở Việt Nam. Độ bảo mật khi dùng ứng dụng này là rất cao.

Phần mềm VNeID hỗ trợ tích hợp các thông tin người dùng và tính năng đa dạng nên đóng vai trò thay thế được cho thẻ CCCD gắn chip cùng với các loại giấy tờ cá nhân được tích hợp trong tải khoản định danh điện tử của bạn. Vì thế, app sẽ giúp hạn chế các loại giấy tờ cần mang theo để tránh bị mất mát.
1) Tích hợp giấy tờ cá nhân dạng điện tử thay cho bảng giấy
App VNeID tích hợp tất cả những giấy tờ cá nhân của người dân trên nền tảng kỹ thuật số và đây là tính năng quan trọng nhất. Toàn bộ các hệ thống của cư dân đã được triển khai và đã được kết nối trên ứng dụng. Những giấy tờ có trên app này đó là: Căn cước công dân, thẻ Bảo hiểm Y tế, Bảo hiểm xã hội, giấy phép lái xe,…
2) Khai báo di chuyển trong nước và di biến động dân cư
Nhờ vào ứng dụng VNeID, người dân tại Việt Nam có thể dễ dàng khai báo di chuyển trong nước và khai báo di biến động dân cư nhằm được quét nhanh những mã QR tại những trạm kiểm soát dịch bệnh. Do đó, bạn sẽ tiết kiệm được đáng kể lượng thời gian phải khai báo đồng thời hạn chế tối đa nguy cơ lây lan COVID-19 lẫn nhau.
3) Tích hợp mã QR để đi qua chốt kiểm soát dịch
Trong lúc dịch bệnh, chúng ta cần phải khai báo di chuyển nội địa bằng app VNeID trước khi đi ra ngoài đường. Khi đã khi báo xong, hệ thống sẽ gửi về máy bạn một mã QR. Chúng ta sẽ lấy chúng để xuất trình khi cần đi qua các trạm kiểm soát dịch. 
4) Khai báo y tế toàn dân
Ứng dụng VNeID cho phép cho tất cả cư dân tại Việt Nam khai báo y tế tại bất cứ đâu. Điều này giúp cho quá trình truy vết các bệnh nhân F0, F1, F2 dễ hơn và hạn chế sự bùng nổ dịch COVID-19.
5) Xem lại được lịch sử mã QR ở những chốt kiểm dịch
Trên VNeID, người dân xem lại được lịch sử khai báo di chuyển nội địa của mình tại các điểm kiểm dịch để thấy được đâu là các địa điểm mình đã đi qua. Do đó, nó giúp chúng ta nắm được là mình có đi tới nơi có người F0 và F1 hay là không.
6) Đăng ký thường trú, tạm trú và tạm vắng
Trước đây, việc đăng ký tạm trú, thường trú và tạm vắng đòi hỏi người dân cần phải lên Công an mới làm được. Tuy nhiên, nhờ sự hỗ trợ đắc lực của app VNeID thì bạn hoàn toàn có thể thực hiện ngay tại nhà. Toàn bộ mọi thao tác đều nhanh chóng và cực kỳ dễ dàng.
7) Tố giác tội phạm
VNeID là một ứng dụng được trực tiếp bộ Công an triển khai và quản lý. Do đó, việc tố giác tội phạm trên phần mềm này được là điều dễ hiểu. Ứng dụng sở hữu đầy đủ các hướng dẫn chi tiết cho người mới và bảo đảm tính tuyệt mật 100% dành cho người tố giác.
8) Bảo mật thông tin người dùng
Tính năng bảo mật thông tin trên app VNeID là cực kỳ quan trọng do đây là một ứng dụng của Bộ Công an tại Việt Nam. Do đó, tỉ lệ mà thông tin của người dùng bị đánh cắp là hầu như bằng 0.`,

vssidDescription :`Bảo hiểm xã hội số là một ứng dụng thuộc hệ sinh thái chuyển đổi số phục vụ người dân của ngành BHXH Việt Nam nhằm mục đích thiết lập kênh giao tiếp, tiếp cận thông tin, thực hiện dịch vụ công cho cá nhân tham gia giao dịch với cơ quan BHXH với các điểm nổi bật như: tra cứu các thông tin mã số BHXH, cơ quan BHXH, cơ sở khám chữa bệnh BHYT, theo dõi quá trình tham gia BHXH-BHYT.
1) Dễ dàng tra cứu các thông tin: mã số BHXH, cơ quan BHXH, cơ sở khám chữa bệnh BHYT
Với ứng dụng VssID, người dân có thể tra cứu các thông tin như mã số BHXH, cơ quan BHXH, cơ sở khám chữa bệnh BHYT một cách dễ dàng hơn rất nhiều so với các cách tra cứu trước đây. Ngoài ra, người dùng có thể đăng nhập tài khoản BHXH để tra cứu các thông tin chi tiết hơn về BHXH-BHYT của mình.
2) Theo dõi quá trình tham gia, lịch sử thụ hưởng các chế độ, chính sách BHXH-BHYT
Trước đây, người dân gặp khá nhiều khó khăn trong việc theo dõi quá trình tham gia BHXH thì nay, với ứng dụng VssID, người dùng có thể dễ dàng theo dõi quá trình tham gia, lịch sử thụ hưởng các chế độ, chính sách BHXH-BHYT
3) Đăng nhập tài khoản BHXH để quản lý thông tin BHXH online
Người dùng giờ đây đã có thể quản lý các thông tin về thẻ BHXH-BHYT cũng như các thông tin chi tiết ngay trên ứng dụng VssID với tính năng đăng nhập bằng vân tay hoặc khuôn mặt cực kỳ bảo mật và thuận tiện.
4) Dịch vụ tổng đài hỗ trợ 24/7, phản ánh kiến nghị
Người dân có thể nhờ hỗ trợ các vấn đề thông qua đường dây nóng tổng đài hoạt động 24/7 ngay trên ứng dụng. Ngoài ra, ứng dụng còn hỗ trợ chatbot giúp trả lời tin nhắn hỗ trợ cho người dân. Đặc biệt, người dân có thể gửi phản ánh kiến nghị về các vấn đề khác nhằm nâng cao chất lượng dịch vụ.
5) Theo dõi các tin tức về lĩnh vực BHXH-BHYT được cập nhật mới nhất
Ứng dụng VssID còn là một kênh truyền thông trực tiếp đến người sử dụng, cung cấp đầy đủ, kịp thời các thông tin về chính sách BHXH, BHYT, BHTN để người sử dụng thấy được giá trị nhân văn của các chính sách an sinh của Đảng và Nhà nước.`,

sv360Description :`Ứng dụng được giới thiệu bởi Hội Sinh viên Việt Nam TP.HCM hỗ trợ các bạn sinh viên tham gia các hoạt động tại thành phố. Mỗi sinh viên có thể tham gia bất kỳ hoạt động của trường nào, sẽ được tích lũy thành kết quả hoạt động ngoại khóa của bạn đó, được cấp chứng nhận. Ngoài ra, ứng dụng cũng liên kết để có thêm ưu đãi quà tặng, giảm giá của các nhãn hàng, dịch vụ dành cho sinh viên... Với SV360, sinh viên sẽ được tham gia không giới hạn các sự kiện được tổ chức bởi Hội Sinh viên TP.HCM và Hội Sinh viên các trường, lấy giấy chứng nhận tất cả các sự kiện đã tham gia với chi phí phù hợp. Tính tiện lợi của nền tảng giúp sinh viên dễ dàng tham gia và giảm thời gian chờ đợi giấy chứng nhận. Ngoài ra, nền tảng mang những chương trình rèn luyện kỹ năng phù hợp, các cơ hội việc làm, các chương trình hỗ trợ cho sinh viên từ những đối tác uy tín được xem xét và hợp tác cẩn thận.
1) Một số tính năng chính
- Kết nối cộng đồng sinh viên
- Nâng cao kỹ năng, cải thiện thể chất
- Nhận giấy chứng nhận tham gia hoạt động
- Nhận các thông tin hỗ trợ sinh viên: việc làm, nhà trọ, học bổng,...
- Nhận hàng ngàn voucher giảm giá
- Tích điểm đổi quà
2) Sứ mệnh và tầm nhìn
Lấy sinh viên làm trọng tâm và hướng đến việc rèn luyện toàn diện cho sinh viên nói riêng và cho trí thức trẻ nói chung, Ứng dụng Sv360 mang trong mình sứ mệnh phát triển một cộng đồng trí thức trẻ tích cực, năng động, khỏe mạnh về năng lực, tư duy và thể chất, hướng đến một nguồn lao động chất lượng cao và có định hướng tốt đẹp cho xã hội.
Vì thế mục tiêu sẽ là kết nối các nhu cầu đa dạng về phát triển rèn luyện toàn diện cho sinh viên như rèn luyện thể chất, rèn luyện kỹ năng và rèn luyện kinh nghiệm xã hội thông qua hợp tác với tất cả Hội sinh viên các trường, các tổ chức và doanh nghiệp phù hợp.`,


tnvnDescription :`Ứng dụng Thanh niên Việt Nam là phương tiện để các đoàn viên tham gia các hoạt động của Đoàn như cập nhật các tin tức về việc làm, các bài học, thi trực tuyến, gọi và nhắn tin miễn phí. Hãy theo dõi bài viết dưới đây sẽ khám phá thêm nhiều tính năng nữa nhé.
1) Gọi và nhắn tin hoàn toàn miễn phí
App Thanh niên Việt Nam cho phép bạn gọi thoại và nhắn tin hoàn toàn miễn phí với bạn bè có sẵn trong danh bạ điện thoại hoặc những số liên lạc mới. Tính năng này giúp người sử dụng tiện lợi trong việc vừa sử dụng các tính năng khác của ứng dụng như đọc tin tức, học bài vừa nhắn tin với bạn bè dễ dàng.
2) Tham gia các cuộc thi trực tuyến của Đoàn TNCS HCM dễ dàng
Ứng dụng cho phép bạn học, thi trực tuyến theo tuần với nhiều chủ đề khác nhau về Đoàn, thanh niên. Chức năng này giúp cho các đoàn viên, học sinh, sinh viên trau dồi và củng cố kiến thức về Đoàn TNCS HCM.
3) Cung cấp chính xác các tin tức, hoạt động của Đoàn TNCS HCM
Nếu bạn là người yêu thích các hoạt động của Đoàn thì ứng dụng Thanh niên Việt Nam là một ứng dụng hữu ích đối với bạn khi cung cấp chính xác các tin tức, chương trình tiêu biểu, tấm gương sáng và giới trẻ của Đoàn giúp bạn tìm hiểu thông tin, theo dõi và đăng ký tham gia các hoạt động đó dễ dàng.
4) Tìm kiếm thông tin về học tập, nghề nghiệp, việc làm
App Thanh niên Việt Nam cũng cho phép người dùng tìm kiếm các thông tin về học tập, công nghệ, sức khỏe và tiêu biểu là các thông tin tuyển dụng, việc làm,... Tính năng này giúp bạn cập nhật thông tin về vấn đề học tập của thanh niên ở các tỉnh, đồng thời giúp các bạn trẻ tìm được công việc ý nghĩa và phù hợp với bản thân.
5) Thanh toán hóa đơn diện nước, internet, học phí, đặt vé xe,… tiện lợi
Ứng dụng Thanh niên Việt Nam ngoài các nội dung về Đoàn, thanh niên, còn hỗ trợ người dùng thanh toán online các dịch vụ như điện, nước, internet, học phí, đặt vé xe, vé máy bay,... thông qua liên kết thẻ ngân hàng.

Cùng với đó là tính năng giải trí bằng cách nghe nhạc, xem phim,…
Thanh niên Việt Nam là ứng dụng trực tuyến đầu tiên của Đoàn TNCS HCM, hỗ trợ đắc lực cho việc tìm kiếm, nâng cao kiến thức về Đoàn, là công cụ truyền tải thông tin, chỉ đạo của Đoàn đối với mỗi Đoàn viên. Ứng dụng Thanh niên Việt Nam sẽ là người bạn thân thiết, gần gũi và hữu ích với thanh niên; đồng thời tạo môi trường để Đoàn, Hội các cấp tổ chức hoạt động, đoàn kết tập hợp và định hướng thanh niên trên không gian mạng.`,
tuoitrethanhphobacDescription: `Ứng dụng Tuổi trẻ Thành phố Bác là ứng dụng phục vụ Đại hội Đoàn các cấp với các tính năng sau như thực hiện điểm danh quét mã bằng QR code, tạo phòng họp và sắp xếp chỗ ngồi tự động, số hóa công tác biểu quyết và thông kê kết quả tự động, số hóa và phổ biến tài liệu đại hội, số hóa công tác trao đổi thông tin và đăng ký phát biểu của đại biểu tham dự... Thực hiện in danh sách trích ngang đại biểu, in báo cáo thẩm tra tư cách đại biểu và các báo cáo khác tự động theo yêu cầu. Ứng dụng cho phép xem bản đồ các Đại hội đoàn đã diễn ra, đang diễn ra và sắp diễn ra.
Ngoài ra, ứng dụng là kênh quản lý đoàn viên trên địa bàn Thành phố, góp phần thực hiện chuyển đổi số trong công tác Đoàn và phong trào thanh thiếu nhi Thành phố. Bên cạnh đó, ứng dụng phục vụ công tác thông tin, tuyên truyền và là kênh trao đổi thông tin liên lạc giữa các đoàn viên, thanh niên Thành phố.
`,
youthDescription :`Với nỗ lực tăng cường chuyển đổi số trong việc kiến tạo môi trường giao lưu, học hỏi và quản lý thông minh dành cho các bạn sinh viên, Đoàn Thanh niên - Hội Sinh viên trường ĐH Sư phạm Kỹ thuật Hồ Chí Minh chính thức ra mắt phiên bản mới của Website https://youth.hcmute.edu.vn/ - Kênh thông tin chính thức của Đoàn Thanh niên - Hội Sinh viên Trường.
YOUTH HCMUTE là nền tảng giúp các bạn sinh viên có thể theo dõi nhanh chóng, đăng ký thuận lợi và khám phá nhanh về các thông tin, chương trình, hoạt động mới nhất.
Ngoài ra, website là hệ thống đánh giá chính thức Học phần "Lãnh đạo & Kinh doanh trong Kỹ thuật". Chỉ cần một cú Click chuột, học phần không còn là trở ngại !!!
Các tính năng chính của website:
- Giao diện thân thiện, tiện lợi với tài khoản sinh viên.
- Theo dõi và đăng ký tham gia các chương trình, hoạt động rèn luyện dành cho sinh viên.
- Cập nhật nhanh nhất kết quả Học phần.
- Cổng thông tin "Ý tưởng sáng tạo" HCMUTE - Nơi ươm mầm những đam mê - Khởi nguồn sáng tạo.`,

busmapDescription :`BusMap là một sản phẩm công nghệ giao thông thông minh của Phenikaa Maas, được sáng lập bởi Lê Yên Thanh và nhóm bạn với mong muốn mang đến một giải pháp có thể giải quyết những khó khăn, bất tiện thường gặp khi sử dụng phương tiện giao thông công cộng 
Ra mắt vào năm 2013, bên cạnh các phản hồi tích cực, BusMap cũng đã nhận được rất nhiều đóng góp có giá trị từ người dùng. Với tinh thần lắng nghe, học hỏi và không ngừng đổi mới, các nhược điểm của BusMap đã được khắc phục để ứng dụng ngày càng trở nên hoàn thiện hơn.
1) Tra cứu thông tin chi tiết tuyến xe
BusMap cho phép người dùng tìm thấy các thông tin chi tiết về từng tuyến xe như: Biểu đồ giờ xuất bến, các trạm đi qua, thông tin giá vé, thời gian hoạt động... Ngoài ra, người dùng có thể dễ dàng tìm thấy thông tin chi tiết về tất cả các trạm dừng gần vị trí hiện tại nhất.
2) Tìm đường thông minh 
BusMap gợi ý cho người dùng tuyến đường thuận tiện và nhanh nhất theo hệ thống giao thông công cộng địa phương. Đặc biệt, những gợi ý này được đưa ra dựa trên những dữ liệu thực về các tuyến xe đang hoạt động tại thời điểm tìm kiếm.
3) Xem thời gian chờ xe buýt
Người dùng có thể kiểm tra thời gian xe buýt đến trạm được cung cấp bởi dữ liệu thời gian thực được từ GPS của xe.
4) Theo dõi hành trình xe buýt và nhắc xuống trạm
BusMap cung cấp tính năng theo dõi lộ trình xe di chuyển và hỗ trợ đọc tên các trạm sắp đến, khắc phục tình trạng xuống sai trạm, giúp người dùng an tâm hơn khi di chuyển bằng giao thông công cộng.
5) Phản hồi ý kiến
Người dùng ứng dụng có thể đánh giá chất lượng từng tuyến xe cũng như góp ý cho các tính năng của ứng dụng. Đội ngũ BusMap luôn sẵn sàng lắng nghe ý kiến và cải tiến ứng dụng liên tục.
6) Cập nhật dữ liệu trực tiếp
Tính năng cập nhật dữ liệu trực tuyến giúp người dùng chủ động tiếp cận và theo dõi các thông tin mới nhất ngay lập tức.
7) Cập nhật thông tin thành phố
BusMap cập nhật liên tục các thông tin về tình hình thời tiết, tình hình dịch tễ cùng các thông tin nổi bật khác của địa phương.`,

chuyendoisoDescription :`Chuyển đổi số giúp người dân bình đẳng về cơ hội tiếp cận dịch vụ, đào tạo, tri thức, qua đó giúp thu hẹp khoảng cách số thông qua việc phát triển chính phủ số, kinh tế số và xã hội số. Cẩm nang là tài liệu tóm lược những điều quan trọng
và thiết yếu về một vấn đề nào đó. Mỗi khi gặp phải chuyện
khó, chưa rõ phương hướng để giải quyết, chúng ta lại tìm về
cẩm nang, để quay trở lại với những gì cơ bản nhất, để từ đó suy
ngẫm, tìm ra cách giải quyết vướng mắc và đi tiếp. Cuốn Cẩm
nang Chuyển đổi số này ra đời với mục đích như vậy.
1) Chuyển đổi số quốc gia là gì?
Chuyển đổi số quốc gia bao gồm 3 cấu phần chính, lần lượt là chuyển đổi số trong hoạt động của cơ quan nhà nước nhằm phát triển chính phủ số, chuyển đổi số trong hoạt động của doanh nghiệp nhằm phát triển kinh tế số, chuyển đổi số trong hoạt động của người dân nhằm phát triển xã hội số.
2) Vì sao Việt Nam cần chuyển đổi số?
Chuyển đổi số mở ra cơ hội chưa từng có cho Việt Nam. Chính phủ số giúp Chính phủ hoạt động hiệu quả, hiệu lực hơn, minh bạch hơn, giảm tham nhũng. Kinh tế số thúc đẩy đổi mới sáng tạo, tạo ra giá trị mới, giúp tăng năng suất lao động, tạo động lực tăng trưởng mới, thoát bẫy thu nhập trung bình. Xã hội số giúp người dân bình đẳng về cơ hội tiếp cận dịch vụ, đào tạo, tri thức, thu hẹp khoảng cách phát triển, giảm bất bình đẳng. Các ngành, lĩnh vực được tối ưu, thông minh hóa hướng đến nâng cao trải nghiệm và chất lượng cuộc sống của người dân.
3) Việt Nam có cơ hội chuyển đổi số không?
Chuyển đổi số mở ra cơ hội cho tất cả các quốc gia. Các nước đang phát triển thậm chí có thể tận dụng cơ hội để chuyển đổi số nhanh hơn. Đây là cơ hội để Việt Nam vươn lên, thay đổi thứ hạng quốc gia. Lợi thế của Việt Nam là dưới sự lãnh đạo của Đảng, Việt Nam có thể có những chủ trương lớn một cách nhanh chóng và tập trung. Việt Nam chúng ta không cần đợi ai, thấy hiệu quả là sử dụng, nhanh nhạy với cái mới để giải quyết các vấn đề của mình và vì thế thành người đi đầu. Vì đi đầu mà công nghệ mới sẽ chuyển dịch về Việt Nam, vì đi đầu mà nhân lực công nghệ thế giới sẽ di chuyển đến Việt Nam. Bởi vì những nguồn lực này luôn di chuyển đến nơi đâu có thị trường.
4) Vì sao chuyển đổi số là cơ hội lớn?
Chuyển đổi số là cơ hội vô giá của chúng ta. Chuyển đổi số cũng là cơ hội lớn của chúng ta trong vòng một vài thập kỷ tới. Những đột phá về công nghệ số đều thai nghén trong nhiều chục năm mới phổ biến được vài năm và nhiều chục năm mới có một lần. Chúng ta không tiến khi người khác tiến là chúng ta đã tụt lại. Nếu bỏ lỡ cơ hội này, chúng ta sẽ bị tụt lại sau các quốc gia khác xa hơn nữa, do người đi trước thắng cuộc là người lấy được tất cả.
5) Tại sao nói chuyển đổi số hay là chết?
Trong lịch sử hàng triệu năm của Trái đất, sự tuyệt chủng hàng loạt và sự hình thành các loài sau đó diễn ra như một lẽ tự nhiên, do các tác nhân biến đổi là sự thay đổi về khí hậu hay điều kiện sống. Tương tự như vậy, hàng loạt doanh nghiệp đã bị phá sản vào những thập niên đầu của thế kỷ XXI. Từ năm 2000 đến nay, 52% trong số các doanh nghiệp Fortune đã bị mua lại, sáp nhập hoặc phá sản. Người ta ước tính rằng 40% các doanh nghiệp tồn tại ngày hôm nay sẽ đóng cửa trong 10 năm tới. Căn nguyên chính là do chậm hoặc thất bại trong việc chuyển đổi số.`,

sosuckhoedientuDescription :`Sổ sức khỏe điện tử là ứng dụng di động giúp người dân theo dõi sức khoẻ sau khi tiêm chủng vắc-xin COVID-19 được kết nối trực tiếp với Hệ thống Hồ sơ sức khỏe cá nhân của Bộ Y tế. Mục tiêu là giúp người dân biết và tự quản lý thông tin sức khỏe của bản thân, chủ động trong việc phòng bệnh và chăm sóc sức khỏe bản thân.
1) Đăng ký tiêm vắc-xin Covid-19 trên ứng dụng Sổ sức khoẻ điện tử
Ưu điểm nổi bật nhất là ứng dụng là cho phép người dân đăng ký tiêm vắc-xin Covid-19 trực tuyến trên ứng dụng đơn giản chỉ với 3 bước, phù hợp cho mọi người, mọi lứa tuổi đăng ký nhanh chóng tại nhà. Vì thế, ứng dụng Sổ sức khoẻ điện tử đang là một trong những ứng dụng cần thiết nhất hiện nay.
2) Báo cáo nhanh khi có triệu chứng bất thường sau khi tiêm vắc-xin COVID-19
Ứng dụng Sổ sức khỏe điện tử giúp bạn kết nối với tổng đài cơ quan y tế để báo cáo nhanh chóng khi gặp triệu chứng bất thường sau khi tiêm vắc-xin COVID-19 thông qua nút gọi ngay trên trang chính ứng dụng. Ngoài ra, bạn có thể điền phiếu khảo sát phản ứng sau tiêm để các cơ sở y tế nắm bắt tình hình và có hướng xử lý.
3) Tìm bác sĩ, cơ sở y tế gần bạn một cách nhanh chóng
Bạn có thể tìm các cơ sở y tế, bệnh viện gần bạn nhất để chọn nơi khám, chữa bệnh một cách nhanh chóng.
4) Cung cấp giấy xác nhận đã tiêm chủng vắc-xin COVID-19
Sau khi tiêm vắc-xin ngừa COVID-19, bạn sẽ nhận giáy chứng nhận đã tiêm ngừa để phục vụ mục đích di chuyển sau này khi cần thiết.
5) Kết nối các thiết bị đo chỉ số nhịp tim, huyết áp trên ứng dụng
Một tính năng khá đặc biệt đó là ứng dụng có thể kết nối với các thiết bị đo chỉ số cơ thể như: chỉ số nhịp tim, huyết áp để bạn tự chủ động nắm bắt tình hình sức khoẻ của mình cũng như xem lịch sử các lần đo chỉ số sức khoẻ dễ dàng.`,

vnexpressDescription :`VnExpress là một tờ báo tại Việt Nam được thành lập bởi tập đoàn FPT, ra mắt vào ngày 26 tháng 2 năm 2001 và hoạt động theo giấy phép số 548/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 24/08/2021, hiện tại do Bộ Khoa học và Công nghệ quản lý. Ngoài ra, VnExpress cũng cho ra mắt một phiên bản báo điện tử Tiếng Anh để phục vụ người đọc tại nước ngoài.
1) Cập nhật tin tức nóng hổi 24/24, mới nhất với nhiều chủ đề: Thời sự, thể thao, thế giới, sức khỏe, công nghệ,...
Tại trang báo trực tuyến VnExpress, bạn đọc sẽ trở thành những người nắm bắt tin tức ở nhiều lĩnh vực một cách nhanh nhất bởi sự nhanh nhẹn trong việc đăng tải thông tin hữu ích đến với mọi người.
2) Tính năng chọn lựa chủ đề quan tâm để được đề xuất các tin liên quan nhất, giúp tăng trải nghiệm đọc.
Khác với những trang báo điện tử khác, VnExpress cho phép người dùng chọn một hay nhiều chủ đề cụ thể mà bạn muốn quan tâm, theo đó, những tin tức thuộc chủ đề mà bạn chọn sẽ được nằm riêng biệt ở phần tin của tôi. Chức năng này giúp bạn đọc lựa chọn, giới hạn chủ đề quan tâm và được đề xuất các tin liên quan nhất, giúp bạn có những trải nghiệm thú vị khi đọc báo.
3) Cộng đồng người đọc năng động, bạn có thể góp ý, bình luận thoải mái dưới mỗi bài báo.
Bạn đang hào hứng với một vấn đề nào đó đang gây tranh cãi của xã hội thì đừng ngần ngại để lại góp ý cùng cộng đồng người đọc của VnExpress dưới mỗi bài báo ở phần bình luận. Chức năng thân thiện với người dùng này sẽ giúp bạn thoải mái nêu lên quan điểm cá nhân cho một vấn đề mà bạn quan tâm nhé. 
4) Tin video, cung cấp cho bạn các góc nhìn trực quan nhất về các chủ đề nóng hổi: Thời sự, nhịp sống, thể thao,...
Có thể nói, nhiều vấn đề báo chí không thể nào lột tả được hết bằng văn bản. Vì thế, nhiều trang báo đã tích hợp tin bài bằng video, trong đó có VnExpress, cung cấp cho bạn đọc nhiều video về các chủ đề nóng hổi như thời sự, nhịp sống, thể thao… giúp độc giả có cái nhìn trực quan, sinh động và nắm bắt được hết ý của một vấn đề mà bài báo muốn đề cập.
5) Nhận ngay thông báo nếu có tin tức nóng hổi, được nhiều người quan tâm.
Để phục vụ cho nhu cầu đọc báo cho những ai khá bận rộn, VnExpress còn có chức năng thông báo khi có tin nóng hoặc nhiều người quan tâm, tính năng bày cũng giống như một công cụ nhắc nhở bạn cập nhật tin tức hằng ngày, giúp bạn không bỏ sót bất kỳ thông tin quan trọng nào từ VnExpress. 
6) Nhiều tính năng thông minh: 
VnExpress cũng cung cấp nhiều công cụ hỗ trợ hữu ích. Trước hết có thể nói đến công cụ vuốt trái phải để đọc báo, chức năng này giúp người dùng chuyển từ bài báo này sang bài khác nhanh chóng chỉ bằng một cú vuốt nhẹ. Tiếp đến là chức năng lưu bài báo bạn yêu thích hoặc người dùng cảm thấy cần lưu lại để xem sau, công cụ này được thực hiện bằng cách nhấn vào nút lưu bên dưới trang tin, như vậy bạn đã lưu lại thông tin trong phần tin của bạn rồi nhé.
7) Tin đã xem: Cung cấp lịch sử đọc báo của bạn, giúp tìm lại các bài báo đã từng đọc trước đó
Tin đã xem là một chức năng khá quan trọng của ứng dụng đọc báo VnExpress, chức năng này có nghĩa sau khi bạn đọc một mẫu tin nào đó và muốn tìm lại nhanh chóng thì bạn có thể tìm ở phần tin đã xem, nơi đây sẽ chứa tất cả những bài báo mà bạn đã nhấn vào xem. Giúp người dùng không phải tốn nhiều thời gian để tìm lại bất kỳ thông tin nào.`,

momoDescription :`Ví điện tử MoMo là sản phẩm của Công ty M_Service. 
Ví điện tử MoMo cho phép bạn tạo và nạp tiền vào tài khoản MoMo để thanh toán cho hơn 200 dịch vụ như nạp tiền điện thoại, thanh toán điện nước, thanh toán vay tiêu dùng,...
1) Thanh toán hóa đơn, dịch vụ nhanh chóng, tiện lợi.
Ví MoMo cho phép người sử dụng dễ dàng thanh toán các dịch vụ cần thiết trong đời sống hằng ngày như các loại hóa đơn tiền điện, tiền nước, internet, truyền hình cáp, bảo hiểm, thanh toán vé máy bay, tàu xe,...
2)  Quét mã QR và thanh toán khi mua sắm dễ dàng.
Ví MoMo còn có khả năng thanh toán bằng cách quét mã QR khi mua sắm tại các chuỗi cửa hàng tiện lợi, siêu thị.
3)  Chuyển tiền, nhận tiền nhanh chóng.
Chuyển tiền đến Ví MoMo hoàn toàn miễn phí, chỉ cần số điện thoại người nhận; miễn phí rút tiền về ngân hàng liên kết.
Chuyển tiền đến 45 ngân hàng nội địa tiện lợi, nhanh chóng, hoàn toàn bảo mật; nhận tiền tức thì, 24/7 (bao gồm cả cuối tuần và ngày lễ).
4)  Nạp tiền và rút tiền đơn giản từ các ngân hàng trong nước.
Bạn có thể nạp tiền vào ví MoMo từ tài khoản của hơn 20 ngân hàng trong nước như Vietcombank, Agribank, Sacombank, VietinBank, VPBank, OCB,...
Đồng thời, nạp tiền từ thẻ ATM nội địa thông qua cổng Napas của tất cả các ngân hàng & thẻ thanh toán quốc tế Visa, MasterCard, JCB.
5) Sử dụng an toàn, bảo mật tuyệt đối.
Ví điện tử MoMo được Ngân hàng Nhà nước cấp giấy phép và quản lý hoạt động, là đối tác chiến lược của 25 ngân hàng lớn nhất Việt Nam.
Đạt tiêu chuẩn bảo mật quốc tế: PCI DSS cấp độ cao nhất; 2FA, SSL/TLS, Tokenization.
Bảo mật nhiều tầng khi đăng nhập & thanh toán: Mã xác thực OTP, xác thực vân tay/khuôn mặt, tự động khóa ứng dụng và tự động ngăn chặn giao dịch có dấu hiệu gian lận.`,

vnpayDescription :`Ví điện tử VNPAY do Công ty Cổ phần giải pháp thanh toán Việt Nam (VNPAY) – đơn vị hàng đầu trong lĩnh vực thanh toán điện tử tại Việt Nam phát triển. Ra mắt phiên bản mới nhất vào đầu tháng 3/2021, ví VNPAY được biết đến là ví điện tử dành cho gia đình. Với giao diện đẹp mắt, thân thiện bố cục được sắp xếp khoa học cùng các tiện ích chuyên nghiệp người dùng có thể dễ dàng sử dụng ví điện tử VNPAY.
1) Mở ví cho mình, người thân dễ dàng
Ví điện tử VNPAY do Công ty Cổ phần giải pháp thanh toán Việt Nam (VNPAY) – đơn vị hàng đầu trong lĩnh vực thanh toán điện tử tại Việt Nam phát triển. Ra mắt phiên bản mới nhất vào đầu tháng 3/2021, ví VNPAY được biết đến là ví điện tử dành cho gia đình.
Với giao diện đẹp mắt, thân thiện bố cục được sắp xếp khoa học cùng các tiện ích chuyên nghiệp người dùng có thể dễ dàng sử dụng ví điện tử VNPAY.
Để tạo ví gia đình cho người thân, người dùng chọn tính năng ví gia đình và tạo mới ví thành viên cho người thân trên ứng dụng. Ví thành viên có thể sử dụng đa dạng các tính năng, tiện ích trên ví VNPAY bao gồm: các giao dịch thanh toán, mua sắm online và nhiều các tính năng khác…
2) Hệ sinh thái tiện ích đa dạng từ thanh toán đến đặt vé…
Khi người dùng ngày càng chuộng phong cách sống hiện đại với các dịch vụ tiện lợi, ưa thích các dịch vụ số từ thanh toán, di chuyển tới mua sắm… VNPAY phát triển hệ sinh thái dịch vụ đa dạng gắn liền với những nhu cầu thường nhật.
Hệ sinh thái tiện ích trên ví VNPAY trải rộng từ chuyển tiền, thanh toán các loại hóa đơn hàng tháng như điện, nước, internet, di động, cước truyền hình, học phí…; nạp thẻ điện thoại; mua sắm trên kênh VnShop với nhiều sản phẩm hàng hóa đa dạng; cụm tính năng đặt vé như vé máy bay, vé xe khách, vé tàu, vé xem phim, phòng khách sạn, gọi taxi….
3) Quét mã VNPAY-QR tại hơn 100.000 điểm chấp nhận thanh toán
Đặc biệt, tiện ích quét mã giúp người dùng ví VNPAY có thể thanh toán hàng hóa, dịch vụ bằng phương thức thanh toán VNPAY-QR tại hơn 100.000 điểm chấp nhận. Với các khách hàng sử dụng ứng dụng không có phương thức thanh bằng toán bằng VNPAY-QR thì đây là lựa chọn tối ưu.
VNPAY-QR có mặt trong khắp tất cả các ngành nghề, dịch vụ từ siêu thị, vận tải, viễn thông, y tế, giáo dục, dịch vụ ăn uống, rạp chiếu phim… mang lại những trải nghiệm mua sắm thú vị cho khách hàng. Đây cũng là mã QR thanh toán duy nhất trên thị trường đáp ứng “Tiêu chuẩn cơ sở QR Code” của Ngân hàng Nhà nước.`,

viettelpayDescription :`Viettel Money có thể hiểu đơn giản là 1 loại ví điện tử mới ra mắt được phát triển bởi tập đoàn viễn thông Quân Đội – Viettel trên cơ sở nền tảng Viettel Pay trước đó. Tuy nhiên ứng dụng này đã và đang được cải thiện và nâng cấp để thân thiện hơn với người sử dụng.
1. Đăng ký đơn giản
Thao tác đăng ký đơn giản, nhanh chóng chỉ trong áp dụng cho mọi đối tượng khách hàng từ mọi loại thiết bị di động không tốn bất kỳ khoản phí duy trì nào.
2. Chuyển tiền không giới hạn, hoàn toàn miễn phí
Sau khi đăng ký sử ví điện tử Viettel Money, người dùng sẽ được hệ thống cấp cho 1 số tài khoản thuộc Ngân hàng Thương mại Cổ phần Quân Đội MBBank. Ngoài ra, khi đến các quầy giao dịch Viettel trên toàn quốc, bạn sẽ được cung cấp tấm thẻ vật lý Viettel Pay có đầy đủ tất cả các chức năng của một tấm thẻ ngân hàng.
Đặc biệt hơn, bạn có thể thực hiện chuyển tiền nhanh chóng tới hơn 40 ngân hàng nội địa hoàn toàn miễn phí dù chỉ 1.000 đồng.
3. Thanh toán đa dịch vụ
Với ứng dụng Viettel Money, bạn có thể dễ dàng thanh toán các dịch vụ hóa đơn, vé xem phim, vé tàu xe, mua sắm và hàng trăm dịch vụ khác một cách dễ dàng. Ngoài ra, đối với các dịch vụ được cung cấp từ Viettel như nạp thẻ điện thoại hay thanh toán dịch vụ Internet, bạn sẽ được ưu đãi chiết khấu lên đến 20%.
4. Nạp/rút tiền dễ dàng
Bạn có thể nạp, rút tiền một cách thoải mái không giới hạn về ngân hàng liên kết mà không tốn bất kỳ khoản phí phụ thu nào. Ngoài ra, bạn còn có thể rút tiền tại các điểm giao dịch được ủy quyền như Viettel Store, ngân hàng MB hoặc chuỗi cửa hàng Thế Giới Di Động và Điện Máy Xanh trên toàn quốc.
5. Giao dịch bảo mật và an toàn
Viettel Money được ứng dụng công nghệ 3DS cùng hệ thống bảo mật đạt chuẩn PCI DSS gồm hai lớp gồm mã PIN và OTP được gửi về chính chủ mỗi lần thực hiện giao dịch. Bảo vệ mọi thông tin cùng tài khoản khách hàng khỏi những tên tội phạm ngày càng tinh vi.`,

zalopayDescription :`ZaloPay là một ứng dụng thanh toán di động thuộc Công ty Cổ phần Zion được Ngân hàng Nhà nước cấp phép ngày 18/01/2016. Đây là một trong những loại ví điện tử được ưa chuộng nhất hiện nay, được tích hợp nhiều tính năng độc đáo, giúp người dùng nạp/rút tiền, thanh toán trực tuyến một cách nhanh chóng, tiện lợi.
1. Chuyển tiền thuận tiện, nhanh chóng
Dịch vụ chuyển tiền trên ứng dụng ZaloPay hoàn toàn miễn phí. Bạn dễ dàng chuyển tiền trong 2s với ba lựa chọn là chuyển tiền đến bạn bè (bạn zalo, số điện thoại, danh bạ), chuyển tiền đến tài khoản của 42 ngân hàng nội địa, chuyển tiền đến thẻ ATM của 43 ngân hàng nội địa. Bạn có thể chuyển tiền mọi lúc mọi nơi, không bó buộc thời gian, giao dịch 24/7.
2. Nạp tiền điện thoại tiết kiệm
Bạn dễ dàng nạp tiền điện thoại qua ứng dụng ZaloPay nhanh chóng chỉ với vài nút chạm. Đặc biệt, ứng dụng luôn có chiết khấu cao cho người dùng khi nạp tiền.
3. Thanh toán hoá đơn dễ dàng
Bạn có thể thanh toán các hóa đơn điện, nước, internet, truyền hình,… nhanh chóng và dễ dàng chỉ với vài thao tác. Với tính năng tự động lưu lại mã khách hàng và nhắc nhở lịch thanh toán khi đến ngày hỗ trợ bạn không quên lịch thanh toán.
4. Quét mã QR thanh toán tại cửa hàng
Ứng dụng hỗ trợ bạn quét mã QR khi thanh toán tại các cửa hàng, từ này bạn có thể mua sắm mà không cần có tiền mặt trong người. Ngoài ra, bạn có thể được nhận các ưu đãi giảm giá của các cửa hàng khi sử dụng ZaloPay để thanh toán.
5. Tính an toàn bảo mật
 Thông qua việc sử dụng Bộ tiêu chuẩn bảo vệ dữ liệu thanh toán viết tắt là PCI DSS, giúp cho ứng dụng này được bảo vệ chắc chắn.
Với hệ thống an ninh mạng và xử lý dữ liệu thanh toán có tính bảo mật cao không bị mất đi. Tiến hành mã hóa mọi thông tin thẻ khi giao dịch, cung cấp giám sát chặt chẽ mọi hoạt động khi đăng ký tài khoản. :`

}

export { LOGO, TENDICHVU, NHOMDICHVU, DESCRIPTION, QR,NHOMDICHVUFULL }