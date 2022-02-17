<template>
  <div id="home">
    <HomeNavBar />
    <Scroll class="content">
      <!-- 实现滚动包裹 -->
      <HomeSwiper :banners="banners" />
      <HomeRecommend :recommends="recommends"></HomeRecommend>
      <HomeFeature></HomeFeature>
      <HomeTabControl @deliGoodsIndex="deliGoodsIndex"></HomeTabControl>
      <HomeGoodsList
        :goods="goods"
        :showGoodsType="showGoodsType"
      ></HomeGoodsList>
    </Scroll>
  </div>
</template>

<script>
import HomeNavBar from '@/views/home/children_components/HomeNavBar.vue'
import HomeSwiper from '@/views/home/children_components/HomeSwiper.vue'
import HomeRecommend from '@/views/home/children_components/HomeRecommend.vue'
import HomeFeature from '@/views/home/children_components/HomeFeature.vue'
import HomeTabControl from '@/views/home/children_components/HomeTabControl.vue'
import HomeGoodsList from '@/views/home/children_components/HomeGoodsList.vue'

import Scroll from '@/components/common/scroll/Scroll.vue'

import {
  getHomeMultiData
  // 获取homeGoods接口，已被本地虚拟数据替代
  // getHomeGoods
} from '@/network/home.js'

