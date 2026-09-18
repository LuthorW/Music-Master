"use strict";

/*
 * CATÁLOGO DA PLAYLIST
 * As faixas abaixo vieram da playlist do Spotify informada para o projeto.
 * Para usar áudio/capa locais, preencha audioLocal e capaLocal no mapeamento MUSICAS.
 * Com os campos vazios, o jogo procura automaticamente uma prévia e a capa no
 * catálogo público do iTunes. O restante do projeto funciona sem servidor.
 */
const PLAYLIST_SPOTIFY = [
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 1,
    "spotifyId": "1L5tZi0izXsi5Kk5OJf4W0",
    "titulo": "Rehab"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 2,
    "spotifyId": "4zQuwW24dweWcaX0fEJkP2",
    "titulo": "You Know I'm No Good"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 3,
    "spotifyId": "7or26qS3BfpTtWO3BFw5GE",
    "titulo": "Addicted"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 4,
    "spotifyId": "0sSdFMuYrn3N9moumV466B",
    "titulo": "He Can Only Hold Her"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 5,
    "spotifyId": "0RatRR1mlxEVR6WATH4jV3",
    "titulo": "Some Unholy War"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 6,
    "spotifyId": "37A5PvtftHtsISQUDFNGUk",
    "titulo": "Wake Up Alone"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 7,
    "spotifyId": "6yLX8QnxlnEqZfs3YKCfjF",
    "titulo": "Tears Dry On Their Own"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 8,
    "spotifyId": "570ZDO2Lmh6NQChOU5xPUL",
    "titulo": "Love Is A Losing Game"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 9,
    "spotifyId": "30FURVTCpbKyykjSEQzGkH",
    "titulo": "Back To Black"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 10,
    "spotifyId": "2i1S5Dq9SaFGcnw8mnb4ks",
    "titulo": "Just Friends"
  },
  {
    "album": "Back To Black",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 11,
    "spotifyId": "5RqIM2vv5nw2PGJBqPD8Rg",
    "titulo": "Me & Mr Jones"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 12,
    "spotifyId": "5it9RIRXDwiLpJKdce6Z7e",
    "titulo": "Valerie - BBC Radio 1 Live Lounge"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Tony Bennett",
      "Amy Winehouse"
    ],
    "index": 13,
    "spotifyId": "12TAfwmQSufwlerS9UJaQB",
    "titulo": "Body And Soul"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 14,
    "spotifyId": "1DYCdxNAVNUCAOlAi7aP5o",
    "titulo": "Love Is A Losing Game - Live At The Mercury Music Awards"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Antonio Pinto"
    ],
    "index": 15,
    "spotifyId": "1w3KJgj6x75PiQm8Ppe0sS",
    "titulo": "Amy Lives"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 16,
    "spotifyId": "1MdMYZN0VnpjTy6nBCM2Qf",
    "titulo": "We're Still Friends - Live At The Union Chapel"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Antonio Pinto"
    ],
    "index": 17,
    "spotifyId": "7taSJbOhxfc7Vfto48gFKj",
    "titulo": "In The Studio - Edit"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 18,
    "spotifyId": "7E4dtl5gWROiMKibvedh0i",
    "titulo": "Rehab - Live On Jools Holland"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 19,
    "spotifyId": "4vCyAAMCZZ9r4443negeQO",
    "titulo": "Back To Black"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 20,
    "spotifyId": "3GnlbPpTLBwz35Cg5sdxuX",
    "titulo": "Tears Dry On Their Own"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 21,
    "spotifyId": "6OaexwzJ7LXIykBzRqpOmD",
    "titulo": "Some Unholy War - Down Tempo"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Antonio Pinto"
    ],
    "index": 22,
    "spotifyId": "34Owb4rZbbKapQ4YFeuhVl",
    "titulo": "Holiday Texts - Edit"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 23,
    "spotifyId": "40GTKaedGtzka8dlV4NuqI",
    "titulo": "What Is It About Men - Live At North Sea Jazz Festival"
  },
  {
    "album": "AMY (Original Motion Picture Soundtrack)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 24,
    "spotifyId": "5LC7nItIEFp4nzdFdEGbf9",
    "titulo": "Stronger Than Me"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 25,
    "spotifyId": "4NDpn6yfD5aqafYWFEaJDz",
    "titulo": "Our Day Will Come"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 26,
    "spotifyId": "0IEGGuRHP8ylbCXausRF9p",
    "titulo": "Tears Dry - Original Version"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 27,
    "spotifyId": "0LbK1bodGLc9xmV1cS9jvL",
    "titulo": "Will You Still Love Me Tomorrow? - 2011"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse",
      "Nas"
    ],
    "index": 28,
    "spotifyId": "2r45rookK2awLkiOHOef1o",
    "titulo": "Like Smoke"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 29,
    "spotifyId": "77RrNbeBUXb1Dtewp0HQuR",
    "titulo": "Between The Cheats"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 30,
    "spotifyId": "7F5rIyOI88zk36AiBXC8xq",
    "titulo": "The Girl From Ipanema"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 31,
    "spotifyId": "1om5SLZiUA9DVEnjcZBBzA",
    "titulo": "Valerie - '68 Version"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 32,
    "spotifyId": "2G4rsUWjuBb6vPrUm01etb",
    "titulo": "Wake Up Alone - Original Recording"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 33,
    "spotifyId": "7BizTaPDXSWVi8vdGeFg0W",
    "titulo": "Best Friends, Right?"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 34,
    "spotifyId": "4fdPpmqn1eYLyWRcxZmx2D",
    "titulo": "A Song For You"
  },
  {
    "album": "Lioness: Hidden Treasures",
    "artistas": [
      "Amy Winehouse",
      "Tony Bennett"
    ],
    "index": 35,
    "spotifyId": "4AyULNTWuCtbpxzY2qVowJ",
    "titulo": "Body And Soul"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 36,
    "spotifyId": "2qPwYT63eEx3JNWdVE6bb0",
    "titulo": "Intro / Stronger Than Me"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 37,
    "spotifyId": "1FLzTxrNNgqrAEsQvHJ9Gx",
    "titulo": "Fuck Me Pumps"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 38,
    "spotifyId": "1jLNxsmGsEQAM4CUkHemfS",
    "titulo": "(There Is) No Greater Love"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 39,
    "spotifyId": "2zJv4HwUarNnI0My2n6YF8",
    "titulo": "In My Bed"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 40,
    "spotifyId": "4KNfNp4Et9nyLnouySvcFT",
    "titulo": "Take The Box"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 41,
    "spotifyId": "6QIdkhQ33eTSPBHu4NWl7l",
    "titulo": "What Is It About Men"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 42,
    "spotifyId": "5TImISmK9CQtBrt0rLbq0R",
    "titulo": "Help Yourself"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 43,
    "spotifyId": "15vtCacFbCWnRpSjvony3z",
    "titulo": "Amy Amy Amy / Outro"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 44,
    "spotifyId": "67c56hAEeU0cYTevlZQftv",
    "titulo": "Stronger Than Me - Later With Jools Holland, London / 2003"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 45,
    "spotifyId": "1HPLJmxBPEue4VnVlRpdXB",
    "titulo": "Mr Magic (Through The Smoke) - Live, Janice Long Session, Miami/2008"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 46,
    "spotifyId": "7DKCNMc9Sc3bzWGvJXvVO5",
    "titulo": "In My Bed - Live At Concorde, Brighton / 2008"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 47,
    "spotifyId": "7kqXftmU2lrjgvEXm84uEx",
    "titulo": "(There Is) No Greater Love - Live, Janice Long Session, Miami/2008"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse",
      "Matthew Cole"
    ],
    "index": 48,
    "spotifyId": "1yclhzJfclEDk1gEpey3qE",
    "titulo": "Fuck Me Pumps - MJ Cole Remix"
  },
  {
    "album": "Frank (Deluxe Edition)",
    "artistas": [
      "Amy Winehouse",
      "Mark Pritchard",
      "Dave Brinkworth"
    ],
    "index": 49,
    "spotifyId": "0VWAQN2xGRDcLaSAdC5nF1",
    "titulo": "Stronger Than Me - Harmonic 33 Remix"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 50,
    "spotifyId": "3KX4eOXIkNHtbXNyfVERSt",
    "titulo": "Hey Little Rich Girl - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 51,
    "spotifyId": "7cXmS8a4SW2Wcm2Pca2S83",
    "titulo": "He Can Only Hold Her / Doo Wop (That Thing) - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 52,
    "spotifyId": "7gkKpedYwOnimoWcSyq0CM",
    "titulo": "Back To Black - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 53,
    "spotifyId": "4YsWbWozRpduVoiPIqZNt7",
    "titulo": "Tears Dry On Their Own - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 54,
    "spotifyId": "6zphGshodNvFpQwBphwueX",
    "titulo": "Wake Up Alone - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 55,
    "spotifyId": "5Qnm8Jwf3KsTopNnBlSAhp",
    "titulo": "Cherry - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 56,
    "spotifyId": "60InztMDeV2ZBuHWHBwNnF",
    "titulo": "Just Friends - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Told You I Was Trouble: Live In London",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 57,
    "spotifyId": "1SXkCvTFO4CBuA6j2VJ4Ud",
    "titulo": "Intro / Addicted - Live From Shepherd’s Bush Empire, London / 2007"
  },
  {
    "album": "I Saw Mommy Kissing Santa Claus (Live At Union Chapel / BBC Radio 2)",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 58,
    "spotifyId": "4lcOoKiLjBddCcg9FkeIJL",
    "titulo": "I Saw Mommy Kissing Santa Claus - Live At Union Chapel / BBC Radio 2"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 59,
    "spotifyId": "0ofHAoxe9vBkTCp2UQIavz",
    "titulo": "Dreams - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 60,
    "spotifyId": "4xh7W7tlNMIczFhupCPniY",
    "titulo": "Go Your Own Way - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 61,
    "spotifyId": "5e9TFTbltYBg2xThimr0rU",
    "titulo": "The Chain - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 62,
    "spotifyId": "2ssyECwAX5JxtcAUTFw7wI",
    "titulo": "Gold Dust Woman - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 63,
    "spotifyId": "4nZi6XNe36Ut4Nij3IQ1yC",
    "titulo": "Silver Springs - 2004 Remaster"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 64,
    "spotifyId": "5HY7oAMG0FSMewubwIf3iS",
    "titulo": "Dreams - Live 1977"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 65,
    "spotifyId": "5m5XW67LO8x72K0GusruVA",
    "titulo": "The Chain - Live 1977"
  },
  {
    "album": "Rumours (Super Deluxe)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 66,
    "spotifyId": "1nWyUagJmVzvBGTMDeY73L",
    "titulo": "Rhiannon - Live 1977"
  },
  {
    "album": "Tango In the Night (Deluxe Edition)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 67,
    "spotifyId": "254bXAqt3zP6P50BdQvEsq",
    "titulo": "Everywhere - 2017 Remaster"
  },
  {
    "album": "Tango In the Night (Deluxe Edition)",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 68,
    "spotifyId": "4CoSCPlKNrWli7E5kFtbcl",
    "titulo": "Little Lies - 2017 Remaster"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 69,
    "spotifyId": "1QEzs30PUAJJPbHL1e4NYH",
    "titulo": "Silver Springs - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 70,
    "spotifyId": "6ogxNURdCpRGmtOYbECyqg",
    "titulo": "Rhiannon - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 71,
    "spotifyId": "2hwFQrMDzCPUr8vCanCw0E",
    "titulo": "The Chain - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 72,
    "spotifyId": "6PgcfHSocgnc4pjDgTuJcm",
    "titulo": "Dreams - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "The Dance",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 73,
    "spotifyId": "6xTtThCvuvIYHl1ddntJGj",
    "titulo": "Everywhere - Live at Warner Brothers Studios in Burbank, CA 5/23/97"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 74,
    "spotifyId": "1EyAx19s8jM6gbCISGGqQW",
    "titulo": "Silver Springs - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 75,
    "spotifyId": "5pJoX8CeMlTYA8z5nXOtKG",
    "titulo": "Go Your Own Way - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 76,
    "spotifyId": "6wJF4lU4YBCz24Y6Se898w",
    "titulo": "Dreams - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 77,
    "spotifyId": "4f9aRCqzooZAh6zePGsElG",
    "titulo": "Rhiannon - Live on PBS in Boston 2004"
  },
  {
    "album": "Live in Boston",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 78,
    "spotifyId": "7fbnfPQni0EeRSdC4x5uq4",
    "titulo": "Landslide - Live on PBS in Boston 2004"
  },
  {
    "album": "we fell in love in october / October Passed Me By",
    "artistas": [
      "girl in red"
    ],
    "index": 79,
    "spotifyId": "6IPwKM3fUUzlElbvKw2sKl",
    "titulo": "we fell in love in october"
  },
  {
    "album": "we fell in love in october / October Passed Me By",
    "artistas": [
      "girl in red"
    ],
    "index": 80,
    "spotifyId": "6JrJFxjeZPkhXE41DGnS65",
    "titulo": "October Passed Me By"
  },
  {
    "album": "we fell in love in october / October Passed Me By",
    "artistas": [
      "girl in red"
    ],
    "index": 81,
    "spotifyId": "5vFuoZLvUmAzzIiLSEhk0K",
    "titulo": "forget her"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 82,
    "spotifyId": "7tLTxOJY6cjQz4aJYMs8Nu",
    "titulo": "Serotonin"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 83,
    "spotifyId": "6GFrELGVKBXRcrTNkwjSfF",
    "titulo": "Body And Mind"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 84,
    "spotifyId": "32XaqPVTVkkuOiOPQZ3SpA",
    "titulo": "midnight love"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 85,
    "spotifyId": "65wEZxhPlAERKLcSbTD7qc",
    "titulo": "You Stupid Bitch"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 86,
    "spotifyId": "4EoE743bWWiZ4ttkdPCNbA",
    "titulo": "Rue"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 87,
    "spotifyId": "1IvX2Dtx4OGoRy6E7fxcA6",
    "titulo": "Apartment 402"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 88,
    "spotifyId": "6rYgEHuyhO064Lgj48qlIe",
    "titulo": "I'll Call You Mine"
  },
  {
    "album": "if i could make it go quiet",
    "artistas": [
      "girl in red"
    ],
    "index": 89,
    "spotifyId": "0o2KnhHD5nFFgbfL6cQtY7",
    "titulo": "it would feel like this"
  },
  {
    "album": "i wanna be your girlfriend",
    "artistas": [
      "girl in red"
    ],
    "index": 90,
    "spotifyId": "5PjdC2gMATetx5xdnwGUu7",
    "titulo": "i wanna be your girlfriend"
  },
  {
    "album": "girls",
    "artistas": [
      "girl in red"
    ],
    "index": 91,
    "spotifyId": "04OSnqlwlBJMvidYccraVz",
    "titulo": "girls"
  },
  {
    "album": "bad idea!",
    "artistas": [
      "girl in red"
    ],
    "index": 92,
    "spotifyId": "57j65yC2HggQfmYNc6rdOK",
    "titulo": "bad idea!"
  },
  {
    "album": "i'll die anyway.",
    "artistas": [
      "girl in red"
    ],
    "index": 93,
    "spotifyId": "14tud1FLjpHMYHpD2c7NbO",
    "titulo": "i'll die anyway."
  },
  {
    "album": "summer depression",
    "artistas": [
      "girl in red"
    ],
    "index": 94,
    "spotifyId": "3SEZEyvEALlomED5xFeqOs",
    "titulo": "summer depression"
  },
  {
    "album": "watch you sleep.",
    "artistas": [
      "girl in red"
    ],
    "index": 95,
    "spotifyId": "6tMwheKgpMHBcHtr8aYMn8",
    "titulo": "watch you sleep."
  },
  {
    "album": "4am",
    "artistas": [
      "girl in red"
    ],
    "index": 96,
    "spotifyId": "75enpZYDT6k0PNKu6SJ4W5",
    "titulo": "4am"
  },
  {
    "album": "i need to be alone.",
    "artistas": [
      "girl in red"
    ],
    "index": 97,
    "spotifyId": "2wHmH8OGgU6qi8NrLl0VRY",
    "titulo": "i need to be alone."
  },
  {
    "album": "two queens in a king sized bed",
    "artistas": [
      "girl in red"
    ],
    "index": 98,
    "spotifyId": "2dP8R44P2Lo3hdyevbYFfy",
    "titulo": "two queens in a king sized bed"
  },
  {
    "album": "dead girl in the pool.",
    "artistas": [
      "girl in red"
    ],
    "index": 99,
    "spotifyId": "0g9BOSeEnmv7L2qoFQKyBB",
    "titulo": "dead girl in the pool."
  },
  {
    "album": "1950",
    "artistas": [
      "King Princess"
    ],
    "index": 100,
    "spotifyId": "0CZ8lquoTX2Dkg7Ak2inwA",
    "titulo": "1950"
  },
  {
    "album": "Talia",
    "artistas": [
      "King Princess"
    ],
    "index": 101,
    "spotifyId": "53jbdPQBaH6WaQvW0zmGBs",
    "titulo": "Talia"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 102,
    "spotifyId": "1RujvyGPMWFGKAASzXmCpU",
    "titulo": "Cheap Queen"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 103,
    "spotifyId": "4aGvs7y4hQIbGss7zmEXKf",
    "titulo": "Ain't Together"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 104,
    "spotifyId": "7zBPpr0lmDqho20xz1i4RI",
    "titulo": "Watching My Phone"
  },
  {
    "album": "Cheap Queen",
    "artistas": [
      "King Princess"
    ],
    "index": 105,
    "spotifyId": "3iiL6merNpFNX1bny9sfvM",
    "titulo": "If You Think It's Love"
  },
  {
    "album": "Make My Bed",
    "artistas": [
      "King Princess"
    ],
    "index": 106,
    "spotifyId": "4R87lF4uKzgCNL1bEJeXqa",
    "titulo": "Make My Bed"
  },
  {
    "album": "Make My Bed",
    "artistas": [
      "King Princess"
    ],
    "index": 107,
    "spotifyId": "7FVGIPgLMDChTffvG2LuHV",
    "titulo": "Holy"
  },
  {
    "album": "Make My Bed",
    "artistas": [
      "King Princess"
    ],
    "index": 108,
    "spotifyId": "7vfaRUaFBDwENwa3tzJY64",
    "titulo": "Upper West Side"
  },
  {
    "album": "Pussy Is God",
    "artistas": [
      "King Princess"
    ],
    "index": 109,
    "spotifyId": "6VCeywT4JeawuZOUkQ1okx",
    "titulo": "Pussy Is God"
  },
  {
    "album": "FOUR (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 110,
    "spotifyId": "3JjnGLK8IxkNLvo8Lb3KOM",
    "titulo": "18"
  },
  {
    "album": "FOUR (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 111,
    "spotifyId": "5O2P9iiztwhomNh8xkR9lJ",
    "titulo": "Night Changes"
  },
  {
    "album": "FOUR (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 112,
    "spotifyId": "4JaLkM90MJutDAl5jD9BZX",
    "titulo": "No Control"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 113,
    "spotifyId": "4nVBt6MZDDP6tRVdQTgxJg",
    "titulo": "Story of My Life"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 114,
    "spotifyId": "6twW4ma6w0mOeejejPK0nY",
    "titulo": "Diana"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 115,
    "spotifyId": "2afCBiru10AFckfOa49wIa",
    "titulo": "You & I"
  },
  {
    "album": "Midnight Memories (Deluxe)",
    "artistas": [
      "One Direction"
    ],
    "index": 116,
    "spotifyId": "1dQQ2QlnvXUehsRUrukKmf",
    "titulo": "Right Now"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 117,
    "spotifyId": "2K87XMYnUMqLcX3zvtAF4G",
    "titulo": "Drag Me Down"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 118,
    "spotifyId": "3NLnwwAQbbFKcEcV8hDItk",
    "titulo": "Perfect"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 119,
    "spotifyId": "5AezhHjX3R1bmxcAEgrFpS",
    "titulo": "End of the Day"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 120,
    "spotifyId": "5CRVwXGikmqzoRO6q7FeAg",
    "titulo": "If I Could Fly"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 121,
    "spotifyId": "5dONhl6aXFuN86UBdayF6W",
    "titulo": "Olivia"
  },
  {
    "album": "Made In The A.M. (Deluxe Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 122,
    "spotifyId": "5omYVLodGmaxnhua99xIE8",
    "titulo": "A.M."
  },
  {
    "album": "Take Me Home (Expanded Edition)",
    "artistas": [
      "One Direction"
    ],
    "index": 123,
    "spotifyId": "0TAmnCzOtqRfvA38DDLTjj",
    "titulo": "Little Things"
  },
  {
    "album": "Up All Night",
    "artistas": [
      "One Direction"
    ],
    "index": 124,
    "spotifyId": "5G2c6FsfTzgYUzageCmfXY",
    "titulo": "One Thing"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 125,
    "spotifyId": "1Hv1VTm8zeOeybub15mA2R",
    "titulo": "Smooth Operator - Single Version"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 126,
    "spotifyId": "5qehd5xIsEaifMFy3jcoYr",
    "titulo": "Jezebel"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 127,
    "spotifyId": "7erXAfnatmoUow8DnbseOY",
    "titulo": "Your Love Is King"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 128,
    "spotifyId": "1SvET7grrtsHT0CkyJjJcZ",
    "titulo": "Is It a Crime"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 129,
    "spotifyId": "4tReFKumS5bcFahdXDiM1b",
    "titulo": "Paradise"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 130,
    "spotifyId": "064wRZsHDLuoCJYw65gh7N",
    "titulo": "Like a Tattoo"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 131,
    "spotifyId": "65krtHkaYLPr0mEbjL61UP",
    "titulo": "Kiss of Life"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 132,
    "spotifyId": "38QnxZJMktnt96bxalqgEl",
    "titulo": "Cherish the Day"
  },
  {
    "album": "The Best of Sade",
    "artistas": [
      "Sade"
    ],
    "index": 133,
    "spotifyId": "57R1nBluakXaayH9EzgwZa",
    "titulo": "Pearls"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 134,
    "spotifyId": "1oaaSrDJimABpOdCEbw2DJ",
    "titulo": "No Ordinary Love"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 135,
    "spotifyId": "4PEGwWH4tL6H7dGl4uVSPg",
    "titulo": "Like a Tattoo"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 136,
    "spotifyId": "4S0NYVAQdIb81uLoZoQmgq",
    "titulo": "Kiss of Life"
  },
  {
    "album": "Love Deluxe",
    "artistas": [
      "Sade"
    ],
    "index": 137,
    "spotifyId": "22QiTJqDn1BIRSh4mkNJ5w",
    "titulo": "Cherish the Day"
  },
  {
    "album": "Promise",
    "artistas": [
      "Sade"
    ],
    "index": 138,
    "spotifyId": "1XR1X1VTyTOVdPgH18RdME",
    "titulo": "Is It a Crime"
  },
  {
    "album": "Diamond Life",
    "artistas": [
      "Sade"
    ],
    "index": 139,
    "spotifyId": "7pLuEMFougkSHXrPBtNxTR",
    "titulo": "Smooth Operator"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 140,
    "spotifyId": "5nHNgVNXzsZLLBz29tfjkB",
    "titulo": "Smooth Operator - Live"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 141,
    "spotifyId": "16rxF3KcGLPtySHTCZCCVZ",
    "titulo": "Kiss of Life - Live"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 142,
    "spotifyId": "4Y8qyqXEspJyiaFhTiiPoy",
    "titulo": "No Ordinary Love - Live"
  },
  {
    "album": "Lovers Live",
    "artistas": [
      "Sade"
    ],
    "index": 143,
    "spotifyId": "1WFao0rkH7gKrxvTowXxnq",
    "titulo": "Is It a Crime - Live"
  },
  {
    "album": "The Score (Expanded Edition)",
    "artistas": [
      "Fugees",
      "Ms. Lauryn Hill"
    ],
    "index": 144,
    "spotifyId": "0Q0IVlqMV64kNLlwjPj0Hl",
    "titulo": "Killing Me Softly With His Song"
  },
  {
    "album": "The Miseducation of Lauryn Hill",
    "artistas": [
      "Ms. Lauryn Hill"
    ],
    "index": 145,
    "spotifyId": "2GFExyKXf9383tSRSrEHEt",
    "titulo": "Can't Take My Eyes Off of You - (I Love You Baby)"
  },
  {
    "album": "Expectations",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 146,
    "spotifyId": "1EXotCuzdXR34W1MoP6Um7",
    "titulo": "Expectations"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 147,
    "spotifyId": "5u0OKowUsABAiaEBEfO3hD",
    "titulo": "Colors"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui",
      "VIC MENSA"
    ],
    "index": 148,
    "spotifyId": "62Zgn9APgcvmeDPgl9ItcV",
    "titulo": "Scattered (feat. Vic Mensa)"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 149,
    "spotifyId": "4clA3kZ6nDN7f0nOV9SGtA",
    "titulo": "Sorry"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 150,
    "spotifyId": "69JDuGOWSe7rPHZukh8XeR",
    "titulo": "Don't Wanna Say"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui",
      "6LACK"
    ],
    "index": 151,
    "spotifyId": "0ad3AcpjwPj5yYoyA2TYnA",
    "titulo": "On Guard (feat. 6lack)"
  },
  {
    "album": "PRELUDE",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 152,
    "spotifyId": "7ziPRO2vBbYDzpqpkual3s",
    "titulo": "Falling"
  },
  {
    "album": "Invisible Chains",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 153,
    "spotifyId": "1ksODCBCw4UEuWC0yRHpPZ",
    "titulo": "Invisible Chains"
  },
  {
    "album": "Always Love",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 154,
    "spotifyId": "02TtDZcUvEJGFJSJ6fTMfn",
    "titulo": "Always Love"
  },
  {
    "album": "50ft.",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 155,
    "spotifyId": "1wiphSU5URcMkpMoGK5mFO",
    "titulo": "50ft."
  },
  {
    "album": "More Than That",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 156,
    "spotifyId": "180WImKPbvdUrboKUov5f4",
    "titulo": "More Than That"
  },
  {
    "album": "ACT ONE (The Complete Collection)",
    "artistas": [
      "Marian Hill",
      "Lauren Jauregui"
    ],
    "index": 157,
    "spotifyId": "3NpsflsHTAoand4Jl3ruP7",
    "titulo": "Back To Me"
  },
  {
    "album": "I Have Questions",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 158,
    "spotifyId": "3NgCzSW98SsqBdpYcnm4kv",
    "titulo": "I Have Questions"
  },
  {
    "album": "OMG (feat. Quavo)",
    "artistas": [
      "Camila Cabello",
      "Quavo"
    ],
    "index": 159,
    "spotifyId": "4xBjsLUSjcx2h7PcRikpQp",
    "titulo": "OMG (feat. Quavo)"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 160,
    "spotifyId": "4eWQlBRaTjPPUlzacqEeoQ",
    "titulo": "Never Be the Same"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 161,
    "spotifyId": "4XLu3tTSZiPFVC9mmuR6Zp",
    "titulo": "All These Years"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 162,
    "spotifyId": "5HwnezK198pJCEj1l2Adjy",
    "titulo": "She Loves Control"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 163,
    "spotifyId": "7sTtHHrD0zDpmzQzH3zegz",
    "titulo": "Consequences"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 164,
    "spotifyId": "7IL3UOlcJ6nmcCMwpnlfcA",
    "titulo": "Something's Gotta Give"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 165,
    "spotifyId": "1GO9vCm5Cra5uWGSWQ5mGK",
    "titulo": "In the Dark"
  },
  {
    "album": "Camila",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 166,
    "spotifyId": "2gxqozTaq2NYylvS8jd57G",
    "titulo": "Into It"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 167,
    "spotifyId": "2ogKhhoMClkFXek7ZgxAhN",
    "titulo": "Shameless"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 168,
    "spotifyId": "4jFD7byoPdGkEdjHLMduR9",
    "titulo": "Living Proof"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 169,
    "spotifyId": "0sHc1EEeOnmgjP6QmsR7px",
    "titulo": "Should've Said It"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello",
      "DaBaby"
    ],
    "index": 170,
    "spotifyId": "3yOlyBJuViE2YSGn3nVE1K",
    "titulo": "My Oh My (feat. DaBaby)"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 171,
    "spotifyId": "0Q2kFlgnqusKAqCDpCKAIY",
    "titulo": "Bad Kind of Butterflies"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 172,
    "spotifyId": "7DoNtK2gVFRwJh0hkHe5wQ",
    "titulo": "Easy"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 173,
    "spotifyId": "39jcp8zJH7nHWbB7Hr3sFJ",
    "titulo": "Feel It Twice"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 174,
    "spotifyId": "1Ff71LUQO0KBk5Slu3K6Vu",
    "titulo": "Cry for Me"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 175,
    "spotifyId": "7cHje4KLujM18aBSLvaySE",
    "titulo": "This Love"
  },
  {
    "album": "Romance",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 176,
    "spotifyId": "3r73OmpBtQAwMgawxOmlg0",
    "titulo": "Used to This"
  },
  {
    "album": "Familia",
    "artistas": [
      "Camila Cabello"
    ],
    "index": 177,
    "spotifyId": "5FLzLuPyBEppywIJprqwDz",
    "titulo": "No Doubt"
  },
  {
    "album": "I'm In Love With a Monster",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 178,
    "spotifyId": "0hO71r8vbnrXSaXVrR9ptF",
    "titulo": "I'm In Love With a Monster"
  },
  {
    "album": "Miss Movin' On",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 179,
    "spotifyId": "0gL0Xf8CN95HmgfEYYLRZV",
    "titulo": "Miss Movin' On"
  },
  {
    "album": "7/27 (Deluxe)",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 180,
    "spotifyId": "22kXvw7mAvMvyZxPnhYzaa",
    "titulo": "No Way"
  },
  {
    "album": "7/27 (Deluxe)",
    "artistas": [
      "Fifth Harmony"
    ],
    "index": 181,
    "spotifyId": "660JUD1xQLB4XR1dMxUK4x",
    "titulo": "Dope"
  },
  {
    "album": "Dopamine",
    "artistas": [
      "BØRNS"
    ],
    "index": 182,
    "spotifyId": "2GiJYvgVaD2HtM8GqD9EgQ",
    "titulo": "Electric Love"
  },
  {
    "album": "Dopamine",
    "artistas": [
      "BØRNS"
    ],
    "index": 183,
    "spotifyId": "1Dr5JexwA15wmKe7Y7maA9",
    "titulo": "Past Lives"
  },
  {
    "album": "Not Your Muse (Deluxe)",
    "artistas": [
      "Celeste"
    ],
    "index": 184,
    "spotifyId": "7sq2z9oX2S0CvgTqCZ0ko4",
    "titulo": "Strange"
  },
  {
    "album": "The Middle",
    "artistas": [
      "Zedd",
      "Maren Morris",
      "Grey"
    ],
    "index": 185,
    "spotifyId": "09IStsImFySgyp0pIQdqAc",
    "titulo": "The Middle"
  },
  {
    "album": "Happy Together",
    "artistas": [
      "The Turtles"
    ],
    "index": 186,
    "spotifyId": "1JO1xLtVc8mWhIoE3YaCL0",
    "titulo": "Happy Together"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 187,
    "spotifyId": "1IF5UcqRO42D12vYwceOY6",
    "titulo": "From the Dining Table"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 188,
    "spotifyId": "33bURv895AN4FkBvgFo2dx",
    "titulo": "Woman"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 189,
    "spotifyId": "5LABCxgmP7DATATIJXOh6n",
    "titulo": "Ever Since New York"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 190,
    "spotifyId": "33SNO8AaciGbNaQFkxvPrW",
    "titulo": "Kiwi"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 191,
    "spotifyId": "5Lbsc65org0b85kNsPkluY",
    "titulo": "Only Angel"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 192,
    "spotifyId": "5kRPPEWFJIMox5qIkQkiz5",
    "titulo": "Sweet Creature"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 193,
    "spotifyId": "4B1rpPmQXwj78wk6aIGwwU",
    "titulo": "Two Ghosts"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 194,
    "spotifyId": "3Dwq1oiOFys6Sxr5SslmXw",
    "titulo": "Carolina"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 195,
    "spotifyId": "5Ohxk2dO5COHF1krpoPigN",
    "titulo": "Sign of the Times"
  },
  {
    "album": "Harry Styles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 196,
    "spotifyId": "4u9Y4Z9i9VaAbBK7rW1Rha",
    "titulo": "Meet Me in the Hallway"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 197,
    "spotifyId": "6VzcQuzTNTMFnJ6rBSaLH9",
    "titulo": "Fine Line"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 198,
    "spotifyId": "03mMSLEJCPoGJwQhHpN5y0",
    "titulo": "Treat People With Kindness"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 199,
    "spotifyId": "5IhzJOXNE7ki0IIJbZbnGq",
    "titulo": "Canyon Moon"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 200,
    "spotifyId": "6iYMfxznTBlcVOgRHab2W0",
    "titulo": "Sunflower, Vol. 6"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 201,
    "spotifyId": "6SQLk9HSNketfgs2AyIiMs",
    "titulo": "She"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 202,
    "spotifyId": "5JiH89mHrv9oWHlD0T326z",
    "titulo": "To Be So Lonely"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 203,
    "spotifyId": "1ZMiCix7XSAbfAJlEZWMCp",
    "titulo": "Falling"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 204,
    "spotifyId": "1ZMiCix7XSAbfAJlEZWMCp",
    "titulo": "Falling"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 205,
    "spotifyId": "2IOFZdYYkFxEHVz1w34PoL",
    "titulo": "Cherry"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 206,
    "spotifyId": "4jAIqgrPjKLTY9Gbez25Qb",
    "titulo": "Lights Up"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 207,
    "spotifyId": "3jjujdWJ72nww5eGnfs2E7",
    "titulo": "Adore You"
  },
  {
    "album": "Fine Line",
    "artistas": [
      "Harry Styles"
    ],
    "index": 208,
    "spotifyId": "45S5WTQEGOB1VHr1Q4FuPl",
    "titulo": "Golden"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 209,
    "spotifyId": "5LYMamLv12UPbemOaTPyeV",
    "titulo": "Music For a Sushi Restaurant"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 210,
    "spotifyId": "1qEmFfgcLObUfQm0j1W2CK",
    "titulo": "Late Night Talking"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 211,
    "spotifyId": "4j6kId9QIqhoXvqHKgSKa0",
    "titulo": "Grapejuice"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 212,
    "spotifyId": "51Zw1cKDgkad0CXv23HCMU",
    "titulo": "Daylight"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 213,
    "spotifyId": "3i058E8uxTsYqJ5NWZzqSj",
    "titulo": "Little Freak"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 214,
    "spotifyId": "6uvh0In7u1Xn4HgxOfAn8O",
    "titulo": "Matilda"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 215,
    "spotifyId": "2NcQic8JxdjAlAHuNbOIRE",
    "titulo": "Keep Driving"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 216,
    "spotifyId": "0rzaRSujxA0bKyjJl6vHYq",
    "titulo": "Satellite"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 217,
    "spotifyId": "6qj02zSeEJGWZ4c0dn5QzJ",
    "titulo": "Boyfriends"
  },
  {
    "album": "Harry's House",
    "artistas": [
      "Harry Styles"
    ],
    "index": 218,
    "spotifyId": "1mw0RgNXIpYRyyCdBQbLgA",
    "titulo": "Love Of My Life"
  },
  {
    "album": "Spotify Singles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 219,
    "spotifyId": "1GDF5AusV7p0wwi4OVNz3i",
    "titulo": "Two Ghosts - Recorded at Metropolis Studios, London"
  },
  {
    "album": "Spotify Singles",
    "artistas": [
      "Harry Styles"
    ],
    "index": 220,
    "spotifyId": "4YutJsNwBBInE8vemufpQ8",
    "titulo": "Girl Crush - Recorded at Metropolis Studios, London"
  },
  {
    "album": "FUNNY little FEARS (DREAMS)",
    "artistas": [
      "Damiano David"
    ],
    "index": 221,
    "spotifyId": "4rUqU8SKMG22liqDKsiIp9",
    "titulo": "Nothing Breaks Like a Heart - Spotify Singles"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 222,
    "spotifyId": "2t4RCWbICUqhPKVQeA7VPq",
    "titulo": "The First Time"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 223,
    "spotifyId": "7B9zspndqbrSXXUwVNeTCe",
    "titulo": "Born With a Broken Heart"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 224,
    "spotifyId": "5Rep08Yni2yW5UO0MBfF0b",
    "titulo": "Next Summer"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 225,
    "spotifyId": "5hYP7TDRmkJPrgYdIy500S",
    "titulo": "Zombie Lady"
  },
  {
    "album": "Silverlines - prod. Labrinth",
    "artistas": [
      "Damiano David",
      "Labrinth"
    ],
    "index": 226,
    "spotifyId": "1BK1d7b9bhlbKpQPbYGsol",
    "titulo": "Silverlines - prod. Labrinth"
  },
  {
    "album": "Next Summer",
    "artistas": [
      "Damiano David"
    ],
    "index": 227,
    "spotifyId": "6xZCDUaY4XzlhCSHKSW7rf",
    "titulo": "Next Summer"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 228,
    "spotifyId": "4pt5fDVTg5GhEvEtlz9dKk",
    "titulo": "I WANNA BE YOUR SLAVE"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 229,
    "spotifyId": "776AftMmFFAWUIEAb3lHhw",
    "titulo": "ZITTI E BUONI"
  },
  {
    "album": "Chosen",
    "artistas": [
      "Måneskin"
    ],
    "index": 230,
    "spotifyId": "3Wrjm47oTz2sjIgck11l5e",
    "titulo": "Beggin'"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 231,
    "spotifyId": "7HMz8o0m7ASQ3ImFPfhWTY",
    "titulo": "CORALINE"
  },
  {
    "album": "How Did I Get Here?",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 232,
    "spotifyId": "5Njbm0SdToCWO5bgLY8Yqw",
    "titulo": "Lemonade"
  },
  {
    "album": "Faith In The Future (Deluxe)",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 233,
    "spotifyId": "0XdZ6YWnTtkQcMlDXE2qFN",
    "titulo": "Bigger Than Me"
  },
  {
    "album": "Faith In The Future (Deluxe)",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 234,
    "spotifyId": "15JkWkQqlUffU29B1oKUKH",
    "titulo": "Chicago"
  },
  {
    "album": "Faith In The Future (Deluxe)",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 235,
    "spotifyId": "4QU579S6uCG9vWaHUeGnLp",
    "titulo": "Out Of My System"
  },
  {
    "album": "Miss You",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 236,
    "spotifyId": "3zxrecYFao03IrrcyFiaMU",
    "titulo": "Miss You"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 237,
    "spotifyId": "4emicu3yCflgo7z6cAuw5j",
    "titulo": "Kill My Mind"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 238,
    "spotifyId": "1eqwjXdMTed8Pz3PLNcHe9",
    "titulo": "Two of Us"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 239,
    "spotifyId": "2Ov6faSCGlnn4tbbZQYAJQ",
    "titulo": "Walls"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 240,
    "spotifyId": "5KcT9rJDqQJUSFF3O9wPJ5",
    "titulo": "Always You"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 241,
    "spotifyId": "74YzCrLzu7fw0AasX3CEwv",
    "titulo": "Defenceless"
  },
  {
    "album": "Walls",
    "artistas": [
      "Louis Tomlinson"
    ],
    "index": 242,
    "spotifyId": "7A7RygcHdNH0iJHgwteajF",
    "titulo": "Only the Brave"
  },
  {
    "album": "reputation Stadium Tour Surprise Song Playlist",
    "artistas": [
      "ZAYN",
      "Taylor Swift"
    ],
    "index": 243,
    "spotifyId": "55n9yjI6qqXh5F2mYvUc2y",
    "titulo": "I Don’t Wanna Live Forever (Fifty Shades Darker)"
  },
  {
    "album": "Mind Of Mine (Deluxe Edition)",
    "artistas": [
      "ZAYN"
    ],
    "index": 244,
    "spotifyId": "0PDUDa38GO8lMxLCRc4lL1",
    "titulo": "PILLOWTALK"
  },
  {
    "album": "Mind Of Mine (Deluxe Edition)",
    "artistas": [
      "ZAYN"
    ],
    "index": 245,
    "spotifyId": "6lvsJDZ7336YmpBzcNGhbe",
    "titulo": "fOoL fOr YoU"
  },
  {
    "album": "Be My Baby: The Very Best of The Ronettes",
    "artistas": [
      "The Ronettes"
    ],
    "index": 246,
    "spotifyId": "2G2YzndIA6jeWFPBXhUjh5",
    "titulo": "Be My Baby"
  },
  {
    "album": "Presenting the Fabulous Ronettes Featuring Veronica",
    "artistas": [
      "The Ronettes"
    ],
    "index": 247,
    "spotifyId": "1WN4uNclrDuczTO3bCr8s1",
    "titulo": "Be My Baby"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 248,
    "spotifyId": "5J2CHimS7dWYMImCHkEFaJ",
    "titulo": "A Hard Day's Night - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 249,
    "spotifyId": "1hgvykolO4kBIEozATmpyj",
    "titulo": "If I Fell - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 250,
    "spotifyId": "65vdMBskhx3akkG9vQlSH1",
    "titulo": "And I Love Her - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 251,
    "spotifyId": "3SdingSsFcZDZAyvcJbgAw",
    "titulo": "Can't Buy Me Love - Remastered 2009"
  },
  {
    "album": "A Hard Day's Night (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 252,
    "spotifyId": "3lSi6qfnp2YZazTzcOLBZk",
    "titulo": "I'll Be Back - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 253,
    "spotifyId": "2EqlS6tkEnglzr7tkKAAYD",
    "titulo": "Come Together - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 254,
    "spotifyId": "0pNeVovbiZHkulpGeOx1Gj",
    "titulo": "Something - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 255,
    "spotifyId": "2mxByJWOajjiVsLWjNXvDJ",
    "titulo": "Oh! Darling - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 256,
    "spotifyId": "3Z25k4ZF6QENy2d9YatsM5",
    "titulo": "I Want You (She's So Heavy) - Remastered 2009"
  },
  {
    "album": "Abbey Road (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 257,
    "spotifyId": "2jtUGFsqanQ82zqDlhiKIp",
    "titulo": "She Came In Through The Bathroom Window - Remastered 2009"
  },
  {
    "album": "Help! (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 258,
    "spotifyId": "7DD7eSuYSC5xk2ArU62esN",
    "titulo": "Help! - Remastered 2009"
  },
  {
    "album": "Help! (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 259,
    "spotifyId": "3BQHpFgAp4l80e1XslIjNI",
    "titulo": "Yesterday - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 260,
    "spotifyId": "6EHuOufBeL6vk3TvVJB5qo",
    "titulo": "Please Please Me - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 261,
    "spotifyId": "3VbGCXWRiouAq8VyMYN2MI",
    "titulo": "Love Me Do - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 262,
    "spotifyId": "7Msq9qojB7yORuJvz49iUy",
    "titulo": "P.S. I Love You - Remastered 2009"
  },
  {
    "album": "Please Please Me (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 263,
    "spotifyId": "5ZBeML7Lf3FMEVviTyvi8l",
    "titulo": "Twist And Shout - Remastered 2009"
  },
  {
    "album": "Magical Mystery Tour (Remastered)",
    "artistas": [
      "The Beatles"
    ],
    "index": 264,
    "spotifyId": "3Am0IbOxmvlSXro7N5iSfZ",
    "titulo": "Strawberry Fields Forever - Remastered 2009"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 265,
    "spotifyId": "0BowNHHxtXVyLMXxS31LBe",
    "titulo": "Love Me Do - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 266,
    "spotifyId": "6dCq7bLa4j3ZFkOGeUbInk",
    "titulo": "Please Please Me - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 267,
    "spotifyId": "39js8qHOPRhKMxl6Qxg55F",
    "titulo": "Twist And Shout - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 268,
    "spotifyId": "72cBk2iqWcax9eoIXGNVM6",
    "titulo": "All My Loving - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 269,
    "spotifyId": "0g1NjFyzJ6FFEOTsuiJLdv",
    "titulo": "I Want To Hold Your Hand - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 270,
    "spotifyId": "01K1zFyjJhG2Qk7PIkSAEA",
    "titulo": "She Loves You - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 271,
    "spotifyId": "4iVudOuRcKPGK8y7GqSZKP",
    "titulo": "Can't Buy Me Love - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 272,
    "spotifyId": "7nGA8YRPmsDmLZ55DIGEdC",
    "titulo": "A Hard Day's Night - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 273,
    "spotifyId": "5VTVK2RtOj6tKH9OPKMht7",
    "titulo": "And I Love Her - 2023 Mix"
  },
  {
    "album": "The Beatles 1962 – 1966 (2023 Edition)",
    "artistas": [
      "The Beatles"
    ],
    "index": 274,
    "spotifyId": "0bGiTPrxCIFs7lZS9knvRS",
    "titulo": "Help! - 2023 Mix"
  },
  {
    "album": "The Bodyguard - Original Soundtrack Album",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 275,
    "spotifyId": "4eHbdreAnSOrDDsFfc4Fpm",
    "titulo": "I Will Always Love You"
  },
  {
    "album": "The Bodyguard - Original Soundtrack Album",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 276,
    "spotifyId": "31er9IGsfFbwqy1pH4aiTP",
    "titulo": "I Have Nothing"
  },
  {
    "album": "Whitney",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 277,
    "spotifyId": "2tUBqZG2AbRi7Q0BIrVrEj",
    "titulo": "I Wanna Dance with Somebody (Who Loves Me)"
  },
  {
    "album": "Fleetwood Mac",
    "artistas": [
      "Fleetwood Mac"
    ],
    "index": 278,
    "spotifyId": "5ihS6UUlyQAfmp48eSkxuQ",
    "titulo": "Landslide"
  },
  {
    "album": "Atomic/Atomix",
    "artistas": [
      "Blondie"
    ],
    "index": 279,
    "spotifyId": "4qO03RMQm88DdpTJcxlglY",
    "titulo": "Call Me"
  },
  {
    "album": "Parallel Lines (Remastered)",
    "artistas": [
      "Blondie"
    ],
    "index": 280,
    "spotifyId": "4cQJ27R11K634x5qCOwKW5",
    "titulo": "One Way Or Another - Remastered 2001"
  },
  {
    "album": "Parallel Lines",
    "artistas": [
      "Blondie"
    ],
    "index": 281,
    "spotifyId": "4v2rkl1mC3zVAz0nXMx9r4",
    "titulo": "Heart Of Glass"
  },
  {
    "album": "Dizzy up the Girl",
    "artistas": [
      "The Goo Goo Dolls"
    ],
    "index": 282,
    "spotifyId": "6Qyc6fS4DsZjB2mRW9DsQs",
    "titulo": "Iris"
  },
  {
    "album": "Synchronicity (Remastered 2003)",
    "artistas": [
      "The Police"
    ],
    "index": 283,
    "spotifyId": "1JSTJqkT5qHq8MDJnJbRE1",
    "titulo": "Every Breath You Take"
  },
  {
    "album": "Heathen Chemistry",
    "artistas": [
      "Oasis"
    ],
    "index": 284,
    "spotifyId": "5YciOakY5dB5dULkiLdCaf",
    "titulo": "Stop Crying Your Heart Out"
  },
  {
    "album": "Strange Trails",
    "artistas": [
      "Lord Huron"
    ],
    "index": 285,
    "spotifyId": "5yJaXWIErrrsjQ3J0eR5aK",
    "titulo": "The Night We Met"
  },
  {
    "album": "Purple Rain",
    "artistas": [
      "Prince"
    ],
    "index": 286,
    "spotifyId": "1uvyZBs4IZYRebHIB1747m",
    "titulo": "Purple Rain"
  },
  {
    "album": "Purple Rain (Deluxe Expanded Edition)",
    "artistas": [
      "Prince"
    ],
    "index": 287,
    "spotifyId": "3FnP3j1TyiTwbJb5AR2ynT",
    "titulo": "Purple Rain - 7\" Single Edit; 2017 Remaster"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 288,
    "spotifyId": "0y5CnV2idm2KkQEudDjfDT",
    "titulo": "Last Goodbye"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 289,
    "spotifyId": "1StXVL5gClph4z4XzanYko",
    "titulo": "Lilac Wine"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 290,
    "spotifyId": "3pRaLNL3b8x5uBOcsgvdqM",
    "titulo": "Hallelujah"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 291,
    "spotifyId": "6Jv7kjGkhY2fT4yuBF3aTz",
    "titulo": "Lover, You Should've Come Over"
  },
  {
    "album": "Grace",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 292,
    "spotifyId": "6UuVONmxXwTKN1ISepuAoQ",
    "titulo": "Forget Her"
  },
  {
    "album": "Sketches for My Sweetheart The Drunk (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 293,
    "spotifyId": "2bcvooA6HEmVUneEGJnNZD",
    "titulo": "Everybody Here Wants You"
  },
  {
    "album": "Sketches for My Sweetheart The Drunk (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 294,
    "spotifyId": "4oq6sHpGfB4UmX36jK9Cz0",
    "titulo": "I Know We Could Be So Happy Baby (If We Wanted To Be)"
  },
  {
    "album": "You and I (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 295,
    "spotifyId": "4Dk6mrxXQzLMgpFHO2yRY9",
    "titulo": "Dream of You and I - Extended Version"
  },
  {
    "album": "You and I (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 296,
    "spotifyId": "2RTLIQRc8yogHh08waQDVa",
    "titulo": "I Know It's Over"
  },
  {
    "album": "You and I (Expanded Edition)",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 297,
    "spotifyId": "2vA8v1vyStXLOA4GHnQ5Vs",
    "titulo": "Unforgiven aka Last Goodbye"
  },
  {
    "album": "Live at Columbia Records Radio Hour",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 298,
    "spotifyId": "3Z7OFraob1P0QscGaSoh0v",
    "titulo": "Lover, You Should've Come Over - Live At Columbia Records Radio Hour, New York, NY, June 4, 1995"
  },
  {
    "album": "Grace Around The World",
    "artistas": [
      "Jeff Buckley"
    ],
    "index": 299,
    "spotifyId": "4ZTOFxmGtYp9iDX1bZdGfM",
    "titulo": "Lover, You Should Have Come Over - Live at JBTV, Chicago, IL - November 1994"
  },
  {
    "album": "XSCAPE",
    "artistas": [
      "Michael Jackson"
    ],
    "index": 300,
    "spotifyId": "5BKKy9fIJL5uM9fz1SnqyP",
    "titulo": "Chicago"
  },
  {
    "album": "Invincible",
    "artistas": [
      "Michael Jackson"
    ],
    "index": 301,
    "spotifyId": "1AZXNAVDD9ZFIEKySgflFz",
    "titulo": "Heaven Can Wait"
  },
  {
    "album": "hopeless fountain kingdom (Deluxe Plus)",
    "artistas": [
      "Halsey",
      "Lauren Jauregui"
    ],
    "index": 302,
    "spotifyId": "6uW5fyyosEMBKfg2W1ye1l",
    "titulo": "Strangers"
  },
  {
    "album": "Gold",
    "artistas": [
      "The Cranberries"
    ],
    "index": 303,
    "spotifyId": "49wOjOkS4pBK3PQnPnNYjb",
    "titulo": "Zombie"
  },
  {
    "album": "Everybody Else Is Doing It, So Why Can't We? (Remastered 2026)",
    "artistas": [
      "The Cranberries"
    ],
    "index": 304,
    "spotifyId": "1WYrTfvKjQYaYfVziGG1ET",
    "titulo": "Linger - Remastered 2026"
  },
  {
    "album": "The Visitors (Deluxe Edition)",
    "artistas": [
      "ABBA"
    ],
    "index": 305,
    "spotifyId": "6TvxPS4fj4LUdjw2es4g21",
    "titulo": "Slipping Through My Fingers"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 306,
    "spotifyId": "4BM8yJ0PzBi2ZewpMTOxtx",
    "titulo": "Fernando"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 307,
    "spotifyId": "3lKN03PDeBnXZS7sDukRBt",
    "titulo": "Money, Money, Money"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 308,
    "spotifyId": "0GjEhVFGZW8afUYGChu3Rr",
    "titulo": "Dancing Queen"
  },
  {
    "album": "Super Trouper",
    "artistas": [
      "ABBA"
    ],
    "index": 309,
    "spotifyId": "0J2p4KYdr6Mg4ET6JPlbe1",
    "titulo": "Super Trouper"
  },
  {
    "album": "Super Trouper",
    "artistas": [
      "ABBA"
    ],
    "index": 310,
    "spotifyId": "3oEkrIfXfSh9zGnE7eBzSV",
    "titulo": "The Winner Takes It All"
  },
  {
    "album": "Super Trouper",
    "artistas": [
      "ABBA"
    ],
    "index": 311,
    "spotifyId": "4euAGZTszWPrriggYK0HG9",
    "titulo": "Lay All Your Love On Me"
  },
  {
    "album": "Arrival",
    "artistas": [
      "ABBA"
    ],
    "index": 312,
    "spotifyId": "6zk4lFEYIWs1UZZ03NVetT",
    "titulo": "When I Kissed The Teacher"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 313,
    "spotifyId": "3vkQ5DAB1qQMYO4Mr9zJN6",
    "titulo": "Gimme! Gimme! Gimme! (A Man After Midnight)"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 314,
    "spotifyId": "762B4bOcXF7I2Y8UlKTyTy",
    "titulo": "Chiquitita"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 315,
    "spotifyId": "7rWgGyRK7RAqAAXy4bLft9",
    "titulo": "Angeleyes"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 316,
    "spotifyId": "1PtJclc46wTk367PlsU6Uj",
    "titulo": "I Have A Dream"
  },
  {
    "album": "Voulez-Vous",
    "artistas": [
      "ABBA"
    ],
    "index": 317,
    "spotifyId": "17OqI90oTFZ3J8PVu6j07V",
    "titulo": "Voulez-Vous"
  },
  {
    "album": "Oral Fixation, Vol. 2 (Expanded Edition)",
    "artistas": [
      "Shakira",
      "Wyclef Jean"
    ],
    "index": 318,
    "spotifyId": "3d0WouFnFmr0K3kjeza3fF",
    "titulo": "Hips Don't Lie (feat. Wyclef Jean)"
  },
  {
    "album": "El Dorado",
    "artistas": [
      "Shakira",
      "Maluma"
    ],
    "index": 319,
    "spotifyId": "6mICuAdrwEjh6Y6lroV2Kg",
    "titulo": "Chantaje (feat. Maluma)"
  },
  {
    "album": "Shakira. (Expanded Edition) [Spanish Version]",
    "artistas": [
      "Shakira",
      "Rihanna"
    ],
    "index": 320,
    "spotifyId": "7o1Pm9jpH0wFpN5g793Lnq",
    "titulo": "Can't Remember to Forget You (feat. Rihanna)"
  },
  {
    "album": "B'Day Deluxe Edition",
    "artistas": [
      "Beyoncé",
      "Shakira"
    ],
    "index": 321,
    "spotifyId": "2HWWNoWEEEECwZhAiLg7ib",
    "titulo": "Beautiful Liar"
  },
  {
    "album": "TRANSLATION",
    "artistas": [
      "Black Eyed Peas",
      "Shakira"
    ],
    "index": 322,
    "spotifyId": "1zLBsSVxETQOfINOLYvT5m",
    "titulo": "GIRL LIKE ME"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira",
      "El Cata"
    ],
    "index": 323,
    "spotifyId": "42k1KeBehAd83lrGt1okiC",
    "titulo": "Loca (feat. El Cata)"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira"
    ],
    "index": 324,
    "spotifyId": "4zy1s9GnxWsNzZp1688euA",
    "titulo": "Addicted to You"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira",
      "El Cata"
    ],
    "index": 325,
    "spotifyId": "19t0Z7qsoV6A1CGJVYRnjm",
    "titulo": "Rabiosa (feat. El Cata)"
  },
  {
    "album": "Donde Estan Los Ladrones",
    "artistas": [
      "Shakira"
    ],
    "index": 326,
    "spotifyId": "2nSd3kBslXIbBAdrmqvKM6",
    "titulo": "Dónde Están los Ladrones"
  },
  {
    "album": "Donde Estan Los Ladrones",
    "artistas": [
      "Shakira"
    ],
    "index": 327,
    "spotifyId": "7jxHeJLVpnP7S08JFF4GBi",
    "titulo": "Ciega, Sordomuda"
  },
  {
    "album": "El Dorado",
    "artistas": [
      "Shakira"
    ],
    "index": 328,
    "spotifyId": "4qknM1pQz53QOyfDVTjcM9",
    "titulo": "Me Enamoré"
  },
  {
    "album": "Pies Descalzos",
    "artistas": [
      "Shakira"
    ],
    "index": 329,
    "spotifyId": "4M1lEbqPzlEw1JYWB6aE7K",
    "titulo": "Estoy Aquí"
  },
  {
    "album": "Pies Descalzos",
    "artistas": [
      "Shakira"
    ],
    "index": 330,
    "spotifyId": "5yKQTwznar5I75UyYJ9CnR",
    "titulo": "Pies Descalzos, Sueños Blancos"
  },
  {
    "album": "Laundry Service",
    "artistas": [
      "Shakira"
    ],
    "index": 331,
    "spotifyId": "2lnzGkdtDj5mtlcOW2yRtG",
    "titulo": "Whenever, Wherever"
  },
  {
    "album": "Laundry Service",
    "artistas": [
      "Shakira"
    ],
    "index": 332,
    "spotifyId": "3TY1PFZXmYeiLcXygB74My",
    "titulo": "Suerte (Whenever, Wherever)"
  },
  {
    "album": "She Wolf (Expanded Edition)",
    "artistas": [
      "Shakira"
    ],
    "index": 333,
    "spotifyId": "4l9fZ75WzPZlAIkqJIWlo8",
    "titulo": "She Wolf"
  },
  {
    "album": "She Wolf (Expanded Edition)",
    "artistas": [
      "Shakira"
    ],
    "index": 334,
    "spotifyId": "0FpB2Hw5qx9SeMMQuw1G5P",
    "titulo": "Loba"
  },
  {
    "album": "Shakira: Bzrp Music Sessions, Vol. 53/66",
    "artistas": [
      "Bizarrap",
      "Shakira"
    ],
    "index": 335,
    "spotifyId": "4nrPB8O7Y7wsOCJdgXkthe",
    "titulo": "Shakira: Bzrp Music Sessions, Vol. 53/66"
  },
  {
    "album": "Blue Hawaii",
    "artistas": [
      "Elvis Presley"
    ],
    "index": 336,
    "spotifyId": "44AyOl4qVkzS48vBsbNXaC",
    "titulo": "Can't Help Falling in Love"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 337,
    "spotifyId": "5XeFesFbtLpXzIVDNQP22n",
    "titulo": "I Wanna Be Yours"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 338,
    "spotifyId": "086myS9r57YsLbJpU0TgK9",
    "titulo": "Why'd You Only Call Me When You're High?"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 339,
    "spotifyId": "5TTGoX70AFrTvuEtqHK37S",
    "titulo": "No. 1 Party Anthem"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 340,
    "spotifyId": "5FVd6KXrgO9B3JPmC8OPst",
    "titulo": "Do I Wanna Know?"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 341,
    "spotifyId": "2AT8iROs4FQueDv2c8q2KE",
    "titulo": "R U Mine?"
  },
  {
    "album": "AM",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 342,
    "spotifyId": "7nzsY8vlnKdvGOEE0rjAXZ",
    "titulo": "Arabella"
  },
  {
    "album": "Favourite Worst Nightmare",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 343,
    "spotifyId": "0BxE4FqsDD1Ot4YuBXwAPp",
    "titulo": "505"
  },
  {
    "album": "Favourite Worst Nightmare",
    "artistas": [
      "Arctic Monkeys"
    ],
    "index": 344,
    "spotifyId": "2x8evxqUlF0eRabbW2JBJd",
    "titulo": "Fluorescent Adolescent"
  },
  {
    "album": "Sixpence None The Richer",
    "artistas": [
      "Sixpence None The Richer"
    ],
    "index": 345,
    "spotifyId": "754kgU5rWscRTfvlsuEwFp",
    "titulo": "Kiss Me"
  },
  {
    "album": "Canzoni",
    "artistas": [
      "Chiara Civello",
      "Ana Carolina"
    ],
    "index": 346,
    "spotifyId": "0BvqinOX3RamcfaUd2bRWJ",
    "titulo": "E penso a te (feat. Ana Carolina)"
  },
  {
    "album": "O Tempo É Agora",
    "artistas": [
      "ANAVITÓRIA"
    ],
    "index": 347,
    "spotifyId": "3bR8wBqLky6b61ROJlaBEF",
    "titulo": "Ai, Amor"
  },
  {
    "album": "Lungs (Deluxe Version)",
    "artistas": [
      "Florence + The Machine"
    ],
    "index": 348,
    "spotifyId": "456WNXWhDwYOSf5SpTuqxd",
    "titulo": "Dog Days Are Over"
  },
  {
    "album": "I Follow Rivers (The Magician Remix)",
    "artistas": [
      "Lykke Li",
      "The Magician"
    ],
    "index": 349,
    "spotifyId": "4Jv7lweGIUOFQ7Oq2AtAh9",
    "titulo": "I Follow Rivers - The Magician Remix"
  },
  {
    "album": "The Bodyguard - Original Soundtrack Album",
    "artistas": [
      "Whitney Houston"
    ],
    "index": 350,
    "spotifyId": "6M1M6cRtVkm5d0qTzkSEuK",
    "titulo": "Run to You"
  },
  {
    "album": "Hatful of Hollow",
    "artistas": [
      "The Smiths"
    ],
    "index": 351,
    "spotifyId": "1xaTREM89RbIxkcjlpf4Uw",
    "titulo": "Heaven Knows I'm Miserable Now - 2011 Remaster"
  },
  {
    "album": "Faccio un casino",
    "artistas": [
      "Coez"
    ],
    "index": 352,
    "spotifyId": "7MMJa7cjMadOSR6CFWvB1x",
    "titulo": "La musica non c'è"
  },
  {
    "album": "Temporary",
    "artistas": [
      "Lauren Jauregui"
    ],
    "index": 353,
    "spotifyId": "28zcTRqgD2iVOE4KEKCAxi",
    "titulo": "Temporary"
  },
  {
    "album": "Non so chi ha creato il mondo ma so che era innamorato",
    "artistas": [
      "Alfa"
    ],
    "index": 354,
    "spotifyId": "4fffEEVKwaw4gEoNW9fEX2",
    "titulo": "il filo rosso"
  },
  {
    "album": "Le Cose In Comune",
    "artistas": [
      "Alfa"
    ],
    "index": 355,
    "spotifyId": "24FfvTqyMAJKA8lrSqjhfB",
    "titulo": "Le Cose In Comune"
  },
  {
    "album": "Destinazione Paradiso",
    "artistas": [
      "Gianluca Grignani"
    ],
    "index": 356,
    "spotifyId": "5L4wJD8eyVhSrm4pbPuF2u",
    "titulo": "La Mia Storia Tra Le Dita"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 357,
    "spotifyId": "2yQMmtem48vOjB1OXAvbKD",
    "titulo": "Quem de nós Dois (La Mia Storia Tra Le Dita)"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 358,
    "spotifyId": "5bxQHscWvyaQbm37igKP4K",
    "titulo": "La solitudine"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 359,
    "spotifyId": "2I0mW1Ldu2FQ8qmhxqQjeA",
    "titulo": "Non c'è"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 360,
    "spotifyId": "4gXSgEQeLRwCmpa6foSspX",
    "titulo": "Strani amori"
  },
  {
    "album": "Primavera in anticipo",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 361,
    "spotifyId": "6RDrpNxQIKp6LULdQWd2Vl",
    "titulo": "Invece no"
  },
  {
    "album": "Resta in ascolto",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 362,
    "spotifyId": "1WXnbemEJ4t1q3c2kb2fSA",
    "titulo": "Vivimi"
  },
  {
    "album": "Resta in ascolto",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 363,
    "spotifyId": "0itZu27maTPaeqkq7Y2WiX",
    "titulo": "Dove l'aria è polvere"
  },
  {
    "album": "Resta in ascolto",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 364,
    "spotifyId": "03PJW7YIlG86dCvoYviGbh",
    "titulo": "Parlami"
  },
  {
    "album": "Le cose che vivi",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 365,
    "spotifyId": "7qNtV5oSvYLPOlvWjRQ0qa",
    "titulo": "Le cose che vivi"
  },
  {
    "album": "IO CANTO 2 (DELUXE)",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 366,
    "spotifyId": "56e1N6HF5wfBBh41dHZYmk",
    "titulo": "LA MIA STORIA TRA LE DITA"
  },
  {
    "album": "Brand New Eyes",
    "artistas": [
      "Paramore"
    ],
    "index": 367,
    "spotifyId": "7JIuqL4ZqkpfGKQhYlrirs",
    "titulo": "The Only Exception"
  },
  {
    "album": "Brand New Eyes",
    "artistas": [
      "Paramore"
    ],
    "index": 368,
    "spotifyId": "1Bv3h7Vc4AaYA2BcSM3rVd",
    "titulo": "All I Wanted"
  },
  {
    "album": "Lento (feat. Pabllo Vittar) [Brabo Remix]",
    "artistas": [
      "Lauren Jauregui",
      "Pabllo Vittar",
      "Brabo"
    ],
    "index": 369,
    "spotifyId": "3BvwBnmbsKs7dBkU6PKBrT",
    "titulo": "Lento (feat. Pabllo Vittar) [Brabo Remix]"
  },
  {
    "album": "Peter, Paul and Mary",
    "artistas": [
      "Peter, Paul and Mary"
    ],
    "index": 370,
    "spotifyId": "6oMZhY0f1ReI6AJDDYfuSb",
    "titulo": "500 Miles"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 371,
    "spotifyId": "5JCoSi02qi3jJeHdZXMmR8",
    "titulo": "favorite crime"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 372,
    "spotifyId": "0MMyJUC3WNnFS1lit5pTjk",
    "titulo": "jealousy, jealousy"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 373,
    "spotifyId": "6SRsiMl7w1USE4mFqrOhHC",
    "titulo": "brutal"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 374,
    "spotifyId": "5CZ40GBx1sQ9agT82CLQCT",
    "titulo": "traitor"
  },
  {
    "album": "SOUR",
    "artistas": [
      "Olivia Rodrigo"
    ],
    "index": 375,
    "spotifyId": "5wANPM4fQCJwkGd4rN57mH",
    "titulo": "drivers license"
  },
  {
    "album": "Fallen",
    "artistas": [
      "Evanescence"
    ],
    "index": 376,
    "spotifyId": "0COqiPhxzoWICwFCS4eZcp",
    "titulo": "Bring Me To Life"
  },
  {
    "album": "Young And Beautiful",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 377,
    "spotifyId": "2nMeu6UenVvwUktBCpLMK9",
    "titulo": "Young And Beautiful"
  },
  {
    "album": "Say Yes To Heaven",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 378,
    "spotifyId": "6GGtHZgBycCgGBUhZo81xe",
    "titulo": "Say Yes To Heaven"
  },
  {
    "album": "Born To Die - The Paradise Edition",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 379,
    "spotifyId": "0fBSs3fRoh1yJcne77fdu9",
    "titulo": "Video Games"
  },
  {
    "album": "Born To Die - The Paradise Edition",
    "artistas": [
      "Lana Del Rey"
    ],
    "index": 380,
    "spotifyId": "4Ouhoi2lAhrLJKFzUqEzwl",
    "titulo": "Born To Die"
  },
  {
    "album": "A Perfect Contradiction (Outsiders' Expanded Edition)",
    "artistas": [
      "Paloma Faith"
    ],
    "index": 381,
    "spotifyId": "62ke5zFUJN6RvtXZgVH0F8",
    "titulo": "Only Love Can Hurt Like This"
  },
  {
    "album": "Chiara Civello 7752",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 382,
    "spotifyId": "3eq4ncW2xC74TteeoSZ7Ec",
    "titulo": "Resta"
  },
  {
    "album": "Suicide Squad: The Album",
    "artistas": [
      "Kehlani"
    ],
    "index": 383,
    "spotifyId": "1W7zkKgRv9mrLbfdQ8XyH3",
    "titulo": "Gangsta"
  },
  {
    "album": "Ashlyn",
    "artistas": [
      "Ashe"
    ],
    "index": 384,
    "spotifyId": "69HzZ3ti9DLwb0GdWCGYSo",
    "titulo": "Moral of the Story"
  },
  {
    "album": "Dream Your Life Away",
    "artistas": [
      "Vance Joy"
    ],
    "index": 385,
    "spotifyId": "7yq4Qj7cqayVTp3FF9CWbm",
    "titulo": "Riptide"
  },
  {
    "album": "200 KM/H In The Wrong Lane",
    "artistas": [
      "t.A.T.u."
    ],
    "index": 386,
    "spotifyId": "0ZRU3O6kVY8CgtYFYwjH4m",
    "titulo": "All The Things She Said"
  },
  {
    "album": "Honeymoon",
    "artistas": [
      "Beach Bunny"
    ],
    "index": 387,
    "spotifyId": "3ZgkHyoKfNMcHTXC0X1qQj",
    "titulo": "Cloud 9"
  },
  {
    "album": "Make You Mine",
    "artistas": [
      "PUBLIC"
    ],
    "index": 388,
    "spotifyId": "5iFwAOB2TFkPJk8sMlxP8g",
    "titulo": "Make You Mine"
  },
  {
    "album": "Hopes And Fears",
    "artistas": [
      "Keane"
    ],
    "index": 389,
    "spotifyId": "1SKPmfSYaPsETbRHaiA18G",
    "titulo": "Somewhere Only We Know"
  },
  {
    "album": "Someday We Will Foresee Obstacles",
    "artistas": [
      "Syd Matters"
    ],
    "index": 390,
    "spotifyId": "2B52wafRNWOxZTD2lmY6y2",
    "titulo": "To All of You"
  },
  {
    "album": "Texas Chatter",
    "artistas": [
      "Harry James"
    ],
    "index": 391,
    "spotifyId": "4rfh0qEv1HdKRXWiRXfzWF",
    "titulo": "It's Been a Long, Long Time"
  },
  {
    "album": "Let It Roll - Songs of George Harrison",
    "artistas": [
      "George Harrison"
    ],
    "index": 392,
    "spotifyId": "52ksVOpMCbimktgmI59GSq",
    "titulo": "While My Guitar Gently Weeps - Live from Madison Square Garden, New York, U.S.A, 1971 / 2009 Remaster"
  },
  {
    "album": "Immunity",
    "artistas": [
      "Clairo"
    ],
    "index": 393,
    "spotifyId": "7B3z0ySL9Rr0XvZEAjWZzM",
    "titulo": "Sofia"
  },
  {
    "album": "Diane Warren: The Cave Sessions, Vol. 1",
    "artistas": [
      "Diane Warren",
      "Lauren Jauregui"
    ],
    "index": 394,
    "spotifyId": "2cY9Hz1bihEOxPkUx3oFCA",
    "titulo": "Not Prepared For You"
  },
  {
    "album": "The World We Knew",
    "artistas": [
      "Frank Sinatra"
    ],
    "index": 395,
    "spotifyId": "62KZRwymXq9Rgm8Cm5UCfx",
    "titulo": "The World We Knew (Over And Over)"
  },
  {
    "album": "Dummy",
    "artistas": [
      "Portishead"
    ],
    "index": 396,
    "spotifyId": "3Ty7OTBNSigGEpeW2PqcsC",
    "titulo": "Glory Box"
  },
  {
    "album": "How deep is your love? (Mitski's version)",
    "artistas": [
      "Manllii"
    ],
    "index": 397,
    "spotifyId": "4Hj7OQxRvSz5Lrrw75lu2L",
    "titulo": "How deep is your love? (Mitski's version)"
  },
  {
    "album": "Roseland NYC Live",
    "artistas": [
      "Portishead"
    ],
    "index": 398,
    "spotifyId": "2wEHxTBxLJk3vYzyW6dsAU",
    "titulo": "Glory Box - Live"
  },
  {
    "album": "Corinne Bailey Rae",
    "artistas": [
      "Corinne Bailey Rae"
    ],
    "index": 399,
    "spotifyId": "2nGFzvICaeEWjIrBrL2RAx",
    "titulo": "Put Your Records On"
  },
  {
    "album": "Splende",
    "artistas": [
      "Annalisa"
    ],
    "index": 400,
    "spotifyId": "7o34Mp5i0kSmAIJUCxVCFn",
    "titulo": "Ti sento"
  },
  {
    "album": "MATERIA (PELLE)",
    "artistas": [
      "Marco Mengoni"
    ],
    "index": 401,
    "spotifyId": "4eI0ncpnZuv4A3ssTJRSDY",
    "titulo": "Due Vite"
  },
  {
    "album": "The Kitty Kallen Story",
    "artistas": [
      "Kitty Kallen",
      "Harry James"
    ],
    "index": 402,
    "spotifyId": "61sVa3rLHOYqrshahMJj0A",
    "titulo": "It's Been a Long, Long Time (with Harry James & His Orchestra)"
  },
  {
    "album": "The Best Of Bill Medley",
    "artistas": [
      "Bill Medley",
      "Jennifer Warnes"
    ],
    "index": 403,
    "spotifyId": "2JCTiiJQFWQNC0Zp8rsJRB",
    "titulo": "(I've Had) The Time Of My Life - theme from the motion picture \"Dirty Dancing\""
  },
  {
    "album": "Solo",
    "artistas": [
      "Frankie Valli"
    ],
    "index": 404,
    "spotifyId": "0bfvHnWWOeU1U5XeKyVLbW",
    "titulo": "Can't Take My Eyes off You"
  },
  {
    "album": "Songs From The Big Chair (Super Deluxe Edition)",
    "artistas": [
      "Tears For Fears"
    ],
    "index": 405,
    "spotifyId": "4RvWPyQ5RL0ao9LPZeSouE",
    "titulo": "Everybody Wants To Rule The World"
  },
  {
    "album": "Barrio Fino (Bonus Track Version)",
    "artistas": [
      "Daddy Yankee"
    ],
    "index": 406,
    "spotifyId": "228BxWXUYQPJrJYHDLOHkj",
    "titulo": "Gasolina"
  },
  {
    "album": "Loose",
    "artistas": [
      "Nelly Furtado",
      "Timbaland"
    ],
    "index": 407,
    "spotifyId": "2gam98EZKrF9XuOkU13ApN",
    "titulo": "Promiscuous"
  },
  {
    "album": "Good Girl Gone Bad: Reloaded",
    "artistas": [
      "Rihanna"
    ],
    "index": 408,
    "spotifyId": "46aZJc0z1HHHSFxaIRxYSP",
    "titulo": "Breakin' Dishes"
  },
  {
    "album": "Don't Play That Song (Mono)",
    "artistas": [
      "Ben E. King"
    ],
    "index": 409,
    "spotifyId": "3SdTKo2uVsxFblQjpScoHy",
    "titulo": "Stand By Me"
  },
  {
    "album": "VIDA",
    "artistas": [
      "Luis Fonsi",
      "Daddy Yankee"
    ],
    "index": 410,
    "spotifyId": "6habFhsOp2NvshLv26DqMb",
    "titulo": "Despacito"
  },
  {
    "album": "R&B: From Doo-Wop To Hip-Hop",
    "artistas": [
      "Ginuwine"
    ],
    "index": 411,
    "spotifyId": "6mz1fBdKATx6qP4oP1I65G",
    "titulo": "Pony"
  },
  {
    "album": "Church Of Scars",
    "artistas": [
      "Bishop Briggs"
    ],
    "index": 412,
    "spotifyId": "3mRLHiSHYtC8Hk7bzZdUs1",
    "titulo": "River"
  },
  {
    "album": "I See Red",
    "artistas": [
      "Everybody Loves an Outlaw"
    ],
    "index": 413,
    "spotifyId": "5MAK1nd8R6PWnle1Q1WJvh",
    "titulo": "I See Red"
  },
  {
    "album": "VIDA",
    "artistas": [
      "Luis Fonsi",
      "Demi Lovato"
    ],
    "index": 414,
    "spotifyId": "0mlAOSILGRys2IbvyOT5VJ",
    "titulo": "Échame La Culpa"
  },
  {
    "album": "Lesley Gore Sings Of Mixed-Up Hearts",
    "artistas": [
      "Lesley Gore"
    ],
    "index": 415,
    "spotifyId": "7ngRS53kqxLcEt9Pythc5d",
    "titulo": "You Don't Own Me"
  },
  {
    "album": "Cinque Passi In Più",
    "artistas": [
      "Alessandra Amoroso"
    ],
    "index": 416,
    "spotifyId": "7lOlFOWWGQrZ6l1mgj45X6",
    "titulo": "Ti aspetto"
  },
  {
    "album": "Raio X",
    "artistas": [
      "Fernanda Abreu"
    ],
    "index": 417,
    "spotifyId": "70lDFSVPl2SO70Emrmpxp9",
    "titulo": "Kátia Flávia, A Godiva Do Irajá / Incidental: Garota De Ipanema - Medley"
  },
  {
    "album": "Number Ones",
    "artistas": [
      "Michael Jackson"
    ],
    "index": 420,
    "spotifyId": "6JZYMxvcoeLD4IifJPvDux",
    "titulo": "Dirty Diana"
  },
  {
    "album": "Rehab",
    "artistas": [
      "Amy Winehouse"
    ],
    "index": 421,
    "spotifyId": "5WV7xL0fxsy6zGfHUu0I9N",
    "titulo": "Rehab - Live From The Album Chart Show / 2006"
  },
  {
    "album": "Trilha das Indias",
    "artistas": [
      " Sukhwinder Singh", 
      "Sunidhi Chauhan"
    ],
    "index": 421,
    "spotifyId": "3FBhYM0JzI6hcl9f5qAXXL",
    "titulo": "Beedi"
  },
  {
    "album": "Neither One Of Us",
    "artistas": [
      "Gladys Knight & The Pips"
    ],
    "index": 422,
    "spotifyId": "0qKnbglSUegyNBWCpw3WWo",
    "titulo": "For Once In My Life"
  }
];


// Playlist exclusiva do modo Descendentes:
// https://open.spotify.com/playlist/44xYNTfmisUBtQ1oYuEWYe
const PLAYLIST_DESCENDENTES = [
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 1,
    "spotifyId": "53xAT6jud1w0NqlBjSW4VB",
    "titulo": "What's My Name"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 2,
    "spotifyId": "2ziVTVizQdVNC2QhQhNGvg",
    "titulo": "Ways to Be Wicked"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 3,
    "spotifyId": "3N1V03yrqyNPo5A4Fu2Wd7",
    "titulo": "Space Between"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 4,
    "spotifyId": "537mRuCCiKQNFlN1vdSl1k",
    "titulo": "It's Goin' Down"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 5,
    "spotifyId": "5AiD2doxfh5xlfkNc63WPV",
    "titulo": "You and Me"
  },
  {
    "album": "Descendants 2 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 6,
    "spotifyId": "1rM0CnyUiiw6A9CHJRXjZA",
    "titulo": "Chillin' Like a Villain"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 7,
    "spotifyId": "6ATDrk56ouL2eCxrgfDeHE",
    "titulo": "Do What You Gotta Do"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 8,
    "spotifyId": "3doNvO8zrwzcM0PJrcn8Rb",
    "titulo": "Night Falls"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 9,
    "spotifyId": "6NyXDWD1bH0fwBrShjSydJ",
    "titulo": "My Once Upon a Time"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 10,
    "spotifyId": "1KB9t6oaVG99L1DIkMfyrx",
    "titulo": "Break This Down"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 11,
    "spotifyId": "35mP1AOFEpTrChN5H4r2u7",
    "titulo": "Rotten to the Core (D3 Remix)"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 12,
    "spotifyId": "7Ci4hHa9wvMajOqt5EpOQK",
    "titulo": "VK Mashup"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 13,
    "spotifyId": "1YekSxsAlGlYvm9zjLsKdh",
    "titulo": "Did I Mention"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 14,
    "spotifyId": "4o05DiC0RQ9DNtGJGauwna",
    "titulo": "Queen of Mean"
  },
  {
    "album": "Descendants 3 (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 15,
    "spotifyId": "0v2gYvWbmabBYaTlOWi5fi",
    "titulo": "One Kiss"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 16,
    "spotifyId": "0tA3r8h5RZp9xSPrZe8fcK",
    "titulo": "Night Is Young - From \"Descendants: Wicked World\""
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 17,
    "spotifyId": "2bNxCVI4Fub8BAwr0CQDyd",
    "titulo": "Rotten to the Core"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 18,
    "spotifyId": "1mRBJdpIgc3jZH8C3cN2WV",
    "titulo": "If Only"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 19,
    "spotifyId": "0xlHBT4TViZJGdEPi5M4pm",
    "titulo": "If Only (Reprise)"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 20,
    "spotifyId": "7I80zTBTDNnbOiJQ0JLjZr",
    "titulo": "Set It Off"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 21,
    "spotifyId": "0PslQwFjnu3nTm9ka7d0xL",
    "titulo": "Good Is the New Bad - From \"Descendants: Wicked World\""
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 22,
    "spotifyId": "1YekSxsAlGlYvm9zjLsKdh",
    "titulo": "Did I Mention"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 23,
    "spotifyId": "0oe0UYSKAESBUR12I1ESXQ",
    "titulo": "Evil Like Me"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 24,
    "spotifyId": "5bIaUFqwok97vCXAoTqFkj",
    "titulo": "Be Our Guest"
  },
  {
    "album": "Descendants (Original TV Movie Soundtrack)",
    "artistas": [
      "Descendentes"
    ],
    "index": 25,
    "spotifyId": "01vWrOtEdzlQorEhifVUo3",
    "titulo": "Rotten to the Core - From \"Descendants: Wicked World\""
  },
  {
    "album": "Genie in a Bottle",
    "artistas": [
      "Descendentes"
    ],
    "index": 26,
    "spotifyId": "7o6oQ3TTOAdMe46Hg7ijDh",
    "titulo": "Genie in a Bottle"
  },
  {
    "album": "Good to Be Bad (From \"Descendants 3\")",
    "artistas": [
      "Descendentes"
    ],
    "index": 27,
    "spotifyId": "3EJhGXM0fa6nVb6MfgTauX",
    "titulo": "Good to Be Bad - From \"Descendants 3\""
  },
  {
    "album": "Queen of Mean/What's My Name CLOUDxCITY...",
    "artistas": [
      "Descendentes"
    ],
    "index": 28,
    "spotifyId": "2oJG54pCeFBlc63HuZrOX8",
    "titulo": "Queen of Mean/What's My Name CLOUDxCITY Mashup - From \"Descendants...\""
  },
  {
    "album": "Rather Be With You (From \"Descendants: Wicked World\")",
    "artistas": [
      "Descendentes"
    ],
    "index": 29,
    "spotifyId": "06FtGanSUKMJ0ZYak6V1FR",
    "titulo": "Rather Be With You - From \"Descendants: Wicked World\""
  },
  {
    "album": "Stronger (From \"Under the Sea: A Descendant...)",
    "artistas": [
      "Descendentes"
    ],
    "index": 30,
    "spotifyId": "6xjTZCCyLNEOw7AsGV8A5e",
    "titulo": "Stronger - From \"Under the Sea: A Descendants Short Story\""
  }
];

// Playlist exclusiva do modo Ana Carolina:
const PLAYLIST_ANA_CAROLINA = [
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 1,
    "spotifyId": "1tnFctXBWxcl4bynuz88SV",
    "titulo": "O Beat Da Beata - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 2,
    "spotifyId": "6fXhVRbRgeDUyeckTYhzwd",
    "titulo": "Vestido Estampado - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 3,
    "spotifyId": "7tGvQQ0GmZVPbk0eaJy90F",
    "titulo": "Garganta - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 4,
    "spotifyId": "39Yhrx9ZZCkwM4erwUx72E",
    "titulo": "Mais Que Isso - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 5,
    "spotifyId": "2CvrbVzGLqAJSeRkh4XvW5",
    "titulo": "Brasil Corrupção (Unimultiplicidade) - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 6,
    "spotifyId": "3yx8ZoQRZQUiIUpSS4xhMP",
    "titulo": "Beatriz - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 7,
    "spotifyId": "6sgNwn5AMtjFWF2W8920yB",
    "titulo": "Chatterton - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 8,
    "spotifyId": "0Z96ZExECrYSQo03nfCak0",
    "titulo": "Prá Rua Me Levar - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 9,
    "spotifyId": "6tvnj77OJD0DJTgSIi6fQ3",
    "titulo": "É Isso Aí (The Blower'S Daughter) - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 10,
    "spotifyId": "2fCxoHkhVU2cxZbGelPIlo",
    "titulo": "Tanta Saudade - Ao Vivo"
  },
  {
    "album": "Ana E Jorge (Ao Vivo)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 11,
    "spotifyId": "1SCHnL226Vc4S4lyoGeeSf",
    "titulo": "Comparsas / O Pequenez E O Pit Bull - Ao Vivo"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 12,
    "spotifyId": "3mpm4fPG1RIWHCz6VBfQgq",
    "titulo": "O Beat Da Beata"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 13,
    "spotifyId": "5aIBMkNJ4Gfz1srs3mdQQj",
    "titulo": "Não Fale Desse Jeito"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 14,
    "spotifyId": "2RxlRzPIZrIPmAEv0fVjZe",
    "titulo": "Nua"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 15,
    "spotifyId": "1y3MmmBH8UfKKUKWfaHuy4",
    "titulo": "Vestido Estampado"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 16,
    "spotifyId": "6jJMhX5CuzeZBU1HsX7nFz",
    "titulo": "Vox Populi"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 17,
    "spotifyId": "3VlF8xuYu1Qzr9k7wGaTPA",
    "titulo": "Mais Que Isso"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 18,
    "spotifyId": "2NSqSMc0wd01Km04JVBInL",
    "titulo": "É Mágoa"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 19,
    "spotifyId": "5EGm0I15EH6L1hOkFyO1FC",
    "titulo": "Pra Rua Me Levar"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 20,
    "spotifyId": "3w9pLeERUMc6oGF02YU7ro",
    "titulo": "Uma Louca Tempestade"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 21,
    "spotifyId": "5f2InE6PenFPhBeCLXCvFC",
    "titulo": "É Hora Da Virada"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 22,
    "spotifyId": "752h4gcgAIH6gdlBTFAS6H",
    "titulo": "Só Fala Em Mim"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 23,
    "spotifyId": "0bB6AoOHbBYYuaR9V26E7z",
    "titulo": "Elevador (Livro de Esquecimento)"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 24,
    "spotifyId": "3ZBGVTCNbv5VkRg7vx5uQw",
    "titulo": "2 Bicudos"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 25,
    "spotifyId": "4zVlul17Z9SGqwgmbwm10Z",
    "titulo": "Encostar na Tua"
  },
  {
    "album": "Estampado",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 26,
    "spotifyId": "2wRDSWplTOhbsG4Tr5YHA6",
    "titulo": "Hoje Eu Tô Sozinha"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 27,
    "spotifyId": "3SXe3otoiV5dywpKe0wHdr",
    "titulo": "Me Sento Na Rua"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 28,
    "spotifyId": "6PaJaElx59xuI8TPxd7XAf",
    "titulo": "Eu Nunca Te Amei Idiota"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 29,
    "spotifyId": "0GZMMUuDB34uvhdSuAcfFF",
    "titulo": "Que Se Danem Os Nós"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 30,
    "spotifyId": "1ITWh6vi5pFYvxPAelp8CK",
    "titulo": "Dadivosa"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 31,
    "spotifyId": "3a4XauKFdsov5eEg3TH7gd",
    "titulo": "A Câmera Que Filma os Dias"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 32,
    "spotifyId": "687IN0vgEIHxAre06KRukW",
    "titulo": "Vê Se Me Esquece"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina",
      "Alcione"
    ],
    "index": 33,
    "spotifyId": "5XqEElLqSgCGigDjAfTGFq",
    "titulo": "Violão e Voz (feat. Alcione)"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 34,
    "spotifyId": "45keLg41B7ruaknqutQqFG",
    "titulo": "Joana"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 35,
    "spotifyId": "7nNHOrnaQR64K2aQwzRnca",
    "titulo": "Que Será"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 36,
    "spotifyId": "7mZwcrez7OblenK3PAIOuy",
    "titulo": "Pra Terminar"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 37,
    "spotifyId": "2yQMmtem48vOjB1OXAvbKD",
    "titulo": "Quem de nós Dois (La Mia Storia Tra Le Dita)"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 38,
    "spotifyId": "3nnrhhoc968wluAuPAkC0e",
    "titulo": "Implicante"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 39,
    "spotifyId": "3NjEZ08bWZUZWGGLRjFHoZ",
    "titulo": "Ela É Bamba"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 40,
    "spotifyId": "6g0WLBUxLNigI5woFtsI5g",
    "titulo": "Confesso"
  },
  {
    "album": "Ana Rita Joana Iracema Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 41,
    "spotifyId": "7JnjKjVwGAM6Dyq8jgbsFU",
    "titulo": "O Rio"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 42,
    "spotifyId": "2DRMQ194dWZuhiyP2r5zmU",
    "titulo": "Tô Caindo Fora"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 43,
    "spotifyId": "2jXrL5iDQv3aW5YRiNJsRo",
    "titulo": "Beatriz"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 44,
    "spotifyId": "44Z3yhqx9jkzjM6x9AtztM",
    "titulo": "O Avesso Dos Ponteiros"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 45,
    "spotifyId": "6TAnUMIknrI4vIJHXuJPRb",
    "titulo": "Perder Tempo Com Você"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 46,
    "spotifyId": "2Qh7jAuTOWXcVkk002gMrE",
    "titulo": "Retrato Em Branco E Preto"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 47,
    "spotifyId": "1cq4VSZilVlv1oSgrO2Tq5",
    "titulo": "O Melhor De Mim"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 48,
    "spotifyId": "36emRMHsOAcfvBvHTjuOuv",
    "titulo": "Agora Ou Nunca"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina",
      "Milton Guedes"
    ],
    "index": 49,
    "spotifyId": "7dgwx3ft16tAzN3HKpMgSc",
    "titulo": "Tudo Bem"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 50,
    "spotifyId": "1Gb87NbAl8JSzgHwe32RxD",
    "titulo": "A Canção Tocou na Hora Errada"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 51,
    "spotifyId": "7ggsCVhoqrOJOyDXDvWBlB",
    "titulo": "Garganta"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 52,
    "spotifyId": "2zuIYWW6mZXhB1CEHk6T2l",
    "titulo": "Armazém"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 53,
    "spotifyId": "08ZEi8ylglOFwOZOAwDPEe",
    "titulo": "Trancado"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 54,
    "spotifyId": "6TSlu4FAsiLN7wwjvq8BP0",
    "titulo": "Nada Pra Mim"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 55,
    "spotifyId": "0SUeariIBntuFSjc40eDJu",
    "titulo": "Alguém Me Disse"
  },
  {
    "album": "Ana Carolina",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 56,
    "spotifyId": "6eotWWEnZVmExKoz1DKHyj",
    "titulo": "Tô Saindo"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 57,
    "spotifyId": "2CPh6Ara4JRK5cH93QrAnR",
    "titulo": "Nada Te Faltará"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 58,
    "spotifyId": "6dJdTaUzjpB0Ik07N7EphE",
    "titulo": "Tolerância"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 59,
    "spotifyId": "0lDlal4oAE0Uc3U4k0eE8J",
    "titulo": "Ruas de Outono"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 60,
    "spotifyId": "3HLnb1B8dGQwJLPNfVIiqX",
    "titulo": "Aqui"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 61,
    "spotifyId": "7LRIFDoKVHTUDKpgZXoEMd",
    "titulo": "Rosas"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 62,
    "spotifyId": "29OdXAcCypWsns5JfSBFpB",
    "titulo": "Um Edifício no Meio do Mundo"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 63,
    "spotifyId": "5Gn03bGJmBb0lx3cQvAlja",
    "titulo": "Vai"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 64,
    "spotifyId": "0zQfbMbFcKjVWV426yXO5F",
    "titulo": "O Cristo De Madeira"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 65,
    "spotifyId": "1eG9ihI0kvYy8LdbKTSN5B",
    "titulo": "Eu Comi a Madona"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 66,
    "spotifyId": "44D9t8NUS9yUq0AoWiPr4B",
    "titulo": "1.100,00 (Nega Marrenta)"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 67,
    "spotifyId": "7JebZj9p2L713th5B3DOft",
    "titulo": "Chevette"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 68,
    "spotifyId": "5lzsJEP1GSf0tsNYV1RDpX",
    "titulo": "Notícias Populares"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 69,
    "spotifyId": "0WJwxUPAc5sJczOM3UWXSb",
    "titulo": "La Critique (Instrumental)"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 70,
    "spotifyId": "1gaTdimQRfXwLxUdI0xT2q",
    "titulo": "Então Vá Se Perder"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 71,
    "spotifyId": "2ZqMXGaG6GGArJXLTHwze0",
    "titulo": "Carvão"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 72,
    "spotifyId": "5G1iYYDeu41tfsi6mGi3nv",
    "titulo": "Manhã"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 73,
    "spotifyId": "0CJpBIyPsUeVRNEYn1IAmO",
    "titulo": "Homens e Mulheres"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 74,
    "spotifyId": "6bFmseJnubiUt3UyI1urCZ",
    "titulo": "Corredores"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 75,
    "spotifyId": "5UiacQo0rwUCt0kuE4pceW",
    "titulo": "Sen.Ti.Mentos (Instrumental)"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 76,
    "spotifyId": "3peo6veBWKpehRY3pCOvZ2",
    "titulo": "Cantinho"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 77,
    "spotifyId": "4hPBVkIKQwMEr9bry4KWWE",
    "titulo": "Eu Não Paro"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 78,
    "spotifyId": "0DrWuZTrdOofy1WKetZ2Wf",
    "titulo": "Claridade"
  },
  {
    "album": "Dois Quartos",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 79,
    "spotifyId": "3KgEEjqxc3QqbN0opmQuf8",
    "titulo": "Eu Comi A Madona (Remix)"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 80,
    "spotifyId": "5uBgLKQhPWkyBtuZPMFLnW",
    "titulo": "Pole Dance - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 81,
    "spotifyId": "0OA7nGEJuH2tZoPrENplkz",
    "titulo": "Esperta"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 82,
    "spotifyId": "2r3plmPjGUfoxiOg9Wi5Be",
    "titulo": "Sangrando - Bônus"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 83,
    "spotifyId": "4vOaqCQXaSAS3eAyLELO7f",
    "titulo": "Coisas - Bônus"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 84,
    "spotifyId": "5PJP3CPkKj3W8B8CGi1Qlm",
    "titulo": "É Isso Aí (The Blower's Daughter) - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 85,
    "spotifyId": "1o2n6GuSIGwyjlrwByp9rc",
    "titulo": "Elevador (Livro de Esquecimento) - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 86,
    "spotifyId": "3PafB65rTH5gfAkV1364q4",
    "titulo": "Garganta - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 87,
    "spotifyId": "7p68I0Kkmcs53fYGaOL8Os",
    "titulo": "Rosas - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 88,
    "spotifyId": "5gGgSvrMtbT4HxF9nfG1pk",
    "titulo": "Cabide - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 89,
    "spotifyId": "3Yy73nvFoUG0ql7k20tcVY",
    "titulo": "Pelo iPhone - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 90,
    "spotifyId": "3dQVtBYtxyIh5yydT4DeiS",
    "titulo": "Piriguete / Você Não Vale Nada - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina",
      "Chico Buarque"
    ],
    "index": 91,
    "spotifyId": "1jHQKlif1dLlxRdixIbDV1",
    "titulo": "Resposta da Rita (feat. Chico Buarque) - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 92,
    "spotifyId": "716lRhM77onoBdidFnnGht",
    "titulo": "Problemas / Quem de Nós Dois (La Mia Storia Tra Le Dita)"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 93,
    "spotifyId": "6dlkBl6k4NH8lpcd8k9Gf0",
    "titulo": "Eu Sei Que Vou Te Amar - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 94,
    "spotifyId": "3Z6IvE9h4ymcZpeSnkxMPB",
    "titulo": "Coração Selvagem - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 95,
    "spotifyId": "6K3EUCw4BkJr9yrfKHDlHV",
    "titulo": "Mais Forte - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 96,
    "spotifyId": "1Fo8OEy53rTXFT6WjI98uI",
    "titulo": "Dez Minutos - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 97,
    "spotifyId": "1lcvdcs54SxYkZ52GV76hD",
    "titulo": "Un Sueño Bajo El Agua - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 98,
    "spotifyId": "6tunUlucfQ50QNVO1buCWT",
    "titulo": "Combustível - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 99,
    "spotifyId": "5UOy4mQIddMQrhpS3pXc9V",
    "titulo": "Nua / Pra Rua Me Levar / Uma Louca Tempestade - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 100,
    "spotifyId": "2Nb7qwV3UZPGU65jBVoECx",
    "titulo": "Libido / Eu Comi a Madona - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 101,
    "spotifyId": "470dqshCthRnLZLqVTkR4J",
    "titulo": "Fire - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 102,
    "spotifyId": "1zxi8saSvDpl6T167u8aXt",
    "titulo": "Esperta / Você Não Sabe / Cantinho - Ao Vivo"
  },
  {
    "album": "#AC Ao Vivo (Deluxe)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 103,
    "spotifyId": "0frR37x7ysovc04RfUxkyQ",
    "titulo": "Bang Bang 2 - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 104,
    "spotifyId": "7xHkTuqarDOFXRNV23nYWJ",
    "titulo": "Problemas - (Bonus Track) [Ao Vivo]"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 105,
    "spotifyId": "2lcm865t6juYk9nAULTGkE",
    "titulo": "Stereo - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 106,
    "spotifyId": "0rVlVImg1K2iEQruyTf50F",
    "titulo": "Força Estranha - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 107,
    "spotifyId": "2Lwb7R488jv4TVLKXTaPkP",
    "titulo": "Claridade / Só fala em mim / Pra rua me levar - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 108,
    "spotifyId": "5rLDFJmmyX3lstgmb7ozb5",
    "titulo": "Simplesmente Aconteceu - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 109,
    "spotifyId": "2yxaRa1WkCQdJ45yhx0veD",
    "titulo": "Pra Tomar Três - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 110,
    "spotifyId": "21PaLVKSuUnhDUcFiEogTM",
    "titulo": "Feriado / O Amor é um Rock / Entre Tapas e Beijos - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 111,
    "spotifyId": "0ldoIpzwIS3Lgd5O2kYM36",
    "titulo": "O Violão - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 112,
    "spotifyId": "1jqmEHgMu215vSbQdHdxns",
    "titulo": "Azul - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 113,
    "spotifyId": "2OjIms0BaJxchiKhJUAuTR",
    "titulo": "Todas Elas Juntas Num Só Ser - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 114,
    "spotifyId": "5aVZ7K10idjfbD5QYfEKme",
    "titulo": "Carvão - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 115,
    "spotifyId": "3z6XxH5eIAxB0UIMS2lIQf",
    "titulo": "Você Não Sabe - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 116,
    "spotifyId": "6OXI5dQVXK3qOX8SCitpIi",
    "titulo": "Alguém Me Disse - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 117,
    "spotifyId": "0ZiBFrxM4bodigck8RzXZ4",
    "titulo": "As Telas e Elas - Ao Vivo"
  },
  {
    "album": "Ensaio de Cores",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 118,
    "spotifyId": "1cIp7C4qNh3n63Qwo4qRfa",
    "titulo": "Rai das Cores - Ao Vivo"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 119,
    "spotifyId": "5mNtIExGXAg7ryEj5zMb7Y",
    "titulo": "Eu Sei Que Vou Te Amar"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina",
      "Guinga"
    ],
    "index": 120,
    "spotifyId": "10NU1eBKjcodTBH9QaERes",
    "titulo": "Leveza de Valsa (feat. Guinga) - Bonus Track"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 121,
    "spotifyId": "7H4ZSzKCFLxf508utxV5OU",
    "titulo": "Luz Acesa - Bonus Track"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina",
      "Chiara Civello"
    ],
    "index": 122,
    "spotifyId": "420fZtEgrwK5BejvcG7kqi",
    "titulo": "Un Sueño Bajo el Agua (feat. Chiara Civello)"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 123,
    "spotifyId": "2KbkHKthIrnQ7XxdTGKFps",
    "titulo": "Canção Pra Ti"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 124,
    "spotifyId": "5m1tkcHHeeYCrP6tR3HhVr",
    "titulo": "Bang Bang 2"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 125,
    "spotifyId": "0rRPs1tIy9jNcVOh2mYbxj",
    "titulo": "Mais Forte"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 126,
    "spotifyId": "01R29BmIU7w18l7U2W5DcC",
    "titulo": "Pelo iPhone"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina",
      "Chico Buarque"
    ],
    "index": 127,
    "spotifyId": "0KUQNprkDtwHrkQ286y9Do",
    "titulo": "Resposta da Rita (feat. Chico Buarque)"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 128,
    "spotifyId": "6S2H0C4Isna0gjUSl6OUIz",
    "titulo": "Combustível"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 129,
    "spotifyId": "2LkVAtezMZW9h1u0JnwXX3",
    "titulo": "Libido"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 130,
    "spotifyId": "5eDlcCGJV6TfOedQEqJffP",
    "titulo": "Esperta"
  },
  {
    "album": "#AC",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 131,
    "spotifyId": "30AGoYyi07zX5B3eQnk0rl",
    "titulo": "Pole Dance"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 132,
    "spotifyId": "4dmCdzIu5YKmv17RWflEna",
    "titulo": "Heroína e Vilã - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 133,
    "spotifyId": "22aWX1IFLiVdrOy9HdInsJ",
    "titulo": "8 Estórias - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 134,
    "spotifyId": "26mwMGDbUiSXSbd6shD851",
    "titulo": "Torpedo - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 135,
    "spotifyId": "65GmViOSKcP7jK0wNqRs8r",
    "titulo": "Tá Rindo, é? - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 136,
    "spotifyId": "6TldODHKdC8omIig5giYEd",
    "titulo": "Ruas de Outono - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 137,
    "spotifyId": "3yhoByY1s5jtNFthSTJ1o9",
    "titulo": "Mais Que a Mim - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 138,
    "spotifyId": "4BXKKcyyNxHNQ9vsYNtTz4",
    "titulo": "Homens e Mulheres - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 139,
    "spotifyId": "4fqGSfsFdSVhB31EUVZcSf",
    "titulo": "Eu Que Não Sei Quase Nada do Mar - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 140,
    "spotifyId": "529ZHQL2mmbie3LokGYI3q",
    "titulo": "Milhares de Sambas - Ao Vivo"
  },
  {
    "album": "Ana Car9lina+um",
    "artistas": [
      "Ana Carolina",
      "Luiz Melodia"
    ],
    "index": 141,
    "spotifyId": "7zwsfvjz48mGsxRBivx4lS",
    "titulo": "Cabide (feat. Luiz Melodia) - Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 142,
    "spotifyId": "401q6bNupTUDX6Gk0Vcfmd",
    "titulo": "Vai - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 143,
    "spotifyId": "4NySkcWrZIqu0SmXfrnSD5",
    "titulo": "Um Edifício no Meio do Mundo - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 144,
    "spotifyId": "3Yx26WDHeIePDco2LZxiR0",
    "titulo": "Cabide - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 145,
    "spotifyId": "68xSsmlsezNpQxONQYGG2F",
    "titulo": "Milhares de Sambas - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 146,
    "spotifyId": "5oX4zkLXrYHxjmm1Jz3f5W",
    "titulo": "Aqui / Quem de Nós Dois (La Mia Storia Tra Le Dita) - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 147,
    "spotifyId": "5PK6ziOapmPBltvfhufPPS",
    "titulo": "Ruas de Outono - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 148,
    "spotifyId": "1gBvmCU36IFOCsUzw6tsJX",
    "titulo": "É Isso Aí (The Blower's Daughter) - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 149,
    "spotifyId": "49WnuMB2PTYYDkxHoopTmA",
    "titulo": "O Cristo de Madeira - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 150,
    "spotifyId": "6PhEnGasrWNQJybpPGHscP",
    "titulo": "Nada Te Faltará - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 151,
    "spotifyId": "4d1U64GigNyE1K2mK0WKaB",
    "titulo": "Eu Que Não Sei Quase Nada do Mar - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 152,
    "spotifyId": "1v5b1DxgRV7AWJaBNSwlDS",
    "titulo": "Carvão - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 153,
    "spotifyId": "25D6SLOHQTvUB89Q281nFC",
    "titulo": "Tolerância - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 154,
    "spotifyId": "6rXzGAjv4837NlRZmU5znr",
    "titulo": "Rosas - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 155,
    "spotifyId": "75Xw6xENMmTqns8cTGEZtQ",
    "titulo": "Eu Comi a Madona - Multishow Ao Vivo"
  },
  {
    "album": "Multishow Ao Vivo Ana Carolina \"Dois Quartos\"",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 156,
    "spotifyId": "2S8af9XtRC3tt7s3W118ln",
    "titulo": "Cantinho / Fever / Eu Sou Melhor Que Você - Multishow Ao Vivo"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 157,
    "spotifyId": "2IS5g3Gz9JconlR4YTujM5",
    "titulo": "O Que é Que Há?"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 158,
    "spotifyId": "6uiF6UbsVRaWMobeNVe2fo",
    "titulo": "Com Vista Para Amar"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 159,
    "spotifyId": "3rj5bbWPDGr8l4aQa8ovmN",
    "titulo": "Outra Vez Você"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 160,
    "spotifyId": "2LlOM9pVQTEBt9oWgHhmbZ",
    "titulo": "Dias Roubados"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 161,
    "spotifyId": "4JdvxymmL5A6fgpyEgkfZR",
    "titulo": "Tudo e Mais Um Pouco"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 162,
    "spotifyId": "5THyr4nuCxZhHl8Y5WoXsj",
    "titulo": "Canção Antiga"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 163,
    "spotifyId": "0RzxQkG8PGDLTjqPe6yWjg",
    "titulo": "1296 Mulheres"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina",
      "Elza Soares"
    ],
    "index": 164,
    "spotifyId": "5i8p4Oar6tAWEWyOaAtUEJ",
    "titulo": "Da Vila Vintém Ao Fim do Mundo (feat. Elza Soares)"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 165,
    "spotifyId": "15wTuFD6owZUvRNZ1CyBdg",
    "titulo": "O Tempo se Transforma em Memória"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 166,
    "spotifyId": "3ovmrHRDBkBdlkFgyyZQSl",
    "titulo": "Fogueira em Alto Mar"
  },
  {
    "album": "Fogueira em Alto Mar",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 167,
    "spotifyId": "1cx7W5PShF4nWGQ5T9TEID",
    "titulo": "Não Tem no Mapa"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 168,
    "spotifyId": "16wbN9W88hZ9d3UjzImrMm",
    "titulo": "Traição"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 169,
    "spotifyId": "4UQTCxgafMnqHmJr5IXDvE",
    "titulo": "Torpedo"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 170,
    "spotifyId": "0Jl8dk4Oy2MNjlGiwlGXnS",
    "titulo": "Resta"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 171,
    "spotifyId": "1q3DtCcVHzuk0xiU7MHqGS",
    "titulo": "8 Estórias"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 172,
    "spotifyId": "10uka1Nhn0hiFuJo8dNl2y",
    "titulo": "Era"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina",
      "John Legend"
    ],
    "index": 173,
    "spotifyId": "3GoXuabQLaRjOAetIsPsmw",
    "titulo": "Entreolhares (The Way You're Looking at Me) (feat. John Legend)"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 174,
    "spotifyId": "4duJ74llRlWvC0c8pZuTYs",
    "titulo": "Tá Rindo, é?"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 175,
    "spotifyId": "7a97bVgkbbENI6bLgi5VmW",
    "titulo": "Dentro"
  },
  {
    "album": "Nove",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 176,
    "spotifyId": "1CcehQY9msX190msXyBIxo",
    "titulo": "10 Minutos (Dimmi Perché)"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 177,
    "spotifyId": "3WsvNrgk9gA0RkNF6DQ5JU",
    "titulo": "Malandragem - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 178,
    "spotifyId": "77FC33UKCnwHjESX3BC07u",
    "titulo": "Gatas Extraordinárias - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 179,
    "spotifyId": "6t0XQiOcqlv8xGATIXkt5n",
    "titulo": "Relicário - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 180,
    "spotifyId": "6ODo3hK287KbafOrrOYZPM",
    "titulo": "O Segundo Sol - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 1 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 181,
    "spotifyId": "1wpgey8upO8HoGdFbEzGJd",
    "titulo": "All Star - Ao Vivo"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 182,
    "spotifyId": "7v6ELTg9rth4P4ZJWZDeoh",
    "titulo": "Canção Antiga"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 183,
    "spotifyId": "4PUbenUmRsBHzXX0uRG7er",
    "titulo": "1296 Mulheres"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina",
      "Elza Soares"
    ],
    "index": 184,
    "spotifyId": "3GhGWBElw2DMPvcOyMxmJt",
    "titulo": "Da Vila Vintém Ao Fim do Mundo (feat. Elza Soares)"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 185,
    "spotifyId": "0BumkbMOjaGROaVCR2I4An",
    "titulo": "O Tempo se Transforma em Memória"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 186,
    "spotifyId": "1bNt0KCVOyAB5e6jRiVSHX",
    "titulo": "Fogueira em Alto Mar"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 1",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 187,
    "spotifyId": "35sFWnnQpeFQMq24urNxbQ",
    "titulo": "Não Tem no Mapa"
  },
  {
    "album": "Malandragem (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 188,
    "spotifyId": "2AnFF6VJTemksxNOuqrtV4",
    "titulo": "Malandragem - Ao Vivo"
  },
  {
    "album": "Mais uma Vez (Nós Dois)",
    "artistas": [
      "Ana Carolina",
      "Seu Jorge"
    ],
    "index": 189,
    "spotifyId": "5BmGmbhJSCvroT36nj1J5B",
    "titulo": "Mais uma Vez (Nós Dois)"
  },
  {
    "album": "Problemas [(Bonus Track) [Ao Vivo]]",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 190,
    "spotifyId": "60FqAhJ7p2hcXhOR1zbDUy",
    "titulo": "Problemas - (Bonus Track) [Ao Vivo]"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 3",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 191,
    "spotifyId": "4OBSqOoBaEp2bVyuHNyC8v",
    "titulo": "Com Vista Para Amar"
  },
  {
    "album": "Fogueira em Alto Mar, Vol. 3",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 192,
    "spotifyId": "3tUztDyMQvNSlY0eH7cLFv",
    "titulo": "O Que é Que Há?"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 193,
    "spotifyId": "5kknr0Tyal1aGQGZokoDxv",
    "titulo": "Notícias Populares"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 194,
    "spotifyId": "3z4a3HzSy6QcbkjkHaa63u",
    "titulo": "Chevette"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 195,
    "spotifyId": "7w50YeX7TTDcnsYeWcvtQd",
    "titulo": "1.100,00 (Nega Marrenta)"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 196,
    "spotifyId": "3MMz5ZuXJb9k1ln7CG9s5Q",
    "titulo": "Eu Comi a Madona"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 197,
    "spotifyId": "7AGvAdQZfhSLB6RVZSaiRh",
    "titulo": "O Cristo De Madeira"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 198,
    "spotifyId": "1lZVACRnco8p8k1X1iSVgD",
    "titulo": "Vai"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 199,
    "spotifyId": "3v0pC91WwN2rT0sVspHH9t",
    "titulo": "Um Edifício no Meio do Mundo"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 200,
    "spotifyId": "2y5puTU1gNc16fa8MFsvH8",
    "titulo": "Rosas"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 201,
    "spotifyId": "1kTfefAUqW9cpToLN8RMbp",
    "titulo": "Aqui"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 202,
    "spotifyId": "40zXnfwbOjkpc4Lm7wtnMG",
    "titulo": "Ruas de Outono"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 203,
    "spotifyId": "5fhwz5uikAVUGu7euKowlW",
    "titulo": "Tolerância"
  },
  {
    "album": "Quarto",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 204,
    "spotifyId": "5amijKz6oO8jpxjBEEorsl",
    "titulo": "Nada Te Faltará"
  },
  {
    "album": "Noite Preta Ao Vivo",
    "artistas": [
      "Preta Gil",
      "Ana Carolina"
    ],
    "index": 205,
    "spotifyId": "5338vnPnf5fzJDyiWulX9Y",
    "titulo": "Sinais de Fogo - Ao Vivo"
  },
  {
    "album": "Canzoni",
    "artistas": [
      "Chiara Civello",
      "Ana Carolina"
    ],
    "index": 206,
    "spotifyId": "50XDXUhJ91S6cQKblDyxTY",
    "titulo": "E penso a te"
  },
  {
    "album": "Chiara Civello 7752",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 207,
    "spotifyId": "3eq4ncW2xC74TteeoSZ7Ec",
    "titulo": "Resta"
  },
  {
    "album": "Som (Ruído Branco)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 208,
    "spotifyId": "6TneeBKCVGAWtYYl6uggvP",
    "titulo": "A Pele"
  },
  {
    "album": "2 Bicudos (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 209,
    "spotifyId": "6gguCVwEt1SqXWfEMZL9Gg",
    "titulo": "2 Bicudos - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 210,
    "spotifyId": "1dd22aQgBpJYagghwioZAD",
    "titulo": "Todas As Mulheres do Mundo - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 211,
    "spotifyId": "4k7oNz2BFbHFMuGjXfs6o7",
    "titulo": "E.C.T. - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 212,
    "spotifyId": "1o0bCEQawLfZBTHuP6a88M",
    "titulo": "Maluca - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 213,
    "spotifyId": "02AV2ZWLY5Ueex9VU2gtks",
    "titulo": "Partido Alto - Ao Vivo"
  },
  {
    "album": "Ana Canta Cássia - Vol. 2 (Ao Vivo)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 214,
    "spotifyId": "1atJzMPAgiVdd5AqvC5GCa",
    "titulo": "Milagreiro - Ao Vivo"
  },
  {
    "album": "Ainda Já (Sua)",
    "artistas": [
      "Ana Carolina"
    ],
    "index": 215,
    "spotifyId": "67OqoQE4bMypl1Xe1WzQmE",
    "titulo": "Ainda Já (Sua)"
  },
  {
    "index": 216,
    "spotifyId": "ana-local-namoradinha-um-amigo-meu",
    "titulo": "Namoradinha de Um Amigo Meu",
    "artistas": [
      "Chiara Civello",
      "Ana Carolina"
    ],
    "album": ""
  }
];

// Playlist exclusiva do modo Ludmilla:
// https://open.spotify.com/playlist/44xYNTfmisUBtQ1oYuEWYe
const PLAYLIST_LUDMILLA = [
  {
    "album": "Numanice #2",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 1,
    "spotifyId": "1FGRA5pMtBqJLNAaSBia2x",
    "titulo": "Maldivas"
  },
  {
    "album": "A danada sou eu",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 2,
    "spotifyId": "25SL3ZSbEGtu4oU14xllMQ",
    "titulo": "Bom"
  },
  {
    "album": "Verdinha",
    "artistas": [
      "LUDMILLA",
      "Topo La Maskara",
      "Walshy Fire"
    ],
    "index": 3,
    "spotifyId": "2RMOwSvOGQyy985Vx4VSGQ",
    "titulo": "Verdinha"
  },
  {
    "album": "Socadona (feat. Mr. Vegas)",
    "artistas": [
      "LUDMILLA",
      "Mariah Angeliq",
      "Topo La Maskara",
      "Mr. Vegas"
    ],
    "index": 4,
    "spotifyId": "5jYEiTNR3FQXFouTX7Ju0N",
    "titulo": "Socadona"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Péricles"
    ],
    "index": 5,
    "spotifyId": "5Uq1ta57YcmShqMyPmVyyO",
    "titulo": "Sinais de fogo - Ao Vivo"
  },
  {
    "album": "VILÃ",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 6,
    "spotifyId": "2D1rmVTeaZrr5Ipow29t4b",
    "titulo": "Sintomas de Prazer"
  },
  {
    "album": "Hoje",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 7,
    "spotifyId": "2rC41weP3q2jhM0PDYOZGo",
    "titulo": "Sem querer"
  },
  {
    "album": "Macetando",
    "artistas": [
      "Ivete Sangalo",
      "LUDMILLA"
    ],
    "index": 8,
    "spotifyId": "6eJUG282cUKuIoa72sEsqO",
    "titulo": "Macetando"
  },
  {
    "album": "Hoje",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 9,
    "spotifyId": "321oxaH6WpQNyDToySTkRF",
    "titulo": "Te ensinei certin"
  },
  {
    "album": "A danada sou eu",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 10,
    "spotifyId": "1Tn0msQvQMbD6woO9VnEG3",
    "titulo": "Sou eu"
  },
  {
    "album": "Hoje",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 11,
    "spotifyId": "3WLAcpFwRmC98f5UGRXAkI",
    "titulo": "Hoje"
  },
  {
    "album": "Numanice Lud Session - Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Gloria Groove"
    ],
    "index": 12,
    "spotifyId": "3hXCANK2ys6D2HZE3kuDfz",
    "titulo": "Numanice Lud Session - Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Sorriso Maroto"
    ],
    "index": 13,
    "spotifyId": "19IIiuViFv6TsPDXV2ZWB3",
    "titulo": "Não É Por Maldade - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 14,
    "spotifyId": "3B7aR5W9WNzo9FeIsdGxI1",
    "titulo": "Ela Não - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Tá Na Mente"
    ],
    "index": 15,
    "spotifyId": "1Y7ShD0kGmHPwJTWOuBlHK",
    "titulo": "Dorme com Deus / Fica - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 16,
    "spotifyId": "7gGCGzNFmW0xjhA8dA3Y5w",
    "titulo": "Mande Um Sinal / Sinais - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 17,
    "spotifyId": "67RqkhyO4AI7RbgjTPNQF7",
    "titulo": "Eu Te Uso e Sumo / Não Seria Justo / Nem Pensar - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 18,
    "spotifyId": "6NHjL6DkSsaGjFz2KJN1q2",
    "titulo": "Cheiro Bom do Seu Cabelo - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Delacruz"
    ],
    "index": 19,
    "spotifyId": "58RnbwfvEYB8VS5JHrUwc8",
    "titulo": "Cigana - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 20,
    "spotifyId": "7M1YydD0jJ9teSC62fhfY9",
    "titulo": "Um Pôr do Sol na Praia - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Alcione"
    ],
    "index": 21,
    "spotifyId": "2hy9PyCleGC4HRe5MsPwfF",
    "titulo": "Faz uma Loucura por mim / Você me vira a cabeça - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Belo"
    ],
    "index": 22,
    "spotifyId": "6Q3JFwQ0EoAO7gosrWI3na",
    "titulo": "Não vá me enganar - Ao Vivo"
  },
  {
    "album": "Maliciosa (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 23,
    "spotifyId": "3vCH7bgO37Cx4dOIUlX9sv",
    "titulo": "Maliciosa - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 24,
    "spotifyId": "1CehxijvhSszrBS3FuCxBw",
    "titulo": "Desse Jeito é Ruim Pra Mim / Perfume / Antes de Dizer Adeus - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Thiaguinho"
    ],
    "index": 25,
    "spotifyId": "7vzfaxzAl0YNLBp2xA7T0b",
    "titulo": "Amor Difícil - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 26,
    "spotifyId": "0bkGRThWulixJ3hBPr5nlH",
    "titulo": "Amor difícil - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Orochi"
    ],
    "index": 27,
    "spotifyId": "5NnXWsezmRvC5oxhguptYl",
    "titulo": "I Love You Too - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 28,
    "spotifyId": "4J6Mo4lgXcVirTQzOVHQyx",
    "titulo": "Meu desapego - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 29,
    "spotifyId": "07lEHXZYuhl0KpmXOYvwpc",
    "titulo": "Eu estive Aqui - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 30,
    "spotifyId": "4KjHcvzmFeYo2ebthgKoJk",
    "titulo": "Por causa de você / Baby / 1 minuto - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Di Propósito"
    ],
    "index": 31,
    "spotifyId": "1zl7WDDCPttJSLWEhFJG3r",
    "titulo": "Te Amar Demais / Best Part - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Júlio Sereno"
    ],
    "index": 32,
    "spotifyId": "6zR192lueVX45AwK5PLB0M",
    "titulo": "Teu Segredo - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 33,
    "spotifyId": "6c2GVdk6HbWH3u6Cb5jDtK",
    "titulo": "212 - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo) - Deluxe",
    "artistas": [
      "LUDMILLA",
      "Belo"
    ],
    "index": 34,
    "spotifyId": "6Eu4upXqRZxGTJref5U5c4",
    "titulo": "Perfume - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 35,
    "spotifyId": "7r1VxuU92S2GKWvEX6ivqF",
    "titulo": "Você Não Sabe o Que é Amor - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 36,
    "spotifyId": "7D9sdH2LEs3To9nMZnLXUt",
    "titulo": "Pique Djavan - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Grupo Menos É Mais"
    ],
    "index": 37,
    "spotifyId": "1J8rfA9BdhlpzNSKKePf3U",
    "titulo": "Destilado - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 38,
    "spotifyId": "4BB3adxRhL1lTK5WpB1eo1",
    "titulo": "Se Não Chorar com Pagode - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Vitinho"
    ],
    "index": 39,
    "spotifyId": "6gu8xo31Bsg22KhwTLJsmJ",
    "titulo": "1% - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 40,
    "spotifyId": "6U3kssAL4oPYbkYFbkFDJp",
    "titulo": "A Preta Venceu - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Mari Fernandez"
    ],
    "index": 41,
    "spotifyId": "2IGh6DnMiX408xwoJP9Lmb",
    "titulo": "Falta de Mim - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 42,
    "spotifyId": "55nT7v7CtFduUP7A1CEZvA",
    "titulo": "Baile Charme - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Caio Luccas"
    ],
    "index": 43,
    "spotifyId": "7zD6UkCZatI0QhTr3Q9c59",
    "titulo": "Saudade da Gente - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 44,
    "spotifyId": "0b9Hc2wjFYkH0qSpNQWXs7",
    "titulo": "Diz pra Mim / Preciso Desabafar - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Belo"
    ],
    "index": 45,
    "spotifyId": "0raxK8ujnzkC2Ra4Np24n5",
    "titulo": "26 de Dezembro - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 46,
    "spotifyId": "2EjNAvGjxPi6qY5FZfF7UJ",
    "titulo": "Era Tão Bom (So Sick) - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Veigh"
    ],
    "index": 47,
    "spotifyId": "28uWqEWQVNTJ7Y3E1cSVAp",
    "titulo": "Sim ou Não - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 48,
    "spotifyId": "2L28P73JhKFGhprPlCseiR",
    "titulo": "Espelho - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Carol Biazin"
    ],
    "index": 49,
    "spotifyId": "3iGwvlMJT1GAH9WcRKHwMi",
    "titulo": "Raio X - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 50,
    "spotifyId": "0B0OMXrlNj44fJ5PcdjLNG",
    "titulo": "Clichê / Cedo ou Tarde - Ao Vivo"
  },
  {
    "album": "Numanice #3 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 51,
    "spotifyId": "5nikCkO9Yba0o4VktrvUEo",
    "titulo": "Ela - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Delacruz"
    ],
    "index": 52,
    "spotifyId": "3Z04c8GQ4li07j3bEi3LNQ",
    "titulo": "Maria Joana (Remix) - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 53,
    "spotifyId": "3ha8agv3lnJeRstkBVVcgP",
    "titulo": "Cabelo Cacheado - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 54,
    "spotifyId": "773yaWXesaznWwZBHY77Cq",
    "titulo": "Meu Homem é Seu Homem - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA",
      "Vou pro Sereno"
    ],
    "index": 55,
    "spotifyId": "19u7ucz8tazDZL1daf5y23",
    "titulo": "Tô de Boa - Ao vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 56,
    "spotifyId": "3ojDttdAfpz1UhnFVLSG3s",
    "titulo": "Fora de Si - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Gabby Moura"
    ],
    "index": 57,
    "spotifyId": "46WAJyMF8mNDcn9CcsTcmT",
    "titulo": "Me Arrepender - Ao Vivo"
  },
  {
    "album": "Piña Colada",
    "artistas": [
      "LUDMILLA",
      "Ryan Castro"
    ],
    "index": 58,
    "spotifyId": "07n2nBfbBGVpVLcbElqTOy",
    "titulo": "Piña Colada"
  },
  {
    "album": "Rainha da Favela",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 59,
    "spotifyId": "3vu864xi5Xis9VfOsJpmXu",
    "titulo": "Rainha da Favela"
  },
  {
    "album": "Fala Mal de Mim",
    "artistas": [
      "Mc Beyonce"
    ],
    "index": 60,
    "spotifyId": "217ovfMlicUkrnZsxtjPh2",
    "titulo": "Fala Mal de Mim"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 61,
    "spotifyId": "3qS3bQgpoJp3lLaa900gsu",
    "titulo": "Maldivas - Ao Vivo"
  },
  {
    "album": "Lud Session #4: Morrer de Viver / Saudade Daquilo / Tô Querendo Mais / Sem Filtro / Embrasa",
    "artistas": [
      "LUDMILLA",
      "IZA"
    ],
    "index": 62,
    "spotifyId": "3PXJxUzZ6dn9ykFBFMmOnL",
    "titulo": "Lud Session #4: Morrer de Viver / Saudade Daquilo / Tô Querendo Mais / Sem Filtro / Embrasa"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 63,
    "spotifyId": "7IaBxzOQ3uUvztZI4bposC",
    "titulo": "Mini Saia - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Prateado"
    ],
    "index": 64,
    "spotifyId": "2b5fnlLlr7R612vWpCEIcT",
    "titulo": "Nunca mais sofrer / Intriga da Oposição (feat. Prateado) - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA",
      "Marília Mendonça"
    ],
    "index": 65,
    "spotifyId": "3EM71GPnUGJ75uDhkH77pq",
    "titulo": "Insônia - Ao Vivo"
  },
  {
    "album": "Numanice #2 (Ao Vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 66,
    "spotifyId": "5lALwDKmNYMiLXbaNkSAuR",
    "titulo": "Quem é Você - Ao Vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 67,
    "spotifyId": "3dUt9ITdKYKP7dsjVoRrWM",
    "titulo": "Vai e Volta - Ao vivo"
  },
  {
    "album": "Numanice (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 68,
    "spotifyId": "6LgkG3CQKp6qejNMpOatMj",
    "titulo": "Sintoma de Amor / Depois do Amor / Agenda - Ao vivo"
  },
  {
    "album": "Vem amor",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 69,
    "spotifyId": "5rRi4RW8F99U24EAS2Cdte",
    "titulo": "Vem amor"
  },
  {
    "album": "Lud Session #2: Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano",
    "artistas": [
      "LUDMILLA",
      "Gloria Groove"
    ],
    "index": 70,
    "spotifyId": "7HYdckQd1guaSYVwMQ3SFL",
    "titulo": "Lud Session #2: Modo Avião / A Tua Voz / 700 Por Hora / Radar / A Música Mais Triste do Ano"
  },
  {
    "album": "Hello mundo (Ao vivo)",
    "artistas": [
      "LUDMILLA"
    ],
    "index": 71,
    "spotifyId": "4jQmLCQingMe51sGRrsqRg",
    "titulo": "Duas doses de saudade / Nunca me verá chorar / Não quero mais - Ao vivo"
  }
];

const PLAYLIST_LATINAS = [
  {
    "album": "Baila Morena (Reggaeton Mix)",
    "artistas": [
      "Hector & Tito",
      "Luny Tunes",
      "Noriega"
    ],
    "index": 1,
    "spotifyId": "4qbi9JDziBh3cxi9SFUbeu",
    "titulo": "Baila Morena (with Luny Tunes, Noriega) - Remix"
  },
  {
    "album": "Motivando A La Yal (Special Edition)",
    "artistas": [
      "Zion & Lennox",
      "Daddy Yankee"
    ],
    "index": 2,
    "spotifyId": "2r7mfzeXCzyrysTya4Onwk",
    "titulo": "Yo Voy (feat. Daddy Yankee)"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira",
      "El Cata"
    ],
    "index": 3,
    "spotifyId": "42k1KeBehAd83lrGt1okiC",
    "titulo": "Loca (feat. El Cata)"
  },
  {
    "album": "Barrio Fino (Bonus Track Version)",
    "artistas": [
      "Daddy Yankee"
    ],
    "index": 4,
    "spotifyId": "40a82F3K2UTbeoLlXXXZBd",
    "titulo": "Lo Que Pasó, Pasó"
  },
  {
    "album": "Barrio Fino (Bonus Track Version)",
    "artistas": [
      "Daddy Yankee"
    ],
    "index": 5,
    "spotifyId": "5YoITs1m0q8UOQ4AW7N5ga",
    "titulo": "Gasolina"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira",
      "Pitbull"
    ],
    "index": 6,
    "spotifyId": "2Xh7dyCHCErCv3PmdVEGw4",
    "titulo": "Rabiosa (feat. Pitbull)"
  },
  {
    "album": "El Dorado",
    "artistas": [
      "Shakira",
      "Maluma"
    ],
    "index": 7,
    "spotifyId": "6mICuAdrwEjh6Y6lroV2Kg",
    "titulo": "Chantaje (feat. Maluma)"
  },
  {
    "album": "SEX AND LOVE",
    "artistas": [
      "Enrique Iglesias",
      "Descemer Bueno",
      "Gente De Zona"
    ],
    "index": 8,
    "spotifyId": "6PSKhwo0mVcOdjUOhVJd5p",
    "titulo": "Bailando - Spanish Version"
  },
  {
    "album": "Sale el Sol",
    "artistas": [
      "Shakira"
    ],
    "index": 9,
    "spotifyId": "4zy1s9GnxWsNzZp1688euA",
    "titulo": "Addicted to You"
  },
  {
    "album": "Oral Fixation, Vol. 2 (Expanded Edition)",
    "artistas": [
      "Shakira",
      "Wyclef Jean"
    ],
    "index": 10,
    "spotifyId": "3d0WouFnFmr0K3kjeza3fF",
    "titulo": "Hips Don't Lie (feat. Wyclef Jean)"
  },
  {
    "album": "B'Day Deluxe Edition",
    "artistas": [
      "Beyoncé",
      "Shakira"
    ],
    "index": 11,
    "spotifyId": "76Y07hjDi7fjJnZKsQbEaF",
    "titulo": "Beautiful Liar"
  },
  {
    "album": "Dangerously In Love",
    "artistas": [
      "Beyoncé",
      "JAŸ-Z"
    ],
    "index": 12,
    "spotifyId": "0TwBtDAWpkpM3srywFVOV5",
    "titulo": "Crazy In Love (feat. JAŸ-Z)"
  },
  {
    "album": "Barrio Fino (Bonus Track Version)",
    "artistas": [
      "Daddy Yankee",
      "Wisin & Yandel"
    ],
    "index": 13,
    "spotifyId": "4CjuGBDMwSDpjzWtWINN5g",
    "titulo": "No Me Dejes Solo"
  },
  {
    "album": "Christina Aguilera (Expanded Edition)",
    "artistas": [
      "Christina Aguilera"
    ],
    "index": 14,
    "spotifyId": "11mwFrKvLXCbcVGNxffGyP",
    "titulo": "Genie In a Bottle"
  },
  {
    "album": "Loose",
    "artistas": [
      "Nelly Furtado",
      "Timbaland"
    ],
    "index": 15,
    "spotifyId": "2gam98EZKrF9XuOkU13ApN",
    "titulo": "Promiscuous"
  },
  {
    "album": "VIDA",
    "artistas": [
      "Luis Fonsi",
      "Daddy Yankee"
    ],
    "index": 16,
    "spotifyId": "6habFhsOp2NvshLv26DqMb",
    "titulo": "Despacito"
  },
  {
    "album": "VIDA",
    "artistas": [
      "Luis Fonsi",
      "Demi Lovato"
    ],
    "index": 17,
    "spotifyId": "0mlAOSILGRys2IbvyOT5VJ",
    "titulo": "Échame La Culpa"
  },
  {
    "album": "TQG",
    "artistas": [
      "KAROL G",
      "Shakira"
    ],
    "index": 18,
    "spotifyId": "2oMjKuKUEJFuLiVmTq7Vjx",
    "titulo": "TQG"
  },
  {
    "album": "Meet The Orphans",
    "artistas": [
      "Don Omar",
      "Lucenzo"
    ],
    "index": 19,
    "spotifyId": "2a1o6ZejUi8U3wzzOtCOYw",
    "titulo": "Danza Kuduro"
  },
  {
    "album": "Barrio Fino En Directo",
    "artistas": [
      "Daddy Yankee"
    ],
    "index": 20,
    "spotifyId": "4Xtlw8oXkIOvzV7crUBKeZ",
    "titulo": "Rompe"
  },
  {
    "album": "The Fast And The Furious: Tokyo Drift (Original Motion Picture Soundtrack)",
    "artistas": [
      "Don Omar",
      "Tego Calderón"
    ],
    "index": 21,
    "spotifyId": "4BxzNZpcm1j3JczZzGNe2k",
    "titulo": "Bandoleros"
  },
  {
    "album": "Lean",
    "artistas": [
      "Super Yei",
      "Sammy",
      "Jone Quest",
      "Towy",
      "Osquel",
      "Beltito",
      "Sammy & Falsetto"
    ],
    "index": 22,
    "spotifyId": "44BZWegR2TBYtgZdAHwaGH",
    "titulo": "Lean"
  }
];

const PLAYLIST_ITALIANAS = [
  {
    "album": "il filo rosso",
    "artistas": [
      "Alfa"
    ],
    "index": 1,
    "spotifyId": "2403gCM2RluhMgBc9TSwp7",
    "titulo": "il filo rosso"
  },
  {
    "album": "Resta in ascolto",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 2,
    "spotifyId": "20jSmgTANwSWWv9YfFdnNn",
    "titulo": "Vivimi"
  },
  {
    "album": "MATERIA (PELLE)",
    "artistas": [
      "Marco Mengoni"
    ],
    "index": 3,
    "spotifyId": "4eI0ncpnZuv4A3ssTJRSDY",
    "titulo": "Due Vite"
  },
  {
    "album": "Faccio un casino",
    "artistas": [
      "Coez"
    ],
    "index": 4,
    "spotifyId": "7MMJa7cjMadOSR6CFWvB1x",
    "titulo": "La musica non c'è"
  },
  {
    "album": "Splende",
    "artistas": [
      "Annalisa"
    ],
    "index": 5,
    "spotifyId": "7o34Mp5i0kSmAIJUCxVCFn",
    "titulo": "Ti sento"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello",
      "Gilberto Gil"
    ],
    "index": 6,
    "spotifyId": "5HggJVnKKG973g32kVbJjd",
    "titulo": "Io che non vivo senza te"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 7,
    "spotifyId": "5bxQHscWvyaQbm37igKP4K",
    "titulo": "La solitudine"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 8,
    "spotifyId": "4gXSgEQeLRwCmpa6foSspX",
    "titulo": "Strani amori"
  },
  {
    "album": "Canzoni",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 9,
    "spotifyId": "6wmeVtM2RqSHu8ClChANqx",
    "titulo": "Il mondo"
  },
  {
    "album": "Michele",
    "artistas": [
      "Michele"
    ],
    "index": 10,
    "spotifyId": "5EOoElhbLrRM4cWMTY8qgD",
    "titulo": "Se Mi Vuoi Lasciare"
  },
  {
    "album": "The Best Of...",
    "artistas": [
      "I Santo California"
    ],
    "index": 11,
    "spotifyId": "5H32Yi9LcptPfuDna0tkAI",
    "titulo": "Tornerò"
  },
  {
    "album": "Destinazione Paradiso",
    "artistas": [
      "Gianluca Grignani"
    ],
    "index": 12,
    "spotifyId": "5L4wJD8eyVhSrm4pbPuF2u",
    "titulo": "La Mia Storia Tra Le Dita"
  },
  {
    "album": "Peppino Di Capri In Tour",
    "artistas": [
      "Peppino Di Capri"
    ],
    "index": 13,
    "spotifyId": "6qnQkIIFPFyTAhoyIFBrcR",
    "titulo": "Champagne"
  },
  {
    "album": "Io E Te",
    "artistas": [
      "Gianna Nannini"
    ],
    "index": 14,
    "spotifyId": "7ae4OwBZnypVfR9WVesDaw",
    "titulo": "Ti voglio tanto bene"
  },
  {
    "album": "Dove c'è musica",
    "artistas": [
      "Eros Ramazzotti"
    ],
    "index": 15,
    "spotifyId": "0KligwQn4Iy344p2Q5m6k6",
    "titulo": "Più bella cosa"
  },
  {
    "album": "Le Cose In Comune",
    "artistas": [
      "Alfa"
    ],
    "index": 16,
    "spotifyId": "1rVPV7us0kW0mXBgoNKAYK",
    "titulo": "Le Cose In Comune"
  },
  {
    "album": "Melanchólia",
    "artistas": [
      "Matia Bazar"
    ],
    "index": 17,
    "spotifyId": "72BnKkKnrOeCDY9vy2avFk",
    "titulo": "Ti Sento"
  },
  {
    "album": "Felicità (Ariola Express Gold-Serie)",
    "artistas": [
      "Al Bano And Romina Power"
    ],
    "index": 18,
    "spotifyId": "7sXTcibuNYugjjYNfgf2kY",
    "titulo": "Felicità"
  },
  {
    "album": "Eclipse",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 19,
    "spotifyId": "6SHprqk9Cj4TaQF9p3K9s8",
    "titulo": "Parole parole"
  },
  {
    "album": "Profumo",
    "artistas": [
      "Gianna Nannini"
    ],
    "index": 20,
    "spotifyId": "3dZHWv3IsAQLzAr7FLJoJA",
    "titulo": "Bello e impossibile"
  },
  {
    "album": "Chansons",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 21,
    "spotifyId": "7F0saRUakwxLCEI1MvGVQZ",
    "titulo": "Col tempo sai"
  },
  {
    "album": "LA MIA STORIA TRA LE DITA / All Versions",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 22,
    "spotifyId": "31eAijCejvmhSeou6L40Su",
    "titulo": "LA MIA STORIA TRA LE DITA"
  },
  {
    "album": "Primavera in anticipo",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 23,
    "spotifyId": "6RDrpNxQIKp6LULdQWd2Vl",
    "titulo": "Invece no"
  },
  {
    "album": "Laura Pausini",
    "artistas": [
      "Laura Pausini"
    ],
    "index": 24,
    "spotifyId": "2I0mW1Ldu2FQ8qmhxqQjeA",
    "titulo": "Non c'è"
  },
  {
    "album": "LA DERNIÈRE CHANSON (DUE VITE) [con Julien Lieb]",
    "artistas": [
      "Laura Pausini",
      "Julien Lieb"
    ],
    "index": 25,
    "spotifyId": "1LfG7ZpbedtuXH1CKpyC97",
    "titulo": "LA DERNIÈRE CHANSON (DUE VITE) [con Julien Lieb]"
  },
  {
    "album": "Cinque Passi In Più",
    "artistas": [
      "Alessandra Amoroso"
    ],
    "index": 26,
    "spotifyId": "7lOlFOWWGQrZ6l1mgj45X6",
    "titulo": "Ti aspetto"
  },
  {
    "album": "L'Incredibile Peppino Di Capri",
    "artistas": [
      "Peppino Di Capri"
    ],
    "index": 27,
    "spotifyId": "0vRsoNQRw2HFYl8hXpVSJ1",
    "titulo": "Roberta"
  },
  {
    "album": "Made In Italy",
    "artistas": [
      "Pino Donaggio"
    ],
    "index": 28,
    "spotifyId": "0q9no3CEFBmMP925KJMxTu",
    "titulo": "Io Che Non Vivo - 2004 Remaster"
  },
  {
    "album": "L'ascolteranno gli americani",
    "artistas": [
      "Amedeo Minghi"
    ],
    "index": 29,
    "spotifyId": "24vLrig9eVLtfjD3vzYZ3Q",
    "titulo": "Cantare È D'Amore"
  }
];

const PLAYLIST_CHIARA_CIVELLO = [
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 1,
    "spotifyId": "1xYpW2C6sX1RY9iYPAx0mz",
    "titulo": "Via con me"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello",
      "Gilberto Gil"
    ],
    "index": 2,
    "spotifyId": "5HggJVnKKG973g32kVbJjd",
    "titulo": "Io che non vivo senza te"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 3,
    "spotifyId": "5LGUuaDqOQOB2mbRW2Prsg",
    "titulo": "Con una rosa"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 4,
    "spotifyId": "0XBheLbQP22VcatC0dMfPA",
    "titulo": "Que me importa el mundo"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 5,
    "spotifyId": "5rymvhZn6ZFzwSP3odjGRo",
    "titulo": "Va bene va bene così"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello",
      "Chico Buarque"
    ],
    "index": 6,
    "spotifyId": "4T8mrPnU2xqoGlC3oosvtC",
    "titulo": "Io che amo solo te"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 7,
    "spotifyId": "2Iu47PhuGpEodarMQ3YBOX",
    "titulo": "Never never never"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 8,
    "spotifyId": "02Rv7qkxG4SiKSQxxDuhLu",
    "titulo": "Metti una sera a cena"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 9,
    "spotifyId": "43PZqVk0yWOJQtWIm3ep3N",
    "titulo": "Una sigaretta"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 10,
    "spotifyId": "5QVTwHXseB5aHbURhfj8Ij",
    "titulo": "Fortissimo"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 11,
    "spotifyId": "4bOM1hCaAZJ7P6JCIla00W",
    "titulo": "Incantevole"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello",
      "Ana Carolina"
    ],
    "index": 12,
    "spotifyId": "0xc0EsnhWXBwVOoXqoMj2m",
    "titulo": "E penso a te"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 13,
    "spotifyId": "3RpW0kHH7NlcUvm7F8HHZF",
    "titulo": "Il mondo"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 14,
    "spotifyId": "2lRMPxNLgF7gFXBmRf5inl",
    "titulo": "Senza fine"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello",
      "Esperanza Spalding"
    ],
    "index": 15,
    "spotifyId": "3eDT6yOCZNKyaxLnnRPhox",
    "titulo": "I mulini dei ricordi - The windmills of your mind"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 16,
    "spotifyId": "43lC7VxkSMH8KBGXkXLONc",
    "titulo": "Mentre tutto scorre"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 17,
    "spotifyId": "2WOsTS8MLy3f9rjOIsg3tW",
    "titulo": "Arrivederci"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 18,
    "spotifyId": "0XzipnuSrizJLTMZ5zdAgV",
    "titulo": "Estate"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 19,
    "spotifyId": "2lQEplvuHSse59XtWe5oJu",
    "titulo": "Senza fine - English version"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 20,
    "spotifyId": "2Lctn0xxWEnXpAQV0ggSth",
    "titulo": "Roma nun fa la stupida stasera"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 21,
    "spotifyId": "1FwCl4EXDGiIG1MKbWrvnf",
    "titulo": "Hurry to me - Metti una sera a cena"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 22,
    "spotifyId": "4fkogoABTtsfBU7Ef5QhtA",
    "titulo": "You don't have to say you love me"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 23,
    "spotifyId": "5pYtV3Ys1KYurhcad7ivVh",
    "titulo": "Arrivederci - English version"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 24,
    "spotifyId": "3x3pBFa2vDFisoHeKlgwHU",
    "titulo": "Grande grande grande"
  },
  {
    "album": "Canzoni - Deluxe Edition",
    "artistas": [
      "Chiara Civello"
    ],
    "index": 25,
    "spotifyId": "3VURxM6HGGMnUGd0aiflou",
    "titulo": "Che m'importa del mondo"
  }
];

const PLAYLIST_DAMIANO_DAVID = [
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 1,
    "spotifyId": "36r085cj95tQcGaOoPLfc5",
    "titulo": "Born With a Broken Heart"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 2,
    "spotifyId": "7ETIZFr7163zFcz3RxKk5O",
    "titulo": "The First Time"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 3,
    "spotifyId": "71GABxN1QMc3RbtKqhYvXb",
    "titulo": "Next Summer"
  },
  {
    "album": "Nothing Breaks Like a Heart - Spotify Singles",
    "artistas": [
      "Damiano David"
    ],
    "index": 4,
    "spotifyId": "5szvpZOIMuzCrwNrRwnB9B",
    "titulo": "Nothing Breaks Like a Heart - Spotify Singles"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David",
      "Labrinth"
    ],
    "index": 5,
    "spotifyId": "0SXUbvefDczI7Z6hEhuJ8h",
    "titulo": "Silverlines - prod. Labrinth"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 6,
    "spotifyId": "5hYP7TDRmkJPrgYdIy500S",
    "titulo": "Zombie Lady"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David",
      "Suki Waterhouse"
    ],
    "index": 7,
    "spotifyId": "5Vsw47R4WEscYUBMaxR49w",
    "titulo": "The Bruise (feat. Suki Waterhouse)"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 8,
    "spotifyId": "6CVZ6HkgRHtPXS2lA687Pl",
    "titulo": "Perfect Life"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 9,
    "spotifyId": "45hkGAZiaUpBUOImcYA8aq",
    "titulo": "Sick of Myself"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 10,
    "spotifyId": "0k8pxvparQzzOOyKdPDJHV",
    "titulo": "Voices"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 11,
    "spotifyId": "7dJprvcMVBKkwM3b56kRL7",
    "titulo": "Solitude (No One Understands Me)"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 12,
    "spotifyId": "5NtzNJi7EaiegUmVEkrkNd",
    "titulo": "Tangerine"
  },
  {
    "album": "FUNNY little FEARS (DREAMS)",
    "artistas": [
      "Damiano David"
    ],
    "index": 13,
    "spotifyId": "5phdJ7rBNivQ6NxP7gX0DJ",
    "titulo": "Naked"
  },
  {
    "album": "FUNNY little FEARS (DREAMS)",
    "artistas": [
      "Damiano David"
    ],
    "index": 14,
    "spotifyId": "4ec9Ql46MqyiEaszvOyLzG",
    "titulo": "Mysterious Girl"
  },
  {
    "album": "FUNNY little FEARS",
    "artistas": [
      "Damiano David"
    ],
    "index": 15,
    "spotifyId": "1QcokKCMCs4AFFu1moOhcp",
    "titulo": "Mars"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 16,
    "spotifyId": "7HMz8o0m7ASQ3ImFPfhWTY",
    "titulo": "CORALINE"
  },
  {
    "album": "Teatro d'ira - Vol. I",
    "artistas": [
      "Måneskin"
    ],
    "index": 17,
    "spotifyId": "776AftMmFFAWUIEAb3lHhw",
    "titulo": "ZITTI E BUONI"
  },
  {
    "album": "RUSH!",
    "artistas": [
      "Måneskin"
    ],
    "index": 18,
    "spotifyId": "7oJ3Nb3LIY1ond1fHF3xio",
    "titulo": "MAMMAMIA"
  }
];

const PREVIAS_SPOTIFY = {
  "4qbi9JDziBh3cxi9SFUbeu": {
    "audio": "https://p.scdn.co/mp3-preview/853dfe18457c8ccc75369341cdc9f43fc37be9e3",
    "capa": "https://i.scdn.co/image/ab67616d0000b273c7ba5334f0ac7d9a12fafe0d",
    "ano": ""
  },
  "2r7mfzeXCzyrysTya4Onwk": {
    "audio": "https://p.scdn.co/mp3-preview/6b3ccc28824fb284093ef5dd719daa79ce6ca5d8",
    "capa": "https://i.scdn.co/image/ab67616d0000b2735d23660914fab1299f3f0500",
    "ano": ""
  },
  "42k1KeBehAd83lrGt1okiC": {
    "audio": "https://p.scdn.co/mp3-preview/dd35a78fbf91334612763ce6747fa890b7cb94fd",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734214ddc9e33e76de6a8ee888",
    "ano": ""
  },
  "40a82F3K2UTbeoLlXXXZBd": {
    "audio": "https://p.scdn.co/mp3-preview/d9f5483138d84f2fdc0a6fbc546db6aefd85c420",
    "capa": "https://i.scdn.co/image/ab67616d0000b27311b9999b620ef9bc0e957623",
    "ano": ""
  },
  "5YoITs1m0q8UOQ4AW7N5ga": {
    "audio": "https://p.scdn.co/mp3-preview/887b2e1f195333800d3c8a7537097cc7bd7bdc3d",
    "capa": "https://i.scdn.co/image/ab67616d0000b27311b9999b620ef9bc0e957623",
    "ano": ""
  },
  "2Xh7dyCHCErCv3PmdVEGw4": {
    "audio": "https://p.scdn.co/mp3-preview/03d1cffc4976472d995cc9d56076a3e3309b82b6",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734214ddc9e33e76de6a8ee888",
    "ano": ""
  },
  "6mICuAdrwEjh6Y6lroV2Kg": {
    "audio": "https://p.scdn.co/mp3-preview/4c0d84343d1708200f745e1dfd7263b2e912f9e1",
    "capa": "https://i.scdn.co/image/ab67616d0000b273eec120f35546507f59f05c41",
    "ano": ""
  },
  "6PSKhwo0mVcOdjUOhVJd5p": {
    "audio": "https://p.scdn.co/mp3-preview/2257edbf82cdf3e12f796c65831fde10089275ca",
    "capa": "https://i.scdn.co/image/ab67616d0000b27390b2ea6298a6e5d98e60d6ec",
    "ano": ""
  },
  "4zy1s9GnxWsNzZp1688euA": {
    "audio": "https://p.scdn.co/mp3-preview/26b959479a00993c624ffe9859892cc29e28e3cc",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734214ddc9e33e76de6a8ee888",
    "ano": ""
  },
  "3d0WouFnFmr0K3kjeza3fF": {
    "audio": "https://p.scdn.co/mp3-preview/6a46c302864c157a79346b485621a36305ceaaa2",
    "capa": "https://i.scdn.co/image/ab67616d0000b27385432abc16fd92be0d435cb9",
    "ano": ""
  },
  "76Y07hjDi7fjJnZKsQbEaF": {
    "audio": "https://p.scdn.co/mp3-preview/e44e2a5f591fb825804720daa8c5723888a6d8c9",
    "capa": "https://i.scdn.co/image/ab67616d0000b273f61dd5ef8754073b8a0a4aaf",
    "ano": ""
  },
  "0TwBtDAWpkpM3srywFVOV5": {
    "audio": "https://p.scdn.co/mp3-preview/bd7a8ff91250cb4b73e46fc37904667f2e1054c2",
    "capa": "https://i.scdn.co/image/ab67616d0000b273a9fd4a0405945cd51e8de130",
    "ano": ""
  },
  "4CjuGBDMwSDpjzWtWINN5g": {
    "audio": "https://p.scdn.co/mp3-preview/e74919fc453c66ab97835e33e19fffb4c53a209e",
    "capa": "https://i.scdn.co/image/ab67616d0000b27311b9999b620ef9bc0e957623",
    "ano": ""
  },
  "11mwFrKvLXCbcVGNxffGyP": {
    "audio": "https://p.scdn.co/mp3-preview/06d1b4ae1b631b29bbfd8b9a66a37f18dd73713a",
    "capa": "https://i.scdn.co/image/ab67616d0000b273f89996e214be1763b2a9e948",
    "ano": ""
  },
  "2gam98EZKrF9XuOkU13ApN": {
    "audio": "https://p.scdn.co/mp3-preview/bc151048f2138d6cd93d690fcbd95227a85ef5b9",
    "capa": "https://i.scdn.co/image/ab67616d0000b273a6f439c8957170652f9410e2",
    "ano": ""
  },
  "6habFhsOp2NvshLv26DqMb": {
    "audio": "https://p.scdn.co/mp3-preview/2ea246524bf5a1a6432d4cf1b911a98bd84e3e8e",
    "capa": "https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c",
    "ano": ""
  },
  "0mlAOSILGRys2IbvyOT5VJ": {
    "audio": "https://p.scdn.co/mp3-preview/4675c1959ff5640b190b40692f57ddaef11da981",
    "capa": "https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c",
    "ano": ""
  },
  "2oMjKuKUEJFuLiVmTq7Vjx": {
    "audio": "https://p.scdn.co/mp3-preview/dccb2a0753325e66059ddd11ef081cb7fac7cc12",
    "capa": "https://i.scdn.co/image/ab67616d0000b273aff21e7b9470ce4affb09498",
    "ano": ""
  },
  "2a1o6ZejUi8U3wzzOtCOYw": {
    "audio": "https://p.scdn.co/mp3-preview/283ea222e7b4af379ba32c62b165f0e80bb0951c",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734640a26eb27649006be29a94",
    "ano": ""
  },
  "4Xtlw8oXkIOvzV7crUBKeZ": {
    "audio": "https://p.scdn.co/mp3-preview/de49e94a9bd90a86ae9e074fe2b81c5cbcdc4f48",
    "capa": "https://i.scdn.co/image/ab67616d0000b273f98b3d2d2e0c530ff1d43311",
    "ano": ""
  },
  "4BxzNZpcm1j3JczZzGNe2k": {
    "audio": "https://p.scdn.co/mp3-preview/dc9b27d07e24d2b66ba9310a44c3483b28733f4c",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733892a55b29583746e1b4cd48",
    "ano": ""
  },
  "44BZWegR2TBYtgZdAHwaGH": {
    "audio": "https://p.scdn.co/mp3-preview/eaab119e61e9274937bd3b5d5c2400e7e1b9e2c3",
    "capa": "https://i.scdn.co/image/ab67616d0000b273f1ca4db65ddfa7c3f9e23dd3",
    "ano": ""
  },
  "2403gCM2RluhMgBc9TSwp7": {
    "audio": "https://p.scdn.co/mp3-preview/3cc4e7ed7553e001535fa7d15661961726ab40e7",
    "capa": "https://i.scdn.co/image/ab67616d0000b2731ba5e37f7f18eb3fa4591a04",
    "ano": ""
  },
  "20jSmgTANwSWWv9YfFdnNn": {
    "audio": "https://p.scdn.co/mp3-preview/9362ba86a69937a23ffe7510f9f4a8e1d1cae37b",
    "capa": "https://i.scdn.co/image/ab67616d0000b273d468642da373d84e7a3c2450",
    "ano": ""
  },
  "4eI0ncpnZuv4A3ssTJRSDY": {
    "audio": "https://p.scdn.co/mp3-preview/b3a7c440217ce345a23cd778c16a7ca782e2e1aa",
    "capa": "https://i.scdn.co/image/ab67616d0000b2730e61e4e997a3dc0ba273e732",
    "ano": ""
  },
  "7MMJa7cjMadOSR6CFWvB1x": {
    "audio": "https://p.scdn.co/mp3-preview/40b3e75ddc113790db6d8a66ccbfd4188894a892",
    "capa": "https://i.scdn.co/image/ab67616d0000b27387f01b35a5806d46277a4316",
    "ano": ""
  },
  "7o34Mp5i0kSmAIJUCxVCFn": {
    "audio": "https://p.scdn.co/mp3-preview/15a9d92ad7e2f7a9de22238d9df7e9d34380a024",
    "capa": "https://i.scdn.co/image/ab67616d0000b273ff9b8d24892544555f481985",
    "ano": ""
  },
  "5HggJVnKKG973g32kVbJjd": {
    "audio": "https://p.scdn.co/mp3-preview/0dd66c91f1c503fb14184f1b569dfe943bd29fd9",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "5bxQHscWvyaQbm37igKP4K": {
    "audio": "https://p.scdn.co/mp3-preview/fccfbcdf7ee1671f5465be5ec193eb691900c0c8",
    "capa": "https://i.scdn.co/image/ab67616d0000b273be679b5ff450cd6f778d7217",
    "ano": ""
  },
  "4gXSgEQeLRwCmpa6foSspX": {
    "audio": "https://p.scdn.co/mp3-preview/f706bd8d5b91ed018b09af32e8a82122bba08692",
    "capa": "https://i.scdn.co/image/ab67616d0000b273be679b5ff450cd6f778d7217",
    "ano": ""
  },
  "6wmeVtM2RqSHu8ClChANqx": {
    "audio": "https://p.scdn.co/mp3-preview/56a5c1e4c7f88be1bbb72da505b00c6e174ad850",
    "capa": "https://i.scdn.co/image/ab67616d0000b273c3021f84080ef3c59750b903",
    "ano": ""
  },
  "5EOoElhbLrRM4cWMTY8qgD": {
    "audio": "https://p.scdn.co/mp3-preview/4761a5184ee240348e33b3a9006fb15625c06491",
    "capa": "https://i.scdn.co/image/ab67616d0000b273b1767ee9efcaca80a7117035",
    "ano": ""
  },
  "5H32Yi9LcptPfuDna0tkAI": {
    "audio": "https://p.scdn.co/mp3-preview/8a0694a485bee324131ba67453d6a4fcd0c61d4a",
    "capa": "https://i.scdn.co/image/ab67616d0000b27382f99a7f506715818b640095",
    "ano": ""
  },
  "5L4wJD8eyVhSrm4pbPuF2u": {
    "audio": "https://p.scdn.co/mp3-preview/65c29c962cf279fa8951a972dc01018dcc8bfbd1",
    "capa": "https://i.scdn.co/image/ab67616d0000b273c249380a1d1609c52e80b8bd",
    "ano": ""
  },
  "6qnQkIIFPFyTAhoyIFBrcR": {
    "audio": "https://p.scdn.co/mp3-preview/ee9011983731820e1527558fd2fdbd11936b9eb9",
    "capa": "https://i.scdn.co/image/ab67616d0000b2735473fe17a7ecbcdee3ff3a54",
    "ano": ""
  },
  "7ae4OwBZnypVfR9WVesDaw": {
    "audio": "https://p.scdn.co/mp3-preview/ea93cc786f812e92e94fdaa0f02d6d2d25007ede",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733cf0a9e4e2ff43f8f02fdf3d",
    "ano": ""
  },
  "0KligwQn4Iy344p2Q5m6k6": {
    "audio": "https://p.scdn.co/mp3-preview/95f747aa5e302a4676d382bb13105d155f4ddc32",
    "capa": "https://i.scdn.co/image/ab67616d0000b2739a43a891fd44f224e09afd7b",
    "ano": ""
  },
  "1rVPV7us0kW0mXBgoNKAYK": {
    "audio": "https://p.scdn.co/mp3-preview/da1148295ab666580ba6beeaa0581bed7d65afd5",
    "capa": "https://i.scdn.co/image/ab67616d0000b273e2bcf2207fa1d23340d97de6",
    "ano": ""
  },
  "72BnKkKnrOeCDY9vy2avFk": {
    "audio": "https://p.scdn.co/mp3-preview/fb792ae214eef5dad35ac91cacbd52042c0d5ff1",
    "capa": "https://i.scdn.co/image/ab67616d0000b2735151b4752642e355c13ed72a",
    "ano": ""
  },
  "7sXTcibuNYugjjYNfgf2kY": {
    "audio": "https://p.scdn.co/mp3-preview/99a310a201557e7c0ae7659b00fc4f91be7206ed",
    "capa": "https://i.scdn.co/image/ab67616d0000b273228264ef165a3de1041d0c22",
    "ano": ""
  },
  "6SHprqk9Cj4TaQF9p3K9s8": {
    "audio": "https://p.scdn.co/mp3-preview/8a0834b17431c5bf181a5f230de2e84ec84b56f4",
    "capa": "https://i.scdn.co/image/ab67616d0000b27366f64b9378b0ded370d5016c",
    "ano": ""
  },
  "3dZHWv3IsAQLzAr7FLJoJA": {
    "audio": "https://p.scdn.co/mp3-preview/68bd7fe9dcb38b26eeb422923dda09e2eed73070",
    "capa": "https://i.scdn.co/image/ab67616d0000b2735ee0276a8cb48fff5608bea0",
    "ano": ""
  },
  "7F0saRUakwxLCEI1MvGVQZ": {
    "audio": "https://p.scdn.co/mp3-preview/a9413e6ee0ebef1c63a4741b0cf2297374c6710d",
    "capa": "https://i.scdn.co/image/ab67616d0000b273d51a551700ecbdcfb2488b74",
    "ano": ""
  },
  "31eAijCejvmhSeou6L40Su": {
    "audio": "https://p.scdn.co/mp3-preview/baa10c10721dc9358bf62446ed763b08d6a73092",
    "capa": "https://i.scdn.co/image/ab67616d0000b273263d1053f96f60e720210f33",
    "ano": ""
  },
  "6RDrpNxQIKp6LULdQWd2Vl": {
    "audio": "https://p.scdn.co/mp3-preview/044ece4b37f85acf7e8e1ca4a805baad0dd6aa67",
    "capa": "https://i.scdn.co/image/ab67616d0000b273e6b07b0712c8459ae5dd7a0a",
    "ano": ""
  },
  "2I0mW1Ldu2FQ8qmhxqQjeA": {
    "audio": "https://p.scdn.co/mp3-preview/9855818d667f6fd5d99ce0a2df561049e019401a",
    "capa": "https://i.scdn.co/image/ab67616d0000b273be679b5ff450cd6f778d7217",
    "ano": ""
  },
  "1LfG7ZpbedtuXH1CKpyC97": {
    "audio": "https://p.scdn.co/mp3-preview/d66727dacd993861824eb2be8866f2bca147b84e",
    "capa": "https://i.scdn.co/image/ab67616d0000b273a7abd83d17924ed7ff3ea252",
    "ano": ""
  },
  "7lOlFOWWGQrZ6l1mgj45X6": {
    "audio": "https://p.scdn.co/mp3-preview/9ee1102cacfacf7f3eeff03a8465ded3e6a0d80c",
    "capa": "https://i.scdn.co/image/ab67616d0000b273d3e2c48b1843cde1bfd5a190",
    "ano": ""
  },
  "0vRsoNQRw2HFYl8hXpVSJ1": {
    "audio": "https://p.scdn.co/mp3-preview/61ae046e5e5b72689800f1cda8b588acff00618e",
    "capa": "https://i.scdn.co/image/ab67616d0000b27338f317cb619bd5f2b2a5ed3a",
    "ano": ""
  },
  "0q9no3CEFBmMP925KJMxTu": {
    "audio": "https://p.scdn.co/mp3-preview/56dd1d29b9b65c3bde07501a60614d979ce6ce1a",
    "capa": "https://i.scdn.co/image/ab67616d0000b2737795a5fb973bb50f173684b3",
    "ano": ""
  },
  "24vLrig9eVLtfjD3vzYZ3Q": {
    "audio": "https://p.scdn.co/mp3-preview/a334ab7a2a980617accefb6dc844edab21a646a3",
    "capa": "https://i.scdn.co/image/ab67616d0000b2735de278ae89bc9aa3ba905dc7",
    "ano": ""
  },
  "1xYpW2C6sX1RY9iYPAx0mz": {
    "audio": "https://p.scdn.co/mp3-preview/6a31213043dc3ba94ab1ff28596cda42fd406f46",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "5LGUuaDqOQOB2mbRW2Prsg": {
    "audio": "https://p.scdn.co/mp3-preview/543e8b948beba4b6a122234a45b039815f47e3b7",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "0XBheLbQP22VcatC0dMfPA": {
    "audio": "https://p.scdn.co/mp3-preview/bcc3e775bb618e3e408ca769af90161478eb5862",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "5rymvhZn6ZFzwSP3odjGRo": {
    "audio": "https://p.scdn.co/mp3-preview/187265e27358915440ae93b977450134263a7743",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "4T8mrPnU2xqoGlC3oosvtC": {
    "audio": "https://p.scdn.co/mp3-preview/22b059ae3feda73d640c1257d60aec9b449a688e",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "2Iu47PhuGpEodarMQ3YBOX": {
    "audio": "https://p.scdn.co/mp3-preview/cfaa3fb8208deba8f9438a0d00a26fcb7e677c84",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "02Rv7qkxG4SiKSQxxDuhLu": {
    "audio": "https://p.scdn.co/mp3-preview/b3a6b2dcf1d12dbffa74bcd7c9d1d44280ef6805",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "43PZqVk0yWOJQtWIm3ep3N": {
    "audio": "https://p.scdn.co/mp3-preview/f5411adbd5345768e0df601e579aa739fc5b23cd",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "5QVTwHXseB5aHbURhfj8Ij": {
    "audio": "https://p.scdn.co/mp3-preview/f24435b75a14b73e5a35bf37555325267d24d868",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "4bOM1hCaAZJ7P6JCIla00W": {
    "audio": "https://p.scdn.co/mp3-preview/c4a16b118c18db6667f30f9f9f79912edcbe7efc",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "0xc0EsnhWXBwVOoXqoMj2m": {
    "audio": "https://p.scdn.co/mp3-preview/e6a5f8917b334313bbdcd2b0c74a05b7383370d9",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "3RpW0kHH7NlcUvm7F8HHZF": {
    "audio": "https://p.scdn.co/mp3-preview/d8db1a1f56caf5b746634800b3305bcc24df413c",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "2lRMPxNLgF7gFXBmRf5inl": {
    "audio": "https://p.scdn.co/mp3-preview/2966b94bdc4552d130d6dd1afd0ba344614c8564",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "3eDT6yOCZNKyaxLnnRPhox": {
    "audio": "https://p.scdn.co/mp3-preview/717826d0aa8ef8ff01cc0b0913fad541b6d509dc",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "43lC7VxkSMH8KBGXkXLONc": {
    "audio": "https://p.scdn.co/mp3-preview/f7ae80472fa34c6a906a376a9c977c13c4acc486",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "2WOsTS8MLy3f9rjOIsg3tW": {
    "audio": "https://p.scdn.co/mp3-preview/0cdfafba8153e290551fe9c36dc4e59d9abd4228",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "0XzipnuSrizJLTMZ5zdAgV": {
    "audio": "https://p.scdn.co/mp3-preview/4c0a9b4aa2c5eb93dbfa64e54a86d2aa93df2089",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "2lQEplvuHSse59XtWe5oJu": {
    "audio": "https://p.scdn.co/mp3-preview/9c6b7bf1688e6c2d6aea5d92f415bffd506bfb1f",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "2Lctn0xxWEnXpAQV0ggSth": {
    "audio": "https://p.scdn.co/mp3-preview/2570e97bb80c581dd69f4289d117f57678195bb2",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "1FwCl4EXDGiIG1MKbWrvnf": {
    "audio": "https://p.scdn.co/mp3-preview/2fad7a02ef9aef6a2b438eb588cae070139a4719",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "4fkogoABTtsfBU7Ef5QhtA": {
    "audio": "https://p.scdn.co/mp3-preview/33e9fabcf72289c5b2fed8401aa29366fdc03b0a",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "5pYtV3Ys1KYurhcad7ivVh": {
    "audio": "https://p.scdn.co/mp3-preview/120d635ce4ab90fa4377a09cfd748abafd16fc45",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "3x3pBFa2vDFisoHeKlgwHU": {
    "audio": "https://p.scdn.co/mp3-preview/a38be0bac7809d37774bc709827af67f84b55231",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "3VURxM6HGGMnUGd0aiflou": {
    "audio": "https://p.scdn.co/mp3-preview/b6099c6e16d9dacaddbb2dd00557fd77e7de751d",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733647a9397d1dc3933cc6071d",
    "ano": "2024"
  },
  "36r085cj95tQcGaOoPLfc5": {
    "audio": "https://p.scdn.co/mp3-preview/8be25cd1f70ebe763e50ca9ca85cac673adb8021",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd84a8be0da1523554f5dd5e",
    "ano": ""
  },
  "7ETIZFr7163zFcz3RxKk5O": {
    "audio": "https://p.scdn.co/mp3-preview/13883f7129252d4397cbe7cecb5e2851d821b20b",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd84a8be0da1523554f5dd5e",
    "ano": ""
  },
  "71GABxN1QMc3RbtKqhYvXb": {
    "audio": "https://p.scdn.co/mp3-preview/82ecb32c9c696f153964a521b796ea48cb502f35",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd84a8be0da1523554f5dd5e",
    "ano": ""
  },
  "5szvpZOIMuzCrwNrRwnB9B": {
    "audio": "https://p.scdn.co/mp3-preview/a28cb007ac30bf79930d29137cdaedad3820b8ac",
    "capa": "https://i.scdn.co/image/ab67616d0000b273635fa7f33863d9bafcbe8a65",
    "ano": ""
  },
  "0SXUbvefDczI7Z6hEhuJ8h": {
    "audio": "https://p.scdn.co/mp3-preview/6aa82ada5d3c3b9de08684ca271041c9a7f76bfc",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd84a8be0da1523554f5dd5e",
    "ano": ""
  },
  "5hYP7TDRmkJPrgYdIy500S": {
    "audio": "https://p.scdn.co/mp3-preview/827d995ceda259796f65691e7f41e84e93a87656",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "5Vsw47R4WEscYUBMaxR49w": {
    "audio": "https://p.scdn.co/mp3-preview/cf21b3579f64f965ff3f6def299c73722e4d71d2",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "6CVZ6HkgRHtPXS2lA687Pl": {
    "audio": "https://p.scdn.co/mp3-preview/2c00a79fb7d5f3bdcb063dcff69a28332a02158c",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "45hkGAZiaUpBUOImcYA8aq": {
    "audio": "https://p.scdn.co/mp3-preview/a786eb80ac0bc1afb77ffe1556534a1cf598d5f9",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "0k8pxvparQzzOOyKdPDJHV": {
    "audio": "https://p.scdn.co/mp3-preview/373f0b50c0cf57ac8cab328204d843a1546e7ea6",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "7dJprvcMVBKkwM3b56kRL7": {
    "audio": "https://p.scdn.co/mp3-preview/30563adcb5112997624efce4a4404ace0a3cb606",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "5NtzNJi7EaiegUmVEkrkNd": {
    "audio": "https://p.scdn.co/mp3-preview/c29cb403fc8133b87d63bb83400d7325951b9cba",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "5phdJ7rBNivQ6NxP7gX0DJ": {
    "audio": "https://p.scdn.co/mp3-preview/218cdced02cb3ef6ae7252e5e27cae73f3de60fb",
    "capa": "https://i.scdn.co/image/ab67616d0000b2738d61faf22820050ba330b2a3",
    "ano": ""
  },
  "4ec9Ql46MqyiEaszvOyLzG": {
    "audio": "https://p.scdn.co/mp3-preview/91b00d44698a16cc5b54cf0378b7fc40ab08261d",
    "capa": "https://i.scdn.co/image/ab67616d0000b2738d61faf22820050ba330b2a3",
    "ano": ""
  },
  "1QcokKCMCs4AFFu1moOhcp": {
    "audio": "https://p.scdn.co/mp3-preview/52424619bba8f885df552e1c7d66007d6e8e383e",
    "capa": "https://i.scdn.co/image/ab67616d0000b27328b40925cffb9c193661272a",
    "ano": ""
  },
  "7HMz8o0m7ASQ3ImFPfhWTY": {
    "audio": "https://p.scdn.co/mp3-preview/4a44ddd56de367918f6c46cb42ae498701a71538",
    "capa": "https://i.scdn.co/image/ab67616d0000b2735aa05015cfa7bd2943c29b21",
    "ano": ""
  },
  "776AftMmFFAWUIEAb3lHhw": {
    "audio": "https://p.scdn.co/mp3-preview/ea4a0a83d990ca24023ed7e067b66e45c8495a75",
    "capa": "https://i.scdn.co/image/ab67616d0000b2735aa05015cfa7bd2943c29b21",
    "ano": ""
  },
  "7oJ3Nb3LIY1ond1fHF3xio": {
    "audio": "https://p.scdn.co/mp3-preview/05ae9975099972c9c1d411b1fd87e1aeac96d9cc",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346e72dff16a10e1b5062fdf7",
    "ano": ""
  },
  "1L5tZi0izXsi5Kk5OJf4W0": {
    "audio": "https://p.scdn.co/mp3-preview/a63833f43e8ed838a7c8af126c230d428d5868bb",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "4zQuwW24dweWcaX0fEJkP2": {
    "audio": "https://p.scdn.co/mp3-preview/1124c4cf93e45ce89cdf030c4856dc99345c262f",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "7or26qS3BfpTtWO3BFw5GE": {
    "audio": "https://p.scdn.co/mp3-preview/00cf9d8950cb3a51fb677e74769005c3ccd714a8",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "0sSdFMuYrn3N9moumV466B": {
    "audio": "https://p.scdn.co/mp3-preview/5039cb263f1739d99ad7557eb85451052ad3fac5",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "0RatRR1mlxEVR6WATH4jV3": {
    "audio": "https://p.scdn.co/mp3-preview/6224ad5a8fc0e9dfce8d373b6ec229675d8a4378",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "37A5PvtftHtsISQUDFNGUk": {
    "audio": "https://p.scdn.co/mp3-preview/3c01e6657fdf623548d44501f3fd5842216c77cd",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "6yLX8QnxlnEqZfs3YKCfjF": {
    "audio": "https://p.scdn.co/mp3-preview/32f1f38915f2f97d826c16e9456e25b8642b2bc3",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "570ZDO2Lmh6NQChOU5xPUL": {
    "audio": "https://p.scdn.co/mp3-preview/f055efa319ef27bea91500d2c5a2e4efc07f05d5",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "30FURVTCpbKyykjSEQzGkH": {
    "audio": "https://p.scdn.co/mp3-preview/861a4b365ca18beba184a0965cf08c5c28574e79",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "2i1S5Dq9SaFGcnw8mnb4ks": {
    "audio": "https://p.scdn.co/mp3-preview/c7bb7307005d231d51620c384064c3e1750743b1",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "5RqIM2vv5nw2PGJBqPD8Rg": {
    "audio": "https://p.scdn.co/mp3-preview/ba6b53968af6befcaae5a9ca4fada6a1ebbbe9b5",
    "capa": "https://i.scdn.co/image/ab67616d0000b273dc65d5638a3de4a0bdf3c05f",
    "ano": ""
  },
  "5it9RIRXDwiLpJKdce6Z7e": {
    "audio": "https://p.scdn.co/mp3-preview/b6b4c5a64434f5e5f9fac2538d933711db84ecca",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "12TAfwmQSufwlerS9UJaQB": {
    "audio": "https://p.scdn.co/mp3-preview/ce1cf18a039389dac0499e7cc983c514245def2b",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "1DYCdxNAVNUCAOlAi7aP5o": {
    "audio": "https://p.scdn.co/mp3-preview/17b0d2c180e883326eda9002a102ea2ccb24af84",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "1w3KJgj6x75PiQm8Ppe0sS": {
    "audio": "https://p.scdn.co/mp3-preview/124297fd4ba2bc0b368b6f2601880127c02835b6",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "1MdMYZN0VnpjTy6nBCM2Qf": {
    "audio": "https://p.scdn.co/mp3-preview/b6c3f4f5b63bcc3efc1e27df7277d36a55f7e151",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "7taSJbOhxfc7Vfto48gFKj": {
    "audio": "https://p.scdn.co/mp3-preview/8f243d8afcdc50a9b11f995ec1380117d597793b",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "7E4dtl5gWROiMKibvedh0i": {
    "audio": "https://p.scdn.co/mp3-preview/2fe0f34b7ee51455d47141a3c755d36b675f802f",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "4vCyAAMCZZ9r4443negeQO": {
    "audio": "https://p.scdn.co/mp3-preview/27d8614360dd1c80a6ca5b39abfeacedaa2360ec",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "3GnlbPpTLBwz35Cg5sdxuX": {
    "audio": "https://p.scdn.co/mp3-preview/0391b4fe024b8fedd044fe43cff8783cca6d69e7",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "6OaexwzJ7LXIykBzRqpOmD": {
    "audio": "https://p.scdn.co/mp3-preview/d800f05acccb6e6c0562ef63ae5d8bcf65f243f3",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "34Owb4rZbbKapQ4YFeuhVl": {
    "audio": "https://p.scdn.co/mp3-preview/0e101211f8213e051a20f03875775a72e54271e4",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "40GTKaedGtzka8dlV4NuqI": {
    "audio": "https://p.scdn.co/mp3-preview/395ec7df0b7c71ced3fd4006cae1534b9c989aa7",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "5LC7nItIEFp4nzdFdEGbf9": {
    "audio": "https://p.scdn.co/mp3-preview/108e19726cd155f10cbeaceb687313727a369df0",
    "capa": "https://i.scdn.co/image/ab67616d0000b273bd8d74b33f8be9a6fef39e54",
    "ano": ""
  },
  "4NDpn6yfD5aqafYWFEaJDz": {
    "audio": "https://p.scdn.co/mp3-preview/a082959512f53d540047077459b1c15daca49dc0",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734c896e873306c17847c254e9",
    "ano": ""
  },
  "0IEGGuRHP8ylbCXausRF9p": {
    "audio": "https://p.scdn.co/mp3-preview/b262d52f076ae729a600c739f223206d400b3d0e",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734c896e873306c17847c254e9",
    "ano": ""
  },
  "0LbK1bodGLc9xmV1cS9jvL": {
    "audio": "https://p.scdn.co/mp3-preview/4c9514fc2696b0b027c69389f98b7cc7688a0c0c",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734c896e873306c17847c254e9",
    "ano": ""
  },
  "2r45rookK2awLkiOHOef1o": {
    "audio": "https://p.scdn.co/mp3-preview/98f13f311ee89d8fd89238163eb646eaf98289ca",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734c896e873306c17847c254e9",
    "ano": ""
  },
  "77RrNbeBUXb1Dtewp0HQuR": {
    "audio": "https://p.scdn.co/mp3-preview/714bb0cb460385b72b5db39422dd939ba19afa8e",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734c896e873306c17847c254e9",
    "ano": ""
  },
  "7F5rIyOI88zk36AiBXC8xq": {
    "audio": "https://p.scdn.co/mp3-preview/7022993c14feaa1b6c64d7684920246c2cdb877d",
    "capa": "https://i.scdn.co/image/ab67616d0000b2734c896e873306c17847c254e9",
    "ano": ""
  },
  "1SCHnL226Vc4S4lyoGeeSf": {
    "audio": "https://p.scdn.co/mp3-preview/059a69be7b76e7741fa241a0b57df536c08d47b3",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "1tnFctXBWxcl4bynuz88SV": {
    "audio": "https://p.scdn.co/mp3-preview/4a62ec1b3244dfcfe5396b8b80ac46832e4577aa",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "6fXhVRbRgeDUyeckTYhzwd": {
    "audio": "https://p.scdn.co/mp3-preview/d055009535981e8b905737c9365229ce59c48c0b",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "7tGvQQ0GmZVPbk0eaJy90F": {
    "audio": "https://p.scdn.co/mp3-preview/b63be6496f3a1624ba93f3ac69474356b1ee5a14",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "39Yhrx9ZZCkwM4erwUx72E": {
    "audio": "https://p.scdn.co/mp3-preview/cca71339a3b28c3b3bfb0c68a6468857eb51b4cf",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "2CvrbVzGLqAJSeRkh4XvW5": {
    "audio": "https://p.scdn.co/mp3-preview/6aede52ed3fa4d6f80befe808a191320cc5402cf",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "3yx8ZoQRZQUiIUpSS4xhMP": {
    "audio": "https://p.scdn.co/mp3-preview/20d6d545037a35327b1b4432fdf8c9b4cda5f181",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "6sgNwn5AMtjFWF2W8920yB": {
    "audio": "https://p.scdn.co/mp3-preview/b6cb0a75a96e8311f4599b95119890c55c04bd2b",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "0Z96ZExECrYSQo03nfCak0": {
    "audio": "https://p.scdn.co/mp3-preview/25b9132251b5db1ef2ec9288ab017fb579b62281",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "6tvnj77OJD0DJTgSIi6fQ3": {
    "audio": "https://p.scdn.co/mp3-preview/b3550a31bd4471a339e8f9fd6e564d31e955582a",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "2fCxoHkhVU2cxZbGelPIlo": {
    "audio": "https://p.scdn.co/mp3-preview/3e3f3cea292d776e4c00bc23318820c0ad5b794b",
    "capa": "https://i.scdn.co/image/ab67616d0000b27334a6489b2e9ae80ad3b57cbf",
    "ano": ""
  },
  "3mpm4fPG1RIWHCz6VBfQgq": {
    "audio": "https://p.scdn.co/mp3-preview/135a55b3ffee935cad078dc7e76be5765b698dd3",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "5aIBMkNJ4Gfz1srs3mdQQj": {
    "audio": "https://p.scdn.co/mp3-preview/59ce941bd57de73301c250b3ae6fe6bef3ad3c22",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "2RxlRzPIZrIPmAEv0fVjZe": {
    "audio": "https://p.scdn.co/mp3-preview/cff1996ae1fd576cb543be595f4169c16cf34171",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "1y3MmmBH8UfKKUKWfaHuy4": {
    "audio": "https://p.scdn.co/mp3-preview/9790e5acd3a38f0fce775a05f4e4266b7395395f",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "6jJMhX5CuzeZBU1HsX7nFz": {
    "audio": "https://p.scdn.co/mp3-preview/5e900eb6fef88d18657c62df59d10c00a2c3c946",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "3VlF8xuYu1Qzr9k7wGaTPA": {
    "audio": "https://p.scdn.co/mp3-preview/2c512299eb393e40f35acf4c5dc81aca8edc0b38",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "2NSqSMc0wd01Km04JVBInL": {
    "audio": "https://p.scdn.co/mp3-preview/ef9d1e6c1a55debbc482bf7c9fb711e43975b89f",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "5EGm0I15EH6L1hOkFyO1FC": {
    "audio": "https://p.scdn.co/mp3-preview/34184830c5bf7149929868f51320863a12029575",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "3w9pLeERUMc6oGF02YU7ro": {
    "audio": "https://p.scdn.co/mp3-preview/1e43c9f2c771d8e446c30a0956846e73b49157f4",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "5f2InE6PenFPhBeCLXCvFC": {
    "audio": "https://p.scdn.co/mp3-preview/027a70fe284ccf9c4831d2b6384ef2da3c0e306a",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "752h4gcgAIH6gdlBTFAS6H": {
    "audio": "https://p.scdn.co/mp3-preview/3e1aedeefde773a7ac28b3e344c1c6cf9c01b34b",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "0bB6AoOHbBYYuaR9V26E7z": {
    "audio": "https://p.scdn.co/mp3-preview/786233664f35a48dde46c3ba4ae47525fd1e2e94",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "3ZBGVTCNbv5VkRg7vx5uQw": {
    "audio": "https://p.scdn.co/mp3-preview/d9d2b912a9878a8dc4df5238ea9190f735938b74",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "4zVlul17Z9SGqwgmbwm10Z": {
    "audio": "https://p.scdn.co/mp3-preview/bd0c305d8bb5ec3295818e2e5b4fda621d9e501f",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "2wRDSWplTOhbsG4Tr5YHA6": {
    "audio": "https://p.scdn.co/mp3-preview/7f15291bdcbc90ea2aa49205e8e32a16b8aba56e",
    "capa": "https://i.scdn.co/image/ab67616d0000b27346d463fd499066713e125745",
    "ano": ""
  },
  "3SXe3otoiV5dywpKe0wHdr": {
    "audio": "https://p.scdn.co/mp3-preview/57e0d77f54953c6142e1edc2f79f927b73c476b9",
    "capa": "https://i.scdn.co/image/ab67616d0000b273f0ca9bc38c12b71f65e55afe",
    "ano": ""
  },
  "6PaJaElx59xuI8TPxd7XAf": {
    "audio": "https://p.scdn.co/mp3-preview/894226b151ee0cbaabe2226524ff341590b27030",
    "capa": "https://i.scdn.co/image/ab67616d0000b273f0ca9bc38c12b71f65e55afe",
    "ano": ""
  },
  "0GZMMUuDB34uvhdSuAcfFF": {
    "audio": "https://p.scdn.co/mp3-preview/fb8cd784b0f70aa26051df2ee4e32c911521e2b6",
    "capa": "https://i.scdn.co/image/ab67616d0000b273f0ca9bc38c12b71f65e55afe",
    "ano": ""
  },
  "1FGRA5pMtBqJLNAaSBia2x": {
    "audio": "https://p.scdn.co/mp3-preview/7301f881ec529154a17f8175a973b12be946e528",
    "capa": "https://i.scdn.co/image/ab67616d0000b2730367a4b146bb14d1b51136ee",
    "ano": ""
  },
  "25SL3ZSbEGtu4oU14xllMQ": {
    "audio": "https://p.scdn.co/mp3-preview/d27693a7d46b35919d2bb73dfbcafaf5cdec7205",
    "capa": "https://i.scdn.co/image/ab67616d0000b27359d95eeb37d902cc3287b574",
    "ano": ""
  },
  "2RMOwSvOGQyy985Vx4VSGQ": {
    "audio": "https://p.scdn.co/mp3-preview/722e6374044d0da1eb6d87dab36ee65fe13f2525",
    "capa": "https://i.scdn.co/image/ab67616d0000b27306de94ef6ce6293957be2d4d",
    "ano": ""
  },
  "5jYEiTNR3FQXFouTX7Ju0N": {
    "audio": "https://p.scdn.co/mp3-preview/297776b2e54ffafe7d6fe63969559f730ac685c4",
    "capa": "https://i.scdn.co/image/ab67616d0000b2731f1facdc0addf57213b9abbf",
    "ano": ""
  },
  "5Uq1ta57YcmShqMyPmVyyO": {
    "audio": "https://p.scdn.co/mp3-preview/2f954dfec74d342424fdb6d131ee9e82070ea6a8",
    "capa": "https://i.scdn.co/image/ab67616d0000b27347c1e81c73c72b84be4ebeb8",
    "ano": ""
  },
  "2D1rmVTeaZrr5Ipow29t4b": {
    "audio": "https://p.scdn.co/mp3-preview/4c9e5adbfc968bb1591854f8e04a72a3f0b9f08a",
    "capa": "https://i.scdn.co/image/ab67616d0000b2737d23c7496ec2b5aef06a2dc8",
    "ano": ""
  },
  "2rC41weP3q2jhM0PDYOZGo": {
    "audio": "https://p.scdn.co/mp3-preview/cfa4d9c656b4eefc799753732e8863805646e37b",
    "capa": "https://i.scdn.co/image/ab67616d0000b273852ba896e3854666bf636443",
    "ano": ""
  },
  "6eJUG282cUKuIoa72sEsqO": {
    "audio": "https://p.scdn.co/mp3-preview/7ecd2269495acad20a0e5286815e75f93029802d",
    "capa": "https://i.scdn.co/image/ab67616d0000b2733bc15b5807bd7e3500944a69",
    "ano": ""
  },
  "321oxaH6WpQNyDToySTkRF": {
    "audio": "https://p.scdn.co/mp3-preview/e39f98cd94dfde400f5722d4e781085e025078e3",
    "capa": "https://i.scdn.co/image/ab67616d0000b273852ba896e3854666bf636443",
    "ano": ""
  },
  "1Tn0msQvQMbD6woO9VnEG3": {
    "audio": "https://p.scdn.co/mp3-preview/547654c3fa8ea7a125c61166b209ab3df74e9b14",
    "capa": "https://i.scdn.co/image/ab67616d0000b27359d95eeb37d902cc3287b574",
    "ano": ""
  },
  "3WLAcpFwRmC98f5UGRXAkI": {
    "audio": "https://p.scdn.co/mp3-preview/b6b8cf53c3ea3e72b7f12c994ecc725056ee0f11",
    "capa": "https://i.scdn.co/image/ab67616d0000b273852ba896e3854666bf636443",
    "ano": ""
  },
  "3hXCANK2ys6D2HZE3kuDfz": {
    "audio": "https://p.scdn.co/mp3-preview/90afd76880fb632d08b0a9818a9bea84642d5665",
    "capa": "https://i.scdn.co/image/ab67616d0000b273c84afc3e7e25d41a3f8f17f3",
    "ano": ""
  },
  "19IIiuViFv6TsPDXV2ZWB3": {
    "audio": "https://p.scdn.co/mp3-preview/2be8b10ec548b8344195fd6b5b06e38e991adc3c",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "3B7aR5W9WNzo9FeIsdGxI1": {
    "audio": "https://p.scdn.co/mp3-preview/56632c10d4bdef08c1f691be9f1faf1a71b6bfee",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "1Y7ShD0kGmHPwJTWOuBlHK": {
    "audio": "https://p.scdn.co/mp3-preview/d95ef3dd827bfe3931a303057252ca5ba844aa16",
    "capa": "https://i.scdn.co/image/ab67616d0000b27347c1e81c73c72b84be4ebeb8",
    "ano": ""
  },
  "7gGCGzNFmW0xjhA8dA3Y5w": {
    "audio": "https://p.scdn.co/mp3-preview/9d75f51369cfdd16aa8242b3267841c880e543d0",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "67RqkhyO4AI7RbgjTPNQF7": {
    "audio": "https://p.scdn.co/mp3-preview/7aa76d571be2bf9799fff5875e0c4f9ad693d361",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "6NHjL6DkSsaGjFz2KJN1q2": {
    "audio": "https://p.scdn.co/mp3-preview/f2737cbf18ec710c388653da76bb541fdfb35501",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "58RnbwfvEYB8VS5JHrUwc8": {
    "audio": "https://p.scdn.co/mp3-preview/5af6aeb05b23d8f015707c8ec0160702747a1839",
    "capa": "https://i.scdn.co/image/ab67616d0000b27347c1e81c73c72b84be4ebeb8",
    "ano": ""
  },
  "7M1YydD0jJ9teSC62fhfY9": {
    "audio": "https://p.scdn.co/mp3-preview/bceff0818a31fe91fc120d0926efe1bbf9842858",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "2hy9PyCleGC4HRe5MsPwfF": {
    "audio": "https://p.scdn.co/mp3-preview/e2c56a272343332ea4eb43829b7364949d862023",
    "capa": "https://i.scdn.co/image/ab67616d0000b273d4470ce58d5b86671673d32c",
    "ano": ""
  },
  "6Q3JFwQ0EoAO7gosrWI3na": {
    "audio": "https://p.scdn.co/mp3-preview/45e5404ccb4d762f429acebea126631bf5d8c753",
    "capa": "https://i.scdn.co/image/ab67616d0000b273d4470ce58d5b86671673d32c",
    "ano": ""
  },
  "3vCH7bgO37Cx4dOIUlX9sv": {
    "audio": "https://p.scdn.co/mp3-preview/fd7c5549014084a250ae364e4b8191cf16ff57af",
    "capa": "https://i.scdn.co/image/ab67616d0000b2738f82447fcbb8ca6e04581d02",
    "ano": ""
  },
  "1CehxijvhSszrBS3FuCxBw": {
    "audio": "https://p.scdn.co/mp3-preview/6439e71659c4346ce004f0bdd6015e92e42621b8",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "7vzfaxzAl0YNLBp2xA7T0b": {
    "audio": "https://p.scdn.co/mp3-preview/f317045711d55e48e381e7bb1310eb56a0b82c60",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "0bkGRThWulixJ3hBPr5nlH": {
    "audio": "https://p.scdn.co/mp3-preview/2bcffa7b3f869ed9d462e7a70d142530dcfaa782",
    "capa": "https://i.scdn.co/image/ab67616d0000b273d4470ce58d5b86671673d32c",
    "ano": ""
  },
  "5NnXWsezmRvC5oxhguptYl": {
    "audio": "https://p.scdn.co/mp3-preview/92884d2f2356606e5028bdd1acb05f804a6e895d",
    "capa": "https://i.scdn.co/image/ab67616d0000b273cd08fa190a11800c9e6ecc99",
    "ano": ""
  },
  "4J6Mo4lgXcVirTQzOVHQyx": {
    "audio": "https://p.scdn.co/mp3-preview/afaae14e2800d4fff68eac1237c754f3bd302c08",
    "capa": "https://i.scdn.co/image/ab67616d0000b27347c1e81c73c72b84be4ebeb8",
    "ano": ""
  },
  "07lEHXZYuhl0KpmXOYvwpc": {
    "audio": "https://p.scdn.co/mp3-preview/103bc2038117778469824d18cde6fa50e43f1d8d",
    "capa": "https://i.scdn.co/image/ab67616d0000b27347c1e81c73c72b84be4ebeb8",
    "ano": ""
  },
  "4KjHcvzmFeYo2ebthgKoJk": {
    "audio": "https://p.scdn.co/mp3-preview/59643d49ffcb615a50460dea86eae5f6f0ac965e",
    "capa": "https://i.scdn.co/image/ab67616d0000b27347c1e81c73c72b84be4ebeb8",
    "ano": ""
  }
};

const PREVIAS_ITUNES = {
  "1L5tZi0izXsi5Kk5OJf4W0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c0/7f/37/c07f37f1-a8e1-b093-f643-9e3bae02589b/mzaf_10374144630525520706.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5a/72/3f/5a723fec-965d-3483-89f8-d66b79f88419/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "4zQuwW24dweWcaX0fEJkP2": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/9c/5a/b89c5aa9-5433-68c8-38d1-75fd85862ffb/mzaf_17195324683878243507.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5a/72/3f/5a723fec-965d-3483-89f8-d66b79f88419/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "7or26qS3BfpTtWO3BFw5GE": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e4/5f/20/e45f200f-0d33-f243-0cf1-4a4d441c0ed7/mzaf_3845817776861087251.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "0sSdFMuYrn3N9moumV466B": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/33/12/d7/3312d7e0-aeff-0f22-2542-f2ff2e9455b9/mzaf_15336209522858658015.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/92/de/b8/92deb80d-066f-3dc1-4645-43121cb45879/13UAAIM81406.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "0RatRR1mlxEVR6WATH4jV3": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4f/7c/98/4f7c9810-eff4-cd01-a4f7-06be45909e79/mzaf_5718745609670022368.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5a/72/3f/5a723fec-965d-3483-89f8-d66b79f88419/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "37A5PvtftHtsISQUDFNGUk": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0d/f3/35/0df33576-4f54-5fe3-801f-e0fd4771e08f/mzaf_7288768040992996311.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "6yLX8QnxlnEqZfs3YKCfjF": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/da/95/46/da9546e7-19e0-a4b6-67bb-d8f7d8e8b0a1/mzaf_7162230293325845022.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "570ZDO2Lmh6NQChOU5xPUL": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/13/98/1b/13981b1d-168a-7d1d-6f02-2b55d74da023/mzaf_4732975566797542921.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "30FURVTCpbKyykjSEQzGkH": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e2/d7/bf/e2d7bffb-affd-eae0-dcb8-a47ba2bba259/mzaf_4498279717793174345.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "2i1S5Dq9SaFGcnw8mnb4ks": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f2/16/fa/f216fa76-f2e6-0496-94e0-7358a7718b5b/mzaf_15150181482436324878.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "5RqIM2vv5nw2PGJBqPD8Rg": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/39/16/6d/39166d69-9f63-3886-9da7-d972d9cf08af/mzaf_16068563076100282897.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/cf/3f/09/cf3f0994-980d-d8ed-088d-ae89af256b73/15UMGIM24224.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "5it9RIRXDwiLpJKdce6Z7e": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f6/69/8d/f6698de6-689b-a71d-a8c8-1ba840cc8a7e/mzaf_6599080501759689929.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "12TAfwmQSufwlerS9UJaQB": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/31/1a/21/311a216d-7288-1385-ac2b-a7ed2e33989c/mzaf_16688924512484475848.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "1DYCdxNAVNUCAOlAi7aP5o": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9c/9a/7d/9c9a7db1-8223-3c29-9f56-17034e162bac/mzaf_16101766052578805319.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "1w3KJgj6x75PiQm8Ppe0sS": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7c/8f/dc/7c8fdc65-417c-e7bd-6973-e1a6fbe33e55/mzaf_588168689133064585.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "1MdMYZN0VnpjTy6nBCM2Qf": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/c4/d7/5fc4d765-730b-5b18-113b-16c3c549d7a6/mzaf_14554350062892030232.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "7taSJbOhxfc7Vfto48gFKj": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0e/72/19/0e7219a8-b234-d460-7dc1-5999273f1e15/mzaf_16065262369256435689.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "7E4dtl5gWROiMKibvedh0i": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/db/54/ff/db54ff77-1cc9-7008-5102-3f84278b40c2/mzaf_2350512444256696799.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "4vCyAAMCZZ9r4443negeQO": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cc/3f/d9/cc3fd97c-ded7-f170-4954-4b6d08d9500b/mzaf_9247842202743464803.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5e/c7/70/5ec7700c-e3d8-7ef3-118b-f0d3af87e650/00602517458383.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "3GnlbPpTLBwz35Cg5sdxuX": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7f/45/6c/7f456c1c-dff7-38fd-69e1-2b6e53e515fc/mzaf_15394469072363643138.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5e/c7/70/5ec7700c-e3d8-7ef3-118b-f0d3af87e650/00602517458383.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "6OaexwzJ7LXIykBzRqpOmD": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/95/f9/0b/95f90ba7-0138-749f-edc0-82ccc34c0b29/mzaf_11813371800779940260.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "34Owb4rZbbKapQ4YFeuhVl": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0a/d8/27/0ad827ee-6e03-d72f-0b68-793e01f803ca/mzaf_8559521455332514908.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "40GTKaedGtzka8dlV4NuqI": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b1/36/06/b13606b1-f3dd-8111-3d80-a18c9767a8f5/mzaf_11457683374274045009.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "5LC7nItIEFp4nzdFdEGbf9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/31/b7/f0/31b7f0bf-f801-7028-a60a-db7efa53e849/mzaf_7777676706676508472.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "4NDpn6yfD5aqafYWFEaJDz": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ab/ff/70/abff707f-27b8-a5b9-d55a-feaffdbbbedf/mzaf_14760552962393985286.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "0LbK1bodGLc9xmV1cS9jvL": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f2/dd/e1/f2dde195-0aee-95ba-3d45-1cedf3ed1676/mzaf_12657082655227117952.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "2r45rookK2awLkiOHOef1o": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7a/34/05/7a3405d9-e3ed-6868-ca26-3cef79b024a4/mzaf_8037232924169241148.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/75/6f/ad/756fad44-4db8-bf8a-c645-6b689c138668/15UMGIM53725.rgb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "77RrNbeBUXb1Dtewp0HQuR": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fc/f1/a2/fcf1a2df-043b-5a2f-f979-99be672a1409/mzaf_17819018128689646002.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "7F5rIyOI88zk36AiBXC8xq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/3e/1a/1a3e1af9-cd64-6b25-dfde-07ab073d468c/mzaf_15892471367999308755.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "1om5SLZiUA9DVEnjcZBBzA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/f3/b3/2ef3b344-204b-f5fd-7139-696bee8eb022/mzaf_9552679745221494714.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "2G4rsUWjuBb6vPrUm01etb": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/22/37/0f/22370f43-f1f8-b490-d255-64d7e81ccb36/mzaf_5738403698338272718.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "7BizTaPDXSWVi8vdGeFg0W": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/72/9d/6e729d44-12db-3d54-046c-3ecfef21cd04/mzaf_5505102020901886518.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "4fdPpmqn1eYLyWRcxZmx2D": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d8/a2/65/d8a26544-fe4d-c0b0-4b2f-d70c84311aad/mzaf_10471040507725425923.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "4AyULNTWuCtbpxzY2qVowJ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b2/c9/5a/b2c95a69-563d-c465-bbdc-146185f8e459/mzaf_8307132401601410020.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/72/7d/ec727d2b-fd16-e9ac-141a-878c1d460e28/00602527920542.rgb.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "2qPwYT63eEx3JNWdVE6bb0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/09/7a/c0/097ac09d-e54e-efdd-8566-2e4c4a0183d9/mzaf_15257602113671429637.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/23/e4/fd/23e4fddf-56d6-3e4b-a8e5-557c05b40583/15UMGIM31140.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "1jLNxsmGsEQAM4CUkHemfS": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/c0/62/e0c062e7-ab24-fd91-308e-42aecb5fd98e/mzaf_12839762246679107063.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/3a/41/753a4173-a5c6-a699-948a-9d1719cca907/08UMGIM06584.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "2zJv4HwUarNnI0My2n6YF8": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/55/3e/af/553eaf99-f990-60bb-9e20-72ef2f00dbb6/mzaf_8684491093351294496.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/65/1e/65651e8e-51b0-9297-37ab-9a5c204aa72e/15UMGIM31140.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "4KNfNp4Et9nyLnouySvcFT": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e7/05/1e/e7051e4a-c311-059a-9939-7dac73abaa48/mzaf_7379594511274980489.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/65/1e/65651e8e-51b0-9297-37ab-9a5c204aa72e/15UMGIM31140.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "6QIdkhQ33eTSPBHu4NWl7l": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/44/1e/f1/441ef1e0-6444-bfb2-d6f9-453e97dc931a/mzaf_13258849956067908421.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/65/1e/65651e8e-51b0-9297-37ab-9a5c204aa72e/15UMGIM31140.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "5TImISmK9CQtBrt0rLbq0R": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c3/ff/fb/c3fffb8e-3256-292e-9468-a690f8d273f0/mzaf_3746781040322541303.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/3a/41/753a4173-a5c6-a699-948a-9d1719cca907/08UMGIM06584.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "15vtCacFbCWnRpSjvony3z": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b4/2d/7a/b42d7ac3-f056-69cb-1810-e60733617ede/mzaf_14673220472857352656.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/3a/41/753a4173-a5c6-a699-948a-9d1719cca907/08UMGIM06584.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "67c56hAEeU0cYTevlZQftv": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/31/5b/2f/315b2f80-ddae-8039-3546-b037e33b4bc7/mzaf_7989056733090991016.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/3a/41/753a4173-a5c6-a699-948a-9d1719cca907/08UMGIM06584.rgb.jpg/600x600bb.jpg",
    "ano": "2008"
  },
  "1HPLJmxBPEue4VnVlRpdXB": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/aa/cf/6e/aacf6ef6-0128-e764-daa1-a8a71d69aea9/mzaf_11444607203413509636.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/23/e4/fd/23e4fddf-56d6-3e4b-a8e5-557c05b40583/15UMGIM31140.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "7DKCNMc9Sc3bzWGvJXvVO5": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/55/3e/af/553eaf99-f990-60bb-9e20-72ef2f00dbb6/mzaf_8684491093351294496.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/65/1e/65651e8e-51b0-9297-37ab-9a5c204aa72e/15UMGIM31140.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "7kqXftmU2lrjgvEXm84uEx": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/c0/62/e0c062e7-ab24-fd91-308e-42aecb5fd98e/mzaf_12839762246679107063.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/3a/41/753a4173-a5c6-a699-948a-9d1719cca907/08UMGIM06584.rgb.jpg/600x600bb.jpg",
    "ano": "2003"
  },
  "0VWAQN2xGRDcLaSAdC5nF1": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/31/5b/2f/315b2f80-ddae-8039-3546-b037e33b4bc7/mzaf_7989056733090991016.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/3a/41/753a4173-a5c6-a699-948a-9d1719cca907/08UMGIM06584.rgb.jpg/600x600bb.jpg",
    "ano": "2008"
  },
  "3KX4eOXIkNHtbXNyfVERSt": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1f/10/19/1f101912-9b24-cf9b-3d96-1f4454e9fd0c/mzaf_2940453075578367530.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/fd/80/73fd8074-8df0-c058-091b-0fd8bce8b0fd/21UMGIM04140.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "7cXmS8a4SW2Wcm2Pca2S83": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/86/7c/bb/867cbbd1-ec0e-f97b-359f-869c4082fef5/mzaf_1874611345378932665.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/fd/80/73fd8074-8df0-c058-091b-0fd8bce8b0fd/21UMGIM04140.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "7gkKpedYwOnimoWcSyq0CM": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9e/46/3b/9e463bfe-dccf-0c76-b56b-f29c5d0a625a/mzaf_621800606245243064.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/fd/80/73fd8074-8df0-c058-091b-0fd8bce8b0fd/21UMGIM04140.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "4YsWbWozRpduVoiPIqZNt7": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7f/45/6c/7f456c1c-dff7-38fd-69e1-2b6e53e515fc/mzaf_15394469072363643138.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5e/c7/70/5ec7700c-e3d8-7ef3-118b-f0d3af87e650/00602517458383.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "6zphGshodNvFpQwBphwueX": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d9/34/ba/d934ba42-6d45-edec-3e17-2f2e3c46cff3/mzaf_8171484266840326420.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/fd/80/73fd8074-8df0-c058-091b-0fd8bce8b0fd/21UMGIM04140.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "5Qnm8Jwf3KsTopNnBlSAhp": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9f/b5/8e/9fb58edc-1dc4-0c1c-007c-4e539b46ba5d/mzaf_12707955426133942168.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/fd/80/73fd8074-8df0-c058-091b-0fd8bce8b0fd/21UMGIM04140.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "60InztMDeV2ZBuHWHBwNnF": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8c/38/53/8c3853ae-e300-e081-fa92-a2900390a273/mzaf_7055452965974749123.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/fd/80/73fd8074-8df0-c058-091b-0fd8bce8b0fd/21UMGIM04140.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "1SXkCvTFO4CBuA6j2VJ4Ud": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ce/e1/1b/cee11b9e-5478-a01b-907f-e2389a8089cf/mzaf_3776736810431372379.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/73/fd/80/73fd8074-8df0-c058-091b-0fd8bce8b0fd/21UMGIM04140.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  },
  "4lcOoKiLjBddCcg9FkeIJL": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/95/93/9195932a-ec1d-8deb-5665-dad9e993e04c/mzaf_6522838992137644711.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e9/f1/5c/e9f15caa-0c19-cdf7-4793-a8aa983e68d8/20UMGIM89613.rgb.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "0ofHAoxe9vBkTCp2UQIavz": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d4/37/e7/d437e72a-c41b-332c-f196-bee295a9d673/mzaf_11574904347171701919.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "4xh7W7tlNMIczFhupCPniY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/e7/93/4de79341-dec4-1beb-55c3-fd8286397135/mzaf_2240684441350405624.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2a/eb/dc/2aebdc18-c2c0-0fdd-fb85-07538a925700/603497925766.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "5e9TFTbltYBg2xThimr0rU": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9e/f8/31/9ef83126-c5cf-f526-c26d-0c25895e4d9b/mzaf_9883179573566934970.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "2ssyECwAX5JxtcAUTFw7wI": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/a1/bc/e3a1bce0-47bc-f6be-1e18-bf1253d0e7e9/mzaf_4082174660549720233.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2a/eb/dc/2aebdc18-c2c0-0fdd-fb85-07538a925700/603497925766.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "4nZi6XNe36Ut4Nij3IQ1yC": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/12/ac/1f/12ac1f8a-a3ca-8e49-4d5a-b0e5460938f3/mzaf_6633595999647848631.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2a/eb/dc/2aebdc18-c2c0-0fdd-fb85-07538a925700/603497925766.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "5HY7oAMG0FSMewubwIf3iS": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d4/37/e7/d437e72a-c41b-332c-f196-bee295a9d673/mzaf_11574904347171701919.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "5m5XW67LO8x72K0GusruVA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9e/f8/31/9ef83126-c5cf-f526-c26d-0c25895e4d9b/mzaf_9883179573566934970.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "1nWyUagJmVzvBGTMDeY73L": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d6/fd/73/d6fd7304-d92c-9145-d485-e81c7745f028/mzaf_15501725321895003254.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/dd/77/35/dd773533-06a7-4566-bef4-2c43c24d08f6/603497925759.jpg/600x600bb.jpg",
    "ano": "2013"
  },
  "254bXAqt3zP6P50BdQvEsq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d9/99/d8/d999d8b6-dbd7-a418-23b7-205b9b284392/mzaf_13069957188222082320.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/07/7a/2f/077a2f8e-d348-34be-fd5f-f7b655e1dc7c/603497872893.jpg/600x600bb.jpg",
    "ano": "1987"
  },
  "4CoSCPlKNrWli7E5kFtbcl": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6f/b9/8e/6fb98ecf-6cb9-2127-b171-0fc7e0db5229/mzaf_14043629361759092347.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/07/7a/2f/077a2f8e-d348-34be-fd5f-f7b655e1dc7c/603497872893.jpg/600x600bb.jpg",
    "ano": "1987"
  },
  "1QEzs30PUAJJPbHL1e4NYH": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e4/22/40/e4224082-edbd-079f-f531-67ef21b433c6/mzaf_1610916575224738253.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0c/73/fc/0c73fcc7-0d61-d994-af89-2909a39ea097/mzi.bfzyhzca.jpg/600x600bb.jpg",
    "ano": "1997"
  },
  "6ogxNURdCpRGmtOYbECyqg": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c3/ef/2a/c3ef2a01-cc0d-289b-f947-4c6d7da4c2e2/mzaf_5634252641783524654.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0c/73/fc/0c73fcc7-0d61-d994-af89-2909a39ea097/mzi.bfzyhzca.jpg/600x600bb.jpg",
    "ano": "1997"
  },
  "2hwFQrMDzCPUr8vCanCw0E": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/77/7b/cf777b09-5625-9a6f-d85d-f9d740d9b49f/mzaf_502147765358824084.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0c/73/fc/0c73fcc7-0d61-d994-af89-2909a39ea097/mzi.bfzyhzca.jpg/600x600bb.jpg",
    "ano": "1997"
  },
  "6PgcfHSocgnc4pjDgTuJcm": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/65/24/6e65249a-6249-d60f-a826-09f0575bd7eb/mzaf_1946366880625937275.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0c/73/fc/0c73fcc7-0d61-d994-af89-2909a39ea097/mzi.bfzyhzca.jpg/600x600bb.jpg",
    "ano": "1997"
  },
  "6xTtThCvuvIYHl1ddntJGj": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/69/53/ca/6953ca74-9812-1880-b73b-ca43e336cbbe/mzaf_13866092718243848878.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0c/73/fc/0c73fcc7-0d61-d994-af89-2909a39ea097/mzi.bfzyhzca.jpg/600x600bb.jpg",
    "ano": "1997"
  },
  "1EyAx19s8jM6gbCISGGqQW": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/13/12/eb/1312eba6-700a-7f99-7807-181f763d017b/mzaf_11629796470084915247.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/26/4e/ef/264eef1f-fcd6-4b3e-391b-828e585565b1/dj.cgxlkzjn.jpg/600x600bb.jpg",
    "ano": "2004"
  },
  "5pJoX8CeMlTYA8z5nXOtKG": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/e7/93/4de79341-dec4-1beb-55c3-fd8286397135/mzaf_2240684441350405624.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2a/eb/dc/2aebdc18-c2c0-0fdd-fb85-07538a925700/603497925766.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "6wJF4lU4YBCz24Y6Se898w": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d4/37/e7/d437e72a-c41b-332c-f196-bee295a9d673/mzaf_11574904347171701919.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg",
    "ano": "1977"
  },
  "4f9aRCqzooZAh6zePGsElG": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/af/2e/90/af2e90f7-675b-1d0a-6cbd-ee8dcbcf92fc/mzaf_15148833979242920655.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ce/ed/d9/ceedd97b-2aea-6152-8d99-37a061b88fba/603497863099.jpg/600x600bb.jpg",
    "ano": "1975"
  },
  "7fbnfPQni0EeRSdC4x5uq4": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c2/88/e5/c288e5f6-d8dc-d8a7-8d90-f8a609b3249e/mzaf_11381701045348127730.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/64/cc/0b/64cc0b3b-92fb-66cf-1240-e2afba504e4b/603497863105.jpg/600x600bb.jpg",
    "ano": "1975"
  },
  "6IPwKM3fUUzlElbvKw2sKl": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9a/b8/7b/9ab87b47-d974-1ad9-74ac-cb4b13b1e5f6/mzaf_4557361008487214760.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/bd/f4/31bdf42e-33aa-7968-c345-d09428c14856/5054526166202.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "6JrJFxjeZPkhXE41DGnS65": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0a/62/b3/0a62b30b-d3e5-e892-937a-e58266b8c6f0/mzaf_13775902061194432305.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8f/e9/68/8fe968ce-cae9-698c-c060-08289214a660/dj.actuezjx.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "5vFuoZLvUmAzzIiLSEhk0K": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/06/33/94063303-c732-6813-86aa-48a0376ceb1c/mzaf_12868923810003288836.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/bd/f4/31bdf42e-33aa-7968-c345-d09428c14856/5054526166202.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "7tLTxOJY6cjQz4aJYMs8Nu": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/06/cf/2a/06cf2a7f-61cd-873d-a141-b546f62fa9d2/mzaf_6901782489901429607.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/10/e4/8d10e444-169b-7bf3-2333-f726905aeda0/5056167163121_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "6GFrELGVKBXRcrTNkwjSfF": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9b/ec/5e/9bec5ea0-afed-547a-adcd-81237e8e09a9/mzaf_12765913767746660823.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "32XaqPVTVkkuOiOPQZ3SpA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5b/77/06/5b770679-ed45-4e14-5179-d9f99ff63591/mzaf_18169998579289029802.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "65wEZxhPlAERKLcSbTD7qc": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bd/0b/7e/bd0b7e3b-a2ff-a04e-278e-2985b15cbeb6/mzaf_10467372698849847128.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/10/e4/8d10e444-169b-7bf3-2333-f726905aeda0/5056167163121_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "4EoE743bWWiZ4ttkdPCNbA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d8/ed/07/d8ed070b-912b-8791-28ac-dbf1cf7c8997/mzaf_14201176557862104535.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/8d/10/e4/8d10e444-169b-7bf3-2333-f726905aeda0/5056167163121_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "1IvX2Dtx4OGoRy6E7fxcA6": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/71/d3/9671d339-f90f-cb08-a5e1-072d404ff5ee/mzaf_11526134664215845203.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "6rYgEHuyhO064Lgj48qlIe": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/66/a0/e066a081-33a1-291d-5340-216bca0bf0f5/mzaf_1521501850289028541.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "0o2KnhHD5nFFgbfL6cQtY7": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b7/c1/7e/b7c17e21-7a51-0fc9-6ad4-12ac2e0558ee/mzaf_9304262526073745448.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "5PjdC2gMATetx5xdnwGUu7": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/93/6a/2f/936a2f87-c849-f17b-6ef3-e6528ca97649/mzaf_14706820197094868485.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c3/53/08/c35308ff-7946-7612-ec72-ede771acc570/5054960920149_1.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "04OSnqlwlBJMvidYccraVz": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/74/c0/ad/74c0ad9e-a69b-5c54-e5bf-c472df933053/mzaf_9757947503008447386.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/fe/5a/0d/fe5a0ddd-614c-7d9d-c35a-7754b4098278/5054526224872_1.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "57j65yC2HggQfmYNc6rdOK": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/15/89/021589fa-2644-b48b-918f-b4104565224f/mzaf_2547726146153599989.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "14tud1FLjpHMYHpD2c7NbO": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/e3/2d/cfe32d3c-ef32-82ce-4988-a1adf129aff5/mzaf_15127178911392842859.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/e7/cf/1b/e7cf1b0a-2a9a-fe4f-0f7c-986a8cfb8a37/5054526896222_1.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3SEZEyvEALlomED5xFeqOs": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/15/89/021589fa-2644-b48b-918f-b4104565224f/mzaf_2547726146153599989.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "6tMwheKgpMHBcHtr8aYMn8": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e2/eb/8a/e2eb8a25-8ff6-5b31-fbfb-a441d478f0b5/mzaf_15761411777706516685.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6b/6f/e6/6b6fe6d5-68c7-46b4-c2a2-6d3736dbbf49/5054526402492_1.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "75enpZYDT6k0PNKu6SJ4W5": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/15/89/021589fa-2644-b48b-918f-b4104565224f/mzaf_2547726146153599989.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "2wHmH8OGgU6qi8NrLl0VRY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/15/89/021589fa-2644-b48b-918f-b4104565224f/mzaf_2547726146153599989.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "2dP8R44P2Lo3hdyevbYFfy": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fc/f3/9a/fcf39ac2-315c-b652-39a1-a7f455f42e16/mzaf_15231200299467278846.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/da/1e/69/da1e692e-f952-e1fd-1eec-92549277a73f/5056167128588_1.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "0g9BOSeEnmv7L2qoFQKyBB": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/15/89/021589fa-2644-b48b-918f-b4104565224f/mzaf_2547726146153599989.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/b0/43/c2b04314-f52f-3ef2-bb96-f03c0c5d1e54/5056167163206_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "53jbdPQBaH6WaQvW0zmGBs": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/65/23/20/652320c3-3804-ae65-a005-301c19bf992f/mzaf_14862424303889946417.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/4b/c3/bc/4bc3bca4-d8c1-256c-eace-f21dabb762a5/886447003992.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "1RujvyGPMWFGKAASzXmCpU": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3b/15/19/3b15199b-4058-47c3-a612-8a8b462fff65/mzaf_6172017267416861492.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/90/8f/88/908f8880-7559-84e2-0471-fb3d23dd1adb/886447885291.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "4aGvs7y4hQIbGss7zmEXKf": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/78/a3/f3/78a3f3d1-46c8-c6ef-07ae-1cda61e16027/mzaf_9685816540798294242.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/90/8f/88/908f8880-7559-84e2-0471-fb3d23dd1adb/886447885291.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "7zBPpr0lmDqho20xz1i4RI": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/6d/fe/c96dfec0-e12c-4423-d3f9-ba2498e6649b/mzaf_1152201194131841719.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/90/8f/88/908f8880-7559-84e2-0471-fb3d23dd1adb/886447885291.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3iiL6merNpFNX1bny9sfvM": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/62/7e/8a/627e8ae6-ba26-4668-97d6-283f357c8365/mzaf_4468538365926033610.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/90/8f/88/908f8880-7559-84e2-0471-fb3d23dd1adb/886447885291.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "4R87lF4uKzgCNL1bEJeXqa": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bc/fe/e6/bcfee622-bdc3-bbe1-86de-eef470e3798e/mzaf_14733915314300312551.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/83/4c/69834c81-f58d-8261-97ce-433ae3a84a5d/886446970974.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "3JjnGLK8IxkNLvo8Lb3KOM": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/49/cc/f3/49ccf3b1-204c-9db8-ad8c-83928a7cbfa5/mzaf_14305222560233955362.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/14/e4/98/14e49846-57a9-dc8d-6fa3-5e03ccf3606c/dj.ljogvxod.jpg/600x600bb.jpg",
    "ano": "2014"
  },
  "5O2P9iiztwhomNh8xkR9lJ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f6/ae/38/f6ae3840-e2c4-ff25-2546-cebe08431326/mzaf_15724118202843096992.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/14/e4/98/14e49846-57a9-dc8d-6fa3-5e03ccf3606c/dj.ljogvxod.jpg/600x600bb.jpg",
    "ano": "2014"
  },
  "4JaLkM90MJutDAl5jD9BZX": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/62/c7/71/62c771be-eebf-018c-147c-763bce2390ed/mzaf_9286965153948544843.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/14/e4/98/14e49846-57a9-dc8d-6fa3-5e03ccf3606c/dj.ljogvxod.jpg/600x600bb.jpg",
    "ano": "2014"
  },
  "4nVBt6MZDDP6tRVdQTgxJg": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/74/8c/90748caf-15d6-3434-4ebc-9ee2baa5b23e/mzaf_15186977162537594006.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/66/75/88/6675882c-3685-2b6b-f9de-c6d3e06602b5/dj.fuklqvvg.jpg/600x600bb.jpg",
    "ano": "2013"
  },
  "6twW4ma6w0mOeejejPK0nY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/79/5c/60/795c6017-cce4-69a4-3742-5a10a86df852/mzaf_12861205455764900157.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/66/75/88/6675882c-3685-2b6b-f9de-c6d3e06602b5/dj.fuklqvvg.jpg/600x600bb.jpg",
    "ano": "2013"
  },
  "2afCBiru10AFckfOa49wIa": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c2/e8/e0/c2e8e031-0855-c419-39d5-408f0c0069b1/mzaf_1784843304112430882.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/66/75/88/6675882c-3685-2b6b-f9de-c6d3e06602b5/dj.fuklqvvg.jpg/600x600bb.jpg",
    "ano": "2013"
  },
  "1dQQ2QlnvXUehsRUrukKmf": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f2/05/3b/f2053b95-50a5-6ab0-cc7a-8ddbe68b10f7/mzaf_5926780739100615611.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/66/75/88/6675882c-3685-2b6b-f9de-c6d3e06602b5/dj.fuklqvvg.jpg/600x600bb.jpg",
    "ano": "2013"
  },
  "2K87XMYnUMqLcX3zvtAF4G": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/be/1a/ae/be1aaef9-4493-ad7a-3dfa-d84f0d095dc6/mzaf_15552895106210973679.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/45/ac/db/45acdb3d-1a85-52e3-43d5-195f8f58067d/mzm.qyfviqnb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "3NLnwwAQbbFKcEcV8hDItk": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f4/03/d0/f403d010-8a00-91bf-b319-b331d49d1094/mzaf_12207467144119246085.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/45/ac/db/45acdb3d-1a85-52e3-43d5-195f8f58067d/mzm.qyfviqnb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "5AezhHjX3R1bmxcAEgrFpS": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dd/7a/3c/dd7a3c5d-f8fa-d7b6-bd10-8d57dd13d33d/mzaf_6026134963481278600.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/45/ac/db/45acdb3d-1a85-52e3-43d5-195f8f58067d/mzm.qyfviqnb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "5CRVwXGikmqzoRO6q7FeAg": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/68/ad/cf68adb9-5299-974b-bb6b-04e80afd7f78/mzaf_14465453770788432211.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/45/ac/db/45acdb3d-1a85-52e3-43d5-195f8f58067d/mzm.qyfviqnb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "5dONhl6aXFuN86UBdayF6W": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cd/e6/1e/cde61ea9-c8ff-c68f-1eaf-75aa87bc4faf/mzaf_15726095580404785737.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/45/ac/db/45acdb3d-1a85-52e3-43d5-195f8f58067d/mzm.qyfviqnb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "5omYVLodGmaxnhua99xIE8": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6e/72/69/6e726993-8e71-cc87-642a-d6f265034aee/mzaf_6292012639383276277.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/45/ac/db/45acdb3d-1a85-52e3-43d5-195f8f58067d/mzm.qyfviqnb.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "0TAmnCzOtqRfvA38DDLTjj": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a2/c6/fb/a2c6fb1f-c639-896b-e383-03576feca3be/mzaf_13232667208922084017.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/b0/36/5c/b0365c80-52f1-5698-5644-10802ba93472/886443503168.jpg/600x600bb.jpg",
    "ano": "2012"
  },
  "5G2c6FsfTzgYUzageCmfXY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/30/5e/45/305e458f-0ceb-32f2-ed8f-e126c1e62a3b/mzaf_2309664765528282421.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d4/76/c3d4765f-006e-c9ac-6b83-50ae04894eff/dj.dqbxwvpe.jpg/600x600bb.jpg",
    "ano": "2011"
  },
  "1Hv1VTm8zeOeybub15mA2R": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c6/db/56/c6db5666-4464-a6e5-d6e8-8d481b926e70/mzaf_17727462257578713488.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1984"
  },
  "5qehd5xIsEaifMFy3jcoYr": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f7/12/14/f712148a-f95b-965b-c69e-acb424ae63be/mzaf_8109552396201461660.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1985"
  },
  "7erXAfnatmoUow8DnbseOY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ea/1e/db/ea1edb55-53a7-0fa8-0648-f1593c70e44c/mzaf_5960685573840656187.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1984"
  },
  "1SvET7grrtsHT0CkyJjJcZ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/76/8b/52/768b52b1-5074-8c8d-5c94-c620cb3c91da/mzaf_3056761753785207334.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1985"
  },
  "4tReFKumS5bcFahdXDiM1b": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ab/07/fc/ab07fc55-b991-faf5-93d6-f5a1df92448a/mzaf_12283016280239904498.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1988"
  },
  "064wRZsHDLuoCJYw65gh7N": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/82/b3/8b/82b38b5b-7366-cc64-bf23-222aef2b4103/mzaf_16429939827520951049.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "65krtHkaYLPr0mEbjL61UP": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/d5/bd/66d5bdb0-be65-446c-7c1c-3bcdb4a32bdb/mzaf_15655078427481649690.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1993"
  },
  "38QnxZJMktnt96bxalqgEl": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/db/8f/d5db8fdb-7f7e-4865-0e1a-a5e4257757eb/mzaf_18087237138601545636.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "57R1nBluakXaayH9EzgwZa": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/55/cb/80/55cb8048-f6c0-9eef-1576-69a4271187aa/mzaf_4351851122006109774.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "1oaaSrDJimABpOdCEbw2DJ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/de/ba/4b/deba4b91-edf0-1b06-6e19-ea4e07ae8070/mzaf_14195090635642668997.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/18/c8/d7/18c8d7bc-8491-09e6-df0d-6e0a83ead680/mzi.wsikzifg.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "4PEGwWH4tL6H7dGl4uVSPg": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/54/31/fb/5431fba7-f8e2-78a3-680b-29f53f19f326/mzaf_4568317637618415745.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/18/c8/d7/18c8d7bc-8491-09e6-df0d-6e0a83ead680/mzi.wsikzifg.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "4S0NYVAQdIb81uLoZoQmgq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4d/4d/10/4d4d1099-d3f7-06a6-c4af-f82ad3c3fab8/mzaf_10268299450496380808.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/18/c8/d7/18c8d7bc-8491-09e6-df0d-6e0a83ead680/mzi.wsikzifg.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "22QiTJqDn1BIRSh4mkNJ5w": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f5/ef/53/f5ef5337-385c-804b-1716-09e6f7821d53/mzaf_1360705290361924160.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/18/c8/d7/18c8d7bc-8491-09e6-df0d-6e0a83ead680/mzi.wsikzifg.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "1XR1X1VTyTOVdPgH18RdME": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f0/7b/9e/f07b9e57-cd4e-3193-194f-7f777adaca90/mzaf_13093027703892715269.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/8b/22/0b/8b220bf9-7a5f-d266-3d39-c17d0070f3fa/dj.ylfbscrn.jpg/600x600bb.jpg",
    "ano": "1985"
  },
  "7pLuEMFougkSHXrPBtNxTR": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c6/db/56/c6db5666-4464-a6e5-d6e8-8d481b926e70/mzaf_17727462257578713488.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/ad/2a/5fad2aca-d998-701d-7b27-c074339d5fd0/886972262628.jpg/600x600bb.jpg",
    "ano": "1984"
  },
  "5nHNgVNXzsZLLBz29tfjkB": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/22/3e/12/223e12a4-89b8-26ce-881d-6cf412585871/mzaf_6329442913212196503.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/03/b9/57/03b957e5-8be0-59ac-4446-7cb65cb18c4c/mzi.kjlomnvf.jpg/600x600bb.jpg",
    "ano": "2002"
  },
  "16rxF3KcGLPtySHTCZCCVZ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/57/b8/3b/57b83baa-7f06-8dba-33fe-b2336c4a821c/mzaf_16456257676510333199.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/03/b9/57/03b957e5-8be0-59ac-4446-7cb65cb18c4c/mzi.kjlomnvf.jpg/600x600bb.jpg",
    "ano": "2002"
  },
  "4Y8qyqXEspJyiaFhTiiPoy": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/84/9a/a1/849aa1b1-0c78-3673-2d99-56e8b27b5c41/mzaf_7298743206648729850.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/03/b9/57/03b957e5-8be0-59ac-4446-7cb65cb18c4c/mzi.kjlomnvf.jpg/600x600bb.jpg",
    "ano": "2002"
  },
  "1WFao0rkH7gKrxvTowXxnq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/30/29/82/302982f2-bd07-32f1-5820-f4e3aed88476/mzaf_17594068525709394388.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/03/b9/57/03b957e5-8be0-59ac-4446-7cb65cb18c4c/mzi.kjlomnvf.jpg/600x600bb.jpg",
    "ano": "2002"
  },
  "0Q0IVlqMV64kNLlwjPj0Hl": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/88/40/26/88402662-329d-8c34-ef72-863f9f2926bf/mzaf_3130005416732108579.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0e/d1/5b/0ed15b14-271c-35d5-5909-49f18fbfb32b/886445600605.jpg/600x600bb.jpg",
    "ano": "1996"
  },
  "2GFExyKXf9383tSRSrEHEt": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/68/f0/0b68f0ee-3355-a22d-92a5-0a2085879b85/mzaf_12954119042381142514.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/09/6b/55/096b55c4-ee8f-23bd-df8f-0ca0821f3028/886446727189.jpg/600x600bb.jpg",
    "ano": "1998"
  },
  "1EXotCuzdXR34W1MoP6Um7": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/56/ab/c5/56abc530-a0b4-063f-a3fd-ae4fa8f8ef57/mzaf_9993714916275924721.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/04/40/43/04404388-5f59-d20d-a12e-b99d5b3bc748/886447376317.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "4clA3kZ6nDN7f0nOV9SGtA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bf/1b/a8/bf1ba8f2-0988-b9e3-3da5-9eb7c53b6e20/mzaf_7771590099010817608.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/79/93/c4/7993c48e-8872-7a38-27b9-9b3333ec64ea/5056167168010_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "69JDuGOWSe7rPHZukh8XeR": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0f/40/27/0f4027cb-7e2b-1091-fb3e-86b3f68fdd59/mzaf_1565931610991699768.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/79/93/c4/7993c48e-8872-7a38-27b9-9b3333ec64ea/5056167168010_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "7ziPRO2vBbYDzpqpkual3s": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/08/87/cd088703-3f37-be87-f110-1703834d7813/mzaf_9400409505217087083.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/79/93/c4/7993c48e-8872-7a38-27b9-9b3333ec64ea/5056167168010_1.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "1ksODCBCw4UEuWC0yRHpPZ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/96/ea/23/96ea2382-2812-7b45-0b57-d4ad006ce894/mzaf_5001506400989028046.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b7/ac/bc/b7acbc61-6670-cecc-cfb5-123722f44dea/075679834478.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "1wiphSU5URcMkpMoGK5mFO": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/c1/4b/eb/c14beb6d-be75-2bdb-0bde-113f8cd691d3/mzaf_17081894283990063824.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/dc/8f/e8/dc8fe837-6a22-9791-8795-c5ee347647dc/50ft._Originally_Performed_by_Lauren_Jauregui_Karaoke_No_Guide_Melody_Version.png/600x600bb.jpg",
    "ano": "2020"
  },
  "180WImKPbvdUrboKUov5f4": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/61/7e/ce617e39-d5fd-9fd5-162b-f6dd39220441/mzaf_16842709177527223421.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/fa/a1/a6/faa1a6b3-463f-9e5c-4cab-6fb85b96f71b/886447441367.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3NpsflsHTAoand4Jl3ruP7": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/bc/71/cfbc7171-8e56-fd88-4bec-1fa40f081149/mzaf_4556404143605317605.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ab/fd/5a/abfd5a4e-a425-d5c0-c739-6341e2347d45/17UMGIM00863.rgb.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "3NgCzSW98SsqBdpYcnm4kv": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/52/28/b8/5228b8ea-9979-2fab-f430-efed6801e191/mzaf_14013187583556445790.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/60/61/42/60614202-6e1e-5938-f898-0461898d0b94/886446506159.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4xBjsLUSjcx2h7PcRikpQp": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/20/b9/6b/20b96b1d-1810-7b4a-c607-234d9b5f1e0c/mzaf_16750380198334044155.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/17/60/94/17609416-ae53-8fea-393b-baa73f4d5428/886446672960.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4eWQlBRaTjPPUlzacqEeoQ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4e/7b/a2/4e7ba217-b7cb-0df2-2ea4-19120bd497bc/mzaf_3130532990706214969.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/28/70/85287029-19b9-cbe3-d1ab-300781875bf4/886446870298.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4XLu3tTSZiPFVC9mmuR6Zp": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2e/02/b2/2e02b2ef-eff7-5a9a-1044-3e59796b6e2f/mzaf_17304395196343968876.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/28/70/85287029-19b9-cbe3-d1ab-300781875bf4/886446870298.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "5HwnezK198pJCEj1l2Adjy": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/80/3f/82/803f8244-0bbd-b834-2b51-efe5d118da59/mzaf_1682700246221642754.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/28/70/85287029-19b9-cbe3-d1ab-300781875bf4/886446870298.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "7sTtHHrD0zDpmzQzH3zegz": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b1/61/ed/b161ed94-26bc-381b-cd81-ed6ec757b42f/mzaf_12796758337392836688.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/28/70/85287029-19b9-cbe3-d1ab-300781875bf4/886446870298.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "7IL3UOlcJ6nmcCMwpnlfcA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/93/f3/01/93f3017e-cb7d-5c0a-7990-4c0997083527/mzaf_7920629274684178187.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/28/70/85287029-19b9-cbe3-d1ab-300781875bf4/886446870298.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "1GO9vCm5Cra5uWGSWQ5mGK": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cc/03/dd/cc03dd27-548c-8bf1-3137-79471decbac5/mzaf_2315205273614510124.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/28/70/85287029-19b9-cbe3-d1ab-300781875bf4/886446870298.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "2gxqozTaq2NYylvS8jd57G": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/12/ba/8e12ba2c-e985-3c2b-0506-976af91d712a/mzaf_8118349790125337413.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/85/28/70/85287029-19b9-cbe3-d1ab-300781875bf4/886446870298.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "2ogKhhoMClkFXek7ZgxAhN": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/59/7d/ce597d1a-1c55-7a0c-a19e-0b052a4250a8/mzaf_6182093257318354435.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "4jFD7byoPdGkEdjHLMduR9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/85/6c/dd/856cdde4-b1b5-21d7-3e48-b021f6952312/mzaf_8296541274300983641.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "0sHc1EEeOnmgjP6QmsR7px": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/62/9e/f3/629ef3fb-13b6-a4c4-c75f-bd7a61fe7d98/mzaf_18007425983513003467.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3yOlyBJuViE2YSGn3nVE1K": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/c2/28/e3c22828-281c-b3e6-3553-a1690784f677/mzaf_2558720137181385830.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "0Q2kFlgnqusKAqCDpCKAIY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/48/b7/ba/48b7baed-6291-6dd9-2bfa-4c76e2fea0d8/mzaf_18090733568625729028.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "7DoNtK2gVFRwJh0hkHe5wQ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e7/ec/e6/e7ece676-4102-3a44-91e0-34f946773e66/mzaf_4775089895321400876.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "39jcp8zJH7nHWbB7Hr3sFJ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9b/fc/8e/9bfc8eb7-9827-4a75-7793-f13f545326dd/mzaf_12593336639049316666.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "1Ff71LUQO0KBk5Slu3K6Vu": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e2/20/b1/e220b16d-95f5-5764-5450-d9635064ad83/mzaf_8327042490839835599.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3r73OmpBtQAwMgawxOmlg0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ea/12/b7/ea12b7dc-5c97-78f4-d50f-245556fae18e/mzaf_15370711589140953574.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c5/d5/7e/c5d57e36-4270-8730-d009-5e82a71016f7/886448121220.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "5FLzLuPyBEppywIJprqwDz": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/90/77/129077ec-6f28-e6a4-3bd6-fa2e187c8ab4/mzaf_1332984076385830541.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/79/92/02/799202e0-e353-18e6-3bfc-171c52befd3b/196589070869.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "0hO71r8vbnrXSaXVrR9ptF": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/65/69/88/656988cd-b2ef-578a-450d-f94db066b2f0/mzaf_11535660420044123436.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/18/2b/68182bf5-9966-592a-9b4d-23bc598ae786/dj.ehopqips.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "0gL0Xf8CN95HmgfEYYLRZV": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/35/48/87/35488757-268d-47aa-2b7f-5c6c356a42da/mzaf_7300996354403807667.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/aa/68/d5/aa68d527-9c7a-4663-0e63-cec717a39a8f/886444055055.jpg/600x600bb.jpg",
    "ano": "2013"
  },
  "22kXvw7mAvMvyZxPnhYzaa": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/af/58/cc/af58ccbf-01c2-47a5-eeff-7b4c054d78f9/mzaf_17751447875769911094.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/73/3b/da/733bda99-d0c8-02b2-db8f-ae9a87a5d933/886445740448.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "2GiJYvgVaD2HtM8GqD9EgQ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/8e/bd/198ebd2a-f7b5-b82c-9db2-cadbfe2f9240/mzaf_9391082379687958798.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/07/37/8e/07378ef3-7950-ba76-4280-9acb0e5d032a/15UMGIM42534.rgb.jpg/600x600bb.jpg",
    "ano": "2014"
  },
  "1Dr5JexwA15wmKe7Y7maA9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ba/b6/5b/bab65b54-b62b-afe7-7b2c-42d17c175479/mzaf_180048884343447783.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/07/37/8e/07378ef3-7950-ba76-4280-9acb0e5d032a/15UMGIM42534.rgb.jpg/600x600bb.jpg",
    "ano": "2014"
  },
  "7sq2z9oX2S0CvgTqCZ0ko4": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/37/6d/7c/376d7c8d-de15-4c80-5fe2-0f28cd10b0b6/mzaf_17174043259588204388.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/de/70/ae/de70ae46-fdc3-6c8f-142c-6f3df6561860/20UMGIM07683.rgb.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "09IStsImFySgyp0pIQdqAc": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/09/2e/bd/092ebd02-095a-42a6-d791-906ba123f334/mzaf_15154380144930132309.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8d/86/72/8d867252-5fb7-a83f-ab81-07d07db8c628/18UMGIM02231.rgb.jpg/600x600bb.jpg",
    "ano": "2018"
  },
  "1JO1xLtVc8mWhIoE3YaCL0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/14/48/23/14482339-0094-4661-a759-5a63725d4b64/mzaf_10375692303356175728.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/28/95/77/289577d1-0b0a-400d-0698-17b784b76c15/dj.kwkktnnd.jpg/600x600bb.jpg",
    "ano": "1967"
  },
  "1IF5UcqRO42D12vYwceOY6": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c2/fc/19/c2fc19bd-c105-f2eb-6de8-d2dbda81b184/mzaf_3048822265976901940.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "33bURv895AN4FkBvgFo2dx": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/18/29/21/182921a6-724e-2eb6-d610-c4bc7428c4dd/mzaf_3846959371352939087.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "5LABCxgmP7DATATIJXOh6n": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a4/f3/e8/a4f3e886-cf0a-eff7-0c37-2fd2858acee5/mzaf_8128832497495704388.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "33SNO8AaciGbNaQFkxvPrW": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/53/3a/2e/533a2efe-0834-9e27-2385-23f55b607431/mzaf_14398611850523120023.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "5Lbsc65org0b85kNsPkluY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/23/8b/e0/238be042-92ae-fc80-93bb-2f4b18523f3a/mzaf_14737965379104639207.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "5kRPPEWFJIMox5qIkQkiz5": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/01/18/41011809-5d2f-4fea-b8a2-b34a65a1e827/mzaf_9324748603234100318.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4B1rpPmQXwj78wk6aIGwwU": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a6/60/76/a66076b3-146e-d139-b4e5-b886b415b233/mzaf_8641977997012641675.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "3Dwq1oiOFys6Sxr5SslmXw": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b6/6c/75/b66c75c1-9559-d188-241d-fbecbe1b3f4b/mzaf_9753067714686421764.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "5Ohxk2dO5COHF1krpoPigN": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bd/58/37/bd5837c2-3b3b-5f32-c292-fc0af38f6ea6/mzaf_10433939766410649853.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4u9Y4Z9i9VaAbBK7rW1Rha": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0d/aa/a7/0daaa737-6b41-c4df-2700-c6aa4cfcd7b9/mzaf_16055171738506954102.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "6VzcQuzTNTMFnJ6rBSaLH9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/37/37/a8/3737a83f-e7f0-1b31-f6ed-ee36e50df7d5/mzaf_1789723567790379268.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "03mMSLEJCPoGJwQhHpN5y0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2c/07/31/2c07316a-38d6-994c-6595-de4fc9edd984/mzaf_5008321787014484240.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "5IhzJOXNE7ki0IIJbZbnGq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f4/37/7b/f4377bf1-d852-a021-7a04-f724b3a00c21/mzaf_6049511224391402809.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "6iYMfxznTBlcVOgRHab2W0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/75/1a/30/751a301b-9a03-41d6-7e80-c6df43e69c52/mzaf_6273049013570652218.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "6SQLk9HSNketfgs2AyIiMs": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/33/21/1c/33211c9d-94ba-6c18-ad6c-32f37a8d3d3a/mzaf_3367571137930866528.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "5JiH89mHrv9oWHlD0T326z": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/15/2c/cc/152ccc0d-afb1-b795-f397-33b370f9078c/mzaf_787150696217791240.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "1ZMiCix7XSAbfAJlEZWMCp": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c9/0f/88/c90f88a8-df5d-96bf-fd25-43d554a2e897/mzaf_6453555596864780419.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "2IOFZdYYkFxEHVz1w34PoL": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/95/77/1795778d-8d67-0adc-98c9-7a2d093a052a/mzaf_10611827638416768514.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "4jAIqgrPjKLTY9Gbez25Qb": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/aa/ce/b6/aaceb698-4192-e4ee-9fa2-e1c764bf6a6f/mzaf_4355979813716857628.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3jjujdWJ72nww5eGnfs2E7": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/75/41/de/7541ded7-1699-85a7-0723-65f913ecc8a8/mzaf_8413154903682037570.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "45S5WTQEGOB1VHr1Q4FuPl": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ea/30/a6/ea30a68d-a13a-39fe-2b03-6d568c8cf735/mzaf_15210582114357314440.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "5LYMamLv12UPbemOaTPyeV": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/db/30/2b/db302b37-7cfd-947d-b168-2288df0594d9/mzaf_4879334278137199118.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "1qEmFfgcLObUfQm0j1W2CK": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e3/a2/04/e3a204b5-c3f6-f49d-a97c-4472f8b045d7/mzaf_18322387550227682410.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "4j6kId9QIqhoXvqHKgSKa0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/e9/fa/91e9faf4-c012-2b83-f2e3-9204635561d9/mzaf_1722014334768721753.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "51Zw1cKDgkad0CXv23HCMU": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0e/d7/aa/0ed7aacf-6c72-39b2-7731-05ad74ac85e2/mzaf_11719631527113093480.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "3i058E8uxTsYqJ5NWZzqSj": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/cf/21/4bcf213b-4fad-9304-8752-34ef30e1716a/mzaf_11010657058817410926.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "6uvh0In7u1Xn4HgxOfAn8O": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/03/29/7d/03297dd4-5dbe-4ec6-9480-f40846b7181c/mzaf_15378071810157311314.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "2NcQic8JxdjAlAHuNbOIRE": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/86/86/a3/8686a35e-5715-c687-1b58-4bcbc63d8460/mzaf_8394697523670552560.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "0rzaRSujxA0bKyjJl6vHYq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b0/ff/d0/b0ffd005-3f1c-34d6-3123-ae829457a409/mzaf_865652897910996010.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "6qj02zSeEJGWZ4c0dn5QzJ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1b/d2/bf/1bd2bfaf-601f-36ab-ec50-63d7d91cf8bb/mzaf_15843941691377993426.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "1mw0RgNXIpYRyyCdBQbLgA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3e/37/ed/3e37edc2-b02e-c3fd-bd1e-6f9548b910c2/mzaf_10631950686010316714.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "1GDF5AusV7p0wwi4OVNz3i": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a6/60/76/a66076b3-146e-d139-b4e5-b886b415b233/mzaf_8641977997012641675.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3d/5e/aa/3d5eaaa3-9a86-c264-5cd5-7fac83f99a59/886446451978.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4rUqU8SKMG22liqDKsiIp9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0d/17/87/0d178776-0f79-81f7-482c-ea58b6352176/mzaf_8040985485906892156.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f7/c4/10/f7c410b9-676b-b2c7-dad6-ac8a03ce8267/196873640891.jpg/600x600bb.jpg",
    "ano": "2025"
  },
  "2t4RCWbICUqhPKVQeA7VPq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/dd/2a/cedd2a90-0cef-e7a2-e9b1-ac724cd5f3d4/mzaf_3700786235502049142.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8b/6b/33/8b6b338b-5173-8d3f-312b-a32e00aec6ba/196873640938.jpg/600x600bb.jpg",
    "ano": "2025"
  },
  "7B9zspndqbrSXXUwVNeTCe": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/22/8e/7f/228e7f49-8ba1-4526-1283-9ecb7ee09a89/mzaf_4046373902822662971.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/76/88/13/7688131c-724a-d488-da1a-efdf04168cfb/196873640747.jpg/600x600bb.jpg",
    "ano": "2025"
  },
  "5hYP7TDRmkJPrgYdIy500S": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/49/5b/12/495b12e7-85a2-85d3-17c5-319e0bdc4669/mzaf_17272739587319701231.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/76/88/13/7688131c-724a-d488-da1a-efdf04168cfb/196873640747.jpg/600x600bb.jpg",
    "ano": "2025"
  },
  "1BK1d7b9bhlbKpQPbYGsol": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/de/b7/77/deb777f3-bf12-ea4c-5c32-00b73bdc99bd/mzaf_14366057556300539104.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/76/88/13/7688131c-724a-d488-da1a-efdf04168cfb/196873640747.jpg/600x600bb.jpg",
    "ano": "2025"
  },
  "4pt5fDVTg5GhEvEtlz9dKk": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c0/9f/bf/c09fbf98-c985-0f52-fd3d-298d229359ef/mzaf_2166255199165340532.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/09/aa/f1/09aaf1a6-8670-433c-91c8-694623103964/4582649363396.jpg/600x600bb.jpg",
    "ano": "2024"
  },
  "776AftMmFFAWUIEAb3lHhw": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5a/1f/86/5a1f869d-8fdd-e0eb-e4a6-69130eed7657/mzaf_14131122941770077941.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5e/76/14/5e761416-1c55-1b56-e8c3-177fb475bef2/886449160334.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "3Wrjm47oTz2sjIgck11l5e": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/76/5f/db/765fdb18-6421-bf37-813d-fd00f14fbfd4/mzaf_5193356525080895049.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/67/08/e0/6708e014-c1be-76b1-c520-a6567bf946a2/886446867755.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "7HMz8o0m7ASQ3ImFPfhWTY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0c/01/fe/0c01fee0-dba9-7e92-8fb7-020a216a693d/mzaf_14535768332441163296.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4b/1a/72/4b1a7220-bee2-8664-7153-adffa8d3df1e/886449063819.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "5Njbm0SdToCWO5bgLY8Yqw": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d1/9b/b8/d19bb8cc-e648-be4d-da84-e4eb62dfd31d/mzaf_12091612914889722522.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/98/76/d3/9876d335-084c-deae-a8dc-c8ab1d1fe251/4099964207323.jpg/600x600bb.jpg",
    "ano": "2025"
  },
  "0XdZ6YWnTtkQcMlDXE2qFN": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b4/b3/6a/b4b36a31-baf9-71c0-4d7a-edb3036e07d3/mzaf_13534444769281484063.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ba/bb/07/babb07da-7aa5-265d-45fb-8ddbad824b14/4050538836639.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "15JkWkQqlUffU29B1oKUKH": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5a/f3/ee/5af3eea1-c168-293f-7f1c-ae58d7f9058f/mzaf_2346272619575079462.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ba/bb/07/babb07da-7aa5-265d-45fb-8ddbad824b14/4050538836639.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "4QU579S6uCG9vWaHUeGnLp": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/ad/d8/8fadd82f-4e86-7a9b-40e0-ed1245d2f43f/mzaf_15357249155273114151.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ba/bb/07/babb07da-7aa5-265d-45fb-8ddbad824b14/4050538836639.jpg/600x600bb.jpg",
    "ano": "2022"
  },
  "3zxrecYFao03IrrcyFiaMU": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9c/1d/8b/9c1d8b6d-0fbb-5ab4-344d-f3355a8d9fed/mzaf_8816367376419252685.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/51/02/30/5102301b-17c2-80e5-7f4a-677d9c334375/886446898995.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4emicu3yCflgo7z6cAuw5j": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/3f/15/ce3f15b8-7ab2-9226-9cd8-d5dff8d24d25/mzaf_9790825792877102172.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/74/9b/f4749bfd-8cc6-e581-e4f0-acb390f856e6/886446622071.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "1eqwjXdMTed8Pz3PLNcHe9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/21/6b/9f/216b9fa1-fee8-0014-e888-04679163e38f/mzaf_8199023787408026096.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/74/9b/f4749bfd-8cc6-e581-e4f0-acb390f856e6/886446622071.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "2Ov6faSCGlnn4tbbZQYAJQ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/75/ea/c2/75eac2d2-3be7-7756-5545-81fd598a1d2e/mzaf_1329123445586476486.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/74/9b/f4749bfd-8cc6-e581-e4f0-acb390f856e6/886446622071.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "5KcT9rJDqQJUSFF3O9wPJ5": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/98/b9/20/98b92003-f1c1-29d5-a534-6588f55307c6/mzaf_16599694099996016777.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/74/9b/f4749bfd-8cc6-e581-e4f0-acb390f856e6/886446622071.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "74YzCrLzu7fw0AasX3CEwv": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f0/af/d6/f0afd611-d9e6-510e-8991-ebdce1533b84/mzaf_5714620718265556527.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/74/9b/f4749bfd-8cc6-e581-e4f0-acb390f856e6/886446622071.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "7A7RygcHdNH0iJHgwteajF": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c5/9d/8a/c59d8a0a-1f70-5549-4ba8-2b9974e1627e/mzaf_1840755413754953817.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f4/74/9b/f4749bfd-8cc6-e581-e4f0-acb390f856e6/886446622071.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "55n9yjI6qqXh5F2mYvUc2y": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/14/20/94142074-e264-15cb-77ea-a0821d86c5ca/mzaf_5791146158719480684.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e5/9b/1e/e59b1eaa-92d3-df4b-73f2-9bd798feb630/17UMGIM01263.rgb.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "0PDUDa38GO8lMxLCRc4lL1": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/87/28/8d/87288dea-b272-249c-053c-daa136b8b666/mzaf_10402874086059121663.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music18/v4/19/62/50/19625022-d397-6de4-7918-c24c7dcc6609/886445922097.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "6lvsJDZ7336YmpBzcNGhbe": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/71/f0/c5/71f0c5bc-fcac-36cb-8d29-72f279ca5ab0/mzaf_9355346378130721605.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/17/40/c4/1740c467-3fc5-d1b9-6a94-b45b445da794/886445750775.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "2G2YzndIA6jeWFPBXhUjh5": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/54/d7/d554d723-0518-a447-603b-a8fd52b70d8d/mzaf_1392428010167942483.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/94/45/82/94458262-998b-3a64-5461-b9230a55643e/mzi.xefbhabm.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "1WN4uNclrDuczTO3bCr8s1": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/06/ce/70/06ce701e-ac41-6211-e2f5-2d8ad2c9a214/mzaf_1045130405855876957.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/17/05/50/17055031-c0c1-7e73-42d9-5e3517236f02/886443431355.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "5J2CHimS7dWYMImCHkEFaJ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ff/fc/b6/fffcb61c-6eae-4bfc-0aeb-2c108e37daa5/mzaf_8090789301194267540.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/db/a2/7a/dba27a46-3685-508d-d32e-a0e73cc82251/00602567713296.rgb.jpg/600x600bb.jpg",
    "ano": "1964"
  },
  "1hgvykolO4kBIEozATmpyj": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/e5/74/64e574ae-bc3c-5f15-2111-622ecf974e82/mzaf_9634985036031355975.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/db/a2/7a/dba27a46-3685-508d-d32e-a0e73cc82251/00602567713296.rgb.jpg/600x600bb.jpg",
    "ano": "1964"
  },
  "65vdMBskhx3akkG9vQlSH1": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/43/e0/95/43e095c6-ef7c-d45a-7fbe-ab89b37e0336/mzaf_18008742720880760686.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/db/a2/7a/dba27a46-3685-508d-d32e-a0e73cc82251/00602567713296.rgb.jpg/600x600bb.jpg",
    "ano": "1964"
  },
  "3SdingSsFcZDZAyvcJbgAw": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1c/1d/4b/1c1d4b36-db20-02bd-d867-0808fdbb120d/mzaf_12888580731973632250.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/db/a2/7a/dba27a46-3685-508d-d32e-a0e73cc82251/00602567713296.rgb.jpg/600x600bb.jpg",
    "ano": "1964"
  },
  "2EqlS6tkEnglzr7tkKAAYD": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/97/b5/e4/97b5e459-d7e7-9806-2a87-96a760eca8ea/mzaf_16460868857902969803.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg",
    "ano": "1969"
  },
  "0pNeVovbiZHkulpGeOx1Gj": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/55/7f/fe/557ffe43-d824-a8a0-5103-3c7dd14f3cb6/mzaf_7875382923244631250.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg",
    "ano": "1969"
  },
  "2mxByJWOajjiVsLWjNXvDJ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b3/f1/e2/b3f1e21d-bd25-8651-5c76-86e7cdd9477c/mzaf_6540308084326367590.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3Z25k4ZF6QENy2d9YatsM5": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/75/f5/cf75f550-6a92-a71d-d7b7-982353eebfab/mzaf_11197924861025522154.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg",
    "ano": "1969"
  },
  "2jtUGFsqanQ82zqDlhiKIp": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1c/7d/78/1c7d7860-2143-a1f1-52b2-a58dfceb20b4/mzaf_18115840505977285360.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg",
    "ano": "1969"
  },
  "7DD7eSuYSC5xk2ArU62esN": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/c1/c1/90c1c133-02e3-255d-3a0d-e70c5a404bc5/mzaf_14127376946151186172.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1a/19/db/1a19db26-17ad-b986-11a9-f72ac7a6194b/18UMGIM31214.rgb.jpg/600x600bb.jpg",
    "ano": "1965"
  },
  "3BQHpFgAp4l80e1XslIjNI": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d1/69/2d/d1692d74-fe32-c676-7a1d-00deacae1644/mzaf_11316115358642175957.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1a/19/db/1a19db26-17ad-b986-11a9-f72ac7a6194b/18UMGIM31214.rgb.jpg/600x600bb.jpg",
    "ano": "1965"
  },
  "6EHuOufBeL6vk3TvVJB5qo": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/eb/a3/81eba328-af34-074b-42e4-282347200e52/mzaf_16859398385869441809.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "3VbGCXWRiouAq8VyMYN2MI": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0d/cd/b5/0dcdb53d-e336-d5f5-be7c-927bda09785e/mzaf_2684842830409832377.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/600x600bb.jpg",
    "ano": "1962"
  },
  "7Msq9qojB7yORuJvz49iUy": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/30/89/ad/3089ad65-3d94-33e2-4c8d-e60219c0522f/mzaf_10077895806964988015.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/600x600bb.jpg",
    "ano": "1962"
  },
  "5ZBeML7Lf3FMEVviTyvi8l": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a1/da/74/a1da7475-c355-8ecf-f46a-2ba0e8571561/mzaf_6982524764313957424.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "3Am0IbOxmvlSXro7N5iSfZ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/50/dc/3e/50dc3ea7-0c12-3a54-cbfa-874c8e1e9730/mzaf_8056056744713597418.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/43/0e/37/430e3790-75d5-c96a-1380-f9d9803aa700/18UMGIM31245.rgb.jpg/600x600bb.jpg",
    "ano": "1967"
  },
  "0BowNHHxtXVyLMXxS31LBe": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d4/a8/89/d4a889e9-39df-cc1c-2386-4bc00670b2f1/mzaf_17078299930052458204.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f2/98/fb/f298fb48-1e0e-6ad4-4cff-fb824b77f02e/15UMGIM59587.rgb.jpg/600x600bb.jpg",
    "ano": "1962"
  },
  "6dCq7bLa4j3ZFkOGeUbInk": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/eb/a3/81eba328-af34-074b-42e4-282347200e52/mzaf_16859398385869441809.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "39js8qHOPRhKMxl6Qxg55F": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a1/da/74/a1da7475-c355-8ecf-f46a-2ba0e8571561/mzaf_6982524764313957424.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/9c/ff/b5/9cffb5a6-a37f-c84a-7240-0333a071bc92/00602567725275.rgb.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "72cBk2iqWcax9eoIXGNVM6": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/97/51/fb975149-e17d-e5a4-40df-322da7bed1bc/mzaf_11720271898412889158.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2a/4a/e6/2a4ae63d-ada7-fa57-6f16-02eebcf72f95/18UMGIM29770.rgb.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "0g1NjFyzJ6FFEOTsuiJLdv": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/d4/84/99d48419-cbd2-4d45-ad5c-60a581ff126e/mzaf_10364932228692401724.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2a/4a/e6/2a4ae63d-ada7-fa57-6f16-02eebcf72f95/18UMGIM29770.rgb.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "01K1zFyjJhG2Qk7PIkSAEA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/00/12/b0001223-6811-a3e6-821b-fde710e23567/mzaf_8004256470886717691.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f2/98/fb/f298fb48-1e0e-6ad4-4cff-fb824b77f02e/15UMGIM59587.rgb.jpg/600x600bb.jpg",
    "ano": "1963"
  },
  "4iVudOuRcKPGK8y7GqSZKP": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/09/4d/3a/094d3a23-b1b0-6e5b-1d26-52d84206bf09/mzaf_11776190903459074582.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f2/98/fb/f298fb48-1e0e-6ad4-4cff-fb824b77f02e/15UMGIM59587.rgb.jpg/600x600bb.jpg",
    "ano": "1964"
  },
  "7nGA8YRPmsDmLZ55DIGEdC": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/80/d1/79/80d1794e-5436-d7be-6d87-4b1192ea82ce/mzaf_9751547977953400308.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2a/4a/e6/2a4ae63d-ada7-fa57-6f16-02eebcf72f95/18UMGIM29770.rgb.jpg/600x600bb.jpg",
    "ano": "1964"
  },
  "5VTVK2RtOj6tKH9OPKMht7": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a3/a2/2e/a3a22e01-7cce-ae80-be63-8e20c4977eeb/mzaf_1542177003021542830.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/2a/4a/e6/2a4ae63d-ada7-fa57-6f16-02eebcf72f95/18UMGIM29770.rgb.jpg/600x600bb.jpg",
    "ano": "1964"
  },
  "0bGiTPrxCIFs7lZS9knvRS": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/27/33/05/273305ca-15ff-be2c-091f-54da6c33c7f4/mzaf_8961670725076409893.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f2/98/fb/f298fb48-1e0e-6ad4-4cff-fb824b77f02e/15UMGIM59587.rgb.jpg/600x600bb.jpg",
    "ano": "1965"
  },
  "4eHbdreAnSOrDDsFfc4Fpm": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/03/d2/1a/03d21aca-c69e-09af-03ef-118004e68ab5/mzaf_17408932698913708736.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/82/f3/e9/82f3e968-8174-c5eb-7fc5-36384d050129/dj.mdauihuy.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "31er9IGsfFbwqy1pH4aiTP": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b1/cc/e2/b1cce211-6605-59c1-a8b3-543eb5f9b831/mzaf_11628049711945620181.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/82/f3/e9/82f3e968-8174-c5eb-7fc5-36384d050129/dj.mdauihuy.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "2tUBqZG2AbRi7Q0BIrVrEj": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7b/67/fd/7b67fd07-6a7a-0362-135c-878ac5799f2c/mzaf_11309521725869189721.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/86/b5/25/86b525b1-bff1-4bf6-6112-531251b3d672/dj.hthdmusj.jpg/600x600bb.jpg",
    "ano": "1987"
  },
  "5ihS6UUlyQAfmp48eSkxuQ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c2/88/e5/c288e5f6-d8dc-d8a7-8d90-f8a609b3249e/mzaf_11381701045348127730.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/64/cc/0b/64cc0b3b-92fb-66cf-1240-e2afba504e4b/603497863105.jpg/600x600bb.jpg",
    "ano": "1975"
  },
  "4qO03RMQm88DdpTJcxlglY": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b1/13/b5/b113b569-8639-b071-9199-3c8f8fb0d3a9/mzaf_2541938402474802623.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/72/73/8f/72738f62-d8a1-f1f9-e84d-244ff697d1db/13UABIM56926.rgb.jpg/600x600bb.jpg",
    "ano": "1980"
  },
  "4cQJ27R11K634x5qCOwKW5": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c0/62/a8/c062a813-3d6a-f54f-4b6f-a770c3e782b3/mzaf_12107545603743730957.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b0/1e/01/b01e0139-3640-a161-ef5c-027451d30c48/00724353359959.rgb.jpg/600x600bb.jpg",
    "ano": "1978"
  },
  "4v2rkl1mC3zVAz0nXMx9r4": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1e/3c/36/1e3c3657-c14f-9d85-c8b0-7e0d7f0b9012/mzaf_17403835591168070190.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b0/1e/01/b01e0139-3640-a161-ef5c-027451d30c48/00724353359959.rgb.jpg/600x600bb.jpg",
    "ano": "1978"
  },
  "6Qyc6fS4DsZjB2mRW9DsQs": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/60/17/35/60173512-3d5c-1d6f-549e-d8ddafa93e07/mzaf_5281658494050788067.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2c/13/18/2c131801-00af-58b1-3cc2-13abf4ad5416/093624919162.jpg/600x600bb.jpg",
    "ano": "1998"
  },
  "1JSTJqkT5qHq8MDJnJbRE1": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fe/e4/66/fee46681-9bbc-358a-ba0f-51d39feabf8b/mzaf_16980938720718099101.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a4/67/ba/a467ba62-87df-9d10-98d2-c517f68ac870/16UMGIM60882.rgb.jpg/600x600bb.jpg",
    "ano": "1983"
  },
  "5YciOakY5dB5dULkiLdCaf": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/15/18/b0/1518b009-495d-9be8-c370-c0efe47b11e4/mzaf_11095190664817243760.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/61/27/5c/61275c22-03c2-b92c-947e-db85c1ad7780/886444456593.jpg/600x600bb.jpg",
    "ano": "2002"
  },
  "5yJaXWIErrrsjQ3J0eR5aK": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/64/b4/f3/64b4f3e5-d4f9-ec10-e6af-b6c26bde9b47/mzaf_8621887946764980860.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/41/4a/55414a18-861a-79d1-e575-5bf8cf205dbe/886445056839_Cover.jpg/600x600bb.jpg",
    "ano": "2015"
  },
  "1uvyZBs4IZYRebHIB1747m": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/09/30/1109307b-cdbd-20b1-aebc-c39c632a73a4/mzaf_11384520489297938238.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/00/17/f2/0017f24f-e580-b77a-71a8-1bc7b75881bf/603497822065.jpg/600x600bb.jpg",
    "ano": "1984"
  },
  "3FnP3j1TyiTwbJb5AR2ynT": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/11/09/30/1109307b-cdbd-20b1-aebc-c39c632a73a4/mzaf_11384520489297938238.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/00/17/f2/0017f24f-e580-b77a-71a8-1bc7b75881bf/603497822065.jpg/600x600bb.jpg",
    "ano": "1984"
  },
  "0y5CnV2idm2KkQEudDjfDT": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/74/3e/05/743e0513-5cb5-623c-574a-d0275014c382/mzaf_18382697113497960163.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/26/d6/e3/26d6e339-a7a9-d61e-1b5f-0852a5515a55/886445517880.jpg/600x600bb.jpg",
    "ano": "1994"
  },
  "1StXVL5gClph4z4XzanYko": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/13/bd/4b/13bd4b55-28f1-e7fa-10b9-0ec4f64f0596/mzaf_17532103369343179763.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/99/d6/ab/99d6abb0-4837-f397-3f56-c7dfd627e23e/886447700778.jpg/600x600bb.jpg",
    "ano": "1994"
  },
  "3pRaLNL3b8x5uBOcsgvdqM": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3d/f9/7f/3df97f47-c0a4-bdf8-53fa-19e99fa891f1/mzaf_16433687184189443153.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/26/d6/e3/26d6e339-a7a9-d61e-1b5f-0852a5515a55/886445517880.jpg/600x600bb.jpg",
    "ano": "1994"
  },
  "6Jv7kjGkhY2fT4yuBF3aTz": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/db/0c/4e/db0c4edc-9daa-e262-55b9-89984c3f6aa6/mzaf_16142695276315265640.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/26/d6/e3/26d6e339-a7a9-d61e-1b5f-0852a5515a55/886445517880.jpg/600x600bb.jpg",
    "ano": "1994"
  },
  "6UuVONmxXwTKN1ISepuAoQ": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/22/e5/9922e5e7-fa32-21c6-5714-a49e2098eca2/mzaf_15269119448834441811.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/26/d6/e3/26d6e339-a7a9-d61e-1b5f-0852a5515a55/886445517880.jpg/600x600bb.jpg",
    "ano": "1994"
  },
  "2bcvooA6HEmVUneEGJnNZD": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5e/bd/24/5ebd2488-d8d6-dd31-546b-6603d8f3bd3d/mzaf_2715829046640417409.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ce/b3/69/ceb369a5-f124-e519-01ac-d0d3035c7bcd/886447680827.jpg/600x600bb.jpg",
    "ano": "1998"
  },
  "4oq6sHpGfB4UmX36jK9Cz0": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/e5/e7/90e5e766-57cd-5853-4303-3934faa9833e/mzaf_7647556181532812406.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ce/b3/69/ceb369a5-f124-e519-01ac-d0d3035c7bcd/886447680827.jpg/600x600bb.jpg",
    "ano": "1998"
  },
  "4Dk6mrxXQzLMgpFHO2yRY9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4e/00/66/4e0066ab-3257-f00f-72d6-562d89e751ab/mzaf_10207856720735443059.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music22/v4/85/50/52/855052b9-704f-c774-6588-23011b1cdd8d/mzm.vqqwcfti.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "2RTLIQRc8yogHh08waQDVa": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e9/f2/31/e9f231d1-3f90-99f6-bb06-005b45e2f9ab/mzaf_10970305320585828131.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/ac/84/18/ac8418ee-0a3d-6745-8a79-b85daa17617d/886447683941.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "2vA8v1vyStXLOA4GHnQ5Vs": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0f/e7/bd/0fe7bd2a-e187-32ee-55d5-d5c19099066c/mzaf_16524959678100907025.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/ac/84/18/ac8418ee-0a3d-6745-8a79-b85daa17617d/886447683941.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "3Z7OFraob1P0QscGaSoh0v": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fb/f6/67/fbf667f1-8ed3-78ca-3dae-b442027d0a42/mzaf_3560099085546507287.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/19/db/9d/19db9d89-d534-10d8-5001-829a3ced9324/886447832936.jpg/600x600bb.jpg",
    "ano": "2019"
  },
  "4ZTOFxmGtYp9iDX1bZdGfM": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4a/e3/77/4ae3777c-a6a0-5651-619e-5a86d669d334/mzaf_14343249378801467276.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/0a/05/cc/0a05ccf6-6c7f-5ce8-536e-635c968c5544/884977211955.jpg/600x600bb.jpg",
    "ano": "2009"
  },
  "5BKKy9fIJL5uM9fz1SnqyP": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/23/11/8f/23118fbe-d3de-63e7-71e5-0f2b8024b85c/mzaf_427303662240716556.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/83/15/cc/8315ccdd-5a8d-8344-fa15-72e4cb64145e/886444533171.jpg/600x600bb.jpg",
    "ano": "2014"
  },
  "1AZXNAVDD9ZFIEKySgflFz": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c8/0c/b5/c80cb536-1a27-5571-090b-8451da1570f7/mzaf_5779869216913131925.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/dc/02/ef/dc02eff2-027c-a468-7d7b-aa9404e74f1a/mzi.mgytcnob.jpg/600x600bb.jpg",
    "ano": "2001"
  },
  "6uW5fyyosEMBKfg2W1ye1l": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0b/a1/54/0ba1546e-cfef-325c-4e18-161f49a1346b/mzaf_6164216748683522629.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0a/0f/fa/0a0ffabf-43c3-c076-6d33-132c65859b33/17UMGIM86564.rgb.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "49wOjOkS4pBK3PQnPnNYjb": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3a/d2/1f/3ad21f53-f1ed-dc2b-23b8-5d12a32c9c74/mzaf_6958812122059230382.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9e/21/75/9e21750f-b22b-360d-ff8b-59c248bb51e6/08UMGIM01746.rgb.jpg/600x600bb.jpg",
    "ano": "1994"
  },
  "1WYrTfvKjQYaYfVziGG1ET": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/02/d4/04/02d40481-45d6-677b-7a36-5e0070ab90d5/mzaf_3365845099127307523.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5c/cb/18/5ccb18f7-ab44-3478-cf33-7953837907d2/18UMGIM43740.rgb.jpg/600x600bb.jpg",
    "ano": "1993"
  },
  "3d0WouFnFmr0K3kjeza3fF": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ac/c7/61/acc7619f-c1e3-e0a5-df9b-0329a35af062/mzaf_13106936727189536738.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/b5/8a/0db58a8b-7b17-dd53-3464-116a415d0f49/196872648836.jpg/600x600bb.jpg",
    "ano": "2006"
  },
  "6mICuAdrwEjh6Y6lroV2Kg": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ce/25/45/ce254583-d1ac-db76-c02e-a4ceeab5e2de/mzaf_7277323164917214654.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/60/9f/7f/609f7f34-c239-73e8-32da-96fd5f2cba77/886446480060.jpg/600x600bb.jpg",
    "ano": "2016"
  },
  "7o1Pm9jpH0wFpN5g793Lnq": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ad/a2/0a/ada20ac7-6406-60ae-698c-15ce540703b9/mzaf_5980925254679718590.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/06/a5/5f/06a55f7a-680f-f9de-79b9-3c9114ebe012/886444501262.jpg/600x600bb.jpg",
    "ano": "2014"
  },
  "1zLBsSVxETQOfINOLYvT5m": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e7/23/ac/e723acc1-f3d1-9046-3e67-90c0974bb7ab/mzaf_13254358623537505240.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/67/ae/8c/67ae8ccf-54b0-8574-24b3-67f3aff2a326/886448555568.jpg/600x600bb.jpg",
    "ano": "2020"
  },
  "42k1KeBehAd83lrGt1okiC": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/72/93/17729308-7699-6e23-18ab-9625ad9dad32/mzaf_7592221824890521830.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ec/15/38/ec1538d9-67b8-e561-6b11-bc5a266cba7c/886444681568.jpg/600x600bb.jpg",
    "ano": "2010"
  },
  "4zy1s9GnxWsNzZp1688euA": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/56/a2/25/56a225f1-58fb-fdd3-7490-d740114a1106/mzaf_3542594892006900636.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ec/15/38/ec1538d9-67b8-e561-6b11-bc5a266cba7c/886444681568.jpg/600x600bb.jpg",
    "ano": "2010"
  },
  "19t0Z7qsoV6A1CGJVYRnjm": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/eb/d7/f5/ebd7f53b-da75-435c-cfb3-0161f87318f5/mzaf_1124655576055969423.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ec/15/38/ec1538d9-67b8-e561-6b11-bc5a266cba7c/886444681568.jpg/600x600bb.jpg",
    "ano": "2010"
  },
  "2nSd3kBslXIbBAdrmqvKM6": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/23/30/73/2330733c-fc37-a590-825b-efcd9e878dbc/mzaf_13943484523643200796.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e5/6d/96/e56d9688-0239-7c8f-f907-7614c0f9860b/mzi.uffuznlo.jpg/600x600bb.jpg",
    "ano": "1998"
  },
  "7jxHeJLVpnP7S08JFF4GBi": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3a/18/63/3a1863ef-7849-d8ce-f7f3-b4dff44497d9/mzaf_15137099757104377555.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e5/6d/96/e56d9688-0239-7c8f-f907-7614c0f9860b/mzi.uffuznlo.jpg/600x600bb.jpg",
    "ano": "1998"
  },
  "4qknM1pQz53QOyfDVTjcM9": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e8/7a/b6/e87ab668-96cd-ccfa-9dd1-8d6e971be5a4/mzaf_12704282283428769634.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/60/9f/7f/609f7f34-c239-73e8-32da-96fd5f2cba77/886446480060.jpg/600x600bb.jpg",
    "ano": "2017"
  },
  "4M1lEbqPzlEw1JYWB6aE7K": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e6/1a/e6/e61ae6dc-71a0-c343-5e2a-b674afe5a454/mzaf_6838942877118141285.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/94/18/5e/94185e72-fc57-d3ad-51f6-485b8e188c21/dj.abqorqzf.jpg/600x600bb.jpg",
    "ano": "1995"
  },
  "5yKQTwznar5I75UyYJ9CnR": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/43/a8/1c/43a81c4c-2e76-639f-1352-508447654573/mzaf_7206285468201938248.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/94/18/5e/94185e72-fc57-d3ad-51f6-485b8e188c21/dj.abqorqzf.jpg/600x600bb.jpg",
    "ano": "1995"
  },
  "2lnzGkdtDj5mtlcOW2yRtG": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/03/db/c9/03dbc935-12c2-4922-51ff-76170883753a/mzaf_13989672290091509449.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c5/4b/ff/c54bffa0-2333-1a55-e67e-a9c640e06f6f/mzi.hwxgzhsl.jpg/600x600bb.jpg",
    "ano": "2001"
  },
  "3TY1PFZXmYeiLcXygB74My": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0b/c6/91/0bc69140-e8c8-07ba-d18c-70b76298d724/mzaf_13908437874271354692.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c5/4b/ff/c54bffa0-2333-1a55-e67e-a9c640e06f6f/mzi.hwxgzhsl.jpg/600x600bb.jpg",
    "ano": "2001"
  },
  "4l9fZ75WzPZlAIkqJIWlo8": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7a/f2/e1/7af2e169-2536-5f1f-a21e-fccc8ca76f11/mzaf_2228399971126578468.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music/51/e4/1a/mzi.hvpbrkmc.jpg/600x600bb.jpg",
    "ano": "2009"
  },
  "0FpB2Hw5qx9SeMMQuw1G5P": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/66/4c/94/664c94a6-d422-4fb6-a5b2-cac522b7fc98/mzaf_13543331719844744447.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music/51/e4/1a/mzi.hvpbrkmc.jpg/600x600bb.jpg",
    "ano": "2009"
  },
  "6M1M6cRtVkm5d0qTzkSEuK": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/3d/c7/f13dc794-e173-58fc-b328-c3200ddce33b/mzaf_14829078399732190343.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/82/f3/e9/82f3e968-8174-c5eb-7fc5-36384d050129/dj.mdauihuy.jpg/600x600bb.jpg",
    "ano": "1992"
  },
  "28zcTRqgD2iVOE4KEKCAxi": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/66/92/64/66926456-405e-7830-7c05-285cf96d857f/mzaf_733124805661969399.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/28/a4/22/28a42283-3859-6492-abad-0e95cdec4ec9/842812149931.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "3BvwBnmbsKs7dBkU6PKBrT": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ee/5d/a0/ee5da06c-4cd7-d9f0-d371-a2ae8a091b87/mzaf_8424454688632681670.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/0b/c7/9b/0bc79b59-f9f8-f0a4-caab-70088cc3ae98/886449030675.jpg/600x600bb.jpg",
    "ano": "2021"
  },
  "6JZYMxvcoeLD4IifJPvDux": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/65/6a/8d/656a8d49-e1bc-72fe-a1c0-8937e92715cc/mzaf_5193099882319798206.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/67/c6/c9/67c6c9b0-e879-7e4d-fcda-dc52f758ec43/888880457066.jpg/600x600bb.jpg",
    "ano": "1987"
  },
  "5WV7xL0fxsy6zGfHUu0I9N": {
    "audio": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/67/9e/26/679e2625-25c0-61f2-8e39-6babff84d0e0/mzaf_294756916033068403.plus.aac.p.m4a",
    "capa": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/ee/48/68/ee4868c1-76e7-975f-d645-70bcaede9f9a/00602517396654.rgb.jpg/600x600bb.jpg",
    "ano": "2007"
  }
};

function criarFaixa(faixa, { exclusiva = false, artistaModo = null } = {}) {
  const previaItunes = PREVIAS_ITUNES[faixa.spotifyId] || {};
  const previaSpotify = PREVIAS_SPOTIFY[faixa.spotifyId] || {};
  const previa = {
    audio: previaSpotify.audio || previaItunes.audio || "",
    capa: previaSpotify.capa || previaItunes.capa || "",
    ano: previaSpotify.ano || previaItunes.ano || "",
  };
  return {
    titulo: faixa.titulo,
    artistas: faixa.artistas,
    artista: faixa.artistas.join(", "),
    album: faixa.album,
    ano: previa.ano || "",
    busca: `${faixa.titulo} ${faixa.artistas[0] || ""}`.trim(),
    spotifyId: faixa.spotifyId,
    playlistIndex: faixa.index,
    exclusiva,
    artistaModo,
    audioLocal: "",
    capaLocal: "",
    audioRemoto: previa.audio || "",
    capaRemota: previa.capa || "",
  };
}

function mesclarPlaylistsSemDuplicar(...playlists) {
  const vistas = new Set();
  return playlists.flat().filter((faixa) => {
    const chave = faixa.spotifyId || `${normalizar(faixa.titulo)}:${normalizar(faixa.artistas[0] || "")}`;
    if (vistas.has(chave)) return false;
    vistas.add(chave);
    return true;
  });
}

const MUSICAS_ALEATORIAS = mesclarPlaylistsSemDuplicar(
  PLAYLIST_SPOTIFY,
  PLAYLIST_LATINAS,
  PLAYLIST_ITALIANAS,
  PLAYLIST_DAMIANO_DAVID,
).map((faixa) => criarFaixa(faixa));
const MUSICAS = [
  ...MUSICAS_ALEATORIAS,
  ...PLAYLIST_ANA_CAROLINA.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Ana Carolina" }),
  ),
  ...PLAYLIST_DESCENDENTES.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Descendentes" }),
  ),
  ...PLAYLIST_LUDMILLA.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Ludmilla" }),
  ),
  ...PLAYLIST_LATINAS.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Latinas" }),
  ),
  ...PLAYLIST_ITALIANAS.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Italianas" }),
  ),
  ...PLAYLIST_CHIARA_CIVELLO.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Chiara Civello" }),
  ),
  ...PLAYLIST_DAMIANO_DAVID.map((faixa) =>
    criarFaixa(faixa, { exclusiva: true, artistaModo: "Damiano David" }),
  ),
];

function chaveUnicaFaixa(faixa) {
  if (faixa.spotifyId) return `spotify:${faixa.spotifyId}`;
  return `titulo:${normalizar(faixa.titulo)}:${normalizar(faixa.artista)}`;
}

function indicesDoArtista(artista) {
  const artistaNormalizado = normalizar(artista);
  const vistos = new Set();
  return MUSICAS.reduce((indices, faixa, index) => {
    const pertenceAoModo =
      normalizar(faixa.artistaModo || "") === artistaNormalizado ||
      (!faixa.exclusiva &&
        faixa.artistas.some((nome) => normalizar(nome) === artistaNormalizado));
    const chave = chaveUnicaFaixa(faixa);
    if (pertenceAoModo && !vistos.has(chave)) {
      vistos.add(chave);
      indices.push(index);
    }
    return indices;
  }, []);
}

const ARTISTAS_FIXOS = [
  "Ana Carolina",
  "Descendentes",
  "Ludmilla",
  "Latinas",
  "Italianas",
  "Chiara Civello",
  "Damiano David",
];
const mapaArtistas = new Map(ARTISTAS_FIXOS.map((artista) => [normalizar(artista), artista]));
MUSICAS_ALEATORIAS.flatMap((faixa) => faixa.artistas).forEach((artista) => {
  const chave = normalizar(artista);
  if (!mapaArtistas.has(chave)) mapaArtistas.set(chave, artista);
});
const ARTISTAS = [...mapaArtistas.values()]
  .filter((artista) => indicesDoArtista(artista).length >= 5)
  .sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base" }));

const ESTAGIOS = [
  { segundos: 0.5, tipo: "audio", rotulo: "0,5 segundo" },
  { segundos: 1, tipo: "audio", rotulo: "1 segundo" },
  { segundos: 2, tipo: "audio", rotulo: "2 segundos" },
  { segundos: 3, tipo: "audio", rotulo: "3 segundos" },
  { segundos: 4, tipo: "audio", rotulo: "4 segundos" },
  { segundos: 5, tipo: "audio", rotulo: "5 segundos" },
  { segundos: 5, tipo: "artista", rotulo: "artista" },
  { segundos: 5, tipo: "inicial", rotulo: "primeira letra" },
];

const INICIO_TRECHO = 0;
const EH_IOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const STORAGE_KEY = "ouvido-relampago:winstreak";
const START_DURATION_STORAGE_KEY = "ouvido-relampago:duracao-inicial";
const LIMITE_DICAS_STREAK = 3;
const ERROS_PARA_DICA_AUTOMATICA = 3;
const DURACAO_INICIAL_SALVA = lerDuracaoInicial();

const refs = {
  audio: document.querySelector("#audioPlayer"),
  audioTime: document.querySelector("#audioTime"),
  artistSelect: document.querySelector("#artistSelect"),
  artistTrackCount: document.querySelector("#artistTrackCount"),
  catalogStatus: document.querySelector("#catalogStatus"),
  challengeDuration: document.querySelector("#challengeDuration"),
  clipLabel: document.querySelector("#clipLabel"),
  coverFrame: document.querySelector("#coverFrame"),
  coverImage: document.querySelector("#coverImage"),
  durationFill: document.querySelector("#durationFill"),
  durationProgress: document.querySelector("#durationProgress"),
  fileNumber: document.querySelector("#fileNumber"),
  filePreview: document.querySelector("#filePreview"),
  fileState: document.querySelector("#fileState"),
  formFeedback: document.querySelector("#formFeedback"),
  giveUpButton: document.querySelector("#giveUpButton"),
  guessForm: document.querySelector("#guessForm"),
  guessInput: document.querySelector("#guessInput"),
  heardMarker: document.querySelector("#heardMarker"),
  hintButton: document.querySelector("#hintButton"),
  hintCount: document.querySelector("#hintCount"),
  hintItems: [...document.querySelectorAll("#hintTrack li")],
  metaAlbum: document.querySelector("#metaAlbum"),
  metaArtist: document.querySelector("#metaArtist"),
  metaTitle: document.querySelector("#metaTitle"),
  metaYear: document.querySelector("#metaYear"),
  modeSummary: document.querySelector("#modeSummary"),
  nextButton: document.querySelector("#nextButton"),
  playButton: document.querySelector("#playButton"),
  playDuration: document.querySelector("#playDuration"),
  previewButton: document.querySelector("#previewButton"),
  resultAlbum: document.querySelector("#resultAlbum"),
  resultArtist: document.querySelector("#resultArtist"),
  resultCover: document.querySelector("#resultCover"),
  resultDialog: document.querySelector("#resultDialog"),
  resultKicker: document.querySelector("#resultKicker"),
  resultMessage: document.querySelector("#resultMessage"),
  resultSong: document.querySelector("#resultSong"),
  resultTitle: document.querySelector("#resultTitle"),
  revealedHints: document.querySelector("#revealedHints"),
  randomTab: document.querySelector("#randomTab"),
  roundCounter: document.querySelector("#roundCounter"),
  songSuggestions: document.querySelector("#songSuggestions"),
  specificControls: document.querySelector("#specificControls"),
  specificTab: document.querySelector("#specificTab"),
  startHalfButton: document.querySelector("#startHalfButton"),
  startOneButton: document.querySelector("#startOneButton"),
  streakValue: document.querySelector("#streakValue"),
  submitButton: document.querySelector("#submitButton"),
  toast: document.querySelector("#toast"),
  waveform: document.querySelector("#waveform"),
};

const state = {
  ordem: embaralhar(
    MUSICAS.reduce((indices, faixa, index) => {
      if (!faixa.exclusiva) indices.push(index);
      return indices;
    }, []),
  ),
  posicao: 0,
  modo: "random",
  artistaSelecionado: ARTISTAS.includes("Ana Carolina") ? "Ana Carolina" : ARTISTAS[0],
  duracaoInicial: DURACAO_INICIAL_SALVA,
  estagio: DURACAO_INICIAL_SALVA === 1 ? 1 : 0,
  faixa: null,
  resolvida: null,
  audioPronto: false,
  audioObjectUrl: null,
  rodadaEncerrada: false,
  tocandoTrecho: false,
  tocandoPrevia: false,
  timerTrecho: null,
  timerToast: null,
  pedidoAtual: 0,
  streak: lerStreak(),
  errosRodada: 0,
  sequenciaPerdidaPorDicas: false,
  cache: new Map(),
  palpitesErrados: new Set(),
  sugestoesAtuais: [],
  sugestaoAtiva: 0,
};

function embaralhar(itens) {
  const copia = [...itens];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function indicesDoModo() {
  const indices = state.modo === "specific"
    ? indicesDoArtista(state.artistaSelecionado)
    : MUSICAS.reduce((lista, faixa, index) => {
      if (!faixa.exclusiva) lista.push(index);
      return lista;
    }, []);

  if (!EH_IOS) return indices;
  const prontas = indices.filter((index) => {
    const faixa = MUSICAS[index];
    return Boolean(faixa.audioLocal || faixa.audioRemoto);
  });
  return prontas.length ? prontas : indices;
}

function normalizar(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\([^)]*\)|\[[^\]]*\]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizarTituloDistinto(texto = "") {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function escaparXml(texto = "") {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function coresDaFaixa(faixa) {
  const texto = `${faixa.titulo}|${faixa.artista}`;
  let hash = 0;
  for (let i = 0; i < texto.length; i += 1) hash = (hash * 31 + texto.charCodeAt(i)) | 0;
  const matiz = Math.abs(hash) % 360;
  return [`hsl(${matiz} 48% 13%)`, `hsl(${(matiz + 54) % 360} 68% 43%)`];
}

function criarCapaFallback(faixa) {
  const iniciais = faixa.titulo
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();
  const titulo = escaparXml(faixa.titulo.toUpperCase());
  const artista = escaparXml(faixa.artista.toUpperCase());
  const [corA, corB] = coresDaFaixa(faixa);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${faixa.corA || corA}"/>
          <stop offset="1" stop-color="${faixa.corB || corB}"/>
        </linearGradient>
        <pattern id="p" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="32" stroke="white" stroke-opacity=".055" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="600" height="600" fill="url(#g)"/>
      <rect width="600" height="600" fill="url(#p)"/>
      <circle cx="300" cy="270" r="165" fill="none" stroke="white" stroke-opacity=".16" stroke-width="2"/>
      <circle cx="300" cy="270" r="120" fill="none" stroke="white" stroke-opacity=".11" stroke-width="2"/>
      <text x="300" y="310" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="118" font-weight="800">${iniciais}</text>
      <text x="42" y="522" fill="white" font-family="Arial, sans-serif" font-size="22" font-weight="700">${titulo.slice(0, 34)}</text>
      <text x="42" y="557" fill="white" fill-opacity=".68" font-family="Arial, sans-serif" font-size="16" letter-spacing="3">${artista.slice(0, 42)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function lerStreak() {
  try {
    const valor = Number.parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    return Number.isFinite(valor) && valor > 0 ? valor : 0;
  } catch {
    return 0;
  }
}

function salvarStreak() {
  try {
    localStorage.setItem(STORAGE_KEY, String(state.streak));
  } catch {
    // O jogo continua normalmente quando o navegador bloqueia o armazenamento.
  }
  refs.streakValue.textContent = String(state.streak);
}

function lerDuracaoInicial() {
  try {
    return localStorage.getItem(START_DURATION_STORAGE_KEY) === "1" ? 1 : 0.5;
  } catch {
    return 0.5;
  }
}

function salvarDuracaoInicial() {
  try {
    localStorage.setItem(START_DURATION_STORAGE_KEY, String(state.duracaoInicial));
  } catch {
    // A escolha ainda vale durante a sessão quando o armazenamento está bloqueado.
  }
}

function indiceEstagioInicial() {
  return state.duracaoInicial === 1 ? 1 : 0;
}

function atualizarControleDuracao() {
  const comecaEmUm = state.duracaoInicial === 1;
  refs.startHalfButton.classList.toggle("is-active", !comecaEmUm);
  refs.startHalfButton.setAttribute("aria-pressed", String(!comecaEmUm));
  refs.startOneButton.classList.toggle("is-active", comecaEmUm);
  refs.startOneButton.setAttribute("aria-pressed", String(comecaEmUm));
}

function definirDuracaoInicial(valor) {
  const novaDuracao = Number(valor) === 1 ? 1 : 0.5;
  if (novaDuracao === state.duracaoInicial) return;
  state.duracaoInicial = novaDuracao;
  salvarDuracaoInicial();
  atualizarControleDuracao();
  mostrarToast(`Padrão alterado para ${formatarDuracaoFrase(novaDuracao)}.`);

  if (state.faixa && !state.rodadaEncerrada) {
    pararAudio();
    void iniciarRodada();
  }
}

function formatarSegundos(valor) {
  return Number.isInteger(valor) ? `${valor} S` : `${String(valor).replace(".", ",")} S`;
}

function formatarDuracaoFrase(valor) {
  if (valor === 0.5) return "0,5 segundo";
  if (valor === 1) return "1 segundo";
  return `${valor} segundos`;
}

function gerarWaveform() {
  refs.waveform.replaceChildren();
  const total = 58;
  for (let i = 0; i < total; i += 1) {
    const barra = document.createElement("span");
    const onda = Math.sin(i * 1.73) * 14 + Math.cos(i * 0.61) * 10;
    const altura = Math.max(8, Math.min(68, 31 + onda + ((i * 17) % 13)));
    barra.style.height = `${altura}px`;
    barra.style.setProperty("--bar-index", String(i));
    refs.waveform.append(barra);
  }
}

function faixasAtivas() {
  return indicesDoModo().map((index) => MUSICAS[index]);
}

function obterSugestoes(termo) {
  const busca = normalizar(termo);
  if (!busca) return [];
  const vistas = new Set();

  return faixasAtivas()
    .filter((faixa) => !state.palpitesErrados.has(normalizarTituloDistinto(faixa.titulo)))
    .map((faixa) => {
      const titulo = normalizar(faixa.titulo);
      const artista = normalizar(faixa.artista);
      let pontos = Number.POSITIVE_INFINITY;
      if (titulo === busca) pontos = 0;
      else if (titulo.startsWith(busca)) pontos = 1;
      else if (titulo.split(" ").some((palavra) => palavra.startsWith(busca))) pontos = 2;
      else if (titulo.includes(busca)) pontos = 3;
      else if (artista.includes(busca)) pontos = 4;
      return { faixa, pontos };
    })
    .filter(({ faixa, pontos }) => {
      const chave = normalizarTituloDistinto(faixa.titulo);
      if (!Number.isFinite(pontos) || vistas.has(chave)) return false;
      vistas.add(chave);
      return true;
    })
    .sort((a, b) =>
      a.pontos - b.pontos ||
      a.faixa.titulo.length - b.faixa.titulo.length ||
      a.faixa.titulo.localeCompare(b.faixa.titulo, "pt-BR"),
    )
    .slice(0, 7)
    .map(({ faixa }) => faixa);
}

function fecharSugestoes() {
  state.sugestoesAtuais = [];
  state.sugestaoAtiva = 0;
  refs.songSuggestions.hidden = true;
  refs.songSuggestions.replaceChildren();
  refs.guessInput.setAttribute("aria-expanded", "false");
  refs.guessInput.removeAttribute("aria-activedescendant");
}

function marcarSugestaoAtiva(indice) {
  if (!state.sugestoesAtuais.length) return;
  state.sugestaoAtiva = (indice + state.sugestoesAtuais.length) % state.sugestoesAtuais.length;
  [...refs.songSuggestions.children].forEach((item, itemIndex) => {
    const ativa = itemIndex === state.sugestaoAtiva;
    item.classList.toggle("is-active", ativa);
    item.setAttribute("aria-selected", String(ativa));
  });
  refs.guessInput.setAttribute(
    "aria-activedescendant",
    `song-suggestion-${state.sugestaoAtiva}`,
  );
}

function selecionarSugestao(indice, enviar = false) {
  const faixa = state.sugestoesAtuais[indice];
  if (!faixa) return;
  refs.guessInput.value = faixa.titulo;
  fecharSugestoes();
  if (enviar) refs.guessForm.requestSubmit();
}

function renderizarSugestoes() {
  if (state.rodadaEncerrada || refs.guessInput.disabled) {
    fecharSugestoes();
    return;
  }
  const sugestoes = obterSugestoes(refs.guessInput.value);
  state.sugestoesAtuais = sugestoes;
  state.sugestaoAtiva = 0;
  refs.songSuggestions.replaceChildren();

  if (!sugestoes.length) {
    refs.songSuggestions.hidden = true;
    refs.guessInput.setAttribute("aria-expanded", "false");
    refs.guessInput.removeAttribute("aria-activedescendant");
    return;
  }

  const fragment = document.createDocumentFragment();
  sugestoes.forEach((faixa, index) => {
    const item = document.createElement("li");
    const botao = document.createElement("button");
    const titulo = document.createElement("strong");
    const artista = document.createElement("span");
    item.id = `song-suggestion-${index}`;
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(index === 0));
    item.classList.toggle("is-active", index === 0);
    botao.type = "button";
    botao.tabIndex = -1;
    titulo.textContent = faixa.titulo;
    artista.textContent = faixa.artista;
    botao.append(titulo, artista);
    botao.addEventListener("click", () => selecionarSugestao(index));
    item.append(botao);
    fragment.append(item);
  });
  refs.songSuggestions.append(fragment);
  refs.songSuggestions.hidden = false;
  refs.guessInput.setAttribute("aria-expanded", "true");
  marcarSugestaoAtiva(0);
}

function popularOpcoes() {
  fecharSugestoes();
}

function popularArtistas() {
  const fragment = document.createDocumentFragment();
  ARTISTAS.forEach((artista) => {
    const option = document.createElement("option");
    option.value = artista;
    option.textContent = artista;
    fragment.append(option);
  });
  refs.artistSelect.replaceChildren(fragment);
  refs.artistSelect.value = state.artistaSelecionado;
}

function atualizarModoInterface() {
  const especificas = state.modo === "specific";
  refs.randomTab.classList.toggle("is-active", !especificas);
  refs.randomTab.setAttribute("aria-selected", String(!especificas));
  refs.specificTab.classList.toggle("is-active", especificas);
  refs.specificTab.setAttribute("aria-selected", String(especificas));
  refs.specificControls.hidden = !especificas;
  refs.artistSelect.value = state.artistaSelecionado;

  const total = indicesDoModo().length;
  refs.artistTrackCount.textContent = `${total} ${total === 1 ? "faixa" : "faixas"}`;
  refs.modeSummary.textContent = especificas
    ? `${total} ${total === 1 ? "faixa" : "faixas"} de ${state.artistaSelecionado}`
    : `${MUSICAS_ALEATORIAS.length} faixas da playlist · ordem aleatória`;
  atualizarControleDuracao();
}

function prepararFila() {
  state.ordem = embaralhar(indicesDoModo());
  state.posicao = 0;
  popularOpcoes();
  atualizarModoInterface();
}

function ativarModo(modo, artista = state.artistaSelecionado) {
  if (modo !== "random" && modo !== "specific") return false;
  const modoAnterior = state.modo;
  const artistaAnterior = state.artistaSelecionado;
  if (modo === "specific") {
    const artistaValido = ARTISTAS.find((item) => normalizar(item) === normalizar(artista));
    if (!artistaValido) return false;
    state.artistaSelecionado = artistaValido;
  }

  const nadaMudou = modoAnterior === modo &&
    (modo === "random" || artistaAnterior === state.artistaSelecionado);
  if (nadaMudou) return true;

  state.modo = modo;
  pararAudio();
  if (refs.resultDialog.open) refs.resultDialog.close();
  prepararFila();
  void iniciarRodada();
  return true;
}

function definirStatus(tipo, texto) {
  refs.catalogStatus.classList.toggle("is-ready", tipo === "ready");
  refs.catalogStatus.classList.toggle("is-error", tipo === "error");
  refs.catalogStatus.lastChild.textContent = ` ${texto}`;
}

function mostrarToast(mensagem) {
  window.clearTimeout(state.timerToast);
  refs.toast.textContent = mensagem;
  refs.toast.classList.add("is-visible");
  state.timerToast = window.setTimeout(() => {
    refs.toast.classList.remove("is-visible");
  }, 3000);
}

function buscarJsonp(url, timeoutMs = 9000) {
  return new Promise((resolve, reject) => {
    const callback = `__ouvidoRelampago_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timer = window.setTimeout(() => finalizar(new Error("Tempo de resposta esgotado")), timeoutMs);

    const limpar = () => {
      window.clearTimeout(timer);
      script.remove();
      try {
        delete window[callback];
      } catch {
        window[callback] = undefined;
      }
    };

    const finalizar = (erro, dados) => {
      limpar();
      if (erro) reject(erro);
      else resolve(dados);
    };

    window[callback] = (dados) => finalizar(null, dados);
    script.async = true;
    script.onerror = () => finalizar(new Error("Catálogo indisponível"));
    const separador = url.includes("?") ? "&" : "?";
    script.src = `${url}${separador}callback=${encodeURIComponent(callback)}`;
    document.head.append(script);
  });
}

async function buscarCatalogo(url, timeoutMs = 9000) {
  const controle = new AbortController();
  const timer = window.setTimeout(() => controle.abort(), timeoutMs);

  try {
    const resposta = await fetch(url, {
      cache: "force-cache",
      mode: "cors",
      signal: controle.signal,
    });
    if (!resposta.ok) throw new Error(`Catálogo respondeu ${resposta.status}`);
    return await resposta.json();
  } catch (erroFetch) {
    console.warn("Busca direta do catálogo falhou; tentando JSONP.", erroFetch);
    return buscarJsonp(url, timeoutMs);
  } finally {
    window.clearTimeout(timer);
  }
}

async function buscarNoItunes(faixa) {
  const chaveCache = faixa.spotifyId || faixa.busca;
  if (state.cache.has(chaveCache)) return state.cache.get(chaveCache);

  const tituloEsperado = normalizar(faixa.titulo);
  const artistaEsperado = normalizar(faixa.artistas[0] || faixa.artista);
  const termoComAlbum = `${faixa.titulo} ${faixa.album || ""}`.trim();
  const consultas = [
    { termo: faixa.busca, pais: "BR" },
    { termo: termoComAlbum, pais: "BR" },
    { termo: faixa.titulo, pais: "BR" },
    { termo: termoComAlbum, pais: "US" },
  ];

  for (const consulta of consultas) {
    const params = new URLSearchParams({
      term: consulta.termo,
      country: consulta.pais,
      media: "music",
      entity: "song",
      limit: "25",
    });
    const dados = await buscarCatalogo(`https://itunes.apple.com/search?${params}`);
    const resultados = Array.isArray(dados.results) ? dados.results : [];
    const candidatos = resultados
      .filter((item) => typeof item.previewUrl === "string" && item.previewUrl.startsWith("https://"))
      .map((item) => {
        const titulo = normalizar(item.trackName);
        const artista = normalizar(item.artistName);
        const tituloCompativel =
          titulo === tituloEsperado ||
          titulo.includes(tituloEsperado) ||
          tituloEsperado.includes(titulo);
        const pontosTitulo = titulo === tituloEsperado ? 0 : tituloCompativel ? 8 : 100;
        const pontosArtista =
          artista.includes(artistaEsperado) || artistaEsperado.includes(artista) ? 0 : 20;
        return { item, pontos: pontosTitulo + pontosArtista };
      })
      .filter(({ pontos }) => pontos < 100)
      .sort((a, b) => a.pontos - b.pontos);

    const melhor = candidatos[0]?.item;
    if (!melhor) continue;

    const resolvida = {
      ...faixa,
      titulo: faixa.titulo,
      artista: faixa.artista,
      album: faixa.album || melhor.collectionName,
      ano: melhor.releaseDate ? String(new Date(melhor.releaseDate).getUTCFullYear()) : faixa.ano,
      audio: melhor.previewUrl,
      capa:
        (melhor.artworkUrl100 || "")
          .replace("100x100bb", "600x600bb")
          .replace("100x100-75", "600x600-75") || criarCapaFallback(faixa),
    };
    state.cache.set(chaveCache, resolvida);
    return resolvida;
  }

  const erro = new Error("Prévia não encontrada");
  erro.codigo = "SEM_PREVIA";
  throw erro;
}

async function resolverFaixa(faixa, pedido) {
  const fallback = {
    ...faixa,
    audio: faixa.audioLocal || faixa.audioRemoto,
    capa: faixa.capaLocal || faixa.capaRemota || criarCapaFallback(faixa),
  };

  if (faixa.audioLocal || faixa.audioRemoto) return fallback;

  try {
    return await buscarNoItunes(faixa);
  } catch (erro) {
    if (pedido === state.pedidoAtual) {
      console.warn("Não foi possível carregar a prévia:", erro);
    }
    return {
      ...fallback,
      indisponibilidade: erro?.codigo === "SEM_PREVIA" ? "sem_previa" : "catalogo",
    };
  }
}

function aguardarAudioCarregar() {
  return new Promise((resolve, reject) => {
    if (refs.audio.readyState >= 1) {
      resolve("carregado");
      return;
    }
    const timer = window.setTimeout(() => finalizar(null, "adiado"), 4500);
    const limpar = () => {
      window.clearTimeout(timer);
      refs.audio.removeEventListener("loadedmetadata", sucesso);
      refs.audio.removeEventListener("loadeddata", sucesso);
      refs.audio.removeEventListener("canplay", sucesso);
      refs.audio.removeEventListener("error", falha);
    };
    const finalizar = (erro, estado) => {
      limpar();
      if (erro) reject(erro);
      else resolve(estado);
    };
    const sucesso = () => {
      finalizar(null, "carregado");
    };
    const falha = () => {
      finalizar(new Error("Falha ao carregar o áudio"));
    };
    refs.audio.addEventListener("loadedmetadata", sucesso, { once: true });
    refs.audio.addEventListener("loadeddata", sucesso, { once: true });
    refs.audio.addEventListener("canplay", sucesso, { once: true });
    refs.audio.addEventListener("error", falha, { once: true });
  });
}

function liberarAudioObjectUrl() {
  if (!state.audioObjectUrl) return;
  URL.revokeObjectURL(state.audioObjectUrl);
  state.audioObjectUrl = null;
}

async function criarFonteCompativelIOS(url, pedido) {
  const resposta = await fetch(url, {
    cache: "force-cache",
    mode: "cors",
  });
  if (!resposta.ok) throw new Error(`Prévia respondeu ${resposta.status}`);

  const dados = await resposta.arrayBuffer();
  if (pedido !== state.pedidoAtual) return null;

  const tipoRecebido = resposta.headers.get("content-type") || "";
  const tipoCompativel = tipoRecebido.includes("mpeg") ? "audio/mpeg" : "audio/mp4";
  // O servidor da Apple pode rotular um AAC/M4A como audio/x-m4p. As prévias
  // do Spotify já são MP3. Em ambos os casos recriamos o Blob com o MIME que
  // o Safari do iPhone reconhece de forma confiável.
  return URL.createObjectURL(new Blob([dados], { type: tipoCompativel }));
}

async function prepararAudio(resolvida, pedido) {
  state.audioPronto = false;
  refs.playButton.disabled = true;
  refs.previewButton.disabled = true;
  pararAudio();
  liberarAudioObjectUrl();
  refs.audio.removeAttribute("src");
  if (!EH_IOS) refs.audio.load();

  if (!resolvida.audio) {
    if (pedido === state.pedidoAtual) {
      definirStatus("error", "PRÉVIA INDISPONÍVEL");
      refs.fileState.textContent =
        resolvida.indisponibilidade === "catalogo"
          ? "CATÁLOGO FORA DO AR"
          : "PROCURANDO OUTRA FAIXA";
    }
    return {
      pronto: false,
      motivo: resolvida.indisponibilidade || "sem_previa",
    };
  }

  try {
    let fonteAudio = resolvida.audio;

    if (EH_IOS && /^https:\/\//i.test(resolvida.audio)) {
      definirStatus("loading", "PREPARANDO ÁUDIO");
      try {
        const fonteCompativel = await criarFonteCompativelIOS(resolvida.audio, pedido);
        if (pedido !== state.pedidoAtual) {
          if (fonteCompativel) URL.revokeObjectURL(fonteCompativel);
          return { pronto: false, motivo: "cancelado" };
        }
        if (fonteCompativel) {
          state.audioObjectUrl = fonteCompativel;
          fonteAudio = fonteCompativel;
        }
      } catch (erro) {
        // Se o download via fetch falhar, ainda tentamos a URL original.
        console.warn("Conversão da prévia para iPhone falhou; usando a URL original.", erro);
      }
    }

    refs.audio.src = fonteAudio;

    // No Safari do iPhone, load() pode permanecer bloqueado até um toque do
    // usuário. A URL já está pronta; o próprio play() do botão fará a carga.
    if (EH_IOS) {
      if (pedido !== state.pedidoAtual) return { pronto: false, motivo: "cancelado" };
      state.audioPronto = true;
      refs.playButton.disabled = false;
      refs.previewButton.disabled = false;
      definirStatus("ready", state.audioObjectUrl ? "ÁUDIO PRONTO" : "TOQUE PARA CARREGAR");
      return { pronto: true, motivo: null };
    }

    refs.audio.load();
    const carregamento = await aguardarAudioCarregar();
    if (pedido !== state.pedidoAtual) return { pronto: false, motivo: "cancelado" };
    state.audioPronto = true;
    refs.playButton.disabled = false;
    refs.previewButton.disabled = false;
    definirStatus(
      "ready",
      resolvida.audio === state.faixa.audioLocal
        ? "ARQUIVO LOCAL"
        : carregamento === "adiado"
          ? "TOQUE PARA CARREGAR"
          : "PRÉVIA CONECTADA",
    );
    return { pronto: true, motivo: null };
  } catch (erro) {
    console.warn("Falha ao preparar a prévia.", erro);
    if (pedido !== state.pedidoAtual) return { pronto: false, motivo: "cancelado" };
    state.audioPronto = false;
    refs.playButton.disabled = true;
    refs.previewButton.disabled = true;
    definirStatus("error", "PRÉVIA INDISPONÍVEL");
    return { pronto: false, motivo: "arquivo" };
  }
}

function pararAudio() {
  window.clearTimeout(state.timerTrecho);
  state.timerTrecho = null;
  state.tocandoTrecho = false;
  state.tocandoPrevia = false;
  refs.audio.pause();
  refs.playButton.classList.remove("is-playing");
  refs.waveform.classList.remove("is-playing");
  refs.heardMarker.classList.remove("is-playing");
  refs.previewButton.innerHTML = '<span aria-hidden="true">▶</span> OUVIR PRÉVIA';
  if (refs.waveform.children.length) atualizarWaveform();
}

function atualizarProgressoReproducao(decorrido, total) {
  const proporcaoNoTrecho = total > 0 ? Math.min(1, Math.max(0, decorrido / total)) : 0;
  const posicaoNaEscala = Math.min(1, decorrido / 5);
  const barras = [...refs.waveform.children];
  const totalLiberado = Math.ceil(barras.length * Math.min(1, total / 5));
  const totalTocado = Math.ceil(totalLiberado * proporcaoNoTrecho);

  barras.forEach((barra, index) => {
    barra.classList.toggle("is-played", index < totalTocado);
  });
  refs.heardMarker.style.left = `${posicaoNaEscala * 100}%`;
  refs.durationFill.style.width = `${posicaoNaEscala * 100}%`;
}

async function tocarTrecho() {
  if (!state.audioPronto || state.rodadaEncerrada) {
    if (!state.audioPronto) mostrarToast("A prévia ainda não está disponível para esta faixa.");
    return false;
  }

  pararAudio();
  const segundos = ESTAGIOS[state.estagio].segundos;
  try {
    if (refs.audio.readyState > 0) refs.audio.currentTime = INICIO_TRECHO;
    await refs.audio.play();
    state.tocandoTrecho = true;
    refs.playButton.classList.add("is-playing");
    refs.waveform.classList.add("is-playing");
    refs.heardMarker.classList.add("is-playing");
    atualizarProgressoReproducao(0, segundos);
    const atualizarRelogio = () => {
      if (!state.tocandoTrecho) return;
      const decorrido = Math.min(
        segundos,
        Math.max(0, refs.audio.currentTime - INICIO_TRECHO),
      );
      refs.audioTime.textContent = `00:${decorrido.toFixed(1).padStart(4, "0")}`;
      atualizarProgressoReproducao(decorrido, segundos);
      if (decorrido < segundos) requestAnimationFrame(atualizarRelogio);
    };
    requestAnimationFrame(atualizarRelogio);

    state.timerTrecho = window.setTimeout(() => {
      refs.audio.pause();
      if (refs.audio.readyState > 0) refs.audio.currentTime = INICIO_TRECHO;
      state.tocandoTrecho = false;
      refs.playButton.classList.remove("is-playing");
      refs.waveform.classList.remove("is-playing");
      refs.heardMarker.classList.remove("is-playing");
      refs.audioTime.textContent = "00:00.0";
      atualizarWaveform();
    }, segundos * 1000);
    return true;
  } catch (erro) {
    console.warn("Falha de reprodução.", erro, refs.audio.error);
    state.audioPronto = EH_IOS;
    refs.playButton.disabled = !EH_IOS;
    definirStatus("error", EH_IOS ? "TOQUE NOVAMENTE" : "ÁUDIO BLOQUEADO");
    const detalhe = erro?.name && erro.name !== "Error" ? ` (${erro.name})` : "";
    mostrarToast(`O navegador não conseguiu reproduzir esta prévia${detalhe}.`);
    return false;
  }
}

async function alternarPreviaCompleta() {
  if (!state.audioPronto) return;
  if (state.tocandoPrevia) {
    pararAudio();
    return;
  }
  pararAudio();
  try {
    if (refs.audio.readyState > 0) refs.audio.currentTime = INICIO_TRECHO;
    await refs.audio.play();
    state.tocandoPrevia = true;
    refs.previewButton.innerHTML = '<span aria-hidden="true">Ⅱ</span> PAUSAR PRÉVIA';
  } catch {
    mostrarToast("Não foi possível tocar a prévia completa.");
  }
}

function atualizarWaveform() {
  const segundos = ESTAGIOS[state.estagio].segundos;
  const proporcao = segundos / 5;
  const barras = [...refs.waveform.children];
  barras.forEach((barra, index) => {
    barra.classList.toggle("is-heard", index < Math.ceil(barras.length * proporcao));
    barra.classList.remove("is-played");
  });
  refs.heardMarker.style.left = `${Math.min(100, proporcao * 100)}%`;
  refs.durationFill.style.width = `${proporcao * 100}%`;
  refs.durationProgress.setAttribute("aria-valuenow", String(segundos));
}

function atualizarEstagio() {
  const atual = ESTAGIOS[state.estagio];
  const estagioInicial = indiceEstagioInicial();
  const dicasUsadas = Math.max(0, state.estagio - estagioInicial);
  const totalDicas = ESTAGIOS.length - 1 - estagioInicial;
  refs.challengeDuration.textContent = `${formatarDuracaoFrase(atual.segundos)}?`;
  refs.clipLabel.textContent = `TRECHO LIBERADO · ${formatarSegundos(atual.segundos)}`;
  refs.playDuration.textContent = formatarSegundos(atual.segundos);
  refs.playButton.setAttribute("aria-label", `Tocar trecho de ${atual.rotulo} desde o início`);
  refs.hintCount.textContent = `${dicasUsadas} DE ${totalDicas} USADAS · LIMITE ${LIMITE_DICAS_STREAK}`;

  refs.hintItems.forEach((item, index) => {
    item.classList.toggle("is-skipped", index < estagioInicial);
    item.classList.toggle("is-unlocked", index >= estagioInicial && index < state.estagio);
    item.classList.toggle("is-current", index === state.estagio);
  });

  refs.hintButton.disabled = state.estagio >= ESTAGIOS.length - 1 || state.rodadaEncerrada;
  refs.hintButton.lastChild.textContent =
    state.estagio >= ESTAGIOS.length - 1 ? " TODAS AS DICAS ABERTAS" : " PRECISO DE UMA DICA";
  atualizarWaveform();
  atualizarPistasReveladas();
}

function atualizarPistasReveladas() {
  refs.revealedHints.replaceChildren();
  const fragment = document.createDocumentFragment();

  if (state.estagio >= 6) {
    const chipArtista = document.createElement("span");
    chipArtista.className = "hint-chip";
    chipArtista.innerHTML = `ARTISTA: <strong>${escaparXml(state.resolvida?.artista || state.faixa.artista)}</strong>`;
    fragment.append(chipArtista);
    refs.metaArtist.textContent = state.resolvida?.artista || state.faixa.artista;
    refs.metaArtist.classList.add("is-revealed");
  }

  if (state.estagio >= 7) {
    const primeiraLetra = state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?";
    const chipInicial = document.createElement("span");
    chipInicial.className = "hint-chip";
    chipInicial.innerHTML = `PRIMEIRA LETRA: <strong>${primeiraLetra}</strong>`;
    fragment.append(chipInicial);
  }

  if (!fragment.childNodes.length) {
    const vazio = document.createElement("span");
    vazio.textContent = "Nenhuma pista extra revelada.";
    fragment.append(vazio);
  }

  refs.revealedHints.append(fragment);
}

function dicasUsadasNaRodada() {
  return Math.max(0, state.estagio - indiceEstagioInicial());
}

function verificarLimiteDeDicas() {
  if (
    state.sequenciaPerdidaPorDicas ||
    dicasUsadasNaRodada() <= LIMITE_DICAS_STREAK
  ) {
    return false;
  }

  state.sequenciaPerdidaPorDicas = true;
  state.streak = 0;
  salvarStreak();
  return true;
}

function usarDica({ automatica = false } = {}) {
  if (state.rodadaEncerrada || state.estagio >= ESTAGIOS.length - 1) return null;
  state.estagio += 1;
  atualizarEstagio();
  const atual = ESTAGIOS[state.estagio];
  const perdeuSequencia = verificarLimiteDeDicas();
  const prefixo = automatica ? `Após ${state.errosRodada} erros, dica automática: ` : "";

  if (atual.tipo === "audio") {
    refs.formFeedback.textContent = `${prefixo}agora você pode ouvir ${atual.rotulo}.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast(
      perdeuSequencia
        ? `Limite de ${LIMITE_DICAS_STREAK} dicas ultrapassado: sequência zerada.`
        : `${automatica ? "Dica automática" : "Dica liberada"}: ${atual.rotulo} de áudio.`,
    );
  } else if (atual.tipo === "artista") {
    refs.formFeedback.textContent = `${prefixo}artista revelado: ${state.resolvida?.artista || state.faixa.artista}.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast(
      perdeuSequencia
        ? `Limite de ${LIMITE_DICAS_STREAK} dicas ultrapassado: sequência zerada.`
        : `${automatica ? "Dica automática" : "Dica liberada"}: artista da faixa.`,
    );
  } else {
    const letra = state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?";
    refs.formFeedback.textContent = `${prefixo}o título começa com “${letra}”.`;
    refs.formFeedback.className = "form-feedback";
    mostrarToast(
      perdeuSequencia
        ? `Limite de ${LIMITE_DICAS_STREAK} dicas ultrapassado: sequência zerada.`
        : `${automatica ? "Dica automática" : "Última dica liberada"}: primeira letra.`,
    );
  }

  return {
    estagio: state.estagio,
    tipo: atual.tipo,
    rotulo: atual.rotulo,
    automatica,
    perdeuSequencia,
  };
}

function respostaCorreta(palpite) {
  const aceitas = [state.faixa.titulo, ...(state.faixa.aliases || [])].map(normalizar);
  if (!aceitas.includes(normalizar(palpite))) return false;

  const mesmaBase = faixasAtivas().filter(
    (faixa) => normalizar(faixa.titulo) === normalizar(state.faixa.titulo),
  );
  if (mesmaBase.length <= 1) return true;

  const aceitasDistintas = [state.faixa.titulo, ...(state.faixa.aliases || [])].map(
    normalizarTituloDistinto,
  );
  return aceitasDistintas.includes(normalizarTituloDistinto(palpite));
}

function validarPalpite(valor) {
  const palpite = String(valor || "").trim();
  if (state.rodadaEncerrada) return { ok: false, motivo: "rodada_encerrada" };
  if (!palpite) {
    refs.formFeedback.textContent = "Digite um título antes de confirmar.";
    refs.formFeedback.className = "form-feedback is-error";
    refs.guessInput.focus();
    return { ok: false, motivo: "vazio" };
  }
  if (palpite.length > 120) return { ok: false, motivo: "muito_longo" };

  if (respostaCorreta(palpite)) {
    state.streak += 1;
    salvarStreak();
    encerrarRodada(true);
    return {
      ok: true,
      correto: true,
      streak: state.streak,
      faixa: { titulo: state.faixa.titulo, artista: state.resolvida.artista },
    };
  }

  refs.guessInput.classList.remove("is-wrong");
  void refs.guessInput.offsetWidth;
  refs.guessInput.classList.add("is-wrong");
  const palpiteNormalizado = normalizar(palpite);
  const palpiteDistinto = normalizarTituloDistinto(palpite);
  const faixasDisponiveis = faixasAtivas();
  const faixaTentada =
    faixasDisponiveis.find((faixa) =>
      [faixa.titulo, ...(faixa.aliases || [])].some(
        (titulo) => normalizarTituloDistinto(titulo) === palpiteDistinto,
      ),
    ) ||
    faixasDisponiveis.find((faixa) =>
      [faixa.titulo, ...(faixa.aliases || [])].some(
        (titulo) => normalizar(titulo) === palpiteNormalizado,
      ),
    );
  if (faixaTentada) {
    state.palpitesErrados.add(normalizarTituloDistinto(faixaTentada.titulo));
  }
  state.errosRodada += 1;
  refs.guessInput.value = "";
  fecharSugestoes();
  const mensagemErro = faixaTentada
    ? `“${faixaTentada.titulo}” não é a resposta e saiu da lista desta rodada.`
    : "Ainda não. Tente uma das sugestões ou peça uma dica.";
  const dicaAutomatica =
    state.errosRodada >= ERROS_PARA_DICA_AUTOMATICA
      ? usarDica({ automatica: true })
      : null;
  refs.formFeedback.textContent = dicaAutomatica
    ? `${mensagemErro} Dica automática: ${dicaAutomatica.rotulo}.${
      dicaAutomatica.perdeuSequencia
        ? ` O limite de ${LIMITE_DICAS_STREAK} dicas foi ultrapassado e a sequência voltou a zero.`
        : ""
    }`
    : state.errosRodada >= ERROS_PARA_DICA_AUTOMATICA
      ? `${mensagemErro} Todas as dicas já estão abertas.`
      : `${mensagemErro} ${state.errosRodada}/${ERROS_PARA_DICA_AUTOMATICA} erros para liberar uma dica automática.`;
  refs.formFeedback.className = "form-feedback is-error";
  return {
    ok: true,
    correto: false,
    streak: state.streak,
    erros: state.errosRodada,
    dicaAutomatica,
  };
}

function revelarMetadados() {
  const faixa = state.resolvida;
  refs.coverFrame.classList.remove("is-concealed");
  refs.coverImage.alt = `Capa de ${faixa.album}, de ${faixa.artista}`;

  [
    [refs.metaTitle, faixa.titulo],
    [refs.metaArtist, faixa.artista],
    [refs.metaAlbum, faixa.album],
    [refs.metaYear, faixa.ano],
  ].forEach(([elemento, valor]) => {
    elemento.textContent = valor || "Não informado";
    elemento.classList.add("is-revealed");
  });

  refs.filePreview.classList.add("is-revealed");
  refs.fileState.textContent = "ARQUIVO IDENTIFICADO";
}

function encerrarRodada(acertou) {
  if (state.rodadaEncerrada) return;
  state.rodadaEncerrada = true;
  pararAudio();
  fecharSugestoes();
  revelarMetadados();

  refs.guessInput.disabled = true;
  refs.submitButton.disabled = true;
  refs.hintButton.disabled = true;
  refs.giveUpButton.disabled = true;

  const faixa = state.resolvida;
  refs.resultDialog.classList.toggle("is-loss", !acertou);
  refs.resultKicker.textContent = acertou ? "VOCÊ ACERTOU" : "RESPOSTA REVELADA";
  refs.resultTitle.textContent = acertou ? "Ouvido afiado." : "Fica para a próxima.";
  refs.resultSong.textContent = faixa.titulo;
  refs.resultArtist.textContent = faixa.artista;
  refs.resultAlbum.textContent = `${faixa.album}${faixa.ano ? ` · ${faixa.ano}` : ""}`;
  refs.resultCover.src = faixa.capa;
  refs.resultCover.alt = `Capa de ${faixa.album}`;
  refs.resultMessage.textContent = acertou
    ? state.sequenciaPerdidaPorDicas
      ? `Você acertou, mas ultrapassou o limite de ${LIMITE_DICAS_STREAK} dicas. A sequência foi reiniciada e agora está em ${state.streak}.`
      : `Acerto com ${ESTAGIOS[state.estagio].rotulo}. Sua sequência agora é de ${state.streak} ${state.streak === 1 ? "acerto" : "acertos"}.`
    : "A sequência voltou a zero, mas a próxima faixa já está pronta para uma nova tentativa.";

  window.setTimeout(() => refs.resultDialog.showModal(), 360);
}

function desistir() {
  if (state.rodadaEncerrada) return null;
  state.streak = 0;
  salvarStreak();
  encerrarRodada(false);
  return {
    desistiu: true,
    streak: state.streak,
    faixa: {
      titulo: state.resolvida.titulo,
      artista: state.resolvida.artista,
      album: state.resolvida.album,
    },
  };
}

function resetarInterface() {
  state.estagio = indiceEstagioInicial();
  state.rodadaEncerrada = false;
  state.audioPronto = false;
  state.errosRodada = 0;
  state.sequenciaPerdidaPorDicas = false;
  state.palpitesErrados.clear();
  fecharSugestoes();
  refs.audioTime.textContent = "00:00.0";
  refs.coverFrame.classList.add("is-concealed");
  refs.filePreview.classList.remove("is-revealed");
  refs.fileState.textContent = "IDENTIDADE OCULTA";
  refs.guessInput.disabled = false;
  refs.guessInput.value = "";
  refs.guessInput.classList.remove("is-wrong");
  refs.submitButton.disabled = false;
  refs.giveUpButton.disabled = false;
  refs.formFeedback.textContent = "Pressione Enter para usar a primeira sugestão.";
  refs.formFeedback.className = "form-feedback";
  refs.previewButton.disabled = true;

  [
    [refs.metaTitle, "••••••••••••"],
    [refs.metaArtist, "••••••••••••"],
    [refs.metaAlbum, "••••••••••••"],
    [refs.metaYear, "••••"],
  ].forEach(([elemento, texto]) => {
    elemento.textContent = texto;
    elemento.classList.remove("is-revealed");
  });
  atualizarEstagio();
}

async function iniciarRodada(tentativaDePrevia = 0) {
  pararAudio();
  resetarInterface();

  const indice = state.ordem[state.posicao];
  state.faixa = MUSICAS[indice];
  state.resolvida = {
    ...state.faixa,
    audio: state.faixa.audioLocal,
    capa: state.faixa.capaLocal || criarCapaFallback(state.faixa),
  };

  const numero = state.posicao + 1;
  const total = state.ordem.length;
  const largura = Math.max(2, String(total).length);
  refs.roundCounter.textContent = `FAIXA ${String(numero).padStart(largura, "0")} / ${String(total).padStart(largura, "0")}`;
  refs.fileNumber.textContent = `#${String(state.faixa.playlistIndex || indice + 1).padStart(3, "0")}`;
  refs.coverImage.src = state.resolvida.capa;
  refs.coverImage.alt = "Capa do álbum oculta";
  definirStatus("loading", "CARREGANDO PRÉVIA");
  refs.playButton.disabled = true;

  const pedido = ++state.pedidoAtual;
  const resolvida = await resolverFaixa(state.faixa, pedido);
  if (pedido !== state.pedidoAtual) return;

  state.resolvida = resolvida;
  refs.coverImage.src = resolvida.capa;
  const preparo = await prepararAudio(resolvida, pedido);
  if (pedido !== state.pedidoAtual || preparo?.pronto) return;

  const podeTentarOutra =
    !EH_IOS &&
    ["sem_previa", "arquivo"].includes(preparo?.motivo) &&
    tentativaDePrevia < Math.min(5, state.ordem.length - 1);
  if (!podeTentarOutra) return;

  state.posicao = (state.posicao + 1) % state.ordem.length;
  definirStatus("loading", "BUSCANDO OUTRA PRÉVIA");
  await iniciarRodada(tentativaDePrevia + 1);
}

function proximaRodada() {
  pararAudio();
  if (refs.resultDialog.open) refs.resultDialog.close();
  state.posicao += 1;
  if (state.posicao >= state.ordem.length) {
    state.ordem = embaralhar(indicesDoModo());
    state.posicao = 0;
  }
  void iniciarRodada();
}

function registrarEventos() {
  refs.randomTab.addEventListener("click", () => ativarModo("random"));
  refs.specificTab.addEventListener("click", () => ativarModo("specific"));
  refs.startHalfButton.addEventListener("click", () => definirDuracaoInicial(0.5));
  refs.startOneButton.addEventListener("click", () => definirDuracaoInicial(1));
  refs.artistSelect.addEventListener("change", () => {
    ativarModo("specific", refs.artistSelect.value);
  });
  refs.playButton.addEventListener("click", () => void tocarTrecho());
  refs.hintButton.addEventListener("click", () => usarDica());
  refs.giveUpButton.addEventListener("click", desistir);
  refs.previewButton.addEventListener("click", () => void alternarPreviaCompleta());
  refs.nextButton.addEventListener("click", proximaRodada);

  refs.guessForm.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const resultado = validarPalpite(refs.guessInput.value);
    if (resultado.correto) {
      refs.formFeedback.textContent = "Resposta correta!";
      refs.formFeedback.className = "form-feedback is-success";
    }
  });

  refs.guessInput.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowDown" && state.sugestoesAtuais.length) {
      evento.preventDefault();
      marcarSugestaoAtiva(state.sugestaoAtiva + 1);
      return;
    }
    if (evento.key === "ArrowUp" && state.sugestoesAtuais.length) {
      evento.preventDefault();
      marcarSugestaoAtiva(state.sugestaoAtiva - 1);
      return;
    }
    if (evento.key === "Escape") {
      fecharSugestoes();
      return;
    }
    if (evento.key === "Enter" && state.sugestoesAtuais.length) {
      evento.preventDefault();
      selecionarSugestao(state.sugestaoAtiva, true);
    }
  });

  refs.guessInput.addEventListener("input", () => {
    refs.guessInput.classList.remove("is-wrong");
    renderizarSugestoes();
    if (refs.formFeedback.classList.contains("is-error")) {
      refs.formFeedback.textContent = "Pressione Enter para usar a primeira sugestão.";
      refs.formFeedback.className = "form-feedback";
    }
  });

  refs.guessInput.addEventListener("focus", renderizarSugestoes);
  refs.guessInput.addEventListener("blur", () => {
    window.setTimeout(fecharSugestoes, 120);
  });

  refs.audio.addEventListener("ended", pararAudio);
  refs.resultDialog.addEventListener("cancel", (evento) => evento.preventDefault());
}

function registrarWebMcp() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  const registrar = (tool) => {
    try {
      void Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});
    } catch {
      // Navegadores sem suporte completo simplesmente ignoram as ferramentas.
    }
  };

  registrar({
    name: "get_music_game_state",
    title: "Consultar rodada musical",
    description: "Consulta o progresso visível da rodada sem revelar a resposta.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() {
      return {
        round: state.posicao + 1,
        totalRounds: state.ordem.length,
        mode: state.modo,
        selectedArtist: state.modo === "specific" ? state.artistaSelecionado : null,
        clipSeconds: ESTAGIOS[state.estagio].segundos,
        hintStage: state.estagio,
        artistHint: state.estagio >= 6 ? state.resolvida.artista : null,
        firstLetterHint:
          state.estagio >= 7
            ? state.faixa.titulo.match(/[A-Za-zÀ-ÖØ-öø-ÿ0-9]/)?.[0]?.toUpperCase() || "?"
            : null,
        streak: state.streak,
        audioReady: state.audioPronto,
        roundOver: state.rodadaEncerrada,
      };
    },
  });

  registrar({
    name: "play_current_music_snippet",
    title: "Tocar trecho atual",
    description: "Toca o trecho de áudio atualmente liberado na interface.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    async execute() {
      const played = await tocarTrecho();
      if (!played) throw new Error("A prévia não está pronta para reprodução.");
      return { played: true, seconds: ESTAGIOS[state.estagio].segundos };
    },
  });

  registrar({
    name: "use_music_hint",
    title: "Usar próxima dica",
    description: "Libera a próxima dica da rodada seguindo a ordem do jogo.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute() {
      const dica = usarDica();
      if (!dica) throw new Error("Não há outra dica disponível nesta rodada.");
      return dica;
    },
  });

  registrar({
    name: "submit_music_guess",
    title: "Responder título da música",
    description: "Envia um palpite de título para a rodada musical atual.",
    inputSchema: {
      type: "object",
      properties: { title: { type: "string", minLength: 1, maxLength: 120 } },
      required: ["title"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (!input || typeof input.title !== "string") throw new TypeError("title deve ser um texto.");
      const resultado = validarPalpite(input.title);
      if (!resultado.ok) throw new Error(`Palpite rejeitado: ${resultado.motivo}.`);
      return resultado;
    },
  });

  registrar({
    name: "select_music_artist",
    title: "Selecionar artista",
    description: "Ativa o modo de músicas específicas e seleciona um artista da playlist.",
    inputSchema: {
      type: "object",
      properties: { artist: { type: "string", minLength: 1, maxLength: 120 } },
      required: ["artist"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: true },
    execute(input) {
      if (!input || typeof input.artist !== "string") {
        throw new TypeError("artist deve ser um texto.");
      }
      if (!ativarModo("specific", input.artist)) {
        throw new Error("Artista não encontrado nesta playlist.");
      }
      return {
        mode: state.modo,
        artist: state.artistaSelecionado,
        tracks: state.ordem.length,
      };
    },
  });

  registrar({
    name: "give_up_music_round",
    title: "Desistir da rodada",
    description: "Encerra a rodada, revela a faixa e zera a sequência de acertos.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute() {
      const resultado = desistir();
      if (!resultado) throw new Error("A rodada já foi encerrada.");
      return resultado;
    },
  });

  window.addEventListener("pagehide", () => lifecycle.abort(), { once: true });
}

function iniciar() {
  refs.audio.preload = EH_IOS ? "none" : "metadata";
  refs.audio.setAttribute("playsinline", "");
  refs.audio.setAttribute("webkit-playsinline", "");
  refs.streakValue.textContent = String(state.streak);
  gerarWaveform();
  popularArtistas();
  prepararFila();
  registrarEventos();
  registrarWebMcp();
  void iniciarRodada();
}

iniciar();
