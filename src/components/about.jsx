import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import "../static/about.css";

var descEng = `Hello World :)! Thanks for visiting my personal website. My name is Annie, and I'm a 4th year software engineering student at McGill Univeristy. \
I'm not going to introduce myself here as I'm busy learning programming lol. I like to grab coffee with people, and I really need a job! \
So, whether you are a recuriter😍, and/or want a potential friend🎢, and/or just want to see if the contact form works, please feel free to reach out to me!`;

var descFr = `Bonjour/soir! Merci d'avoir visité mon site personnel. Je m'appelle Annie et je suis une étudiante en génie logiciel de 4e année à l'Université McGill. \
Je ne vais pas me présenter ici car je suis occupé à apprendre la programmation lol. J'aime prendre un café avec les gens et j'ai vraiment besoin d'un travail! Alors, \
que vous soyez récurrent😍, et/ou que vous souhaitiez un ami potentiel🎢, et/ou que vous souhaitiez simplement voir si le formulaire de contact fonctionne, n'hésitez pas à me contacter!`;

var descJap = 'こんにちは！私の個人的なウェブサイトを訪問してくれてありがとうございます。私の名前はアニーです。マギル大学のソフトウェア工学の4年生です。 \
プログラミングを学ぶのに忙しいので、ここでは自己紹介はしませんです（笑）。友達とコーヒーを飲むのが好きです、そして本当に本当に仕事がしたいです！ \
だから、あなたがレキュリターであるか😍/潜在的な友人が欲しいかどうか🎢/このお問い合わせフォームをテスト欲しいなら 遠慮なく私に連絡してください！ありがとうございます!';

var descCh = '您好！我叫任星铔，现在在麦吉尔大学软件工程系大四的学生。我就不在这里介绍自己啦，因为要学习的东西很多，真的很忙哈哈哈。我喜欢和朋友喝咖啡，也很需要一个工作! \
所以，如果您是招生官😍 或者想和我做朋友🎢，或者就是想看看下面这个联系表能不能用，都请联系我! 谢谢！';

var descKr = '안녕하세요! 제 개인 웹 사이트를 방문해 주셔서 감사합니다. 내 이름이 애니입니다. 맥길 대학의 소프트웨어 공학 4 학년입니다. \
프로그래밍을 배우는 데 바쁘기 때문에 여기에서는 소개하지 않습니다 ㅋㅋㅋ. 저는 친구와 커피를 마시는 것을 좋아합니다, 그래서 모집하는 경우있는지😍 \
아니면 친구가되고 싶어는지🎢 아니면 그냥 이 문의 양식을 테스트 원한다면 언제든지 저에게 연락하십시오! 감사합니다!';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: descEng,
    };
    // this.setFrench = this.setFrench.bind(this);
  }

  setFr = () => {
    this.setState({
      title: descFr,
    });
  };

  setEng = () => {
    this.setState({
      title: descEng,
    });
  };

  setCh = () => {
    this.setState({
      title: descCh,
    });
  };

  setJap = () => {
    this.setState({
      title: descJap,
    });
  };

  setKr = () => {
    this.setState({
      title: descKr,
    });
  };

  render() {
    Aos.init({ interval: 1000 });
    return (
      <div className="about">
        <div id="smlstars"></div>
        <div id="midstars"></div>
        <div id="lrgstars"></div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <span>
                <button onClick={this.setEng}>English</button>
                <button onClick={this.setFr}>Français</button>
                <button onClick={this.setCh}>中文</button>
                <button onClick={this.setJap}>日本語</button>
                <button onClick={this.setKr}>한국어</button>
              </span>
              <br></br>
              <br></br>
              {this.state.title}
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div id="van-photo"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
