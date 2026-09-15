window.PLAN = {
  "DATA": {
    "target": {
      "souvenir": "Ready bag (레디백)",
      "needStamps": 20,
      "needCourses": 0,
      "fullClear": "10 courses / 76 stamps — later trips",
      "coursesCovered": [
        "Royalty Route",
        "Prehistoric Landscape Route",
        "Baekje Antiquity Route",
        "Korean Temple Monasteries (Sansa) Route"
      ],
      "stampCount": 21,
      "extraCount": 2
    },
    "groups": [
      {
        "id": "airport-jangneung",
        "title": "Airport + Gimpo Jangneung",
        "sameDay": true,
        "nCore": 4,
        "nExtra": 0,
        "firstSite": "Incheon Airport T1 홍보관",
        "total": 11250,
        "visitMin": 240,
        "ordered": [
          {
            "stop": 1,
            "id": 90,
            "name": "Incheon Airport T1 홍보관",
            "type": "Hub",
            "role": "core",
            "route": "홍보관 체험",
            "stamps": 3,
            "fromPrevKmAir": 48.5
          },
          {
            "stop": 2,
            "id": 72,
            "name": "Gimpo Jangneung",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 24.8,
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Incheon Airport T1 홍보관",
            "toId": 90,
            "toType": "Hub",
            "role": "core",
            "min": 85,
            "fare": 4650,
            "mode": "transit",
            "ok": true,
            "transfers": 1,
            "legs": [
              "Walk 4 min",
              "160 (원남동 > 공덕역) (22 min) · 0804→0826 · every 8 min",
              "Walk 5 min",
              "수도권 공항철도 (공덕 > 인천공항1터미널) (51 min) · 0831→0922 · every 7 min",
              "Walk 3 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611070800",
            "clockLeave": 480,
            "clockArrive": 565,
            "rare": false,
            "maxInterval": 8,
            "intervalOver": "N",
            "m": 61263,
            "waitOpen": 35
          },
          {
            "fromName": "Incheon Airport T1 홍보관",
            "toName": "Gimpo Jangneung",
            "toId": 72,
            "toType": "Standard",
            "role": "core",
            "min": 72,
            "fare": 4550,
            "mode": "transit",
            "ok": true,
            "transfers": 1,
            "legs": [
              "Walk 3 min",
              "수도권 공항철도 (인천공항1터미널 > 김포공항) (35 min) · 1053→1128 · every 7 min",
              "Walk 5 min",
              "수도권 김포골드라인 (김포공항 > 사우(김포시청)) (12 min) · 1133→1145 · every 3 min",
              "Walk 17 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611071050",
            "clockLeave": 650,
            "clockArrive": 722,
            "rare": false,
            "maxInterval": 7,
            "intervalOver": "N",
            "m": 50229
          },
          {
            "fromName": "Gimpo Jangneung",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 83,
            "fare": 2050,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 17 min",
              "수도권 김포골드라인 (사우(김포시청) > 김포공항) (12 min) · 1409→1421 · every 3 min",
              "Walk 5 min",
              "수도권 공항철도 (김포공항 > 서울역) (20 min) · 1426→1446 · every 7 min",
              "Walk 11 min",
              "162 (서울역버스환승센터.강우규의거터 > 원남동사거리) (16 min) · 1457→1513 · every 8 min",
              "Walk 2 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611071352",
            "clockLeave": 832,
            "clockArrive": 915,
            "rare": false,
            "maxInterval": 8,
            "intervalOver": "N",
            "m": 37576
          }
        ],
        "kakaoOk": false,
        "note": "Clocked Sat 7 Nov: AREX all-stop 공덕 08:31–09:22 T1. 홍보관 10:00. Then AREX 10:53 to 김포공항, Goldline to 사우, 17 min walk. Home 15:15 AREX 서울역 + 162. T-money, not AREX express."
      },
      {
        "id": "seoul-palaces",
        "title": "Seoul royal core",
        "sameDay": true,
        "nCore": 3,
        "nExtra": 0,
        "firstSite": "Jongmyo Shrine",
        "total": 3050,
        "visitMin": 82,
        "ordered": [
          {
            "stop": 1,
            "id": 65,
            "name": "Jongmyo Shrine",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 0.43,
            "stamps": 1
          },
          {
            "stop": 2,
            "id": 66,
            "name": "Changdeokgung Palace",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 0.59,
            "stamps": 1
          },
          {
            "stop": 3,
            "id": 71,
            "name": "Gyeongbokgung Palace",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 1.23,
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Jongmyo Shrine",
            "toId": 65,
            "toType": "Standard",
            "role": "core",
            "min": 17,
            "fare": 0,
            "mode": "walk",
            "ok": true,
            "transfers": 0,
            "legs": [
              "Walk 17 min"
            ],
            "closing": false,
            "source": "walk-estimate",
            "searchTime": "202611150900",
            "clockLeave": 540,
            "clockArrive": 557,
            "rare": false
          },
          {
            "fromName": "Jongmyo Shrine",
            "toName": "Changdeokgung Palace",
            "toId": 66,
            "toType": "Standard",
            "role": "core",
            "min": 23,
            "fare": 0,
            "mode": "walk",
            "ok": true,
            "transfers": 0,
            "legs": [
              "Walk 23 min"
            ],
            "closing": false,
            "source": "walk-estimate",
            "searchTime": "202611151017",
            "clockLeave": 617,
            "clockArrive": 640,
            "rare": false
          },
          {
            "fromName": "Changdeokgung Palace",
            "toName": "Gyeongbokgung Palace",
            "toId": 71,
            "toType": "Standard",
            "role": "core",
            "min": 19,
            "fare": 1550,
            "mode": "transit",
            "ok": true,
            "transfers": 0,
            "legs": [
              "Walk 8 min",
              "수도권 3호선 (안국 > 경복궁) (2 min) · 1203→1205 · every 6 min",
              "Walk 9 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611151155",
            "clockLeave": 715,
            "clockArrive": 734,
            "rare": false,
            "maxInterval": 6,
            "intervalOver": "N",
            "m": 2104
          },
          {
            "fromName": "Gyeongbokgung Palace",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 23,
            "fare": 1500,
            "mode": "transit",
            "ok": true,
            "transfers": 0,
            "legs": [
              "Walk 11 min",
              "710 (경복궁 > 원남동사거리) (10 min) · 1455→1505 · every 9 min",
              "Walk 2 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611151444",
            "clockLeave": 884,
            "clockArrive": 907,
            "rare": false,
            "maxInterval": 9,
            "intervalOver": "N",
            "m": 2502
          }
        ],
        "kakaoOk": false,
        "note": "Clocked Sun 15 Nov: walk Jongmyo then Changdeokgung. Line 3 안국→경복궁 12:03 (every 6 min). Return 710 14:55 to 원남동사거리. Sunday Jongmyo is walk-in."
      },
      {
        "id": "namhansanseong",
        "title": "Namhansanseong",
        "sameDay": true,
        "nCore": 1,
        "nExtra": 0,
        "firstSite": "Namhansanseong Fortress",
        "total": 4300,
        "visitMin": 206,
        "ordered": [
          {
            "stop": 1,
            "id": 63,
            "name": "Namhansanseong Fortress",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 19.49,
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Namhansanseong Fortress",
            "toId": 63,
            "toType": "Standard",
            "role": "core",
            "min": 103,
            "fare": 2150,
            "mode": "transit",
            "ok": true,
            "transfers": 3,
            "legs": [
              "Walk 16 min",
              "수도권 4호선 (혜화 > 동대문역사문화공원) (4 min) · 0846→0850 · every 5 min",
              "Walk 3 min",
              "수도권 2호선 (동대문역사문화공원 > 잠실) (21 min) · 0853→0914 · every 5 min",
              "Walk 7 min",
              "수도권 8호선 (잠실 > 남한산성입구) (17 min) · 0921→0938 · every 5 min",
              "Walk 7 min",
              "9 (상원초교.성남중앙병원.양지유스센터 > 남한산성(종점)) (24 min) · 0945→1009 · every 20 min",
              "Walk 4 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611110830",
            "clockLeave": 510,
            "clockArrive": 613,
            "rare": false,
            "maxInterval": 20,
            "intervalOver": "N",
            "m": 32991
          },
          {
            "fromName": "Namhansanseong Fortress",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 103,
            "fare": 2150,
            "mode": "transit",
            "ok": true,
            "transfers": 3,
            "legs": [
              "Walk 4 min",
              "9 (남한산성도립공원 > 상원초등학교.양지유스센터) (23 min) · 1117→1140 · every 20 min",
              "Walk 8 min",
              "수도권 8호선 (남한산성입구 > 잠실) (17 min) · 1148→1205 · every 5 min",
              "Walk 7 min",
              "수도권 2호선 (잠실 > 동대문역사문화공원) (21 min) · 1212→1233 · every 5 min",
              "Walk 3 min",
              "수도권 4호선 (동대문역사문화공원 > 혜화) (4 min) · 1236→1240 · every 5 min",
              "Walk 16 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611111113",
            "clockLeave": 673,
            "clockArrive": 776,
            "rare": false,
            "maxInterval": 20,
            "intervalOver": "N",
            "m": 32827
          }
        ],
        "kakaoOk": false,
        "note": "Clocked Wed 11 Nov: Line 4/2/8 to 남한산성입구, then bus 9 (the last-mile ride, every 20 min), 행궁 10:09. Return the same 9 at 11:17, then Line 8/2/4. ODsay also offered 52 every 100 min — do not take it."
      },
      {
        "id": "suwon-hwaseong",
        "title": "Suwon Hwaseong + Yungneung",
        "sameDay": true,
        "nCore": 2,
        "nExtra": 0,
        "firstSite": "Suwon Hwaseong Fortress",
        "total": 11950,
        "visitMin": 260,
        "ordered": [
          {
            "stop": 1,
            "id": 64,
            "name": "Suwon Hwaseong Fortress",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 32.14,
            "stamps": 1
          },
          {
            "stop": 2,
            "id": 67,
            "name": "Yungneung and Geolleung Royal Tombs",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 8.57,
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Suwon Hwaseong Fortress",
            "toId": 64,
            "toType": "Standard",
            "role": "core",
            "min": 90,
            "fare": 4550,
            "mode": "transit",
            "ok": true,
            "transfers": 4,
            "legs": [
              "Walk 2 min",
              "162 (원남동사거리 > 혜화역2번출구.마로니에공원) (8 min) · 0802→0810 · every 8 min",
              "Walk 3 min",
              "수도권 4호선 (혜화 > 충무로) (6 min) · 0813→0819 · every 5 min",
              "Walk 2 min",
              "수도권 3호선 (충무로 > 신사) (12 min) · 0821→0833 · every 6 min",
              "Walk 2 min",
              "수도권 신분당선 (신사 > 광교중앙(아주대)) (33 min) · 0835→0908 · every 8 min",
              "11(남양여객) (광교중앙.경기도청.아주대역환승센터(지하) > 팔달구청.수원화성박물관) (19 min) · 0908→0927 · every 15 min",
              "Walk 3 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611100800",
            "clockLeave": 480,
            "clockArrive": 570,
            "rare": false,
            "maxInterval": 15,
            "intervalOver": "N",
            "m": 47712
          },
          {
            "fromName": "Suwon Hwaseong Fortress",
            "toName": "Yungneung and Geolleung Royal Tombs",
            "toId": 67,
            "toType": "Standard",
            "role": "core",
            "min": 51,
            "fare": 4850,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 3 min",
              "11(남양여객) (팔달구청.수원화성박물관 > 수원역7번출구.AK플라자) (13 min) · 1023→1036 · every 15 min",
              "Walk 5 min",
              "수도권 1호선 (수원 > 병점) (8 min) · 1041→1049 · every 10 min",
              "Walk 3 min",
              "1551 (병점역후문 > 융건릉사거리) (14 min) · 1052→1106 · every 50 min",
              "Walk 5 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611101020",
            "clockLeave": 620,
            "clockArrive": 671,
            "rare": false,
            "maxInterval": 50,
            "intervalOver": "N",
            "m": 15720
          },
          {
            "fromName": "Yungneung and Geolleung Royal Tombs",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 119,
            "fare": 2550,
            "mode": "transit",
            "ok": true,
            "transfers": 1,
            "legs": [
              "Walk 4 min",
              "35-1(A) (융건릉입구 > 병점역후문) (20 min) · 1325→1345 · every 25 min",
              "Walk 4 min",
              "수도권 1호선 (병점 > 종로5가) (77 min) · 1349→1506 · every 10 min",
              "Walk 14 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611101321",
            "clockLeave": 801,
            "clockArrive": 920,
            "rare": false,
            "maxInterval": 25,
            "intervalOver": "N",
            "m": 58755
          }
        ],
        "kakaoOk": false,
        "note": "Clocked Tue 10 Nov: 162 is only to 혜화. Shinbundang 신사→광교중앙 is the long ride, then bus 11 to the museum 09:27. 1551 병점역후문→융건릉사거리 (every 50 min) plus a short walk. Return 35-1(A) only to 병점, then Line 1 병점→종로5가 (77 min), home 15:20."
      },
      {
        "id": "ganghwa",
        "title": "Jeondeungsa + Ganghwa dolmen",
        "sameDay": true,
        "nCore": 2,
        "nExtra": 0,
        "firstSite": "Jeondeungsa Temple",
        "total": 11750,
        "visitMin": 412,
        "ordered": [
          {
            "stop": 1,
            "id": 70,
            "name": "Jeondeungsa Temple",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 45.0,
            "stamps": 1
          },
          {
            "stop": 2,
            "id": 69,
            "name": "Ganghwa Dolmen Site",
            "type": "Standard",
            "role": "core",
            "route": "Royalty Route",
            "fromPrevKmAir": 16.3,
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Jeondeungsa Temple",
            "toId": 70,
            "toType": "Standard",
            "role": "core",
            "min": 137,
            "fare": 3850,
            "mode": "transit",
            "ok": true,
            "transfers": 4,
            "legs": [
              "Walk 2 min",
              "7025 (원남동사거리 > 동대문) (9 min) · 0802→0811 · every 19 min",
              "Walk 4 min",
              "수도권 4호선 (동대문 > 서울역) (9 min) · 0815→0824 · every 5 min",
              "Walk 5 min",
              "수도권 공항철도 (서울역 > 김포공항) (20 min) · 0829→0849 · every 7 min",
              "Walk 5 min",
              "수도권 김포골드라인 (김포공항 > 구래) (26 min) · 0854→0920 · every 3 min",
              "Walk 5 min",
              "70 (구래역 > 전등사 남문) (45 min) · 0925→1010 · every 37 min",
              "Walk 7 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611080800",
            "clockLeave": 480,
            "clockArrive": 617,
            "rare": false,
            "maxInterval": 37,
            "intervalOver": "N",
            "m": 64632
          },
          {
            "fromName": "Jeondeungsa Temple",
            "toName": "Ganghwa Dolmen Site",
            "toId": 69,
            "toType": "Standard",
            "role": "core",
            "min": 105,
            "fare": 2800,
            "mode": "transit",
            "ok": true,
            "transfers": 1,
            "legs": [
              "Walk 18 min",
              "70 (온수리 > 강화터미널) (44 min) · 1125→1209 · every 37 min",
              "21(송해)(강화) (강화터미널 > 서홍의입구) (25 min) · 1209→1234 · every 60 min",
              "Walk 18 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611081107",
            "clockLeave": 667,
            "clockArrive": 772,
            "rare": false,
            "maxInterval": 60,
            "intervalOver": "N",
            "m": 21971
          },
          {
            "fromName": "Ganghwa Dolmen Site",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 170,
            "fare": 5100,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 11 min",
              "20(송해)(강화) (부근삼거리 > 풍물시장) (23 min) · 1433→1456 · every 80 min",
              "Walk 8 min",
              "3000 (강화병원 > 마곡동로사거리) (72 min) · 1504→1616 · every 40 min",
              "601 (마곡동로사거리 > 창경궁.서울대학교병원) (50 min) · 1616→1706 · every 12 min",
              "Walk 6 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611081422",
            "clockLeave": 862,
            "clockArrive": 1032,
            "rare": false,
            "maxInterval": 80,
            "intervalOver": "N",
            "m": 62950
          }
        ],
        "kakaoOk": false,
        "note": "Clocked Sun 8 Nov: Goldline to 구래, bus 70 09:25–10:10 to 전등사 (7025 is only 원남동→동대문). Then 70 to 강화터미널, 21(송해) to 서홍의입구, ~18 min walk to the 고인돌 안내소 — 21 does not stop at the pad. Home: 20(송해) 부근삼거리→풍물시장, then 3000 to Seoul (the long leg), then 601, 17:12. T-money."
      },
      {
        "id": "pocheon",
        "title": "Pocheon Hantangang",
        "sameDay": true,
        "nCore": 4,
        "nExtra": 0,
        "firstSite": "Bidulginang Falls, Pocheon",
        "total": 24600,
        "visitMin": 486,
        "ordered": [
          {
            "stop": 1,
            "id": 44,
            "name": "Bidulginang Falls, Pocheon",
            "type": "Standard",
            "role": "core",
            "route": "Prehistoric Landscape Route",
            "stamps": 1
          },
          {
            "stop": 2,
            "id": 46,
            "name": "Hantangang Geopark Center, Pocheon",
            "type": "Standard",
            "role": "core",
            "route": "Prehistoric Landscape Route",
            "stamps": 1
          },
          {
            "stop": 3,
            "id": 47,
            "name": "Hwajeokyeon, Pocheon",
            "type": "Standard",
            "role": "core",
            "route": "Prehistoric Landscape Route",
            "stamps": 1
          },
          {
            "stop": 4,
            "id": 45,
            "name": "Pocheon Art Valley",
            "type": "Standard",
            "role": "core",
            "route": "Prehistoric Landscape Route",
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Bidulginang Falls, Pocheon",
            "toId": 44,
            "toType": "Standard",
            "role": "core",
            "min": 140,
            "fare": 11900,
            "mode": "transit",
            "ok": true,
            "transfers": 3,
            "legs": [
              "Walk 4 min",
              "301 (연지공원앞.현대그룹빌딩 > 동대문역사문화공원) (9 min) · 0634→0643 · every 8 min",
              "Walk 5 min",
              "수도권 2호선 (동대문역사문화공원 > 강변) (16 min) · 0648→0704 · every 5 min",
              "Walk 2 min",
              "시외버스 (동서울종합터미널 > 운천시외버스터미널) (70 min) · 0706→0816 · every 33 min",
              "Walk 4 min",
              "10 (영북농협앞 > 유네스코세계지질공원.비둘기낭) (25 min) · 0820→0845 · every 60 min",
              "Walk 5 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611140630",
            "clockLeave": 390,
            "clockArrive": 530,
            "rare": false,
            "maxInterval": 60,
            "m": 95198,
            "waitOpen": 10
          },
          {
            "fromName": "Bidulginang Falls, Pocheon",
            "toName": "Hantangang Geopark Center, Pocheon",
            "toId": 46,
            "toType": "Standard",
            "role": "core",
            "min": 18,
            "fare": 0,
            "mode": "walk",
            "ok": true,
            "transfers": 0,
            "legs": [
              "Walk 18 min"
            ],
            "closing": false,
            "source": "walk-estimate",
            "searchTime": "202611140940",
            "clockLeave": 580,
            "clockArrive": 598,
            "rare": false
          },
          {
            "fromName": "Hantangang Geopark Center, Pocheon",
            "toName": "Hwajeokyeon, Pocheon",
            "toId": 47,
            "toType": "Standard",
            "role": "core",
            "min": 82,
            "fare": 1500,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 6 min",
              "10 (유네스코세계지질공원.비둘기낭 > 영북면사무소) (25 min) · 1049→1114 · every 160 min",
              "Walk 3 min",
              "3002 (영북농협앞 > 자일3리) (7 min) · 1117→1124 · every 50 min",
              "89 (자일3리 > 자일2리.경로당앞) (11 min) · 1124→1135 · every 180 min",
              "Walk 30 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611141043",
            "clockLeave": 643,
            "clockArrive": 725,
            "rare": true,
            "maxInterval": 180,
            "intervalOver": "Y",
            "m": 14845,
            "fareNote": "ODsay returned ₩0; T-money local estimate"
          },
          {
            "fromName": "Hwajeokyeon, Pocheon",
            "toName": "Pocheon Art Valley",
            "toId": 45,
            "toType": "Standard",
            "role": "core",
            "min": 114,
            "fare": 1500,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 55 min",
              "89 (자일4리 > 문암삼거리.탑동네) (18 min) · 1430→1448 · every 180 min",
              "3002 (문암삼거리.탑동네 > 신북면행정복지센터.포천아트밸리) (30 min) · 1448→1518 · every 50 min",
              "Walk 1 min",
              "73 (신북면행정복지센터.포천아트밸리 > 포천아트밸리) (9 min) · 1519→1528 · every 120 min",
              "Walk 1 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611141335",
            "clockLeave": 815,
            "clockArrive": 929,
            "rare": true,
            "maxInterval": 180,
            "intervalOver": "Y",
            "m": 27480,
            "fareNote": "ODsay returned ₩0; T-money local estimate"
          },
          {
            "fromName": "Pocheon Art Valley",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 132,
            "fare": 9700,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 1 min",
              "73 (포천아트밸리 > 신읍7통.기업은행앞) (23 min) · 1645→1708 · every 60 min",
              "Walk 3 min",
              "시외버스 (포천시외버스터미널 > 센트럴시티터미널) (60 min) · 1711→1811 · every 135 min",
              "Walk 7 min",
              "수도권 3호선 (고속터미널 > 종로3가) (19 min) · 1818→1837 · every 6 min",
              "Walk 19 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611141644",
            "clockLeave": 1004,
            "clockArrive": 1136,
            "rare": true,
            "maxInterval": 135,
            "m": 81143
          }
        ],
        "kakaoOk": false,
        "note": "Clocked Sat 14 Nov, reversed: 301 is only to 동대문역사문화공원. Line 2 to 강변, then 동서울 시외 07:06–08:16 to 운천 (the long ride), bus 10 to Bidulginang 08:45. Hwajeokyeon via 10/3002/89 (every 160–180 min — taxi if you miss) plus a long walk off 뗏마루길. Home: 73 only to 포천터미널, then 시외 17:11 to 센트럴시티 (the long ride) + Line 3, 18:56."
      },
      {
        "id": "yeoncheon",
        "title": "Yeoncheon prehistoric sites",
        "sameDay": true,
        "nCore": 2,
        "nExtra": 0,
        "firstSite": "Archaeological Site in Jeongok-ri, Yeoncheon",
        "total": 9900,
        "visitMin": 427,
        "ordered": [
          {
            "stop": 1,
            "id": 41,
            "name": "Archaeological Site in Jeongok-ri, Yeoncheon",
            "type": "Standard",
            "role": "core",
            "route": "Prehistoric Landscape Route",
            "stamps": 1
          },
          {
            "stop": 2,
            "id": 42,
            "name": "Horogoru Embankment, Yeoncheon",
            "type": "Standard",
            "role": "core",
            "route": "Prehistoric Landscape Route",
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Archaeological Site in Jeongok-ri, Yeoncheon",
            "toId": 41,
            "toType": "Standard",
            "role": "core",
            "min": 111,
            "fare": 4800,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 16 min",
              "수도권 4호선 (혜화 > 창동) (18 min) · 0746→0804 · every 5 min",
              "Walk 2 min",
              "수도권 1호선 (창동 > 전곡) (54 min) · 0806→0900 · every 6 min",
              "Walk 2 min",
              "55 (전곡역 > 은대리성삼거리) (6 min) · 0902→0908 · every 60 min",
              "Walk 13 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611120730",
            "clockLeave": 450,
            "clockArrive": 561,
            "rare": false,
            "maxInterval": 60,
            "intervalOver": "N",
            "m": 56081
          },
          {
            "fromName": "Archaeological Site in Jeongok-ri, Yeoncheon",
            "toName": "Horogoru Embankment, Yeoncheon",
            "toId": 42,
            "toType": "Standard",
            "role": "core",
            "min": 117,
            "fare": 2150,
            "mode": "transit",
            "ok": true,
            "transfers": 0,
            "legs": [
              "Walk 13 min",
              "83 (은대리성삼거리 > 원당3리마을회관) (88 min) · 1024→1152 · every 60 min",
              "Walk 16 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611121011",
            "clockLeave": 611,
            "clockArrive": 728,
            "rare": true,
            "maxInterval": 60,
            "intervalOver": "Y",
            "m": 35377
          },
          {
            "fromName": "Horogoru Embankment, Yeoncheon",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 199,
            "fare": 2950,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 16 min",
              "83 (원당3리마을회관 > 전곡역) (91 min) · 1409→1540 · every 190 min",
              "Walk 2 min",
              "수도권 1호선 (전곡 > 창동) (54 min) · 1542→1636 · every 6 min",
              "Walk 2 min",
              "수도권 4호선 (창동 > 혜화) (18 min) · 1638→1656 · every 5 min",
              "Walk 16 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611121353",
            "clockLeave": 833,
            "clockArrive": 1032,
            "rare": true,
            "maxInterval": 190,
            "intervalOver": "N",
            "m": 90083
          }
        ],
        "kakaoOk": false,
        "note": "Clocked Thu 12 Nov: Line 4 only to 창동; Line 1 창동→전곡 is the long ride (09:00). Bus 55 is a 6 min last mile. ODsay uses 83 10:24–11:52 to Horogoru (not 093-1). Return 83 at 14:09 (every 190 min) then Line 1. Taxi 원당→전곡 if 14:09 is gone."
      },
      {
        "id": "gongju-buyeo",
        "title": "Gongju + Buyeo extras",
        "sameDay": true,
        "nCore": 3,
        "nExtra": 2,
        "firstSite": "Magoksa Temple, Gongju",
        "total": 44050,
        "visitMin": 484,
        "ordered": [
          {
            "stop": 1,
            "id": 17,
            "name": "Magoksa Temple, Gongju",
            "type": "Standard",
            "role": "core",
            "route": "Baekje Antiquity Route | Korean Temple Monasteries (Sansa) Route",
            "fromPrevKmAir": 113.11,
            "stamps": 2
          },
          {
            "stop": 2,
            "id": 16,
            "name": "Gongsanseong Fortress, Gongju",
            "type": "Standard",
            "role": "core",
            "route": "Baekje Antiquity Route",
            "fromPrevKmAir": 14.54,
            "stamps": 1
          },
          {
            "stop": 3,
            "id": 19,
            "name": "Outer City Wall (Buyeo Naseong)",
            "type": "Standard",
            "role": "extra",
            "route": "Baekje Antiquity Route",
            "fromPrevKmAir": 25.92,
            "stamps": 1
          },
          {
            "stop": 4,
            "id": 20,
            "name": "Busosanseong Fortress, Buyeo",
            "type": "Standard",
            "role": "extra",
            "route": "Baekje Antiquity Route",
            "fromPrevKmAir": 4.34,
            "stamps": 1
          }
        ],
        "hops": [
          {
            "fromName": "4 Changgyeonggung-ro 22-gil",
            "toName": "Magoksa Temple, Gongju",
            "toId": 17,
            "toType": "Standard",
            "role": "core",
            "min": 223,
            "fare": 16700,
            "mode": "transit",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 4 min",
              "143 (원남동 > 고속터미널) (30 min) · 0604→0634 · every 7 min",
              "Walk 4 min",
              "고속버스 (서울고속버스터미널 > 공주종합버스터미널) (90 min) · 0638→0808 · every 42 min",
              "Walk 2 min",
              "770(산성동.마곡사) (종합버스터미널 > 마곡사) (68 min) · 0810→0918 · every 60 min",
              "Walk 25 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611090600",
            "clockLeave": 360,
            "clockArrive": 583,
            "rare": false,
            "maxInterval": 60,
            "m": 162308
          },
          {
            "fromName": "Magoksa Temple, Gongju",
            "toName": "Gongsanseong Fortress, Gongju",
            "toId": 16,
            "toType": "Standard",
            "role": "core",
            "min": 112,
            "fare": 1500,
            "mode": "transit",
            "ok": true,
            "transfers": 0,
            "legs": [
              "Walk 25 min",
              "770(마곡사.산성동) (마곡사 > 산성동/시내버스정류장) (79 min) · 1118→1237 · every 60 min",
              "Walk 8 min"
            ],
            "closing": false,
            "source": "odsay-maasRP",
            "searchTime": "202611091053",
            "clockLeave": 653,
            "clockArrive": 765,
            "rare": true,
            "maxInterval": 60,
            "intervalOver": "Y",
            "m": 27961
          },
          {
            "fromName": "Gongsanseong Fortress, Gongju",
            "toName": "4 Changgyeonggung-ro 22-gil",
            "role": "return",
            "min": 149,
            "fare": 25850,
            "mode": "rail",
            "ok": true,
            "transfers": 2,
            "legs": [
              "Walk 8 min",
              "201(산성동.공주역) (산성동/시내버스정류장 > 공주역) (48 min) · 1508→1556 · every 60 min",
              "Walk 2 min",
              "KTX (공주 > 용산) (62 min) · 1558→1700 · every 47 min",
              "Walk 2 min",
              "수도권 1호선 (용산 > 종로5가) (13 min) · 1702→1715 · every 10 min",
              "Walk 14 min"
            ],
            "closing": true,
            "source": "odsay-maasRP",
            "searchTime": "202611091500",
            "clockLeave": 900,
            "clockArrive": 1049,
            "rare": false,
            "maxInterval": 60,
            "m": 179775
          }
        ],
        "kakaoOk": false,
        "longDay": true,
        "note": "Clocked Mon 9 Nov: 143 is only 원남동→고속터미널. 고속버스 06:38–08:08 to 공주 (the long ride), then 770 08:10–09:18 to Magoksa. Back on 770 11:18–12:37. 201 only to 공주역, then KTX 15:58–17:00 용산. Book that KTX; buy the morning 고속버스 separately."
      }
    ],
    "quotaNote": "ODsay maasRP SearchTime on the Nov 2026 clocks · 15 Sep 2026 · 28/30 calls today (4 morning auth fails, 1 probe, 23 timed hops). 2 left.",
    "source": "ODsay maasRP (clocked) · SearchMethod=2 · 15 Sep 2026"
  },
  "STAMPS": {
    "65": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "종묘 내 수표소",
      "lat": 37.57216,
      "lon": 126.994783,
      "hours": "Tue closed; timed entry most days",
      "note": "Ticket office at 종로 157, then the 수표소 inside."
    },
    "66": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "창덕궁 매표소 (돈화문), also 카페 사랑 창덕궁 inside",
      "lat": 37.577859,
      "lon": 126.989947,
      "hours": "Mon closed"
    },
    "71": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "경복궁 동궐마루 사랑 (cafe Sarang inside the palace)",
      "lat": 37.578582,
      "lon": 126.975728,
      "hours": "Tue closed"
    },
    "63": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "남한산성 행궁방문자센터; 세계유산센터 is 도장만",
      "lat": 37.478558,
      "lon": 127.182327,
      "note": "Heritage center alternate: 37.476696, 127.188418 (남한산성로 731)."
    },
    "64": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "수원화성박물관 안내데스크 — not the fortress gates",
      "lat": 37.282718,
      "lon": 127.019025,
      "hours": "Tue–Sun 09:00–17:00; no stamp after 17:00"
    },
    "67": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "융릉과 건릉 매표소 뒤 수표소",
      "lat": 37.207991,
      "lon": 126.988879,
      "hours": "Mon closed"
    },
    "72": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "정문 매표소 옆 수표실",
      "lat": 37.612385,
      "lon": 126.715538,
      "hours": "Mon closed"
    },
    "70": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "전등사 남문 매표소 앞, 동문 매표소 앞",
      "lat": 37.630907,
      "lon": 126.488231
    },
    "69": {
      "pages": [
        "왕가의 길"
      ],
      "dual": false,
      "booth": "고인돌 앞 안내소",
      "lat": 37.773134,
      "lon": 126.437425,
      "hours": "안내소 10:00–17:00"
    },
    "45": {
      "pages": [
        "선사 지질의 길"
      ],
      "dual": false,
      "booth": "포천아트밸리 매표소",
      "lat": 37.923447,
      "lon": 127.236501
    },
    "44": {
      "pages": [
        "선사 지질의 길"
      ],
      "dual": false,
      "booth": "비둘기낭폭포 입구 한탄강지질 탐방 안내소",
      "lat": 38.078869,
      "lon": 127.219146,
      "note": "Booth is at the entrance/parking, not down at the waterfall (38.079883, 127.217035)."
    },
    "46": {
      "pages": [
        "선사 지질의 길"
      ],
      "dual": false,
      "booth": "한탄강세계지질공원센터 내 안내데스크 앞",
      "lat": 38.073206,
      "lon": 127.224928,
      "hours": "Tue closed"
    },
    "47": {
      "pages": [
        "선사 지질의 길"
      ],
      "dual": false,
      "booth": "화적연 탐방안내소",
      "lat": 38.117174,
      "lon": 127.263511,
      "hours": "안내소 11:00–16:00, weekends and holidays",
      "note": "Kakao has no 탐방안내소 POI. Pin is 화적연캠핑장 주차장 on 뗏마루길 43-119 (trailhead), not the 자일리 village centroid on 호국로."
    },
    "41": {
      "pages": [
        "선사 지질의 길"
      ],
      "dual": false,
      "booth": "연천전곡리유적지 방문자센터",
      "lat": 38.015648,
      "lon": 127.061453
    },
    "42": {
      "pages": [
        "선사 지질의 길"
      ],
      "dual": false,
      "booth": "호로고루 홍보관",
      "lat": 37.985504,
      "lon": 126.861923
    },
    "17": {
      "pages": [
        "백제고도의 길",
        "산사의 길"
      ],
      "dual": true,
      "booth": "마곡사 5층 석탑 앞 (템플스테이 사무소 앞)",
      "lat": 36.559064,
      "lon": 127.012068,
      "note": "Press the same pad onto both 백제고도의 길 and 산사의 길 (2 stamps). Do Gongsanseong the same day."
    },
    "16": {
      "pages": [
        "백제고도의 길"
      ],
      "dual": false,
      "booth": "공산성 매표소",
      "lat": 36.464484,
      "lon": 127.123416
    },
    "19": {
      "pages": [
        "백제고도의 길"
      ],
      "dual": false,
      "booth": "부여왕릉원 매표소 앞 — not on the wall itself",
      "lat": 36.276583,
      "lon": 126.944912,
      "note": "Official Naseong stamp is at the Royal Tombs ticket booth (왕릉로 61), shared with the Plus 왕릉원 stop."
    },
    "20": {
      "pages": [
        "백제고도의 길"
      ],
      "dual": false,
      "booth": "부소산성 정문매표소, 구문매표소",
      "lat": 36.283662,
      "lon": 126.914492,
      "note": "Front-gate ticket area / tourist parking. Hilltop fortress is 36.288490, 126.912558."
    },
    "90": {
      "pages": [
        "홍보관 체험"
      ],
      "dual": false,
      "booth": "국가유산 방문 캠페인 홍보관 (T1 교통센터 B1, H구역 여권 테이블)",
      "lat": 37.447959,
      "lon": 126.452644,
      "hours": "10:00–19:00; closed last Wednesday of each month",
      "note": "Three mission stamps at one booth: D구역 미디어아트, C구역 크로마키, I구역 3D 드론. AREX T1 / Burger King. Counts as 3 toward the tourist 20."
    }
  },
  "SITE_TOUR": {
    "90": {
      "min": 50,
      "what": "Passport pickup plus the three missions (media art ~12 min, chroma, drone)"
    },
    "72": {
      "min": 50,
      "what": "Official tomb loop 40 min; pad is at the ticket 수표실"
    },
    "65": {
      "min": 60,
      "what": "Weekday timed guide ~50–60 min; Sunday walk-in 60–90"
    },
    "66": {
      "min": 75,
      "what": "Palace buildings without 후원 (VisitSeoul family course 90 min)",
      "skip": "후원 is a separate 90 min timed tour — skip this trip"
    },
    "71": {
      "min": 90,
      "what": "Grounds through to 동궐마루 사랑 (pad is inside, not Gwanghwamun)"
    },
    "63": {
      "min": 60,
      "what": "행궁 + visitor-center pad; winter 행궁 10:00–17:00",
      "skip": "Full wall circuit is extra hours"
    },
    "64": {
      "min": 50,
      "what": "수원화성박물관 only — that is the pad",
      "skip": "Full 5.7 km wall is 2.5–3 h; do not add it before Yungneung"
    },
    "67": {
      "min": 70,
      "what": "융릉 and 건릉 together; Nov last entry 16:30"
    },
    "70": {
      "min": 50,
      "what": "경내 from 남문/동문 ticket pads"
    },
    "69": {
      "min": 30,
      "what": "고인돌 and 안내소 (pad). Museum is extra 1–2 h"
    },
    "45": {
      "min": 75,
      "what": "Ticket, lake, short look; skip monorail if the day is slipping"
    },
    "44": {
      "min": 40,
      "what": "Pad at parking 안내소, then 30–40 min round trip to the falls"
    },
    "46": {
      "min": 45,
      "what": "Geopark museum next to Bidulginang; Tue closed"
    },
    "47": {
      "min": 30,
      "what": "Stamp first: 안내소 11:00–16:00 weekends only, then short trail"
    },
    "41": {
      "min": 50,
      "what": "Visitor center + outdoor site; winter 09:00–17:00, Mon closed"
    },
    "42": {
      "min": 45,
      "what": "홍보관 + east wall; winter 10:00–17:00"
    },
    "17": {
      "min": 70,
      "what": "경내 and the 5-storey pagoda pad (both passport pages)"
    },
    "16": {
      "min": 75,
      "what": "Inner fortress, not the 1.5–2 h full wall; winter last entry 16:30"
    },
    "19": {
      "min": 40,
      "what": "부여왕릉원 official 40 min; pad is the tomb ticket booth"
    },
    "20": {
      "min": 120,
      "what": "Official 2 h including 낙화암/고란사",
      "skip": "Does not fit after Magoksa + Gongsanseong + lunch in November"
    }
  },
  "DAY_PACE": {
    "airport-jangneung": {
      "leave": 480,
      "wait": 35,
      "waitWhy": "AREX 09:22; 홍보관 opens 10:00"
    },
    "seoul-palaces": {
      "leave": 540,
      "wait": 0,
      "waitWhy": ""
    },
    "namhansanseong": {
      "leave": 510,
      "wait": 0,
      "waitWhy": "bus 9 reaches 행궁 10:09"
    },
    "suwon-hwaseong": {
      "leave": 480,
      "wait": 0,
      "waitWhy": ""
    },
    "ganghwa": {
      "leave": 480,
      "wait": 0,
      "waitWhy": ""
    },
    "pocheon": {
      "leave": 390,
      "wait": 10,
      "waitWhy": "Bidulginang / geopark ~09:00"
    },
    "yeoncheon": {
      "leave": 450,
      "wait": 0,
      "waitWhy": ""
    },
    "gongju-buyeo": {
      "leave": 360,
      "wait": 0,
      "waitWhy": ""
    }
  },
  "PLUS_BOOTHS": [
    {
      "name": "Korea House",
      "lat": 37.560474,
      "lon": 126.994067,
      "booth": "카페사랑_한국의 집",
      "pages": "왕가의 길",
      "hours": "Mon–Sat 10:00–19:00; Sun closed",
      "note": "Passport 1 Plus. Inside 취선관 1F. Does not count toward 5-course / 76-stamp souvenirs."
    },
    {
      "name": "Ganghwa History Museum",
      "lat": 37.773905,
      "lon": 126.435577,
      "booth": "강화 역사박물관 1층 안내데스크",
      "pages": "왕가의 길",
      "hours": "Tue–Sun 09:00–18:00; Mon / 1 Jan / seollal / chuseok closed",
      "note": "Passport 1 Plus. Different pad from the required dolmen stamp (고인돌 앞 안내소)."
    },
    {
      "name": "Buyeo Royal Tombs",
      "lat": 36.276583,
      "lon": 126.944912,
      "booth": "부여왕릉원 매표소 앞",
      "pages": "백제고도의 길",
      "hours": "Mar–Oct 09:00–18:00; Nov–Feb 09:00–17:00",
      "note": "Passport 1 Plus. Same pad as required Outer City Wall (Buyeo Naseong). One press, two labels — Naseong still needs its own passport page."
    },
    {
      "name": "Jeongnimsa Temple Site",
      "lat": 36.279124,
      "lon": 126.915209,
      "booth": "정림사지 박물관 안내데스크 / 정림사지 문화해설사의집",
      "pages": "백제고도의 길",
      "hours": "Museum closed Monday; last entry 1 hour before close",
      "note": "Passport 1 Plus. Two pads listed: museum desk and 문화해설사의 집."
    }
  ],
  "NOV2026": [
    {
      "date": "6 Nov",
      "dow": "Fri",
      "plan": "Land ICN evening → Jongno. No stamps.",
      "why": "홍보관 closes 19:00. Go home.",
      "tone": "neutral"
    },
    {
      "date": "7 Nov",
      "dow": "Sat",
      "plan": "Airport T1 홍보관 + Gimpo Jangneung",
      "why": "Both open. Last Wednesday is 25 Nov, not today. Jangneung last entry 16:30. Return on village 52, not weekday-only 52A.",
      "tone": "success"
    },
    {
      "date": "8 Nov",
      "dow": "Sun",
      "plan": "Jeondeungsa + Ganghwa dolmen",
      "why": "Clocked: Goldline to 구래, bus 70 09:25–10:10 to 전등사. 21(송해) to 서홍의입구 then walk to the dolmen. Home on 3000, 17:12.",
      "tone": "success"
    },
    {
      "date": "9 Nov",
      "dow": "Mon",
      "plan": "Gongju Magoksa + Gongsanseong — 770 not 861",
      "why": "Closed palaces/Suwon/Namhansan/Jeongok. Clocked: 고속버스 06:38 (not KTX out), 770 08:10 to Magoksa, 770 11:18 back, KTX 공주 15:58. Book that return KTX.",
      "tone": "info"
    },
    {
      "date": "10 Nov",
      "dow": "Tue",
      "plan": "Suwon Hwaseong + Yungneung",
      "why": "Closed: Jongmyo, Gyeongbokgung, Hantangang Geopark Center. Suwon museum and Yungneung are open.",
      "tone": "info"
    },
    {
      "date": "11 Nov",
      "dow": "Wed",
      "plan": "Namhansanseong or Seoul palaces",
      "why": "행궁 10:00–17:00 winter. If palaces: Jongmyo is weekday timed entry — book a slot.",
      "tone": "neutral"
    },
    {
      "date": "12 Nov",
      "dow": "Thu",
      "plan": "Open: palaces / Namhansanseong / Yeoncheon / Gongju leftover",
      "why": "Jongmyo still timed if not done. No national holiday.",
      "tone": "neutral"
    },
    {
      "date": "13 Nov",
      "dow": "Fri",
      "plan": "Same open set as Thursday",
      "why": "Winter last entries ~16:00–16:30 at palaces and tombs.",
      "tone": "neutral"
    },
    {
      "date": "14 Nov",
      "dow": "Sat",
      "plan": "Pocheon from 운천, not Art Valley first",
      "why": "Hwajeokyeon 11:00–16:00. Clocked: 동서울 시외 07:06 to 운천, Bidulginang 08:45. Taxi 10/89 locals (every 160–180 min). 포천터미널 시외 17:11 home.",
      "tone": "success"
    },
    {
      "date": "15 Nov",
      "dow": "Sun",
      "plan": "Seoul palaces if still open, or buffer",
      "why": "Jongmyo is walk-in on Sunday (no weekday reservation). Palaces last entry 16:00–16:30.",
      "tone": "info"
    },
    {
      "date": "16 Nov",
      "dow": "Mon",
      "plan": "Avoid the Monday-closed set again",
      "why": "Same closures as 9 Nov. Yeoncheon visitor center also Monday closed.",
      "tone": "warning"
    },
    {
      "date": "17 Nov",
      "dow": "Tue",
      "plan": "Avoid palaces and Pocheon Geopark Center",
      "why": "Same Tuesday closures as 10 Nov.",
      "tone": "warning"
    },
    {
      "date": "18 Nov",
      "dow": "Wed",
      "plan": "T1 홍보관 bag pickup, then fly evening",
      "why": "홍보관 10:00–19:00; not the last-Wednesday closure (that is 25 Nov). Landside B1 before security. Apply online once you have 20 stamps; pickup within 14 days. No overseas shipping.",
      "tone": "success"
    }
  ],
  "LUNCH_MIN": 60
};
