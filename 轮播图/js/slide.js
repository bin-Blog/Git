/**
 *ʵ��ҳ���е�banner�ֲ�
 */
$(function(){
      var page = -1; //���ÿ�ʼ�ֲ���ͼƬ�±�
      var stop = true; //�����ֲ��Ƿ�ֹͣ��true ��ֹͣ  falseֹͣ

      //ʵ��ͼƬ�ֲ�
    function slide(){
        if(stop){
            page++; //ÿ���ֲ�����ͼƬ�±��1����һ��ͼƬ��ʾ��
            if(page==5){
                page = 0; //���ֲ������һ��ͼƬ��ʱ���ٴ�ͷ��һ�ſ�ʼ
            }
            //���е�ͼƬ�����������������а�ťҲ���Ȳ�����
            $("#page-con li").css({"background":"#3e3e3e"});
            $("#focus img").fadeOut(200);
            //���±�Ϊpage������ͼƬ��ʾ����
            //����Ӧ�İ�ť����
            $("#page-con li").eq(page).css({"background":"#b61b1f"});
            $("#focus img").eq(page).fadeIn();
        }
        setTimeout(slide,1500);
    }

    slide();

    /*�����ͣ��ȥ�Ժ��ֲ�ֹͣ������ƿ����ֲ�����*/
    $("#focus").mouseover(function(){
        stop = false;//ֹͣ�ֲ�
    }).mouseout(function(){
        stop = true; //�����ֲ�
    });
 });