export default {
  name: 'Home',
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    HomeTabControl,
    HomeGoodsList,
    Scroll
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsIndex: 0
    }
  },
  computed: {
    // showGoodsType() {
    // 这样写会return一个function
    //   return () => {
    //     switch (this.goodsIndex) {
    //       case 0:
    //         return 'pop'
    //       case 1:
    //         return 'news'
    //       case 2:
    //         return 'sell'
    //     }
    //   }
    // }
    showGoodsType() {
      const map = {
        0: 'pop',
        1: 'news',
        2: 'sell'
      }
      return map[this.goodsIndex]
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('news')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        // console.log(this.banners, this.recommends)
      })
    },
    getHomeGoods(type) {
      // 获取接口数据
      // const page = this.goods[type].page +1
      // getHomeGoods(type, page).then((res) => {
      //   this.goods[type].list.push(...res.data.list)
      // this.goods[type].page ++
      // 获取本地虚拟数据/readfile尝试失败，axios,fs.readfile
      // })
      if (type === 'pop') {
        this.goods.pop.list.push(
          ...[
            {
              tradeItemId: '1n2kkcu',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/211111_445371080e9ee1e9049e432dhl2ic_640x960.jpg',
              iid: '1n2kkcu',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n2kkcu&acm=3.ms.1_1_1n2kkcu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609840332_0_1_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazU5c2RjX2M0NWU0OTkwNTg4ZDUwMTU3YWI4Zjg4M2FlMDNiY2Q0XzE3XzBfNjA5ODQwMzMyXzRmODdfMF8xXzBfOTQ1XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n2kkcu&acm=3.ms.1_1_1n2kkcu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609840332_0_1_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazU5c2RjX2M0NWU0OTkwNTg4ZDUwMTU3YWI4Zjg4M2FlMDNiY2Q0XzE3XzBfNjA5ODQwMzMyXzRmODdfMF8xXzBfOTQ1XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854',
              acm: '3.ms.1_1_1n2kkcu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609840332_0_1_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title: '2021秋冬新款甜美减龄蝴蝶结重工钉钻宽松遮肉女装时尚卫衣女',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazU5c2RjX2M0NWU0OTkwNTg4ZDUwMTU3YWI4Zjg4M2FlMDNiY2Q0XzE3XzBfNjA5ODQwMzMyXzRmODdfMF8xXzBfOTQ1XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 128.29,
              props: [
                '2021秋冬新款甜美减龄蝴蝶结重工钉钻宽松遮肉女装时尚卫衣女'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 2,
              price: 89.8,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n2kkcu&acm=3.ms.1_1_1n2kkcu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609840332_0_1_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/55cf19/211111_445371080e9ee1e9049e432dhl2ic_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n24ebi',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/211009_77ae6k637ehb2fb3l840f98ba432c_640x960.jpg',
              iid: '1n24ebi',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n24ebi&acm=3.ms.1_1_1n24ebi.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609089108_0_2_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazZtZjdtXzBjZmM4NDQ3MTczMWFkZDJjYTRjMmEyYmZjYzdjMzQxXzE3XzFfNjA5MDg5MTA4XzRmODZfMF8yXzBfMzM3XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n24ebi&acm=3.ms.1_1_1n24ebi.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609089108_0_2_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazZtZjdtXzBjZmM4NDQ3MTczMWFkZDJjYTRjMmEyYmZjYzdjMzQxXzE3XzFfNjA5MDg5MTA4XzRmODZfMF8yXzBfMzM3XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854',
              acm: '3.ms.1_1_1n24ebi.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609089108_0_2_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title: '超柔内里加绒加厚中长款卫衣休闲外套女百搭秋冬新款女装上衣',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazZtZjdtXzBjZmM4NDQ3MTczMWFkZDJjYTRjMmEyYmZjYzdjMzQxXzE3XzFfNjA5MDg5MTA4XzRmODZfMF8yXzBfMzM3XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 84.29,
              props: [
                '超柔内里加绒加厚中长款卫衣休闲外套女百搭秋冬新款女装上衣'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 32,
              price: 59,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n24ebi&acm=3.ms.1_1_1n24ebi.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609089108_0_2_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/55cf19/211009_77ae6k637ehb2fb3l840f98ba432c_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mjmmvo',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190728_19g8a4247ac7000c8ckkb4bgaecil_640x960.jpg',
              iid: '1mjmmvo',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mjmmvo&acm=3.ms.1_4_1mjmmvo.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_516097952_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MTYwOTc5NTJfNGY4Zl8wXzBfMF8yMjdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mjmmvo&acm=3.ms.1_4_1mjmmvo.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_516097952_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MTYwOTc5NTJfNGY4Zl8wXzBfMF8yMjdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1854 189 3002 3001',
              acm: '3.ms.1_4_1mjmmvo.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_516097952_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '约会装秋装新款韩版小黑裙裙子小礼服一字肩性感显瘦露肩连衣裙女',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MTYwOTc5NTJfNGY4Zl8wXzBfMF8yMjdfMV8zX2xvYy0w',
              orgPrice: 114,
              props: [
                '约会装秋装新款韩版小黑裙裙子小礼服一字肩性感显瘦露肩连衣裙女'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 2664,
              price: 69,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mjmmvo&acm=3.ms.1_4_1mjmmvo.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_516097952_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190728_19g8a4247ac7000c8ckkb4bgaecil_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mvcgey',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/200807_697el5k4liji7khl4k127c8d9g271_640x960.jpg',
              iid: '1mvcgey',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mvcgey&acm=3.ms.1_4_1mvcgey.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585368231_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODUzNjgyMzFfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvcgey&acm=3.ms.1_4_1mvcgey.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585368231_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODUzNjgyMzFfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1854 3002 3001',
              acm: '3.ms.1_4_1mvcgey.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585368231_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '春秋装2021新款法式复古设计感小众可盐可甜赫本风黑色连衣裙',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODUzNjgyMzFfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 122.43,
              props: [
                '春秋装2021新款法式复古设计感小众可盐可甜赫本风黑色连衣裙'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 3775,
              price: 85.7,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mvcgey&acm=3.ms.1_4_1mvcgey.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585368231_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/200807_697el5k4liji7khl4k127c8d9g271_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mi0yte',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190604_57fh6fiadlj2id01h7fi360a9iej3_640x960.jpg',
              iid: '1mi0yte',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mi0yte&acm=3.ms.1_4_1mi0yte.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_507364272_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MDczNjQyNzJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mi0yte&acm=3.ms.1_4_1mi0yte.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_507364272_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MDczNjQyNzJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 188 1854 1655 3002 3001 1318',
              acm: '3.ms.1_4_1mi0yte.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_507364272_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '夏季小心机性感连衣裙显瘦新款女装吊带裙系带蝴蝶结赫本小黑裙女',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MDczNjQyNzJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 128,
              props: [
                '夏季小心机性感连衣裙显瘦新款女装吊带裙系带蝴蝶结赫本小黑裙女'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 4825,
              price: 89.6,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mi0yte&acm=3.ms.1_4_1mi0yte.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_507364272_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190604_57fh6fiadlj2id01h7fi360a9iej3_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mq89se',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/200210_0efkdh6glh73ic0k4a79728fd4kkc_640x960.jpg',
              iid: '1mq89se',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mq89se&acm=3.ms.1_4_1mq89se.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_554834877_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTQ4MzQ4NzdfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mq89se&acm=3.ms.1_4_1mq89se.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_554834877_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTQ4MzQ4NzdfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1080 1854 1270',
              acm: '3.ms.1_4_1mq89se.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_554834877_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '2021秋装新款流苏牛仔复古港味牛仔外套+百搭黑色小脚裤套装',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTQ4MzQ4NzdfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              orgPrice: 85,
              props: [
                '2021秋装新款流苏牛仔复古港味牛仔外套+百搭黑色小脚裤套装'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 705,
              price: 59.5,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mq89se&acm=3.ms.1_4_1mq89se.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_554834877_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/200210_0efkdh6glh73ic0k4a79728fd4kkc_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mepwh4',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190319_7likgfl2hg66c1h2fhidd831c9263_640x960.jpg',
              iid: '1mepwh4',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mepwh4&acm=3.ms.1_4_1mepwh4.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_488087372_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80ODgwODczNzJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mepwh4&acm=3.ms.1_4_1mepwh4.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_488087372_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80ODgwODczNzJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 188 1106 1854 3002 3001',
              acm: '3.ms.1_4_1mepwh4.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_488087372_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '新款蕾丝气质性感短裙流行小清新甜美喇叭袖连衣裙高腰A字裙子夏',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80ODgwODczNzJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 122.14,
              props: [
                '新款蕾丝气质性感短裙流行小清新甜美喇叭袖连衣裙高腰A字裙子夏'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 1596,
              price: 85.49,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mepwh4&acm=3.ms.1_4_1mepwh4.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_488087372_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190319_7likgfl2hg66c1h2fhidd831c9263_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mnjztw',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/191108_193ged8hhb15l104id06jb1l5l65d_640x850.jpg',
              iid: '1mnjztw',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mnjztw&acm=3.ms.1_4_1mnjztw.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_609853320_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF82MDk4NTMzMjBfNGY4Zl8wXzBfMF8zMjlfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mnjztw&acm=3.ms.1_4_1mnjztw.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_609853320_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF82MDk4NTMzMjBfNGY4Zl8wXzBfMF8zMjlfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1854',
              acm: '3.ms.1_4_1mnjztw.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_609853320_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '衣阁里拉新款时尚斜肩露肩性感中长款A摆开叉礼服裙灯笼袖连衣裙',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF82MDk4NTMzMjBfNGY4Zl8wXzBfMF8zMjlfMV8zX2xvYy0w',
              orgPrice: 511.42,
              props: [
                '衣阁里拉新款时尚斜肩露肩性感中长款A摆开叉礼服裙灯笼袖连衣裙'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 16,
              price: 357,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mnjztw&acm=3.ms.1_4_1mnjztw.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_609853320_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/191108_193ged8hhb15l104id06jb1l5l65d_640x850.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n31l90',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/211221_2i27d8i5a22l30feli520a80kjcd2_640x960.jpg',
              iid: '1n31l90',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n31l90&acm=3.ms.1_1_1n31l90.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610223653_0_3_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazR6amJ5XzY2NGI5YmNkNWIzMzE2MmU4NDNhZDRjYmIwMTYyMjMzXzE3XzJfNjEwMjIzNjUzXzRmODZfMF8zXzBfNzIxXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n31l90&acm=3.ms.1_1_1n31l90.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610223653_0_3_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazR6amJ5XzY2NGI5YmNkNWIzMzE2MmU4NDNhZDRjYmIwMTYyMjMzXzE3XzJfNjEwMjIzNjUzXzRmODZfMF8zXzBfNzIxXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854',
              acm: '3.ms.1_1_1n31l90.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610223653_0_3_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title: '加绒加厚卫衣女装2021秋冬新款假两件女上衣宽松韩版百搭',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazR6amJ5XzY2NGI5YmNkNWIzMzE2MmU4NDNhZDRjYmIwMTYyMjMzXzE3XzJfNjEwMjIzNjUzXzRmODZfMF8zXzBfNzIxXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 84.3,
              props: ['加绒加厚卫衣女装2021秋冬新款假两件女上衣宽松韩版百搭'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 6,
              price: 59,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n31l90&acm=3.ms.1_1_1n31l90.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610223653_0_3_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/55cf19/211221_2i27d8i5a22l30feli520a80kjcd2_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n1z4tu',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/210925_34b94edj3401c28ba9lac42aejgk5_640x960.jpg',
              iid: '1n1z4tu',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n1z4tu&acm=3.ms.1_1_1n1z4tu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_608849971_0_4_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazZtYm15X2Q3ZmYyNTk1MjkxMTA0NWE0OWE5MjhiOTRhMWE0OWVhXzE3XzNfNjA4ODQ5OTcxXzRlOGZfMF80XzBfNDg4XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n1z4tu&acm=3.ms.1_1_1n1z4tu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_608849971_0_4_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazZtYm15X2Q3ZmYyNTk1MjkxMTA0NWE0OWE5MjhiOTRhMWE0OWVhXzE3XzNfNjA4ODQ5OTcxXzRlOGZfMF80XzBfNDg4XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854 1270',
              acm: '3.ms.1_1_1n1z4tu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_608849971_0_4_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title: '大码女装200斤宽松圆领卫衣女假两件V领上衣小众高街外套春秋',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazZtYm15X2Q3ZmYyNTk1MjkxMTA0NWE0OWE5MjhiOTRhMWE0OWVhXzE3XzNfNjA4ODQ5OTcxXzRlOGZfMF80XzBfNDg4XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 85,
              props: [
                '大码女装200斤宽松圆领卫衣女假两件V领上衣小众高街外套春秋'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 31,
              price: 59,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n1z4tu&acm=3.ms.1_1_1n1z4tu.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_608849971_0_4_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/55cf19/210925_34b94edj3401c28ba9lac42aejgk5_640x960.jpg',
              officialRmdDesc: ''
            }
          ]
        )
      }
      if (type === 'news') {
        this.goods.news.list.push(
          ...[
            {
              tradeItemId: '1mpraec',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/200105_439cbh8jd3d6kf625a5ib4da3ifj5_4222x6333.jpg',
              iid: '1mpraec',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mpraec&acm=3.ms.1_4_1mpraec.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_553233119_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTMyMzMxMTlfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mpraec&acm=3.ms.1_4_1mpraec.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_553233119_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTMyMzMxMTlfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 1854 3002 3001',
              acm: '3.ms.1_4_1mpraec.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_553233119_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTMyMzMxMTlfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 156.86,
              props: [
                '心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 2345,
              price: 109.8,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mpraec&acm=3.ms.1_4_1mpraec.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_553233119_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/200105_439cbh8jd3d6kf625a5ib4da3ifj5_4222x6333.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mq9d8m',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/200212_1bg7710fcb771kd382i040676a5ci_640x960.jpg',
              iid: '1mq9d8m',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mq9d8m&acm=3.ms.1_4_1mq9d8m.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mq9d8m&acm=3.ms.1_4_1mq9d8m.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              itemMarks: '-1',
              acm: '3.ms.1_4_1mq9d8m.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '2020气质名媛无袖抹胸连衣裙夏女装性感夜店露肩挂脖小黑裙',
              type: 2,
              orgPrice: 98,
              props: ['2020气质名媛无袖抹胸连衣裙夏女装性感夜店露肩挂脖小黑裙'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 69,
              price: 98,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mq9d8m&acm=3.ms.1_4_1mq9d8m.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/55cf19/200212_1bg7710fcb771kd382i040676a5ci_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n1wk9q',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/210918_5i99jj795g4chcad9f39ikgf0fhga_640x960.jpg',
              iid: '1n1wk9q',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n1wk9q&acm=3.ms.1_1_1n1wk9q.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609834770_0_7_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazY2eXFtXzFjZjMzMWRlNmFmYWQ4NTZkMTM1YzM5YzE2M2VmZDU0XzE3XzZfNjA5ODM0NzcwXzRlOGZfMF83XzBfMzM3XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n1wk9q&acm=3.ms.1_1_1n1wk9q.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609834770_0_7_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazY2eXFtXzFjZjMzMWRlNmFmYWQ4NTZkMTM1YzM5YzE2M2VmZDU0XzE3XzZfNjA5ODM0NzcwXzRlOGZfMF83XzBfMzM3XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854',
              acm: '3.ms.1_1_1n1wk9q.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609834770_0_7_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title: '棉中国风卫衣女日常2021新款春秋女装百搭宽松气质汉服上',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazY2eXFtXzFjZjMzMWRlNmFmYWQ4NTZkMTM1YzM5YzE2M2VmZDU0XzE3XzZfNjA5ODM0NzcwXzRlOGZfMF83XzBfMzM3XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 98.58,
              props: ['棉中国风卫衣女日常2021新款春秋女装百搭宽松气质汉服上'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 54,
              price: 69,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n1wk9q&acm=3.ms.1_1_1n1wk9q.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609834770_0_7_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/55cf19/210918_5i99jj795g4chcad9f39ikgf0fhga_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n21nby',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/211001_45hi7cf62kal9kk0gcl4k3758cg95_640x853.jpg',
              iid: '1n21nby',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n21nby&acm=3.ms.1_1_1n21nby.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609863059_0_8_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazY2eXFjX2I5NTVhMzJiYWExM2U0ZmQxMTYzYjBmMTJlYjk5MjZjXzE3XzdfNjA5ODYzMDU5XzRlOGZfMF84XzBfMzMzXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n21nby&acm=3.ms.1_1_1n21nby.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609863059_0_8_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazY2eXFjX2I5NTVhMzJiYWExM2U0ZmQxMTYzYjBmMTJlYjk5MjZjXzE3XzdfNjA5ODYzMDU5XzRlOGZfMF84XzBfMzMzXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854 1270',
              acm: '3.ms.1_1_1n21nby.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609863059_0_8_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title: '加绒加厚秋冬卫衣女大码女装个性印花宽松韩版百搭新款慵懒风',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazY2eXFjX2I5NTVhMzJiYWExM2U0ZmQxMTYzYjBmMTJlYjk5MjZjXzE3XzdfNjA5ODYzMDU5XzRlOGZfMF84XzBfMzMzXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 114.2,
              props: [
                '加绒加厚秋冬卫衣女大码女装个性印花宽松韩版百搭新款慵懒风'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 16,
              price: 79.94,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n21nby&acm=3.ms.1_1_1n21nby.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609863059_0_8_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/c45406/211001_45hi7cf62kal9kk0gcl4k3758cg95_640x853.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mvwig6',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/200905_793e4g0djg725dk839916l50ae8ei_640x960.jpg',
              iid: '1mvwig6',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwig6&acm=3.ms.1_4_1mvwig6.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_589476160_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODk0NzYxNjBfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvwig6&acm=3.ms.1_4_1mvwig6.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_589476160_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODk0NzYxNjBfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1080 1854 1270',
              acm: '3.ms.1_4_1mvwig6.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_589476160_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '2021春秋小香风时尚重工钉珠洋气毛呢短款外套半身裙套装',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODk0NzYxNjBfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              orgPrice: 275,
              props: ['2021春秋小香风时尚重工钉珠洋气毛呢短款外套半身裙套装'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 217,
              price: 192.5,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mvwig6&acm=3.ms.1_4_1mvwig6.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_589476160_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/200905_793e4g0djg725dk839916l50ae8ei_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1m7rs16',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/180827_00fh4kjjb5k05a4ahifldjkafj2ff_640x960.jpg',
              iid: '1m7rs16',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1m7rs16&acm=3.ms.1_4_1m7rs16.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_431004996_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80MzEwMDQ5OTZfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1m7rs16&acm=3.ms.1_4_1m7rs16.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_431004996_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80MzEwMDQ5OTZfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 77 188 1854 1210 3002 3001 82 1616',
              acm: '3.ms.1_4_1m7rs16.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_431004996_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '小心机温柔风闪闪灯笼袖打底衫上衣女+丝绒吊带连衣裙女两件套装',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80MzEwMDQ5OTZfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 142.15,
              props: [
                '小心机温柔风闪闪灯笼袖打底衫上衣女+丝绒吊带连衣裙女两件套装'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 7289,
              price: 99.5,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1m7rs16&acm=3.ms.1_4_1m7rs16.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_431004996_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/180827_00fh4kjjb5k05a4ahifldjkafj2ff_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1me4cl8',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190301_5fa8dbjed921j159k4la13a0gjdk6_640x960.jpg',
              iid: '1me4cl8',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1me4cl8&acm=3.ms.1_4_1me4cl8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_483226073_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80ODMyMjYwNzNfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1me4cl8&acm=3.ms.1_4_1me4cl8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_483226073_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80ODMyMjYwNzNfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 188 1854 82',
              acm: '3.ms.1_4_1me4cl8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_483226073_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '赫本小黑裙女装法式复古修身显瘦黑色连衣裙方领气质短袖中长裙子',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80ODMyMjYwNzNfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 122.58,
              props: [
                '赫本小黑裙女装法式复古修身显瘦黑色连衣裙方领气质短袖中长裙子'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 13123,
              price: 85.8,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1me4cl8&acm=3.ms.1_4_1me4cl8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_483226073_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190301_5fa8dbjed921j159k4la13a0gjdk6_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n2a7x8',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/211018_1i6ed689kff221i54fc69k7dj7fgb_640x960.jpg',
              iid: '1n2a7x8',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n2a7x8&acm=3.ms.1_4_1n2a7x8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n2a7x8&acm=3.ms.1_4_1n2a7x8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              itemMarks: '1854 21811',
              acm: '3.ms.1_4_1n2a7x8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '羽绒棉服女中长款2021年新款韩系冬装棉袄外套oversiz',
              type: 2,
              orgPrice: 288,
              props: ['羽绒棉服女中长款2021年新款韩系冬装棉袄外套oversiz'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 4,
              price: 288,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n2a7x8&acm=3.ms.1_4_1n2a7x8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/55cf19/211018_1i6ed689kff221i54fc69k7dj7fgb_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mpdxry',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/191225_0c9l8e68lb7l65k8k96g9ef1441el_640x960.jpg',
              iid: '1mpdxry',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mpdxry&acm=3.ms.1_4_1mpdxry.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_551633386_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTE2MzMzODZfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mpdxry&acm=3.ms.1_4_1mpdxry.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_551633386_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTE2MzMzODZfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1080 1854 166 16 1270',
              acm: '3.ms.1_4_1mpdxry.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_551633386_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '小个子套装秋冬仿马海毛毛衣+高腰百褶半身裙+蕾丝衫三件套',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NTE2MzMzODZfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              orgPrice: 75,
              props: ['小个子套装秋冬仿马海毛毛衣+高腰百褶半身裙+蕾丝衫三件套'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 2152,
              price: 52.5,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mpdxry&acm=3.ms.1_4_1mpdxry.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_551633386_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/191225_0c9l8e68lb7l65k8k96g9ef1441el_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mytmkg',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/210307_32664f9l4e2bbc5lea52ifgcec5gb_640x800.jpg',
              iid: '1mytmkg',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mytmkg&acm=3.ms.1_4_1mytmkg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mytmkg&acm=3.ms.1_4_1mytmkg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              itemMarks: '9111',
              acm: '3.ms.1_4_1mytmkg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '连衣裙女2021春秋新款冷淡风显瘦气质撞色拼接过膝长款衬衫裙',
              type: 2,
              orgPrice: 240,
              props: [
                '连衣裙女2021春秋新款冷淡风显瘦气质撞色拼接过膝长款衬衫裙'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 4,
              price: 168,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mytmkg&acm=3.ms.1_4_1mytmkg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/210307_32664f9l4e2bbc5lea52ifgcec5gb_640x800.jpg',
              officialRmdDesc: ''
            }
          ]
        )
      }
      if (type === 'sell') {
        this.goods.sell.list.push(
          ...[
            {
              tradeItemId: '1mkrkd8',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190906_0e5fdgjl8c72ge1kidl9i8i0ii7kd_640x850.jpg',
              iid: '1mkrkd8',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mkrkd8&acm=3.ms.1_4_1mkrkd8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_524977988_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjQ5Nzc5ODhfNGY4Zl8wXzBfMF82NDRfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mkrkd8&acm=3.ms.1_4_1mkrkd8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_524977988_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjQ5Nzc5ODhfNGY4Zl8wXzBfMF82NDRfMV8zX2xvYy0w',
              itemMarks: '1525 188 19992',
              acm: '3.ms.1_4_1mkrkd8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_524977988_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '秋装套装新款女韩版宽松纯色短款连帽卫衣+高腰破洞牛仔裤两件套',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjQ5Nzc5ODhfNGY4Zl8wXzBfMF82NDRfMV8zX2xvYy0w',
              orgPrice: 22.72,
              props: [
                '秋装套装新款女韩版宽松纯色短款连帽卫衣+高腰破洞牛仔裤两件套'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 2610,
              price: 22.72,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mkrkd8&acm=3.ms.1_4_1mkrkd8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_524977988_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190906_0e5fdgjl8c72ge1kidl9i8i0ii7kd_640x850.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mkmehg',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190901_0hg425h34f87a5fhdk78353dh68b2_640x960.jpg',
              iid: '1mkmehg',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mkmehg&acm=3.ms.1_4_1mkmehg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523485994_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjM0ODU5OTRfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mkmehg&acm=3.ms.1_4_1mkmehg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523485994_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjM0ODU5OTRfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 188 1854 166 16 261 1270',
              acm: '3.ms.1_4_1mkmehg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523485994_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '春秋新款韩版灯笼袖系带小个子风衣纯色吊带+黑色小脚裤三件套',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjM0ODU5OTRfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              orgPrice: 56,
              props: [
                '春秋新款韩版灯笼袖系带小个子风衣纯色吊带+黑色小脚裤三件套'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 13898,
              price: 39.2,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mkmehg&acm=3.ms.1_4_1mkmehg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523485994_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190901_0hg425h34f87a5fhdk78353dh68b2_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mveb9i',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/200810_2gk0bgl81flgkc4kfh0ke267le5eg_640x960.jpg',
              iid: '1mveb9i',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mveb9i&acm=3.ms.1_4_1mveb9i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585775705_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODU3NzU3MDVfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mveb9i&acm=3.ms.1_4_1mveb9i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585775705_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODU3NzU3MDVfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1854 3002 3001',
              acm: '3.ms.1_4_1mveb9i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585775705_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '复古风改良版丝绒旗袍连衣裙韩版立领小黑裙长袖显瘦A字裙气质裙',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODU3NzU3MDVfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 128.15,
              props: [
                '复古风改良版丝绒旗袍连衣裙韩版立领小黑裙长袖显瘦A字裙气质裙'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 516,
              price: 89.7,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mveb9i&acm=3.ms.1_4_1mveb9i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_585775705_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/200810_2gk0bgl81flgkc4kfh0ke267le5eg_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mkmyjg',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190902_1j2ggcj3i8gdg5i194077keh81blc_640x850.jpg',
              iid: '1mkmyjg',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mkmyjg&acm=3.ms.1_4_1mkmyjg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523806438_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjM4MDY0MzhfNGY4Zl8wXzBfMF82NDRfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mkmyjg&acm=3.ms.1_4_1mkmyjg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523806438_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjM4MDY0MzhfNGY4Zl8wXzBfMF82NDRfMV8zX2xvYy0w',
              itemMarks: '1525 188 19992',
              acm: '3.ms.1_4_1mkmyjg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523806438_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '秋装套装新款女V领抽绳针织衫+黑色吊带+高腰小脚牛仔裤三件套',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81MjM4MDY0MzhfNGY4Zl8wXzBfMF82NDRfMV8zX2xvYy0w',
              orgPrice: 51.29,
              props: [
                '秋装套装新款女V领抽绳针织衫+黑色吊带+高腰小脚牛仔裤三件套'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 5216,
              price: 51.29,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mkmyjg&acm=3.ms.1_4_1mkmyjg.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_523806438_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190902_1j2ggcj3i8gdg5i194077keh81blc_640x850.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mvt55c',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/200902_8f7c19l27hki67i307f30f215dcf3_640x960.jpg',
              iid: '1mvt55c',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mvt55c&acm=3.ms.1_4_1mvt55c.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_588994674_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODg5OTQ2NzRfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mvt55c&acm=3.ms.1_4_1mvt55c.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_588994674_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODg5OTQ2NzRfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 77 1854 1210 3002 3001 1616',
              acm: '3.ms.1_4_1mvt55c.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_588994674_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '2020秋季新款连衣裙女拼接假两件中长款设计感小众法式衬衫裙',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODg5OTQ2NzRfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 128.29,
              props: [
                '2020秋季新款连衣裙女拼接假两件中长款设计感小众法式衬衫裙'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 1208,
              price: 89.8,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mvt55c&acm=3.ms.1_4_1mvt55c.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_588994674_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/200902_8f7c19l27hki67i307f30f215dcf3_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1mv4o3o',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/200726_5ibjfk1d14j88328b8928l3aga275_3888x5832.jpg',
              iid: '1mv4o3o',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1mv4o3o&acm=3.ms.1_4_1mv4o3o.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_583812321_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODM4MTIzMjFfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1mv4o3o&acm=3.ms.1_4_1mv4o3o.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_583812321_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODM4MTIzMjFfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1854 3002 3001',
              acm: '3.ms.1_4_1mv4o3o.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_583812321_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '秋装韩版复古chic显瘦收腰裙子假两件格子拼接裙系带连衣裙女',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81ODM4MTIzMjFfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 122.15,
              props: [
                '秋装韩版复古chic显瘦收腰裙子假两件格子拼接裙系带连衣裙女'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 1940,
              price: 85.5,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1mv4o3o&acm=3.ms.1_4_1mv4o3o.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_583812321_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/200726_5ibjfk1d14j88328b8928l3aga275_3888x5832.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n2ikvw',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/211109_45j966hhjdbb4547llki6c4c93j41_640x960.jpg',
              iid: '1n2ikvw',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n2ikvw&acm=3.ms.1_1_1n2ikvw.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610221337_0_5_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazVtd2N1XzczM2YzYmYxNDE4NmNlNmNjM2NmYTBmNDdmOTA2YWU2XzE3XzRfNjEwMjIxMzM3XzRmODZfMF81XzBfODM0XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n2ikvw&acm=3.ms.1_1_1n2ikvw.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610221337_0_5_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazVtd2N1XzczM2YzYmYxNDE4NmNlNmNjM2NmYTBmNDdmOTA2YWU2XzE3XzRfNjEwMjIxMzM3XzRmODZfMF81XzBfODM0XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854 1270',
              acm: '3.ms.1_1_1n2ikvw.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610221337_0_5_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title:
                '秋冬装加绒加厚韩版卫衣女装21年新款爆款秋季宽松女士上衣外套',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazVtd2N1XzczM2YzYmYxNDE4NmNlNmNjM2NmYTBmNDdmOTA2YWU2XzE3XzRfNjEwMjIxMzM3XzRmODZfMF81XzBfODM0XzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 128,
              props: [
                '秋冬装加绒加厚韩版卫衣女装21年新款爆款秋季宽松女士上衣外套'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 5,
              price: 89,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n2ikvw&acm=3.ms.1_1_1n2ikvw.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_610221337_0_5_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/55cf19/211109_45j966hhjdbb4547llki6c4c93j41_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n2chk0',
              itemType: 7,
              img: 'https://s5.mogucdn.com/mlcdn/55cf19/211024_1141849i3a0j77ki728kfk955jall_640x960.jpg',
              iid: '1n2chk0',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n2chk0&acm=3.ms.1_1_1n2chk0.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609394955_0_6_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazY1cjMwXzI5NDQ2MmViZGEwZWE0NGNkM2JhZmE2OWY3Nzc1OWMyXzE3XzVfNjA5Mzk0OTU1XzRlOGZfMF82XzBfMjAxXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n2chk0&acm=3.ms.1_1_1n2chk0.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609394955_0_6_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xazY1cjMwXzI5NDQ2MmViZGEwZWE0NGNkM2JhZmE2OWY3Nzc1OWMyXzE3XzVfNjA5Mzk0OTU1XzRlOGZfMF82XzBfMjAxXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              itemMarks: '1854 1270',
              acm: '3.ms.1_1_1n2chk0.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609394955_0_6_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0',
              price_taglist: [],
              title: '金丝绒卫衣女装大码200斤韩版宽松长袖连帽上衣外套女潮ins',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xazY1cjMwXzI5NDQ2MmViZGEwZWE0NGNkM2JhZmE2OWY3Nzc1OWMyXzE3XzVfNjA5Mzk0OTU1XzRlOGZfMF82XzBfMjAxXzFfMF9ycy04ODkzMy5ydC0xLnd0LTA=',
              orgPrice: 99,
              props: ['金丝绒卫衣女装大码200斤韩版宽松长袖连帽上衣外套女潮ins'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 1,
              price: 69,
              leftbottom_taglist: [
                {
                  color: '#C2C2C2',
                  bgColor: '#FAFAFA',
                  content: '广告'
                }
              ],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n2chk0&acm=3.ms.1_1_1n2chk0.46.96889-68998.bmSkxsXCra0th.ct_5101-sd_117-swt_46-imt_7-c_2_17_609394955_0_6_0-t_bmSkxsXCra0th-src_0-lc_17-pit_2-c1_88933_nil_nil_0_0_30_0-dit_-qpdp_0&itemType=7&imgSurl=/mlcdn/55cf19/211024_1141849i3a0j77ki728kfk955jall_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1ml7cf8',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/190923_1dki6l94d2l39le346if2hiaebiie_640x960.jpg',
              iid: '1ml7cf8',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1ml7cf8&acm=3.ms.1_4_1ml7cf8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_529479652_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81Mjk0Nzk2NTJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1ml7cf8&acm=3.ms.1_4_1ml7cf8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_529479652_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81Mjk0Nzk2NTJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 77 188 1854 1210 3002 3001 1616',
              acm: '3.ms.1_4_1ml7cf8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_529479652_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '春装法式复古优雅V领显瘦小黑裙时尚不规则扣长袖收腰轻熟连衣裙',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81Mjk0Nzk2NTJfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 156.72,
              props: [
                '春装法式复古优雅V领显瘦小黑裙时尚不规则扣长袖收腰轻熟连衣裙'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 3355,
              price: 109.7,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1ml7cf8&acm=3.ms.1_4_1ml7cf8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_529479652_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/190923_1dki6l94d2l39le346if2hiaebiie_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1m4e1a8',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/180618_49f5j8d3cegd1250cfkf9ll7996d8_640x960.jpg',
              iid: '1m4e1a8',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1m4e1a8&acm=3.ms.1_4_1m4e1a8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_405038066_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80MDUwMzgwNjZfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1m4e1a8&acm=3.ms.1_4_1m4e1a8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_405038066_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80MDUwMzgwNjZfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              itemMarks: '1525 188 1854 1127 1941 113 3002 3001 82',
              acm: '3.ms.1_4_1m4e1a8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_405038066_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '系带蝴蝶结少女心红色格子连衣裙女夏季新款韩版修身显瘦A字裙子',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF80MDUwMzgwNjZfNGY4ZV8wXzBfMF80NDdfMV8zX2xvYy0w',
              orgPrice: 113.58,
              props: [
                '系带蝴蝶结少女心红色格子连衣裙女夏季新款韩版修身显瘦A字裙子'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 18813,
              price: 79.5,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1m4e1a8&acm=3.ms.1_4_1m4e1a8.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_405038066_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/180618_49f5j8d3cegd1250cfkf9ll7996d8_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1moruma',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/191208_15flhi88jh4b432b0h5gk6ahc8hd0_640x960.jpg',
              iid: '1moruma',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1moruma&acm=3.ms.1_4_1moruma.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_548966264_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NDg5NjYyNjRfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1moruma&acm=3.ms.1_4_1moruma.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_548966264_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&cparam=MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NDg5NjYyNjRfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              itemMarks: '1525 1019 1080 1854 3002 3001 1270',
              acm: '3.ms.1_4_1moruma.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_548966264_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title:
                '冬装赫本风小个子修身显瘦加厚毛呢外套+黑色针织衫加厚裤子套装',
              type: 2,
              cparam:
                'MTY0NTAyNjQwN18xMWtfY2E2OGRjZWE1NmQwNzY4ZmMxNzU0YjRhMmQ3OGQwZDNfMTdfMF81NDg5NjYyNjRfNGY4Zl8wXzBfMF83OTdfMV8zX2xvYy0w',
              orgPrice: 70,
              props: [
                '冬装赫本风小个子修身显瘦加厚毛呢外套+黑色针织衫加厚裤子套装'
              ],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 2866,
              price: 49,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1moruma&acm=3.ms.1_4_1moruma.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-c_1_17_548966264_0_0_3-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/191208_15flhi88jh4b432b0h5gk6ahc8hd0_640x960.jpg',
              officialRmdDesc: ''
            },
            {
              tradeItemId: '1n0ds1i',
              itemType: 6,
              img: 'https://s5.mogucdn.com/mlcdn/c45406/210603_350f500llihgeb0dk3046k8fd746e_750x1000.png',
              iid: '1n0ds1i',
              clientUrl:
                'https://h5.mogu.com/detail-normal/index.html?itemId=1n0ds1i&acm=3.ms.1_4_1n0ds1i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              promotion_taglist: [],
              link: 'https://h5.mogu.com/detail-normal/index.html?itemId=1n0ds1i&acm=3.ms.1_4_1n0ds1i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              itemMarks: '1019',
              acm: '3.ms.1_4_1n0ds1i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0',
              price_taglist: [],
              title: '拼接蕾丝连衣裙9XLB20903',
              type: 2,
              orgPrice: 999,
              props: ['拼接蕾丝连衣裙9XLB20903'],
              hasSimilarity: true,
              useTitle: true,
              lefttop_taglist: [],
              cfav: 0,
              price: 999,
              leftbottom_taglist: [],
              similarityUrl:
                'https://act.mogu.com/adlearn/shangpinzhaoxiangsi?imgItemId=1n0ds1i&acm=3.ms.1_4_1n0ds1i.46.36620-68998.bmSkxsXCra0th.sd_117-swt_46-imt_6-t_bmSkxsXCra0th-src_0-lc_17-pit_1-qid_90128-dit_-qpdp_0&itemType=6&imgSurl=/mlcdn/c45406/210603_350f500llihgeb0dk3046k8fd746e_750x1000.png',
              officialRmdDesc: ''
            }
          ]
        )
      }
    },
    deliGoodsIndex(index) {
      this.goodsIndex = index
      console.log(this.goodsIndex, 'home')
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  padding: 44px 0 49px 0;
  height: 100vh;
  position: relative;
  .content {
    // height: clac(100%-93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
  }
  .home_navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>
