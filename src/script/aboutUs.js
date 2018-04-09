import { Component } from 'react';
import '../stylesheets/aboutUs.css';
import 'animate.css/animate.min.css';
import $ from 'jquery';
import LazyLoad from 'lazyload';
import bg from '../images/about_us/bg.png';
import bg4 from '../images/about_us/bg4.png';
import logoBig from '../images/about_us/logoBig.png';
import bg5 from '../images/about_us/bg5.png';
import eagle from '../images/about_us/eagle.png';
import bg2 from '../images/about_us/bg2.png';
import bg3 from '../images/about_us/bg3.png';
import phone from '../images/about_us/phone.png';


const React = require('react');
class AboutUs extends Component{

    constructor(props) {
        super(props);
        this.state = {
            //1：企业简介 2：企业文化
            currentContent:1
        }
    }
    componentDidMount() {

        //为导航添加滚动事
        window.addEventListener("scroll", (e) => {
            let scrollValue = $(document).scrollTop();
            console.log(scrollValue);
            if (scrollValue > 640) {
                $('.logoBig').addClass("bounceInLeft")
                $('.explain').addClass("bounceInRight")
            }
            if (scrollValue > 1300) {
                $('.eagle').addClass("zoomInLeft")
                $('.spirit').addClass("fadeInRight")
            }
            if (scrollValue > 580) {
                $('.phone').addClass("slideInUp")
                $('.goal').addClass("slideInRight")
            }
        })

    }

