import { Component } from 'react';
import Swiper from 'swiper';
import $ from 'jquery';
import { Row, Col } from 'antd';


import 'swiper/dist/css/swiper.min.css';
import '../stylesheets/home.css';
import 'animate.css/animate.min.css';

import location from '../images/location.png';
import hammer from '../images/hammer.png';
import showCase from '../images/case.png';
import information from '../images/information.png';
import hand from '../images/hand.png';

import bg from "../images/bg.png";
import bg1 from '../images/bg_before.png';
import bg4 from '../images/bg4.png';
import bg5 from '../images/bg5.png';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const React = require('react');

class Home extends Component{


    componentDidMount() {

      

        window.addEventListener("scroll", (e) => {
            let scrollValue = $(document).scrollTop();
            console.log(scrollValue);

           if (scrollValue > 750){
               $('#left').addClass("rotateInDownLeft")
               $('#right').addClass("rotateInDownRight")
           }
        })

        //渲染轮播
        new Swiper ('.swiper-container',{
            // Optional parameters
            loop: true,
            autoplay:3000,
            speed:800,
            effect:'coverflow',

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })

    }

    render(){
      return (
          <div className="home animated fadeIn">
              <div className="bg">
                <img src={bg}/>
                  <div className="title">
                      <div className="title1">
                          <span className="animated fadeInLeft">异派同源</span>
                          <span className="animated fadeInRight">海纳百川</span>
                      </div>

                      <p className="animated slideInUp">为人们日益提升的移动品质文化生活需求而革新，永为先驱！</p>
                  </div>
            </div>
              <div className="basisItem">
                <div className="itemLocation">
                    <div className="top">公司定位</div>
                    <div className="imgContainer"><img src={location} alt=""/></div>
                </div>
                <div className="itemMain style1">
                    <p>派纳盛世科技有限公司</p>
                    <p>是一家以互联网科技为传播载体、以文化娱乐产业为主要内容、以整合大数据资源为核心价值、</p>
                    <p>以满足公众需求为创新方向的融合性企业，</p>
                    <p>目标成为一家立足资本市场的社会公众性企业。</p>

                    <p style={{marginTop:'20px'}}>公司以“专注、品质、创新、进取”为理念，按照品牌化、市场化、多元化、产业化的发展战略，</p>
                    <p>力于文化演出、剧目生产、公共文化、影视制作、艺术网络发展五大业务领域，</p>
                    <p>积极拓展文化交流、大型活动等衍生业务形态。</p>
                </div>
            </div>
              <div className="basisItem">
                  <div className="itemLocation">
                    <div className="top">创新发展战略优势</div>
                      <div className="imgContainer"><img src={hammer} alt=""/></div>
                  </div>
                  <div className="itemMain style2">
                      <div id="left" className="item animated">
                          <span className="theme">商业模式创新</span>
                        <div className="info animated fadeIn">
                            <p>“互联网+演出”思维方式创新商业模式</p>
                            <p style={{marginTop:'22px'}}>演艺运营服务为基础</p>
                            <p>以演艺内容生产为核心</p>
                            <p style={{marginTop:'22px'}}>品牌化、市场化、多元化、产业化的发展战略</p>
                        </div>
                      </div>
                      <div id="right" className="item animated">
                          <span className="theme">演出模式创新</span>
                          <div className="info animated fadeIn">
                              <p>从明星选择到展现形式</p>
                              <p>根据受众支持情况选择明星</p>
                              <p>实现演出精准营销</p>
                              <p style={{marginTop:'22px'}}>从场馆选择到规模设计，分析数据</p>
                              <p>根据支持人数制定演出规模</p>
                              <p>防止票房销售风险</p>
                              <p style={{marginTop:'22px'}}>从票价选择，到票价制定，制定范围</p>
                              <p>依照受众接受程度匹配票价，形成票房预先锁定</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="basisItem">
                  <div className="itemLocation">
                      <div className="top">演出案列</div>
                      <div className="imgContainer"><img src={showCase} alt=""/></div>
                  </div>
                  <div className="itemMain swiper-container style3">
                      <div className="swiper-wrapper">
                          <div className="swiper-slide">
                              <img src={bg4}/>
                              <div className="example">
                                  <p className="first">2018陈慧娴［Priscilla－ism］世界巡回演唱会</p>
                                  <p>用歌声带动情怀，用情怀唤醒记忆，用记忆催化市场</p>
                                  <p>重庆站：2018年3月17日（周六） 晚20:00</p>
                                  <p>重庆市 · 国际博览中心</p>
                                  <p>代表作品：千千阙歌、飘雪、红茶馆、归来吧、逝去的诺言</p>
                                  <p style={{paddingLeft:'80px'}}>孤单背影、玻璃窗的爱、傻女、人生何处不相逢</p>
                              </div>
                          </div>
                          <div className="swiper-slide">
                              <img src={bg5}/>
                              <div className="example">
                                  <p className="first">2018陈慧娴［Priscilla－ism］世界巡回演唱会</p>
                                  <p>用歌声带动情怀，用情怀唤醒记忆，用记忆催化市场</p>
                                  <p>重庆站：2018年3月17日（周六） 晚20:00</p>
                                  <p>重庆市 · 国际博览中心</p>
                                  <p>代表作品：千千阙歌、飘雪、红茶馆、归来吧、逝去的诺言</p>
                                  <p style={{paddingLeft:'80px'}}>孤单背影、玻璃窗的爱、傻女、人生何处不相逢</p>
                              </div>
                          </div>
                      </div>
                      <div className="swiper-pagination"></div>
                      <div className="swiper-button-next swiper-button-white"></div>
                      <div className="swiper-button-prev swiper-button-white"></div>
                  </div>
              </div>
              <div className="basisItem">
                  <div className="itemLocation">
                      <div className="top">新闻资讯</div>
                      <div className="imgContainer"><img src={information} alt=""/></div>
                  </div>
                  <div className="itemMain style4">
                      <div className="picture">
                          <div className="title">
                              <p>没有图片</p>
                          </div>
                      </div>
                      <div className="news">
                          <Tabs className="newsFont" defaultActiveKey="2">
                              <TabPane tab="公司新闻" key="1">暂无内容，敬请期待</TabPane>
                              <TabPane tab="演出资讯" key="2">暂无内容，敬请期待</TabPane>
                              <TabPane tab="活动文化" key="3">暂无内容，敬请期待</TabPane>
                          </Tabs>
                      </div>
                  </div>
              </div>

              <div className="basisItem">
                  <div className="itemLocation">
                      <div className="top">合作企业</div>
                      <div className="imgContainer"><img src={hand} alt=""/></div>
                  </div>
                  <div className="itemMain style5">
                     <div className="teamwork">
                         <Row gutter={16} className="row1">
                             <Col span={6} className="yingZhou"></Col>
                             <Col span={6} className="huanQiu"></Col>
                             <Col span={6} className="daMai"></Col>
                             <Col span={6} className="guoBo"></Col>
                         </Row>
                         <Row gutter={16} className="row2">
                             <Col span={6} className="yongLe"></Col>
                             <Col span={6} className="wanHao"></Col>
                             <Col span={6} className="ZSY"></Col>
                             <Col span={6} className="keGou"></Col>
                         </Row>
                         <Row gutter={16} className="row3">
                             <Col span={6} className="zhongLv"></Col>
                             <Col span={6} className="wuYiShan"></Col>
                             <Col span={6} className="huanLeDi"></Col>
                             <Col span={6} className="youChang"></Col>
                         </Row>
                     </div>
                  </div>
              </div>
          </div>
     );
    }
}
export default Home;