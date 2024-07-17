let articlesSliderWrapper = document.querySelector('.article-swiper-slider');

let allArticles = [
    {
        id:1,
        title:'راه های موثر برای پاک کردن لکه ها از روی لباس',
        des:'نظافت منزل برای بسیاری از افراد کاره بسیار طاقت فرسا و وقت گیری است و بسیاری از افراد خانواده وقتی اسم نظافت منزل را میشوند یاده خستگی ها و طولانی بودن پروسه آن میفتند . اما شاید علت طولانی مدت بودن پروسه نظافت منزل راهکار هایی است که ما برای انجام آن به کار میبندیم . وقتی که تکنیک های نظافتکاری سریع را یاد بگیریم میتوانیم پروسه نظافت منزل را به حداقل برسانیم .',
        img:"../dist/assets/main-page-images/artciles-cover/article-one.jpg",
    },
    {
        id:2,
        title:'رژیم غذایی متعادل چیست؟',
        des:'بسیاری از ما وقتی اسم رژیم را میشنویم به یاد نخوردن ها و اراده ی زیادی میفتیم که باید در هرموقعیتی آن را حفظ کنیم . اما در حقیقت اگر بخواهیم علمی تر به این موضوع بپردازیم داشتن رژیم غذایی به هیچ عنوان به این معنا نیست که شما هیچی نخورید و خیلی کم بخورید تا بتوانید وزن کم کنید و به وزن ایده آل خود برسید.',
        img:"../dist/assets/main-page-images/artciles-cover/article-two.jpg",
    },
    {
        id:3,
        title:'راه های سرگرم کردن کودکان در منزل',
        des:'یکی از معضلات همیشگی و اساسی خانواده ها سرگرم کردن کودکانشان است. به خصوص به علت اینکه کودکان ممکن است به دلایل مختلفی مانند‌ تعطیلی مدارس به علت آلودگی هوا و یا تعطیلی مدارس در فصل تابستان خانه نشین شوند و با دوستان هم سن و سال خود کمتر ( به خصوص دوستان و همکلاسی های مدرسه شان ) کمتر رفت وآمد داشته باشندو با آنها وقت بگذارند.',
        img:"../dist/assets/main-page-images/artciles-cover/article-three.jpg",
    },
    {
        id:4,
        title:'ترفند های نظافت منزل',
        des:'نظافت منزل برای بسیاری از افراد کاره بسیار طاقت فرسا و وقت گیری است و بسیاری از افراد خانواده وقتی اسم نظافت منزل را میشوند یاده خستگی ها و طولانی بودن پروسه آن میفتند . اما شاید علت طولانی مدت بودن پروسه نظافت منزل راهکار هایی است که ما برای انجام آن به کار میبندیم . وقتی که تکنیک های نظافتکاری سریع را یاد بگیریم میتوانیم پروسه نظافت منزل را به حداقل برسانیم .',
        img:"../dist/assets/main-page-images/artciles-cover/article-four.jpg",
    },
    {
        id:5,
        title:'پرستاری از بیمار در منزل',
        des:'بیمار شدن یکی از اعضای خانواده میتواند مشکلات زیادی برای خانواده به وجود بیاورد. در اکثر مواقع افراد اعضای خانواده تجربه ی کافی در زمینه ی مراقبت و نگهداری از بیمار خود را ندارند و حتی دارای شرایط و موقعیتی نیستند که بتوانند از عهده ی این کار بربیایند. اکثر مردم فکر میکنند که بیماری فقط در محدوده ی سرماخوردگی و موارد شدید تر از سرماخوردگی تعریف میشود اما اکثر افرادی که نمیتوانند پیگیری روند درمان بیمارشان در منزل باشند افرادی هستند ممکن نقص عضو شده ، مبتلا به سرطان ، مبتلا به بیماری های مزمن شدید و خطر ناک مانند‌ آسم و .... باشند.',
        img:"../dist/assets/main-page-images/artciles-cover/article-five.jpg",
    },
    {
        id:6,
        title:'راه های موثر برای پاک کردن لکه ها از روی لباس',
        des:'دوره سالمندی دورانی است که یک روز تمامی ما اگر عمرمان کفاف دهد آن را تجربه خواهیم . سالمندی دورانی است که فرد با چالش های بسیاری در زندگی رو به رو خواهد شد که ممکن است در ابتدا برای حل این چالش ها بسیاری سختی ها را تحمل کند تا به مرحله ای از درک و پذیرفتن برسد که باید خود را با شرایط فعلی وفق بدهد. در این دروان بدن تمامی ما دچار تغییرات اساسی فیزیولوژکی مانند ضعیف تر شدن عضلات بدن ، از دست دادن توانایی راه رفتن به طور معمول ، کم شدن و ضعیف شدن بینایی و شنوایی ، ضعیف تر شدن سیستم ایمنی بدن در مقابل بیماری ها و از همه درد ناک تر کاهش عملکرد حافظه که در مواردی اگر شدت زیادی داشته باشد آن را آلزایمر ( یکی از زیر شاخه های زوال عقلی ) گویند.',
        img:"../dist/assets/main-page-images/artciles-cover/article-six.jpg",
    }
];


allArticles.forEach((article) => {
    articlesSliderWrapper.innerHTML += `
    <div class="swiper-slide">
        <div class="rounded-3 article-card">
            <img class="article-card__image" src=${article.img} alt="">
            <div class="d-flex bg-gray-100 flex-column gap-3 p-4">
                <h2 class="fw-bold fs-2 position-relative ps-5 text-dark mt-5 card-title min-h-45px">${article.title}</h2>
                <p style="text-align: justify;line-height: 1.5;" class="text-gray-700 fs-5 line-clamp-1">
                ${article.des}
                </p>
                <div class="d-flex justify-content-between my-5">
                    <a class="text-primary position-relative" href="#">
                        <i class="bi bi-chat-left-dots fs-1"></i>
                        <span style="width: 10px;height: 10px;padding: 10px;position: absolute;top: -12px;right: 13px;" class="badge badge-danger d-flex justify-content-center align-items-center rounded-circle">۰</span>
                    </a>
                    <div class="d-flex gap-2 align-items-center">
                        <span style="position: relative;top: 2px;">1403/04/03</span>
                        <i class="ki-solid ki-calendar-2 text-primary fs-2"></i>
                    </div>
                </div>
                <a class="custom-btn bg-primary mb-5" href="/blog/effective-ways-for-cleaning-stains-on-clothes">
                    ادامه مطلب
                    <i class="ki-solid ki-black-left fs-3 text-white"></i>
                </a>
            </div>
        </div>
    </div>
`
})  