    render(){
        return (
            <div className="aboutUs">
                <div className="bg">
                    <img src={bg}/>

                    <div className="title">
                        <div className="title1">
                            <span className="one animated fadeInUp">专注</span>
                            <span className="two animated fadeInUp">品质</span>
                            <span className="three animated fadeInUp">创新</span>
                            <span className="four animated fadeInUp">进取</span>
                        </div>
                        <p className="five animated bounceInUp">
                            <span>以市场为准心</span>
                            <span>以客户为中心</span>
                            <span>以专业为核心</span>
                            <span>以诚信为良心</span>
                        </p>
                    </div>

                </div>
                <div className="basisInfo">
                    <div className="choose">
                        <div className={`synopsis ${this.state.currentContent=== 1 ? 'active':''}`} onClick={() => this.setState({currentContent:1})}>企业简介</div>
                        <div className={`culture ${this.state.currentContent=== 2 ? 'active':''}`} onClick={() => this.setState({currentContent:2})}>企业文化</div>
                    </div>
                    {
                        this.state.currentContent === 1 &&(
                            <div id="left">
                                <div className="basisItem">
                                    <div className="item">
                                        <div className="briefInfo">企业简介</div>
                                        <p>重庆派纳盛世科技有限公司以“专注、品质、创新、进取”为理念，</p>
                                        <p>按照品牌化、市场化、多元化、产业化的发展战略，</p>
                                        <p>致力于文化演出、剧目生产、公共文化、影视制作、艺术网络发展五大业务领域，</p>
                                        <p>积极拓展文化交流、大型活动等衍生业务形态。积极推进跨地域、跨国界的发展。</p>

                                        <p style={{marginTop:30}}>同时，派纳盛世将逐步建成覆盖全国主要消费区域的市场渠道网络。</p>
                                        <p>未来，派纳盛世将以优势资源为依托，</p>
                                        <p>充分利用互联网优势，继续坚持品牌化、市场化、多元化、产业化的发展战略，</p>

                                        <p style={{marginTop:30}}>以演艺运营服务为基础，以演艺内容生产为核心，以演艺渠道平台整合为要素，</p>
                                        <p>着力“互联网+”思维方式创新商业模式，加速企业规模化、产业化发展，</p>
                                        <p>完成从项目公司到演艺内容提供商、运营商的平台公司的蜕变，</p>
                                        <p>成为专业化、集约化、多元化的积极打造国际文化交流与合作的沟通交融平台。</p>
                                    </div>
                                </div>
                                <div className="pLogo">
                                    <img className="bg4" src={bg4}/>
                                    <img className="logoBig animated" src={logoBig}/>
                                    <div className="explain animated">
                                        <p className="first">派纳盛世LOGO由三部分组成</p>
                                        <p>主体部分: 派纳盛世的中文变形</p>
                                        <p>辅助部分: 派纳盛世的英文变形</p>
                                        <p>精神部分: 象征着勇往直前、敢于创新、坚韧不拔、展翅高飞的鹰</p>
                                    </div>
                                </div>
                                <div className="basisItem">
                                    <div className="item">
                                        <div className="briefInfo">派纳盛世slogan</div>
                                        <p>［异派同源 海纳百川］</p>
                                        <p>可以说这句 slogan 是对派纳盛世企业名称的诠释及升级</p>
                                        <p>即“凝聚不同的智慧、不同的观念，共同把派纳盛世的事业发展到一定的高度及一定的区域”</p>
                                    </div>
                                </div>
                                <div className="pLogo">
                                    <img className="bg5" src={bg5}/>
                                    <img className="eagle animated" src={eagle}/>
                                    <div className="spirit animated">
                                        <div className="inner"></div>
                                        <div>
                                            <p className="spiritInfo">企业精神</p>
                                            <p>
                                                主体部分：老鹰是世界上寿命最长的鸟类，它一生的年龄可达七十岁。 但要活那么长的寿命，它在四十岁时，必须做出困难却重要的决定 当老鹰活到四十岁时，它的爪子开始老化，无法有效地抓住猎物，它 的啄变得又长又弯，几乎碰到胸膛，它的翅膀变得十分沉重，因为它 的羽毛长得又浓又厚。使得飞翔十分吃力！它只有两种选择：A、等死； B、历经一个十分痛苦的蜕变过程——150 天的蜕变。它必须很努力地飞 到山顶，在悬崖上筑巢，停留在那里，不得飞翔。老鹰首先用它的喙击 打岩石，直到喙完全脱落，然后静静地等候新的喙长出来。然后，它要 再用新长出的喙，把指甲一根一根的拔出来，当新的指甲长出来后，它们 便再把羽毛一根一根的拔掉。五个月以后，新的羽毛长出来了。老鹰开始 飞翔。重新再活三十年！在我们的生命中，有时候我们也必须做出困难的 决定，开始一个更新的过程。我们必须把旧的习惯，旧的束缚抛弃，使得 我们可以重新飞翔。只要我们愿意放下旧的包袱，愿意学习新的事物，我 们才有机会能发挥我们的潜能，开创另一个崭新的未来。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        this.state.currentContent === 2&&(
                            <div id="right">
                                <div className="basisItem">
                                    <div className="item">
                                        <div className="briefInfo">企业价值观</div>
                                        <p>敢为人先 用创想创造无限价值</p>
                                        <p>责任为先 要心胸更要双肩担当</p>
                                        <p>市场为先 好产品一切基于市场</p>
                                        <p>执行为先 要计划更要雷厉风行</p>
                                        <p>树德立人 要才能更要德才兼备</p>
                                        <p>我为人人 要回报先懂如何付出</p>
                                        <p>没有个人 要领先更要团队领先</p>
                                        <p>制造卓越 用卓越的产品成就人类卓越</p>
                                    </div>
                                </div>
                                <div className="pLogo">
                                    <img className="bg2" src={bg2}/>
                                    <img className="phone animated" src={phone}/>
                                    <div className="goal animated">
                                        <p className="first">经营理念及目标</p>
                                        <p>以市场为准心</p>
                                        <p>以客户为中心</p>
                                        <p>以专业为核心</p>
                                        <p>以诚信为良心</p>
                                        <p>以每一部智能手机都能安装上我们的APP</p>
                                        <p>并不忍删除为目标</p>
                                    </div>
                                </div>
                                <div className="basisItem">
                                    <div className="item">
                                        <div className="briefInfo">企业使命及宗旨</div>
                                        <p>派纳盛世 的企业使命及宗旨</p>
                                        <p>我们用智慧制造快乐的文化消费</p>
                                        <p>我们用团结创造大家的成功分享</p>
                                        <p>我们用激情成为社会的中流砥柱</p>
                                    </div>
                                </div>
                                <div className="pLogo">
                                    <img className="bg3" src={bg3}/>
                                    <div className="philosophy">
                                        <p className="first">企业哲学</p>
                                        <p>这家企业属于你</p>
                                    </div>
                                </div>
                                <div className="basisItem">
                                    <div className="item">
                                        <div className="briefInfo">企业愿景</div>
                                        <p>人们日益提升的移动品质文化生活需求而革新 永为先驱</p>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>

        );
    }
}
export default AboutUs;