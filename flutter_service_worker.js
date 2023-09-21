'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f633dac77c94a46e2c032d30851cbbb5",
"index.html": "3e8ec87cf81117bd63b90c72efac3011",
"/": "3e8ec87cf81117bd63b90c72efac3011",
"main.dart.js": "58578d2167048e51bc3f50d48d04fa41",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b76c07e055537a0eea2af36d82ecf518",
".git/config": "69c3b18d9e251df4219dc2d959443ba1",
".git/objects/95/48c141193a69b50170d183d1fd1fe04040b345": "025470a9660e90ada319ff36f097b89d",
".git/objects/50/d7ce3e9737dd4e26341a6b11d4fc8ada11642d": "152aab55e7179a82fc63778b34d3faf7",
".git/objects/03/8f54a638ffd2cc54798538e3b078ef8c5b7428": "0807337a1f034e2f2e13a9f74391e513",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9e/25eb49058a425143d33245884463e0c2f44231": "e8d3025acfa76f224c577aeea6a0b3ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/0850807efd47bffc68fc7d8bf203bb3a572db7": "5f5ea0637ef8a90b62366bab42e8717e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/f534c5f0fb29369d3305fbea67db4129c3a54d": "6be7b5ddd383d65375a3227bcb645a31",
".git/objects/58/828e640e9bbda0d2385ac8665f2011f72647b3": "ba46dc4eddfd397a6bf734e3bb584abd",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/3c6c8ab17e2ce7bbfcd9b5e15fa378e900a94d": "f8d867b875da47e19fd188528bf14c67",
".git/objects/94/568a19f7d7c50bfcbbc0abb24dd26e578c64a2": "e78899ed27e193072e4b2717f61c563f",
".git/objects/5f/f7834b69650dcee1cc388e884becd6e94e8ef2": "74d62d2baa723692f688cd2e78543efc",
".git/objects/5f/658f0ee779b414424b6554c632cb2134a464ea": "6adeaca82e33c9c98782d3d296df2cf1",
".git/objects/05/5e278579ac4745dcbe51b54cbc0525f158e39d": "205fd99cc801a7379c8bee19b191802d",
".git/objects/05/6e15967594fe4fc1281fe40b5650ef00fa8be1": "69c2c71afe49f155e8abe952ec74556d",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/b5/cc232e14f8251e24cf9af9c34abda7e68c94e9": "39a36e3b41c25e78154600dfdc95f25b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/805e7bae9a8290bba1f02704b4782950d32f61": "5dbdf089e1599ac4ea2dd844d0c87e92",
".git/objects/b2/e12f9326a9dc6f83528021382dd02a9bf90c61": "a593e3412cfef183e584df8d1145cec8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/760bb1148f8019057ba811716b5e099b795132": "31d858e420991a03d7889806c536a202",
".git/objects/b3/c1212551ed3080c6fb1bab0d1441b228db1f1d": "3685d8dd8cc711a4fd343a1d3c91adc8",
".git/objects/b3/1ccdedd2352580a19dd2a04316647cb3c3721b": "10016d64c1154927c01a38242d13fe1c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/c0140244ded2be70e615dfaf500fcdb0cd0e56": "a57195276e7be79170db9b9b8931291f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/dbf77dc56996290ce4e174d2453d2d7a6ff885": "9605567af717dd271c87a90575615978",
".git/objects/c9/1ef6199ffb321db28e0e7f495a5ddd1383d570": "483e9bb9ab74962268441e654fd4df97",
".git/objects/fe/0925f0f2255ad2530db97a4f5f72c70221f7e4": "9596ba8083dd99a487020bb744486af8",
".git/objects/fb/feb2dac524e7ebf5e4148c9e3b96dbff297fe7": "0d9b5208b9f22401b43c4e775470da6d",
".git/objects/ec/d1d65c1f9553b02a837543578ebbd12d34eb07": "c748f7cb32707dbf25cd5f883145c6af",
".git/objects/18/52b5a9b490717a5a1ac2193ea0dc41e13f5d29": "391a4bb4abb528f92ec111a99dcc6ea5",
".git/objects/27/0ddeb9e05ac00e94cc7361e7451fddaf32786c": "f360bda85886635640cdbb4fdd74ff55",
".git/objects/27/493ddfa0e4ce787517588de4131e2b41458b97": "0daa914b6335de728466a928fd54ab2d",
".git/objects/pack/pack-9c8857f6fd4dd4f5d22c31b3127a428f148e632c.idx": "4f61674d321e8bf00bec86bdd4da2e47",
".git/objects/pack/pack-9c8857f6fd4dd4f5d22c31b3127a428f148e632c.pack": "c65bc78fe466362424fc57c1785a6c18",
".git/objects/11/6d948ba100f0869a451c38f831c1085be5a026": "4048e6dfecbc75d9915a5cf071c7eb8e",
".git/objects/7c/81f82ad82bb18cbcfda79a1069494b0cd0d1f8": "bc1c20ff9f44f68971314a24db8194d0",
".git/objects/45/75c69619ee3226c1c408aecf117b92fbf614db": "0278c9a57db67df880f69a150368c5e3",
".git/objects/73/2186c979fcfc50f4e92383fc3226127d3b1430": "6d46c1773c83d0fb227ad0cfc40da090",
".git/objects/87/8e1ea45b6b7772a7e5f8cbc107c01e236eacde": "a6e5d02e62376ca3ace7131e7b57d936",
".git/objects/80/bc82e86e5b1fa869c3e48b30ab6c6b20359567": "c411a913a5c771fa94583f041612b352",
".git/objects/7b/147bceed51b481c6b33f2ef440feed6767b01c": "22305e6e23a8210369cfabcbbc05ea73",
".git/objects/8f/030958b5c9f796528c2a9c4a13632d842757f8": "5bb71ba3a056564aedba01bc8155363e",
".git/objects/8a/f306546fdb176a6e287fdf6d455b94cc056101": "fd173d15935980314310487f97aa1cb0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ee617244b1fbf3ecf4a92816ddfcebede9846c": "d920101356b2ef4f088ba363150bd1cf",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4d/5ea96313453198af9d870e5dc1fd5863e5e20d": "20454444cc469bf44bccf12a8bd12ace",
".git/objects/44/751f23ed372d932d9acc0844c71bef5c29da07": "285c839497b923602bdc7bf1c49d7b21",
".git/objects/88/815a4b663285206456d6b7d4daa4685b29da00": "3901c6eca4115c5fe9458182f137afd6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f7c3d8e75fc5773e3c6a383adc69bc05790163": "b2f5f596e4f784548b4c9fe173b08b62",
".git/objects/6b/c26dc8fddd16067988f5f60b54190ed1fba063": "aedcf21e6897e1adb14dee1fe9891364",
".git/objects/6e/1e275e3cd01fa6a8946081ce927577c4c41819": "3eac5a1b3de10831031b47a4eb0a2283",
".git/objects/9a/51648a4ce3b071ab44ccf4031ff24a22ea7799": "1596ce71bb63fc1346bac86430e5b8cc",
".git/objects/36/a664916791847e61c58b7da4454f60ce0499fa": "26247379d5e5effbf10f4adc11477ec3",
".git/objects/36/4e1c2ac70ce032c48c72c40be7567bbfbabe27": "1b7ef4909349e381a140292f85074861",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/48bbdbe050c157f8dfc6b0652e77e9c50f958a": "c98bccb7069fac4c36e1e105fbbcc01d",
".git/objects/62/991b90f53db1f8c380e5be8c4e2d14147eefde": "eed03ab71280229e79827291bc97da51",
".git/objects/96/22eb3acfcbb874c770d7bd1a5ca77f74253138": "f29367d386128ce3af6d03d222235b2b",
".git/objects/3a/2b370fe1c902e54d14dec992a20d1cf01e4d80": "0dee40e9e7cd44e71730bd473396ef39",
".git/objects/3a/837d1221a6d33ae32dc2b73db36c6c46df23e3": "285004a6b8024eb52759fabb1d05acc3",
".git/objects/30/b70e42c760ebc06d1e7581e7c6afe22bea4a8b": "d148e08ef95a9185ff41b9f4851cb6ab",
".git/objects/37/477dae3874d2c35d1dd799d976a0c1dc047f99": "14136abb0e16a8407e5c5faceea55371",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/19c9ce0d9a028bd1cffe77c41a493253b01ed1": "e8b5fe0979f49e8c4d2e6f1df8615481",
".git/objects/01/e8762ae0e0be1be177195d25048b6858d704f4": "efd80086b6d773c700c370669e94a64f",
".git/objects/01/3872ea9678f61b322e8409696ab156218e6c6d": "a73fa20cf1e27c46fd4c7edc9ec4786c",
".git/objects/64/a6ddc6f75048d3ebc366e4cfc2992dbca625a8": "05e8b3aace0758d2234c8042132615ab",
".git/objects/64/8fac0794ca0f1116d518bccee7f690c1c57e53": "0cd1f85c94f18ea34aa29e91f0df0a0d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/8ccbf1dcc7903efd9c1c0042170616586521a0": "33e9150f002add1baa8ce9a1bc3328c8",
".git/objects/a0/2acf0ff440414fc7f353f3eb4cb7c25f7d5164": "e0ba339a96638db3d63b1b8bdfeb6007",
".git/objects/b1/97116e65b14001f39c7e82cef2508a8cbc6ddd": "dc0184b689deb3e97fd1b6103442d0f9",
".git/objects/b1/8068bdbf7035e14f53ece900d35db2ed5cddfb": "6e3b0303f0df0647df4d9d2c3aa25618",
".git/objects/dc/b961ab57e3900271ebb945e4cf4ba93768e56e": "d67134fdb3bae9a6f35cdfea9320abe7",
".git/objects/d5/8ad6b948307550586e4eee80b85a44b4f4cfda": "d38d243956b7e305acd5901c83240716",
".git/objects/aa/a3a43582ab760ded3a355936d143981257115a": "bb7879b7547355ac2cd9a4f6951711d1",
".git/objects/af/5c61903786b807ef319a1d086b078d5fe839d9": "9f1a682e2c1153e0faa417bdb1c3f7bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a0b00cd2dde38818b4795438025b24e5266365": "8ecb370bc4016c83bdfe085507ec70ed",
".git/objects/c4/c668a43d67ce17d9ce691451833991b914b851": "9096010bd445bfac539fc926208920d9",
".git/objects/ea/25f1d1a9cbd82c09fe21caa8c07b972ff781e7": "22c1cbf93c2fda86e5ad3a9f1afaab90",
".git/objects/f0/1fb5fb26e07de1d262b2e218f66da50d52bfe3": "e15ea148c2061c021b60fd67dc7cd843",
".git/objects/ff/f43df3da610bd33f37931b01d0a81b6ac33333": "36e8bbba69895b850195dd977d318f85",
".git/objects/c2/e7a2b9bf17bc543535b94c305080e616c45bf9": "bb69688fa67637a27b8a59c39c5114fd",
".git/objects/e7/b4bdcd58683fb149ee2289f70ef625752d7e94": "e91b4850a20d8f59739a206c9a9747cd",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/a5aea4949dea175acdd94553a3e403b88ea3cf": "2926acf2e54b0288291ea49336338a9a",
".git/objects/cb/80b8528a4d49cfff292dca61e8bca2eaa3b5ab": "cbb3be4ec9b082b543d643d0e6138869",
".git/objects/cb/165e2f4055075d003168588073bae2e2fb158f": "9383d5bebbdfe12b150feeec7b85b31b",
".git/objects/ce/c67056d96a27d81b3fb60b9167ab584f495f04": "190a71e35586893993f08310e44a4cc3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/041704c5f60bcf03a81d139a14ac34169087c7": "2d16ee612dcebccdc71c244a1238e38a",
".git/objects/1b/e5b7fbfd83902d9c6b52d91c4edb643419e8a1": "c542d7f436a2f5cdd16ec1a5626f4d57",
".git/objects/1b/132d02b8f25078604b9f67a4e81d9257c16474": "eaadc16ed36235f2864db2f2acf114d2",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/e1742df9dfc97983b1a5d1db83f88cc45040d8": "6dae76e52bf4108aa3aff7bedaa48248",
".git/objects/70/445ef6d672ab5bde7d71f9b2dc6177c31405e8": "e6d9152da9decfa5980a6b79e261150f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/770d591fd0c49e88731fc7d02c8228c12077c2": "94a8ff38528b15e91114d55b23df40b3",
".git/objects/24/ef4176fa5ff9829c3f8b467858de825ae77686": "8039fc30a2ba8b1e3c26c76f0480e02a",
".git/objects/8d/1b6ecb4e343bd9a4082401ff94234b4a38371f": "161b7137644a2c7ea2f1f3ccff33f3bc",
".git/objects/85/b6d8b3de98bdb659d76e4598dda453c6bda681": "bda2dbe9e10d9c4b5c4b464a535aaa05",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/cd5b29b611430cef80c4f96432fe9ba9d512e7": "2258ac8288d0d67df2769981c24781f3",
".git/objects/1d/194a5e8f56af01248636cae850f13b646a6c17": "a58dc5b6ca9a979e194ae8c7c51b88c8",
".git/objects/76/ef9c6a7ff1fe0689af9f9401325f947015b1ef": "55c2cb24f97c88c1cd1ad55b692fe40f",
".git/objects/82/e8954d88f706244062e975d471d6ac33e86494": "165cdb1e78ac357f2da3932390ec1656",
".git/objects/2e/a62aecb896b5fdb3959c18dab517c375fd9ca4": "4a11b9abbea0c5c35a7c12c79341fcac",
".git/objects/47/8f3c79e15e71ebbf6cd7d8868ad702d9bc8124": "61ca2d45385f0e5125d18abe04e19d8f",
".git/objects/47/69b5029d5f43d38ce50cbac4d8d523ede34749": "8bc149153ea9052e862eb488a0a0821d",
".git/objects/8b/fb410bf5fcabca596ec0ede2582fedae0375ff": "fbb864ec04dddde5fdbd0e39832303b0",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afd53bf2bdf03c0f2030308a35bb8e54",
".git/logs/refs/heads/main": "afd53bf2bdf03c0f2030308a35bb8e54",
".git/logs/refs/remotes/origin/main": "3aa5aa5522cacaf80c24613756c06f47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "37ea598eb807b4e6935e6c59467309df",
".git/refs/remotes/origin/main": "402890dde1f7f31a96e0b61c74cf9d98",
".git/index": "c1b18fc958d9d12ee136fa40b412e711",
".git/COMMIT_EDITMSG": "0e2b30a1dab26f00c13676dce4bc3a1d",
".git/FETCH_HEAD": "eb10da2e38e13252e38c6e44737db6ae",
"assets/AssetManifest.json": "901fd1be9e675907c893b7a62badc646",
"assets/NOTICES": "c882eda6cbd670fa970bf89c64e5562c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "1376eeb78db2d8b3930447dbb5374afa",
"assets/fonts/MaterialIcons-Regular.otf": "3b99b46c88032dca9eb7521c84b13e4a",
"assets/assets/contact/mastodon_logo.svg": "0b86e21b4e85acd0f2c4c1ec30cdd8ba",
"assets/assets/contact/github_logo.svg": "91a40edc6eab6c897847f61e33397296",
"assets/assets/contact/linkedin_logo.svg": "6fd100637897d74c56be90f9f25f1aa1",
"assets/assets/contact/threads_logo.svg": "109dfcb15ee36854018d13ebc4ad121a",
"assets/assets/app_img/app_sample.jpg": "aaa60393c4a909377e107d28094477bd",
"assets/assets/img/profile_img.jpg": "a15e426e0adf1b410381a6b8ad2bf182",
"assets/assets/img/contact.jpg": "a27af9878a885c37a15c3d241552d75e",
"assets/assets/img/avatar.jpg": "5efdc7a77b1587a43cb621e4a9e63f5b",
"assets/assets/img/visits_picnic.jpg": "a1aa783ea6ea6a734786f7158d5c6f24",
"assets/assets/img/collage.jpg": "4c101d1150999d88b25c4bf7bf681513",
"assets/assets/json/projects.json": "48e3b54ade3cab4c54c5bb0c15a075ab",
"assets/assets/json/technologies.json": "96643d9172e85cd4f564ccea81eed2ee",
"assets/assets/logo/logo_svg.svg": "a4ce9b5f79e20c4826d018c0d8fa11cc",
"assets/assets/logo/tablet_logo.svg": "e01cb83cdfb69dd66a4da3a7ccc73537",
"assets/assets/icons/app_icon/citi_icon.svg": "2410cf9c009a1de4297c0d9b493b39ae",
"assets/assets/icons/app_icon/dgnotif_icon.svg": "a105fa8529ab2d44844480cf115b2d46",
"assets/assets/icons/app_icon/pocket_icon.svg": "d034254c5f2388cbf241e4275f97f7b5",
"assets/assets/icons/app_icon/jonb_icon.svg": "d118f7ac03a637934290da104f93c80c",
"assets/assets/icons/app_icon/aplus_icon.svg": "e7c8c9370df95f8dbdf2a6929774ee2e",
"assets/assets/icons/app_icon/lesson_icon.svg": "3b05fa06cce623ea94d37049c47f8049",
"assets/assets/icons/app_icon/pulse_icon.svg": "5a1858c671939ad233a74fdfcb8a29f5",
"assets/assets/icons/app_icon/toaster_icon.svg": "208c3dec2404505328eedb37f403c573",
"assets/assets/icons/app_icon/blue_icon.svg": "71feb9b0645fd2643d1b8a63d8aab957",
"assets/assets/icons/app_icon/myadt_icon.svg": "14527ce0e993687dd9491bc19609c94e",
"assets/assets/icons/app_icon/clark_icon.svg": "2b7eb4541094697135de343d54f3aa1b",
"assets/assets/icons/app_icon/fived_icon.svg": "7c79d8c169c17c632e7d73fec25825dc",
"assets/assets/icons/contrib_icon/api_icon.svg": "172c7cd65a7e94c6966c3e73912e4a21",
"assets/assets/icons/contrib_icon/dev_icon.svg": "4b8c6a89fa76dff57e3f9072ec400107",
"assets/assets/icons/contrib_icon/localdb_icon.svg": "45ebb1721917be1978aa9bd1551ea0c6",
"assets/assets/icons/contrib_icon/bluetooth_icon.svg": "61aa9128802aaafe25e43cc4e0a9e054",
"assets/assets/icons/contrib_icon/poc_icon.svg": "99a82a5c4f7e7e88ebed86441c436d21",
"assets/assets/icons/contrib_icon/appstore_icon.svg": "f230862dfa0a99e17c7e61b90319e210",
"assets/assets/icons/contrib_icon/access_icon.svg": "725a2fd25443960de833de29897e607d",
"assets/assets/icons/contrib_icon/arch_icon.svg": "0316664e770946b8539a54dc5b3963ee",
"assets/assets/icons/contrib_icon/libdev_icon.svg": "09ad75286ff9944ab364c886625adf9a",
"assets/assets/icons/contrib_icon/auth_icon.svg": "efcecabab5f9ae3ea0643e2ffb8d8610",
"assets/assets/icons/contrib_icon/unittest_icon.svg": "7fd5c75234c5d7b4fc68aaa95bb62454",
"assets/assets/icons/contrib_icon/mentor_icon.svg": "9ca2ef21594c744d5d64db2484c1496a",
"assets/assets/icons/contrib_icon/design_icon.svg": "7f3305a56f27ff4c64d993bc53a15c13",
"assets/assets/icons/contrib_icon/cloud_icon.svg": "0e9db8250fa7d2c58f239bf8998bea3c",
"assets/assets/icons/device_icon/tablet_icon.svg": "c5902386b21a586f0cc7a962c71c67df",
"assets/assets/icons/device_icon/phone_icon.svg": "84a8a8429e67766f6515a5344d0be62c",
"assets/assets/icons/device_icon/tv_icon.svg": "cd2c55e7dcd0fdf63fcde43c15d52be0",
"assets/assets/icons/device_icon/watch_icon.svg": "b0d1f0c1e4f688ce7ea0754e6c4427ba",
"assets/assets/icons/device_icon/library_icon.svg": "aaa9442ee8d2f43ddf16018c3915c5ed",
"assets/assets/icons/tech_icon/rive_icon.svg": "ae8c9f47d6d8c6b70ec6e435f2700ca3",
"assets/assets/icons/tech_icon/swiftui_icon.svg": "8c7eb8dc128f89387c45d1a6af5a4303",
"assets/assets/icons/tech_icon/git_icon.svg": "29dad515dcbc2d59e16a4b1ed8cecba7",
"assets/assets/icons/tech_icon/carthage_icon.svg": "d3bdd699c5062466a2f20765689c67bc",
"assets/assets/icons/tech_icon/firebase_icon.svg": "a6876d3e87b3d39d32f49d298162c7f8",
"assets/assets/icons/tech_icon/dart_icon.svg": "c36e142f5aed1ad1efe6b7bef191af51",
"assets/assets/icons/tech_icon/bitbucket_icon.svg": "3f278c1276035592bf3ee60a71c6cb14",
"assets/assets/icons/tech_icon/spm_icon.svg": "53114ee4dc38a2f5c4a969b12d1ba69d",
"assets/assets/icons/tech_icon/figma_icon.svg": "da9327d851c516ae853f8c30238ff57e",
"assets/assets/icons/tech_icon/github_icon.svg": "8cf2f605179d38ad27ab0fc704a0615a",
"assets/assets/icons/tech_icon/dartpkg_icon.svg": "adffbba191eecb4a45cd4f68c3a1f29e",
"assets/assets/icons/tech_icon/lottie_icon.svg": "935b553047f7e88172383da88236b0c3",
"assets/assets/icons/tech_icon/swift_icon.svg": "d260eb831c96a9337e4be3063fc11d6d",
"assets/assets/icons/tech_icon/snapkit_icon.svg": "19d4cbd037842a0cf17a7777a1fad5f3",
"assets/assets/icons/tech_icon/supabase_icon.svg": "f469a65c8845ea7fea3222129572b173",
"assets/assets/icons/tech_icon/auth0_icon.svg": "8789248c13fc97544cafada3c4b6cd35",
"assets/assets/icons/tech_icon/objc_icon.svg": "46bb5b8d74c620802b87f76f8e905493",
"assets/assets/icons/tech_icon/autolayout_icon.svg": "d8e51d084429cad1adca422363ddd9ae",
"assets/assets/icons/tech_icon/pods_icon.svg": "f1a661057df4b57f73c6f60599fbcd18",
"assets/assets/icons/tech_icon/flutter_icon.svg": "61e1b66897488aaaa26a0966a6acb04c",
"assets/assets/icons/tech_icon/sketch_icon.svg": "790199361dc2a91cfa374b400f3e18f4",
"assets/assets/icons/github_dark.png": "cc3585d70ca752f8c69d2b04da3222a2",
"assets/assets/icons/mastodon_dark.png": "0b2414b4d971bcb725dc0e974507dee1",
"assets/assets/icons/btn_icon/appstore_icon.svg": "ea278ba515d9355913b872b56519b82b",
"assets/assets/icons/btn_icon/github_icon.svg": "0317eeedf9047b7d663f6b881b77b5a8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
