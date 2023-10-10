import { createStore } from 'vuex'

const store = createStore( {
   state: {
    images : [
         {
          date: '2021-4-17',
            id: 1,
            name: "التحليل الدموي الشامل",
          url: "data:image/jpeg;base64,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",
            content: `التحليل الدموي الشامل يُعتبر واحدًا من أكثر التحاليل شمولية وشيوعًا. يساعد في تقييم صحة الدم وفحص العديد من الجوانب المختلفة. هنا بعض أفضل أنواع التحاليل الدموية الشاملة التي يمكن أن تكون مفيدة:
- CBC (Complete Blood Count): يمكن أن يظهر عدد الكريات الحمراء والبيضاء في الدم وتقدير حجم الكريات الحمراء والتشكيلة الكريوية ووجود تغيرات تهدد الحياة في الدم.
- فحص الكيمياء السيري: يقيس مستويات العناصر الغذائية المهمة مثل الجلوكوز، البروتينات، الدهون، الصوديوم، البوتاسيوم، والكالسيوم في الدم.
- فحص الهرمونات: يقيس مستويات الهرمونات المختلفة في الدم، مثل الهرمونات الغدية (مثل هرمون الغدة الدرقية وهرمون النمو)، الهرمونات الجنسية، وهرمونات القشرة الكظرية.
- Lipid Profile: يقيس مستويات الدهون في الدم مثل الكولسترول الكلي والدهون الثلاثية. يمكن أن يساعد في تقييم خطر الإصابة بأمراض القلب والشرايين.
- فحص الكبد: يمكن أن يشمل اختبارات مثل تحليل وظائف الكبد، بما في ذلك اختبارات لأنزيمات الكبد وتوصيل الصفراء ومستويات البروتينات.

هذه قائمة مبسطة وليست شاملة لجميع أنواع التحاليل الدموية الشاملة المتاحة. قد ينصحك الطبيب بإجراء تحاليل محددة وفقًا لتاريخك الطبي وأعراضك واحتياجاتك الصحية الفردية. يُرجى استشارة الطبيب المعالج لتحديد الأنواع المناسبة من التحاليل الدموية الشاملة التي تحتاجها.
`
         },
         {
            date: '2021-1-1',
            id: 2,
            name: "إجراء التحاليل الطبية",
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYYGBgSGBgYGBgYGRgYGBEYGBgZGRgYGBgcIS4lHB4rHxgYJjgmLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEAQAAIBAgQDBQUECQQBBQAAAAECAAMRBAUhMRJBUQYiYXGBE5GhscEUMlLRFSNCYnKCorLwB5Lh8bMzQ1NjdP/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAApEQACAgICAgEDBAMBAAAAAAAAAQIRAxIhMQRBEyJRYRSBkaEysdFx/9oADAMBAAIRAxEAPwCWlSX8I9whtOmv4R7hKejjBDqeKE9+0ePTLMMANhG4apdxAnxGkWX1bvM+hb5N/lx0hxlXl1TQSxvPJyL6j0IP6TjmC1Xk9RpX4irGhEnklQ2pUldi6mkfVqyrzDEgA6zpiqOOUrO0qovDkrzI08w7xliuPjXYjTRY41zaUbsdbwypjQRKrE17wVyG1oyxyt9ZpcIC20xmEqEETd5EwIEOZNKxPBrolOXFo39EeE0CkWnSROH5ZHp/BFuzPjKyJxsCRNAQJEyCZZGH4kjP1MKZX4jDt0mralAcVSAG0op2bRGaCsJxi0IxNdVOsjXEpGTBJAmIchd5msRnro9pqMY6FTaYXOaHE9xLRZyTSRocB2hZiLzZZTmy2Gs8lw9FxtD0xFZfu3jSW0aaOaE3GdpntFPMkI3hFLEBtp4eM4xSna4npPZfFu6AvoZySxKm0ejDM20ma0Ts4kU5zrGVJVY86GWlSU2PbQy2FckMrqJm6x7x84p121infseeY4UDHBWEshh5xk8ImxXorHqtCcurFWuY6qgkS2EbZsDaNlgc1AEs1zheswArHlr5Rw9qb2RtN7gi1gTz8ojgn2ZZGujbV84XrKrE5tM6+ExAseBrEX0sbA9QDpI6uHrfgf3f51hUUhJTk/RZV80lRjsx4tINVwtcHWm58lLf23gj8Q3Rh5qR849RI3L0ibDE3JPOFYitYQfCIx1sYa+DLCa4pmak+wFMU0s8uwxc6yJMutLLAvwHXaVhHblEpPXh9FrTydbc5dYFfZgASrp5otukZWzP8JmlCc/pZWE8cPqiaZceYUmKvMImZODe8saWe2GshPxH6R0w8yL7ZqziB1jTX8Zmf06vOOOcpbcSf6WS9FV5MX7L6rjwu5lVmGcLbeZjNs2B0VtZnXqux+8dZWPicWxH5auiyzLNLtoYGuYnleMo4K51lhRy4dJWPjR9nPPzPsCjGseRj6VHiOstaeWX5SYZfY7yixwj0ceTNOR3A5SrAXlumSIBykmX07AXh9drCc029qR04ca12ZUvlSDkJdZWgQC0zuKx5DW8ZcZZWJEXJBqPJTFli50jTLVnTUleHM4ahnF8Z6KyBlSrKbMn0Mnq1DAMQ15fHCnZDLktUUrAxQlknZ1cHLYEAvhGVKamZqrjnWRUc1d2CKCWY2A6kzk2OlRtmkTLuPbQDc9Iq2BpIDcM568h6DWWKqEQJe5A1PU84CycRvqPKHZjaJIGGYqbIgVCCCAO6CRte3I7esDrZhxqVa4anbQ8zazKYdispD6g8L8mAtf+JefnvKnNMO6qajLZkHfYfdqKBZWv1GgPp0lI17JZNvQ982e29yVUN/EqhW+K3kRzV/fr68RJlTiGsoe+6pxefCAZB9rH+ectrEhc30HjNKiMQGPeJtrsTdtPUydc4q3sHI3VfAcNhr6TPYvFgstjqpJPhYafON/SIWxJ2ufW2n1iNxXZTSbSo0mW5ncfeZ7s17m+xI0A8JZJm9O9mAHlraed4XE1CLIrkEk90EnUk7gS6y7Au1mqI4HJeFvex5eQkk1J0ik4OCbfX9m9dbrcag8+sq8RcHwhuS466Cm1uAHTT7nlLSvlwI8/jOiG2J8nA3HMnXDRmVrx4qy4TJQTtCBkK9JV+XGPZo+LKXRQccXHLir2d6XErsRk7rzMZeZBgfiTXoFd4NVqTlei6+MBfjOgEqs8GrRo4ZJ0xzPcwvDUYzAZY7G5mioZWwG0T54sbJjmlSRWoLSwy83Me+WsNYsMAja6GM5KUeDl1lGS2ReaBdpX+3Be0mbEXEHpUrNxSUVVtlZytqi8wtgNYPj8UoEGq48KJnswzHiO8nHFctmUnm+nWJLiKwLTTZK1wJ52+LJYec3vZ090Q5mnEHjxcZ8+zQ3nDO3jGnAepZFVgVaGVIHWlokJgRij+GdlLJUYJaqsJcZFl4T9cw1Isl+Q5t67TOdmcuasC7khFNgNbuRvbwmtqFRux9dh0AGwnKueTtjHVktavc2uPeIkB5a+RBlbiKv4QD1Y2PoAIC7i+hIPS5jpAlI0ntbbzrYsAa2IPrfrM62YPaza8P8AuE7Tctz4r8tuIfmOREosbZCWZIscbgsPVUk0xY78HEv9pHOZ6v2ewx29oPKoT8D/AMy2Q8B4lPEt7Hx8GHI8oLXYcRtte4/P4/Ex1ivsj+ocf8SpTs3hQ2pdua8TXVtOqgHxsekmpGhSF1pIGIOvCCQwAuLnXfi90mqjcbX1Hgb/AJ2PoZXsLn+a/vFvnM8CXQ/6qUlTDWzIkG3h7r6zuIzNjoug5WgaJ+Xwki09LdABfp5xtIpEnmk+C5XEBlpuNHNw9v2yNm87aH0msyTEcaa30JAOnCLWut+ZBMweGU1R7OmxV1BsToHH7QU7g/QTV4LM6GCRaNV+K/CCRsgPd41Hlz5257SOTPGtV6LYfDd/I3V+jSqtoTScdJncXjzScox2sQeTqdVYeBEkpZwvWI0pIqm4ujT2UiV+LoqYKmaqecVfFKytbXSRmlCLk/XJeDeSSivfBX4nAA8oAMtAO0PwiLxAkAk21t4yyrU1LHYXt6XAieL5kc0nFKqVjeV4jwpSu+a6BMFhgvSWioLQZMP0MIFMzpl2STdEOKUW0mZx9I30mpakTImwYPKVhPU580N1VGTXjEea7zTnLlPKRPlYllnRxvxX6MlXdz1gbYJ25Gbb9FidGXgcoXmTNHBKJjKGUNcEibbJqfCAJ1cIOkOw9K0lOSaL44NSthcjMfOBLzmOyiBoJVlq2H0gVXCax4yQJY2BcEUK9gYodxfjMnmGDOH4aZZeHh7qhVAYD8IJvKmpjB90DhPu26W3noOe5cK1Nk/asSh2Iblr0NrTybEE87+u4tp85PE9l+Smd6Pjpk9XEEG40PPl7xGDEq33tD1Gx9IOpJF50L4WnSoI45TdhtFmUgkcQ94I5gH6QpaQIul7bkftL4jrBcMxXYjyOx98LWov8B6Nt6NKxVHPJnVqHc6E6E/suOvgeogtR+Hfb6bQh6h3I9Qd/wA4NTo8RJI3PujWBL2ztJS7AJrf0ve3WEfoGrxEEAWPW9jcHl6y1yjDqjBjuT3RNxhcCCtyNTObNmcXSOzBgU020ef08i4Rdrn4CQ1qPBpsJ6LVy4dJS5hlW+k53kcu2dCwqPSMcrlSGBsQbgjcETovUNjZq9MFqLvqWS93TpxpuDYnh8QYbisuI5SteiwIIJDKQytzRhsR/mouOcWUb5RWEq+l9MuMub7VQFEsxq0+I0Kjmxr7s9IA94jS4J59NpSlmHMgj0tCK33lxSK7PxKppqTw0aqi9yd+A/eXYa89oZnaiqn2pODjBVcUiG4pVG2fwV/gecSPdBlG/wD1FcuJcc5a5NimZyp/A30lLhUDrxM/DckWC3Oludx1ltlOXhnUiobg3sFHeA3B72l5TLhyTxtLpojj8nFjzK3ymjQYZu8P85wHNs39nWZPwhPiimH5WhLU7gEcJJ21JA3mHzQj2tQl1H6xwOIkE2Yj6TzvGw/BJyk11R6udvyYqME27s1NDtAOsMXPl6iY3LsGHOrAr1R0vfzY2h2KyXgHETVVLgB7I63OwPC2k9CORS6a/k87JjlidSi1+xrKWcKeYhlLMFPOef0cE9+5VU+YZfzhdZmpMqtU1ZQw7txY3G4PgeUvHHN8Uc3zY31I36YlTzkwdTMRh3rleJFLre10DGxHW4haYvEKLtSqADUngawA66RZJJ0+GOnfKNcFBnDSmUw3aReZh6Z+vWDn0NS+xdezkqLKannSnnCqeaKeczTCtUWJEckDXHKeckGKXrF1Y6aDw4kLkQU4odRGe0vzgUBnJBXCIpDxxTUa0TuLzzDtZgRTxLkDuVArgdC9y1vUH3z0ziuJhO3mj0z+JGU/ytcH+qbx+JUT8tXCzKImnlOqto6iNY9gRPQSPLbGDz+F5MrcIvxAAb8Q0kCqb+cnx1IiidLkWOn8QH5ws1W0gb7SztYLZBttdvEjlD6NSxXSwuL9TIMuwT1B3EJtvyt53lguT1wRdDvyI/OJvFcWUcJP/GJsEw6sKfAtgpvbzGtzzO01WESyiZnCNwKAeQl3gcaG2M83I7bZ6uFaxSZZGmINXwwMMGo0jGQ8/gJJSovrZncZloPKZ7HZTbYTfmkDufpI3y5DuJRZUhHhbPKMRSalxNYlGXgqoL3dPxLbXjXUj1EWBxtPBMFID0qq24FHEcVTcfevbU6khV56m2pPpr9n6Tb3mE7SZGMM4Qnho1CzUahIHsCe9UoFzqqkAsvkRA5xb4N8br8r/RU9ocD9nIVTxI4Lo34lJ2P7w2I6iVWQVytdDc/f+GsLq5/hnp/Y1+4pulY34Ue4uqqNeBhe562Ostk7GPS4XatTbvfdTiJ2JGunT4y8fJjKKTfKOWfgZYz2S4fKNDh8UiuABt3RryvbXWeXdrUtiayjZaj29WLfWH0O2iceqPYnbuzYYjA4WrUBqKi+0o06hL6d914zrffvCebO5ez6LxWsMrku1XB5fhsa1JTw2uza3F9ANPrO0c/qqbg299tP3b2lp2twFOkyCmAAysdG4tjbqZmfZyMZfc75q6cemen4LOKZpo7UuJqihiRddwOQ06yzweIwlZlZqIvsLm9gOXxgOQZcThaVhrwKffL7KMp4TdlHPpPdhJ6Jtvo+byePCOWlFfl0itwScNIILjvvz2/WFfkJa5WTcqdmRh7xb6yPF4UoxXhNixYaGxDPx6e+EZdh24rAG5RgPE20k4yTUn92fL+Upry0kumjzdXBjuPoTBa/ZvMKf3qD6dAG+RgFV66ffR1/iVh8xNx6Z7mrXZeLWYbMYRTxrjYyiwGIZztNDQoabTcgJEzWoJOudP4yE0JNQoAw20Ymp543OHUc8HMyuq4IdIBicDppNbMaz9Pr1imBNBupimsx7GtWYf8A1EqDioDrx/NJp8OxteYjt7X48SiD/wBtB6EksfgVgxR+pGzSuDspcO9r+FobUNwLcxK5RqZPTe58J3pnmtB+Coi/W5Fz84fhsEagCAauQPIA3PxJ90hwCXtYf8zcZJlPB33HfIsB+EHr4mRy5VFFcGCU5fggwGXeyQIqjxPNj4yd6Z6S1dYO6zg7ds9aklSKHE0XMNylCm5hDpISLQgUTRUq3jJWrbTPU6p6yxep3L8+ESUo0Vi2WZcbECN4FvzB8CRBlbWOVzeIygRY8mv52ldnuW08RQejXXiSoLabg7qy9CDrCkqbzoe4N4rGi6PDc07A1cOeJG9uqvoiKVqW1ILX0toL2J3mi7J0jdXqUuBitQHiUAqTxAa+6ajtXimpKHQDxvexNz4+ErMvxrVqQdwASWU22084vXKLObapnmSdj8WGuKYIudQygel7TSZ5iCeBGFmSlRRh0ZUUEfCa6lh0W/dtf8JI+Uh/QGHrOzse81tbk2K6bXHSK06KRy82zKjKKddCXLKadgCDbkSb3kWD7P4UkKfbub/slBcc9CPrNmvZ8KCqHcm3TUWtzkOWdnK1Oor90hTfffS0Kgr5Rp+TNL6WaCngEprwU7hKaIADqbW2v4QjDVl4WIVyQQvdUsCTe2w2016R+Jp1LHhTUrrtcyOhSrcLaMpsOHUDW3Wxtr4TsT+mmzzJZpuTddf2W97FOVlNxtbadKAlT+Ekj3EfWDU0O7Xvba538/8AiOU685GmU3QaX8Yyoit95VPmAYGH15/GdNTXY+4RlFiuaY2vlGHY60af+0A/CC1ezuHOycP8JMOd50voIy2XTFbi+0UNfsqn7DkedjAanZWouqMre8TWhzacFTrG3kLpF+jD18nxCboSOoIMrsTTZR3kZfNSPnPSVeMYk7gev/UZTYrxx9HkrFYp6n+jkOvs6ev7k5G+RA+JlFTfaYPtI4+1VifxAegUaD1msWsYBV7KNXrvVqPwIzXVVF2IsNTyHxlYSUXbIThKaqJkA95a5XldWsRwL3fxHRffNzhciw6LZaanxYcTHzJhqIBYAWA2A0AhlnviIYeIlzJjMjyJKVmY8bjn+yvkPrL+8Fw7aSbinLJtu2dUUoqoidZC6SYtGmAIO1ODVaUOYSKpDZgNKZhjjuW8BEix/DJyKR6JKb6xytrBw1jOq2sUYnVt5wtoZGrbzhbSCjGe7YpxUlHQp8WYTPdnzdHFzZK9ZR/KVH0mk7Sf+kfD2fxeZPszU7j/AL2IxR/rgaHUi5OIILA8iR8AfrKOhnDWKcN/1tdeK+3AwsLeRP8Ath9QkM1+bv7gVA+UzOBq8vxYrEfM/nFodM0+T5yvsynEQ/tnQb/eVA2/LS/ulzlWavwvxPcqwAva+q3tMPkjj2ddjuuLqFT+G6hdPQmWGV1+J8TxbU8RRC+q2PzMMU2LOuS4xna6qtQoOCwOl9CR75qOz2cNWDcXD3fwn56zwztxb7WR0RPiL/WbP/SVO5Xb99F9wJPzEonb1EyqMYbHqpqRnGJU0T+uPgj/ANyGV+Kc/pDDD/6MQbeN0Ebkikm6/Fmnvcx7W5QSge96RUW73r9I1CX1+QgkTvELQbi7w852o2sNAv2FI4G8azCQVWnL6CBILl2TBxEX1kCnSOB0haMpBP2gdPhFBE+p+cU2o2zMhgRdrnYS19vKygoUWv5+MmvKVbEjUVQb9pnBijeBiSoIVEVystqGJk32kyvpGTTag2YV9qjTijBiZGzzamcmFNizIHxRg7VBI2qCBxMph9HEmF03J1lNTqiWKVRb3SUoloTChEBIlqfOSe129ZKit2IRGO4xGu4tNyaynz9b0m86X/kExHZRrpfrVxH94m9zUgoR1Ke8MD9J512apVEakjKyqWxJcEEWJdOG/wAYTVas0WPpFWJ/eJ/3NcfKYTLKlzT8a9c/1D856RmgBDW/ElvS8xePwyU3oqotd2b38N/fpMkZN20Ddn6l6NfxxTH38EKyutZ8V44uiP6rSnyWrw0XUC/tMQR/D3Q1/wCmE4R7HE//ALKf9zflDFLgEr5Kvtk18a/gEH9Cz0H/AEyThw1//kqFvOx4R/bPO+1ZvjKvgUH9CT0vsQvDhaduaqfe7n6x8SubJeXPXCv2NLhnHt31vZXvoRa5TTx84DXQnH0H5Lh6wPmWEnwiMK1ViDZtjyPdF7e6SFP1qN0psPeRHlGv5IRyP+i0w7XJ8ozDP3/86RmFexbyMZhm79/82mrsKfRMH7y+Z+cdUfvesgRu8vn9Y6o3e9fzh9/sC+P3Jq7axcWgjK284DoIF6Gb5ZID3ROg7yMfdjlbeGjWPptp6n5mKD06mnv+cUbUGxi1qN1kiVmjSY9GEKZpIlWs0lSs0hVxJkMNi0TriWkn2syK8XFNZqY5sSZE1cx/EJE0IrI2qmQtUMnNOc9jMCiFKhlrxm3ugSYeWjUNB5iTmuh4ex1JzHh9Y9KUeKU52jri+CMOZxnNpMtKcNLSFIDkV+Pc8B/l+czuBrueHiF+LiueliLTUY2l3fVfrK/BYXQevzh1BswLGFgCLHcSix+HLlGNw1M3Gm46H/OU174c/wCecFrYXiI001hUTbNdGIyDKWpofakFg5dQuwJTg1uPExmHLFq3cbXFIdt+8+vl4zZ4fLFA+7ufpH0sssTa+40sI0YCyyvk8x7SrfFVTcfeHnoiiekdmUK4SiD3W4RccxuR5aGKrkNFnLvTUsTckoLk9Zc0su0FjpHjDV3ZDPk+SKjXQRRJ43Nzqdr3A0Ow5SRDqD+79YkwjXPxnRh2vbwjtWRjaEH18yYg9vePlJEwZNz0iTCk6bf9RaQ624OBtj01+MeXF733/KNTDHaSew1mpBTZ3jvY/LznVOlr7XjvYgTop+JgpDcnVta3h1jgnOJUj5qGRB9n8YowIOkUen9xLX2MkyAjyiSmIlaN4rGKkUbJ0oydFtBBUMkSqY1CWFgicNO8hWpJFqTUazvso4UIhWnfbzAEKEmShIftEQxU1hUbLClh/CGGkNJW0cfbTSFU8ep3NpKVspFJByU45UEhp1QdQQfKSo+8m0yqY5UERQWjQ+kV9IKDaIMSgsPMfKQ0KYsPX5xYypa3+cpHSq6e/wCcpGPBKUuSQ0x8/nIEQaeseasiSrt6xlEVyJKaC3rOKm/8UalTT1jVqf3fSOkJKR117x84fhh3R6SsqVe8fOH4Wp3RGoRyC0IuY0nv/wAv1kSPv/nWNL9/+X6xdQ2GIdDG0m1kVN9DGo5vBr2HbonQ6idJ1g6vrEX1jag3CHOs7IC8deDU25JecaN45xn0ho25EIoqb6CKNRPYxiNIWq6nziiiosxCqY5ahnYowCVakeKsUUDMI1Y014oog4w1ovaxRTBQ5a0cK5iimAySjiSNiRLCjmrjfX5++diigTYdRzBW01BkrYiwnYovse3RWY2tc3nab6CKKUQnscXg6VdvX5xRQoVjkqd0eZipP/d9J2KMhWDV6vePnLLL63dHnFFGQkugham/l9TGcffJ/dHziimQP+E1OroYqdXWdimBfRxKmonS2sUUYWzr1NY7jiiigbfI01ZG+JE5FHoDZDTxgsNfnFFFCA//2Q==',
            content: `إجراء التحاليل الطبية يعد أمرًا هامًا لعدة أسباب:
1. تقييم الصحة: تساعد التحاليل الطبية في تقييم الحالة الصحية العامة للفرد. من خلال تحليل العينات البيولوجية مثل الدم والبول وغيرها، يمكن تحديد معلومات حول وظائف الأعضاء ومستويات الهرمونات والعناصر الغذائية وغيرها من المؤشرات الصحية.
2. التشخيص: تساعد التحاليل الطبية في تشخيص الأمراض والحالات الصحية المختلفة. يساعد تحليل العينات البيولوجية في اكتشاف وجود علامات وأعراض مرضية، وبناءً على النتائج، يمكن تحديد التشخيص السليم وتوجيه العلاج اللازم.
3. مراقبة العلاج: يستخدم التحليل الطبي أيضًا لمراقبة استجابة المريض للعلاج. من خلال إجراء تحاليل متكررة، يمكن متابعة تغيرات المؤشرات الصحية وتقييم فعالية العلاج المعطى.
4. الوقاية والكشف المبكر: قد تساهم التحاليل الطبية في الكشف المبكر عن أمراض قابلة للوقاية أو العلاج المبكر. فالتحاليل المنتظمة تسهم في رصد التغيرات الصحية المستقلة ومساعدة الأشخاص على اتخاذ الإجراءات الوقائية المناسبة.
إجراء التحاليل الطبية يُعَدُّ جزءًا أساسيًا من رعاية الصحة الشاملة ويساهم في تحسين جودة الحياة والكشف عن المشكلات الصحية في وقت مبكر.
`
         },
         {
            date: '2022-12-27',
            id: 3,
            name: "اسباب  التحاليل الدمويه",
            url: 'data:image/jpeg;base64,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',
            content: `التحاليل الطبية تلعب دورًا حاسمًا في تشخيص حالة المريض. إنها تساعد الأطباء على فهم الوضع الصحي للشخص وتحديد الحالة بشكل دقيق. عندما يتم أخذ التحاليل الطبية، تُحلل النتائج بعناية لتقييم مستويات العناصر الحيوية في الجسم مثل الكوليسترول، السكر، الهرمونات، وغيرها. يتم توجيه التحاليل الطبية بناءً على تاريخ المرض، الأعراض الموجودة، والاشتباه في التشخيص المحتمل.
علاوة على ذلك، تحليل العينات المكونة من الدم أو البول أو العينات الأخرى يمكن أن يساعد في كشف الالتهابات، العدوى، الأمراض الوراثية، الأمراض المزمنة، وتقييم وظائف الأعضاء المختلفة في الجسم.
من خلال تحليل وتقييم نتائج التحاليل الطبية بجانب التاريخ المرضي والأعراض، يتم تشخيص الحالة بشكل دقيق وتحديد السبب المحتمل للمشكلة الصحية. بناءً على التشخيص، سيتم وضع خطة علاج مناسبة للمريض.
ومع ذلك، يجب أن يتم تفسير نتائج التحاليل وتشخيص الحالة بواسطة أطباء متخصصين. إن استشارة الطبيب المؤهل هي `
         },
         {
            date: '2021-8-1',
            id: 4,
            name: "التحليل ",
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8YhqmJ7LfLsDvvrioxrGzg_ZXmk-yVdlxSQ&usqp=CAU',
            content: `التحليل الدموي الشامل يُعتبر واحدًا من أكثر التحاليل شمولية وشيوعًا. يساعد في تقييم صحة الدم وفحص العديد من الجوانب المختلفة. هنا بعض أفضل أنواع التحاليل الدموية الشاملة التي يمكن أن تكون مفيدة:
- CBC (Complete Blood Count): يمكن أن يظهر عدد الكريات الحمراء والبيضاء في الدم وتقدير حجم الكريات الحمراء والتشكيلة الكريوية ووجود تغيرات تهدد الحياة في الدم.
- فحص الكيمياء السيري: يقيس مستويات العناصر الغذائية المهمة مثل الجلوكوز، البروتينات، الدهون، الصوديوم، البوتاسيوم، والكالسيوم في الدم.
- فحص الهرمونات: يقيس مستويات الهرمونات المختلفة في الدم، مثل الهرمونات الغدية (مثل هرمون الغدة الدرقية وهرمون النمو)، الهرمونات الجنسية، وهرمونات القشرة الكظرية.
- Lipid Profile: يقيس مستويات الدهون في الدم مثل الكولسترول الكلي والدهون الثلاثية. يمكن أن يساعد في تقييم خطر الإصابة بأمراض القلب والشرايين.
- فحص الكبد: يمكن أن يشمل اختبارات مثل تحليل وظائف الكبد، بما في ذلك اختبارات لأنزيمات الكبد وتوصيل الصفراء ومستويات البروتينات.

هذه قائمة مبسطة وليست شاملة لجميع أنواع التحاليل الدموية الشاملة المتاحة. قد ينصحك الطبيب بإجراء تحاليل محددة وفقًا لتاريخك الطبي وأعراضك واحتياجاتك الصحية الفردية. يُرجى استشارة الطبيب المعالج لتحديد الأنواع المناسبة من التحاليل الدموية الشاملة التي تحتاجها.
`
         },
         {
            date: '2023-1-12',
            id: 5,
            name: " التحاليل الطبية",
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5brk3xVuBChfkJf-zqGTa8ip7SHBaVrioiA&usqp=CAU',
            content: `إجراء التحاليل الطبية يعد أمرًا هامًا لعدة أسباب:
1. تقييم الصحة: تساعد التحاليل الطبية في تقييم الحالة الصحية العامة للفرد. من خلال تحليل العينات البيولوجية مثل الدم والبول وغيرها، يمكن تحديد معلومات حول وظائف الأعضاء ومستويات الهرمونات والعناصر الغذائية وغيرها من المؤشرات الصحية.
2. التشخيص: تساعد التحاليل الطبية في تشخيص الأمراض والحالات الصحية المختلفة. يساعد تحليل العينات البيولوجية في اكتشاف وجود علامات وأعراض مرضية، وبناءً على النتائج، يمكن تحديد التشخيص السليم وتوجيه العلاج اللازم.
3. مراقبة العلاج: يستخدم التحليل الطبي أيضًا لمراقبة استجابة المريض للعلاج. من خلال إجراء تحاليل متكررة، يمكن متابعة تغيرات المؤشرات الصحية وتقييم فعالية العلاج المعطى.
4. الوقاية والكشف المبكر: قد تساهم التحاليل الطبية في الكشف المبكر عن أمراض قابلة للوقاية أو العلاج المبكر. فالتحاليل المنتظمة تسهم في رصد التغيرات الصحية المستقلة ومساعدة الأشخاص على اتخاذ الإجراءات الوقائية المناسبة.
إجراء التحاليل الطبية يُعَدُّ جزءًا أساسيًا من رعاية الصحة الشاملة ويساهم في تحسين جودة الحياة والكشف عن المشكلات الصحية في وقت مبكر.
`
         },
         {
            date: '2023-1-15',
            id: 6,
            name: "التحليل  الشامل",
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_y2nD4yipMsfjOMKlfhV7-iT0AQRhMm2w4A&usqp=CAU',
            content: `التحليل الدموي الشامل يُعتبر واحدًا من أكثر التحاليل شمولية وشيوعًا. يساعد في تقييم صحة الدم وفحص العديد من الجوانب المختلفة. هنا بعض أفضل أنواع التحاليل الدموية الشاملة التي يمكن أن تكون مفيدة:
- CBC (Complete Blood Count): يمكن أن يظهر عدد الكريات الحمراء والبيضاء في الدم وتقدير حجم الكريات الحمراء والتشكيلة الكريوية ووجود تغيرات تهدد الحياة في الدم.
- فحص الكيمياء السيري: يقيس مستويات العناصر الغذائية المهمة مثل الجلوكوز، البروتينات، الدهون، الصوديوم، البوتاسيوم، والكالسيوم في الدم.
- فحص الهرمونات: يقيس مستويات الهرمونات المختلفة في الدم، مثل الهرمونات الغدية (مثل هرمون الغدة الدرقية وهرمون النمو)، الهرمونات الجنسية، وهرمونات القشرة الكظرية.
- Lipid Profile: يقيس مستويات الدهون في الدم مثل الكولسترول الكلي والدهون الثلاثية. يمكن أن يساعد في تقييم خطر الإصابة بأمراض القلب والشرايين.
- فحص الكبد: يمكن أن يشمل اختبارات مثل تحليل وظائف الكبد، بما في ذلك اختبارات لأنزيمات الكبد وتوصيل الصفراء ومستويات البروتينات.

هذه قائمة مبسطة وليست شاملة لجميع أنواع التحاليل الدموية الشاملة المتاحة. قد ينصحك الطبيب بإجراء تحاليل محددة وفقًا لتاريخك الطبي وأعراضك واحتياجاتك الصحية الفردية. يُرجى استشارة الطبيب المعالج لتحديد الأنواع المناسبة من التحاليل الدموية الشاملة التي تحتاجها.
`

         },
         {
            date: '2022-12-12',
            id: 7,
            name: "إجراء التحاليل ",
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcGv4oq6PWSG0X3V9G5h8fAmAP7ZsGAJ5VQ&usqp=CAU',
            content: `إجراء التحاليل الطبية يعد أمرًا هامًا لعدة أسباب:
1. تقييم الصحة: تساعد التحاليل الطبية في تقييم الحالة الصحية العامة للفرد. من خلال تحليل العينات البيولوجية مثل الدم والبول وغيرها، يمكن تحديد معلومات حول وظائف الأعضاء ومستويات الهرمونات والعناصر الغذائية وغيرها من المؤشرات الصحية.
2. التشخيص: تساعد التحاليل الطبية في تشخيص الأمراض والحالات الصحية المختلفة. يساعد تحليل العينات البيولوجية في اكتشاف وجود علامات وأعراض مرضية، وبناءً على النتائج، يمكن تحديد التشخيص السليم وتوجيه العلاج اللازم.
3. مراقبة العلاج: يستخدم التحليل الطبي أيضًا لمراقبة استجابة المريض للعلاج. من خلال إجراء تحاليل متكررة، يمكن متابعة تغيرات المؤشرات الصحية وتقييم فعالية العلاج المعطى.
4. الوقاية والكشف المبكر: قد تساهم التحاليل الطبية في الكشف المبكر عن أمراض قابلة للوقاية أو العلاج المبكر. فالتحاليل المنتظمة تسهم في رصد التغيرات الصحية المستقلة ومساعدة الأشخاص على اتخاذ الإجراءات الوقائية المناسبة.
إجراء التحاليل الطبية يُعَدُّ جزءًا أساسيًا من رعاية الصحة الشاملة ويساهم في تحسين جودة الحياة والكشف عن المشكلات الصحية في وقت مبكر.
`
         },
      ]
   },

} )

export default store;












