import React, { useEffect } from 'react'
import './MapPage.scss'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

const iconDefault = leaflet.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})
leaflet.Marker.prototype.options.icon = iconDefault

const MapPage = () => {
  useEffect(() => {
    var map = leaflet.map('mapid')

    // 設定經緯度座標
    map.setView(new leaflet.LatLng(25.03408513377348, 121.56436462710839), 12)

    // 設定圖資來源
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    var osm = new leaflet.TileLayer(osmUrl, { minZoom: 3, maxZoom: 16 })
    map.addLayer(osm)
    // 設定座標
    var markerOne = leaflet.marker([25.03408513377348, 121.56436462710839]).addTo(map)
    var markerTwo = leaflet.marker([25.034874422249096, 121.52189367154183]).addTo(map)
    var markerThree = leaflet.marker([25.037225370774244, 121.49987163595829]).addTo(map)
    // 彈跳訊息
    markerOne.bindPopup('<strong>台北101</strong><br>台北最高建築物').openPopup()
    markerTwo.bindPopup('<strong>中正紀念堂</strong><br>文化古蹟').openPopup()
    markerThree.bindPopup('<strong>龍山寺</strong><br>宗教聖地').openPopup()
  })

  return (
    <div className='MapPage'>
      <div id='mapid'></div>
      <section className="intro" id="intro">
        <header className="bighead" id="bighead">
          <h1>
            台北地標
          </h1>
        </header>

        <div className="benchmark" id="intro101">
          <h2>&emsp;台北101 </h2>
        </div>

        <div className="content">
          <strong>&emsp;進入台北第一眼看到的建築物!世界最高的綠建築!!</strong>
          <p>
            &emsp;&emsp;台北101是一個工程上的奇蹟，也曾經是世界上最高的建築物。台北101總共有101層，高508公尺，被設計成融合亞洲傳統的技術發展的象徵。該建築融合了許多泛中國和亞洲元素，融合了後現代風格，台北101在工程上最讓人難以置信的是位於大樓中心87層至92層之間的阻尼器，重達660公噸，就是為了抵禦台灣常見的地震及颱風，阻尼器的會抵消建築物的任何搖擺，到台北一定要來看這座讓人驚豔的高樓。
          </p>
        </div>

        <div className="benchmark" id="memorialHall">
          <h2>&emsp;中正紀念堂</h2>
        </div>
        <div className="content">

          <p>
            &emsp;&emsp;中正紀念堂主要由白牆藍瓦建築而成，70公尺高聳立在公園的中央，紀念堂是為了紀念中華民國第一任總統蔣介石，他於1975年逝世，次年行政院就破土開建中正紀念堂，設計師是設計圓山大飯店的楊卓成。除了中正紀念堂，附近有國家戲劇院跟國家音樂廳，周邊還有活動廣場跟中國式的庭園。如果您對這位叱吒一時的歷史人物有興趣，或想欣賞特殊的人文建築景觀，不妨來此一遊吧。
          </p>
        </div>

        <div className="benchmark" id="temple">
          <h2>&emsp;龍山寺</h2>
        </div>
        <div className="content">
          <p>&emsp;&emsp;艋舺龍山寺位於台北市萬華區廣州街與西園街交叉口、毗鄰華西街觀光夜市，是萬華的信仰中心，艋舺龍山寺可稱萬華龍山寺或簡稱龍山寺，悠久的歷史訴說著昔日『一府二鹿三艋舺』的風華</p>
          <p>
            &emsp;&emsp;艋舺龍山寺總面積約為1800坪，坐北朝南是中國古典之三進四合院傳統宮殿式建築，自中軸由外而內是山門、廟埕、前殿、中庭、大殿後庭、後殿，左右護龍、上有鐘鼓樓，門壁樑柱極盡精雕細琢之美，結合清代、日據與光復後綜合表現的寺廟藝術；艋舺龍山寺廟埕左右兩邊設有淨心瀑布和噴泉水池，前殿的八角藻井和鑄銅龍柱是特色所在，大殿也有金柱圓形螺旋狀藻井，都是代表台灣傳統寺廟特色和格局。
          </p>
          <p>&emsp;&emsp;來到艋舺龍山寺除了感受傳統廟宇的氛圍，也可前往鄰近的華西觀光夜市、艋舺青山宮、西門町、艋舺清水巖祖師廟、紅樓劇場和台北市電影主題公園等等台北旅遊景點。</p>
        </div>
      </section>
    </div>
  )
}
export default MapPage
