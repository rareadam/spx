import { ethers } from "hardhat";

async function main() {

  const deployerAccount = (await ethers.getSigners())[0];
  
  const StoicPoints = await ethers.getContractFactory("StoicPoints");

  const spx = await StoicPoints.connect(deployerAccount).attach('0xbc100FAb3281A559584b893A1A0B083F00dBf6D9'); // test ships

  for (const [address, amount] of Object.entries(mintMap)) {
    console.log(`Checking balance of ${address}`);
    const balance = await spx.balanceOf(address);
    if (balance == 0) {
      console.log(`Minting ${amount} to ${address}`);
      const amountBN = BigInt(parseInt(amount));
      const multiplier = BigInt(10e18);
      const amountBN18 = amountBN * multiplier;
      await spx.mint(address, amountBN18);
    }
  }
}

const mintMap = {
  "0xca667dc5eb6452245e54ed720ae09b7d8d2d5e17": "173112",
  "0x3d742d2b7b30a1fa5dbad498383c6014d631d2c2": "13246",
  "0xc5c0a2e31dc598b9914fd80ee955a852964049e2": "7103",
  "0x5671069c4b8ab43ea2cef0b364556cc4fa6a24dd": "6867",
  "0x758c005ede7d3b5aa404fe60a1ad570bce0bdb76": "3913",
  "0x2fc09f0ce618bfbca53110ab1ef36b4720bf24ee": "3241",
  "0x4a1fa14064a14105419a8eeb3196aec3e03336f0": "3029",
  "0x9205e933b3e3796a862cc48b069f0cb8800417d1": "2779",
  "0xe9365e906eaab9337062b528efa7d36d6d044ac3": "2770",
  "0x911a1a4e04ccc7a58b4337db381cb284c30ec6f6": "2116",
  "0x939267035088a77df9b350e681daf241466a602e": "2101",
  "0x6af58ced7d0e5162aae77aa05b7eb6cb026ef60b": "1595",
  "0xa6ac9b894d8fa8fe11a253397050544b7973bc58": "1579",
  "0xc9ac4dcb8927891274442484701c104845a23367": "1480",
  "0xce924bc053490f61a5ccdcdad902c6c6e79b026c": "1461",
  "0x1961a02f47d59faf74454058471d2d33a467591e": "1409",
  "0x1f137f133df19d65669165a0963fe72485c7fd0a": "1401",
  "0xa1792068ab6cadff17cb0f47e14ebfa7c062c2f2": "1397",
  "0x14f7c96aa0229a406efd67688c5187bee694de79": "1368",
  "0xe3c22b9688e1f059785414ec2a86e48e82385e2b": "1360",
  "0x39786c76037037fa6ad759780e501b65fc8b5b66": "1355",
  "0xaf8726d7ae21f1b4bca78347e4d013604694a028": "1289",
  "0x6fac9a84b9a274dce2c2bc67821ccaad70b211ca": "1193",
  "0x51a4545bf235564f263fd165728c06c0c0296413": "1188",
  "0xe12183327626ca5667b8d104c595b713a882f1e9": "1126",
  "0xb3bba861aaf540890155ad0fff4f725d4736dcd1": "953",
  "0x27ea811444c724ab9f6359e6813f1715f1aa7924": "951",
  "0x9f752bee40a558bc9b51fe57f94b28fed87a7797": "938",
  "0x2aac04ca70d5bf44d2fea04c8cadbf1aec663a64": "934",
  "0x6cbdaa05b4b6ee48497ca89914dac27ed33aff27": "926",
  "0x771668d5ca9f328073035b848ed62b96829d992d": "923",
  "0xace68744ca6c3cbc5e155ee04b49310a1ecf5c3c": "921",
  "0x3bb8ec886321fb20074f92821ea5b949064e2505": "914",
  "0x52ddec05a176302cd955aa7c5685d76c3a05513a": "896",
  "0x5bfa42b929eef539637401beb60b95e972858b33": "894",
  "0x6dd48ffaeb38fa6716eddfbcf6f11bf6d2d3a017": "872",
  "0x53e695f742b4445314d68a3bf54803db7e7e3e01": "870",
  "0x2d92a94177d9ff139c11b576f118da20d8fee3a4": "865",
  "0x3b701f7be10475b2844ce869f8bf4b797a8a20c2": "865",
  "0x83ca09f32022081142e07c875bf684b866648351": "863",
  "0x4e5c7a9995fc9c224c971b73858f74e04c6a50b8": "861",
  "0x4b2ddf5395fa72959493abc15008527d6db1d49e": "855",
  "0x64ff5c08a1217411bdc05bbd5cd8ea9ad21806f1": "852",
  "0xf9fc7b5b14305510384ba99f58b0d709cbca7fa2": "844",
  "0x264de74427499aae4eb33d616c6a8e889a3b9759": "842",
  "0x75f40f817c3e36749b415aa6b4526eb46f003b2f": "840",
  "0x3564af2559e7239646e465ece0423ba1ff66cb1e": "836",
  "0xb247d8e1334a537eb07e3fd8586cae29b67ae886": "835",
  "0x64b39cfae7d167db04dff2d7de0ab8a27c725bb0": "833",
  "0x920f0d67aa15bbff41aa56eb4183b335911f23cc": "832",
  "0x988d0ed33e9a5e7def0736bc693284bfbb190d17": "832",
  "0x777230337cd2709f4114aef32cb919c97ea73bb0": "829",
  "0x43e36d2c13a7d6a9b1dc46f4bbcbcd2afc3b1e3f": "829",
  "0x073f32e9fc2d6f4d1535192b63ec468a835c09ae": "824",
  "0xcfa4d688f3c680618d4167e2d8cc4d8da973ea18": "820",
  "0x6c73b60cfe226be28a678343a22de1c56884945e": "817",
  "0x0ef955288ab7fe8e490800ad49858dbdb7c1e275": "811",
  "0x7c719c3c98f416bb5fab3c00c09e518e5eb5c1b7": "808",
  "0x2163072ec749b2496bf33e32a96aa340efa6acc3": "802",
  "0x8b4aab448321e8dd0a6255a021ad43423422be47": "798",
  "0xc99619cb2c40fbe46340097ea05810667eaaf53e": "792",
  "0x3beb5e96c21fee32c43bed747dc1fc4e57c5594e": "791",
  "0xf7e83a593c835452c1401b436d80c8e0b4177a00": "791",
  "0xa982f2965130fa59305e480ff42ab6a563b406a3": "789",
  "0x0b0ace5e1a9c213abfa89a3e678c53ea92194ea4": "784",
  "0x095dc168637c271a554b6141c7adc38196a6ce0e": "781",
  "0x319b916a699865618121b99e66e34b1cc597ec32": "781",
  "0x48b00c37dfdfac2d81f84e1ab5d73aa60bf918e4": "781",
  "0x7d2d37f0f538f97113ab2ba3832e4910d92112bd": "777",
  "0x3013999a39d108e08193058054eac9db213a85be": "770",
  "0x071235bf06ec32a4cec26ed007724f16a7db3a43": "769",
  "0xfb6c5bee00b051659945746235f697c1595cbfb2": "768",
  "0x2087e5fc771eb5780efc0fa66fe94e44ea2d9486": "766",
  "0xace383cda6789f8e421f2a39aff0a642336af706": "764",
  "0x2f33e2a1a86c6aaae28274cd6d8db64062e558fa": "763",
  "0xaf91914cb214b29aced04a4ec8dc505f8d22c26a": "760",
  "0xf9cb537f904e8abca75cae76d8c2f26cb4120235": "760",
  "0x293219de49fef495624e637546489556d090c11a": "752",
  "0x8e3bd460675b814a64b231fc5be18a9b119b87ce": "752",
  "0x89507db642580c7c2098061c324852b115ea7948": "748",
  "0xcf87deb8d7361d6c336772b6fb0f3366bfcffddd": "748",
  "0x449e41d4c08c6da0f749441d0958bea329a5206d": "747",
  "0x9399ee1a39c459fd9fa8f2b9800cf5ffff18e1ed": "743",
  "0x2e95fc0598f5e055a7df56a1bb192ebf77d4ba18": "736",
  "0xd204875bad61fc15a75529b80d855b126bf13971": "735",
  "0xfdb22d7517dfe44c2be39d2e8eed59345c30ee1c": "734",
  "0x221713ed46e34a939856f171519e3b0bf2ba5b6f": "732",
  "0x126564cdfef76898bb39d26c59bcc77545e0e34a": "731",
  "0xb0feb69bd02369672fecdae0f92e2699785b7ecd": "728",
  "0x73ec7c2fc4e4e26accf831db6792c25be68673e6": "728",
  "0xb52eeeced164caf4eb4765188b0b1e43cc2840c4": "727",
  "0x8390d4af32b1476d3c4abe73d07666eb802be7d3": "722",
  "0x24fdca0a143e3be01f49e740b93ac1fd7bc83adf": "719",
  "0xa8a0dfc1ee25d6321f75868afa050a85433dc46d": "718",
  "0xa02b2afa034d02e4ba8166d618867d4c4d46f78a": "715",
  "0xbf87fafcc5d86010744ade5e1669d785958fd871": "714",
  "0xbb13855770d680d5dd9ed183a8c4215b241a9856": "712",
  "0x1a5b84f469930741c46cb9cd1f933c4f0afeee50": "703",
  "0xe3dd655964b1adab7284788374669a4318d040a0": "701",
  "0xe0bf6c2e8a46e284de342baba46d82f930fbbf55": "700",
  "0x147d79f1c9244b85cba959262fb71ad38069febb": "698",
  "0x3bda83ad555690d9f5060edbcd287e4fc4b591fd": "697",
  "0x2359f2db4d4a7f25ad04e448a6e6af9a1c474883": "696",
  "0x4625a41899edfe34b72b9c4a4044e70607ca6fb8": "694",
  "0x046d02794dd42da67ac95010404c61df3efc7bd9": "693",
  "0x7664a76c67f3ef30a4a627d88b37b82f01e028d6": "692",
  "0xa4aa7e650a9f6ab12ad569e2707c45194aa1024e": "688",
  "0x4a55846400435c608adf0f4f9c0692b6b4d2d8ea": "685",
  "0x3edb1be154d8c8fc4818fa7695da7620ecd5ef91": "682",
  "0x3e95e93ace1d56792d3ed326b3f20d32f050fd9f": "682",
  "0xf2ea41edc71209a2a844dfe6c9535341b9215fa7": "680",
  "0xa357023c33b06e493bb94a0742538e1567108b34": "678",
  "0x9420282ce93e91a0e756b8a33a48e64e863bca3e": "674",
  "0xccdbaf14dd6152bef679a8c0a1cf43b874e4f21f": "673",
  "0xa7b56b5dfce40a22d0ac8c872fbc0ae64d2e05ac": "672",
  "0xffab49ba552ff92be70c90c256e5f132d9cbc991": "670",
  "0x2031b4f365baed9b337248656fc21419e2f6951c": "670",
  "0xc6d0887abced3f8922966fb0564759849010329d": "668",
  "0x85318fd8c8ffce0a150bae8ea8841c19b31c98a5": "661",
  "0xd4228b58dc15800d5188cf16f2fc8de815b5287f": "660",
  "0x5e5beba51c68defe05738f0b6774de9b1b18bae4": "658",
  "0x75e5ef92fd7b6bcd54869f096e8278cc079f5036": "657",
  "0xbba1fb1378f8143bb7dc6dd3617274ed05645723": "657",
  "0x5c116a9c14dccf1b1b271394a89baf4d76c04222": "653",
  "0x31f9c5256e0df0545a2efded261b254e5c80b78a": "647",
  "0xe320c11e399bcb08f66c66578ca32cc81bfb19cb": "646",
  "0x33de9e69b31b51e3ff264ed90479189244e12c1b": "644",
  "0x914bd52a86f6f2f3fc72843e69ee2dd8a54ed50c": "641",
  "0x19e2fe91e9bf32b0bb73baeaf73a30ac462eaa68": "638",
  "0x6500868ab045433784046cfd0ad6337af505cde7": "635",
  "0x4a74228bcac7cc2e6fa52eeb644005edbcb7ed9a": "634",
  "0x7a31b8dc3cb42cfa99e5176e4b91e6c55bb24e92": "632",
  "0x5f1a53474c825f60e81bd05af8b6fcbae69372f0": "632",
  "0xa26c5526139926aeffd52116aa1c415d7b5122ff": "624",
  "0xb79536f8a5d2e4375432c6036acfee60c0767419": "624",
  "0xfdc430512b925cf19b4f4c3214570ea0ee0c875e": "622",
  "0xdd55573ca074d95fc5da0f6536c85c4040ca5a72": "614",
  "0x05213c539db8618860098772ff227a0d374b194c": "613",
  "0x513b1181e9ad2e4c787fa62441af07eb5bb301c9": "606",
  "0x9e9466ed858ec5dabb1efae32ec139c392d7c249": "592",
  "0x7f3f6cfd66ff7dcad497cab17046ecb97ac47e32": "592",
  "0xe0e11ee72a99d9b74708f70a97bc4af5f331defc": "584",
  "0xdc40254a4ae6e900a28352e030eb480804e39597": "584",
  "0xfb4e07c7bf05464e6206abc93873078f2fc53991": "581",
  "0xa5a117d580fdc2269469a92e62acbd9190ae9e60": "579",
  "0x3c9633cec60cbab5c422ccf3d8e56c0c3b79a74f": "578",
  "0xa1cda7b43230dc657a0cda2b14f75b6b68bcb8e3": "577",
  "0xd461719116bb7f9dc9d0cc18ea675edbf77e28e0": "577",
  "0xe997123875a7bc395e3faa136bcbe8fef69118fa": "575",
  "0x098d55c89ef6891cd7dfc963e8806e7a6b484006": "571",
  "0x8c12a5e44e28ea8c1247a13083e14ed531d070ba": "568",
  "0x7a4b48f5c8f44543cdd493d7db1fe3b8be5b5ca6": "567",
  "0x4a6d75e37dcc39fc1a41be39a97e6ee47ff3dcc4": "560",
  "0xaed27bd7ba4e189ce31a39a8582907b8960bf19d": "560",
  "0x158169a722f85e8dd64fa4692af4ba0ee3ac3f1f": "560",
  "0x26de9a0c51850ac59dd8d43d35f14688b38d4fd5": "556",
  "0x678ad45b866dbee4be4597c3dc6b6b8d049e16a1": "556",
  "0x10217706c39671a97dc08ba196a1705a88732f5b": "552",
  "0x5fa6c2cdc923631b99f42e7ab0ac44800fba1419": "550",
  "0x359eeba20e18a1dfaec2d3144c85a016533673dd": "541",
  "0x8a3a29ffbd171b454fd2cd89e2fe2bdbc746f9f2": "540",
  "0x8a742c860cd93efcf8e4911777e59f6a03d7e534": "526",
  "0xf5d8edca6514077a57e66479336967b5daa8217e": "504",
  "0x0145582cb27bd79163462029a81bbb0b56a3991e": "498",
  "0xd7423ccde9c2eaa2d08ec28b64a323480bf94652": "498",
  "0x9be29b628a77bede69d9164af63a29feefa10d31": "497",
  "0x88208377ba6c33675c1b91b6a62285cf1f848456": "493",
  "0xbeaaf573c71f50086f4e9491d2338abfd023446d": "492",
  "0x66b523e7b4db9aca648e2e18ea14eaf3e6b754f3": "492",
  "0x68c7f476f37580f8fb46a6d7710a6b07b67274d9": "491",
  "0xdd994cbedf205eb4a111be51e9b8e2ac935bb3b5": "489",
  "0x2d9bf3719887af7dedc83438869ffa72ee3a37d7": "488",
  "0xb8368292a7f493cdae9b400a94e0170659626200": "477",
  "0x499a1b7cd389033ceb0c7a0fadf5161adc068592": "467",
  "0x47417dfe2dba6e89a636be0044f57f0405cd5ff1": "460",
  "0x0d80c750142a00ff13015fa2ad50e81350256b01": "448",
  "0xaab8fb4b28bd8af10efb2a3934cca6efef0e8131": "446",
  "0xaa725d44a1c8ba0303507ef86a831c66ce462f78": "424",
  "0x432059133b84256c3cf72b68040db01d2be2b681": "413",
  "0x3c096ba01bd406bc8567fc1c59b5cd94d4b32c05": "409"
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});