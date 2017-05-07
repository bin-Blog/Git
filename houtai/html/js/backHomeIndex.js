/**
 * Created by PENGBIN on 2017/3/30.
 */
$(function () {
  var timeTicket = null;
  /*
  * 配置路径*/

  require.config({
    paths:{
      echarts:"../lib/dist",
    }
  });
// 作为入口
  require([
    "echarts",
    "echarts/chart/bar",
    "echarts/chart/funnel",
    "echarts/chart/pie",
    "echarts/chart/gauge",
    "echarts/theme/macarons"
  ],function (ec) {
    /*
     * 初始化图像*/
    var chart001 = ec.init(document.getElementById('chart01'));
    var chart002 = ec.init(document.getElementById('chart02'));
    var chart003 = ec.init(document.getElementById('chart03'));

    /*
     * 绘制图形数据*/
    option1 = {
      title:{
        text:"学习人数比例",
        x:"center",
        subtext:"",
      },
      tooltip:{
        formatter:"{a}<br/>{b}:{c}%"
      },
      toolbox:{
        show:false,
        feature:{
          mark:{show:true},
          restore:{show:false},
          saveAsImage:{show:true},
        }
      },
      series:[
        {
          name:"业务指标",
          type:"gauge",
          detail:{formatter:'{value}%'},
          data:[{value:80,name:'完成率'}]
        }
      ]
    };
    option2 = {
      title:{
        text:"学习人数比例",
        x:"center",
        subtext:"",
      },
      tooltip:{
        formatter:"{a}<br/>{b}:{c}%"
      },
      toolbox:{
        show:false,
        feature:{
          mark:{show:true},
          restore:{show:false},
          saveAsImage:{show:true},
        }
      },
      series:[
        {
          name:"业务指标",
          type:"gauge",
          detail:{formatter:'{value}%'},
          data:[{value:80,name:'完成率'}]
        }
      ]
    };
    option3 = {
      title:{
        text:"学习人数比例",
        x:"center",
        subtext:"",
      },
      tooltip:{
        formatter:"{a}<br/>{b}:{c}%"
      },
      toolbox:{
        show:false,
        feature:{
          mark:{show:true},
          restore:{show:false},
          saveAsImage:{show:true},
        }
      },
      series:[
        {
          name:"业务指标",
          type:"gauge",
          detail:{formatter:'{value}%'},
          data:[{value:80,name:'完成率'}]
        }
      ]
    };
      chart001.setOption(option1);
      chart002.setOption(option2);
      chart003.setOption(option3);
  }


  );

    /*
    * 绘制图形数据*/
    /*option1 = {
      /!*
      * 标题*!/
      title:{
        text:"学习人数比例",
        x:"center",
        /!*
        * 二级标题*!/
        subtext:""
      },
      /!*
       * 工具提示箱*!/
      tooltip:{
        /!*
         * 数据比例*!/
        formatter:"{a} <br/>{b} : {c}%"
      },
      /!*
      * 工具框*!/
      toolbox: {
        show : false,
        feature : {
          mark : {show: true},
          restore : {show: false},
          saveAsImage : {show: true}
        }
      },
      /!*
      * 数据显示
      * *!/
      series : [
        {
          name:'业务指标',
          type:'gauge',
          detail : {formatter:'{value}%'},
          data:[{value: 80, name: '完成率'}]
        }
      ]
    };*/
    /*option2 = {
      /!*
      * 标题*!/
      title:{
        text:"考试通过率",
        x:"center",
        subtext:""
      },
      tooltip:{
        formatter:"{a} <br/>{b} : {c}%"
      },
      /!*legend: {
        orient : 'vertical',
        x : 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },*!/
      toolbox: {
        show : false,
        feature : {
          mark : {show: false},
          dataView : {show: true, readOnly: false},
          magicType : {
            show: false,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'left',
                max: 1548
              }
            }
          },
          restore : {show: false},
          saveAsImage : {show: false}
        }
      },
      // calculable : true,
      series : [
        {
          name:'百分比',
          type:'pie',
          radius : '55%',
          center: ['50%', '50%'],
          data:[
            {value:55, name:'已通过'},
            {value:45, name:'未通过'}
          ]
        }
      ]
    };
    option3 = {
      title : {
        text: '课程',
        subtext: '',
        x:'center'
      },
      tooltip : {
        formatter:"{a} <br/>{b} : {c}%"
      },
      /!*legend: {
        data:['蒸发量','降水量']
      },*!/
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: false},
          saveAsImage : {show: true}
        }
      },
      // calculable : true,
      xAxis : [
        {
          // type : 'category',
          data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'蒸发量',
          type:'bar',
          data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]


        }

      ]
    };*/
    // chart01.setOption(option1);





});
