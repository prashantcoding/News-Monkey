import React, { Component } from 'react'
import NewsItem from './NewsItem.js';
export default class News extends Component {
    article = [
        {
        "source": { "id": "engadget", "name": "Engadget" },
        "author": "Igor Bonifacic",
        "title": "Facebook Gaming creators can now stream together",
        "description": "If you turn to Facebook Gaming to watch other people play your favorite games, you’ll now see creators collaborate on joint streams. Facebook is introducing support for co-streaming. The feature allows up to four accounts to stream together concurrently. With…",
        "url": "https://www.engadget.com/facebook-gaming-co-streaming-announcement-170034516.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/f24bb480-25ec-11ec-bfdb-a8d3e3da2348",
        "publishedAt": "2021-10-05T17:00:34Z",
        "content": "If you turn to Facebook Gaming to watch other people play your favorite games, youll now see creators collaborate on joint streams. Facebook is introducing support for co-streaming. The feature allow… [+981 chars]"
      },
      {
        "source": { "id": "engadget", "name": "Engadget" },
        "author": "Jon Fingas",
        "title": "Jabra's owner buys SteelSeries to expand into gaming gear",
        "description": "Add SteelSeries to the ranks of gaming hardware brands selling themselves to larger tech firms. Jabra's owner GN is acquiring SteelSeries in a deal worth about $1.24 billion. The move is meant to give GN an edge in the \"upscale gaming gear\" space while provid…",
        "url": "https://www.engadget.com/gn-buys-steelseries-144522188.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/8bc7c460-26af-11ec-b679-27fd15da0db2",
        "publishedAt": "2021-10-06T14:45:22Z",
        "content": "Add SteelSeries to the ranks of gaming hardware brands selling themselves to larger tech firms. Jabra's owner GN is acquiring SteelSeries in a deal worth about $1.24 billion. The move is meant to giv… [+1103 chars]"
      },
      {
        "source": { "id": null, "name": "Blogspot.com" },
        "author": "noreply@blogger.com (Unknown)",
        "title": "Netflix releases games after gaming company acquisition",
        "description": "Netflix has bought video game creator Night School Studio and rolled out five mobile gaming titles in select European markets, the company said on Tuesday, as it looks to diversify revenue sources amid intensifying competition in the streaming space.Night Sch…",
        "url": "https://techncruncher.blogspot.com/2021/09/netflix-releases-games-after-gaming.html",
        "urlToImage": null,
        "publishedAt": "2021-09-29T22:14:00Z",
        "content": "Netflix has bought video game creator Night School Studio and rolled out five mobile gaming titles in select European markets, the company said on Tuesday, as it looks to diversify revenue sources am… [+1620 chars]"
      },
      {
        "source": { "id": "the-verge", "name": "The Verge" },
        "author": "Andrew Webster",
        "title": "Why does Amazon make games?",
        "description": "Amazon Games VP Christoph Hartmann talks about the tech giant’s gaming ambitions, which include the upcoming MMO New World.",
        "url": "https://www.theverge.com/2021/9/22/22686351/amazon-games-christoph-hartmann-twitch-luna-new-world",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/d92xLNvgCKhnD27T6gOkiayJyik=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22867722/ss_59edc8f4cd2c13495538a3c96040cd133cab6555.jpg",
        "publishedAt": "2021-09-22T15:00:00Z",
        "content": "Amazon Games VP Christoph Hartmann tries to explain the companys gaming ambitions\r\nNew World.\r\nWhen Amazon makes a new movie or TV show, the reason is pretty clear: the tech giant needs to build out … [+4872 chars]"
      },
      {
        "source": { "id": "techcrunch", "name": "TechCrunch" },
        "author": "Devin Coldewey",
        "title": "Elodie Games obtains $32.5M round to make social co-op gaming better",
        "description": "During the darkest hours of the pandemic, millions upon millions of people turned to online gaming as a way to pass time in lockdown and connect with friends they couldn’t see in person. But a social, cooperative, fun and cross-platform gaming experience is r…",
        "url": "http://techcrunch.com/2021/09/16/elodie-games-obtains-32-5m-round-to-make-social-co-op-gaming-better/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/elodie-header.jpg?w=530",
        "publishedAt": "2021-09-16T13:01:27Z",
        "content": "During the darkest hours of the pandemic, millions upon millions of people turned to online gaming as a way to pass time in lockdown and connect with friends they couldn’t see in person. But a social… [+3113 chars]"
      },
      {
        "source": { "id": "techcrunch", "name": "TechCrunch" },
        "author": "Lucas Matney",
        "title": "Evil Geniuses CEO Nicole LaPointe Jameson is coming to Disrupt",
        "description": "As the opportunities in the gaming world continue to expand aggressively as part of post-COVID shifts to the entertainment sector, esports has found its own opportunities in reaching new audiences. While competitive gaming is still in its early stages, the st…",
        "url": "http://techcrunch.com/2021/09/20/evil-geniuses-ceo-nicole-lapointe-jameson-is-coming-to-disrupt/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/Disrupt-2021-jameson.jpg?w=764",
        "publishedAt": "2021-09-20T22:15:13Z",
        "content": "As the opportunities in the gaming world continue to expand aggressively as part of post-COVID shifts to the entertainment sector, esports has found its own opportunities in reaching new audiences. W… [+2496 chars]"
      },
      {
        "source": { "id": "the-verge", "name": "The Verge" },
        "author": "Sean Hollister",
        "title": "AMD Radeon RX 6600 official: 1080p for $329, at retail any moment now",
        "description": "AMD just revealed the $329* Radeon RX 6600, a new budget 1080p gaming graphics card that should be available at Amazon, Best Buy, Micro Center and Newegg.",
        "url": "https://www.theverge.com/2021/10/13/22723611/amd-radeon-rx-6600-price-release-date-video-card-gpu",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/h3mABkNl-uiO-Lrr72kktdH1nfo=/0x95:1322x787/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22922796/rx_6600.jpg",
        "publishedAt": "2021-10-13T13:00:00Z",
        "content": "Its likely already on sale or sold out\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nSurprise! AMD just revealed the $329* Radeon RX 6600, a new… [+3844 chars]"
      },
      {
        "source": { "id": null, "name": "Gizmodo.com" },
        "author": "Sam Rutherford",
        "title": "Jabra Owner Is Buying SteelSeries Because Gaming Is $$$$",
        "description": "The past two years have seen a huge amount of buyouts and mergers in the gaming industry, and now GN—parent company of well-known audio brand Jabra—has agreed to purchase gaming peripheral maker SteelSeries.Read more...",
        "url": "https://gizmodo.com/jabra-owner-is-buying-steelseries-because-gaming-is-1847811930",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5c755c092b662a8a651847118449cffa.jpg",
        "publishedAt": "2021-10-06T21:40:00Z",
        "content": "The past two years have seen a huge amount of buyouts and mergers in the gaming industry, and now GNparent company of well-known audio brand Jabrahas agreed to purchase gaming peripheral maker SteelS… [+2004 chars]"
      },
      {
        "source": { "id": "engadget", "name": "Engadget" },
        "author": "Kris Holt",
        "title": "Some Xbox owners can now test cloud gaming on their consoles",
        "description": "Microsoft is preparing to complete a large piece of its cloud gaming puzzle when it brings the option to Xbox One and Xbox Series X/S sometime this holiday season\r\n. Starting today, though, a random group of Alpha Skip-Ahead and Alpha Insiders can try cloud g…",
        "url": "https://www.engadget.com/microsoft-xbox-console-cloud-gaming-test-insiders-190628810.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/d2ba8740-208d-11ec-af7f-05c38b1e3b01",
        "publishedAt": "2021-09-28T19:06:28Z",
        "content": "Microsoft is preparing to complete a large piece of its cloud gaming puzzle when it brings the option to Xbox One and Xbox Series X/S sometime this holiday season\r\n. Starting today, though, a random … [+1415 chars]"
      },
      {
        "source": { "id": "engadget", "name": "Engadget" },
        "author": "Kris Holt",
        "title": "Alienware celebrates its 25th birthday with a redesigned flagship gaming desktop",
        "description": "Alienware began operations 25 years ago in a garage near Miami, and the Dell-owned brand is celebrating the milestone anniversary with a stylish gaming PC. The latest Aurora system has a redesigned chassis that has extra internal space and more efficient airf…",
        "url": "https://www.engadget.com/alienware-aurora-redesign-airflow-noise-performance-040051724.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/96eb38f0-2ac3-11ec-afff-356f16b44e2b",
        "publishedAt": "2021-10-15T04:00:51Z",
        "content": "Alienware began operations 25 years ago in a garage near Miami, and the Dell-owned brand is celebrating the milestone anniversary with a stylish gaming PC. The latest Aurora system has a redesigned c… [+1685 chars]"
      },
      {
        "source": { "id": "techcrunch", "name": "TechCrunch" },
        "author": "Ram Iyer",
        "title": "For the love of the loot: Blockchain, the metaverse and gaming’s blind spot",
        "description": "The way NFTs are currently being discussed in relation to gaming are very much in danger of Killing the core gameplay loop via a financial fast track.",
        "url": "http://techcrunch.com/2021/09/16/for-the-love-of-the-loot-blockchain-the-metaverse-and-gamings-blind-spot/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1323581993.jpg?w=400",
        "publishedAt": "2021-09-16T16:51:55Z",
        "content": "The speed at which gaming has proliferated is matched only by the pace of new buzzwords inundating the ecosystem. Marketers and decision makers, already suffering from FOMO about opportunities within… [+5943 chars]"
      },
      {
        "source": { "id": "wired", "name": "Wired" },
        "author": "Gear Team",
        "title": "The 14 Best Weekend Deals on Gaming, Tech, and Cycling Gear",
        "description": "Fall in love with a new hobby this autumn with discounts on phones, bicycle apparel, and more.",
        "url": "https://www.wired.com/story/weekend-deals-september-18-2021/",
        "urlToImage": "https://media.wired.com/photos/6144e36594c8b80446869193/191:100/w_1280,c_limit/Gear-WD-FA-Gore-Wear-C7---credit-Backcountry.jpg",
        "publishedAt": "2021-09-18T11:00:00Z",
        "content": "The next season is approaching fast and temperatures are slipping. Whether you stubbornly refuse to be chased indoors or retreat to a warm living room, we won't judge you. Check out these deals on vi… [+5033 chars]"
      },
      {
        "source": { "id": "the-verge", "name": "The Verge" },
        "author": "Tom Warren",
        "title": "Xbox Cloud Gaming is now fully powered by faster Xbox Series X hardware",
        "description": "Microsoft has completed its server upgrade for Xbox Cloud Gaming. The service is now powered fully by custom Xbox Series X hardware, which improves load times and frame rates.",
        "url": "https://www.theverge.com/2021/10/7/22714067/xbox-cloud-gaming-custom-xbox-series-x-hardware-upgrade",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/jhUjLv0PgI9EVx6dTSB6j28bsf0=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22478772/acastro_210429_1777_0003.jpg",
        "publishedAt": "2021-10-07T08:15:59Z",
        "content": "Microsoft gets ready to bring its xCloud tech to TVs\r\nIllustration by Alex Castro / The Verge\r\nMicrosofts Xbox Cloud Gaming service (xCloud) is now fully powered by custom Xbox Series X hardware. Mic… [+1724 chars]"
      },
      {
        "source": { "id": "the-verge", "name": "The Verge" },
        "author": "Alice Newcome-Beill",
        "title": "This Dell gaming laptop with an RTX 3050 is just $750",
        "description": "Finding an Nvidia GeForce RTX 3050 right now isn’t exactly easy. If you’re looking to upgrade your machine, however, Dell is currently offering the G15 gaming laptop with said GPU for $750, a cool $280 off the MSRP.",
        "url": "https://www.theverge.com/good-deals/2021/9/16/22677425/dell-g15-gaming-laptop-rtx-3050-deal-sale",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/S_8pr8jU8kx6-EcD1LdrSmwn7zQ=/0x105:1463x871/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22855433/Dell_G15_Press_Image_3.jpeg",
        "publishedAt": "2021-09-16T17:30:31Z",
        "content": "It might be the easiest way to get your hands on a new GPU\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nImage: Dell\r\nThis story is part of a gr… [+2231 chars]"
      },
      {
        "source": { "id": "the-verge", "name": "The Verge" },
        "author": "Cameron Faulkner",
        "title": "Sony is releasing its Pulse 3D Audio headset in midnight black",
        "description": "Sony announced a new midnight black colorway for its Pulse 3D Audio wireless gaming headset that’s made for the PS5. It’ll release on October 22nd, 2021 for the same $99.99 price as its original white color option.",
        "url": "https://www.theverge.com/2021/9/15/22675347/sony-pulse-3d-audio-headset-wireless-gaming-midnight-black-color-release-date",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/YptjcUL-uKY0qcrKmlmnMjV1g5o=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22852384/pulse3dmidnightblack.jpg",
        "publishedAt": "2021-09-15T14:12:11Z",
        "content": "Now, we just wait for the official PS5 plate accessories\r\nSony\r\nThe Pulse 3D Audio wireless headset that Sony made to take advantage of the PS5s 3D Audio tech is getting a new color option. Itll be a… [+1520 chars]"
      },
      {
        "source": { "id": "the-verge", "name": "The Verge" },
        "author": "Alice Newcome-Beill",
        "title": "The Razer Blade 15 Advanced is $800 off at Amazon today",
        "description": "The 15-inch Razer Blade is currently on sale at Amazon for $1,800 and comes equipped with a 2070 Super for awesome gaming performance. Other notable deals today include a HyperX headset and an emotive streaming mic.",
        "url": "https://www.theverge.com/2021/9/16/22675574/razer-blade-15-sony-4k-tv-beats-amazon-gaming-headset-deal-sale",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/o0R83n6PW5LhLD-HinvwlHi4D7A=/0x0:2040x1068/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21922569/cfaulkner_200929_4214_0003.0.jpg",
        "publishedAt": "2021-09-16T14:10:03Z",
        "content": "Save big on one of the best gaming laptops\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nPhoto by Cameron Faulkner / The Verge\r\nGaming laptops a… [+7019 chars]"
      },
      {
        "source": { "id": "techcrunch", "name": "TechCrunch" },
        "author": "Devin Coldewey",
        "title": "Xbox and Special Olympics hold first ‘Gaming for Inclusion’ esports event",
        "description": "Gaming in general is moving towards accessibility, but that’s not as much the case in esports, which like other sports are competitive and by nature somewhat exclusive. Xbox and the Special Olympics are working together on a new event that combines competitio…",
        "url": "http://techcrunch.com/2021/09/14/xbox-and-special-olympics-hold-first-gaming-for-inclusion-esports-event/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/GamingForInclusion_HERO.jpg?w=711",
        "publishedAt": "2021-09-14T20:31:36Z",
        "content": "Gaming in general is moving towards accessibility, but that’s not as much the case in esports, which like other sports are competitive and by nature somewhat exclusive. Xbox and the Special Olympics … [+6605 chars]"
      },
      {
        "source": { "id": "engadget", "name": "Engadget" },
        "author": "Kris Holt",
        "title": "You can now stream Xbox Series X/S games to your PC",
        "description": "The Xbox app on PC just got much more useful. You can now use it to stream games from your Xbox Series X/S. In addition, the app can now stream all of the console titles available through the cloud on Xbox Game Pass.This is the first time Microsoft has enable…",
        "url": "https://www.engadget.com/xbox-pc-app-remote-console-play-game-pass-cloud-gaming-153728842.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/0c55c1f0-1570-11ec-befc-76d63805b01f",
        "publishedAt": "2021-09-14T15:37:28Z",
        "content": "The Xbox app on PC just got much more useful. You can now use it to stream games from your Xbox Series X/S. In addition, the app can now stream all of the console titles available through the cloud o… [+1508 chars]"
      },
      {
        "source": { "id": null, "name": "Blogspot.com" },
        "author": "noreply@blogger.com (Unknown)",
        "title": "Evil Geniuses CEO Nicole LaPointe Jameson is coming to Disrupt",
        "description": "Image Credits: Evil GeniusesAs the opportunities in the gaming world continue to expand aggressively as part of post-COVID shifts to the entertainment sector, esports has found its own opportunities in reaching new audiences. While competitive gaming is still…",
        "url": "https://techncruncher.blogspot.com/2021/09/evil-geniuses-ceo-nicole-lapointe.html",
        "urlToImage": "https://1.bp.blogspot.com/-fuZpw4KDGxg/YUmorwsjITI/AAAAAAAAAVM/7yuXuNNzH1smueYZlX_FTSbJsTiRcCc6gCLcBGAsYHQ/w1200-h630-p-k-no-nu/Disrupt-2021-jameson_compress33.jpg",
        "publishedAt": "2021-09-20T23:14:00Z",
        "content": "Image Credits: Evil Geniuses\r\nAs the opportunities in the gaming world continue to expand aggressively as part of post-COVID shifts to the entertainment sector, esports has found its own opportunitie… [+2398 chars]"
      },
      {
        "source": { "id": null, "name": "Gizmodo.com" },
        "author": "Sam Rutherford",
        "title": "New Leaks Reveal Lenovo's Plans to Make an Android-Based Gaming Handheld",
        "description": "Even though MWC 2021 happened months back in the summer, new leaks have revealed a device that looks like Lenovo’s attempt to create its own Android-based portable gaming handheld. Read more...",
        "url": "https://gizmodo.com/new-leaks-reveal-lenovos-plans-to-make-an-android-based-1847793150",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7d7dc593fca51a0aafc2199c9895372f.jpg",
        "publishedAt": "2021-10-04T15:31:00Z",
        "content": "Even though MWC 2021 happened months back in the summer, new leaks have revealed a device that looks like Lenovos attempt to create its own Android-based portable gaming handheld. \r\nWhile the Lenovo … [+3919 chars]"
      }
    ]
    constructor() {
        
        super();
        this.state={
            articles:this.articles,
            loading:false
        };
    }
    render() {
        
        return (
            <div className="container my-3">
                <h1>NewsMonkey Top Headline</h1>
                <div className="row">
                <div className="col-md-4">
                <NewsItem title="title" description="description" Imageurl="https://maharashtratimes.com/photo/msid-87041781,imgsize-81972/pic.jpg " newsUrl="ToDO"/>  
                
                </div>
                <div className="col-md-4">
                <NewsItem title="title" description="description" Imageurl="https://maharashtratimes.com/photo/msid-87041781,imgsize-81972/pic.jpg "/>  
                </div><div className="col-md-4">
                <NewsItem title="title" description="description" Imageurl="https://maharashtratimes.com/photo/msid-87041781,imgsize-81972/pic.jpg "/>  
                
                </div> 
            </div>   
            </div> 
        )
    }
}

