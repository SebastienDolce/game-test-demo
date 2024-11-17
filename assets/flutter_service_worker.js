'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "621e9b04862b995e4c3349afef438dc8",
"assets/AssetManifest.bin.json": "fbb9009ead97ae642d65dd949df21655",
"assets/AssetManifest.json": "87698a022cbae519598f6cac6ffe2b72",
"assets/assets/bobs_system-74_65_222_13.json": "c9e6d66e1831d770607c5159d2efacf3",
"assets/assets/ElysiumNetwork-74_25_112_135.json": "812eac98e6514f8576821161276cde6d",
"assets/assets/home_system-127_0_0_1.json": "833265a91ab20d89dbd9c9ebd407a2db",
"assets/assets/images/1_Generic_32x32.png": "48e27dc182a747eb53cec842259a57ae",
"assets/assets/images/4_Bedroom_32x32.png": "8ba54559614da6e601c2b9351b69fe34",
"assets/assets/images/Accessories/Accessory_01_Ladybug_32x32_01.png": "ccc401abec9ebeff84220ce13d733061",
"assets/assets/images/Accessories/Accessory_01_Ladybug_32x32_02.png": "8ae67852bde7296f669583de0d5faf50",
"assets/assets/images/Accessories/Accessory_01_Ladybug_32x32_03.png": "a443d315962b429fb9916874bbbdb3cc",
"assets/assets/images/Accessories/Accessory_01_Ladybug_32x32_04.png": "49d9a45ee0c9f3effab203e1eb2e8754",
"assets/assets/images/Accessories/Accessory_02_Bee_32x32_01.png": "e2ddc31b88c659677b5c413cbd2e7476",
"assets/assets/images/Accessories/Accessory_02_Bee_32x32_02.png": "9142dc086714e40672b5284e433e13c1",
"assets/assets/images/Accessories/Accessory_02_Bee_32x32_03.png": "23b58a7852a69b1d1660712a8ab664ad",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_01.png": "66e6acf3e3691c00f724cd734daeb5c9",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_02.png": "ca45d5f8b6bccc50b7acd544249f045e",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_03.png": "5ada2c70144dfc6759da7649da086c7b",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_04.png": "0a2d3e4aacb12296369ddad82e0a03cf",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_05.png": "a581458948b63fbeba0a1844e0829adc",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_06.png": "dbb81f8db7c6970c7b54e42edc66b6b1",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_07.png": "6d4dba25485323ca35a259e1aac65b21",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_08.png": "c2599eabf22eacd5e83136fefb7b34c5",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_09.png": "31ab16d8e073f18a814923ec6bdf60bc",
"assets/assets/images/Accessories/Accessory_03_Backpack_32x32_10.png": "a477327ddf946115e604530a107d977f",
"assets/assets/images/Accessories/Accessory_04_Snapback_32x32_01.png": "e2ebb9e55e6c6fafee0a85d2e22ae772",
"assets/assets/images/Accessories/Accessory_04_Snapback_32x32_02.png": "c8c9088c07af793386a0b9ea24ef0122",
"assets/assets/images/Accessories/Accessory_04_Snapback_32x32_03.png": "c9d96ee6ccd2fc605a94c3638de91a21",
"assets/assets/images/Accessories/Accessory_04_Snapback_32x32_04.png": "71b5194ad348c6610a49f7bebc684c7a",
"assets/assets/images/Accessories/Accessory_04_Snapback_32x32_05.png": "ed17b260b9ebe3edba7dc1085654b600",
"assets/assets/images/Accessories/Accessory_04_Snapback_32x32_06.png": "9d0211c87084313bce1a230afeaf9fea",
"assets/assets/images/Accessories/Accessory_05_Dino_Snapback_32x32_01.png": "fc2e95779408716d45231e03010be051",
"assets/assets/images/Accessories/Accessory_05_Dino_Snapback_32x32_02.png": "c2cfaf008c36fd97039ab14cefeedf40",
"assets/assets/images/Accessories/Accessory_05_Dino_Snapback_32x32_03.png": "aa9b45cd077c9a19409bf7c693f151b9",
"assets/assets/images/Accessories/Accessory_06_Policeman_Hat_32x32_01.png": "582b5834545cde080e0bdad1b930a3fd",
"assets/assets/images/Accessories/Accessory_06_Policeman_Hat_32x32_02.png": "6c1cb765e828cebacbe6f53236997950",
"assets/assets/images/Accessories/Accessory_06_Policeman_Hat_32x32_03.png": "7c707bf990a8c012fd1c9f754cd1ddd1",
"assets/assets/images/Accessories/Accessory_06_Policeman_Hat_32x32_04.png": "1c7bb6fed1d7daf0c3c8e75931220b35",
"assets/assets/images/Accessories/Accessory_06_Policeman_Hat_32x32_05.png": "737335adbde914b53e21102651aa1134",
"assets/assets/images/Accessories/Accessory_06_Policeman_Hat_32x32_06.png": "b499a89ba6c3a20325727ef33d4aea2c",
"assets/assets/images/Accessories/Accessory_07_Bataclava_32x32_01.png": "d453ea7f9285ae75b8881a7f152bf81f",
"assets/assets/images/Accessories/Accessory_07_Bataclava_32x32_02.png": "167055d68e985203d42fc6716288367d",
"assets/assets/images/Accessories/Accessory_07_Bataclava_32x32_03.png": "820a38c3d8a781d5bc1be0917ab73cf6",
"assets/assets/images/Accessories/Accessory_08_Detective_Hat_32x32_01.png": "9cf47285e459aceeb24d85a2204d7283",
"assets/assets/images/Accessories/Accessory_08_Detective_Hat_32x32_02.png": "46b6d3acdfe8a91f66c8b130485d9d62",
"assets/assets/images/Accessories/Accessory_08_Detective_Hat_32x32_03.png": "2495dff8283011dda32c65429fc16313",
"assets/assets/images/Accessories/Accessory_09_Zombie_Brain_32x32_01.png": "d067022dfe9956ab834f6411c91a9848",
"assets/assets/images/Accessories/Accessory_09_Zombie_Brain_32x32_02.png": "0730eabaa82f9c23694bbfb99068679d",
"assets/assets/images/Accessories/Accessory_09_Zombie_Brain_32x32_03.png": "eadefa2a97009ebea965c3de96669958",
"assets/assets/images/Accessories/Accessory_10_Bolt_32x32_01.png": "d1bac2c2a7070f454e89988e4724a1ce",
"assets/assets/images/Accessories/Accessory_10_Bolt_32x32_02.png": "b0d4f227a3f96f26885d4bcc36ce61bf",
"assets/assets/images/Accessories/Accessory_10_Bolt_32x32_03.png": "1a8d9ba59131fe42807611b3381de50b",
"assets/assets/images/Accessories/Accessory_11_Beanie_32x32_01.png": "cdfc72976a23fbbbe10a6a6b43655a14",
"assets/assets/images/Accessories/Accessory_11_Beanie_32x32_02.png": "1b1c1f169a8932c00b82273c24464a51",
"assets/assets/images/Accessories/Accessory_11_Beanie_32x32_03.png": "bcae16e1075cbe6cea0494e60f35a0ae",
"assets/assets/images/Accessories/Accessory_11_Beanie_32x32_04.png": "8da062def31f20328d935169640e7570",
"assets/assets/images/Accessories/Accessory_11_Beanie_32x32_05.png": "3bb7e23b0940e392fb543f26b1c46e9b",
"assets/assets/images/Accessories/Accessory_12_Mustache_32x32_01.png": "7f70fb88a88081a3293427e9d55e1919",
"assets/assets/images/Accessories/Accessory_12_Mustache_32x32_02.png": "81042f5b950f93b4550d1f133a42a45f",
"assets/assets/images/Accessories/Accessory_12_Mustache_32x32_03.png": "0ee7151c93a75ba633051ae1a0491f67",
"assets/assets/images/Accessories/Accessory_12_Mustache_32x32_04.png": "459d56566bfb66b4bb488dd6d00e1d1a",
"assets/assets/images/Accessories/Accessory_12_Mustache_32x32_05.png": "9dc1ef56d118bce76cfde8c55237febf",
"assets/assets/images/Accessories/Accessory_13_Beard_32x32_01.png": "e6185c9658ea1527ae4371e4e9753757",
"assets/assets/images/Accessories/Accessory_13_Beard_32x32_02.png": "54dfde6b56b19038d44d5effd3b02e8b",
"assets/assets/images/Accessories/Accessory_13_Beard_32x32_03.png": "b37168e092a978a26ff8a123ad5e6f53",
"assets/assets/images/Accessories/Accessory_13_Beard_32x32_04.png": "5566469c459981ab919a3846b09ee291",
"assets/assets/images/Accessories/Accessory_13_Beard_32x32_05.png": "27ab45afd2103ecc690b638fef9cef46",
"assets/assets/images/Accessories/Accessory_14_Gloves_32x32_01.png": "7034e690eb206c927c179f826a7efc94",
"assets/assets/images/Accessories/Accessory_14_Gloves_32x32_02.png": "b37e5512a0258534c2caf6dceb5349da",
"assets/assets/images/Accessories/Accessory_14_Gloves_32x32_03.png": "8ceaebec63992a67c8ff81d497184d6a",
"assets/assets/images/Accessories/Accessory_14_Gloves_32x32_04.png": "240dbcfb5cbb34e7df347dd8e2298445",
"assets/assets/images/Accessories/Accessory_15_Glasses_32x32_01.png": "b93475dd2214d8e19ad329c8b9137a5b",
"assets/assets/images/Accessories/Accessory_15_Glasses_32x32_02.png": "cc391a7fe4e552b7cc50ddd67dcb464c",
"assets/assets/images/Accessories/Accessory_15_Glasses_32x32_03.png": "1a7f8d83aed37da464eac7116ae29cbf",
"assets/assets/images/Accessories/Accessory_15_Glasses_32x32_04.png": "971392edfa06b7fd32622ff291047b6f",
"assets/assets/images/Accessories/Accessory_15_Glasses_32x32_05.png": "a8b494561a79e04eb63a065d4a3ea4c4",
"assets/assets/images/Accessories/Accessory_15_Glasses_32x32_06.png": "31d79bffe30960ccf9d3d0082fb2b382",
"assets/assets/images/Accessories/Accessory_16_Monocle_32x32_01.png": "860c098887dbea13e3c2edefdfa667ea",
"assets/assets/images/Accessories/Accessory_16_Monocle_32x32_02.png": "dac0c1ac477b956d3fcf696ddc7604d9",
"assets/assets/images/Accessories/Accessory_16_Monocle_32x32_03.png": "f67234e2164d4bb55ca39001c9a800e0",
"assets/assets/images/Accessories/Accessory_17_Medical_Mask_32x32_01.png": "806db11d739507296ae44f3de1fa9d2f",
"assets/assets/images/Accessories/Accessory_17_Medical_Mask_32x32_02.png": "259ca699ec294f86259f491e01635d74",
"assets/assets/images/Accessories/Accessory_17_Medical_Mask_32x32_03.png": "a99a440e5489a9f9a579163bbacca422",
"assets/assets/images/Accessories/Accessory_17_Medical_Mask_32x32_04.png": "232438c2ed5c2571d6e93c900573d1c1",
"assets/assets/images/Accessories/Accessory_17_Medical_Mask_32x32_05.png": "ccc3072d81bbc734ef772f369289dbd0",
"assets/assets/images/Accessories/Accessory_18_Chef_32x32_01.png": "1b7c73827d16a1e840ca525265a5adf2",
"assets/assets/images/Accessories/Accessory_18_Chef_32x32_02.png": "4a7b9c6063a6ed0adda0cb692f0d2bb2",
"assets/assets/images/Accessories/Accessory_18_Chef_32x32_03.png": "db950fdfa7e5865b9487e9841daf5cc7",
"assets/assets/images/Accessories/Accessory_19_Party_Cone_32x32_01.png": "22f93d36409c54cc667d26cfc0d36813",
"assets/assets/images/Accessories/Accessory_19_Party_Cone_32x32_02.png": "8aafde8b8dcd62ac8b2b0a577bc2d14e",
"assets/assets/images/Accessories/Accessory_19_Party_Cone_32x32_03.png": "bef528db0fcbb3cf0869401eba6e3fba",
"assets/assets/images/Accessories/Accessory_19_Party_Cone_32x32_04.png": "c330f9ac848dc38707edb9a2978171c6",
"assets/assets/images/Accessory_04_Snapback_32x32_03.png": "c9d96ee6ccd2fc605a94c3638de91a21",
"assets/assets/images/animated_control_room_facebook_scrolling_32x32.png": "4b7c378838978e084816e4a7b99ddfb9",
"assets/assets/images/animated_door_4_32x32.png": "2ed7cfb3dacccbc52e73a026d0cc4830",
"assets/assets/images/animated_door_big_1_32x32.png": "f2f8c09e53504d729c9d6d25330820db",
"assets/assets/images/animated_door_big_1_locked_32x32.png": "bb15465af103452894525a183f68ce1a",
"assets/assets/images/animated_door_big_6_32x32.png": "3a7b0321f30cc49b9957156b123ea612",
"assets/assets/images/animated_door_glass_sliding_32x32.png": "1f145ca7f761a579745105c0302b391a",
"assets/assets/images/animated_door_prison_32x32.png": "0c92f547d521b6282a56acbb87d36a74",
"assets/assets/images/animated_door_vertical_left_1_32x32.png": "2a579f6de7fd25cb67b03b9c0ea5ed98",
"assets/assets/images/animated_door_vertical_right_1_32x32.png": "1222ed5550714e17ea08f0e2fe3ba40e",
"assets/assets/images/animated_japanese_shrine_32x32.png": "cce9235655c3ec5278c46d9da3afd3c6",
"assets/assets/images/animated_japanese_sliding_door_32x32.png": "bf456550c65a0902b9caadee868da80c",
"assets/assets/images/animated_toytrain_32x32.png": "e8bd489bc9cda39453a3a92fc041959d",
"assets/assets/images/bkg_tile.png": "9dfecf53861b7e30d960e67ea2fce76e",
"assets/assets/images/Bodies/Body_32x32_01.png": "0da2183e7d76827404693fbcb602e32b",
"assets/assets/images/Bodies/Body_32x32_02.png": "e4bd27adf0a66007fa9b58aba2aac54e",
"assets/assets/images/Bodies/Body_32x32_03.png": "23e83e3a01a1cb9d4956bf2874b3beb3",
"assets/assets/images/Bodies/Body_32x32_04.png": "4c81191e1b9615a48b4e5618a77f337c",
"assets/assets/images/Bodies/Body_32x32_05.png": "9195477fc5cac172d5f4ca85ab6d9cf1",
"assets/assets/images/Bodies/Body_32x32_06.png": "b7f9b940a7908e55f85c1d7f4eaf9999",
"assets/assets/images/Bodies/Body_32x32_07.png": "8137fa5bbe314c270e77e8b56dcb285e",
"assets/assets/images/Bodies/Body_32x32_08.png": "d78629d476280e2facc90572b9aabda7",
"assets/assets/images/Bodies/Body_32x32_09.png": "c81f835e579b836b7ad584ef0c028c9d",
"assets/assets/images/Body_32x32_03.png": "23e83e3a01a1cb9d4956bf2874b3beb3",
"assets/assets/images/Drone_3_Flying_48x48.png": "33d8e307cd559d035bad7c27e69d6382",
"assets/assets/images/Eyes/Eyes_32x32_01.png": "a71f79c11aafceb1034722618cd26caa",
"assets/assets/images/Eyes/Eyes_32x32_02.png": "d5de278045f9a9542d553b5be17e27c3",
"assets/assets/images/Eyes/Eyes_32x32_03.png": "382da5cf9d94a867ef01862f759b014b",
"assets/assets/images/Eyes/Eyes_32x32_04.png": "776a8919249ea52f6be9924a13ca531b",
"assets/assets/images/Eyes/Eyes_32x32_05.png": "34d9fdcf3a48f0d7d789db11f7b83c7d",
"assets/assets/images/Eyes/Eyes_32x32_06.png": "6a87682f41f7c5f6e68d553e36c84936",
"assets/assets/images/Eyes/Eyes_32x32_07.png": "b30e0acb56d07b7f6b228c9d7f284e3d",
"assets/assets/images/Eyes_32x32_02.png": "d5de278045f9a9542d553b5be17e27c3",
"assets/assets/images/Generic_Home_1_Layer_1_32x32.png": "1d846dd01bef07a5af0413ecb8ca69b0",
"assets/assets/images/Generic_Home_1_preview_32x32.png": "34795bd7dc7689135a82a91804ebb6cb",
"assets/assets/images/HackWarsTilemapDemo-01.png": "c7ba1e8b17c3719533df4f2e27e6e845",
"assets/assets/images/HackWarsTilemapDemo-02.png": "a789894bdb1c6fef110c69a2e889a8ee",
"assets/assets/images/HackWarsTilemapTest-01.png": "fe650e2fbfc7d9710590abc1765c8d19",
"assets/assets/images/HackWarsTilemapTest-02.png": "a789894bdb1c6fef110c69a2e889a8ee",
"assets/assets/images/HackWarsTilemapTest.png": "e915e1a3a159174dbd1b78778994ce16",
"assets/assets/images/Hairstyles/Hairstyle_01_32x32_01.png": "803b7475ed208eef59555428018f246b",
"assets/assets/images/Hairstyles/Hairstyle_01_32x32_02.png": "012e8dff1d52062697d52001a076d973",
"assets/assets/images/Hairstyles/Hairstyle_01_32x32_03.png": "a4b862064ec826793cbf85981dcbe631",
"assets/assets/images/Hairstyles/Hairstyle_01_32x32_04.png": "a114aa2f6ed12bde30dcd0b4ad80eb41",
"assets/assets/images/Hairstyles/Hairstyle_01_32x32_05.png": "4f7b4a93355d21194ea8d5b1f2b3fb4d",
"assets/assets/images/Hairstyles/Hairstyle_01_32x32_06.png": "b6eed4fabb453ad18533be909bfc851f",
"assets/assets/images/Hairstyles/Hairstyle_01_32x32_07.png": "c3a6aca0781c311f989d1731e71db56d",
"assets/assets/images/Hairstyles/Hairstyle_02_32x32_01.png": "bf8e55149858f7010ca07489e7b752e2",
"assets/assets/images/Hairstyles/Hairstyle_02_32x32_02.png": "c8a6ad7490aebbeca45488f4e24b3d0d",
"assets/assets/images/Hairstyles/Hairstyle_02_32x32_03.png": "58c362d427ea83d02b4c95c978f558ec",
"assets/assets/images/Hairstyles/Hairstyle_02_32x32_04.png": "5a67a3950140af816cd334537cf70f62",
"assets/assets/images/Hairstyles/Hairstyle_02_32x32_05.png": "6ba1aecf26c61a7e643d22c41ce543dd",
"assets/assets/images/Hairstyles/Hairstyle_02_32x32_06.png": "f342dc207bdbba5c311673c539f64194",
"assets/assets/images/Hairstyles/Hairstyle_02_32x32_07.png": "60796319c3ae81e91762f9ab6eebc03e",
"assets/assets/images/Hairstyles/Hairstyle_03_32x32_01.png": "8738c4d04ad1af602be580c05fdebaf6",
"assets/assets/images/Hairstyles/Hairstyle_03_32x32_02.png": "0e983b5f01fa4f5d5e2fb2842dba9830",
"assets/assets/images/Hairstyles/Hairstyle_03_32x32_03.png": "db6be679ab3efdaf8c89c64befe767cd",
"assets/assets/images/Hairstyles/Hairstyle_03_32x32_04.png": "4c4411b2ef5f48023cdd442919025db8",
"assets/assets/images/Hairstyles/Hairstyle_03_32x32_05.png": "2f0cd0201a5ea08b0e1b1ed4c1c92f76",
"assets/assets/images/Hairstyles/Hairstyle_03_32x32_06.png": "f8036b82abfc8eb6266a63246861e26d",
"assets/assets/images/Hairstyles/Hairstyle_03_32x32_07.png": "547656189215031184967683eef103fa",
"assets/assets/images/Hairstyles/Hairstyle_04_32x32_01.png": "78c8803d6dcc2a2fd90abb9921da1663",
"assets/assets/images/Hairstyles/Hairstyle_04_32x32_02.png": "c9b3cb6e394d7a24b6976a7ad5238c65",
"assets/assets/images/Hairstyles/Hairstyle_04_32x32_03.png": "cdcd00777cf419f7a67e120670619972",
"assets/assets/images/Hairstyles/Hairstyle_04_32x32_04.png": "a9f216e80ccd2b529c5d7f40d46aebfb",
"assets/assets/images/Hairstyles/Hairstyle_04_32x32_05.png": "15eda8d6defa29dc1b996d1cc38f5400",
"assets/assets/images/Hairstyles/Hairstyle_04_32x32_06.png": "da65a509b971a50197b367fce3403506",
"assets/assets/images/Hairstyles/Hairstyle_04_32x32_07.png": "15354598648a15e5f95bbbfb63f28c73",
"assets/assets/images/Hairstyles/Hairstyle_05_32x32_01.png": "a340b0d320d365d40181a7d39b53fb75",
"assets/assets/images/Hairstyles/Hairstyle_05_32x32_02.png": "2c94bf5237b6b2b5b4c9b5e22119b364",
"assets/assets/images/Hairstyles/Hairstyle_05_32x32_03.png": "56520f8cc4b9d5950c84105cd0737102",
"assets/assets/images/Hairstyles/Hairstyle_05_32x32_04.png": "f58d65ab951a5f107ae52696bd4fe176",
"assets/assets/images/Hairstyles/Hairstyle_05_32x32_05.png": "ad506c0babae6d7813a30cbf4b119605",
"assets/assets/images/Hairstyles/Hairstyle_05_32x32_06.png": "071f4225019a257253065bad07179fa0",
"assets/assets/images/Hairstyles/Hairstyle_05_32x32_07.png": "a47120ba97dca26230f4b409b3c4b8e7",
"assets/assets/images/Hairstyles/Hairstyle_06_32x32_01.png": "a657f8bced58590e008f5b6fbba177da",
"assets/assets/images/Hairstyles/Hairstyle_06_32x32_02.png": "56a4937a9929da780aaaad04f75a470d",
"assets/assets/images/Hairstyles/Hairstyle_06_32x32_03.png": "3a7955c6ae697ab272fb8446a747e5f9",
"assets/assets/images/Hairstyles/Hairstyle_06_32x32_04.png": "e6d9b6b5a6c9052cb5d87f14d3516a20",
"assets/assets/images/Hairstyles/Hairstyle_06_32x32_05.png": "3eefba9ba2e2a31470ea139dda3f3735",
"assets/assets/images/Hairstyles/Hairstyle_06_32x32_06.png": "ad4649544e1832ced506110da5e93eab",
"assets/assets/images/Hairstyles/Hairstyle_06_32x32_07.png": "f17ac5d44a5e593960a8f1496f13acdd",
"assets/assets/images/Hairstyles/Hairstyle_07_32x32_01.png": "09e1444c007a57b639110aae2d7e67d9",
"assets/assets/images/Hairstyles/Hairstyle_07_32x32_02.png": "caad80ff1f8c75daee09e8dcab2440cb",
"assets/assets/images/Hairstyles/Hairstyle_07_32x32_03.png": "4f958390fb4e0ed79cf57e240bf09820",
"assets/assets/images/Hairstyles/Hairstyle_07_32x32_04.png": "ae536eb3a07721fda8411bad549cdcd9",
"assets/assets/images/Hairstyles/Hairstyle_07_32x32_05.png": "37636125c34a3e2118347f5c1f6e7c7c",
"assets/assets/images/Hairstyles/Hairstyle_07_32x32_06.png": "6004da8a0e3bdd9ddd2ccea9194efaef",
"assets/assets/images/Hairstyles/Hairstyle_07_32x32_07.png": "1bb9bb7ab7f511f9c89e30826fffb031",
"assets/assets/images/Hairstyles/Hairstyle_08_32x32_01.png": "ec72abd82cb51e5d7128fbe4839a0b76",
"assets/assets/images/Hairstyles/Hairstyle_08_32x32_02.png": "e09b1175ac89295a1e4464aa818c9c87",
"assets/assets/images/Hairstyles/Hairstyle_08_32x32_03.png": "1acaa4345b39060616a2a201f5b979d2",
"assets/assets/images/Hairstyles/Hairstyle_08_32x32_04.png": "a19d39180085f660126cc503ea287c53",
"assets/assets/images/Hairstyles/Hairstyle_08_32x32_05.png": "56dfc7a6a510094c844a0c76284e2496",
"assets/assets/images/Hairstyles/Hairstyle_08_32x32_06.png": "18c14b72aab95bb7ba908f5a5fdeebde",
"assets/assets/images/Hairstyles/Hairstyle_08_32x32_07.png": "03cd7884f55675dabae5d98bab871e45",
"assets/assets/images/Hairstyles/Hairstyle_09_32x32_01.png": "8414d4e5476d6672f026b0fc180af729",
"assets/assets/images/Hairstyles/Hairstyle_09_32x32_02.png": "578f08a1d7e3528be37d456172972cf1",
"assets/assets/images/Hairstyles/Hairstyle_09_32x32_03.png": "a8c74e51002a4b6160184b9d7d90e63a",
"assets/assets/images/Hairstyles/Hairstyle_09_32x32_04.png": "1d6269471e8e3fb9817948f0fcedc61e",
"assets/assets/images/Hairstyles/Hairstyle_09_32x32_05.png": "cc69d134022d8d0d3ad3ac0b0a48103e",
"assets/assets/images/Hairstyles/Hairstyle_09_32x32_06.png": "b58a86ee669044773efee6339f8b1386",
"assets/assets/images/Hairstyles/Hairstyle_09_32x32_07.png": "afd01dd9ede3d88df234a7876d5d1e32",
"assets/assets/images/Hairstyles/Hairstyle_10_32x32_01.png": "7e00959e909ffdb4e094f121a256b85e",
"assets/assets/images/Hairstyles/Hairstyle_10_32x32_02.png": "881def92279bca443940f70b808f100c",
"assets/assets/images/Hairstyles/Hairstyle_10_32x32_03.png": "8cd6c1b0b50416a9675dc86971b4888b",
"assets/assets/images/Hairstyles/Hairstyle_10_32x32_04.png": "4e4902221624f3825695fb7f4a3378f8",
"assets/assets/images/Hairstyles/Hairstyle_10_32x32_05.png": "1cca47ed5fc3e8ea770c134b4558c7a9",
"assets/assets/images/Hairstyles/Hairstyle_10_32x32_06.png": "92aa6201fa4eae0997e86cf973a34dc9",
"assets/assets/images/Hairstyles/Hairstyle_10_32x32_07.png": "049e9cce1ab7fe4b69bdf3de9cecbf20",
"assets/assets/images/Hairstyles/Hairstyle_11_32x32_01.png": "7f605407150fcd69bc118fa07f14507f",
"assets/assets/images/Hairstyles/Hairstyle_11_32x32_02.png": "b8edea139e3038fc5d06435671f70a24",
"assets/assets/images/Hairstyles/Hairstyle_11_32x32_03.png": "ee5bcd138e1d95d7db74c53ed6e903a9",
"assets/assets/images/Hairstyles/Hairstyle_11_32x32_04.png": "34093cc81a2b82096afba8cebae30ac2",
"assets/assets/images/Hairstyles/Hairstyle_11_32x32_05.png": "0fbbdb1a13bea2bdb3d4d88873d7bf23",
"assets/assets/images/Hairstyles/Hairstyle_11_32x32_06.png": "0e5242fe7bd7e5af3aed39d7761baa17",
"assets/assets/images/Hairstyles/Hairstyle_11_32x32_07.png": "be2bf1820545b23717864d04fb9fd066",
"assets/assets/images/Hairstyles/Hairstyle_12_32x32_01.png": "e480a403e6a7699745617a2b70e3c5d2",
"assets/assets/images/Hairstyles/Hairstyle_12_32x32_02.png": "ef9d8fb0db8e5bed2d148ba88dbd8610",
"assets/assets/images/Hairstyles/Hairstyle_12_32x32_03.png": "ed54e6ab5da2c43c88a7d6444bd1bbcf",
"assets/assets/images/Hairstyles/Hairstyle_12_32x32_04.png": "2e2c799966dc932dba2057c9e8eee34d",
"assets/assets/images/Hairstyles/Hairstyle_12_32x32_05.png": "7f7ea2fd911a1c275a9f6eaa241a7310",
"assets/assets/images/Hairstyles/Hairstyle_12_32x32_06.png": "203eef862605eca095ad33390563cb0a",
"assets/assets/images/Hairstyles/Hairstyle_12_32x32_07.png": "c13aa658bd803ad306e05dda0ad6123d",
"assets/assets/images/Hairstyles/Hairstyle_13_32x32_01.png": "4ac612f02561834eeb11e9486e4ae38b",
"assets/assets/images/Hairstyles/Hairstyle_13_32x32_02.png": "6d071cfe924573f16a51f5f5c6508976",
"assets/assets/images/Hairstyles/Hairstyle_13_32x32_03.png": "b7b356399284c91f86a892f4dac141c0",
"assets/assets/images/Hairstyles/Hairstyle_13_32x32_04.png": "ce2c0f59330474f43d09f012dabc5bc1",
"assets/assets/images/Hairstyles/Hairstyle_13_32x32_05.png": "e7e314d75c7bd5da169c5beccdc57fdb",
"assets/assets/images/Hairstyles/Hairstyle_13_32x32_06.png": "83a64c91fe837546a7f0001374a5f44a",
"assets/assets/images/Hairstyles/Hairstyle_13_32x32_07.png": "f923113b746760e1003f65be35e27b8a",
"assets/assets/images/Hairstyles/Hairstyle_14_32x32_01.png": "1885b125facac626538a244e6ff5bc2d",
"assets/assets/images/Hairstyles/Hairstyle_14_32x32_02.png": "fdd68977d45c8de5e4a2160dbc17668e",
"assets/assets/images/Hairstyles/Hairstyle_14_32x32_03.png": "3bc31679932954627e8a484b1f0c87a2",
"assets/assets/images/Hairstyles/Hairstyle_14_32x32_04.png": "572654ce14f81fe8e56582fee824d2dc",
"assets/assets/images/Hairstyles/Hairstyle_14_32x32_05.png": "3d1b3972eb2b3885fb92c562b08abf27",
"assets/assets/images/Hairstyles/Hairstyle_14_32x32_06.png": "19db05d5b5c42b5357e9ad2dc614f1c9",
"assets/assets/images/Hairstyles/Hairstyle_14_32x32_07.png": "2e1858cb5287c94166b8ad4a78ebd6c6",
"assets/assets/images/Hairstyles/Hairstyle_15_32x32_01.png": "6e608085fc3476402847d3402dc3d188",
"assets/assets/images/Hairstyles/Hairstyle_15_32x32_02.png": "989bfd70c19cd18bea8f6bcabcecc6ef",
"assets/assets/images/Hairstyles/Hairstyle_15_32x32_03.png": "f1224000bd0470aac2e11c43576dea1e",
"assets/assets/images/Hairstyles/Hairstyle_15_32x32_04.png": "4b1b0e277f8f8d5e747c08b14b18aa0b",
"assets/assets/images/Hairstyles/Hairstyle_15_32x32_05.png": "bd2e6839b8f560cd808bfc21060ba4e3",
"assets/assets/images/Hairstyles/Hairstyle_15_32x32_06.png": "4c7e1b78b92ea0b8ca6624c88bfd5d9e",
"assets/assets/images/Hairstyles/Hairstyle_15_32x32_07.png": "eef9f82bf207b5538e0965757a32caf1",
"assets/assets/images/Hairstyles/Hairstyle_16_32x32_01.png": "c06bf6c26d68bbc0a81436b48dc4c369",
"assets/assets/images/Hairstyles/Hairstyle_16_32x32_02.png": "6e95b6b0a0d91f2e7d39ba0dbc1ab23a",
"assets/assets/images/Hairstyles/Hairstyle_16_32x32_03.png": "ceae1b0032e0dfd3d6b6d3f7fe9a15bb",
"assets/assets/images/Hairstyles/Hairstyle_16_32x32_04.png": "bcf458bc54ad8d443789cab798f8a0d9",
"assets/assets/images/Hairstyles/Hairstyle_16_32x32_05.png": "25a571b9c2cf8b78ee19aedb57310059",
"assets/assets/images/Hairstyles/Hairstyle_16_32x32_06.png": "863621e11c9b4cdef15744829475dbb1",
"assets/assets/images/Hairstyles/Hairstyle_16_32x32_07.png": "3e138690fc0f1ac1a9cc92bab0e2a053",
"assets/assets/images/Hairstyles/Hairstyle_17_32x32_01.png": "a8ada5dd04ecfa5afe6ee6c52a015a68",
"assets/assets/images/Hairstyles/Hairstyle_17_32x32_02.png": "964e6b58a10a4b6e83a6d6207bc67763",
"assets/assets/images/Hairstyles/Hairstyle_17_32x32_03.png": "daa648bd8cbf5436a698cf982d6ef6ce",
"assets/assets/images/Hairstyles/Hairstyle_17_32x32_04.png": "16750ee56aef5286e0716ead34cbf8a6",
"assets/assets/images/Hairstyles/Hairstyle_17_32x32_05.png": "30714f5069a60e959f94de3ea8987be4",
"assets/assets/images/Hairstyles/Hairstyle_17_32x32_06.png": "a723158a63dc5c4aed1789d2e33ff50f",
"assets/assets/images/Hairstyles/Hairstyle_17_32x32_07.png": "5db175ace546d2557ca2d198f7b6c87f",
"assets/assets/images/Hairstyles/Hairstyle_18_32x32_01.png": "430e1f364ce90361272a3052114815a9",
"assets/assets/images/Hairstyles/Hairstyle_18_32x32_02.png": "c92187636940a0c154398fb7b74952d0",
"assets/assets/images/Hairstyles/Hairstyle_18_32x32_03.png": "63114a4fee042087b80ff801a0c0652c",
"assets/assets/images/Hairstyles/Hairstyle_18_32x32_04.png": "00887a50315bc68a528f194645ae5e58",
"assets/assets/images/Hairstyles/Hairstyle_18_32x32_05.png": "15072bd4c2ee37b5818f160af42e8b67",
"assets/assets/images/Hairstyles/Hairstyle_18_32x32_06.png": "f5db1eaf1f1f4beef23fac3885ad7519",
"assets/assets/images/Hairstyles/Hairstyle_18_32x32_07.png": "839cc948766ae6c5663da3401e6bee83",
"assets/assets/images/Hairstyles/Hairstyle_19_32x32_01.png": "840b055741943369761d7769e504ba83",
"assets/assets/images/Hairstyles/Hairstyle_19_32x32_02.png": "5db7c1daeeaa4b22cc77376cb7519c62",
"assets/assets/images/Hairstyles/Hairstyle_19_32x32_03.png": "37a9cf4376d7d5bde4151de58e4b313a",
"assets/assets/images/Hairstyles/Hairstyle_19_32x32_04.png": "69a4ac1eb4c7b8f8fce3759c18e9487f",
"assets/assets/images/Hairstyles/Hairstyle_19_32x32_05.png": "e1de084af41f56a1c9b0bf8a99bbfecf",
"assets/assets/images/Hairstyles/Hairstyle_19_32x32_06.png": "daa0b640268a15f3e7102bd7f55fa0a7",
"assets/assets/images/Hairstyles/Hairstyle_19_32x32_07.png": "85f221ebc8aa37cd2c214f58bb1da193",
"assets/assets/images/Hairstyles/Hairstyle_20_32x32_01.png": "9a3e3ff18b98427f6d6d497ab7825355",
"assets/assets/images/Hairstyles/Hairstyle_20_32x32_02.png": "f2a5c3f618d48d58328c6c554d85c4c4",
"assets/assets/images/Hairstyles/Hairstyle_20_32x32_03.png": "3c33bb18a14d5f3476682cdcfb5cb878",
"assets/assets/images/Hairstyles/Hairstyle_20_32x32_04.png": "01c806335cb006df6b35aa35eeb1d4ff",
"assets/assets/images/Hairstyles/Hairstyle_20_32x32_05.png": "9f3343b5f3e0bff611746d129fec4aea",
"assets/assets/images/Hairstyles/Hairstyle_20_32x32_06.png": "82b706508fb87e1df4cac6fba92c31c2",
"assets/assets/images/Hairstyles/Hairstyle_20_32x32_07.png": "73e86bacb26f56a2ba7ec2b76e440056",
"assets/assets/images/Hairstyles/Hairstyle_21_32x32_01.png": "ea758a60f85da4755da6e3d1f2a52a43",
"assets/assets/images/Hairstyles/Hairstyle_21_32x32_02.png": "18cb6287cea756c2fc79feabb784ee13",
"assets/assets/images/Hairstyles/Hairstyle_21_32x32_03.png": "1da66b2b7c35cb590476b0265001c486",
"assets/assets/images/Hairstyles/Hairstyle_21_32x32_04.png": "2c0f15317ff4ff3ca1d9e38a06626720",
"assets/assets/images/Hairstyles/Hairstyle_21_32x32_05.png": "5d0c87a7157cd03eb9cd3dac0af3f9b2",
"assets/assets/images/Hairstyles/Hairstyle_21_32x32_06.png": "159f108c3a3558c3d9b5d9cf7cb678c5",
"assets/assets/images/Hairstyles/Hairstyle_21_32x32_07.png": "971ce65c4100e980f8170fba76862f5f",
"assets/assets/images/Hairstyles/Hairstyle_22_32x32_01.png": "66b6a961270dbbf31f8419edd38fcf1d",
"assets/assets/images/Hairstyles/Hairstyle_22_32x32_02.png": "1012bd80c4786e13fef73d872f290c3f",
"assets/assets/images/Hairstyles/Hairstyle_22_32x32_03.png": "69611ef115650b980bbe8311c08aeade",
"assets/assets/images/Hairstyles/Hairstyle_22_32x32_04.png": "f8cb1653c54f8a55f5729ed4fa46e30a",
"assets/assets/images/Hairstyles/Hairstyle_22_32x32_05.png": "27548aadae9c23a2208a6eb219146e19",
"assets/assets/images/Hairstyles/Hairstyle_22_32x32_06.png": "cadc65e494599e1c7a4b71e8c404dded",
"assets/assets/images/Hairstyles/Hairstyle_22_32x32_07.png": "fa9a1bb6947e136d2c44799325ebc169",
"assets/assets/images/Hairstyles/Hairstyle_23_32x32_01.png": "94fb7b12739fc878f36a3a64366d37f1",
"assets/assets/images/Hairstyles/Hairstyle_23_32x32_02.png": "4ccab6607a6cc1440ebda4fbca6fc64a",
"assets/assets/images/Hairstyles/Hairstyle_23_32x32_03.png": "6b9735e5381985ca1cc74d20d0558d9a",
"assets/assets/images/Hairstyles/Hairstyle_23_32x32_04.png": "1997c6b430ad4c4e345709aafd4b63d9",
"assets/assets/images/Hairstyles/Hairstyle_23_32x32_05.png": "d7ddfe4cf63c63d8d182c99e423bf516",
"assets/assets/images/Hairstyles/Hairstyle_23_32x32_06.png": "fd03b5312c7180027607abc627c63cac",
"assets/assets/images/Hairstyles/Hairstyle_23_32x32_07.png": "86d47d75371284da7d031326974f2161",
"assets/assets/images/Hairstyles/Hairstyle_24_32x32_01.png": "cbd798461e907f78f9c6d1abfa287a3e",
"assets/assets/images/Hairstyles/Hairstyle_24_32x32_02.png": "d7a8963962cab02bb74d7c04db5725d9",
"assets/assets/images/Hairstyles/Hairstyle_24_32x32_03.png": "c0f90874cf10159dabb7ce615be6dc04",
"assets/assets/images/Hairstyles/Hairstyle_24_32x32_04.png": "9ef6ff6042211a27b34f0228fdb4ec78",
"assets/assets/images/Hairstyles/Hairstyle_24_32x32_05.png": "4fff09db2b1b979beda47db99180915b",
"assets/assets/images/Hairstyles/Hairstyle_24_32x32_06.png": "879b6c304c5b528633626f6b7a4f608a",
"assets/assets/images/Hairstyles/Hairstyle_24_32x32_07.png": "9a3eed2770f356ca0f4b0c4d01628baf",
"assets/assets/images/Hairstyles/Hairstyle_25_32x32_01.png": "76dd57fbb4b699ff30896c64657a8f63",
"assets/assets/images/Hairstyles/Hairstyle_25_32x32_02.png": "96b2d2a89664f5b0d2a3040dedc1d77c",
"assets/assets/images/Hairstyles/Hairstyle_25_32x32_03.png": "245df7200d3888d046895ddea58034e1",
"assets/assets/images/Hairstyles/Hairstyle_25_32x32_04.png": "84358cd7315d7738d228410339869b15",
"assets/assets/images/Hairstyles/Hairstyle_25_32x32_05.png": "8397d2b09951d76bc1388adfb6a3758c",
"assets/assets/images/Hairstyles/Hairstyle_25_32x32_06.png": "72a9bdbfefbff670389a5aa825056da2",
"assets/assets/images/Hairstyles/Hairstyle_25_32x32_07.png": "12848bdbb250a666349673fcbb7591bf",
"assets/assets/images/Hairstyles/Hairstyle_26_32x32_01.png": "79218f6332f725d761ce0719d2fc2b79",
"assets/assets/images/Hairstyles/Hairstyle_26_32x32_02.png": "ded7aa2175553133dfbe2a3a53843e10",
"assets/assets/images/Hairstyles/Hairstyle_26_32x32_03.png": "92cdadea6ea9cf84fbfd17b25e064610",
"assets/assets/images/Hairstyles/Hairstyle_26_32x32_04.png": "22a8229de887be83e3459bdc0a92f412",
"assets/assets/images/Hairstyles/Hairstyle_26_32x32_05.png": "c08cccebfbbe60dd98f5f4f7338d0277",
"assets/assets/images/Hairstyles/Hairstyle_26_32x32_06.png": "93eff1a816a9da0d47fb3c46a2c28cf2",
"assets/assets/images/Hairstyles/Hairstyle_26_32x32_07.png": "9e3c15fe399b5a6c7e1727b9ab2fd3ad",
"assets/assets/images/Hairstyles/Hairstyle_27_32x32_01.png": "18673427c68d02ac1e8f192eaec43046",
"assets/assets/images/Hairstyles/Hairstyle_27_32x32_02.png": "e7ed4d9154adb0d6358243a89c746c89",
"assets/assets/images/Hairstyles/Hairstyle_27_32x32_03.png": "07b7136d749bdfec0a815edf49109b26",
"assets/assets/images/Hairstyles/Hairstyle_27_32x32_04.png": "b2906fb216fa8a76d9e19bbc9f15fef1",
"assets/assets/images/Hairstyles/Hairstyle_27_32x32_05.png": "fd6f903edb912aef067ad3ee19eb6a99",
"assets/assets/images/Hairstyles/Hairstyle_27_32x32_06.png": "1c453945828206518c9fbac391b20fee",
"assets/assets/images/Hairstyles/Hairstyle_28_32x32_01.png": "c1ee22293c5cc134ce68b023a219bd21",
"assets/assets/images/Hairstyles/Hairstyle_28_32x32_02.png": "375864b43c3c124d81e1ba57ec744edc",
"assets/assets/images/Hairstyles/Hairstyle_28_32x32_03.png": "ecbfbdeeeb8d61832c4c44d5df45027f",
"assets/assets/images/Hairstyles/Hairstyle_28_32x32_04.png": "32cad6c229ac4bf4f72be5f5908d493d",
"assets/assets/images/Hairstyles/Hairstyle_28_32x32_05.png": "5b47740a13d933569b2c5419efb5bf99",
"assets/assets/images/Hairstyles/Hairstyle_28_32x32_06.png": "07df149782d8ac81684b1d57e53f7ee3",
"assets/assets/images/Hairstyles/Hairstyle_29_32x32_01.png": "07a4ae30a8e9b9963f8e7f1a51e185b3",
"assets/assets/images/Hairstyles/Hairstyle_29_32x32_02.png": "f0f06792efa25a519d4c1026c18984e5",
"assets/assets/images/Hairstyles/Hairstyle_29_32x32_03.png": "c88538f2058e860c20a193ed05332d90",
"assets/assets/images/Hairstyles/Hairstyle_29_32x32_04.png": "f82ba8ecd658b11f6171a850f25919e9",
"assets/assets/images/Hairstyles/Hairstyle_29_32x32_05.png": "aa8a5b776393052cbd620fb9ff70feee",
"assets/assets/images/Hairstyles/Hairstyle_29_32x32_06.png": "af7b5c93f7346f7bf46af7dcce6e5392",
"assets/assets/images/Hairstyle_03_32x32_06.png": "f8036b82abfc8eb6266a63246861e26d",
"assets/assets/images/Japanese_Home_1_preview_32x32.png": "25a76817addc3468b0d6e98adc5ac631",
"assets/assets/images/ME_Singles_City_Props_16x16_Drone_Controller_3.png": "3ab8e403d91830be6a6599e8662d3ce9",
"assets/assets/images/Museum_room_1_layer_1_32x32.png": "50e64d9c118ff47bd2ed359de7989493",
"assets/assets/images/Museum_room_1_preview_32x32.png": "67f56668fc2367bb493fae699cc762bf",
"assets/assets/images/Museum_room_2_preview_32x32.png": "18c8afc910e642d159f1cbda922156ac",
"assets/assets/images/Museum_room_4_layer_1_32x32.png": "072d85f97b186c07cb041122a831b58b",
"assets/assets/images/Outfits/Outfit_01_32x32_01.png": "a0bc0c26c0a8b56156a15bef9854d762",
"assets/assets/images/Outfits/Outfit_01_32x32_02.png": "6be1a98a5d55fb022051d6803093c3f0",
"assets/assets/images/Outfits/Outfit_01_32x32_03.png": "f4fcd6842ef590a33e68085addd64316",
"assets/assets/images/Outfits/Outfit_01_32x32_04.png": "656147c5518928e77b5bcce756b6d284",
"assets/assets/images/Outfits/Outfit_01_32x32_05.png": "daf7410a27b06b21670ce5837bc8842a",
"assets/assets/images/Outfits/Outfit_01_32x32_06.png": "91ac7b84240a0193ed82f8d1562e7984",
"assets/assets/images/Outfits/Outfit_01_32x32_07.png": "215100f3e9636a2cd1f8470b80ff44e1",
"assets/assets/images/Outfits/Outfit_01_32x32_08.png": "d7fab1c115bbb50ad7972c852e4c11f4",
"assets/assets/images/Outfits/Outfit_01_32x32_09.png": "c50dde493b2e8c0054380a3cfd33a914",
"assets/assets/images/Outfits/Outfit_01_32x32_10.png": "e18736ccb881532f83d3fe4c6b24ce02",
"assets/assets/images/Outfits/Outfit_02_32x32_01.png": "95fc75209e4690e08f833606ef25e5f1",
"assets/assets/images/Outfits/Outfit_02_32x32_02.png": "64942df4a4cd9bfe6dd461528133cd6a",
"assets/assets/images/Outfits/Outfit_02_32x32_03.png": "a72a489976817d52d6c53593cccf9c82",
"assets/assets/images/Outfits/Outfit_02_32x32_04.png": "4ec05bdb55b645891104f1f3a93c2910",
"assets/assets/images/Outfits/Outfit_03_32x32_01.png": "46db767e5af0e44d0598310f591c3974",
"assets/assets/images/Outfits/Outfit_03_32x32_02.png": "c0cfc29cd4257297214443e8a783ed04",
"assets/assets/images/Outfits/Outfit_03_32x32_03.png": "d323d9fa02f9a0ecd1754dd989749d24",
"assets/assets/images/Outfits/Outfit_03_32x32_04.png": "4c5db05e549986eb9819e660cc8c6008",
"assets/assets/images/Outfits/Outfit_04_32x32_01.png": "aea6cb5e0b6152a467b2e87153633f86",
"assets/assets/images/Outfits/Outfit_04_32x32_02.png": "cf535fc08a1c484856b035073a8fc8b1",
"assets/assets/images/Outfits/Outfit_04_32x32_03.png": "2b02a3a16994d37da7e2b046a94db20b",
"assets/assets/images/Outfits/Outfit_05_32x32_01.png": "b1e2004c61d177ea3b8545ba95a3b619",
"assets/assets/images/Outfits/Outfit_05_32x32_02.png": "5e10da2cc2c36e199c535dc95f53edb7",
"assets/assets/images/Outfits/Outfit_05_32x32_03.png": "8ade220cdb3c111e2ffb6d1ed560fb1f",
"assets/assets/images/Outfits/Outfit_05_32x32_04.png": "6794b8bfed89e82cc69fd93ef308e272",
"assets/assets/images/Outfits/Outfit_05_32x32_05.png": "e0d4fb31984c1e101fd6261a2e91f506",
"assets/assets/images/Outfits/Outfit_06_32x32_01.png": "3eab1870482ca7569bd439f9ab97ba58",
"assets/assets/images/Outfits/Outfit_06_32x32_02.png": "d9e030b3edaac7e4c0257f9b97e0a556",
"assets/assets/images/Outfits/Outfit_06_32x32_03.png": "3ac08ea99b6d53bb773747bcd349f40a",
"assets/assets/images/Outfits/Outfit_06_32x32_04.png": "7ab9f827da2c5d29c063ac40b1dc76bb",
"assets/assets/images/Outfits/Outfit_07_32x32_01.png": "f98693ee9962c84a5c1637ae4d3fab0e",
"assets/assets/images/Outfits/Outfit_07_32x32_02.png": "ea578b4dc13d6b6ee3604c2bc408f3f2",
"assets/assets/images/Outfits/Outfit_07_32x32_03.png": "802b936c11c8cfe517fa0405f4fd7c1a",
"assets/assets/images/Outfits/Outfit_07_32x32_04.png": "12a4d888a9c84f478baf79300af4cc53",
"assets/assets/images/Outfits/Outfit_08_32x32_01.png": "5073a6504e33fc9d45f46bee494f3bfe",
"assets/assets/images/Outfits/Outfit_08_32x32_02.png": "1b215055d12f97f77295a2a4d9e6aa6c",
"assets/assets/images/Outfits/Outfit_08_32x32_03.png": "a2b69a8afca989e9b11100acf995c060",
"assets/assets/images/Outfits/Outfit_09_32x32_01.png": "2880b3c9f9d73f1184b396c74eff6e41",
"assets/assets/images/Outfits/Outfit_09_32x32_02.png": "9430ee6fe7f0cdec18b8e7009a84a9bc",
"assets/assets/images/Outfits/Outfit_09_32x32_03.png": "2a9bcb83bd11141f2331eec764477a9d",
"assets/assets/images/Outfits/Outfit_10_32x32_01.png": "1ff7c74fba883cc05c189965a0995e34",
"assets/assets/images/Outfits/Outfit_10_32x32_02.png": "06ba187e1c194756c75a05267ea83e6d",
"assets/assets/images/Outfits/Outfit_10_32x32_03.png": "f3490a01db88a1b69eb018c7c36faf4e",
"assets/assets/images/Outfits/Outfit_10_32x32_04.png": "010fd63175393a6984836c4b5d8a419d",
"assets/assets/images/Outfits/Outfit_10_32x32_05.png": "fee1033f21810e85265f125da94837e5",
"assets/assets/images/Outfits/Outfit_11_32x32_01.png": "92ba1eff8aa1b7b3114ac840752dcc4a",
"assets/assets/images/Outfits/Outfit_11_32x32_02.png": "e5e0961cbe91ab8a0f20032c85fb65a9",
"assets/assets/images/Outfits/Outfit_11_32x32_03.png": "a0ace2926452531ea59b12e202e329f7",
"assets/assets/images/Outfits/Outfit_11_32x32_04.png": "dd4419c0374236b8576c3159c2d85a03",
"assets/assets/images/Outfits/Outfit_12_32x32_01.png": "4014916ecb9ff7666d5a3c73d81fd9c0",
"assets/assets/images/Outfits/Outfit_12_32x32_02.png": "09b37c16324d3bc15e0a0423fc87c002",
"assets/assets/images/Outfits/Outfit_12_32x32_03.png": "9bdfc60691f0189fa82423391168efbe",
"assets/assets/images/Outfits/Outfit_13_32x32_01.png": "b15169469c52c42b7c94a1dfd973ddca",
"assets/assets/images/Outfits/Outfit_13_32x32_02.png": "b265c6d3cbcccd76f83560f67846a288",
"assets/assets/images/Outfits/Outfit_13_32x32_03.png": "73761e36bb0839563cb9c0b0d3d4946d",
"assets/assets/images/Outfits/Outfit_13_32x32_04.png": "d8a927c80611b39e739dcfb0a7f2b16c",
"assets/assets/images/Outfits/Outfit_14_32x32_01.png": "fa5ba03c48a7d5273a9eb337928fc61a",
"assets/assets/images/Outfits/Outfit_14_32x32_02.png": "b3785a03746e2fcfe818c924de2ebee8",
"assets/assets/images/Outfits/Outfit_14_32x32_03.png": "fedae6470493328a51901425dd0470af",
"assets/assets/images/Outfits/Outfit_14_32x32_04.png": "f7359a1285f726ceb772e39317efb95c",
"assets/assets/images/Outfits/Outfit_14_32x32_05.png": "8db517d2249363114b6b627563722c9d",
"assets/assets/images/Outfits/Outfit_15_32x32_01.png": "548df36e0f723f24f5c6890fc424e93f",
"assets/assets/images/Outfits/Outfit_15_32x32_02.png": "a48d8b80396942dca2ddbade073b303d",
"assets/assets/images/Outfits/Outfit_15_32x32_03.png": "d51fd315e4f800d8e019343787b76faf",
"assets/assets/images/Outfits/Outfit_16_32x32_01.png": "b080b86b1007f71b3abe8b91cfac71fd",
"assets/assets/images/Outfits/Outfit_16_32x32_02.png": "458e72b20550ffb2ed12da7d09f9da78",
"assets/assets/images/Outfits/Outfit_16_32x32_03.png": "3dde212ab6324c2fe767bb0aa1f737ca",
"assets/assets/images/Outfits/Outfit_17_32x32_01.png": "ec07155a3ebea37a3e4197cfc18c75f7",
"assets/assets/images/Outfits/Outfit_17_32x32_02.png": "13e40f906ed235340e4ce8df27ebcb5d",
"assets/assets/images/Outfits/Outfit_17_32x32_03.png": "c43039197d9ac1acb857252d90edfb22",
"assets/assets/images/Outfits/Outfit_18_32x32_01.png": "a86e20520814a800b1c176be74fca27a",
"assets/assets/images/Outfits/Outfit_18_32x32_02.png": "e32a74e85fb3efcb937eebf5b2e1cc33",
"assets/assets/images/Outfits/Outfit_18_32x32_03.png": "7c8da7c66c1b5d12cd9a9b618088ca76",
"assets/assets/images/Outfits/Outfit_18_32x32_04.png": "231ef5cf386c117a2c4c2f6e92380ec8",
"assets/assets/images/Outfits/Outfit_19_32x32_01.png": "0bb42398b8633405a0c3bfa429076769",
"assets/assets/images/Outfits/Outfit_19_32x32_02.png": "3c9039674878333ff18da983caada168",
"assets/assets/images/Outfits/Outfit_19_32x32_03.png": "b488fa8d0744160d80558911889042c6",
"assets/assets/images/Outfits/Outfit_19_32x32_04.png": "e720ee696523665f4fb876b3f9f392a2",
"assets/assets/images/Outfits/Outfit_20_32x32_01.png": "9d5767a2a6076ca1ffcae340fa50813a",
"assets/assets/images/Outfits/Outfit_20_32x32_02.png": "171e28262d30a6f5d4de0a2af55a43e6",
"assets/assets/images/Outfits/Outfit_20_32x32_03.png": "4cc8b86a0c122239a620334e8b749f22",
"assets/assets/images/Outfits/Outfit_21_32x32_01.png": "84e560fc9f2e6a87f4c0d02321b2c845",
"assets/assets/images/Outfits/Outfit_21_32x32_02.png": "d80f852f06e83a05dbab42c807d22566",
"assets/assets/images/Outfits/Outfit_21_32x32_03.png": "f41c564f124309ae8ef2ae176d716877",
"assets/assets/images/Outfits/Outfit_21_32x32_04.png": "be2c4a7b61c587f6a2f150800877cb31",
"assets/assets/images/Outfits/Outfit_22_32x32_01.png": "eec2a26b8dfb809dde4b0ee45398af9f",
"assets/assets/images/Outfits/Outfit_22_32x32_02.png": "6ba6fd57d2ccb651656e49a15eede635",
"assets/assets/images/Outfits/Outfit_22_32x32_03.png": "7324755e51381c6af8e638ad25fc2583",
"assets/assets/images/Outfits/Outfit_22_32x32_04.png": "1d39c40201ae6ee21f9a748d7a324de2",
"assets/assets/images/Outfits/Outfit_23_32x32_01.png": "caaee3ed24a28fe88932f5ac95706b29",
"assets/assets/images/Outfits/Outfit_23_32x32_02.png": "18cae5940a40be546a5476bbca849601",
"assets/assets/images/Outfits/Outfit_23_32x32_03.png": "3325059f8fe066d3bbb7dfbbb2fe37e8",
"assets/assets/images/Outfits/Outfit_23_32x32_04.png": "7089e23b6f22d9d4c5c3222c269161d5",
"assets/assets/images/Outfits/Outfit_24_32x32_01.png": "9bb033303ca3a3d0451ef43d9d947612",
"assets/assets/images/Outfits/Outfit_24_32x32_02.png": "a3cb7bce3b3121eede52c84e89ab5491",
"assets/assets/images/Outfits/Outfit_24_32x32_03.png": "e0ec19850e155ba5ffe852949adeb068",
"assets/assets/images/Outfits/Outfit_24_32x32_04.png": "80e32e4df35f9561f911ec0548db25b6",
"assets/assets/images/Outfits/Outfit_25_32x32_01.png": "1ee5203b04f85dfa1d79a50888887329",
"assets/assets/images/Outfits/Outfit_25_32x32_02.png": "0b48060e2e07f4e959dd1ed038736fde",
"assets/assets/images/Outfits/Outfit_25_32x32_03.png": "1c245c27444fb949c1bd8980ed26964a",
"assets/assets/images/Outfits/Outfit_25_32x32_04.png": "06f5acacd294275a5903000b50867c14",
"assets/assets/images/Outfits/Outfit_25_32x32_05.png": "d82b0a7e76349f458392a66c0489d827",
"assets/assets/images/Outfits/Outfit_26_32x32_01.png": "b94321a666dd94ec9ca7240b93afcd43",
"assets/assets/images/Outfits/Outfit_26_32x32_02.png": "d29fdc990f2bd304f2de65572700a089",
"assets/assets/images/Outfits/Outfit_26_32x32_03.png": "be9905125dc2a2bdc8d7ae71275893a6",
"assets/assets/images/Outfits/Outfit_27_32x32_01.png": "3bd16ebfc866855ff3a910f250c4301d",
"assets/assets/images/Outfits/Outfit_27_32x32_02.png": "d269ba799641c14557ed52bccce4342b",
"assets/assets/images/Outfits/Outfit_27_32x32_03.png": "c71135f60de11ca5fa80e094d1a0c453",
"assets/assets/images/Outfits/Outfit_28_32x32_01.png": "d96facd7aa3d347f3c86e780d922ba8f",
"assets/assets/images/Outfits/Outfit_28_32x32_02.png": "2f15fb71d481b50f1663044628dfaed8",
"assets/assets/images/Outfits/Outfit_28_32x32_03.png": "101bd95e10a47f75e4805c5ed025ac24",
"assets/assets/images/Outfits/Outfit_28_32x32_04.png": "aa8e4294d1255dbcfe2ae39caa15d370",
"assets/assets/images/Outfits/Outfit_29_32x32_01.png": "0707b7115873f39edc5a2e657177938c",
"assets/assets/images/Outfits/Outfit_29_32x32_02.png": "2a831b6ad1d75f18583f2bb63e245da5",
"assets/assets/images/Outfits/Outfit_29_32x32_03.png": "3d21c3a5fb72e12ffc6e95f0cc19b01a",
"assets/assets/images/Outfits/Outfit_29_32x32_04.png": "cce9a4a3e818eefc67054fb8b0488a25",
"assets/assets/images/Outfits/Outfit_30_32x32_01.png": "944fddf5d6955755a308e6b8e2b234ed",
"assets/assets/images/Outfits/Outfit_30_32x32_02.png": "d7084c055a3e294bd391a4ea1d7fc4d9",
"assets/assets/images/Outfits/Outfit_30_32x32_03.png": "1e312f562e48ebbfa1f520aa577a6304",
"assets/assets/images/Outfits/Outfit_31_32x32_01.png": "71c28be994aa389b99c67e04d0bf3e9f",
"assets/assets/images/Outfits/Outfit_31_32x32_02.png": "69b9ff131d37a700e776d277c392f3b7",
"assets/assets/images/Outfits/Outfit_31_32x32_03.png": "ed7104383ef027dfa3c502db994c4e2e",
"assets/assets/images/Outfits/Outfit_31_32x32_04.png": "f742cd37e66fdfa40a10bc843cab9e10",
"assets/assets/images/Outfits/Outfit_31_32x32_05.png": "673f3fe033287b8001885a5fbeb08a74",
"assets/assets/images/Outfits/Outfit_32_32x32_01.png": "5fb103544def2898b929bf0b11aa1b81",
"assets/assets/images/Outfits/Outfit_32_32x32_02.png": "0aa2d25c0067cbf9f8f6537ea806d8af",
"assets/assets/images/Outfits/Outfit_32_32x32_03.png": "ae5ba2a0c5de51069e268a5d74c1b65e",
"assets/assets/images/Outfits/Outfit_32_32x32_04.png": "f087464429ab87b6d4a65a89297df42a",
"assets/assets/images/Outfits/Outfit_32_32x32_05.png": "2e041440fc138fa563c46e5c0171b6d4",
"assets/assets/images/Outfits/Outfit_33_32x32_01.png": "6bc410d33b8efe99c5eb8d7b712803f9",
"assets/assets/images/Outfits/Outfit_33_32x32_02.png": "1a6de83ca5e6214078d79b4169411805",
"assets/assets/images/Outfits/Outfit_33_32x32_03.png": "0c7f23cb7a492dc0492bdac1f3320f47",
"assets/assets/images/Outfit_02_32x32_02.png": "64942df4a4cd9bfe6dd461528133cd6a",
"assets/assets/images/Premade_Character_32x32_03.png": "7a72ccaf215b879deea46602cb0be37b",
"assets/assets/images/Premade_Character_32x32_04.png": "d83f6b586a9d7dd9ca72bbfb0205d9c8",
"assets/assets/TestNetwork-74_25_112_134.json": "9466ab1c5d7f70957afda9f3eda28519",
"assets/assets/tiles/1_Generic_32x32.tsx": "343f511cb0526d257a9240dd1308cee8",
"assets/assets/tiles/4_Bedroom_32x32.tsx": "306c2d39261cd46fb651bc1b7dc12d62",
"assets/assets/tiles/animated_control_room_facebook_scrolling_32x32.tsx": "5fa83b6ebde98bd0377a7601c24ac867",
"assets/assets/tiles/animated_door_big_1_locked_32x32.tsx": "759baf7643b60fb61b5507f1e2c0c2ce",
"assets/assets/tiles/animated_japanese_shrine_32x32.tsx": "3757ffe2bb89cc3b69580425d8294230",
"assets/assets/tiles/animated_japanese_sliding_door_32x32.tsx": "e006e67b1b0c1a4e0ecdea1f54eac0dc",
"assets/assets/tiles/bkg_tile.tsx": "2623374716c7f0a3eaba49d1bb89957e",
"assets/assets/tiles/gameTest.tmx": "ea3f300d3fc8a8eec54585549d9b44ac",
"assets/assets/tiles/gameTest2.tmx": "f1d9e6e9f08f21035209ca46de44580e",
"assets/assets/tiles/gameTest3.tmx": "137e25644668afbf781f27e43a61162c",
"assets/assets/tiles/gameTest4.tmx": "99784328802ef43cad80494356ca0ce5",
"assets/assets/tiles/gameTestOld.tmx": "50deef51202d95082664beeb41465b0f",
"assets/assets/tiles/Generic_Home_1_Layer_1_32x32.tsx": "0e327068028cadec3da0a31bec763e06",
"assets/assets/tiles/Generic_Home_1_preview_32x32.tsx": "d26d9a2673b5830ed2fcd7b6c94f7537",
"assets/assets/tiles/HackWarsTilemapDemo-01.tsx": "53c97a4761de0831ad0ea2bcabf99930",
"assets/assets/tiles/HackWarsTilemapDemo.tmx": "cc0ae5356769d9ce3997e2c7fe4c2962",
"assets/assets/tiles/HackWarsTilemapDemo2.tmx": "ac96cbd061276ff97807f531627efdca",
"assets/assets/tiles/Japanese_Home_1_preview_32x32.tsx": "071bc1358572dda43d5ac2de8e05b62c",
"assets/assets/tiles/Museum_room_1_layer_1_32x32.tsx": "40b9785b8048c643311e0d5feabab02a",
"assets/assets/tiles/Museum_room_1_preview_32x32.tsx": "5259d5a26019f76fe1e12d2931c7b1e6",
"assets/assets/tiles/Museum_room_2_preview_32x32.tsx": "6d0985ca360181c8e34b58e116b6d9c0",
"assets/assets/tiles/Museum_room_4_layer_1_32x32.tsx": "ec31b169ed3696f339b90d5d7f10d6fc",
"assets/assets/tiles/testtilemap.tmx": "478cc85d36b0dab12de1b2986e441111",
"assets/assets/tiles/testtileset2.tsx": "8ac3f99ca4fa613052c7e51bcbea7480",
"assets/assets/tiles/testtileset6.tsx": "8d563b8d5c86868706d3cc543ac74306",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8c5fcb516dca35ee2407f1acdee54924",
"assets/NOTICES": "6c707983994d306fbd304622ebb87bc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "470ccc0e910e9f9034a569e0f8c14ac3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e85332cb5983e7cb86b84e52bffb20ff",
"/": "e85332cb5983e7cb86b84e52bffb20ff",
"main.dart.js": "4945b1de4dad75cc4fed6a5485219e98",
"manifest.json": "1976c78e87fb28ba203f5bd5e64afb7e",
"version.json": "0b0e8f66ee7d6472348f695eec23a304"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
