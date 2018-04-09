import {Component} from 'react';
import {Icon} from 'antd';
import $ from 'jquery';
import 'animate.css/animate.min.css';

import logo from './images/logo.png';
import footer from './images/footer.png';
import qq from './images/qq.png';
import weixin from './images/weixin.png';
import weibo from './images/weibo.png';
import code from './images/20170912100703.png';
import logoBlack from './images/logoBlack.png';


import 'antd/dist/antd.css';
import './stylesheets/App.css';

const React = require('react');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNav: 'home'
        }
    }

    initSelect(preProps,nextProps) {
        if(preProps.location.pathname === nextProps.location.pathname) return;
        if (nextProps.location.pathname === '/aboutUs') this.setState({currentNav: 'aboutUs'});
        if (nextProps.location.pathname === '/') this.setState({currentNav: 'home'});
        $(window).scrollTop(0);
    }

    componentWillReceiveProps(nextProps) {
        this.initSelect(this.props,nextProps);
    }

    componentDidMount() {
        this.initSelect({location:{pathname:''}},this.props);
        //为导航添加滚动事
        window.addEventListener("scroll", (e) => {
            let scrollValue = $(document).scrollTop();
            if (scrollValue > 20) {
                $(".Nav").addClass("scroll animated")
                $(".Nav .logo").attr('src', logoBlack)
            }
            else {
                $(".Nav").removeClass("scroll animated")
                $(".Nav .logo").attr('src', logo)
            }
        })

    }

  render() {
    return (
      <div className="App">
          <div className="Nav">
              <img className="logo" src={logo} />
              <div className="right">
                  <div className={`item ${this.state.currentNav === 'home'?'active':''}`} onClick={() => this.props.history.push('/')}>
                      首页
                  </div>
                  <div className="item">
                      产品<Icon type="down"/>
                      <div>
                          <a className="animated fadeIn" href="https://www.izaopiao.com/" target="_blank">造票</a>
                      </div>
                  </div>
                  <div className={`item ${this.state.currentNav === 'aboutUs'?'active':''}`} onClick={() => this.props.history.push('/aboutUs')}>
                      关于我们
                  </div>
              </div>
          </div>

          <div className="e">
              {this.props.children}
          </div>

          <div className="footer">
              <img className="img" src={footer}/>
              <div>
                  <div className="content">
                      <p>服务电话：(023)81625553</p>
                      <p>联系邮箱：connect@pheyday.com‍</p>
                      <p>工作时间：法定工作日 9:00AM to 5:30PM</p>
                      <p>官网授权：©2017 Copyright P.HeyDay All rights reserved | 渝ICP备17011937号</p>
                  </div>

                  <div className="photo">
                      <div className="qq">
                          <img src={qq} alt=""/>
                          <div className="qqInfo">
                              <div className="inner"></div>
                              <div>
                                  <p>官方qq</p>
                                  <span>2150833560</span>
                              </div>
                          </div>
                      </div>

                      <div className="weixin">
                          <img className="weixinIcon" src={weixin} alt=""/>
                          <div className="weixinInfo">
                              <div className="inner"></div>
                              <div>
                                  <span>微信公众号</span>
                                 <img style={{width:'90px',hiegh:'70px'}} src={code}/>
                              </div>
                          </div>
                      </div>
                      <div className="weibo">
                          <img src={weibo} className=""/>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    );
  }
}

export default App;


