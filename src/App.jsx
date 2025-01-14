import React, { useState } from 'react'
    import './App.css'
    import './index.css'

    const wishes = {
      family: [
        '親愛的家人們，新年快樂！願新的一年裡，我們全家幸福安康，心想事成，萬事如意！願我們的家永遠充滿歡聲笑語，幸福美滿！',
        '祝願家人們在新的一年裡，身體健康，平安喜樂，事業順利，財源廣進！願我們的家永遠和睦溫馨，幸福長久！'
      ],
      friends: [
        '親愛的朋友，新年快樂！願我們在新的一年裡友誼長存，共同進步！祝你事業有成，生活美滿，天天開心，心想事成！',
        '祝願我的朋友們新年快樂！願新的一年裡，我們都能實現自己的夢想，收穫滿滿的幸福與快樂！願我們的友誼地久天長！'
      ],
      business: [
        '尊敬的客戶和合作夥伴，新年快樂！感謝過去一年的支持與信任，願我們在新的一年裡繼續攜手共進，共創輝煌！祝您事業蒸蒸日上，財源廣進！',
        '新年新氣象，祝願我們的合作更加順利，事業更加輝煌！願我們在新的一年裡共同進步，共創美好未來！祝您新年快樂，萬事如意！'
      ],
      humor: [
        '新年快樂！祝你紅包拿到手軟，美食吃到嘴軟，體重不增反減，顏值越來越高！願你新的一年裡，笑口常開，好運連連！',
        '新年到，祝你吃嘛嘛香，睡嘛嘛甜，錢包鼓鼓，煩惱少少！願你新的一年裡，快樂加倍，幸福翻倍，好運連連，天天開心！'
      ]
    }

    function App() {
      const [wish, setWish] = useState('')
      const [category, setCategory] = useState('family')
      const [showCopy, setShowCopy] = useState(false)

      const generateWish = () => {
        const categoryWishes = wishes[category]
        const randomIndex = Math.floor(Math.random() * categoryWishes.length)
        setWish(categoryWishes[randomIndex])
      }

      const copyToClipboard = () => {
        navigator.clipboard.writeText(wish)
        setShowCopy(true)
        setTimeout(() => setShowCopy(false), 1000)
      }

      return (
        <div className="container">
          <header>
            <h1>拜年文案產生器</h1>
            <h2>快速生成創意新年祝福語</h2>
            <p>為家人、朋友、同事送上最貼心的新年祝福！</p>
          </header>

          <main>
            <div className="category-selector">
              {Object.keys(wishes).map((key) => (
                <button
                  key={key}
                  className={category === key ? 'active' : ''}
                  onClick={() => setCategory(key)}
                >
                  {{
                    family: '家庭祝福',
                    friends: '朋友祝福',
                    business: '商務祝福',
                    humor: '幽默祝福'
                  }[key]}
                </button>
              ))}
            </div>

            <button className="generate-btn" onClick={generateWish}>
              生成祝福語
            </button>

            <div className={`wish-box ${wish ? 'fade-in' : ''}`} onClick={copyToClipboard}>
              {wish}
              {showCopy && <div className="copy-notice">已複製到剪貼簿</div>}
            </div>
          </main>

          <footer>
            <p>點擊按鈕，取得專屬新年祝福語。</p>
          </footer>
        </div>
      )
    }

    export default App
