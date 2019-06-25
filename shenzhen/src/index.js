import _ from 'lodash';
// import $ from 'jquery';

require('../css/style.css')
require('../scripts/jquery-1.4.2.min')
require('../scripts/jquery.SuperSlide.2.1.1')
const echarts = require('echarts')


$(function () {
    
    $(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:7});
    
    $('.a1').mouseover(function(){
        $('.area03').addClass('area_hover');
    }).mouseout(function(){
        $('.area03').removeClass('area_hover');
    });

    $('.a2').mouseover(function(){
        $('.area01').addClass('area_hover');
    }).mouseout(function(){
        $('.area01').removeClass('area_hover');
    })

    $('.a3').mouseover(function(){
        $('.area02').addClass('area_hover');
    }).mouseout(function(){
        $('.area02').removeClass('area_hover');
    })

    $('.a4').mouseover(function(){
        $('.area04').addClass('area_hover');
    }).mouseout(function(){
        $('.area04').removeClass('area_hover');
    })

    $('.a5').mouseover(function(){
        $('.area05').addClass('area_hover');
    }).mouseout(function(){
        $('.area05').removeClass('area_hover');
    });

    $('.a6').mouseover(function(){
        $('.area10').addClass('area10_hover');
    }).mouseout(function(){
        $('.area10').removeClass('area10_hover');
    })



    $('.a7').mouseover(function(){
        $('.area06').addClass('area06_hover');
    }).mouseout(function(){
        $('.area06').removeClass('area06_hover');
    })

    $('.a8').mouseover(function(){
        $('.area07').addClass('area07_hover');
    }).mouseout(function(){
        $('.area07').removeClass('area07_hover');
    })

    $('.a9').mouseover(function(){
        $('.area09').addClass('area09_hover');
    }).mouseout(function(){
        $('.area09').removeClass('area09_hover');
    })

    $('.a10').mouseover(function(){
        $('.area08').addClass('area08_hover');
    }).mouseout(function(){
        $('.area08').removeClass('area08_hover');
    })

    $('.tips_point').mouseover(function(){
        $('.tips_point_box').show();
    }).mouseout(function(){
        $('.tips_point_box').hide();
    })



    setTimeout(function(){
        $('.case_icon,.link_icon').fadeIn();
        $('.words,.words02').css('display','block');
    },2000)

    $('.rank_list .name').click(function(){
        $('.all_list').toggle();
    })



    $('.a1').click(function(){
        $('.map').stop().addClass('hide');
        //$('.area03').hide();
        //$('.box').addClass('hideShow');
        setTimeout(function(){
            $('.map').hide();
            $('.map').removeClass('hide');
            //$('.box').hide();
            //$('.box').removeClass('hideShow');

            $('.screen02').show();
            $('.screen01').fadeOut('fast');
        },800)

    });

    $('.link_icon').click(function(){
        $('.map').stop().addClass('hide');
        $('.area_list').addClass('area_show');
        $('.chain').addClass('chain_show');
        setTimeout(function(){
            $('.map').hide();
            $('.map').removeClass('hide');


            $('.screen03').show();
            $('.screen01').fadeOut('fast');
        },1000)

    });



    $('.jt_icon').click(function(){
        $('.screen01').show();
        $(".map").show();
        $('.screen03').fadeOut('fast');
    });

    setTimeout(function(){
        $('.line').show();
    },1000);

    $('.back').click(function(){
        $('.screen01').show();
        $(".map").show();
        //$('.box').show();
        $('.screen02').hide();
    });

    setInterval(function(){
        $('.n').text((rnd(90,100)));
        $('.n1').text((rnd(90,100)));
        $('.n2').text((rnd(90,100)));
        $('.n3').text((rnd(90,100)));
        $('.n4').text((rnd(90,100)));
        $('.n5').text((rnd(90,100)));
        $('.n6').text((rnd(90,100)));
        $('.n7').text((rnd(90,100)));
        $('.n8').text((rnd(90,100)));
        $('.n9').text((rnd(90,100)));
        $('.n10').text((rnd(90,100)));
        $('.words02').text(toThousands(rnd(150000,200000)));
    },1000);

    $('.cicle_hover').mouseover(function(){
        $('.cicle_tips').show();
    }).mouseleave(function(){
        $('.cicle_tips').hide();
    });

    $('.case_icon').mouseover(function(){
        $('.case_tips').show();
    }).mouseleave(function(){
        $('.case_tips').hide();
    })

    $('.lianlu').mouseover(function(){
        $('.lianlu_tips').show();
    }).mouseleave(function(){
        $('.lianlu_tips').hide();
    })

    // echarts图表
    var dom = document.getElementById("table2");
    var myChart = echarts.init(dom);
    var app = {};
    var option = null;
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];

    app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
                left: 'left',
                center: 'center',
                right: 'right'
            }
        },
        verticalAlign: {
            options: {
                top: 'top',
                middle: 'middle',
                bottom: 'bottom'
            }
        },
        position: {
            options: echarts.util.reduce(posList, function (map, pos) {
                map[pos] = pos;
                return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 100
        }
    };

    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            var labelOption = {
                normal: {
                    rotate: app.config.rotate,
                    align: app.config.align,
                    verticalAlign: app.config.verticalAlign,
                    position: app.config.position,
                    distance: app.config.distance
                }
            };
            myChart.setOption({
                series: [{
                    label: labelOption
                }, {
                    label: labelOption
                }, {
                    label: labelOption
                }, {
                    label: labelOption
                }]
            });
        }
    };


    var labelOption = {
        normal: {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            //formatter: '{c}  {name|{a}}',
            fontSize: 16,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
        }
    };

    option = {
        textStyle:{color:'#fff'},
        color: ['#00a3d9', '#d9a300', '#ea5143', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle:{ fontSize:"50px",color:"#fff"},
            data: ['离线率', '在线率', '3天不在线']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['近一天','近两天','近三天']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '离线率',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                data: [34, 12, 23]
            },
            {
                name: '在线率',
                type: 'bar',
                label: labelOption,
                data: [220, 182, 191]
            },
            {
                name: '3天不在线',
                type: 'bar',
                label: labelOption,
                data: [50, 89, 123]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


    var dom1 = document.getElementById("table1");
    var myChart1 = echarts.init(dom1);
    var option1 = {
        textStyle:{color:"#fff"},
        title: {
            //text: '近一周案件数据'
            textStyle:{color:"#fff"}
        },

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle:{color:"#b7b5b5"},
            data:['破案数','上传数','立案数','警综上传数','视综上传数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },


        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'破案数',
                type:'line',
                stack: '总量',
                itemStyle : {
                    normal : {
                        color:'#00FF00',  //圈圈的颜色
                        lineStyle:{
                            color:'#00FF00'  //线的颜色
                        }
                    }
                },
                data:[28, 38, 48, 55, 60, 50, 40]
            },
            {
                name:'上传数',
                type:'line',
                stack: '总量',
                data:[30, 40, 50, 60, 65, 55, 45]
            },

            {
                name:'立案数',
                type:'line',
                stack: '总量',
                itemStyle : {
                    normal : {
                        color:'yellow',  //圈圈的颜色
                        lineStyle:{
                            color:'yellow'  //线的颜色
                        }
                    }
                },
                data:[30, 40, 50, 60, 65, 55, 45]
            },
            {
                name:'警综上传数',
                type:'line',
                stack: '总量',
                itemStyle : {
                    normal : {
                        color:'#24c0f6',  //圈圈的颜色
                        lineStyle:{
                            color:'#24c0f6'  //线的颜色
                        }
                    }
                },
                data:[62, 58, 88, 87, 65, 54, 90]
            },
            {
                name:'视综上传数',
                type:'line',
                stack: '总量',
                itemStyle : {
                    normal : {
                        color:'#d001fc',  //圈圈的颜色
                        lineStyle:{
                            color:'#d001fc'  //线的颜色
                        }
                    }
                },
                data:[60, 78, 68, 69, 58, 92, 89]
            }
        ]
    };

    if (option1 && typeof option1 === "object") {
        myChart1.setOption(option1, true);
    }



    var dom3 = document.getElementById("table3");
    var myChart3 = echarts.init(dom3);
    var option3 = {
        title : {
            //text: '某站点用户访问来源',
            //subtext: '纯属虚构',
            //x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle:{color:"#fff"},
            data: ['在线占比','离线占比','不在线占比']
        },
        series : [
            {
                name: '数据统计',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:10, name:'不在线占比'},
                    {value:20, name:'离线占比'},
                    {value:150, name:'在线占比'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    if (option3 && typeof option3 === "object") {
        myChart3.setOption(option3, true);
    }

});

//数字千位符
function toThousands(num) {
    var result = [ ], counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
    return result.join('');
}
//取得随机数
function rnd(n,m){
    return Math.floor(Math.random()*(m-n))+n;
}



function component() {
    const element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = `<div class="screen01">
        <div class="content">
            <div class="map">
                <a href="###" class="a1"></a>
                <a href="###" class="a2"></a>
                <a href="###" class="a3"></a>
                <a href="###" class="a4"></a>
                <a href="###" class="a5"></a>
                <a href="###" class="a6"></a>
                <a href="###" class="a7"></a>
                <a href="###" class="a8"></a>
                <a href="###" class="a9"></a>
                <a href="###" class="a10"></a>
            </div>

            <div class="area01"></div>
            <div class="area02"></div>
            <div class="area03"></div>
            <div class="area04"></div>
            <div class="area05"></div>
            <div class="area05"></div>


            <div class="area06"></div>
            <div class="area07"></div>
            <div class="area08"></div>
            <div class="area09"></div>
            <div class="area10"></div>

            <div class="words"></div>
            <div class="words02">178,095</div>

            <div class="cicle01"></div>
            <div class="cicle02"></div>
            <div class="cicle03"></div>
            <div class="cicle04"></div>

        </div>

        <!--echarts-->
        <div class="list">
            <div class="box">
                <div class="title"></div>
                <div class="echarts">
                    <div id="table1" style=" background:none; color:#fff !important; width:315px; height:250px"></div>
                </div>
                <div class="txtScroll-top">
                    <div class="name">本月案件上传分布排列榜</div>
                    <div class="hd"></div>
                    <div class="bd">
                        <ul class="infoList">
                            <li><span class="date">304宗</span><a>1.福田分局</a></li>
                            <li><span class="date">154宗</span><a>2.罗湖分局</a></li>
                            <li><span class="date">254宗</span><a>3.南山分局</a></li>
                            <li><span class="date">232宗</span><a>4.宝安分局</a></li>
                            <li><span class="date">567宗</span><a>5.盐田分局</a></li>
                            <li><span class="date">123宗</span><a>6.龙岗分局</a></li>
                            <li><span class="date">67宗</span><a>7.光明分局</a></li>
                            <li><span class="date">12宗</span><a>8.坪山分局</a></li>
                            <li><span class="date">78宗</span><a>9.龙华分局</a></li>
                            <li><span class="date">125宗</span><a>10.大鹏分局</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="title"></div>
                <div class="echarts">
                    <div id="table2" style=" background:none; color:#fff !important; width:315px; height:250px"></div>
                </div>
                <div class="txtScroll-top">
                    <div class="name">在线用户时长排行</div>
                    <div class="hd"></div>
                    <div class="bd">
                        <ul class="infoList">
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;124h35m</span><a>1.福田分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;24h34m</span><a>2.罗湖分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;24h12m</span><a>3.南山分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;45h06m</span><a>4.宝安分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;12h35m</span><a>5.盐田分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;78h35m</span><a>6.龙岗分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;34h35m</span><a>7.光明分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;54h35m</span><a>8.坪山分局</a></li>
                            <li><span class="date">34人&nbsp;&nbsp;&nbsp;87h35m</span><a>9.龙华分局</a></li>
                            <li><span class="date">12人&nbsp;&nbsp;&nbsp;90h35m</span><a>10.大鹏分局</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="title"></div>
                <div class="echarts">
                    <div id="table3" style=" background:none; color:#fff !important; width:315px; height:250px"></div>
                </div>
                <div class="txtScroll-top">
                    <div class="name">本月镜头不在线时长</div>
                    <div class="hd"></div>
                    <div class="bd">
                        <ul class="infoList">
                            <li><span class="date">12个&nbsp;&nbsp;&nbsp;24h35m</span><a>1.福田分局</a></li>
                            <li><span class="date">34个&nbsp;&nbsp;&nbsp;24h35m</span><a>2.罗湖分局</a></li>
                            <li><span class="date">33个&nbsp;&nbsp;&nbsp;24h35m</span><a>3.南山分局</a></li>
                            <li><span class="date">32个&nbsp;&nbsp;&nbsp;24h35m</span><a>4.宝安分局</a></li>
                            <li><span class="date">56个&nbsp;&nbsp;&nbsp;24h35m</span><a>5.盐田分局</a></li>
                            <li><span class="date">23个&nbsp;&nbsp;&nbsp;24h35m</span><a>6.龙岗分局</a></li>
                            <li><span class="date">56个&nbsp;&nbsp;&nbsp;24h35m</span><a>7.光明分局</a></li>
                            <li><span class="date">87个&nbsp;&nbsp;&nbsp;24h35m</span><a>8.坪山分局</a></li>
                            <li><span class="date">120个&nbsp;&nbsp;&nbsp;24h35m</span><a>9.龙华分局</a></li>
                            <li><span class="date">454个&nbsp;&nbsp;&nbsp;24h35m</span><a>10.大鹏分局</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>


        <div class="case_icon">
        </div>
        <div class="link_icon"></div>

        <div class="case_tips">


            <h3>本月案件统计</h3>
            <p>立案数: 140件</p>
            <p>上传数: 130</p>
            <p>破案数: 119件</p>
            <p>警综上传数: 158件</p>
            <p>视综上传数: 135件</p>

        </div>
    </div>

    <div class="screen02">
        <div class="detail">
            <div class="small_map"></div>
            <div class="big_map"></div>
            <div class="line"></div>

            <div class="info">
                <!--<h1>宝安区</h1>
                <p>摄像头运行数量</p>-->
                <div class="num"></div>
                <div class="back"></div>
            </div>

            <div class="words"></div>

            <div class="cicle01"></div>
            <div class="cicle02"></div>
            <div class="cicle05"></div>
            <div class="cicle06"></div>


            <div class="cicle_hover"></div>
            <div class="cicle_tips">
                <p>摄像头调用状态: 在线</p>
                <p>经度: 120°</p>
                <p>纬度: 230°</p>
                <p>视频质量: 高清状态</p>
                <p>设备运行率: <span class="n1">80</span>%</p>
                <p>带宽: 100G</p>
                <p>设备维修次数: 89次</p>
            </div>


        </div>
    </div>

    <!--链路-->
    <div class="screen03">

        <div class="words_tips">
            <ul>
                <li>
                    <p>线路总数</p>
                    <span>353490条</span>
                </li>
                <li>
                    <p>总带宽</p>
                    <span>210G</span>
                </li>
                <li>
                    <p>利用率</p>
                    <span><i class="n">93</i>%</span>
                </li>
            </ul>
        </div>

        <div class="jt_icon"></div>

        <div class="chain">
            <div class="point01"></div>
            <div class="point02"></div>
            <div class="point03"></div>
            <div class="point04"></div>
            <div class="point05"></div>
            <div class="point06"></div>
            <div class="point07"></div>
            <div class="point08"></div>
            <div class="point09"></div>
            <div class="warning"></div>
            <div class="big_point"></div>

            <div class="lianlu"></div>

            <div class="lianlu_tips">
                <p>设备状态: 正常</p>
                <p>设备安装: 李明明</p>
                <p>设备是否更换: 否</p>
                <p>连接数: 232</p>
                <p>设备运行率: <span class="n1">80</span>%</p>
                <p>带宽: 100G</p>
                <p>设备维修次数: 89次</p>
            </div>

            <div class="tips_point"></div>

            <div class="tips_point_box">
                <p>南澳街道：</p>
                <p>摄像头数量：620个</p>
                <p>摄像头分布：</p>
                <p>南澳社区 86个;</p>
                <div style=" line-height:20px;">&nbsp;&nbsp;&nbsp;&nbsp;在线数量:86个<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;离线数量:0个<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;链路状态:畅通<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;传输带宽:100M<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;当前速率：<span class="n20">1.2</span>M</div>
                <p>南渔社区 78个</p>
                <p>东渔社区 63个</p>
                <p>东山社区 70个</p>
                <p>南隆社区 62个</p>
                <p>水头沙社区 67个</p>
                <p>新大社区 65个</p>
                <p>东涌社区 78个</p>
                <p>西涌社区 70个</p>
            </div>

        </div>

        <div class="area_list">
            <ul>
                <li>
                    <div class="name">福田区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n1">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">罗湖区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n2">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">南山区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n3">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">宝安区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n4">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">盐田区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n5">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">龙岗区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n6">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">光明新区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n7">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">坪山新区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n8">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">龙华新区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n9">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>
                <li>
                    <div class="name">大鹏新区</div>
                    <p>连接数: 232</p>
                    <p>设备运行率: <span class="n10">92</span>%</p>
                    <p>带宽: 100G</p>
                    <p>设备维修次数: 89次</p>
                </li>


            </ul>
        </div>
    </div>`

    return element;
}


document.body.appendChild(component());
// 动态给body新增class
document.getElementsByTagName('body')[0].className = 'index_bg';




